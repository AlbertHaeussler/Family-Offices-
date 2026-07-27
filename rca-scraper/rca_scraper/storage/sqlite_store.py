"""SQLite staging store with a dynamic, self-widening schema.

One table per report. Because RCA rows are heterogeneous, columns are added on
the fly as new fields appear. `row_key` is the primary key, so re-inserting the
same row (e.g. from an overlapping tile) is an idempotent upsert — dedup is free
and the DB is the source of truth for resume.
"""
from __future__ import annotations

import json
import sqlite3
from pathlib import Path
from typing import Any, Iterable

from ..logging_setup import get_logger
from ..normalize import flatten_row, row_key

log = get_logger("sqlite")

# Columns every report table always has (besides the dynamic data columns).
_BASE_COLS = {"row_key": "TEXT PRIMARY KEY", "raw_json": "TEXT"}


def _qi(name: str) -> str:
    """Quote an identifier safely for SQLite."""
    return '"' + name.replace('"', '""') + '"'


class SqliteStore:
    def __init__(self, db_path: Path, report: str, id_key: str = "PropertyId"):
        self.report = report
        self.id_key = id_key
        db_path.parent.mkdir(parents=True, exist_ok=True)
        self.conn = sqlite3.connect(db_path)
        self.conn.execute("PRAGMA journal_mode=WAL")
        self._ensure_table()
        self._ensure_meta()
        self._columns = self._existing_columns()

    # --- schema -----------------------------------------------------------
    def _ensure_table(self) -> None:
        cols = ", ".join(f"{_qi(c)} {t}" for c, t in _BASE_COLS.items())
        self.conn.execute(f"CREATE TABLE IF NOT EXISTS {_qi(self.report)} ({cols})")
        self.conn.commit()

    def _ensure_meta(self) -> None:
        self.conn.execute(
            "CREATE TABLE IF NOT EXISTS _meta (report TEXT, key TEXT, value TEXT, "
            "PRIMARY KEY (report, key))"
        )
        self.conn.commit()

    def _existing_columns(self) -> set[str]:
        cur = self.conn.execute(f"PRAGMA table_info({_qi(self.report)})")
        return {r[1] for r in cur.fetchall()}

    def _add_columns(self, names: Iterable[str]) -> None:
        for name in names:
            if name in self._columns:
                continue
            self.conn.execute(
                f"ALTER TABLE {_qi(self.report)} ADD COLUMN {_qi(name)} TEXT"
            )
            self._columns.add(name)

    # --- writes -----------------------------------------------------------
    def upsert_rows(self, rows: list[dict]) -> int:
        """Insert/replace a batch of raw row dicts. Returns rows written."""
        if not rows:
            return 0
        prepared: list[tuple[str, dict, str]] = []
        new_cols: set[str] = set()
        for raw in rows:
            flat = flatten_row(raw)
            key = row_key(raw, self.id_key)
            new_cols.update(flat.keys())
            prepared.append((key, flat, json.dumps(raw, ensure_ascii=False)))
        self._add_columns(sorted(new_cols))

        for key, flat, raw_json in prepared:
            cols = ["row_key", "raw_json", *flat.keys()]
            vals = [key, raw_json, *[_scalar(v) for v in flat.values()]]
            placeholders = ", ".join("?" for _ in cols)
            collist = ", ".join(_qi(c) for c in cols)
            self.conn.execute(
                f"INSERT OR REPLACE INTO {_qi(self.report)} ({collist}) VALUES ({placeholders})",
                vals,
            )
        self.conn.commit()
        return len(prepared)

    def count(self) -> int:
        cur = self.conn.execute(f"SELECT COUNT(*) FROM {_qi(self.report)}")
        return cur.fetchone()[0]

    # --- checkpoint / meta -------------------------------------------------
    def set_meta(self, key: str, value: Any) -> None:
        self.conn.execute(
            "INSERT OR REPLACE INTO _meta (report, key, value) VALUES (?,?,?)",
            (self.report, key, json.dumps(value)),
        )
        self.conn.commit()

    def get_meta(self, key: str, default: Any = None) -> Any:
        cur = self.conn.execute(
            "SELECT value FROM _meta WHERE report=? AND key=?", (self.report, key)
        )
        row = cur.fetchone()
        return json.loads(row[0]) if row else default

    # --- read (for CSV export) --------------------------------------------
    def all_columns(self) -> list[str]:
        return [c for c in self._columns if c not in ("row_key", "raw_json")]

    def iter_rows(self, columns: list[str]) -> Iterable[tuple]:
        collist = ", ".join(_qi(c) for c in columns)
        cur = self.conn.execute(f"SELECT {collist} FROM {_qi(self.report)}")
        yield from cur

    def reset(self) -> None:
        """Drop this report's table and checkpoint meta for a clean re-run."""
        self.conn.execute(f"DROP TABLE IF EXISTS {_qi(self.report)}")
        self.conn.execute("DELETE FROM _meta WHERE report=?", (self.report,))
        self.conn.commit()
        self._ensure_table()
        self._columns = self._existing_columns()
        log.info("Reset store for report '%s'.", self.report)

    def close(self) -> None:
        self.conn.close()


def _scalar(v: Any) -> Any:
    """Coerce to a SQLite-storable scalar (bools -> int)."""
    if isinstance(v, bool):
        return int(v)
    return v
