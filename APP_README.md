# Family Offices · Immobilien-Map (Pilot)

Interaktive Karte deutscher/benachbarter Family Offices mit Immobilienbezug.
Statisches Single-Page-Tool (React + Leaflet, alles über CDN) – kein Build nötig.

## Lokal öffnen
```bash
cd webapp
python3 -m http.server 8080
# http://localhost:8080
```
(Direkt per Doppelklick auf `index.html` geht auch, aber ein lokaler Server ist zuverlässiger.)

## Auf Vercel deployen
**Variante A – ohne Git (am schnellsten):**
1. Konto auf vercel.com anlegen.
2. „Add New… → Project → Deploy" und den Ordner `webapp/` per Drag & Drop hochladen
   (oder Vercel CLI: `npm i -g vercel`, dann im Ordner `webapp/` → `vercel`).
3. Framework Preset: **Other** (statische Seite). Fertig.

**Variante B – über GitHub:**
1. Repo pushen (siehe Haupt-README zum Schreibzugriff).
2. Auf vercel.com „Import Git Repository" → dieses Repo wählen.
3. Root Directory: `webapp`. Framework: Other. Deploy.

## Dateien
- `index.html` – die App (UI, Karte, Filter, Tabelle, Export, **Markt-Radar**).
- `data.js` – der Family-Office-Datensatz (Firmen, Objekte, Koordinaten, Heatmaps).
- `news.js` – **NEWS-Datensatz** (Deal-News: wer hat wo was gekauft/verkauft).
  Aktuell ~1.700 echte Transaktionen aus den Auswertungen Thomas Daily/Savills +
  Green Street. Erzeugt/aktualisiert über `tools/`.
- `tools/import-xlsx.mjs` – wandelt strukturierte Excel-Auswertungen in `news.js`
  (Käufer→„besitzt"/grün, Verkäufer→„besessen"/rot). Städte-Gazetteer für Pins;
  `lat/lng` optional (ohne Koordinaten trotzdem in der Suche).
- `tools/extract-news.mjs` – für Roh-News/E-Mails ohne Struktur: extrahiert Deals
  per Claude-API und hängt sie an `news.js` an.

## Markt-Radar (News-Suche) – neues Chapter
Ziel: beim Verkauf einer Immobilie in Sekunden die passenden Käufer finden.
- **News-Pins auf der Karte** (Toggle „📰 News" unten): grün = *besitzt* (gekauft und
  laut News nicht wieder verkauft), rot = *besessen* (verkauft bzw. wieder verkauft).
  Respektiert Radius-Pin und Nutzungs-Filter → „wer ist in dieser Region aktiv und
  kauft diese Objektart".
- **Markt-Radar-Fenster** (Button oben mittig): großes Freitext-Suchfeld in
  natürlicher Sprache, z.B. *„Wer kauft gerade in Berlin Büros?"*. Darüber eine
  kurze, menschlich lesbare **KI-Antwort** (deterministisch aus den strukturierten
  News erzeugt – läuft ohne Backend/API-Key), darunter alle passenden Artikel als
  Karten. Zusätzliche Filter: Rolle (Käufer/Verkäufer), Status, Objektart, Zeitraum,
  „nur im Radius".

### News-Daten pflegen (`news.js`)
Jeder Eintrag beschreibt einen Deal aus den News. Wichtige Felder: `firma`,
`rolle` (Käufer/Verkäufer), `status` (`besitzt`|`besessen`), `objektart`
(Buero|Wohnen|Retail|Logistik|Hotel|Gastro|Sonstiges), `stadt`, `region`,
`lat`/`lng`, `wertMioEUR`, `datum` (YYYY-MM-DD), `headline`, `summary`, `quelle`.
Neue News = weitere Objekte ans `window.FO_NEWS`-Array anhängen und `FO_NEWS_STAND`
hochsetzen. Die Beispieldaten sind realistisch modelliert und werden durch die echte
Extraktion ersetzt.

> **KI-Antwort später „echt" machen:** Der Antworttext wird heute deterministisch aus
> den Treffern gebaut (`answerNews`). Für frei formulierte Fragen mit echtem LLM lässt
> sich in `runNewsAsk` eine Vercel-Serverless-Funktion (`/api/…`) einhängen, die den
> API-Key serverseitig hält – die App bleibt ansonsten statisch.

## Features (Stand Pilot)
- Karte DE + Nachbarländer, HQ mit Logo (via Clearbit), zoombar bis Straßenebene.
- Legende (Ampel): rot/gelb/grün an-/ausschaltbar.
- Kennzahlen-Box: Anzahl, AUM, Immobilien-€, Pie nach Nutzung (Slices anklickbar = Filter).
- Advanced Sort: Land, AUM-Range, Nutzung, **Radius-Pin** (Objekte im Umkreis).
- „Als Tabelle zeigen": Apple-Fenster (rot/gelb/grün = schließen/min/max), sortierbar,
  **Export als .xlsx**, Checkbox → Objekte des Unternehmens auf Karte.
- Klick auf HQ (oder Checkbox) → Objekte gepinnt (Pin-Größe ∝ Wert) + Detailpanel (Seite 2).

## Wichtig / Datenqualität
AUM- und Immobilien-€-Werte sind **Schätzungen** (Presse/Ranking), Koordinaten teils
approximiert, Objektlisten **nicht vollständig** (Family Offices legen Bestände nicht offen).
Vor echter Ansprache Kontakte/Zahlen verifizieren.
