# rca-scraper — Stand & nächster Schritt

## Wo wir stehen (funktioniert, headless, kein UI nötig)

- ✅ **Transactions**: 46.142 deutsche Deals × 121 Spalten → `data/transactions.csv`
  (Extraktion via Datums-Partitionierung; `DateRangeType=14` = custom range).
- ✅ **Investor-Profile**: `investors`-Command holt pro Firma `player-detail`
  (CEO, Website, Bullets, Adresse) + `player-relationships` (Töchter/Lender/Broker
  mit Objektzahlen). GUIDs kommen aus den Transactions (Buyers/Sellers.CompanyId).
- ✅ **Holdings-Modus geknackt**: `PropertiesRequestType=0` → `data.pinHoldingItems`
  (~48.7k). ABER: DateRange filtert Holdings nicht → Datums-Partition unmöglich.
  → geparkt (Holdings sind aus Transactions ableitbar, daher niedrige Prio).

## Der EINE offene Blocker

Für „alles über jedes Objekt + alle Reiter" fehlen 2 Request-Formate, die
**nicht ratbar** sind (4 headless-Versuche erschöpft: Endpoint-Pfade, Mode-Toggle,
Investor-Filter, URL-Guessing):

1. **Investor-Objekt-Filter**: wie `propertySearch` auf *eine Firma* gefiltert wird
   (der „Transactions"/„Known Holdings"-Reiter eines Investors).
2. **Objekt-Detail-Endpoint**: die Property-Detailseite (Income/Expense, Loans, Historie).

**Warum der Playwright-`capture` hängt:** RCA sieht den automatisierten Browser als
neues/untrusted Gerät (Device-Auth) + Automation-Erkennung → schwere Profilseiten
laden dort nicht. Im **normalen Browser** laden sie einwandfrei.

## → Nächster Schritt: HAR-Capture im NORMALEN Browser (kein Code, kein Playwright)

1. Normalen Chrome/Edge öffnen, bei `app.rcanalytics.com` eingeloggt sein.
2. **F12** → Reiter **Network** → Button **Fetch/XHR** → Haken **Preserve log** → 🚫 leeren.
3. In RCA klicken (lädt hier normal):
   - **INVESTORS** → einen Investor mit Bestand öffnen (z. B. Union Investment / Vonovia).
   - Im Profil **„Transactions"-Reiter** klicken, laden lassen.
   - **„Known Holdings"-Reiter** klicken, laden lassen.
   - **Ein einzelnes Objekt** anklicken → Detailseite, laden lassen.
4. Rechtsklick in die Request-Liste → **„Save all as HAR with content"** → speichern.
5. HAR in den Chat hochladen. (Optional: Cookie-Wert vorher schwärzen; nur URLs +
   Request-Bodies werden gebraucht.)

Danach: aus der HAR die 2 Formate ablesen → Voll-Extraktion bauen
(pro Firma alle Objekte + Detail, gefiltert auf aktive/24-Monats-Bestände).

## Tools (alle gepusht auf `claude/rc-analytics-scraper-t113dh`)

`capture` · `probe` · `run` (date/map partition, --reset) · `investors --limit N` ·
`diagnose-modes` · `discover-endpoints --guid` · `investor-filter --guid` · `export`
