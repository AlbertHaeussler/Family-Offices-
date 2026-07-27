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
import re
from pathlib import Path
from typing import Any

from .config import Config
from .inspect_shape import best_rows_key, find_arrays, find_totals
from .logging_setup import get_logger

log = get_logger("auth")


def _write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2)


def _slug(url: str) -> str:
    """A filesystem-safe short id for an endpoint (its path, last segments)."""
    path = re.sub(r"^https?://[^/]+", "", url).split("?")[0].strip("/")
    parts = [p for p in path.split("/") if p and p != "api"]
    return re.sub(r"[^a-zA-Z0-9]+", "_", "_".join(parts[-3:])) or "root"


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


def capture(cfg: Config, report: str | None = None, headless: bool = False,
            reuse: bool = False) -> None:
    """Open a browser, let the user log in and visit every tab they want, then
    persist the session cookie plus each distinct API endpoint's request AND a
    sample response.

    Because a new login evicts older sessions on RCA, this is designed to be run
    ONCE: visit all the tables (Transactions, Investors, Funds, Trends,
    Registered Properties) in the single session and everything is captured
    together. Responses are saved so every table's shape can be configured
    without a second login.

    Args:
        reuse: load the previously saved session into the browser so you're
               already logged in — no new email code. Only works while that
               session is still valid.
    """
    # Imported lazily so the rest of the CLI works even before `playwright
    # install` has been run.
    from playwright.sync_api import sync_playwright

    sniff = cfg.sniff_url_contains
    requests_by_path: dict[str, dict] = {}   # slug -> request info
    responses_by_path: dict[str, Any] = {}   # slug -> parsed JSON response

    def matches(url: str) -> bool:
        return any(s in url for s in sniff)

    def on_request(request) -> None:
        if request.method not in ("POST", "GET") or not matches(request.url):
            return
        headers = {
            k: v for k, v in request.headers.items()
            if k.lower() not in ("cookie", "content-length", "host")
        }
        requests_by_path[_slug(request.url)] = {
            "method": request.method, "url": request.url,
            "headers": headers, "post_data": request.post_data,
        }

    def on_response(response) -> None:
        if not matches(response.url):
            return
        ctype = (response.headers or {}).get("content-type", "")
        if "json" not in ctype.lower():
            return
        try:
            body = response.json()
        except Exception:  # noqa: BLE001 - non-JSON / streaming bodies
            return
        # Keep the response with the most rows per endpoint (the real data load).
        slug = _slug(response.url)
        prev = responses_by_path.get(slug)
        if prev is None or _row_estimate(body) >= _row_estimate(prev):
            responses_by_path[slug] = body

    reuse_state = None
    if reuse and cfg.session_file().exists():
        reuse_state = str(cfg.session_file())
        log.info("Reusing saved session (%s) — you should already be logged in.",
                 reuse_state)
    elif reuse:
        log.warning("--reuse requested but no saved session found; you'll log in fresh.")

    def attach(pg) -> None:
        """Wire request/response sniffers onto a page (incl. newly opened tabs)."""
        pg.on("request", on_request)
        pg.on("response", on_response)

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=headless)
        context = browser.new_context(storage_state=reuse_state)
        # Capture on EVERY tab — RCA opens investor profiles in a new tab.
        context.on("page", attach)
        page = context.new_page()
        attach(page)
        page.goto(cfg.base_url, wait_until="domcontentloaded")

        log.info("[bold cyan]A browser window has opened.[/bold cyan]")
        log.info("1) Log in with the account's credentials (skip if already logged in).")
        log.info("2) Set your filter (e.g. Geography = Germany).")
        log.info("3) Visit EACH tab you want, letting its data load fully:")
        log.info("   Transactions, Investors, Funds, Trends, Registered Properties.")
        log.info("   (Scroll / sort so the table actually fetches its rows.)")
        log.info("   Investor profiles open in a NEW TAB — that's fine, we capture it too.")
        input("\n>>> When you've loaded every tab, return here and press ENTER to save...\n")

        storage_state = context.storage_state()
        browser.close()

    # --- persist session --------------------------------------------------
    session_file = cfg.session_file()
    _write_json(session_file, storage_state)
    if has_auth_cookie(storage_state):
        log.info("[green]Saved session with rcajwt cookie[/green] -> %s", session_file)
    else:
        log.warning("Session saved but no 'rcajwt' cookie found — were you logged in?")

    if not requests_by_path:
        log.warning("No matching API requests captured. Did the tables load data?")
        return

    # --- persist per-endpoint request + response, build a manifest --------
    disc_dir = cfg.capture_dir / "discovered"
    manifest: list[dict] = []
    for slug, req in requests_by_path.items():
        _write_json(disc_dir / f"{slug}.request.json", req)
        resp = responses_by_path.get(slug)
        entry = {
            "slug": slug, "url": req["url"], "method": req["method"],
            "request_file": f"discovered/{slug}.request.json",
        }
        if resp is not None:
            _write_json(disc_dir / f"{slug}.response.json", resp)
            entry.update({
                "response_file": f"discovered/{slug}.response.json",
                "top_arrays": find_arrays(resp)[:5],
                "totals": find_totals(resp),
                "suggested_rows_key": best_rows_key(resp),
            })
        manifest.append(entry)

    _write_json(cfg.capture_dir / "discovered.json", manifest)

    # --- also save capture files for known reports whose endpoint matched --
    for name, rep in cfg.reports.items():
        match = next((r for r in requests_by_path.values()
                      if rep.endpoint_path in r["url"]), None)
        if match:
            _write_json(cfg.capture_file(name), match)

    # --- human summary ----------------------------------------------------
    log.info("[green]Captured %d distinct endpoint(s):[/green]", len(manifest))
    for e in manifest:
        arrays = e.get("top_arrays") or []
        biggest = f"{arrays[0][0]}={arrays[0][1]}" if arrays else "no rows seen"
        log.info("  [bold]%-24s[/bold] %-8s rows: %s", e["slug"], e["method"], biggest)
    log.info("Manifest -> %s", cfg.capture_dir / "discovered.json")
    log.info("Next: share captures/discovered.json (and the small response files) "
             "so the remaining tables can be configured.")


def _row_estimate(body: Any) -> int:
    arrays = find_arrays(body)
    return arrays[0][1] if arrays else 0
