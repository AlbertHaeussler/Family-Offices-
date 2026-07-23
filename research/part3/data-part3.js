/* Datendatei für Worker 3 — NUR diese Datei bearbeiten (kein Git-Konflikt mit anderen).
   Firmen als Objekte in das Array unten pushen. Schema: siehe research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  // ========================= GRÜN (großes/aktives RE) =========================

  {
    id:"holtzbrinck_dvh",
    name:"Dieter von Holtzbrinck Vermögensverwaltung GmbH (Familie von Holtzbrinck)",
    kurz:"von Holtzbrinck (DvH)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Kernerstraße 50, 70182 Stuttgart",
    hqLat:48.7818, hqLng:9.1870,
    website:"dvhrealestate.de", domain:"dvhrealestate.de",
    linkedin:"", contactName:"Dieter von Holtzbrinck", contactRole:"Inhaber/Prinzipal",
    contactChannel:"über DvH Real Estate GmbH (München) – Investment/Ankauf",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Privatvermögen Dieter von Holtzbrinck grob ~0,4 Mrd € (Medien-/VC-Beteiligungen); RE-Projektvolumen über DvH Real Estate kumuliert >400 Mio €.",
      sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation",
      note:"Reine Einschätzung: erhebliches, aber nicht dominierendes RE-Engagement über die Tochter DvH Real Estate; Kernvermögen aus Verlags-/Medienbeteiligungen und Venture Capital.",
      sources:[] },
    reInvestedEUR:0.4,
    usage:{ Buero:45, Wohnen:30, Hotel:15, Retail:10 },
    confirmedObjects:[
      { name:"63GRAD (Geschäftshaus am Neuer Wall)", address:"Neuer Wall 63, 20354 Hamburg", lat:53.5510, lng:9.9882,
        usage:"Buero", area:"~7 Geschosse", purchaseDate:"2012", valueEUR:null, status:"Bestand/verkauft",
        images:[], sources:[
          {label:"DvH Real Estate – Referenz 63GRAD",url:"https://dvhrealestate.de/projekte-referenzen/ref-hh-wallhaus"},
          {label:"Immobilien Zeitung – 63Grad Hamburg",url:"https://www.iz.de/profile/projekte/63Grad%20Hamburg/"}] },
      { name:"KölnCubus (Büroimmobilie)", address:"Erna-Scheffler-Straße 1, 51103 Köln-Deutz", lat:50.9385, lng:6.9760,
        usage:"Buero", area:"~11.000 m²", purchaseDate:"2013", valueEUR:null, status:"Bestand/verkauft",
        images:[], sources:[
          {label:"DvH Real Estate – Referenz KölnCubus",url:"https://www.dvhrealestate.de/projekte-referenzen/ref-koelncubus"},
          {label:"Immobilien Zeitung – KölnCubus",url:"https://www.iz.de/profile/projekte/B%C3%BCroimmobilie%20K%C3%B6lnCubus/"}] },
      { name:"My Home Boardinghouse Freiham (Hausnr. nicht verifiziert)", address:"Clarita-Bernhard-Straße, 81249 München-Freiham", lat:48.1450, lng:11.4130,
        usage:"Wohnen", area:"~12.452 m², ~330 Apartments", purchaseDate:"2019", valueEUR:null, status:"Bestand/in Betrieb",
        images:[], sources:[
          {label:"DvH Real Estate – Referenz My Home Freiham",url:"https://dvhrealestate.de/projekte-referenzen/ref-muc-myhome"}] },
      { name:"Living Plaza / Langenhorner Markt (Stadtteilzentrum)", address:"Langenhorner Markt, 22415 Hamburg-Langenhorn", lat:53.6640, lng:10.0100,
        usage:"Retail", area:"~24.800 m² Neubau", purchaseDate:null, status:"Projektentwicklung/Neubau",
        images:[], sources:[
          {label:"DvH Real Estate – Referenz Langenhorner Markt",url:"https://dvhrealestate.de/projekte-referenzen/ref-hh-langenhorner-markt"}] }
    ],
    heatmap:[
      { name:"München", intensity:"hoch", usages:["Wohnen","Hotel","Buero"], center:[48.137,11.575], radiusKm:20,
        basis:"quelle", note:"DvH-Real-Estate-Projekte (Freiham, Dachau).",
        sources:[{label:"DvH Real Estate – Projekte",url:"https://dvhrealestate.de/projekte-referenzen/"}] },
      { name:"Hamburg", intensity:"hoch", usages:["Buero","Retail","Wohnen"], center:[53.551,9.993], radiusKm:15,
        basis:"quelle", note:"Neuer Wall (63GRAD), Langenhorner Markt.",
        sources:[{label:"DvH Real Estate – Projekte",url:"https://dvhrealestate.de/projekte-referenzen/"}] },
      { name:"Köln", intensity:"mittel", usages:["Buero"], center:[50.938,6.960], radiusKm:10,
        basis:"quelle", note:"KölnCubus (Deutz).",
        sources:[{label:"DvH Real Estate – KölnCubus",url:"https://www.dvhrealestate.de/projekte-referenzen/ref-koelncubus"}] }
    ]
  },

  {
    id:"actris_hopp",
    name:"Actris GmbH (operatives Immobilien-Vehikel der Familie Hopp; FO = dievini)",
    kurz:"Hopp Immobilien-Vehikel (Actris)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Hans-Thoma-Straße 22, 68163 Mannheim",
    hqLat:49.4760, hqLng:8.4655,
    website:"", domain:"",
    linkedin:"",
    contactName:"Daniel Hopp", contactRole:"Geschäftsführer Actris",
    contactChannel:"Actris GmbH – Mannheim",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:2.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Actris ist die operative Immobilien-GmbH der Familie Hopp (analog Trei bei Molento/Haub) — KEIN Family Office. Das Hopp-Family-Office ist dievini (separat erfasst). Kein offizieller RE-AUM publiziert; Größenordnung grob geschätzt.",
      sources:[] },
    reQuote:{ value:0.9, basis:"quelle",
      note:"Actris ist die operative Immobilien- und Beteiligungsgesellschaft der Familie Hopp – klar RE-dominiert.",
      sources:[{label:"portfolio-vm – Hopp Family Office sucht Immobilienprofi",url:"https://portfolio-vm.com/hopp-family-office-sucht-immobilienprofi/"},
        {label:"Wikipedia – Actris",url:"https://de.wikipedia.org/wiki/Actris"}] },
    reInvestedEUR:1.8,
    usage:{ Wohnen:40, Buero:30, Retail:15, Logistik:5, Hotel:5, Sonstiges:5 },
    confirmedObjects:[
      { name:"Neuer Henninger Turm", address:"Hainer Weg 60-64, 60599 Frankfurt am Main", lat:50.0885, lng:8.6905,
        usage:"Wohnen", area:"33 Etagen, ~140 m, ~207 Wohnungen", purchaseDate:"2017", valueEUR:null, status:"Bestand (fertiggestellt 2017)",
        images:[], sources:[
          {label:"Wikipedia – Henninger Turm",url:"https://en.wikipedia.org/wiki/Henninger_Turm"},
          {label:"Bauwelt – Henninger-Turm-Areal",url:"https://www.bauwelt.de/themen/Optimierungsversuche-Henninger-Turm-Areal-Frankfurt-am-Main-2097034.html"},
          {label:"companyhouse – Actris Henninger Turm GmbH & Co. KG",url:"https://www.companyhouse.de/en/Actris-Henninger-Turm-GmbH-Co-KG-Mannheim"}] }
    ],
    heatmap:[
      { name:"Rhein-Neckar (Mannheim/St. Leon-Rot/Walldorf)", intensity:"hoch", usages:["Buero","Retail","Hotel"], center:[49.40,8.55], radiusKm:25,
        basis:"quelle", note:"Sitz und Kern-Immobilienbestand der Familie Hopp.",
        sources:[{label:"Northdata – Actris GmbH",url:"https://www.northdata.com/Actris%20GmbH,%20Mannheim/HRB%20712321"}] },
      { name:"Rhein-Main (Frankfurt/Bad Homburg/Oberursel)", intensity:"hoch", usages:["Wohnen","Buero"], center:[50.15,8.65], radiusKm:20,
        basis:"quelle", note:"Henninger Turm Frankfurt; eigene Objektgesellschaften in Bad Homburg/Oberursel.",
        sources:[{label:"Bauwelt – Henninger-Turm-Areal",url:"https://www.bauwelt.de/themen/Optimierungsversuche-Henninger-Turm-Areal-Frankfurt-am-Main-2097034.html"}] }
    ]
  },

  {
    id:"kipp",
    name:"Family Office Kipp / Bechtolsheimer (Erben Karl-Heinz Kipp, Massa-Gründer)",
    kurz:"Kipp (Bechtolsheimer)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Ochsenklauer 6a, 55232 Alzey (Immobilienverwaltung; nicht final verifiziert)",
    hqLat:49.7450, hqLng:8.1150,
    website:"", domain:"",
    linkedin:"", contactName:"Ursula Bechtolsheimer-Kipp / Götz Bechtolsheimer", contactRole:"Haupterbin / Family-Office-Steuerung",
    contactChannel:"über Karl-Heinz Kipp Immobilien GmbH / Tschuggen Collection AG",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:3.5, unit:"Mrd €", basis:"quelle",
      note:"Vermögen Ursula Bechtolsheimer-Kipp ~3,5 Mrd USD (Forbes); Karl-Heinz Kipp 2017 ~4,9 Mrd USD.",
      sources:[{label:"Forbes – Ursula Bechtolsheimer-Kipp",url:"https://www.forbes.com/profile/ursula-bechtolsheimer-kipp/"},
        {label:"Forbes – Karl-Heinz Kipp",url:"https://www.forbes.com/profile/karl-heinz-kipp/"}] },
    reQuote:{ value:0.75, basis:"extrapolation",
      note:"Reine Einschätzung: zweites Vermögen von Karl-Heinz Kipp ist immobilienbasiert (ehem. Massa-Handelsimmobilien in DE, an Metro vermietet; Luxushotels CH; Büro NY).",
      sources:[] },
    reInvestedEUR:2.6,
    usage:{ Retail:40, Hotel:35, Buero:25 },
    // Hinweis: Kipp hält kaum öffentlich adressierbare Einzelobjekte in DE (ehem. Massa-
    // Handelsimmobilien sind an Metro vermietet, keine Einzeladressen öffentlich). Die bekannten
    // Objekte (Tschuggen Grand Hotel Arosa, Hotel Eden Roc Ascona, Carlton St. Moritz) liegen in
    // der SCHWEIZ und gehören daher NICHT in confirmedObjects (nur DE-Objekte zulässig).
    confirmedObjects:[],
    heatmap:[
      { name:"Rheinhessen/Alzey (DE-Handelsimmobilien)", intensity:"mittel", usages:["Retail"], center:[49.745,8.115], radiusKm:40,
        basis:"quelle", note:"Ehemalige Massa-/Handelsimmobilien, langfristig an Metro vermietet (keine Einzeladressen öffentlich).",
        sources:[{label:"Wikipedia – Karl-Heinz Kipp",url:"https://en.wikipedia.org/wiki/Karl-Heinz_Kipp"}] },
      { name:"Graubünden/Tessin (CH-Hotels)", intensity:"hoch", usages:["Hotel"], center:[46.60,9.30], radiusKm:80,
        basis:"quelle", note:"Tschuggen Collection: Arosa, St. Moritz, Ascona.",
        sources:[{label:"SRF – Heimliche Retter der Schweizer Hotellerie",url:"https://www.srf.ch/news/wirtschaft/investition-in-den-tourismus-heimliche-retter-der-schweizer-hotellerie"}] }
    ]
  },

  // ========================= GELB (Kapital da, kein RE-Kern / verflochten) =========================

  {
    id:"mueller_erwin",
    name:"Erwin und Reinhard Müller Grundstücks GmbH (Vermögen Erwin Müller, Müller Drogerie)",
    kurz:"Erwin Müller (Grundbesitz)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Albstraße 92, 89081 Ulm",
    hqLat:48.3990, hqLng:9.9730,
    website:"em-group.de", domain:"em-group.de",
    linkedin:"", contactName:"Erwin Müller / Reinhard Müller", contactRole:"Gründer/Eigentümer",
    contactChannel:"über EM-Gruppe / Erwin Müller Real Estate GmbH",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:2.3, unit:"Mrd €", basis:"quelle",
      note:"Nettovermögen Erwin Müller ~2,3 Mrd € (Milliardär, Forbes/Statista); Immobilien sind Teilvermögen neben der operativen Drogeriekette.",
      sources:[{label:"Forbes – Erwin Franz Müller",url:"https://www.forbes.com/profile/erwin-franz-mueller/"}] },
    reQuote:{ value:0.25, basis:"extrapolation",
      note:"Reine Einschätzung: privater/halb-privater Immobilienbesitz (Grundstücke, Geschäftshäuser, Bauprojekte Ulm/Neu-Ulm, Mallorca) substanziell, aber Minderheit des Gesamtvermögens.",
      sources:[] },
    reInvestedEUR:0.6,
    usage:{ Retail:45, Buero:20, Wohnen:20, Hotel:5, Logistik:5, Sonstiges:5 },
    confirmedObjects:[
      { name:"Ehemaliges Hertie-Kaufhaus Hilden", address:"Mittelstraße 17, 40721 Hilden", lat:51.1690, lng:6.9390,
        usage:"Retail", area:"~5.234 m² Grundstück", purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"Immobilien Zeitung – Müller kauft Hertie-Haus Hilden",url:"https://www.iz.de/transaktionen/news/-mueller-drogerie-kauft-hertie-haus-in-hilden-127968"},
          {label:"Textilwirtschaft – Müller kauft Ex-Hertie-Haus",url:"https://www.textilwirtschaft.de/business/news/Mueller-Drogerie-kauft-Ex-Hertie-Haus-93378"}] },
      { name:"Motel One Ulm (geplant, ehem. Abt-Gebäude)", address:"Münsterplatz, 89073 Ulm", lat:48.3985, lng:9.9915,
        usage:"Hotel", area:null, purchaseDate:null, valueEUR:null, status:"Planung",
        images:[], sources:[
          {label:"Tageskarte – Erwin Müller will Hotel in Ulm bauen",url:"https://www.tageskarte.io/hotellerie/detail/motel-one-drogerie-unternehmer-erwin-mueller-will-hotel-in-ulm-bauen.html"}] }
    ],
    heatmap:[
      { name:"Ulm/Neu-Ulm", intensity:"hoch", usages:["Retail","Buero","Wohnen","Hotel"], center:[48.398,9.991], radiusKm:8,
        basis:"quelle", note:"Kern der privaten Immobilien-/Bauprojekte (u.a. Wohn-/Geschäftskomplex, Motel One).",
        sources:[{label:"Tageskarte – Hotel Ulm",url:"https://www.tageskarte.io/hotellerie/detail/motel-one-drogerie-unternehmer-erwin-mueller-will-hotel-in-ulm-bauen.html"}] },
      { name:"Hilden/Rheinland", intensity:"mittel", usages:["Retail"], center:[51.170,6.939], radiusKm:5,
        basis:"quelle", note:"Ex-Hertie-Haus Hilden.",
        sources:[{label:"Immobilien Zeitung – Hilden",url:"https://www.iz.de/transaktionen/news/-mueller-drogerie-kauft-hertie-haus-in-hilden-127968"}] }
    ]
  },

  {
    id:"schwarz_dieter",
    name:"Dieter Schwarz TV-Vermögensverwaltung GmbH (Vermögen Dieter Schwarz, Lidl/Kaufland)",
    kurz:"Schwarz Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Rötelstraße 35, 74172 Neckarsulm (Adresse nur einfach belegt)",
    hqLat:49.1920, hqLng:9.2270,
    website:"", domain:"",
    linkedin:"", contactName:"Dieter Schwarz", contactRole:"Prinzipal",
    contactChannel:"über Dieter Schwarz Stiftung / Schwarz Gruppe",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:40, unit:"Mrd €", basis:"quelle",
      note:"Privatvermögen Dieter Schwarz ~40+ Mrd € (reichster Deutscher); überwiegend im Schwarz-Gruppen-/Stiftungskonstrukt gebunden, nicht frei im privaten Vehikel.",
      sources:[{label:"Forbes – Dieter Schwarz",url:"https://www.forbes.com/profile/dieter-schwarz/"}] },
    reQuote:{ value:0.03, basis:"extrapolation",
      note:"Reine Einschätzung: Immobilien liegen operativ bei der Schwarz Gruppe (Lidl/Kaufland-Standorte, Logistik) und bei der Stiftung (Bildungscampus Heilbronn), nicht im privaten FO-Vehikel.",
      sources:[] },
    reInvestedEUR:0.0,
    usage:{ Retail:60, Logistik:30, Buero:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Heilbronn-Franken (Stiftungs-/Gruppenumfeld)", intensity:"mittel", usages:["Buero","Sonstiges"], center:[49.142,9.211], radiusKm:15,
        basis:"quelle", note:"Bildungscampus/IPAI Heilbronn (Dieter Schwarz Stiftung); strukturell Stiftung/Konzern, nicht privates FO.",
        sources:[{label:"Dieter Schwarz Stiftung – Bildungscampus",url:"https://www.dieter-schwarz-stiftung.de/kategorie/bildungscampus.html"}] }
    ]
  },

  {
    id:"duerr_heinz",
    name:"Heinz Dürr Invest GmbH (Privatvermögen Familie Heinz Dürr)",
    kurz:"Heinz Dürr (Invest)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Charlottenstraße 57, 10117 Berlin (nicht final verifiziert)",
    hqLat:52.5150, hqLng:13.3910,
    website:"", domain:"",
    linkedin:"", contactName:"Heinz Dürr / Heide Dürr", contactRole:"Gesellschafter/GF",
    contactChannel:"über Heinz Dürr Invest GmbH, Berlin",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: privates Beteiligungsvehikel neben der Ankerholding an der Dürr AG; kein publizierter FO-AUM.",
      sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation",
      note:"Reine Einschätzung: Immobilien nur Nebenschauplatz (privates Vehikel Elias Invest GmbH für An-/Verkauf von Immobilien); Schwerpunkt Beteiligungen (u.a. ubitricity).",
      sources:[] },
    reInvestedEUR:0.2,
    usage:{ Wohnen:50, Buero:40, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin", intensity:"niedrig", usages:["Wohnen","Buero"], center:[52.515,13.391], radiusKm:15,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz des privaten Vehikels; keine belegten Einzelobjekte.",
        sources:[] }
    ]
  },

  // ========================= ROT (kein RE-Kern) =========================

  {
    id:"sandschott",
    name:"Sand und Schott GmbH (bankenunabhängige Vermögensverwaltung / Family-Office-Services)",
    kurz:"Sand und Schott",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Adlerstraße 31, 70199 Stuttgart",
    hqLat:48.7625, hqLng:9.1690,
    website:"sand-schott.de", domain:"sand-schott.de",
    linkedin:"", contactName:"Arne Sand / Dr. Max Schott", contactRole:"Gründer/Geschäftsführer",
    contactChannel:"info@sand-schott.de / 0711 601800-80",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"quelle",
      note:"~500 Mio € verwaltetes Wertpapiervermögen (unabhängige Vermögensverwaltung mit Family-Office-Services).",
      sources:[{label:"VuV – Sand und Schott GmbH",url:"https://vuv.de/vermoegensverwalter/sand-und-schott-gmbh-stuttgart/"}] },
    reQuote:{ value:0.0, basis:"quelle",
      note:"Reiner Wertpapier-Asset-Manager, kein Immobilienbestand oder -tochter.",
      sources:[{label:"VuV – Sand und Schott GmbH",url:"https://vuv.de/vermoegensverwalter/sand-und-schott-gmbh-stuttgart/"}] },
    reInvestedEUR:0.0,
    usage:{ Sonstiges:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Stuttgart (Sitz)", intensity:"niedrig", usages:["Sonstiges"], center:[48.7625,9.1690], radiusKm:5,
        basis:"extrapolation", note:"Reine Einschätzung: kein Immobilien-Investment; nur Bürostandort.",
        sources:[] }
    ]
  },

  {
    id:"lautenschlaeger",
    name:"Manfred Lautenschläger Beteiligungen GmbH (Vermögen MLP-Gründer M. Lautenschläger)",
    kurz:"Lautenschläger (ML)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Ernst-Reuter-Straße 12, 69251 Gaiberg",
    hqLat:49.3585, hqLng:8.7475,
    website:"", domain:"",
    linkedin:"", contactName:"Manfred Lautenschläger", contactRole:"Stifter/Eigentümer",
    contactChannel:"über Manfred Lautenschläger Beteiligungen GmbH / ML Immobilien GmbH & Co. KG",
    contactLinkedin:"", contactLinkedinName:"",
    category:"rot",
    aum:{ value:2.9, unit:"Mrd €", basis:"quelle",
      note:"Vermögen ~2,9 Mrd € (MLP-Anteile); dominiert von Beteiligungs-/Stiftungsvermögen.",
      sources:[{label:"IK-Gruppe – Manfred Lautenschläger",url:"https://ik-gruppe.com/profil/manfred-lautenschlager"}] },
    reQuote:{ value:0.1, basis:"extrapolation",
      note:"Reine Einschätzung: ML Immobilien GmbH & Co. KG existiert als formaler Immobilienträger, aber ohne öffentlich belegtes Objektportfolio.",
      sources:[] },
    reInvestedEUR:0.2,
    usage:{ Wohnen:50, Buero:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Heidelberg/Rhein-Neckar", intensity:"niedrig", usages:["Wohnen","Sonstiges"], center:[49.39,8.70], radiusKm:15,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz der Vehikel; keine bestätigten Einzelobjekte.",
        sources:[] }
    ]
  },

  // ================= RUNDE 2: weitere echte Family Offices (Süd + überall) =================

  // ---- GRÜN (großes/aktives RE mit bestätigten deutschen Gebäuden) ----

  {
    id:"schoerghuber",
    name:"Schörghuber Stiftung & Co. Holding KG (Familie Schörghuber) – RE-Tochter Bayerische Hausbau",
    kurz:"Schörghuber (Bayerische Hausbau)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Denninger Straße 165, 81925 München",
    hqLat:48.1636, hqLng:11.6220,
    website:"schoerghuber.group", domain:"schoerghuber.group",
    linkedin:"", contactName:"Alexandra Schörghuber", contactRole:"Inhaberin / Vorsitzende Gesellschafterausschuss",
    contactChannel:"über Bayerische Hausbau GmbH & Co. KG – Investment/Ankauf",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:9.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Familienvermögen der Gruppe (Paulaner, Bayerische Hausbau, Hotels/Aviation) grob geschätzt; kein offizieller AUM-Wert publiziert.",
      sources:[] },
    reQuote:{ value:0.4, basis:"quelle",
      note:"Immobilienportfolio Bayerische Hausbau ~3,5 Mrd € (Büro/Wohnen/Retail/Hotel/Gastro).",
      sources:[{label:"Bayerische Hausbau – Über uns",url:"https://www.hausbau-realestate.de/unternehmen/ueber-uns"},
        {label:"Wikipedia – Bayerische Hausbau",url:"https://de.wikipedia.org/wiki/Bayerische_Hausbau"}] },
    reInvestedEUR:3.5,
    usage:{ Buero:30, Wohnen:30, Retail:20, Hotel:10, Gastro:5, Sonstiges:5 },
    confirmedObjects:[
      { name:"Joseph Pschorr Haus", address:"Neuhauser Straße 9, 80331 München", lat:48.1378, lng:11.5710,
        usage:"Retail", area:"~23.000 m² Retail + 25 Penthouse-Wohnungen", purchaseDate:"2013", valueEUR:null, status:"Bestand (DGNB Platin)",
        images:[], sources:[
          {label:"Bayerische Hausbau – Joseph Pschorr Haus",url:"https://www.realestate-hausbau.de/portfolio/joseph-pschorr-haus"},
          {label:"immobilienmanager – JPH (C&A) 2024",url:"https://www.immobilienmanager.de/"}] },
      { name:"Geschäftshaus Marienplatz 22", address:"Marienplatz 22, 80331 München", lat:48.1373, lng:11.5754,
        usage:"Buero", area:"Büro/Retail (2016 revitalisiert)", purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"Bayerische Hausbau – Marienplatz 22",url:"https://www.realestate-hausbau.de/portfolio/marienplatz-22"}] },
      { name:"Der Donisl", address:"Weinstraße 1, 80331 München", lat:48.1379, lng:11.5752,
        usage:"Gastro", area:"~1.050 m² Büro (2.–5. OG) + Gastronomie (EG)", purchaseDate:null, valueEUR:null, status:"Bestand (2015 wiedereröffnet)",
        images:[], sources:[
          {label:"Bayerische Hausbau – Der Donisl",url:"https://development.hausbau.de/projekte/donisl"}] },
      { name:"Bikini Berlin", address:"Budapester Straße 38-50, 10787 Berlin", lat:52.5058, lng:13.3380,
        usage:"Retail", area:"Concept-Mall + Büro (Zoofenster-Areal)", purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"Bayerische Hausbau – Bikini Berlin",url:"https://www.hausbau-realestate.de/"},
          {label:"Wikipedia – Bikini-Haus",url:"https://de.wikipedia.org/wiki/Bikinihaus"}] },
      { name:"THE m.pire (Büro-Ensemble; Straße nicht final verifiziert)", address:"Parkstadt Schwabing, 80807 München", lat:48.1830, lng:11.6030,
        usage:"Buero", area:"~45.000 m² BGF (Skyline Tower + Campus, Arch. Helmut Jahn)", purchaseDate:"2010", valueEUR:null, status:"Bestand (DGNB Gold)",
        images:[], sources:[
          {label:"Bayerische Hausbau – THE m.pire",url:"https://www.hausbau-realestate.de/"}] }
    ],
    heatmap:[
      { name:"München-Altstadt (Highstreet-Cluster)", intensity:"hoch", usages:["Retail","Buero","Gastro"], center:[48.1375,11.5750], radiusKm:3,
        basis:"quelle", note:"Marienplatz/Neuhauser/Kaufingerstraße – Joseph Pschorr Haus, Marienplatz 22, Der Donisl.",
        sources:[{label:"Bayerische Hausbau – Portfolio",url:"https://www.hausbau-realestate.de/"}] },
      { name:"München (Wohnen/Büro gesamtstädtisch)", intensity:"hoch", usages:["Wohnen","Buero","Hotel"], center:[48.137,11.575], radiusKm:20,
        basis:"quelle", note:"Bayerische Hausbau Wohn-/Büro-/Hotelportfolio (u.a. Parkstadt Schwabing).",
        sources:[{label:"Bayerische Hausbau – Über uns",url:"https://www.hausbau-realestate.de/unternehmen/ueber-uns"}] }
    ]
  },

  {
    id:"doblinger",
    name:"Doblinger Beteiligung GmbH (Familie Doblinger) – RE-Töchter DIBAG / Bayerische Gewerbebau",
    kurz:"Doblinger",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Lilienthalallee 25, 80939 München",
    hqLat:48.2064, hqLng:11.5744,
    website:"doblinger-unternehmensgruppe.de", domain:"dibag.de",
    linkedin:"", contactName:"Alfons Doblinger", contactRole:"Gründer / Aufsichtsratsvorsitzender",
    contactChannel:"über DIBAG Industriebau AG / Bayerische Gewerbebau AG",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:5.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: gilt als eines der wertvollsten privaten Immobilienvermögen Deutschlands (~19.600 Wohnungen + Gewerbe); kein offizieller Wert publiziert.",
      sources:[] },
    reQuote:{ value:0.85, basis:"quelle",
      note:"Kernvermögen ist direkter Immobilienbestand (~14.000 Wohnungen München, ~3.000 Augsburg + Gewerbe).",
      sources:[{label:"Rosa-Luxemburg-Stiftung – Doblinger/Wohnungsbestand",url:"https://www.rosalux.de/news/id/52100"},
        {label:"Wikipedia – Doblinger Unternehmensgruppe",url:"https://de.wikipedia.org/wiki/Doblinger_Unternehmensgruppe"}] },
    reInvestedEUR:5.0,
    usage:{ Wohnen:70, Buero:15, Retail:5, Sonstiges:10 },
    confirmedObjects:[
      { name:"Firmensitz Doblinger / DIBAG", address:"Lilienthalallee 25, 80939 München", lat:48.2064, lng:11.5744,
        usage:"Buero", area:"Verwaltungssitz der Gruppe", purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"DIBAG – Kontakt",url:"https://www.dibag.de/kontakt"}] },
      { name:"Quartier Bogenhausen Süd (DIBAG)", address:"Eggenfeldener/Hultschiner/Töginger Straße, 81929 München", lat:48.1450, lng:11.6400,
        usage:"Wohnen", area:"~6,1 ha Wohn-/Gewerbequartier", purchaseDate:null, valueEUR:null, status:"in Entwicklung",
        images:[], sources:[
          {label:"DIBAG – Bogenhausen Süd",url:"https://www.dibag-bogenhausen-sued.de/"}] }
    ],
    heatmap:[
      { name:"München (Wohnbestand)", intensity:"hoch", usages:["Wohnen","Buero"], center:[48.137,11.575], radiusKm:20,
        basis:"quelle", note:"~14.000 Wohnungen (u.a. aus Neue-Heimat-Bayern-Erwerb) + Gewerbe; Einzeladressen nicht öffentlich.",
        sources:[{label:"Rosa-Luxemburg-Stiftung",url:"https://www.rosalux.de/news/id/52100"}] },
      { name:"Augsburg", intensity:"mittel", usages:["Wohnen"], center:[48.3705,10.8978], radiusKm:12,
        basis:"quelle", note:"~3.000 Wohnungen im Bestand.",
        sources:[{label:"Wikipedia – Doblinger Unternehmensgruppe",url:"https://de.wikipedia.org/wiki/Doblinger_Unternehmensgruppe"}] }
    ]
  },

  {
    id:"krieger",
    name:"Krieger Grundstück AG (Familie Kurt Krieger, Höffner) – privater Grundbesitz",
    kurz:"Krieger (Grundbesitz)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Rondell 1, 12529 Schönefeld (OT Waltersdorf)",
    hqLat:52.375, hqLng:13.540,
    website:"krieger.de", domain:"hoeffner.de",
    linkedin:"", contactName:"Kurt Krieger / Konrad Krieger", contactRole:"Inhaber / Nachfolge",
    contactChannel:"über Krieger-Gruppe / Krieger Grundstück AG, Schönefeld",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:1.1, unit:"Mrd €", basis:"quelle",
      note:"Forbes-Nettovermögen; RE-Bestand (Center + Entwicklungsgrundstücke) deutlich höher als das Nettovermögen.",
      sources:[{label:"Wikipedia – Kurt Krieger",url:"https://de.wikipedia.org/wiki/Kurt_Krieger_(Unternehmer)"},
        {label:"Business Insider – reichste Immobilien-Unternehmer",url:"https://www.businessinsider.de/wirtschaft/das-sind-die-12-reichsten-immobilien-unternehmer-die-fast-keiner-kennt/"}] },
    reQuote:{ value:0.8, basis:"extrapolation",
      note:"Reine Einschätzung: Handelsimmobilien/Grundstücke sind Kern des Vermögens; exakte Quote nicht öffentlich.",
      sources:[] },
    reInvestedEUR:2.0,
    usage:{ Retail:70, Wohnen:20, Buero:10 },
    confirmedObjects:[
      { name:"Pankower Tor (Entwicklungsareal ehem. Güterbahnhof Pankow)", address:"Prenzlauer Promenade / Berliner Straße, 13089 Berlin-Pankow", lat:52.573, lng:13.410,
        usage:"Wohnen", area:"~40 ha, bis ~2.000 Wohnungen + Gewerbe + Höffner", purchaseDate:"Grundstück seit 2009", valueEUR:500, status:"in Entwicklung",
        images:[], sources:[
          {label:"Immobilien Zeitung – Pankower Tor",url:"https://www.iz.de/projekte/news/-neue-hoffnung-fuer-das-quartier-pankower-tor-in-berlin-2000025646"},
          {label:"Tagesspiegel – Pankower Tor",url:"https://www.tagesspiegel.de/berlin/projekt-pankower-tor-auf-der-kippe-6890014.html"}] },
      { name:"Kaufpark Dresden-Nickern (Neubau)", address:"Dohnaer Straße 246, 01239 Dresden", lat:51.005, lng:13.803,
        usage:"Retail", area:"~70.000 m² geplant", purchaseDate:"ab ~2019", valueEUR:360, status:"Bestand/Neubau",
        images:[], sources:[
          {label:"Thomas Daily – Krieger übernimmt Kaufpark Nickern",url:"https://www.thomas-daily.de/td-morning-news/1409730-dresden-krieger-uebernimmt-kaufpark-nickern-und-plant-70-000-m%C2%B2-grossen-neubau/"},
          {label:"TextilWirtschaft – 360 Mio € Investition",url:"https://www.textilwirtschaft.de/business/news/kurt-krieger-investiert-360-mio.-euro-in-neues-einkaufszentrum-so-stark-ist-der-kaufpark-dresden-gestartet-248174"}] },
      { name:"ElbePark Dresden", address:"Peschelstraße 33, 01139 Dresden-Kaditz", lat:51.087, lng:13.700,
        usage:"Retail", area:"Shopping-Center", purchaseDate:null, valueEUR:200, status:"Bestand",
        images:[], sources:[
          {label:"Wikipedia – Kurt Krieger",url:"https://de.wikipedia.org/wiki/Kurt_Krieger_(Unternehmer)"}] },
      { name:"Möbel Höffner Berlin-Lichtenberg (Flagship)", address:"Landsberger Allee 320, 10365 Berlin", lat:52.532, lng:13.480,
        usage:"Retail", area:"~40.000 m² VK, 5 Etagen", purchaseDate:"2017", valueEUR:150, status:"Bestand",
        images:[], sources:[
          {label:"Tagesspiegel – größter Höffner in Lichtenberg",url:"https://www.tagesspiegel.de/wirtschaft/immobilien/der-grosste-hoffner-der-welt-entsteht-in-lichtenberg-5482399.html"}] },
      { name:"Thüringen Park Erfurt (Hausnr. nicht final verifiziert)", address:"Nordhäuser Straße 73, 99091 Erfurt", lat:51.010, lng:11.017,
        usage:"Retail", area:"Shopping-Center", purchaseDate:null, valueEUR:120, status:"Bestand",
        images:[], sources:[
          {label:"Thüringen Park – Impressum",url:"https://thueringen-park.de/impressum/"}] }
    ],
    heatmap:[
      { name:"Berlin (Grundstücke/Entwicklung/Handel)", intensity:"hoch", usages:["Wohnen","Retail","Buero"], center:[52.52,13.40], radiusKm:30,
        basis:"quelle", note:"Pankower Tor, Höffner Lichtenberg, Sitz Schönefeld.",
        sources:[{label:"Tagesspiegel – Krieger Stadtentwicklung",url:"https://www.tagesspiegel.de/berlin/bezirke/kurt-krieger-mobliert-um-3639256.html"}] },
      { name:"Ostdeutschland (Handelsimmobilien)", intensity:"hoch", usages:["Retail"], center:[51.05,13.20], radiusKm:120,
        basis:"quelle", note:"ElbePark/Kaufpark Dresden, Chemnitz Center, Thüringen Park Erfurt.",
        sources:[{label:"Wikipedia – Kurt Krieger",url:"https://de.wikipedia.org/wiki/Kurt_Krieger_(Unternehmer)"}] }
    ]
  },

  {
    id:"samwer",
    name:"Augustus Capital / Arvantis (Family Office der Samwer-Brüder)",
    kurz:"Samwer Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Türkenstraße 7, 80333 München",
    hqLat:48.147, hqLng:11.573,
    website:"augustus.berlin", domain:"picus.vc",
    linkedin:"", contactName:"Oliver, Marc & Alexander Samwer", contactRole:"Gesellschafter",
    contactChannel:"über Augustus Capital GmbH / Arvantis Group",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:6.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Nettovermögen der drei Brüder zusammen mehrstellige Mrd (v.a. VC/Rocket Internet); je >1 Mrd (Forbes).",
      sources:[] },
    reQuote:{ value:0.03, basis:"quelle",
      note:"Berliner Immobilienportfolio ≥150 Mio € – kleiner Anteil am Gesamtvermögen.",
      sources:[{label:"Berliner Zeitung – Samwer kaufen Immobilien in Berlin",url:"https://www.berliner-zeitung.de/mensch-metropole/samwer-brueder-kaufen-in-grossem-stil-immobilien-in-berlin-li.3269"}] },
    reInvestedEUR:0.2,
    usage:{ Buero:45, Wohnen:25, Sonstiges:20, Retail:10 },
    confirmedObjects:[
      { name:"Ullsteinhaus", address:"Mariendorfer Damm 1-3, 12099 Berlin-Tempelhof", lat:52.457, lng:13.386,
        usage:"Buero", area:"Denkmal-Bürokomplex am Teltowkanal", purchaseDate:"2015", valueEUR:80, status:"Bestand",
        images:[], sources:[
          {label:"Tagesspiegel – Ullsteinhaus verkauft an Samwer",url:"https://www.tagesspiegel.de/berlin/haeuser-fuer-milliarden-in-berlin-ullsteinhaus-in-tempelhof-ist-verkauft/12415722.html"}] },
      { name:"Uferhallen", address:"Uferstraße 8-11, 13357 Berlin-Gesundbrunnen", lat:52.552, lng:13.383,
        usage:"Sonstiges", area:"Denkmalensemble (Ateliers/Kultur)", purchaseDate:"2017", valueEUR:27, status:"Bestand",
        images:[], sources:[
          {label:"Wikipedia – Uferhallen (Augustus)",url:"https://de.wikipedia.org/wiki/Uferhallen"}] },
      { name:"Admiralspalast", address:"Friedrichstraße 101, 10117 Berlin-Mitte", lat:52.521, lng:13.388,
        usage:"Sonstiges", area:"Theater/Veranstaltung", purchaseDate:"2019", valueEUR:40, status:"Bestand",
        images:[], sources:[
          {label:"Berliner Zeitung – Samwer & Admiralspalast",url:"https://www.berliner-zeitung.de/kultur-vergnuegen/die-distel-verlaengert-im-admiralspalast-samwer-brueder-das-ist-der-deal-li.105850"}] }
    ],
    heatmap:[
      { name:"Berlin (zentrale Bestandsimmobilien)", intensity:"hoch", usages:["Buero","Wohnen","Sonstiges"], center:[52.52,13.40], radiusKm:20,
        basis:"quelle", note:"Portfolio ≥150 Mio €: Ullsteinhaus, Uferhallen, Admiralspalast, Bayerhaus, Gründerzeit-Wohnhäuser.",
        sources:[{label:"Berliner Zeitung",url:"https://www.berliner-zeitung.de/mensch-metropole/samwer-brueder-kaufen-in-grossem-stil-immobilien-in-berlin-li.3269"}] }
    ]
  },

  // ---- GELB (Kapital/FO vorhanden; RE begrenzt oder operativ geprägt) ----

  {
    id:"inselkammer",
    name:"Familie Inselkammer (Platzl Hotel / Ayinger) – Münchner Vermögen",
    kurz:"Inselkammer",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Sparkassenstraße 10, 80331 München",
    hqLat:48.1372, hqLng:11.5799,
    website:"platzl.de", domain:"platzl.de",
    linkedin:"", contactName:"Peter Inselkammer / Franz Inselkammer", contactRole:"Gesellschafter",
    contactChannel:"über Platzl Hotel Inselkammer KG",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.8, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Vermögen v.a. operativ (Brauerei Ayinger, Beteiligung Augustiner, Platzl-Hotel/Gastronomie); kein öffentlicher Wert.",
      sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation",
      note:"Reine Einschätzung: eigene Immobilien v.a. das Platzl-Quartier in der Altstadt; kein Portfoliowert veröffentlicht.",
      sources:[] },
    reInvestedEUR:0.2,
    usage:{ Hotel:45, Gastro:30, Retail:15, Wohnen:10 },
    confirmedObjects:[
      { name:"Platzl Hotel / Platzl-Quartier", address:"Sparkassenstraße 10, 80331 München", lat:48.1372, lng:11.5799,
        usage:"Hotel", area:"167 Zimmer + 15 Suiten + Gastronomie", purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"Platzl Hotel – München",url:"https://www.platzl.de/"}] }
    ],
    heatmap:[
      { name:"München-Altstadt (Platzl)", intensity:"mittel", usages:["Hotel","Gastro","Retail"], center:[48.1372,11.5799], radiusKm:2,
        basis:"quelle", note:"Platzl-Quartier gegenüber Hofbräuhaus.",
        sources:[{label:"Platzl Hotel",url:"https://www.platzl.de/"}] }
    ]
  },

  {
    id:"volkhardt",
    name:"Familie Volkhardt (Hotel Bayerischer Hof, Gebrüder Volkhardt KG)",
    kurz:"Volkhardt (Bayerischer Hof)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Promenadeplatz 2-6, 80333 München",
    hqLat:48.1404, hqLng:11.5719,
    website:"bayerischerhof.de", domain:"bayerischerhof.de",
    linkedin:"", contactName:"Innegrit Volkhardt", contactRole:"Inhaberin / Direktorin",
    contactChannel:"über Gebrüder Volkhardt KG",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Vermögen v.a. im Hotel Bayerischer Hof + Palais Montgelas; Jahresumsatz ~53 Mio €.",
      sources:[] },
    reQuote:{ value:0.5, basis:"extrapolation",
      note:"Reine Einschätzung: hochwertige Innenstadt-Immobilien im Familienbesitz, aber rein operativ (Hotellerie); kein Portfoliowert.",
      sources:[] },
    reInvestedEUR:0.3,
    usage:{ Hotel:90, Retail:5, Gastro:5 },
    confirmedObjects:[
      { name:"Hotel Bayerischer Hof", address:"Promenadeplatz 2-6, 80333 München", lat:48.1404, lng:11.5719,
        usage:"Hotel", area:"5-Sterne-Hotel (Renovierung ~150 Mio €)", purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"Hotel Bayerischer Hof",url:"https://www.bayerischerhof.de/"}] },
      { name:"Palais Montgelas", address:"Kardinal-Faulhaber-Straße / Promenadeplatz, 80333 München", lat:48.1408, lng:11.5726,
        usage:"Hotel", area:"Stadtpalais (hotelintegriert, Suiten + Gastro)", purchaseDate:"2022", valueEUR:30, status:"Bestand",
        images:[], sources:[
          {label:"AHGZ – Volkhardt kauft letzten Teil Palais Montgelas",url:"https://www.ahgz.de/"}] }
    ],
    heatmap:[
      { name:"München-Altstadt (Promenadeplatz)", intensity:"mittel", usages:["Hotel","Gastro"], center:[48.1404,11.5719], radiusKm:1,
        basis:"quelle", note:"Bayerischer Hof + Palais Montgelas.",
        sources:[{label:"Hotel Bayerischer Hof",url:"https://www.bayerischerhof.de/"}] }
    ]
  },

  {
    id:"bahlsen_fo",
    name:"Lorenz Bahlsen Familien Holding (Familie Bahlsen) – Vermögensvehikel",
    kurz:"Bahlsen (Familienholding)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Lister Damm 2, 30163 Hannover",
    hqLat:52.3900, hqLng:9.7500,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Bahlsen (Lorenz-Linie)", contactRole:"Gesellschafter",
    contactChannel:"über Lorenz Bahlsen Familien Holding GmbH & Co. KG, Hannover",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.6, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Vermögen der Lorenz-Bahlsen-Linie ~600 Mio €; echte Familien-Vermögensholding.",
      sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation",
      note:"Reine Einschätzung: kein signifikantes, adressierbares Immobilienportfolio öffentlich belegt.",
      sources:[] },
    reInvestedEUR:0.05,
    usage:{ Wohnen:50, Buero:40, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hannover", intensity:"niedrig", usages:["Buero","Wohnen"], center:[52.3759,9.7320], radiusKm:12,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz der Familienholding; keine belegten Einzelobjekte.",
        sources:[] }
    ]
  },

  {
    id:"mittelstenscheid",
    name:"Familie Mittelsten Scheid (Vorwerk) – Familienvermögen",
    kurz:"Mittelsten Scheid (Vorwerk)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Mühlenweg 17-37, 42270 Wuppertal (Vorwerk-Sitz)",
    hqLat:51.2820, hqLng:7.2000,
    website:"", domain:"vorwerk.de",
    linkedin:"", contactName:"Familie Mittelsten Scheid", contactRole:"Gesellschafter",
    contactChannel:"über Vorwerk & Co. KG",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.25, unit:"Mrd €", basis:"quelle",
      note:"Familienvermögen ~3,25 Mrd € (hält Vorwerk – Thermomix/Kobold, akf Bank, HECTAS).",
      sources:[{label:"Die Deutsche Wirtschaft – Mittelsten Scheid/Vorwerk",url:"https://die-deutsche-wirtschaft.de/familienunternehmen/mittelsten-scheid-familie-vorwerk-gruppe-wuppertal-inhaber/"}] },
    reQuote:{ value:0.05, basis:"extrapolation",
      note:"Reine Einschätzung: kein dediziertes privates Immobilienvehikel öffentlich auffindbar.",
      sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:60, Wohnen:30, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Wuppertal", intensity:"niedrig", usages:["Buero"], center:[51.2562,7.1508], radiusKm:12,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz der Familie/Vorwerk; kein belegtes privates RE-Portfolio.",
        sources:[] }
    ]
  },

  {
    id:"hector_fo",
    name:"Hector Family Office (Hans-Werner Hector, SAP-Mitgründer)",
    kurz:"Hector (SAP)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Schloßberg 2, 69469 Weinheim (nicht final verifiziert)",
    hqLat:49.5486, hqLng:8.6660,
    website:"", domain:"",
    linkedin:"", contactName:"Hans-Werner Hector", contactRole:"Gründer / Vermögensinhaber",
    contactChannel:"über private Vermögensverwaltungs-KGs (Weinheim)",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"quelle",
      note:"Vermögensschätzung (aus SAP-Verkauf 1996 + Kapitalanlagen). Karitatives Vermögen (Hector Stiftung) separat.",
      sources:[{label:"Forbes – Hans-Werner Hector",url:"https://www.forbes.com/profile/hans-werner-hector/"},
        {label:"Wikipedia – Hans-Werner Hector",url:"https://de.wikipedia.org/wiki/Hans-Werner_Hector"}] },
    reQuote:{ value:0.05, basis:"extrapolation",
      note:"Reine Einschätzung: Vehikel als Kapitalanlage/Beteiligungen strukturiert; kein öffentlicher Immobilienbestand.",
      sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:50, Wohnen:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Weinheim/Rhein-Neckar", intensity:"niedrig", usages:["Sonstiges"], center:[49.5486,8.6660], radiusKm:15,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz der Vermögens-KGs; keine belegten Objekte.",
        sources:[] }
    ]
  },

  {
    id:"hymer_fo",
    name:"Familie Hymer (Vermögen nach Verkauf Erwin Hymer Group an Thor)",
    kurz:"Hymer (post-exit)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"88339 Bad Waldsee (Hausnr. nicht verifiziert)",
    hqLat:47.9214, hqLng:9.7550,
    website:"", domain:"",
    linkedin:"", contactName:"Gerda / Christian / Carolin Hymer", contactRole:"Gesellschafter",
    contactChannel:"Verwaltung u.a. über MSR Family Office (Bad Waldsee)",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Post-Exit-Vermögen aus Verkauf der Erwin Hymer Group (~2,1 Mrd € Deal, 2018/19) an Thor Industries; Gesamtvermögen nicht beziffert.",
      sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation",
      note:"Reine Einschätzung: kein belegbares Immobilienportfolio öffentlich.",
      sources:[] },
    reInvestedEUR:0.1,
    usage:{ Wohnen:50, Buero:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Oberschwaben/Bad Waldsee", intensity:"niedrig", usages:["Sonstiges"], center:[47.9214,9.7550], radiusKm:20,
        basis:"extrapolation", note:"Reine Einschätzung: Heimatregion der Familie; keine belegten Objekte.",
        sources:[] }
    ]
  },

  {
    id:"mohn_bvg",
    name:"Bertelsmann Verwaltungsgesellschaft (Family Office der Familie Mohn)",
    kurz:"Mohn (BVG)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Carl-Bertelsmann-Straße 270, 33311 Gütersloh (nicht final verifiziert)",
    hqLat:51.9066, hqLng:8.3789,
    website:"", domain:"",
    linkedin:"", contactName:"Christoph Mohn / Liz Mohn", contactRole:"Familiensprecher / Familie",
    contactChannel:"über Bertelsmann Verwaltungsgesellschaft (BVG)",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Familienvermögen v.a. in der Bertelsmann-Beteiligung gebunden (BVG hält ~19,1 % Kapital); privates diversifiziertes AUM nicht offengelegt.",
      sources:[] },
    reQuote:{ value:0.05, basis:"extrapolation",
      note:"Reine Einschätzung: Immobilien liegen operativ in der Bertelsmann-Gruppe, nicht als separates privates RE-Vehikel.",
      sources:[] },
    reInvestedEUR:0.0,
    usage:{ Buero:70, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Gütersloh/OWL", intensity:"niedrig", usages:["Buero"], center:[51.9066,8.3789], radiusKm:12,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz; kein separates privates RE-Portfolio.",
        sources:[] }
    ]
  }

]);
