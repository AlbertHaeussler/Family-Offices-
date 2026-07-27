"""Direct HTTP client that replays captured RCA API requests via httpx.

Handles: HTTP/2, the rotating `rcajwt` cookie (persisted back after each call),
retries with exponential backoff, and the async 202 "still processing" case.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

import httpx
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_exponential,
)

from .auth import cookies_for_httpx, load_session
from .config import Config, Report
from .logging_setup import get_logger

log = get_logger("client")


class RetryableStatus(Exception):
    """Raised for transient statuses (202 processing, 429, 5xx) to trigger retry."""


def response_get(payload: dict, dotted: str, default: Any = None) -> Any:
    """Read a nested value from a response dict by dotted path."""
    cur: Any = payload
    for part in dotted.split("."):
        if isinstance(cur, list):
            try:
                cur = cur[int(part)]
                continue
            except (ValueError, IndexError):
                return default
        if not isinstance(cur, dict) or part not in cur:
            return default
        cur = cur[part]
    return cur


def load_capture(cfg: Config, report_name: str) -> dict:
    path = cfg.capture_file(report_name)
    if not path.exists():
        raise FileNotFoundError(
            f"No capture for '{report_name}' at {path}. "
            f"Run: rca-scrape capture --report {report_name}"
        )
    with open(path, "r", encoding="utf-8") as fh:
        return json.load(fh)


def build_payload(capture: dict, report: Report, *, size: int | None = None,
                  extra: dict | None = None) -> dict:
    """Parse the captured request body and apply overrides + page size."""
    raw = capture.get("post_data")
    if not raw:
        raise ValueError("Captured request has no body to replay.")
    payload = json.loads(raw)

    # Force the report's mode flags (e.g. transactions vs holdings).
    for k, v in (report.overrides or {}).items():
        payload[k] = v

    # Set page size (defaults to the report's configured page_size).
    payload[report.page_size_key] = size if size is not None else report.page_size

    if extra:
        payload.update(extra)
    return payload


class RcaClient:
    """Thin wrapper around an authenticated httpx client for the RCA API."""

    def __init__(self, cfg: Config):
        self.cfg = cfg
        self.session_file = cfg.session_file()
        self._storage_state = load_session(self.session_file)
        cookies = cookies_for_httpx(self._storage_state)
        if "rcajwt" not in cookies:
            log.warning("Session has no rcajwt cookie; requests will likely 401.")

        self._client = httpx.Client(
            base_url=cfg.base_url,
            http2=cfg.http2,
            timeout=cfg.timeout_seconds,
            cookies=cookies,
            follow_redirects=True,
            headers={
                "origin": cfg.origin,
                "referer": cfg.origin + "/",
                "accept": "application/json, text/plain, */*",
                "content-type": "application/json",
            },
        )

    def __enter__(self) -> "RcaClient":
        return self

    def __exit__(self, *exc) -> None:
        self.close()

    def close(self) -> None:
        self._persist_cookies()
        self._client.close()

    def _persist_cookies(self) -> None:
        """Write the (rotated) cookies back into the stored session file."""
        jar = {c.name: c.value for c in self._client.cookies.jar}
        changed = False
        cookies = self._storage_state.get("cookies", [])
        by_name = {c["name"]: c for c in cookies}
        for name, value in jar.items():
            if name in by_name:
                if by_name[name].get("value") != value:
                    by_name[name]["value"] = value
                    changed = True
            else:
                cookies.append({"name": name, "value": value,
                                "domain": ".rcanalytics.com", "path": "/"})
                changed = True
        if changed:
            self._storage_state["cookies"] = cookies
            with open(self.session_file, "w", encoding="utf-8") as fh:
                json.dump(self._storage_state, fh, indent=2)
            log.debug("Persisted rotated session cookies.")

    def post(self, path: str, payload: dict, extra_headers: dict | None = None) -> dict:
        cfg = self.cfg

        @retry(
            reraise=True,
            stop=stop_after_attempt(cfg.retries + 1),
            wait=wait_exponential(multiplier=cfg.backoff_base, min=cfg.backoff_base),
            retry=retry_if_exception_type((httpx.TransportError, RetryableStatus)),
        )
        def _do() -> dict:
            resp = self._client.post(path, json=payload, headers=extra_headers or {})
            if resp.status_code == 202:
                raise RetryableStatus("202 Accepted (still processing) — retrying")
            if resp.status_code in (429,) or resp.status_code >= 500:
                raise RetryableStatus(f"{resp.status_code} — retrying")
            if resp.status_code == 401:
                raise RuntimeError(
                    "401 Unauthorized — the session expired. Re-run `rca-scrape capture`."
                )
            resp.raise_for_status()
            return resp.json()

        return _do()
