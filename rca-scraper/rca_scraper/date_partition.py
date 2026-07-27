"""Date-range partitioning — the extraction strategy that actually works here.

The RCA search is bounded by a *geography filter* (e.g. Germany), so MapBounds
is ignored and every request returns the same global top-N. The one axis that
genuinely narrows results is the transaction DateRange. So we bisect the date
axis: request a window; if it comes back at/over the page cap it's truncated, so
split it in half and recurse. Windows under the cap are complete leaves. Rows go
to SQLite keyed by (PropertyId, DealId) — overlapping edges dedupe for free.

Before sweeping, we AUTO-DETECT the correct DateRangeType: some values mean
"all history" and ignore the dates entirely. We pick the value that measurably
shrinks resultCount, and abort loudly if none does (so we never repeat the
map-tiling mistake of looping without progress).
"""
from __future__ import annotations

import copy
from datetime import date, datetime, timedelta

from .client import RcaClient, response_get
from .config import Config, Report
from .logging_setup import get_logger
from .normalize import expand_rows
from .storage import SqliteStore

log = get_logger("date")

# DateRangeType values to try when the configured one doesn't narrow results.
_TYPE_CANDIDATES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


def _set_nested(d: dict, dotted: str, value) -> None:
    cur = d
    parts = dotted.split(".")
    for p in parts[:-1]:
        nxt = cur.get(p)
        if not isinstance(nxt, dict):
            nxt = {}
            cur[p] = nxt
        cur = nxt
    cur[parts[-1]] = value


def _get_nested(d: dict, dotted: str):
    cur = d
    for p in dotted.split("."):
        if not isinstance(cur, dict):
            return None
        cur = cur.get(p)
    return cur


def _fmt(d: date, fmt: str) -> str:
    return d.strftime(fmt)


def _payload_for(base: dict, report: Report, lo: date | None, hi: date | None,
                 dtype: int) -> dict:
    """Deep-copy the base payload and set its DateRange window + type."""
    p = copy.deepcopy(base)
    existing = _get_nested(p, report.date_path)
    dr = dict(existing) if isinstance(existing, dict) else {}
    dr["StartDate"] = _fmt(lo, report.date_format) if lo else None
    dr["EndDate"] = _fmt(hi, report.date_format) if hi else None
    dr["DateRangeType"] = dtype
    _set_nested(p, report.date_path, dr)
    return p


def _fetch(client: RcaClient, report: Report, payload: dict) -> tuple[list, int | None]:
    data = client.post(report.endpoint_path, payload)
    rows = expand_rows(response_get(data, report.rows_key) or [])
    total = response_get(data, report.total_key)
    return rows, total


def _detect_date_type(client: RcaClient, report: Report, base: dict) -> tuple[int | None, int | None]:
    """Find the DateRangeType that honours a *custom* StartDate/EndDate.

    Presets like "last 365 days" also shrink the count but ignore the dates we
    send — they'd return the same number for any window and silently cap the
    sweep. So we test each type with a SMALL and a BIG window: only a real
    custom-range type makes the count scale with window size.

    Returns (working_type_or_None, baseline_total).
    """
    _, rc_full = _fetch(client, report, base)
    log.info("Baseline resultCount (no date filter): %s", rc_full)
    if not rc_full:
        log.warning("No baseline resultCount; can't verify date filtering.")
        return report.date_type, rc_full

    small = (date(2018, 1, 1), date(2018, 12, 31))     # one year
    big = (date(2000, 1, 1), date(2024, 12, 31))       # ~25 years
    for dtype in dict.fromkeys([report.date_type, *_TYPE_CANDIDATES]):
        _, rc_s = _fetch(client, report, _payload_for(base, report, *small, dtype))
        _, rc_b = _fetch(client, report, _payload_for(base, report, *big, dtype))
        log.info("  DateRangeType=%d: 2018=%s vs 2000-2024=%s", dtype, rc_s, rc_b)
        # Custom range: both narrow the baseline AND the big window holds clearly
        # more than the small one (a preset would return the same for both).
        if (rc_s and rc_b and rc_s > 0 and rc_s < rc_full * 0.9
                and rc_b > rc_s * 1.5 and rc_b <= rc_full * 1.05):
            log.info("[green]DateRangeType=%d honours custom dates — using it.[/green]", dtype)
            return dtype, rc_full
    return None, rc_full


def extract_by_date(cfg: Config, report: Report, base: dict, store: SqliteStore,
                    *, max_requests: int | None = None) -> None:
    threshold = report.saturation      # rows: at/above this a window is 'full'
    made = 0

    with RcaClient(cfg) as client:
        # --- determine the working DateRangeType (cached across resumes) ---
        dtype = store.get_meta("date_type")
        if dtype is None:
            dtype, baseline = _detect_date_type(client, report, base)
            if baseline:
                store.set_meta("baseline_total", baseline)
            if dtype is None:
                log.error("[red]No DateRangeType narrowed the results.[/red] The date "
                          "filter isn't taking effect, so partitioning can't work. "
                          "Capture a request with a custom date range set in the UI so "
                          "we can read the right value — not proceeding.")
                return
            store.set_meta("date_type", dtype)

        # --- seed / resume the window queue -------------------------------
        overall_lo = datetime.strptime(report.date_start, "%Y-%m-%d").date()
        overall_hi = date.today() + timedelta(days=1)
        saved = store.get_meta("date_queue")
        if saved is None:
            queue: list[tuple[date, date]] = [(overall_lo, overall_hi)]
            store.set_meta("date_queue", [[str(overall_lo), str(overall_hi)]])
            log.info("Seeding date sweep %s .. %s (page_size=%d, split>=%d rows)",
                     overall_lo, overall_hi, report.page_size, threshold)
        else:
            queue = [(date.fromisoformat(a), date.fromisoformat(b)) for a, b in saved]
            log.info("Resuming date sweep: %d windows queued, %d rows stored.",
                     len(queue), store.count())

        # --- bisection loop ----------------------------------------------
        while queue:
            if max_requests is not None and made >= max_requests:
                log.warning("Hit --max-requests=%d; pausing (rerun to resume).", max_requests)
                break
            lo, hi = queue.pop(0)
            payload = _payload_for(base, report, lo, hi, dtype)
            payload[report.page_size_key] = report.page_size
            rows, rc = _fetch(client, report, payload)
            made += 1
            written = store.upsert_rows(rows) if rows else 0

            full = len(rows) >= threshold
            span_days = (hi - lo).days
            if full and span_days > 1:
                mid = lo + timedelta(days=span_days // 2)
                queue.extend([(lo, mid), (mid + timedelta(days=1), hi)])
                note = "[yellow]SPLIT[/yellow]"
            elif full:
                note = "[red]CAPPED (1-day, possible gap)[/red]"
                log.warning("Window %s is a single day but still full (%d rows).", lo, len(rows))
            else:
                note = "leaf"

            store.set_meta("date_queue", [[str(a), str(b)] for a, b in queue])
            log.info("[%s .. %s] rows=%d rc=%s stored=%d queue=%d %s",
                     lo, hi, len(rows), rc, store.count(), len(queue), note)

    if not queue:
        store.set_meta("complete", True)
        stored = store.count()
        baseline = store.get_meta("baseline_total")
        log.info("[green]Date sweep complete.[/green] Stored %d unique rows.", stored)
        if baseline:
            pct = 100 * stored / baseline if baseline else 0
            if stored < baseline * 0.98:
                log.warning("Coverage %d/%d (%.1f%%). The shortfall is likely rows "
                            "with no date (they fall outside every window). Tell the "
                            "maintainer if you need those swept separately.",
                            stored, baseline, pct)
            else:
                log.info("Coverage %d/%d (%.1f%%) — looks complete.", stored, baseline, pct)
