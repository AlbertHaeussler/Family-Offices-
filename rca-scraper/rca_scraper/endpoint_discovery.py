"""Headless discovery of the many per-investor and per-property API endpoints
(the "zig Reiter" / tabs) without touching the flaky UI.

RCA's REST paths are predictable (companyprofile/{GUID}/player-detail,
.../player-relationships), so we probe a broad candidate list for a known
company GUID and property id, and report which ones return real JSON. Found
responses are saved for inspection so we can configure full extraction.
"""
from __future__ import annotations

from .client import RcaClient
from .config import Config
from .inspect_shape import find_arrays
from .logging_setup import get_logger
from .storage import SqliteStore

log = get_logger("discover")

# Common query strings the profile endpoints accept.
_P = "currencyId=6&dateFormat=MM/DD/YYYY&measurementId=2"
_PPAGE = _P + "&page=1&pageSize=50"

# Candidate sub-paths under /api/v1/companyprofile/{guid}/ (the investor tabs).
_COMPANY_SUBS = [
    ("player-detail", _P + "&preview=false"),
    ("player-relationships", "currencyId=6&debug=false"),
    ("player-transactions", _PPAGE),
    ("transactions", _PPAGE),
    ("player-holdings", _PPAGE),
    ("known-holdings", _PPAGE),
    ("holdings", _PPAGE),
    ("player-contacts", _P),
    ("contacts", _P),
    ("player-lender", _P),
    ("lender-detail", _P),
    ("lender-profile", _P),
    ("mortgage-debt", _PPAGE),
    ("player-debt", _PPAGE),
    ("debt", _PPAGE),
    ("gp-profile", _P),
    ("gp-detail", _P),
    ("market-coverage", _P),
    ("investment-activity", _P),
    ("property-types", _P),
    ("summary", _P),
]

# Candidate property-detail paths (numeric PropertyId and PropertyKeyId GUID).
def _property_candidates(pid: str | None, pkey: str | None) -> list[str]:
    cands: list[str] = []
    for ident in filter(None, [pid, pkey]):
        cands += [
            f"/api/v1/propertyprofile/{ident}/detail?{_P}",
            f"/api/v1/propertyprofile/{ident}?{_P}",
            f"/api/v1/property/{ident}?{_P}",
            f"/api/v1/property/{ident}/detail?{_P}",
            f"/api/v1/property/{ident}/transactions?{_P}",
            f"/api/v1/property/{ident}/income-expense?{_P}",
            f"/api/v1/property/{ident}/loans?{_P}",
            f"/api/v1/propertyprofile/{ident}/timeline?{_P}",
        ]
    return cands


def _sample_from_transactions(cfg: Config) -> tuple[str | None, str | None]:
    """Grab one PropertyId + PropertyKeyId from the extracted transactions."""
    store = SqliteStore(cfg.sqlite_path, "transactions", id_key="PropertyId")
    try:
        cols = [c for c in ("PropertyId", "PropertyKeyId") if c in store.all_columns()]
        if not cols:
            return (None, None)
        for row in store.iter_rows(cols):
            vals = dict(zip(cols, row))
            if vals.get("PropertyId"):
                return (str(vals.get("PropertyId")), vals.get("PropertyKeyId"))
    finally:
        store.close()
    return (None, None)


def _report(client: RcaClient, cfg: Config, label: str, path: str) -> None:
    status, body, nbytes = client.try_get(path)
    if status == 200 and body is not None:
        arrays = find_arrays(body)
        keys = list(body.keys())[:8] if isinstance(body, dict) else "(list)"
        biggest = f" biggest_array={arrays[0][0]}={arrays[0][1]}" if arrays else ""
        log.info("[green]200[/green] %-22s %6dB keys=%s%s", label, nbytes, keys, biggest)
        # save for inspection
        slug = label.replace("/", "_")
        out = cfg.capture_dir / "discovered" / f"scan_{slug}.json"
        out.parent.mkdir(parents=True, exist_ok=True)
        import json
        with open(out, "w", encoding="utf-8") as fh:
            json.dump(body, fh, indent=2)
    elif status == 200:
        log.info("200 %-22s (non-JSON, %dB)", label, nbytes)
    else:
        log.info("[dim]%3d %-22s[/dim]", status, label)


def discover(cfg: Config, guid: str, property_id: str | None = None) -> None:
    pid, pkey = (property_id, None)
    if pid is None:
        pid, pkey = _sample_from_transactions(cfg)
    log.info("Scanning companyprofile tabs for GUID %s", guid)
    with RcaClient(cfg) as client:
        for sub, params in _COMPANY_SUBS:
            _report(client, cfg, f"company/{sub}",
                     f"/api/v1/companyprofile/{guid}/{sub}?{params}")

        if pid or pkey:
            log.info("Scanning property-detail endpoints for PropertyId=%s KeyId=%s", pid, pkey)
            for path in _property_candidates(pid, pkey):
                label = "prop/" + path.split("/api/v1/")[1].split("?")[0]
                _report(client, cfg, label, path)
        else:
            log.warning("No PropertyId available (extract transactions first) — "
                        "skipping property-endpoint scan.")

    log.info("Done. 200-responses saved under captures/discovered/scan_*.json — "
             "upload the interesting ones.")
