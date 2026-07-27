"""Headless probe to find which request field toggles the propertySearch mode
(transactions vs holdings vs loans), so we can extract holdings without touching
the flaky browser UI.

The response always reports isTransactionsRequest/isHoldingsRequest and carries
pinTransactionItems / pinHoldingItems / pinLoanItems arrays — but the request
field that selects the mode is unknown. We try a small matrix and report which
combination actually fills pinHoldingItems.
"""
from __future__ import annotations

import copy
import json

from .client import RcaClient, load_capture
from .config import Config
from .logging_setup import get_logger

log = get_logger("diagnose")

# Candidate overrides to try on the captured transactions payload.
_CANDIDATES = [
    {},                                                # baseline (transactions)
    {"RequestType": 1},
    {"RequestType": 2},
    {"PropertiesRequestType": 0},
    {"PropertiesRequestType": 2},
    {"PropertiesRequestType": 3},
    {"RequestType": 1, "PropertiesRequestType": 2},
    {"RequestType": 1, "PropertiesRequestType": 1},
    {"RequestType": 2, "PropertiesRequestType": 2},
]


def diagnose_modes(cfg: Config, report_name: str = "transactions") -> None:
    report = cfg.reports[report_name]
    capture = load_capture(cfg, report_name)
    base = json.loads(capture["post_data"])
    base["Size"] = 500  # keep responses small during the probe

    log.info("Trying %d candidate mode toggles on %s ...",
             len(_CANDIDATES), report.endpoint_path)
    log.info("%-42s %8s %8s %8s %10s", "override", "txn", "holding", "loan", "resultCount")

    winners: list[dict] = []
    with RcaClient(cfg) as client:
        for ov in _CANDIDATES:
            payload = copy.deepcopy(base)
            payload.update(ov)
            try:
                data = client.post(report.endpoint_path, payload).get("data", {})
            except Exception as exc:  # noqa: BLE001
                log.warning("%-42s ERROR: %s", json.dumps(ov), exc)
                continue
            txn = len(data.get("pinTransactionItems") or [])
            hold = len(data.get("pinHoldingItems") or [])
            loan = len(data.get("pinLoanItems") or [])
            rc = data.get("resultCount")
            log.info("%-42s %8d %8d %8d %10s", json.dumps(ov), txn, hold, loan, rc)
            if hold > 0:
                winners.append(ov)

    if winners:
        log.info("[green]Holdings mode found![/green] These override(s) fill "
                 "pinHoldingItems: %s", winners)
        log.info("-> set this as the `overrides` for the holdings report and extract "
                 "it like transactions.")
    else:
        log.warning("None of the candidates produced holdings rows. We'll need to "
                    "capture the real HOLDINGS-toggle request from the UI (one click, "
                    "no investor profile involved).")


def diagnose_investor_filter(cfg: Config, guid: str,
                             report_name: str = "transactions") -> None:
    """Find how to filter propertySearch to a single investor (company).

    If we can restrict the search to one company, we get that investor's deals
    AND holdings (with full 97-field per-object detail) straight from the
    endpoint we already have — no UI, no per-tab endpoints.
    """
    report = cfg.reports[report_name]
    base = json.loads(load_capture(cfg, report_name)["post_data"])
    base["Size"] = 500

    candidates: list[tuple[str, dict]] = [
        ("InvestorGroupFilters=[guid]", {"InvestorGroupFilters": [guid]}),
        ("InvestorGroupFilters=[{id}]", {"InvestorGroupFilters": [{"id": guid}]}),
        ("InvestorGroupFilters=[{companyId}]", {"InvestorGroupFilters": [{"companyId": guid}]}),
        ("InvestorGroupFilters=[{id,type:0}]", {"InvestorGroupFilters": [{"id": guid, "type": 0}]}),
        ("InvestorGroupFilters=[{id,name,type:8}]",
         {"InvestorGroupFilters": [{"id": guid, "name": "", "type": 8}]}),
        ("InvestorGroupFilters=[{masterCompanyId}]",
         {"InvestorGroupFilters": [{"masterCompanyId": guid}]}),
        ("InvestorGroupFilters=[{companyId,capitalRole:owner}]",
         {"InvestorGroupFilters": [{"companyId": guid, "capitalRole": "owner"}]}),
        ("CompanyIds=[guid]", {"CompanyIds": [guid]}),
        ("InvestorIds=[guid]", {"InvestorIds": [guid]}),
        ("RolesQueryWordFilters=[{id}]", {"RolesQueryWordFilters": [{"id": guid}]}),
        ("KeywordQueryWordFilters=[{id}]", {"KeywordQueryWordFilters": [{"id": guid}]}),
    ]

    log.info("Baseline (no investor filter) vs %d candidate filters ...", len(candidates))
    with RcaClient(cfg) as client:
        base_rc = (client.post(report.endpoint_path, base).get("data") or {}).get("resultCount")
        log.info("%-44s resultCount=%s", "BASELINE", base_rc)
        hits = []
        for label, patch in candidates:
            payload = copy.deepcopy(base)
            payload.update(patch)
            try:
                data = client.post(report.endpoint_path, payload).get("data", {})
            except Exception as exc:  # noqa: BLE001
                log.warning("%-44s ERROR: %s", label, exc)
                continue
            rc = data.get("resultCount")
            txn = len(data.get("pinTransactionItems") or [])
            mark = ""
            if rc is not None and base_rc and 0 < rc < base_rc * 0.5:
                mark = "  <-- FILTER WORKS"
                hits.append(label)
            log.info("%-44s resultCount=%-7s txn=%-5d%s", label, rc, txn, mark)
    if hits:
        log.info("[green]Investor filter found:[/green] %s", hits)
    else:
        log.warning("No candidate narrowed the results — the investor filter uses a "
                    "different shape; we'll read it from one UI capture.")
