"""MapBounds quadtree tiling — the mechanism that beats the ~2,596-row cap.

The RCA search returns at most ~2,596 detailed rows for a given map rectangle,
no matter how large `Size` is. So we cover the globe with a quadtree: request a
tile; if it comes back saturated (>= `saturation` rows) it's truncated, so we
split it into four and recurse. Sub-cap tiles are complete leaves. All rows go
to SQLite keyed by row_key, so overlaps between adjacent tiles dedupe for free.

The work queue is persisted after every tile, so an interrupted run resumes
exactly where it left off.
"""
from __future__ import annotations

import time
from dataclasses import dataclass

from .client import RcaClient, response_get
from .config import Config, Report
from .logging_setup import get_logger
from .normalize import expand_rows
from .storage import SqliteStore

log = get_logger("tiling")

Tile = tuple[float, float, float, float]  # (west, south, east, north)


def _bounds_to_mapbounds(existing: dict | None, tile: Tile) -> dict:
    """Build the MapBounds payload for a tile, preserving any extra keys."""
    w, s, e, n = tile
    mb = dict(existing or {})
    mb["northeast"] = {"latitude": n, "longitude": e}
    mb["southwest"] = {"latitude": s, "longitude": w}
    return mb


def _split(tile: Tile) -> list[Tile]:
    w, s, e, n = tile
    mw, mh = (w + e) / 2.0, (s + n) / 2.0
    return [
        (w, s, mw, mh), (mw, s, e, mh),
        (w, mh, mw, n), (mw, mh, e, n),
    ]


def _too_small(tile: Tile, min_deg: float) -> bool:
    w, s, e, n = tile
    return (e - w) < min_deg or (n - s) < min_deg


@dataclass
class TileStats:
    processed: int = 0
    saturated_leaves: int = 0
    rows_seen: int = 0


def extract_report(cfg: Config, report: Report, capture: dict, payload_base: dict,
                   store: SqliteStore, *, max_tiles: int | None = None) -> TileStats:
    """Drive the quadtree extraction for one report into `store`."""
    stats = TileStats()

    # --- resume: reload queue from checkpoint, else seed with start bounds ---
    if report.bounds and len(report.bounds) == 4:
        world: Tile = tuple(float(x) for x in report.bounds)  # [w,s,e,n]
    else:
        wb = cfg.world_bounds
        world = (wb["west"], wb["south"], wb["east"], wb["north"])
    queue: list[Tile] = [tuple(t) for t in store.get_meta("queue", default=None) or []]
    started = store.get_meta("started", default=False)
    if not started:
        queue = [world]
        store.set_meta("started", True)
        store.set_meta("queue", [list(t) for t in queue])
        log.info("Seeding quadtree with start bounds %s", world)
    else:
        log.info("Resuming: %d tiles queued, %d rows already stored.",
                 len(queue), store.count())

    existing_mb = payload_base.get("MapBounds")
    total_target = store.get_meta("result_count_hint")

    with RcaClient(cfg) as client:
        while queue:
            if max_tiles is not None and stats.processed >= max_tiles:
                log.warning("Reached --max-tiles=%d; pausing (run again to resume).",
                            max_tiles)
                break

            tile = queue.pop(0)
            payload = dict(payload_base)
            payload["MapBounds"] = _bounds_to_mapbounds(existing_mb, tile)

            data = client.post(report.endpoint_path, payload)
            raw_rows = response_get(data, report.rows_key) or []
            rows = expand_rows(raw_rows)  # portfolio wrappers -> individual rows
            result_count = response_get(data, report.total_key)
            if total_target is None and result_count:
                total_target = result_count
                store.set_meta("result_count_hint", result_count)

            written = store.upsert_rows(rows) if rows else 0
            stats.processed += 1
            stats.rows_seen += written

            # Saturation is judged on the CAPPED quantity (pins returned), not
            # the post-expansion count.
            saturated = len(raw_rows) >= report.saturation
            if saturated and not _too_small(tile, cfg.min_tile_degrees):
                queue.extend(_split(tile))
                marker = "[yellow]SPLIT[/yellow]"
            elif saturated:
                stats.saturated_leaves += 1
                marker = "[red]CAPPED (min size)[/red]"
                log.warning("Tile %s still saturated at min size — possible gaps here.", tile)
            else:
                marker = "leaf"

            store.set_meta("queue", [list(t) for t in queue])
            log.info("tile #%d %s pins=%d rows=%d stored=%d queue=%d %s",
                     stats.processed, _fmt(tile), len(raw_rows), len(rows),
                     store.count(), len(queue), marker)

            time.sleep(cfg.request_delay)

    if not queue:
        store.set_meta("complete", True)
        log.info("[green]Quadtree exhausted.[/green] Stored %d unique rows"
                 "%s.", store.count(),
                 f" (search reported ~{total_target})" if total_target else "")
    return stats


def _fmt(tile: Tile) -> str:
    w, s, e, n = tile
    return f"[{w:.2f},{s:.2f}..{e:.2f},{n:.2f}]"
