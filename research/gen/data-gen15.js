/* Worker 15 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   Hinweis: WebSearch-Budget der Session war aufgebraucht und WebFetch lieferte durchgehend HTTP 403
   (Proxy blockte alle Domains, inkl. Wikipedia). Deshalb basieren mehrere Einträge nur auf
   Such-Snippets bzw. auf reiner Einschätzung — jeweils ehrlich mit basis:"extrapolation" markiert.
   Geskippt: Coresis Management (RE-Assetmanager für Dritte, heute Teil aam2core) und Bechtolsheim
   Real Estate (operative RE-Beratung/Projektentwicklung für Dritte). */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"lahav_familyoffice",
    name:"LAHAV Family Office (Familie Lahav / Lahav LR Real Estate)", kurz:"Lahav",
    typ:"SFO",
    land:"Israel (investiert in DE)",
    hqAddress:"Ramat Negev 85510, Israel (dt. Asset-Management über DRIA GmbH)",
    hqLat:30.98, hqLng:34.70,
    website:"lahavgroup.co.il", domain:"lahavgroup.co.il",
    linkedin:"", contactName:"Eli Lahav", contactRole:"Gründer / Family Office",
    contactChannel:"über DRIA GmbH (Asset Manager DE)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Einzelhandel/Fachmarkt-Immobilien in Deutschland (Fachmarktzentren, Nahversorgungszentren, Non-Food-Fachmärkte, Einkaufszentren, einzelne Hotels). Ticketgröße bis ca. 25 Mio € pro Objekt; Fokus auf Bestand mit bonitätsstarken Mietern (Nahversorgung/LEH). Bundesweit, Schwerpunkt u.a. Hessen, Sachsen-Anhalt. Core/Core+ Bestandshaltung, kontinuierlicher Bestandsaufbau. Ankauf/Asset-Management über DRIA GmbH. (Quelle: Immobilien Zeitung, DRIA, Dahlke Investment)",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"quelle", note:"DRIA verwaltet das deutsche Immobilienportfolio des Lahav Family Office mit ~300 Mio € (~150 Objekte, überwiegend Fachmärkte/Nahversorgung + ein Hotel).", sources:[{label:"DRIA – Lahav Family Office",url:"https://www.dria.eu/aktuelles/lahav-family-office-kauft-non-food-fachmarktportfolio/"},{label:"Immobilien Zeitung – Lahav kauft Fachmarktimmobilien",url:"https://www.iz.de/transaktionen/news/-israelischer-investor-lahav-kauft-weitere-fachmarktimmobilien-2000020361"}] },
    reQuote:{ value:0.9, basis:"quelle", note:"Kerngeschäft des Family Office ist ertragsstarke Immobilie in Deutschland (plus grüne Energie in Israel).", sources:[{label:"Yahoo Finance – Lahav LR Real Estate",url:"https://finance.yahoo.com/quote/LAHAV.TA/"}] },
    reInvestedEUR:0.3,
    usage:{ Retail:90, Hotel:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hessen (Fachmarkt-/Einzelhandelsportfolio)", intensity:"hoch", usages:["Retail"], center:[50.60,8.90], radiusKm:60,
        basis:"quelle", note:"Erwerb eines Einzelhandelsportfolios mit 18 Immobilien in Hessen (genaue Adressen nicht öffentlich verifiziert).", sources:[{label:"Dahlke Investment – Lahav erwirbt 18 Immobilien",url:"https://www.dahlke-investment.eu/aktuelles/israelisches-lahav-family-office-erwirbt-einzelhandels-portfolio-mit-18-immobilien"}] },
      { name:"Bernburg / Sachsen-Anhalt (Einkaufszentrum)", intensity:"mittel", usages:["Retail"], center:[51.79,11.74], radiusKm:25,
        basis:"quelle", note:"Erwerb eines Einkaufszentrums in Bernburg (genaue Adresse nicht verifiziert, da Objektseite nicht ladbar).", sources:[{label:"deal-magazin – Bernburg LAHAV erwirbt Einkaufszentrum",url:"http://www.deal-magazin.com/news/1/129223/Bernburg-LAHAV-erwirbt-Einkaufszentrum-mit-starken-Mietern"}] },
      { name:"Deutschland bundesweit (Nahversorgung/Fachmarkt)", intensity:"mittel", usages:["Retail"], center:[51.10,10.20], radiusKm:250,
        basis:"quelle", note:"~150 Objekte bundesweit, überwiegend Fachmärkte/Nahversorgungszentren.", sources:[{label:"DRIA",url:"https://www.dria.eu/aktuelles/lahav-family-office-kauft-non-food-fachmarktportfolio/"}] }
    ],
    about:["Israelisches Single Family Office der Familie Lahav (Gründer Eli Lahav, ursprünglich Lahav-Kaufhäuser in Israel).","Seit 2012 Aufbau eines deutschen Immobilienportfolios; Kern sind Fachmarkt-/Nahversorgungsimmobilien.","Deutsches Ankaufs- und Asset-Management läuft über die DRIA GmbH."],
    structure:{ fo:"Family Office der Familie Lahav (Israel); börsennotierte Schwester Lahav LR Real Estate Ltd. (Tel Aviv).", managers:["Eli Lahav (Gründer)"], decisions:"Ankäufe in DE über beauftragten Asset Manager DRIA GmbH.", contact:"Objektangebote an DRIA GmbH (Ankaufsteam) richten." }
  },

  {
    id:"hofkammer_schaumburglippe",
    name:"Fürstliche Hofkammer Schaumburg-Lippe (Haus Schaumburg-Lippe)", kurz:"Hofkammer S.-Lippe",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schlossplatz 6, 31675 Bückeburg",
    hqLat:52.2589, hqLng:9.0487,
    website:"schloss-bueckeburg.de", domain:"schloss-bueckeburg.de",
    linkedin:"", contactName:"Alexander Fürst zu Schaumburg-Lippe", contactRole:"Eigentümer / Chef des Hauses",
    contactChannel:"Fürstliche Hofkammer, Schlossplatz 6, Bückeburg",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Zentrale Vermögensverwaltung des Hauses Schaumburg-Lippe. Schwerpunkt ist Bestandshaltung und Entwicklung des historischen und gewerblichen Immobilienbesitzes sowie Land-/Forstwirtschaft (ca. 530 ha Ackerland, Forst). Aktiver externer Ankaufsfokus nicht öffentlich kommuniziert – primär Erhalt und Weiterentwicklung des eigenen Bestands. (Quelle: schloss-bueckeburg.de/die-hofkammer)",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – kein öffentlicher Vermögenswert. Historischer Grundbesitz (Schloss, Liegenschaften, Land/Forst) einer alten Fürstenfamilie; Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung – Vermögen ist stark immobilien-/grundbesitzlastig (Liegenschaften, Land, Forst).", sources:[] },
    reInvestedEUR:0.35,
    usage:{ Sonstiges:50, Retail:15, Buero:15, Wohnen:20 },
    confirmedObjects:[
      { name:"Schloss Bückeburg (Stammsitz/Residenz)", address:"Schlossplatz 6, 31675 Bückeburg", lat:52.2589, lng:9.0487,
        usage:"Sonstiges", area:"Schlossanlage", purchaseDate:"Familienbesitz", valueEUR:0, status:"Bestand",
        images:[], sources:[{label:"Schloss Bückeburg – Die Hofkammer",url:"https://schloss-bueckeburg.de/die-hofkammer/"}],
        connection:"Stammsitz und Verwaltungssitz der Fürstlichen Hofkammer; im Eigentum des Hauses Schaumburg-Lippe." }
    ],
    heatmap:[
      { name:"Schaumburger Land / Bückeburg (Liegenschaften, Land, Forst)", intensity:"hoch", usages:["Sonstiges","Wohnen","Retail"], center:[52.2589,9.0487], radiusKm:35,
        basis:"quelle", note:"Immobilien-, Land- und Forstbesitz des Hauses rund um Bückeburg (historische und gewerbliche Liegenschaften).", sources:[{label:"Schloss Bückeburg – Liegenschaften",url:"https://schloss-bueckeburg.de/die-hofkammer/liegenschaften/"}] }
    ],
    about:["Zentrale Vermögensverwaltung (Hofkammer) des Hauses Schaumburg-Lippe, geführt von Alexander Fürst zu Schaumburg-Lippe.","Verwaltet historische und gewerbliche Immobilien, ca. 530 ha Landwirtschaft und Forst.","Primär Bestandserhalt und -entwicklung über Generationen, kein aggressiver Ankaufsinvestor."],
    structure:{ fo:"Fürstliche Hofkammer (Fürstlich Schaumburg-Lippesche Vermögensverwaltung GmbH & Co. KG), Sitz Schloss Bückeburg.", managers:["Alexander Fürst zu Schaumburg-Lippe (Eigentümer)"], decisions:"Immobilienabteilung der Hofkammer verwaltet und entwickelt den Bestand.", contact:"Fürstliche Hofkammer, Immobilienabteilung, Schlossplatz 6, Bückeburg." }
  },

  {
    id:"swt_wersing",
    name:"SWT Verwaltungs GmbH / Sissi Wersing GmbH & Co. KG (Familie Wersing/Dehner)", kurz:"SWT / Sissi Wersing",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Oberes Eck 2, 86641 Rain",
    hqLat:48.6880, hqLng:10.9170,
    website:"swt.immobilien", domain:"swt.immobilien",
    linkedin:"", contactName:"Familie Wersing", contactRole:"Gesellschafter",
    contactChannel:"SWT Immobilien Verwaltungs GmbH, Rain am Lech",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 29087 (Amtsgericht Augsburg, SWT Verwaltungs GmbH)",
    ankaufsprofil:"Buy-and-hold- bzw. Develop-and-hold-Strategie für Wohn-, Gewerbe- und Einzelhandelsimmobilien bundesweit. Erwerb und Verwaltung eigener Immobilien sowie Beteiligungen. Langfristige Bestandshaltung (Core/Core+). Ticketgröße/Off-Market-Präferenz nicht öffentlich beziffert. (Quelle: Northdata, swt.immobilien, Creditreform)",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – kein öffentlicher Wert. Immobilien-Holdingstruktur (SWT Verwaltungs GmbH, mehrere SWT-Immo-Objektgesellschaften) der Unternehmerfamilie Wersing (auch Dehner Holding).", sources:[] },
    reQuote:{ value:0.85, basis:"quelle", note:"Zweck ist v.a. Erwerb/Verwaltung von Immobilien und Beteiligungen; klar immobilienlastig.", sources:[{label:"Northdata – SWT Verwaltungs GmbH",url:"https://www.northdata.de/SWT%20Verwaltungs%20GmbH,%20Rain/Amtsgericht%20Augsburg%20HRB%2029087"}] },
    reInvestedEUR:0.25,
    usage:{ Wohnen:40, Retail:35, Buero:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rain am Lech / Bayerisch-Schwaben (Sitz & Kernregion)", intensity:"mittel", usages:["Wohnen","Retail","Buero"], center:[48.6880,10.9170], radiusKm:40,
        basis:"quelle", note:"Sitz der Gesellschaften; Familie Wersing/Dehner mit regionaler Verankerung.", sources:[{label:"Creditreform – Sissi Wersing GmbH & Co. KG",url:"https://firmeneintrag.creditreform.de/86641/8130173183/SISSI_WERSING_GMBH_CO_KG"}] },
      { name:"Deutschland bundesweit (Wohn-/Gewerbe-/Retail-Bestand)", intensity:"mittel", usages:["Wohnen","Retail","Buero"], center:[51.00,10.20], radiusKm:250,
        basis:"quelle", note:"Portfolio aus Wohn-, Gewerbe- und Einzelhandelsimmobilien bundesweit.", sources:[{label:"Northdata – SWT Immo 33 GmbH",url:"https://www.northdata.de/SWT%20Immo%2033%20GmbH,%20Rain/Amtsgericht%20Augsburg%20HRB%2035124"}] }
    ],
    about:["Immobilien-Family-Office-Struktur der Unternehmerfamilie Wersing (auch hinter Dehner Garten-Center / Dehner Holding).","SWT Verwaltungs GmbH (gegr. Ende 2013) verfolgt eine Develop-/Buy-and-hold-Immobilienstrategie.","Sissi Wersing GmbH & Co. KG fungiert als Property-Management-Gesellschaft des Portfolios."],
    structure:{ fo:"SWT Verwaltungs GmbH als Dach mehrerer SWT-Immo-Objektgesellschaften; Sissi Wersing GmbH & Co. KG als Verwaltung.", managers:["Familie Wersing"], decisions:"Ankauf/Verwaltung über SWT-Gesellschaften in Rain am Lech.", contact:"SWT Immobilien Verwaltungs GmbH, Rain am Lech." }
  },

  {
    id:"evalue_falk",
    name:"eValue AG / eValue Family Office (Thomas Falk)", kurz:"eValue (Falk)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Kennedydamm 1, 40476 Düsseldorf",
    hqLat:51.2460, hqLng:6.7750,
    website:"evalue.de", domain:"evalue.de",
    linkedin:"", contactName:"Thomas Falk", contactRole:"Gründer / CEO eValue AG",
    contactChannel:"eValue AG, Kennedydamm 1, Düsseldorf",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 53233 (Amtsgericht Düsseldorf, eValue AG)",
    ankaufsprofil:"Breit diversifiziertes Family Office; Immobilien sind nur eine von mehreren Assetklassen (Schwerpunkt Venture Capital/Private Equity, dazu Real Estate und Kunst). Immobilienaktivitäten gebündelt in eValue Realestate GmbH. Konkretes Immobilien-Ankaufsprofil (Assetklasse, Ticket, Region) nicht öffentlich ermittelbar. (Quelle: evalue.de, Altss, Northdata)",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – kein öffentlicher Wert. Family Office des Unternehmers Thomas Falk (Internet-Pionier, Verkauf u.a. an Google 2007), gegr. 1997.", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung – Kern ist VC/PE, Immobilien nur eine Nebenassetklasse (eigene eValue Realestate GmbH).", sources:[] },
    reInvestedEUR:0.075,
    usage:{ Buero:50, Wohnen:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf / Rheinland (Sitz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[51.2460,6.7750], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung – Sitz Düsseldorf; konkrete Immobilien nicht öffentlich verifiziert.", sources:[] }
    ],
    about:["Family Office des Unternehmers Thomas Falk (Düsseldorf), gegründet 1997.","Investiert weltweit v.a. in Venture Capital und Private Equity, dazu Immobilien und Kunst.","Immobilien werden über eValue Realestate GmbH gehalten."],
    structure:{ fo:"eValue AG als Family-Office-Holding; eValue Realestate GmbH für Immobilien.", managers:["Thomas Falk (CEO)"], decisions:"Investmententscheidungen zentral im Family Office.", contact:"eValue AG, Kennedydamm 1, Düsseldorf – Immobilien über eValue Realestate GmbH." }
  },

  {
    id:"kithan_kieninger",
    name:"KITHAN Grundstücks- und Handels-GmbH (Familie Kieninger)", kurz:"KITHAN (Kieninger)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Maximiliansplatz 12a, 80333 München",
    hqLat:48.1420, hqLng:11.5730,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Kieninger", contactRole:"Gesellschafter",
    contactChannel:"KITHAN Grundstücks- und Handels-GmbH, München",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine öffentlichen Daten. Grundstücks- und Handels-GmbH der Familie Kieninger in Münchner Bestlage (Maximiliansplatz); als privates Immobilien-/Vermögensvehikel eingestuft. FO-Status und Größe nicht unabhängig verifiziert.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung – Firmenzweck (Grundstücks-GmbH) deutet auf Immobilienschwerpunkt.", sources:[] },
    reInvestedEUR:0.07,
    usage:{ Buero:40, Wohnen:40, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München (Sitz Maximiliansplatz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.1420,11.5730], radiusKm:20,
        basis:"extrapolation", note:"Reine Einschätzung – Sitz in Münchner Innenstadt; konkrete Objekte nicht öffentlich verifiziert.", sources:[] }
    ]
  },

  {
    id:"tgr_gelbrandlkofer",
    name:"TGR Immobilien Vermögensverwaltung GmbH (Thomas Gelb-Randlkofer)", kurz:"TGR (Gelb-Randlkofer)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Bavaria Film Platz 7, 82031 Grünwald",
    hqLat:48.0750, hqLng:11.5200,
    website:"", domain:"",
    linkedin:"", contactName:"Thomas Gelb-Randlkofer", contactRole:"Gesellschafter / Geschäftsführer",
    contactChannel:"TGR Immobilien Vermögensverwaltung GmbH, Grünwald",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (Immobilien-Vermögensverwaltung der Familie; Ankaufskriterien nicht publiziert)",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine öffentlichen Daten. Immobilien-Vermögensverwaltung von Thomas Gelb-Randlkofer (Grünwald bei München); Familienname Randlkofer ist mit dem Delikatessenhaus Dallmayr assoziiert. Größe/FO-Status nicht unabhängig verifiziert.", sources:[] },
    reQuote:{ value:0.8, basis:"extrapolation", note:"Reine Einschätzung – Firmenzweck ist Immobilien-Vermögensverwaltung.", sources:[] },
    reInvestedEUR:0.08,
    usage:{ Wohnen:40, Buero:40, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Grünwald (Sitz)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[48.0750,11.5200], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung – Sitz Grünwald; konkrete Objekte nicht öffentlich verifiziert.", sources:[] }
    ]
  },

  {
    id:"kleine_cie_hannover",
    name:"Kleine & Cie GmbH (Familie Kleine)", kurz:"Kleine & Cie",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Luisenstraße 4, 30159 Hannover",
    hqLat:52.3740, hqLng:9.7400,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Kleine", contactRole:"Gesellschafter",
    contactChannel:"Kleine & Cie GmbH, Hannover",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine öffentlichen Daten recherchierbar (WebSearch-Budget erschöpft, Seiten nicht ladbar). Als privates Vermögens-/Family-Office-Vehikel der Familie Kleine (Hannover) aufgenommen; FO-Status, Immobilienanteil und Größe nicht unabhängig verifiziert.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung – Immobilienanteil unbekannt.", sources:[] },
    reInvestedEUR:0.04,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hannover (Sitz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[52.3740,9.7400], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung – Sitz Hannover; keine Objekte verifiziert.", sources:[] }
    ]
  },

  {
    id:"sassenscheidt_duesseldorf",
    name:"Sassenscheidt GmbH & Co. KG (Familie Sassenscheidt)", kurz:"Sassenscheidt",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Hohe Straße 8, 40213 Düsseldorf",
    hqLat:51.2200, hqLng:6.7780,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Sassenscheidt", contactRole:"Gesellschafter",
    contactChannel:"Sassenscheidt GmbH & Co. KG, Düsseldorf",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine öffentlichen Daten recherchierbar (WebSearch-Budget erschöpft, Seiten nicht ladbar). Als privates Vermögens-/Family-Office-Vehikel der Familie Sassenscheidt (Düsseldorf) aufgenommen; FO-Status, Immobilienanteil und Größe nicht unabhängig verifiziert.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung – Immobilienanteil unbekannt.", sources:[] },
    reInvestedEUR:0.04,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf (Sitz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[51.2200,6.7780], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung – Sitz Düsseldorf; keine Objekte verifiziert.", sources:[] }
    ]
  },

  {
    id:"brodt_zaidman_muenchen",
    name:"BRODT & ZAIDMAN Verwaltungs-GmbH (Familien Brodt, Zaidman)", kurz:"Brodt & Zaidman",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Lindwurmstraße 117, 80337 München",
    hqLat:48.1260, hqLng:11.5520,
    website:"", domain:"",
    linkedin:"", contactName:"Familien Brodt / Zaidman", contactRole:"Gesellschafter",
    contactChannel:"BRODT & ZAIDMAN Verwaltungs-GmbH, München",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine öffentlichen Daten recherchierbar (WebSearch-Budget erschöpft, Seiten nicht ladbar). Verwaltungs-GmbH der Familien Brodt/Zaidman (München) als privates Vermögensvehikel aufgenommen; FO-Status, Immobilienanteil und Größe nicht unabhängig verifiziert.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung – Immobilienanteil unbekannt.", sources:[] },
    reInvestedEUR:0.04,
    usage:{ Buero:40, Wohnen:40, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München (Sitz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.1260,11.5520], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung – Sitz München; keine Objekte verifiziert.", sources:[] }
    ]
  }

]);
