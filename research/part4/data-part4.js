/* Datendatei für Worker 4 (Nachbarländer CH/AT/NL/LU, die in DE investieren).
   NUR diese Datei bearbeiten. Schema: siehe research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"jacobs", name:"Jacobs Holding AG / Jacobs Capital (Family Office Jacobs)", kurz:"Jacobs",
    typ:"SFO", land:"Schweiz (investiert in DE)", hqAddress:"Zürich (CH)",
    hqLat:47.3700, hqLng:8.5400, website:"jacobscap.com", domain:"jacobscap.com",
    linkedin:"", contactName:"Familie Jacobs (Nicolas/Philippe/Renata Jacobs)", contactRole:"Family Office / Private Equity",
    contactChannel:"über jacobscap.com, Zürich", category:"gelb",
    aum:{ value:10, unit:"Mrd €", basis:"extrapolation",
      note:"SFO seit 1994 (Verkauf Jacobs Suchard); Fokus Private Equity (Barry Callebaut u. a.) + etwas Real Assets.",
      sources:[{label:"familyofficehub – Jacobs Holding",url:"https://familyofficehub.io/family-office-portraits/jacobs-holding-single-family-office-in-zurich-switzerland-focus-on-private-equity/"},
               {label:"Wikipedia – Jacobs Holding",url:"https://en.wikipedia.org/wiki/Jacobs_Holding"}] },
    reQuote:{ value:0.08, basis:"extrapolation", note:"Immobilien nur kleine Real-Assets-Quote (v. a. PE-Fokus). Reine Einschätzung.", sources:[] },
    reInvestedEUR:0.8, usage:{ Sonstiges:70, Hotel:30 },
    confirmedObjects:[
      { name:"Schloss Marbach", address:"Marbach, 78337 Öhningen (Bodensee)", lat:47.6550, lng:8.8750,
        usage:"Hotel", area:"Schloss-/Seminarhotel am Bodensee", purchaseDate:"Real Asset (Familienbesitz)", valueEUR:30, status:"Bestand", images:[],
        sources:[{label:"altss – Jacobs Holding",url:"https://altss.com/profile/jacobs-holding"}] }
    ],
    heatmap:[
      { name:"Bodensee / Süd-DE (Real Assets)", intensity:"niedrig", usages:null, center:[47.66,8.88], radiusKm:30, basis:"extrapolation",
        note:"Nur einzelne Real Assets in DE; kein RE-Anlageportfolio.", sources:[] }
    ]
  },
  {
    id:"happel", name:"Luserve AG / HFI Global (Family Office Otto Happel)", kurz:"Happel (Luserve)",
    typ:"SFO", land:"Schweiz (GEA-Vermögen, DE-Ursprung)", hqAddress:"Luzern (CH)",
    hqLat:47.0500, hqLng:8.3100, website:"—", domain:"",
    linkedin:"", contactName:"Otto Happel (GEA-Gründerfamilie)", contactRole:"Vermögensverwaltung / Beteiligungen",
    contactChannel:"privat; Luserve AG / HFI Global, Luzern", category:"gelb",
    aum:{ value:4, unit:"Mrd €", basis:"extrapolation",
      note:"GEA-Vermögen (~4,1 Mrd $, Forbes); Family Office Luserve (1999) + HFI Global (2021). Kein RE-Kern.",
      sources:[{label:"Forbes – Otto Happel",url:"https://www.forbes.com/profile/otto-happel/"},
               {label:"Luserve AG – Moneyhouse",url:"https://www.moneyhouse.ch/en/company/luserve-ag-1972335241"}] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Kein bekanntes Immobilien-Kerngeschäft. Reine Einschätzung.", sources:[] },
    reInvestedEUR:0.2, usage:{ Sonstiges:100 }, confirmedObjects:[],
    heatmap:[
      { name:"Luzern (Sitz)", intensity:"niedrig", usages:null, center:[47.05,8.31], radiusKm:25, basis:"extrapolation",
        note:"Kein öffentliches RE-Portfolio; DE-Bezug über GEA-Ursprung.", sources:[] }
    ]
  }

]);
