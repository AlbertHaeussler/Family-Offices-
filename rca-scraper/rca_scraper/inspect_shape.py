"""Shared response-shape heuristics: find the row array(s) and total field(s).

Used by `probe` (single endpoint) and `capture`/`discover` (many endpoints) so
they agree on where the data lives in an unfamiliar JSON response.
"""
from __future__ import annotations

from typing import Any

ROWS_HINTS = ("items", "results", "rows", "records", "properties", "data", "hits",
              "players", "investors", "funds", "list")
TOTAL_HINTS = ("total", "totalcount", "count", "resultcount", "numberof",
               "totalresults", "totalrecords", "recordcount", "matchcount")


def find_arrays(obj: Any, path: str = "") -> list[tuple[str, int]]:
    """(dotted_path, length) for every list-of-dicts in the tree, biggest first."""
    found: list[tuple[str, int]] = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{path}.{k}" if path else k
            if isinstance(v, list) and v and isinstance(v[0], dict):
                found.append((p, len(v)))
            found.extend(find_arrays(v, p))
    return sorted(found, key=lambda t: -t[1])


def find_totals(obj: Any, path: str = "") -> list[tuple[str, int]]:
    """(dotted_path, value) for int fields whose name looks like a total."""
    found: list[tuple[str, int]] = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{path}.{k}" if path else k
            if isinstance(v, int) and not isinstance(v, bool):
                if any(h in k.lower() for h in TOTAL_HINTS):
                    found.append((p, v))
            elif isinstance(v, dict):
                found.extend(find_totals(v, p))
    return found


def best_rows_key(data: Any) -> str | None:
    """Best guess at the row-array path: prefer hinted names, else the longest."""
    arrays = find_arrays(data)
    if not arrays:
        return None
    hinted = [p for p, _ in arrays if any(h in p.lower() for h in ROWS_HINTS)]
    return hinted[0] if hinted else arrays[0][0]
