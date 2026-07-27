"""Centralised logging: pretty console output via rich + a rotating file log."""
from __future__ import annotations

import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path

from rich.logging import RichHandler

_CONFIGURED = False


def setup_logging(level: str = "INFO", log_dir: Path | None = None) -> logging.Logger:
    """Configure root logging once; safe to call repeatedly."""
    global _CONFIGURED
    logger = logging.getLogger("rca")
    if _CONFIGURED:
        return logger

    logger.setLevel(getattr(logging, level.upper(), logging.INFO))
    logger.propagate = False

    console = RichHandler(rich_tracebacks=True, show_path=False, markup=True)
    console.setFormatter(logging.Formatter("%(message)s", datefmt="[%X]"))
    logger.addHandler(console)

    if log_dir is not None:
        log_dir.mkdir(parents=True, exist_ok=True)
        fileh = RotatingFileHandler(
            log_dir / "rca-scraper.log", maxBytes=5_000_000, backupCount=5, encoding="utf-8"
        )
        fileh.setFormatter(
            logging.Formatter("%(asctime)s %(levelname)-7s %(name)s: %(message)s")
        )
        logger.addHandler(fileh)

    _CONFIGURED = True
    return logger


def get_logger(name: str = "rca") -> logging.Logger:
    return logging.getLogger(name if name.startswith("rca") else f"rca.{name}")
