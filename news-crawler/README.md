# Green Street News Crawler

Zieht **alle** Green Street News Artikel über alle *entitleten* Regionen per
offizieller GSN-API und schreibt sie 1:1 in eine strukturierte Tabelle
(`out/articles.json` + `out/articles.csv`). Zuordnung zu Gebäuden/Family Offices
und Transaktions-Abgleich sind ein **separater Downstream-Schritt** (siehe unten).

Dependency-frei (nur Node ≥ 18, nutzt globales `fetch`).

## ⚠️ Rechtlich / AGB — bitte lesen

Green-Street-Inhalte sind **urheberrechtlich geschützt** und laut Terms &
Conditions **nur für den internen Geschäftsgebrauch** lizenziert. Sie dürfen
**nicht** reproduziert, weitergegeben, verkauft oder öffentlich zugänglich
gemacht werden ohne schriftliche Zustimmung von Green Street.

Konsequenz für dieses Repo:
- `out/` ist **git-ignored** — Rohtexte landen nie im Repo/öffentlichen Deploy.
- Die öffentliche Vercel-App (`index.html`) darf **keine GS-Volltexte** zeigen.
  Erlaubt sind nur **abgeleitete Fakten** (Adresse, Preis, Käufer/Verkäufer,
  Datum) + ein **Quell-Link** zurück auf Green Street.
- Diese Trennung ist eure Verantwortung — im Zweifel Green-Street-Vertrag prüfen.

## Setup

```bash
cd news-crawler
cp .env.example .env      # dann GS_CLIENT_ID / GS_CLIENT_SECRET eintragen
```

Credentials erzeugen: https://my.greenstreet.com/client-credentials

## Nutzung — nur Deutschland

Deutschland liegt in der Region **EUR** und wird über eine **Subregion**
gefiltert. Der Shortcut `--germany` erkennt die Deutschland-Subregion
automatisch:

```bash
# 1) Nur Deutschland crawlen (empfohlen):
node crawl.mjs --germany

# 2) Erst testen ohne Volltext-Fetch (nur Listen zählen):
node crawl.mjs --germany --dry-run
```

Falls die Auto-Erkennung mal nichts findet, Subregionen-Baum anzeigen und ID
manuell setzen:

```bash
node crawl.mjs --list-regions            # zeigt EUR → Subregionen mit IDs
node crawl.mjs --regions=EUR --subregions=<ID>
```

Andere/mehrere Regionen (nur falls doch mal breiter):
```bash
node crawl.mjs --regions=USA,EUR,UK      # ganze Regionen, kein Länderfilter
```

### Flags
| Flag | Default | Zweck |
|---|---|---|
| `--germany` | – | **Nur Deutschland** (region=EUR + Deutschland-Subregion, auto-erkannt) |
| `--list-regions` | – | Region/Subregion-Baum mit IDs ausgeben und beenden |
| `--subregions=12` | – | Subregion-IDs manuell setzen (Länderfilter innerhalb einer Region) |
| `--regions=USA,EUR` | alle | Regionen einschränken (nicht-entitlete werden übersprungen) |
| `--out=./out` | `./out` | Ausgabeverzeichnis |
| `--concurrency=4` | 4 | Parallele Detail-Fetches |
| `--delay=250` | 250 | ms Pause zwischen Fetches (Politeness) |
| `--max-pages=1000` | 1000 | Sicherheits-Limit für Pagination pro Region |
| `--refresh` | – | Details neu laden, auch wenn schon gecacht |
| `--dry-run` | – | Nur Artikel-Listen, kein Volltext |
| `--images` | – | Featured Images (binär) mitladen |

**Resume:** Läufe sind fortsetzbar. Bereits geladene Artikel (`out/articles.json`)
werden übersprungen; jeder Detail-Datensatz wird zusätzlich einzeln als
`out/raw/<id>.json` abgelegt.

## Output

| Datei | Inhalt |
|---|---|
| `out/articles.json` | Alle Artikel als volle Roh-Records (Array) |
| `out/articles.csv` | Flache Tabelle: id, region, sector, subregion, title, excerpt, **address** (leer, s.u.), **content**, writers, createdAt, updatedAt, gsNewsUrl, featuredImage |
| `out/raw/<id>.json` | Einzelner Roh-Artikel (für Resume/Debug) |
| `out/regions.json`, `out/sectors.json` | Taxonomie für das Mapping |

Die Spalte **`address` ist bewusst leer** — die Adresse steckt im `content` und
wird im nächsten Schritt extrahiert (nicht vom Crawler).

## Nächster Schritt (Downstream-Mapping, noch nicht gebaut)

1. **Extraktion** je Artikel (LLM mit striktem JSON-Schema):
   `{ address, city, country, assetType, buyer, seller, priceEUR, sizeSqm, dealDate }`.
2. **Geocoding** der Adresse → lat/lng.
3. **Matching** gegen bestehende Objekte/Family Offices in `../data.js`
   (Fuzzy-Name + Umkreis).
4. Ausgabe als `../transactions.js`, das Karte/Tabelle in `index.html` konsumiert
   — **nur Fakten + Quell-Link, kein GS-Volltext**.
