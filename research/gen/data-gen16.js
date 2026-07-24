/* Worker 16 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   HINWEIS: In dieser Session waren die Recherche-Tools nicht nutzbar (WebSearch-Budget der geteilten
   Session mit 200/200 aufgebraucht; WebFetch-Egress lieferte für ALLE Hosts HTTP 403 vom Egress-Proxy,
   auch example.com/wikipedia — org-seitige Egress-Sperre, kein Umgehen laut /root/.ccr/README.md).
   Daher wurde NICHTS erfunden. Es ist nur die Firma eingetragen, die aus gesichertem Allgemeinwissen
   verantwortbar beschreibbar ist (Tessner). Alle Wertfelder sind ehrlich als "extrapolation" markiert
   (keine belegbaren Live-Quellen). Die übrigen 9 Ziele sowie 1 §0-Skip siehe Worker-Bericht. */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"tessner_holding",
    name:"Tessner Holding KG (Familie Tessner)", kurz:"Tessner",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Breite Str. 98, 38640 Goslar",
    hqLat:51.9057, hqLng:10.4290,
    website:"tessner.de", domain:"tessner.de",
    linkedin:"", contactName:"Familie Tessner", contactRole:"Gesellschafter / Holding", contactChannel:"über tessner.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (in dieser Session keine Live-Recherche möglich). Plausibel Einzelhandels-/Fachmarkt-Immobilien im Umfeld der eigenen Möbel-Retail-Standorte (Roller, Tejo) sowie bestandsorientierte Gewerbeimmobilien; Details, Ticketgrößen und Regionen sind ohne belastbare Quelle nicht verifiziert.",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Familienholding der Familie Tessner (Goslar), Muttergesellschaft der Möbel-Discount-Gruppe ROLLER sowie Tejo. Größenordnung geschätzt; kein belegter Stichtagswert (Web-Recherche in dieser Session nicht verfügbar).", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — operativer Kern ist Möbel-Einzelhandel; Immobilien nur teilweise (Fachmarkt-/Standortimmobilien), kein publizierter RE-Anteil.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Retail:70, Logistik:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Goslar / Niedersachsen (Sitz)", intensity:"mittel", usages:["Retail","Sonstiges"], center:[51.9057,10.4290], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — Holdingsitz Goslar. Keine Einzelobjekte ohne Recherche verifiziert.", sources:[] },
      { name:"Deutschland (Möbel-Retail-Standorte Roller/Tejo)", intensity:"mittel", usages:["Retail","Logistik"], center:[51.2,10.0], radiusKm:300,
        basis:"extrapolation", note:"Reine Einschätzung — ROLLER/Tejo betreiben bundesweit Fachmärkte; welche Standort-Immobilien im Eigentum der Holding stehen, ist ohne Live-Recherche nicht verifizierbar. Keine confirmedObjects, da keine Adresse gesichert.", sources:[] }
    ]
  }

]);
