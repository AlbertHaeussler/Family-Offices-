"""Turn raw RCA row objects into flat, storage-friendly dicts (lossless).

RCA rows are heterogeneous (fields are omitted when null, ~76 shapes observed)
and contain nested lists (Buyers/Sellers/Lenders/Brokers). We keep every field:
scalars as-is, nested structures as JSON strings, plus a few flattened
convenience columns (e.g. BuyersNames) for readability and Layer-2 mapping.
"""
from __future__ import annotations

import hashlib
import json
from typing import Any

# Nested party lists we also flatten into a readable "; "-joined names column.
_PARTY_LISTS = {
    "Buyers": "BuyersNames",
    "Sellers": "SellersNames",
    "Lenders": "LendersNames",
    "BuyerBrokers": "BuyerBrokersNames",
    "SellerBrokers": "SellerBrokersNames",
}


def _join_company_names(value: Any) -> str | None:
    if not isinstance(value, list):
        return None
    names = []
    for item in value:
        if isinstance(item, dict):
            name = item.get("CompanyName") or item.get("MasterCompanyName") or item.get("Name")
            if name:
                names.append(str(name))
    return "; ".join(names) if names else None


# Fields whose value depends on the *search*, not the row — excluded from the
# content-hash fallback so the same row hashes identically across tiles.
_VOLATILE = {"DistanceFromSearchPoint"}


def expand_rows(rows: list[dict]) -> list[dict]:
    """Flatten portfolio wrapper pins into their individual property rows.

    A portfolio pin looks like {"PortfolioTransactions": [<row>, <row>, ...]};
    each inner row is a full property with its own PropertyId/DealId. Expanding
    them captures every property in a portfolio deal and gives every row a
    stable id for de-duplication.
    """
    out: list[dict] = []
    for r in rows:
        inner = r.get("PortfolioTransactions")
        if isinstance(inner, list) and inner:
            out.extend(inner)
        else:
            out.append(r)
    return out


def row_key(row: dict, id_key: str = "PropertyId") -> str:
    """Stable de-duplication key for a row across overlapping tiles.

    Normal rows key on (PropertyId, DealId); the rare id-less row falls back to
    a content hash (minus search-dependent fields) so it is never dropped.
    """
    pid = row.get(id_key)
    if pid is not None:
        return f"pd:{pid}:{row.get('DealId')}"
    key_guid = row.get("PropertyKeyId")
    if key_guid:
        return f"k:{key_guid}"
    stable = {k: v for k, v in row.items() if k not in _VOLATILE}
    digest = hashlib.sha1(
        json.dumps(stable, sort_keys=True, ensure_ascii=False).encode("utf-8")
    ).hexdigest()
    return f"h:{digest}"


def flatten_row(row: dict) -> dict:
    """Flatten one row: scalars kept, nested -> JSON, plus derived name columns."""
    out: dict[str, Any] = {}
    for k, v in row.items():
        if isinstance(v, (dict, list)):
            out[k] = json.dumps(v, ensure_ascii=False)
        else:
            out[k] = v
    for src, dst in _PARTY_LISTS.items():
        if src in row:
            joined = _join_company_names(row[src])
            if joined is not None:
                out[dst] = joined
    return out
