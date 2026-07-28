# Worker-Brief: Ankaufsprofil-Recherche je Investor

Du bekommst **eine Slice-Datei** (CSV) mit ~20 Investoren. Für **jeden** Investor recherchierst du
im Web dessen offizielle Website und dessen **Ankaufsprofil / Investmentkriterien** und trägst das
Ergebnis in **eine JSONL-Ausgabedatei** ein. Arbeite die Liste vollständig ab.

## Vorgehen pro Investor
1. **Website finden:** `WebSearch` mit dem Investornamen (+ ggf. „Immobilien", „real estate",
   „Ankauf", „acquisition criteria", „investment profile", plus eine Stadt/Assetklasse aus der Zeile
   als Disambiguierung). Identifiziere die **offizielle** Firmen-Website (Impressum/About passt zum
   Namen). Achtung bei generischen Namen (z. B. Städtenamen, Privatpersonen) — nur eintragen, wenn
   die Zuordnung eindeutig ist.
2. **Ankaufsprofil-Seite laden:** Suche/rate die Unterseite mit den Ankaufskriterien
   (typische Pfade/Begriffe: „Ankaufsprofil", „Investment Focus/Criteria", „Ankauf", „Wir kaufen",
   „Acquisitions", „Investmentstrategie", „What we buy"). `WebFetch` diese Seite (nicht bei der
   Startseite aufhören — echte Kriterienseite laden).
3. **Sachliche Kriterien erfassen** (auf **Deutsch**, kompakt, originalgetreu im **Inhalt**, aber
   **in eigenen Worten** — KEINE langen wörtlichen Textblöcke von der Website kopieren):
   - **Assetklassen / Nutzung** (Wohnen, Büro, Retail, Logistik, Hotel, Pflege, Grundstücke …)
   - **Ticketgröße / Investitionsvolumen** (€ von–bis)
   - **Regionen / Städte** (Deutschland, A-/B-Städte, konkrete Metropolen)
   - **Risikoprofil** (Core / Core+ / Value-Add / Opportunistic)
   - **Bestand vs. Projektentwicklung / Neubau**
   - **Sonstiges** (Off-Market-Präferenz, Anteilsdeals/Share Deals, Mindest-/Höchstflächen,
     Ankaufsrenditen, Vermietungsstand, Denkmal, ESG etc.)

## Ausgabe (PFLICHT)
Hänge pro Investor **genau eine JSON-Zeile** an deine Ausgabedatei
`research/investors/workers/worker-<NN>.jsonl` (Pfad wird dir genannt). Nutze `bash`/Append,
überschreibe keine bestehenden Zeilen. Schema (eine Zeile, gültiges JSON):

```json
{"company_id":"...","investor":"...","website":"domain.de oder https://...","ankaufsprofil":"Deutscher Fließtext mit den Kriterien (Assetklassen · Ticketgröße · Regionen · Risikoprofil · Bestand/Development · Off-Market/Sonstiges). Quelle im Text kurz benennen.","quelle":"https://... (die Ankaufsprofil-/Kriterienseite; mehrere durch ; getrennt)","status":"ok | kein_ankaufsprofil | keine_website | privatperson"}
```

### Status-Regeln
- `ok` = Website **und** konkrete Ankaufskriterien gefunden → `ankaufsprofil` gefüllt.
- `kein_ankaufsprofil` = Website gefunden, aber keine öffentlichen Ankaufskriterien →
  `ankaufsprofil:"nicht öffentlich ermittelbar"`, `website` gefüllt.
- `keine_website` = keine belastbare offizielle Website auffindbar → `ankaufsprofil:""`.
- `privatperson` = eindeutig eine Privatperson ohne Firma/Website → `ankaufsprofil:""`.

## Regeln
- **Keine Erfindungen.** Nur was belegt auf der Website/Quelle steht. Kein Ankaufsprofil
  „extrapolieren".
- **Keine langen wörtlichen Zitate** — Inhalt originalgetreu, Formulierung eigen.
- `company_id` **exakt** aus der Slice-Zeile übernehmen (Spalte „Company ID") — daran wird gemerged.
- Zügig arbeiten: max. ~2–4 Web-Aufrufe pro Investor. Wenn nach kurzer Suche nichts Belastbares →
  passenden Status setzen und weiter.
- Am Ende **kurzer Report**: wie viele ok / kein_ankaufsprofil / keine_website / privatperson.
