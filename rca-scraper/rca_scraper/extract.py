"""`run` / `export`: full extraction of a report into SQLite + CSV.

Orchestrates: load the captured request -> build the replay payload -> drive the
quadtree tiler into the SQLite staging store -> export a clean CSV.
"""
from __future__ import annotations

from .client import RcaClient, build_payload, load_capture, response_get
from .config import Config, Report
from .logging_setup import get_logger
from .normalize import expand_rows
from .storage import SqliteStore, export_csv
from .tiling import extract_report

log = get_logger("extract")


def run(cfg: Config, report_name: str, *, max_tiles: int | None = None,
        export: bool = True) -> None:
    report = cfg.reports[report_name]
    if report.endpoint_path == "TODO" or report.rows_key == "TODO":
        log.error("Report '%s' isn't configured yet (endpoint/rows still TODO). "
                  "Run `capture` visiting its tab, then share captures/discovered.json.",
                  report_name)
        return

    capture = load_capture(cfg, report_name)
    payload_base = build_payload(capture, report)

    store = SqliteStore(cfg.sqlite_path, report_name, id_key=report.id_key)
    try:
        if store.get_meta("complete"):
            log.info("Report '%s' already complete (%d rows). Delete its table/"
                     "checkpoint to re-run.", report_name, store.count())
        elif report.tiling:
            stats = extract_report(cfg, report, capture, payload_base, store,
                                   max_tiles=max_tiles)
            log.info("Tiles processed=%d, rows stored=%d, saturated-at-min=%d",
                     stats.processed, store.count(), stats.saturated_leaves)
        else:
            _run_flat(cfg, report, payload_base, store)

        if export and "csv" in cfg.output_formats:
            out = cfg.output_dir / f"{report_name}.csv"
            export_csv(store, out)
    finally:
        store.close()


def _run_flat(cfg: Config, report: Report, payload_base: dict, store: SqliteStore) -> None:
    """Single-request (or big-Size) fetch for non-map, flat-list tables."""
    with RcaClient(cfg) as client:
        data = client.post(report.endpoint_path, payload_base)
    rows = expand_rows(response_get(data, report.rows_key) or [])
    total = response_get(data, report.total_key)
    written = store.upsert_rows(rows)
    store.set_meta("complete", True)
    log.info("Fetched %d rows (search reports %s) -> stored %d.",
             len(rows), total if total is not None else "?", written)
    if total and len(rows) < total:
        log.warning("Only %d of %d rows returned — this table may paginate; "
                    "we'll add paging once we see its request shape.", len(rows), total)


def export_only(cfg: Config, report_name: str) -> None:
    report = cfg.reports[report_name]
    store = SqliteStore(cfg.sqlite_path, report_name, id_key=report.id_key)
    try:
        out = cfg.output_dir / f"{report_name}.csv"
        export_csv(store, out)
    finally:
        store.close()
