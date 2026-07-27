"""Authentication + request capture via a headed Playwright browser.

Why this design (see README "Auth" section):
  * The `rcajwt` session cookie is HttpOnly, so JavaScript/HTTP clients can't
    mint it — only a real logged-in browser has it.
  * The login itself is a device-authorization/SSO flow that's fragile to
    automate. So we don't automate it: YOU log in by hand once, and we capture
    the resulting cookie + the exact search request the app fires.
  * Everything heavy afterwards runs as fast direct httpx calls reusing that
    cookie (see client.py).
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .config import Config
from .logging_setup import get_logger

log = get_logger("auth")


def _write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2)


def load_session(session_file: Path) -> dict:
    """Load a persisted Playwright storage_state (cookies + origins)."""
    if not session_file.exists():
        raise FileNotFoundError(
            f"No session found at {session_file}. Run `rca-scrape capture` first."
        )
    with open(session_file, "r", encoding="utf-8") as fh:
        return json.load(fh)


def cookies_for_httpx(storage_state: dict) -> dict[str, str]:
    """Flatten Playwright storage_state cookies into a name->value dict."""
    return {c["name"]: c["value"] for c in storage_state.get("cookies", [])}


def has_auth_cookie(storage_state: dict, name: str = "rcajwt") -> bool:
    return any(c.get("name") == name for c in storage_state.get("cookies", []))


def capture(cfg: Config, report: str | None = None, headless: bool = False) -> None:
    """Open a browser, let the user log in + drive the table, then persist the
    session cookies and the intercepted API request(s).

    Args:
        report: if given, the captured `search` request is saved as that
                report's capture_file so `probe`/`run` can replay it.
    """
    # Imported lazily so the rest of the CLI works even before `playwright
    # install` has been run.
    from playwright.sync_api import sync_playwright

    captured: dict[str, dict] = {}  # url -> {method, url, headers, post_data}
    sniff = cfg.sniff_url_contains

    def on_request(request) -> None:
        if request.method not in ("POST", "GET"):
            return
        if not any(s in request.url for s in sniff):
            return
        # Keep the most recent request per URL (later ones carry real filters).
        headers = {
            k: v
            for k, v in request.headers.items()
            # cookie is handled via the session jar; host/content-length are per-call.
            if k.lower() not in ("cookie", "content-length", "host")
        }
        captured[request.url] = {
            "method": request.method,
            "url": request.url,
            "headers": headers,
            "post_data": request.post_data,
        }
        log.debug("captured %s %s", request.method, request.url)

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=headless)
        context = browser.new_context()
        page = context.new_page()
        page.on("request", on_request)

        page.goto(cfg.base_url, wait_until="domcontentloaded")

        log.info("[bold cyan]A browser window has opened.[/bold cyan]")
        log.info("1) Log in with your own credentials.")
        log.info("2) Open the table/report you want (e.g. Transactions or Holdings).")
        log.info(
            "3) Interact so the data loads: change page size, sort a column, or "
            "scroll the list. This lets us capture the real API request."
        )
        if report:
            log.info("   (Capturing for report: [bold]%s[/bold])", report)
        input("\n>>> When the table has loaded, come back here and press ENTER to save...\n")

        storage_state = context.storage_state()
        browser.close()

    # --- persist session --------------------------------------------------
    session_file = cfg.session_file()
    _write_json(session_file, storage_state)
    if has_auth_cookie(storage_state):
        log.info("[green]Saved session with rcajwt cookie[/green] -> %s", session_file)
    else:
        log.warning(
            "Session saved to %s but no 'rcajwt' cookie found — are you logged in?",
            session_file,
        )

    # --- persist captured requests ---------------------------------------
    if not captured:
        log.warning(
            "No matching API requests were captured. Make sure the table actually "
            "loaded data while the browser was open."
        )
        return

    # Always dump everything we saw for later inspection.
    all_path = cfg.capture_dir / "_last_capture.json"
    _write_json(all_path, list(captured.values()))
    log.info("Saved %d captured request(s) -> %s", len(captured), all_path)

    if report and report in cfg.reports:
        endpoint = cfg.reports[report].endpoint_path
        match = next((c for c in captured.values() if endpoint in c["url"]), None)
        if match is None:
            log.warning(
                "No request matching endpoint '%s' captured for report '%s'. "
                "Check %s and adjust reports.yaml if needed.",
                endpoint, report, all_path,
            )
        else:
            _write_json(cfg.capture_file(report), match)
            log.info("[green]Saved capture for '%s'[/green] -> %s", report, cfg.capture_file(report))
