# News-Extractor (`tools/`)

Macht aus deinen Roh-News/E-Mails strukturierte Deals und aktualisiert `../news.js`
(`window.FO_NEWS`) – der Datensatz, den das **Markt-Radar** in der App nutzt.

Läuft **offline / in CI**, nicht im Browser. Die App selbst bleibt statisch.

## Einmalig einrichten

```bash
cd tools
npm install                    # zieht @anthropic-ai/sdk
export ANTHROPIC_API_KEY=sk-ant-…   # dein Claude-API-Key
```

(Alternativ: `ant auth login` – dann ist kein `ANTHROPIC_API_KEY` nötig.)

## News extrahieren & news.js aktualisieren

```bash
# erst ansehen, nichts schreiben:
node extract-news.mjs ../deine-emails.txt --dry-run

# echt schreiben (hängt nur NEUE Deals an, dedupliziert per firma|objekt|monat):
node extract-news.mjs ../deine-emails.txt
```

Danach `news.js` committen und pushen → beim nächsten Deploy sind die neuen
Deals im Markt-Radar sichtbar.

### Eingabeformate (automatisch erkannt)

| Datei          | Inhalt                                                                 |
| -------------- | ---------------------------------------------------------------------- |
| `*.json`       | Array aus Strings **oder** `{subject?, from?, date?, body\|text}`-Objekten |
| `*.eml`/`mbox` | Standard-E-Mail-Export (mbox `From `-Trenner)                          |
| `*.txt` u.a.   | Klartext; getrennt an `Subject:`/`Betreff:`-Headern oder `-----`/`=====` |

### Optionen

| Flag            | Wirkung                                                        |
| --------------- | ------------------------------------------------------------- |
| `--dry-run`     | nichts schreiben, nur Vorschau                                |
| `--limit N`     | nur N Blöcke verarbeiten (schneller Test)                     |
| `--model <id>`  | Modell überschreiben (Default `claude-opus-5`)                |
| `--no-geocode`  | kein Nominatim; nur statische Städte-Koordinaten              |
| `--out <pfad>`  | Ziel-Datei (Default `../news.js`)                             |

## Wie es funktioniert

1. Datei wird in einzelne E-Mail-/News-Blöcke zerlegt.
2. Pro Block extrahiert **Claude** strukturiert alle belegten Immobilien-Deals
   (Käufer/Verkäufer, Objektart, Stadt, Wert, Datum, `besitzt`/`besessen` …) –
   erzwungenes JSON-Schema, keine Halluzination bei „keine Deals".
3. Stadt/Adresse werden per **Nominatim** geocodiert (Fallback: Städte-Tabelle).
4. Dedup gegen den bestehenden Datensatz, dann Anhängen und `news.js` neu schreiben.

## Laufend aktualisieren

Bei neuen E-Mails einfach erneut ausführen – nur neue Deals kommen dazu. Für
Automatik lässt sich der Aufruf in einen Cron-Job oder eine GitHub Action
hängen (E-Mail-Datei bereitstellen → Skript laufen lassen → `news.js` committen).
Sag Bescheid, wenn ich die GitHub Action dafür einrichten soll.
