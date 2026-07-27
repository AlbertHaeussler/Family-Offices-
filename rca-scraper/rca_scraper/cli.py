"""Command-line entrypoint for rca-scraper.

Commands (increment 1):
  rca-scrape reports                      list configured reports
  rca-scrape capture [--report NAME]      log in + capture session & request
  rca-scrape probe --report NAME [--size] replay one request, inspect the response
  rca-scrape run   --report NAME [--max-tiles N]  full extraction -> SQLite + CSV
  rca-scrape export --report NAME         re-export the SQLite table to CSV
"""
from __future__ import annotations

import argparse
import sys

from .config import load_config
from .logging_setup import get_logger, setup_logging


def _cmd_reports(cfg, args) -> int:
    log = get_logger()
    if not cfg.reports:
        log.warning("No reports configured in config/reports.yaml.")
        return 0
    log.info("Configured reports:")
    for name, rep in cfg.reports.items():
        log.info("  [bold]%-14s[/bold] endpoint=%s  page_size=%d  tiling=%s",
                 name, rep.endpoint_path, rep.page_size, rep.tiling)
    return 0


def _cmd_capture(cfg, args) -> int:
    from .auth import capture
    if args.report and args.report not in cfg.reports:
        get_logger().error("Unknown report '%s'. See `rca-scrape reports`.", args.report)
        return 2
    capture(cfg, report=args.report, headless=False, reuse=args.reuse)
    return 0


def _cmd_probe(cfg, args) -> int:
    from .probe import probe
    if args.report not in cfg.reports:
        get_logger().error("Unknown report '%s'. See `rca-scrape reports`.", args.report)
        return 2
    probe(cfg, args.report, size=args.size)
    return 0


def _cmd_run(cfg, args) -> int:
    from .extract import run
    if args.report not in cfg.reports:
        get_logger().error("Unknown report '%s'. See `rca-scrape reports`.", args.report)
        return 2
    run(cfg, args.report, max_tiles=args.max_tiles, export=not args.no_export,
        reset=args.reset)
    return 0


def _cmd_investors(cfg, args) -> int:
    from .investors import fetch_investors
    fetch_investors(cfg, limit=args.limit, min_deals=args.min_deals)
    if "csv" in cfg.output_formats:
        from .extract import export_only
        try:
            export_only(cfg, "investors")
        except Exception as exc:  # noqa: BLE001
            get_logger().warning("CSV export skipped: %s", exc)
    return 0


def _cmd_diagnose(cfg, args) -> int:
    from .diagnose import diagnose_modes
    diagnose_modes(cfg, args.report)
    return 0


def _cmd_discover_endpoints(cfg, args) -> int:
    from .endpoint_discovery import discover
    discover(cfg, args.guid, property_id=args.property_id)
    return 0


def _cmd_export(cfg, args) -> int:
    from .extract import export_only
    if args.report not in cfg.reports:
        get_logger().error("Unknown report '%s'. See `rca-scrape reports`.", args.report)
        return 2
    export_only(cfg, args.report)
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(prog="rca-scrape", description="Extract data from RCA.")
    sub = p.add_subparsers(dest="command", required=True)

    sub.add_parser("reports", help="List configured reports/tables.")

    c = sub.add_parser("capture", help="Log in (headed browser) and capture session + request.")
    c.add_argument("--report", help="Save the captured search request for this report.")
    c.add_argument("--reuse", action="store_true",
                   help="Reuse the saved session (no new login/email code) if still valid.")

    pr = sub.add_parser("probe", help="Replay one captured request and inspect the response.")
    pr.add_argument("--report", required=True, help="Report name (see `reports`).")
    pr.add_argument("--size", type=int, default=3000,
                    help="Page size to request (default 3000; try large to test caps).")

    rn = sub.add_parser("run", help="Full extraction (date/map partition) -> SQLite + CSV.")
    rn.add_argument("--report", required=True, help="Report name (see `reports`).")
    rn.add_argument("--max-tiles", type=int, default=None, metavar="N",
                    help="Stop after N requests/tiles (resumable). Omit to run fully.")
    rn.add_argument("--reset", action="store_true",
                    help="Drop this report's existing rows + checkpoint and start fresh.")
    rn.add_argument("--no-export", action="store_true",
                    help="Skip the CSV export step (SQLite only).")

    ex = sub.add_parser("export", help="Re-export a report's SQLite table to CSV.")
    ex.add_argument("--report", required=True, help="Report name (see `reports`).")

    dg = sub.add_parser("diagnose-modes",
                        help="Probe which request field toggles holdings mode (headless).")
    dg.add_argument("--report", default="transactions", help="Base capture to use.")

    de = sub.add_parser("discover-endpoints",
                        help="Headlessly scan for per-investor/per-property API tabs.")
    de.add_argument("--guid", required=True, help="A company GUID (CompanyId) to scan.")
    de.add_argument("--property-id", default=None,
                    help="A PropertyId to scan property tabs (else taken from transactions).")

    inv = sub.add_parser("investors",
                         help="Fetch investor profiles (headless) for companies in transactions.")
    inv.add_argument("--limit", type=int, default=None,
                     help="Only the top N companies by deal count (great for a test run).")
    inv.add_argument("--min-deals", type=int, default=1,
                     help="Skip companies appearing in fewer than N deals (default 1).")
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    cfg = load_config()
    setup_logging(cfg.log_level, cfg.log_dir)

    handlers = {
        "reports": _cmd_reports,
        "capture": _cmd_capture,
        "probe": _cmd_probe,
        "run": _cmd_run,
        "export": _cmd_export,
        "investors": _cmd_investors,
        "diagnose-modes": _cmd_diagnose,
        "discover-endpoints": _cmd_discover_endpoints,
    }
    try:
        return handlers[args.command](cfg, args)
    except KeyboardInterrupt:
        get_logger().warning("Interrupted.")
        return 130
    except Exception as exc:  # noqa: BLE001 - top-level guard
        get_logger().error("[red]%s[/red]", exc, exc_info=cfg.log_level.upper() == "DEBUG")
        return 1


if __name__ == "__main__":
    sys.exit(main())
