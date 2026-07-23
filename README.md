# Family Offices · Immobilien-Map

Interaktives Tool zur Recherche immobilien-aktiver Family Offices in Deutschland
und Nachbarländern (mit DE-Bezug). Karte + Filter + Tabelle + Export.

**Live-Deploy:** statische Single-Page-App (React + Leaflet, Libs lokal gebündelt).
Kein Build nötig — `index.html` liegt im Repo-Root, Vercel serviert direkt.

## Inhalt
| Datei | Zweck |
|---|---|
| `index.html` | Die App (Karte, Filter, Tabelle, Export) |
| `data.js` | Datensatz (Family Offices, Objekte, Koordinaten) |
| `vendor/` | Lokal gebündelte Bibliotheken (React, Leaflet, Babel, SheetJS) |
| `Family_Offices_Immobilien_Recherche.xlsx` | Recherche-Datenbank (Stammdaten + Objekte + Konfidenz) |

## Lokal starten
```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Auf Vercel deployen
1. vercel.com → **Add New… → Project → Import Git Repository** → dieses Repo.
2. **Root Directory: `/`** (Standard — App liegt im Root), **Framework: Other**,
   Build/Output leer lassen.
3. **Deploy.** Danach deployt jeder Push auf `main` automatisch neu.

## Features
- Karte DE + Nachbarländer, HQ mit Logo (Clearbit), zoombar bis Straßenebene.
- Ampel-Legende (rot/gelb/grün) zum Filtern des Immobilien-Status.
- Kennzahlen-Box: Anzahl, AUM, Immobilien-€, Pie nach Nutzung (Slices = Filter).
- Advanced Sort: Land, AUM-Range, Nutzung, **Radius-Pin** (Objekte im Umkreis).
- Tabellen-Fenster (Apple-Ampel min/max/close), sortierbar, **xlsx-Export**,
  Checkbox → Objekte des Unternehmens auf Karte.
- Detailpanel (Seite 2): HQ + Objekte gepinnt (Pin-Größe ∝ Wert).

## Datenqualität
AUM-/€-Werte sind **Schätzungen** (Presse/Ranking), Koordinaten teils approximiert,
Objektlisten **nicht vollständig** (Family Offices legen Bestände nicht offen).
Details + Quellen + Konfidenz je Feld: siehe `.xlsx`. Vor Ansprache verifizieren.

Aktueller Stand: **Pilot mit 10 Offices**. Skalierung auf 150+ folgt.
