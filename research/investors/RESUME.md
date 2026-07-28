# Resume-Anleitung: Ankaufsprofil-Recherche

## Ziel
Für jeden Ziel-Investor: offizielle Website + Ankaufsprofil (sachliche Kriterien, in eigenen
Worten, mit Quelle) → als 4 Spalten im `Investors`-Tab der Excel.

## Scope (Stand: Nutzer-Freigabe)
- **Phase 1** – aktiv letzte 24 Mon. **UND** Bestand > 0 = **1.593**. Liste: `targets.csv`,
  Slices: `slices/slice-001..080.csv`.
- **Phase 2** – **nicht** aktiv, aber Bestand > 0 = **5.104**. Liste: `targets_phase2.csv`,
  Slices: `slices_phase2/slice-p2-001..256.csv`.
- Phase 1 + 2 = **6.697** (= alle mit Bestand > 0).

## Fortschritt
- **Phase 1: Slices 001–049 fertig** (979 Investoren recherchiert, 975 im Excel gemerged).
  Offen: **Slice 050** und **Slices 051–080** (614 Investoren).
- **Phase 2: noch nicht begonnen** (0 / 5.104).

## Wie fortsetzen (pro Welle, max. 20 Agents gleichzeitig)
1. Nächste offene Slice-Nummern bestimmen (Datei fehlt oder hat < 20 Zeilen in `workers/`).
2. Pro Slice ein `general-purpose`-Agent mit `WORKER_BRIEF.md`, der Slice-Pfad und der
   Ausgabedatei `workers/worker-<NN>.jsonl` (Phase 2: `workers/worker-p2-<NN>.jsonl`).
3. Nach jeder Welle: `python3 research/investors/merge_to_excel.py <out.xlsx>` (merged BEIDE
   Phasen automatisch, dedupliziert nach Investorname, mit Umlaut-Faltung), dann committen+pushen.

## Wichtige technische Hinweise
- **Merge-Schlüssel ist der Investorname**, NICHT die Company ID (eine Sammel-ID `4c48b00f-…`
  gehört zu 291 verschiedenen Investoren). Namen sind innerhalb des Ziel-Sets eindeutig.
- `merge_to_excel.py` liest ALLE `workers/worker-*.jsonl`. Für Phase 2 den Merge so erweitern,
  dass auch Bestand>0-&-nicht-aktiv-Zeilen als Zielzeilen gelten (aktuell filtert er auf
  aktiv+Bestand). TODO beim Phase-2-Start: Zielzeilen-Filter im Merge auf `Holdings>0` lockern.
- Limits beobachtet: Session-WebSearch-Budget ~200 Suchen; viele Firmenseiten liefern HTTP 403
  (Bot-Schutz) → Kriterien dann aus WebSearch-Snippets belegen, nie erfinden.

## Deliverable
`research/investors/Properties_and_Investors_ANKAUFSPROFIL.xlsx` (Original + 4 neue Spalten:
Ankaufsprofil (recherchiert) · Investor-Website · Quelle · Recherche-Status).
