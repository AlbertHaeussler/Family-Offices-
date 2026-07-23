> **GESAMTABDECKUNG:** Die 4 Parts decken ZUSAMMEN ganz Deutschland + alle Nachbarländer ab.
> Die Themen-/Regionsgruppierung ist NUR zur Arbeitsteilung (keine Doppelarbeit) — sie ist KEINE
> Grenze. **Ergänze jedes echte Family Office, das dir begegnet, egal welche Region/Stadt**
> (Berlin, Ost, überall). Ziel aller 4 zusammen: 100 % der größten FOs in DE + Nachbarländern.

# Part 1 — MFOs + Rhein-Main/Frankfurt + Industrie-West
Regeln: SHARED_INSTRUCTIONS.md. Nur in `data-part1.js` schreiben. Operative Konzerne = skip.

## Multi Family Offices (i. d. R. gelb, RE über Fonds — Adresse/AUM belegen)
- [x] FOCAM AG — Frankfurt a. M. — MFO → `focam` (gelb, Untermainkai 26; RE über Fonds, keine Einzelobjekte)
- [x] Deutsche Oppenheim Family Office — Grasbrunn/Köln — MFO → `deutsche_oppenheim` (gelb, Keferloh 1a; >10 Mrd €)
- [x] Tresono Family Office — Köln — MFO → `tresono` (gelb, Konrad-Adenauer-Ufer 7; Sachwert-/RE-Schwerpunkt, AUM k.A. → extrapolation)
- [x] FERI (Family Office) — Bad Homburg — MFO → `feri_fo` (gelb, Rathausplatz 8–10; Gruppe >39 Mrd €)
- [x] ODDO BHF / Bethmann Family Office — Frankfurt — MFO → `oddo_bhf_fo` (gelb, Gallusanlage 8). HINWEIS: NICHT Bethmann Bank (=ABN AMRO); ODDO BHF FO stammt aus BHF-BANK-Tradition.
- [x] Habbel, Pohlig & Partner — Wiesbaden — MFO → `habbel_pohlig` (gelb: MFO mit Kapital, aber nur liquide Wertpapiere / kein RE-Kern; Sonnenberger Str. 14)
- [x] Fürstlich Castell'sche Bank / Familie zu Castell — Würzburg — SFO/Bank → `castell` (gelb, SFO via F & C Capital; Familiensitz Schlossplatz 5 Castell; bestätigte Objekte Weingut + Forst). Bank selbst = operatives Institut, nicht als FO-Eintrag.

## Unternehmer-/Familien-Vermögen (verifizieren: FO vs. operativ)
- [x] Engelhorn Family Office (Curt-Engelhorn-Erben) — **skip (kein DE-Sitz)**: echtes SFO-Vermögen (~7 Mrd €), aber offshore (Bermuda/Guernsey-Trusts), auf 4 Zweige verteilt, kein öffentlich adressierbares deutsches FO-Vehikel und keine adressierbaren Objekte. NICHT verwechseln mit Mannheimer engelhorn-Handelsgruppe (andere Familie).
- [x] Röchling (Familie) / Röchling Immobilien — Mannheim/München → `roechling_immo` (gelb). Konzern Röchling SE (Kunststoffe) = **skip (operativ)**; privates RE-Vehikel Röchling Immobilien GmbH & Co. KG (Theresienstr. 40, München) aufgenommen. HINWEIS: Familienbezug plausibel, nicht 100 % bestätigt.
- [x] Merck (Familie E. Merck KG) — Darmstadt → `merck_vermoegens` (gelb, SFO). E. Merck KG = operative Konzernholding (skip); separates SFO **Emanuel-Merck-Vermögens-KG** (Emanuel-Merck-Platz 1) aufgenommen; bestätigte Objekte Rheinstraße 7–9 + Grundstücke.
- [x] Burda (Familie Burda) — Offenburg/München → `burda_bpi` (gelb). Hubert Burda Media = **skip (operativ)**; Familien-Investmentarm Burda Principal Investments (Arabellastr. 23, München) aufgenommen.
- [x] Wacker (Familie, Wacker Chemie) — München → `wacker_familie` (gelb, SFO). Wacker Chemie AG = operativ (skip); Dr. Alexander Wacker Familiengesellschaft mbH (Gisela-Stein-Str. 1) + Blue Elephant Holding (Bad Wiessee) aufgenommen.
- [x] Voith (Familie) — Heidenheim — **skip (operativ)**: nur Konzern-Ownership-Holding JMV SE & Co. KG (hält 50,8 % an Voith), kein diversifiziertes Privatvermögens-FO. Ex-FO Knapp Voith wurde kommerzielles MFO (DGK & Co. AG).
- [x] B. Braun / Familie Braun — Melsungen — **skip (operativ)**: nur Konzern-Ownership-Holdings (B. Braun Familienholding SE & Co. KG); kein dediziertes Familien-SFO belegt.
- [x] Boehringer Ingelheim / Familie von Baumbach — Ingelheim → `profunda` (gelb, SFO). Pharmakonzern = operativ (skip); dediziertes SFO **Profunda** (mit RE-Arm Profunda real estate; Sitz Ingelheim→Frankfurt) aufgenommen.

### Ergebnis Part 1 (Runde 1): 12 FO-Einträge · 3 skips (operativ/offshore: Engelhorn, Voith, B. Braun)

## Runde 2 — weitere echte FOs (Rhein-Main / West), gefunden via familyofficehub/altss/Northdata/IZ
- [x] `cara_investment` — Cara Investment GmbH, Frankfurt (SFO, **grün**) — RE-Tochter Cara Real Estate; **bestätigtes Gebäude Untermainkai 27–28, Frankfurt** (ODDO-BHF-Tower als Track Record verkauft).
- [x] `metzler_familie` — Familie von Metzler / B. Metzler seel. Sohn & Co., Frankfurt (SFO, gelb) — älteste dt. Familienbank als FO-Vehikel.
- [x] `hrk_lunis` — HRK LUNIS AG, Frankfurt (MFO, gelb).
- [x] `brehmer_cie` — BREHMER & CIE. Family Office, Frankfurt (MFO, gelb).
- [x] `fbg_family_office` — Family Office der Frankfurter Bankgesellschaft, Frankfurt (MFO, gelb).
- [x] `kuder_familypartner` — Kuder Familypartner GmbH, Hofheim/Taunus (MFO, gelb).
- [x] `fv_frankfurter_vermoegen` — FV Frankfurter Vermögen AG, Bad Homburg (VV/FO-Services, gelb).
- [x] `hfo_henkel` — HFO GmbH / Henkel Family Office, Düsseldorf (SFO, gelb, ~8,5 Mrd €).
- [x] `werhahn` — Wilh. Werhahn KG, Neuss (diversifizierte Familienholding, gelb).

### Runde-2-skips (bereits erfasst / operativ)
- Ströher (Wella) → schon in `data.js` (`stroeher`); Wella-Campus Berliner Allee 65 Darmstadt nur als Hinweis, kein Doppel.
- Wirtgen Invest, HQ Trust/Harald Quandt, Viessmann → bereits in `data.js`.
- Messer, Villeroy & Boch, Vorwerk, Stihl, Fresenius → **skip (operativ / kein separates FO)**.

### Stand nach Runde 2: 21 FO-Einträge in `data-part1.js`

## Runde 3 — bundesweiter Sweep (via familyofficehub/altss/familyofficeresearch/Northdata/IZ)
- [x] `schoerghuber` — Schörghuber (Bayerische Hausbau), München (SFO, **grün**) — **4 bestätigte München-Objekte**: Arabellahaus (Arabellastr. 5), Rosewood/Kardinal-Faulhaber-Str. 1, Stachus Rondell (Karlsplatz 1-4), Wohnquartier Nockherberg/Welfengarten. Bayerische Hausbau = RE-Tochter. (Fünf Höfe gehören Athos/Strüngmann, NICHT Schörghuber.)
- [x] `syngroh_grohe` — Syngroh / Family Office Klaus Grohe (Hansgrohe), Schiltach (SFO, gelb).
- [x] `oberwelland_storck` — TAO Holding / OW Familien Verwaltung (Familie Oberwelland, Storck), Berlin (SFO, gelb).
- [x] `lennertz_co` — Lennertz & Co. GmbH, Hamburg (MFO, gelb, >1 Mrd €).
- [x] `faber_castell_vv` — Faber-Castell Immobilienverwaltung (Familie Graf von Faber-Castell), Stein b. Nürnberg (SFO, gelb).
- [x] `schuerfeld_group` — Schürfeld Group (Familie Schürfeld), Hamburg (Beteiligungsholding, gelb).

### Runde-3-skips (operativ / kein separates FO)
- Sennheiser (nur Ownership-Holding), Knauf (Eigentümerholding, kein diversifiziertes FO), Grupp/Trigema, Klöckner → skip.
- Mohn, Miele, Melitta/Bentz, Bahlsen, Fischer, Kärcher, Diehl, Liebherr → in Part-2/Part-3-Zuständigkeit bzw. dort geprüft; hier nicht gedoppelt.

> HINWEIS: Diese 6 wurden BEWUSST in `data-part1.js` eingetragen (nicht in andere Parts) — Regel: nur die eigene Datei anfassen. Mehrere davon (Schörghuber, Faber-Castell, Syngroh) liegen thematisch in Süd/BW; falls Part 3 sie später ebenfalls findet, bitte dort NICHT doppeln (IDs siehe oben).

### Stand Part 1 gesamt: 27 FO-Einträge in `data-part1.js` · 3 skips (R1) + weitere skips dokumentiert.
