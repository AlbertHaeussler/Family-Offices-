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
- `index.html` – die App (UI, Karte, Filter, Tabelle, Export).
- `data.js` – der Datensatz (10 Family Offices, Objekte, Koordinaten).

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
