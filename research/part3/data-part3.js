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
  }

]);
