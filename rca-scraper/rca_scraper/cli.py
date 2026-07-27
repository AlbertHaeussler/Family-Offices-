"""Command-line entrypoint for rca-scraper.

Commands (increment 1):
  rca-scrape reports                      list configured reports
  rca-scrape capture [--report NAME]      log in + capture session & request
  rca-scrape probe --report NAME [--size] replay one request, inspect the response

Later increments add:  run (full extraction), export, integrate.
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
    capture(cfg, report=args.report, headless=False)
    return 0


def _cmd_probe(cfg, args) -> int:
    from .probe import probe
    if args.report not in cfg.reports:
        get_logger().error("Unknown report '%s'. See `rca-scrape reports`.", args.report)
        return 2
    probe(cfg, args.report, size=args.size)
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(prog="rca-scrape", description="Extract data from RCA.")
    sub = p.add_subparsers(dest="command", required=True)

    sub.add_parser("reports", help="List configured reports/tables.")

    c = sub.add_parser("capture", help="Log in (headed browser) and capture session + request.")
    c.add_argument("--report", help="Save the captured search request for this report.")

    pr = sub.add_parser("probe", help="Replay one captured request and inspect the response.")
    pr.add_argument("--report", required=True, help="Report name (see `reports`).")
    pr.add_argument("--size", type=int, default=3000,
                    help="Page size to request (default 3000; try large to test caps).")
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    cfg = load_config()
    setup_logging(cfg.log_level, cfg.log_dir)

    handlers = {
        "reports": _cmd_reports,
        "capture": _cmd_capture,
        "probe": _cmd_probe,
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
