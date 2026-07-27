"""Configuration loading: merges config.yaml + reports.yaml + environment/.env.

Environment variables (and .env) win over the YAML defaults so that secrets and
per-machine overrides never need to live in a committed file.
"""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import yaml
from dotenv import load_dotenv

# Project root = the rca-scraper/ directory (one level up from this package).
ROOT = Path(__file__).resolve().parent.parent
CONFIG_DIR = ROOT / "config"


def _deep_get(d: dict, dotted: str, default: Any = None) -> Any:
    """Fetch a nested value by dotted path, e.g. _deep_get(cfg, 'http.timeout')."""
    cur: Any = d
    for part in dotted.split("."):
        if not isinstance(cur, dict) or part not in cur:
            return default
        cur = cur[part]
    return cur


@dataclass
class Report:
    name: str
    endpoint_path: str
    capture_file: str
    page_size_key: str = "Size"
    page_size: int = 3000
    total_key: str = "data.TotalCount"
    rows_key: str = "data.Properties"
    id_key: str = "PropertyId"
    overrides: dict = field(default_factory=dict)
    tiling: bool = True


@dataclass
class Config:
    raw: dict
    root: Path
    reports: dict[str, Report]

    # --- convenience accessors (with env overrides) -----------------------
    @property
    def base_url(self) -> str:
        return os.getenv("RCA_BASE_URL") or _deep_get(self.raw, "site.base_url")

    @property
    def origin(self) -> str:
        return _deep_get(self.raw, "site.origin", self.base_url)

    @property
    def session_dir(self) -> Path:
        return self.root / _deep_get(self.raw, "auth.session_dir", "sessions")

    @property
    def profile(self) -> str:
        return os.getenv("RCA_PROFILE") or _deep_get(self.raw, "auth.profile", "default")

    @property
    def capture_dir(self) -> Path:
        return self.root / _deep_get(self.raw, "capture.dir", "captures")

    @property
    def sniff_url_contains(self) -> list[str]:
        return _deep_get(self.raw, "capture.sniff_url_contains", ["/api/v1/"])

    @property
    def timeout_seconds(self) -> float:
        return float(_deep_get(self.raw, "http.timeout_seconds", 90))

    @property
    def retries(self) -> int:
        return int(_deep_get(self.raw, "http.retries", 4))

    @property
    def backoff_base(self) -> float:
        return float(_deep_get(self.raw, "http.backoff_base_seconds", 2))

    @property
    def http2(self) -> bool:
        return bool(_deep_get(self.raw, "http.http2", True))

    @property
    def output_dir(self) -> Path:
        return self.root / _deep_get(self.raw, "output.dir", "data")

    @property
    def output_formats(self) -> list[str]:
        return _deep_get(self.raw, "output.formats", ["csv", "sqlite"])

    @property
    def sqlite_path(self) -> Path:
        return self.root / _deep_get(self.raw, "output.sqlite_path", "data/rca.sqlite")

    @property
    def log_level(self) -> str:
        return os.getenv("RCA_LOG_LEVEL") or _deep_get(self.raw, "logging.level", "INFO")

    @property
    def log_dir(self) -> Path:
        return self.root / _deep_get(self.raw, "logging.dir", "logs")

    def session_file(self, profile: str | None = None) -> Path:
        return self.session_dir / f"{profile or self.profile}.json"

    def capture_file(self, report_name: str) -> Path:
        rep = self.reports[report_name]
        return self.capture_dir / rep.capture_file


def load_config() -> Config:
    """Load config.yaml + reports.yaml, after loading .env from the project root."""
    load_dotenv(ROOT / ".env")

    with open(CONFIG_DIR / "config.yaml", "r", encoding="utf-8") as fh:
        raw = yaml.safe_load(fh) or {}

    reports: dict[str, Report] = {}
    reports_path = CONFIG_DIR / "reports.yaml"
    if reports_path.exists():
        with open(reports_path, "r", encoding="utf-8") as fh:
            rep_raw = (yaml.safe_load(fh) or {}).get("reports", {}) or {}
        for name, spec in rep_raw.items():
            reports[name] = Report(name=name, **spec)

    return Config(raw=raw, root=ROOT, reports=reports)
