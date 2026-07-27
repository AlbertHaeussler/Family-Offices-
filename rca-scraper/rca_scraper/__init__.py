"""rca-scraper: production-grade extractor for MSCI Real Capital Analytics.

Layer 1 (this package) faithfully extracts every row/column from RCA's JSON
API into a local staging store (SQLite + CSV). Layer 2 (integration) maps that
staged data into the Family-Offices platform shape and lives separately.
"""

__version__ = "0.1.0"
