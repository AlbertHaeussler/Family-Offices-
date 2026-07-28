# Windows-Anleitung (ohne Terminal, nur Doppelklick)

Du brauchst **kein** Terminal. Nur einmal Node.js installieren, dann klickst du
die Dateien in diesem Ordner der Reihe nach an.

## Einmalig vorbereiten

1. **Node.js besorgen** — zwei Wege:
   - **A) Normal installieren** (falls erlaubt): https://nodejs.org → grüner
     **LTS**-Button → Datei öffnen → immer „Next" → „Install" → „Finish".
   - **B) Portable, ohne Installation / ohne Admin-Rechte** (für Firmenrechner):
     1. https://nodejs.org/en/download öffnen.
     2. Bei „Windows" das Format **„Binary (.zip)"** für **x64** wählen und
        herunterladen (Datei heißt z. B. `node-v22.x.x-win-x64.zip`).
     3. ZIP entpacken (Rechtsklick → „Alle extrahieren"). Es entsteht ein
        Ordner `node-v22.x.x-win-x64`, in dem `node.exe` liegt.
     4. Diesen Ordner in **`node-portable`** umbenennen und **in den
        `news-crawler`-Ordner** legen (direkt neben `crawl.mjs`).
     Die Klick-Dateien finden Node dann automatisch — nichts wird installiert.
2. **Projekt herunterladen:** Auf der GitHub-Seite des Projekts oben rechts der
   grüne Button **„Code" → „Download ZIP"**. Danach die ZIP-Datei entpacken
   (Rechtsklick → „Alle extrahieren").
3. In den entpackten Ordner gehen → `news-crawler` → `windows`.

## Dann der Reihe nach anklicken

| Datei | Was passiert |
|---|---|
| **1-Zugangsdaten-eintragen.bat** | Öffnet eine Datei, in die du deine 3 Keys einträgst (Green Street + Anthropic). Speichern, schließen. |
| **2-Test-wie-viele-Artikel.bat** | Prüft die Verbindung und sagt dir, wie viele Deutschland-Artikel es gibt. Lädt noch nichts. |
| **3-Artikel-herunterladen.bat** | Lädt alle Deutschland-Artikel herunter (in den Ordner `out`). |
| **4b-Test-20-Artikel.bat** | Erst mal nur 20 Artikel auswerten, zum Anschauen. |
| **4-Tabellen-erstellen.bat** | Wertet alles aus → fertige Tabellen. |

## Was rauskommt (Ordner `out`)

- `facts.csv` — alle News in einer Tabelle (direkt in Excel öffnen)
- `by-topic\*.csv` — eine Tabelle pro Topic (Financing, Investment, …)
- `news.json` — für die App

## Wenn Windows warnt

Beim ersten Klick auf eine `.bat` kann „Windows hat Ihren PC geschützt"
erscheinen (weil die Datei aus dem Internet kommt). Dann auf **„Weitere
Informationen" → „Trotzdem ausführen"**. Die Dateien sind reiner Text — du
kannst sie mit Rechtsklick → „Bearbeiten" jederzeit selbst anschauen.

## Wichtig

Deine Keys bleiben in der Datei `.env` **nur auf deinem PC** — sie werden nie
hochgeladen. Green-Street-Volltexte bleiben ebenfalls lokal (Ordner `out`).
