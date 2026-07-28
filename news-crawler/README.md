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

## Schritt 2a — KOSTENLOS nach Topic sortieren (`sort.mjs`)

Willst du einfach **alle Artikel nach Topic sortiert** — ohne einen Cent
auszugeben und ohne Anthropic-Key? Dann nimm das hier. Es gruppiert die
gecrawlten Artikel nach dem **Topic-/Sector-Feld, das Green Street selbst
mitliefert** — keine KI, keine Kosten.

```bash
node sort.mjs
```
Ergebnis: `out/articles-by-topic.csv` (alles) + `out/by-topic-free/<Topic>.csv`
(eine Tabelle pro Topic), jeweils mit Titel, Excerpt, Inhalt, Datum, Link.

Der Crawl (Schritt 1) + dieser Sort = **komplett gratis** (nur das GS-Abo eurer
Firma nötig). Schritt 2b unten (KI-Faktenextraktion) ist **optional** und kostet
die paar Euro — nur nötig, wenn du strukturierte Felder wie „wer hat den Kredit
für welches Objekt aufgenommen" automatisch rausziehen willst.

## Schritt 2b — Fakten extrahieren & nach Topic sortieren (`extract.mjs`)

Nimmt `out/articles.json` und zieht per Claude in **einem** Call pro Artikel
die **nutzbaren Fakten** raus. Ein Artikel kann **mehreren Topics** zugeordnet
werden (z. B. ein Deal, der zugleich *Investment* und *Financing* ist) — oder
`Other`, falls keins passt. Jede Zeile behält **Link zum Artikel** (`sourceUrl`)
und einen **wörtlichen Key-Ausschnitt** (`keyExcerpt`); fehlt der Link, wird der
**ganze Artikeltext** (`fullText`) als Fallback gespeichert.

```bash
# ANTHROPIC_API_KEY in .env eintragen, dann:
node extract.mjs --limit=20      # erst 20 zum Testen
node extract.mjs                 # alles
node extract.mjs --topic=Financing
```

**Topics & Kernfelder:**
| Topic | Rausgezogene Daten |
|---|---|
| Financing | borrower, lender, loanAmount, loanType, purpose, ltv, rate, term |
| Investment | buyer, seller, price, assetType, sizeSqm, yield |
| Leasing | tenant, landlord, sizeSqm, rent, leaseTerm |
| Fundraising | fundName, manager, amountRaised, target, strategy, investors |
| Corporate | companies, eventType, dealValue |
| People | person, role, newCompany, previousCompany, moveType |
| Policy & Regulation | jurisdiction, policyTopic, effectiveDate, impact |
| Sustainability | initiative, metric, targetYear |

Alle Topics teilen: headline, summary (**eigene Worte**, kein GS-Zitat), company,
property, address, city, country, eventDate, sourceUrl.

**Output:**
| Datei | Inhalt |
|---|---|
| `out/by-topic/<Topic>.csv` | Eine Tabelle **pro Topic** mit dessen Feldern |
| `out/facts.csv` | Kombinierte Tabelle (gemeinsame Felder) |
| `out/extracted.json` | Alle Fakten als JSON |

**Kosten:** `extract.mjs` nutzt die Anthropic-**API** (nicht das Claude.ai-Abo —
das hat keine Schnittstelle für Skripte). Standardmodell ist **Haiku 4.5**
($1/$5 pro Mio. Tokens) — Faktenextraktion braucht nicht mehr. Grobe Rechnung:
~2.600 Input- + ~250 Output-Tokens pro Artikel ⇒ **≈ $0,004/Artikel**, also
~$2 für 500 und ~$8 für 2.000 Artikel (einmalig; Resume überspringt Erledigtes).
Der **Crawl (Schritt 1) kostet nichts** — nur die Extraktion. Für harte Artikel
optional `ANTHROPIC_MODEL=claude-sonnet-5` in `.env`.

**LLM-Rechtshinweis:** `extract.mjs` schickt Artikeltext an die Anthropic-API.
Nutze einen kommerziellen/Zero-Retention-Zugang (die kommerzielle API trainiert
**nicht** auf euren Daten). `summary`/`headline` sind bewusst eigene Paraphrasen,
keine kopierten GS-Sätze.

## Schritt 3 (Downstream-Mapping, noch nicht gebaut)

1. **Extraktion** je Artikel (LLM mit striktem JSON-Schema):
   `{ address, city, country, assetType, buyer, seller, priceEUR, sizeSqm, dealDate }`.
2. **Geocoding** der Adresse → lat/lng.
3. **Matching** gegen bestehende Objekte/Family Offices in `../data.js`
   (Fuzzy-Name + Umkreis).
4. Ausgabe als `../transactions.js`, das Karte/Tabelle in `index.html` konsumiert
   — **nur Fakten + Quell-Link, kein GS-Volltext**.
