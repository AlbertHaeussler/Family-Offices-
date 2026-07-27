"""Export a report's SQLite table to a clean CSV with sensible column order."""
from __future__ import annotations

import csv
from pathlib import Path

from ..logging_setup import get_logger

log = get_logger("csv")

# High-value columns pushed to the front; the rest follow alphabetically.
_PRIORITY = [
    "PropertyId", "DealId", "PropertyName", "Address", "City", "PostalCode",
    "StateProv", "Country", "CountryCode", "Market", "SubMarket",
    "PropertyType", "PropertySubType", "Units", "Sf", "YearBuilt",
    "TransactionType", "TransactionStatus", "StatusDateString",
    "StatusPrice", "TotalDealPrice", "StatusPricePerUnit", "StatusCapRate",
    "BuyersNames", "SellersNames", "LendersNames",
    "BuyerCapitalGroup", "SellerCapitalGroup",
    "Latitude", "Longitude",
]


def _ordered_columns(available: list[str]) -> list[str]:
    avail = set(available)
    front = [c for c in _PRIORITY if c in avail]
    rest = sorted(c for c in avail if c not in set(front))
    return front + rest


def export_csv(store, out_path: Path) -> int:
    """Write the store's table to CSV. Returns the number of data rows."""
    columns = _ordered_columns(store.all_columns())
    if not columns:
        log.warning("No columns to export for '%s'.", store.report)
        return 0
    out_path.parent.mkdir(parents=True, exist_ok=True)
    n = 0
    with open(out_path, "w", newline="", encoding="utf-8-sig") as fh:
        writer = csv.writer(fh)
        writer.writerow(columns)
        for row in store.iter_rows(columns):
            writer.writerow(["" if v is None else v for v in row])
            n += 1
    log.info("Wrote %d rows x %d cols -> %s", n, len(columns), out_path)
    return n
