"""Investor metadata extraction — headless, via the companyprofile API.

We don't need the (flaky, new-tab, hang-prone) investor UI at all. Every German
transaction row already carries its Buyers/Sellers as company objects with a
GUID (CompanyId). So we:

  1. Pull the distinct company GUIDs from the transactions we already extracted
     (optionally ranked by how often / how much they transact).
  2. For each GUID, GET companyprofile/{GUID}/player-detail (+ relationships)
     directly with the saved session — no browser, no new login.

This captures exactly the investors that actually appear in German deals (the
~1k that matter), skipping the ~11k empty entries in the UI list.
"""
from __future__ import annotations

import json
from collections import Counter

from .client import RcaClient
from .config import Config
from .logging_setup import get_logger
from .storage import SqliteStore

log = get_logger("investors")

_DETAIL = ("/api/v1/companyprofile/{guid}/player-detail"
           "?currencyId=6&dateFormat=MM/DD/YYYY&measurementId=2&preview=true")
_RELS = "/api/v1/companyprofile/{guid}/player-relationships?currencyId=6&debug=false"


def company_ids_from_transactions(cfg: Config, min_deals: int = 1) -> list[tuple[str, str, int]]:
    """Return [(guid, name, deal_count)] ranked by deal count, from transactions."""
    store = SqliteStore(cfg.sqlite_path, "transactions", id_key="PropertyId")
    counts: Counter = Counter()
    names: dict[str, str] = {}
    try:
        cols = [c for c in ("Buyers", "Sellers") if c in store.all_columns()]
        if not cols:
            log.error("No Buyers/Sellers columns in transactions — extract it first.")
            return []
        for row in store.iter_rows(cols):
            for cell in row:
                if not cell:
                    continue
                try:
                    for company in json.loads(cell):
                        gid = company.get("MasterCompanyId") or company.get("CompanyId")
                        if gid:
                            counts[gid] += 1
                            names.setdefault(gid, company.get("MasterCompanyName")
                                             or company.get("CompanyName") or "")
                except (ValueError, TypeError, AttributeError):
                    continue
    finally:
        store.close()
    ranked = [(g, names.get(g, ""), c) for g, c in counts.most_common() if c >= min_deals]
    log.info("Found %d distinct companies in transactions (min_deals=%d).",
             len(ranked), min_deals)
    return ranked


def fetch_investors(cfg: Config, limit: int | None = None, min_deals: int = 1) -> None:
    """Fetch investor profiles for companies seen in transactions, ranked by activity."""
    companies = company_ids_from_transactions(cfg, min_deals=min_deals)
    if not companies:
        return
    if limit:
        companies = companies[:limit]
        log.info("Limiting to top %d companies by deal count (test run).", limit)

    store = SqliteStore(cfg.sqlite_path, "investors", id_key="CompanyId")
    done = {r[0] for r in store.iter_rows(["CompanyId"])} if "CompanyId" in store.all_columns() else set()

    ok = fail = 0
    with RcaClient(cfg) as client:
        for i, (guid, name, deals) in enumerate(companies, 1):
            if guid in done:
                continue
            try:
                detail = client.get(_DETAIL.format(guid=guid))
                rels = client.get(_RELS.format(guid=guid))
                store.upsert_rows([{
                    "CompanyId": guid,
                    "CompanyName": name,
                    "DealCount": deals,
                    "player_detail": detail,
                    "player_relationships": rels,
                }])
                ok += 1
                log.info("[%d/%d] %s (%s) — profile stored.", i, len(companies), name, guid[:8])
            except Exception as exc:  # noqa: BLE001
                fail += 1
                log.warning("[%d/%d] %s (%s) failed: %s", i, len(companies), name, guid[:8], exc)
    log.info("Investors: stored=%d, failed=%d, total in table=%d", ok, fail, store.count())
    store.close()
