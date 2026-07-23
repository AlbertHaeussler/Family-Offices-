# Anleitung für alle 4 Research-Worker (gleiche Qualität, keine Doppelarbeit)

Ziel: die größten **Family Offices** in Deutschland + Nachbarländern (die in DE investieren)
recherchieren und in die Karten-App eintragen. **Priorität Nr. 1: so viele BESTÄTIGTE
Gebäude (mit exakter Adresse) wie möglich.**

---

## 0) Was ist ein Family Office? (STRENG — bitte einhalten!)
✅ **JA** = Vehikel, das das **private Vermögen einer Familie oder eines Unternehmers**
verwaltet/anlegt (SFO = Single, MFO = Multi). Auch eine **Ein-Personen-Holding** eines
Unternehmers zählt (z. B. Kühne Holding). Auch wenn das FO eine operative Immobilien-**Tochter**
besitzt (wie Otto→ECE, Brenninkmeijer→Redevco) — dann ist das **FO** der Eintrag, die Tochter
nur die operative RE-Gesellschaft.

❌ **NEIN** = ein **operatives Immobilien-/Bau-/Entwicklungsunternehmen** oder ein normales
operatives Familienunternehmen (Bauträger, Projektentwickler, Wohnungsbaufirma, RE-Fondsmanager
für Dritte, oder Industriekonzern wie Freudenberg/Trumpf/Heraeus).
Beispiele, die RAUS sind: Zech, B&L, Aug. Prien, ehret+klein, Groß & Partner, Pandion, Bauwens,
Accumulata, Sahle Wohnen, Garbe, Momenirt, Becken, Gundlach, Soravia, Trei (das ist nur die
RE-Tochter von Molento!). **Im Zweifel: NICHT aufnehmen und in deiner TARGETS.md als „skip
(operativ)" markieren.**

---

## 1) Wo du schreibst (WICHTIG gegen Git-Konflikte)
- Du bearbeitest **AUSSCHLIESSLICH** deine eigene Datei: `research/partN/data-partN.js`.
- **Nicht** `data.js`, **nicht** `index.html`, **nicht** die Ordner der anderen Worker anfassen.
- So kollidiert niemand. Vor jedem Push: `git fetch origin main && git merge --no-edit origin/main`
  (deine Datei ist konfliktfrei, weil nur du sie änderst), dann committen + `git push`.
  Auf `main` und auf den Feature-Branch pushen.

## 2) Wie du eine Firma einträgst
In `data-partN.js` ein Objekt in das `concat([...])`-Array einfügen (Komma-getrennt).
**Kopiervorlage** (alle Felder ausfüllen; Zahlen ohne Anführungszeichen):

```js
{
  id:"kurz_eindeutig",                       // klein, eindeutig, keine Dopplung mit anderen
  name:"Offizieller Name (Familie X)", kurz:"Kurzname",
  typ:"SFO",                                  // SFO oder MFO
  land:"Deutschland",                         // oder z.B. "Schweiz (investiert in DE)"
  hqAddress:"Straße Hausnr., PLZ Ort",        // SO EXAKT WIE MÖGLICH (Impressum/Northdata)
  hqLat:50.00, hqLng:8.00,                     // Koordinaten des HQ (best effort)
  website:"domain.de", domain:"domain.de",     // domain = für Logo (icons.duckduckgo.com). Kein Logo/keine Website -> domain:""
  linkedin:"", contactName:"...", contactRole:"...", contactChannel:"...",
  contactLinkedin:"", contactLinkedinName:"", // optional, nur wenn verifiziert
  category:"gruen",                            // "gruen"=großes RE | "gelb"=minimal/kein RE-Kern, aber Kapital | "rot"=kein RE & kein Interesse
  aum:{ value:5.0, unit:"Mrd €", basis:"quelle", note:"...", sources:[{label:"...",url:"https://..."}] },
  reQuote:{ value:0.3, basis:"quelle", note:"...", sources:[{label:"...",url:"https://..."}] }, // Anteil RE am Vermögen (0..1)
  reInvestedEUR:1.5,                           // grob € in Immobilien (Mrd)
  usage:{ Buero:40, Wohnen:30, Retail:30 },    // Nutzungs-Split (Summe 100). Keys: Buero,Wohnen,Retail,Logistik,Hotel,Gastro,Sonstiges
  confirmedObjects:[                           // <-- HIER DIE GEBÄUDE! So viele wie möglich.
    { name:"Objektname", address:"Straße Hausnr., PLZ Ort", lat:50.0, lng:8.0,
      usage:"Buero", area:"~10.000 m²", purchaseDate:"2021", valueEUR:200, status:"Bestand",
      images:[], sources:[{label:"Quelle",url:"https://..."}] }
  ],
  heatmap:[                                    // Regionen, wo investiert wird (auch ohne Adresse)
    { name:"Region", intensity:"hoch", usages:["Buero"], center:[50.0,8.0], radiusKm:25,
      basis:"quelle", note:"...", sources:[{label:"...",url:"https://..."}] }
  ]
}
```

## 3) Qualitätsregeln (STRENG)
- **basis:"quelle"** = belegt (echter Link). **basis:"extrapolation"** = reine Einschätzung ohne
  Einzelquelle → dann `sources:[]` und im `note` „Reine Einschätzung" schreiben. **Niemals** eine
  Schätzung als belegt tarnen.
- **Adressen so exakt wie möglich** (Impressum, Northdata, Objekt-/Portfolio-Seite). Wenn nur die
  Stadt sicher ist: Stadt eintragen und im Namen/Notiz „Hausnr. nicht verifiziert".
- **`confirmedObjects` NUR in Deutschland!** Das FO/HQ darf im Ausland sitzen (CH/AT/NL/LU), aber
  **gemappte Objekte müssen in Deutschland liegen.** Ausländische Immobilien (z. B. Schweizer
  Hotels) NICHT als confirmedObjects eintragen — höchstens im `note` erwähnen. Sonst erscheinen
  Pins in der Schweiz/Österreich, was falsch ist.
- **Multi Family Offices (MFOs)** sind i. d. R. **gelb** (sie allokieren für Klienten in Immobilien,
  meist über Fonds), nicht „rot". „rot" nur bei echtem Beleg, dass kein RE & kein Interesse besteht.
- **Operative RE-Tochter ≠ FO:** Wenn eine Familie eine operative Immobilienfirma hat (wie Hopp→Actris,
  Haub→Trei), ist der Eintrag das **FO/die Familie**, die Tochter nur die RE-Gesellschaft — nicht die
  operative GmbH als „Family Office" bezeichnen.
- **Gebäude finden — 3 Spuren pro grünem FO:** (a) börsennotierte/registrierte RE-**Tochter** mit
  öffentlichem Portfolio (Otto→Deutsche EuroShop, Brenninkmeijer→Redevco), (b) eigene
  **Portfolio-Seite**, (c) **Fachpresse** „[Familie/FO] kauft/erwirbt …" (IZ, Thomas Daily,
  deal-magazin, immobilienmanager, private-banking-magazin). **Lade die Objektseiten wirklich —
  nicht bei „nichts gefunden" aufhören.**
- **category ehrlich:** grün nur bei echtem großen Immobiliengeschäft; die meisten reinen
  Industrie-/Beteiligungsholdings sind **gelb** (Kapital da, aber kein RE-Kern).
- Keine Dopplungen: prüfe die `MASTER_LIST.md` (bereits erledigte = 29 in `data.js`) und deine
  eigene TARGETS-Liste.

## 4) Testen vor Push
```bash
node -e "global.window={}; require('./data.js'); require('./research/partN/data-partN.js'); \
  console.log('firms:', window.FO_DATA.length); \
  const bad=window.FO_DATA.filter(o=>!o.id||!o.aum||!o.heatmap||!o.usage); console.log('malformed:',bad.length);"
```
`malformed:0` muss stehen. Optional die App lokal öffnen (`python3 -m http.server`).

## 5) Deine Zielliste
Steht in `research/partN/TARGETS.md`. Arbeite sie ab, hake ab, ergänze gern weitere echte FOs, die
dir begegnen (aber prüfe, dass sie nicht in einem anderen Part stehen — siehe MASTER_LIST.md).
