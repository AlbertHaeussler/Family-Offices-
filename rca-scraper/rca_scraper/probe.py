"""`probe`: replay one captured request and inspect the response.

This is the reconnaissance-confirmation step. It answers three questions we
still can't know for certain from DevTools screenshots alone:
  1. What is the real response JSON shape? (where are the rows? where's total?)
  2. Does the server honour a larger `Size`, or cap it? (do we need tiling?)
  3. Do the configured rows_key / total_key in reports.yaml actually match?
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .client import RcaClient, build_payload, load_capture, response_get
from .config import Config
from .logging_setup import get_logger

log = get_logger("probe")

# Field names that commonly hold the row array / grand total in list APIs.
_ROWS_HINTS = ("properties", "results", "rows", "items", "records", "data", "hits")
_TOTAL_HINTS = ("total", "totalcount", "count", "totalresults", "totalrecords",
                "recordcount", "matchcount")


def _find_arrays(obj: Any, path: str = "") -> list[tuple[str, int]]:
    """Return (dotted_path, length) for every list of dicts in the tree."""
    found: list[tuple[str, int]] = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{path}.{k}" if path else k
            if isinstance(v, list) and v and isinstance(v[0], dict):
                found.append((p, len(v)))
            found.extend(_find_arrays(v, p))
    return found


def _find_totals(obj: Any, path: str = "") -> list[tuple[str, int]]:
    """Return (dotted_path, value) for int fields whose name looks like a total."""
    found: list[tuple[str, int]] = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{path}.{k}" if path else k
            if isinstance(v, int) and not isinstance(v, bool):
                if any(h in k.lower() for h in _TOTAL_HINTS):
                    found.append((p, v))
            elif isinstance(v, dict):
                found.extend(_find_totals(v, p))
    return found


def probe(cfg: Config, report_name: str, size: int) -> None:
    report = cfg.reports[report_name]
    capture = load_capture(cfg, report_name)
    payload = build_payload(capture, report, size=size)

    log.info("Probing report '[bold]%s[/bold]' with %s=%d ...",
             report_name, report.page_size_key, size)

    with RcaClient(cfg) as client:
        data = client.post(report.endpoint_path, payload)

    # Save the raw response so we can eyeball / share the exact shape.
    out = cfg.output_dir / f"probe_{report_name}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2)
    log.info("Saved raw response -> %s", out)

    # --- top-level shape --------------------------------------------------
    top = list(data.keys()) if isinstance(data, dict) else f"(type={type(data).__name__})"
    log.info("Top-level keys: %s", top)

    # --- auto-detect the row array & total -------------------------------
    arrays = sorted(_find_arrays(data), key=lambda t: -t[1])
    if arrays:
        log.info("Arrays of objects found (path -> count):")
        for p, n in arrays[:8]:
            hint = "  <-- likely rows" if any(h in p.lower() for h in _ROWS_HINTS) else ""
            log.info("    %-40s %6d%s", p, n, hint)
    else:
        log.warning("No arrays of objects found — response shape is unexpected.")

    totals = _find_totals(data)
    if totals:
        log.info("Total-like fields found (path -> value):")
        for p, v in totals:
            log.info("    %-40s %d", p, v)

    # --- verify the configured keys --------------------------------------
    rows = response_get(data, report.rows_key)
    total = response_get(data, report.total_key)
    log.info("[bold]Configured keys check[/bold] (from reports.yaml):")
    log.info("    rows_key  '%s' -> %s",
             report.rows_key,
             f"{len(rows)} rows" if isinstance(rows, list) else f"MISS ({rows!r})")
    log.info("    total_key '%s' -> %s", report.total_key,
             total if total is not None else "MISS")

    if isinstance(rows, list) and rows:
        log.info("Sample row keys: %s", list(rows[0].keys())[:25])

    # --- pagination verdict ----------------------------------------------
    if isinstance(rows, list) and total:
        if len(rows) >= total:
            log.info("[green]Server returned ALL %d rows in one request — no tiling "
                     "needed for this report.[/green]", total)
        elif len(rows) < size:
            log.warning("Requested Size=%d but got %d rows while total=%d. Server caps "
                        "the page below the requested Size -> pagination/tiling required.",
                        size, len(rows), total)
        else:
            log.info("Got %d of %d rows (Size honoured). Need pagination to fetch the "
                     "remaining %d.", len(rows), total, total - len(rows))
