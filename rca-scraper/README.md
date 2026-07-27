# rca-scraper

Production-grade data extractor for **MSCI Real Capital Analytics**
(`app.rcanalytics.com`), for accounts you are authorised to export from.

The built-in export caps at 500 rows and the UI list virtualises to ~2,500 —
but the underlying JSON API knows the full dataset (e.g. *59,543 properties*).
This tool talks to that API directly, so it can pull **every row and column**.

---

## How it works (and why)

We investigated how the site loads data (DevTools → Network) and found:

| Aspect | Finding |
|---|---|
| Data source | `POST https://app.rcanalytics.com/api/v1/propertySearch/search` returning JSON |
| Auth | JWT in an **HttpOnly** cookie `rcajwt` that **rotates on every response** |
| Page size | Controlled by a `Size` field in the request body (the "500 cap") |
| Pagination | **No row offset exists** — the search is bounded by a `MapBounds` rectangle |
| UI tech | AngularJS virtual-scroll list (`vs-repeat`) — a display cap, not a data cap |

So the design is **API-first, browser-assisted-auth**:

1. **Capture** — you log in by hand in a real browser the tool launches
   (Playwright). We can't automate the device-authorization/SSO login, and the
   `rcajwt` cookie is HttpOnly, so a human login is both simplest and most
   robust. The tool grabs the cookie **and** intercepts the exact `search`
   request your browser sends.
2. **Probe / Run** — everything heavy then runs as fast direct `httpx` calls
   that replay that request with `Size` raised and, if the server caps `Size`,
   **MapBounds quadtree tiling** to guarantee completeness.

### Two layers, kept separate

- **Layer 1 — extraction (this tool):** faithful capture of every row into a
  local **SQLite** staging DB + **CSV** exports. Knows nothing about downstream.
- **Layer 2 — integration:** a later, separate step that maps the staged data
  into the Family-Offices platform shape (`FO_DATA` / `confirmedObjects`).
  Keeping it separate means raw data is never lost and re-mapping is cheap.

---

## Setup

Requires Python 3.10+.

```bash
cd rca-scraper
python3 -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -e .
playwright install chromium        # one-time: downloads the browser Playwright drives
cp .env.example .env               # optional; usually you can leave it empty
```

---

## Usage

```bash
# 1. See which tables are configured
rca-scrape reports

# 2. Log in ONCE and visit every tab you want (opens a browser window)
rca-scrape capture
#    -> log in, set Geography = Germany, then open each tab
#       (Transactions, Investors, Funds, Trends, Registered Properties),
#       let each load, and press ENTER. One login captures them all —
#       important because a new RCA login evicts the previous session.
#    -> writes captures/discovered.json (endpoints + response shapes) so the
#       non-property tables can be configured without a second login.

# 3. (optional) Probe: replay the request and inspect the response shape / cap
rca-scrape probe --report transactions --size 3000

# 4. Full extraction -> SQLite + CSV (resumable)
rca-scrape run --report transactions
#    -> data/rca.sqlite (table `transactions`) + data/transactions.csv

# Re-export CSV from the SQLite table any time
rca-scrape export --report transactions
```

### How full extraction works

The search is bounded by a **geography filter** (e.g. Germany), so the server
ignores `MapBounds` and returns the same global top-N for every map rectangle —
map tiling doesn't partition here. What *does* narrow results is the
**transaction date range**, so `run` partitions by date:

- It **auto-detects the correct `DateRangeType`** at startup (some values mean
  "all history" and ignore the dates) by finding the one that measurably shrinks
  the result count — and **aborts loudly** if none does, so it never loops
  without progress.
- It then **bisects the date axis**: request a window; if it comes back at/over
  the page cap it's truncated, so split it in half and recurse. Windows under
  the cap are complete leaves.
- All rows land in SQLite keyed by `(PropertyId, DealId)`, so overlapping window
  edges **de-duplicate automatically**. Portfolio deals (which bundle several
  properties) are expanded into individual property rows.

`--reset` drops a report's rows + checkpoint to start fresh. A `map` partition
strategy (quadtree) is still available in config for endpoints that *do* honour
MapBounds.

- **Resumable:** the tile queue is checkpointed after every tile. If a run is
  interrupted (or you pass `--max-tiles N`), just run the same command again and
  it continues where it left off. Re-running a completed report is a no-op.
- **Output:** `data/rca.sqlite` (one dynamic-schema table per report, full
  fidelity incl. a `raw_json` column) plus a clean `data/<report>.csv`.

`probe` (step 3) writes the raw JSON to `data/probe_<report>.json` and prints
where the rows/total live — handy for confirming a new table's shape before
adding it to `reports.yaml`.

---

## Configuration

- `config/config.yaml` — global settings (base URL, HTTP timeouts/retries,
  output formats, logging). Env vars / `.env` override these.
- `config/reports.yaml` — the **table registry**. Each report is one
  extractable table; adding a table is ideally just a new block + one capture.
- `.env` — optional secrets (see `.env.example`). The normal flow needs none.

---

## Security

- **Never commit** `sessions/`, `captures/`, `.env`, or `data/` — they contain
  live JWTs/cookies and your data. They're all in `.gitignore`.
- The captured `rcajwt` is a live credential while your session is valid; treat
  the `sessions/` files like passwords.
- Credentials, if you put any in `.env`, are only used to prefill the login
  form you submit yourself — they are never sent anywhere but the RCA login.

---

## Project layout

```
rca-scraper/
├── config/
│   ├── config.yaml          # global settings
│   └── reports.yaml         # table/report registry
├── rca_scraper/
│   ├── config.py            # config + .env loading
│   ├── logging_setup.py     # console + rotating file logs
│   ├── auth.py              # Playwright login + session/request capture
│   ├── client.py            # httpx replay, retries, rotating-cookie handling
│   ├── probe.py             # response-shape + Size-cap inspection
│   ├── normalize.py         # flatten rows, expand portfolios, dedup keys
│   ├── tiling.py            # MapBounds quadtree extraction (resumable)
│   ├── extract.py           # run/export orchestration
│   ├── storage/             # SQLite (source of truth) + CSV export
│   └── cli.py               # `rca-scrape` entrypoint
├── sessions/  captures/  data/  logs/   # git-ignored, created at runtime
├── pyproject.toml
└── .env.example
```

## Status

- [x] Increment 1 — scaffold, capture (auth + request), probe
- [x] Increment 2 — full extraction: MapBounds tiling, SQLite/CSV, resume
- [ ] Increment 3 — all 9+ tables via config + Layer-2 platform integration
