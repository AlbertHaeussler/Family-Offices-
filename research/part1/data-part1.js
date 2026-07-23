/* Datendatei für Worker 1 — NUR diese Datei bearbeiten (kein Git-Konflikt mit anderen).
   Firmen als Objekte in das Array unten pushen. Schema: siehe research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  // ===== Multi Family Offices (Rhein-Main / bundesweit) =====

  {
    id:"focam",
    name:"FOCAM AG (Multi Family Office)", kurz:"FOCAM",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Untermainkai 26, 60329 Frankfurt am Main",
    hqLat:50.1082, hqLng:8.6718,
    website:"focam.de", domain:"focam.de",
    linkedin:"", contactName:"Christian Frhr. von Bechtolsheim", contactRole:"Mitgründer / Aufsichtsrat", contactChannel:"info@focam.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:2.5, unit:"Mrd €", basis:"quelle", note:"Größenordnung ~2,5 Mrd €; eigentümergeführtes, BaFin-lizenziertes MFO (gegr. 1999). Exakter Stichtag unklar.", sources:[{label:"DDW Investorenprofil",url:"https://die-deutsche-wirtschaft.de/investoren/focam-ag-frankfurt-am-main-family-office/"},{label:"VuV",url:"https://vuv.de/vermoegensverwalter/focam-ag-frankfurt-am-main/"}] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung — RE-Anteil nicht öffentlich beziffert; FOCAM investiert u.a. in Immobilien, PE, Kapitalmarkt, Wald.", sources:[] },
    reInvestedEUR:0.6,
    usage:{ Buero:40, Wohnen:35, Retail:15, Logistik:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main / Frankfurt", intensity:"mittel", usages:["Buero","Wohnen"], center:[50.11,8.68], radiusKm:30,
        basis:"extrapolation", note:"Sitz-Region; RE über Mandate/Fonds, keine öffentlichen Einzelobjekte.", sources:[] }
    ]
  },

  {
    id:"deutsche_oppenheim",
    name:"Deutsche Oppenheim Family Office AG", kurz:"Deutsche Oppenheim",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Keferloh 1a, 85630 Grasbrunn (bei München); zweiter Hauptstandort Köln",
    hqLat:48.0847, hqLng:11.7352,
    website:"deutsche-oppenheim.de", domain:"deutsche-oppenheim.de",
    linkedin:"", contactName:"Oliver Leipholz", contactRole:"Vorstand (u.a. Immobilien)", contactChannel:"info@deutsche-oppenheim.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:10.0, unit:"Mrd €", basis:"quelle", note:">10 Mrd €. Eines der größten MFOs Europas (2019 aus Sal. Oppenheim-FO + Deutsche Family Office AG fusioniert); Teil der Deutsche-Bank-Gruppe.", sources:[{label:"VC Germany Profil",url:"https://vcgermany.de/family-office-liste/deutsche-oppenheim"},{label:"Northdata HRB 110460",url:"https://www.northdata.com/Deutsche%20Oppenheim%20Family%20Office%20AG,%20Grasbrunn/Amtsgericht%20M%C3%BCnchen%20HRB%20110460"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — Immobilien eigene Leistungssäule (RE-Mandate/Fonds), aber kein publizierter Prozentwert.", sources:[] },
    reInvestedEUR:2.0,
    usage:{ Buero:45, Wohnen:30, Retail:15, Logistik:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / bundesweit", intensity:"mittel", usages:["Buero","Wohnen"], center:[48.14,11.58], radiusKm:40,
        basis:"extrapolation", note:"Doppel-HQ München/Köln; RE über Fonds/Mandate für Mandanten, kein Eigenportfolio mit Adressen.", sources:[] }
    ]
  },

  {
    id:"tresono",
    name:"TRESONO Family Office AG", kurz:"Tresono",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Konrad-Adenauer-Ufer 7, 50668 Köln (Hausnr. laut Branchenbuch teils abweichend; final via Impressum prüfen)",
    hqLat:50.9452, hqLng:6.9636,
    website:"tresono.de", domain:"tresono.de",
    linkedin:"", contactName:"Angela Müller-Valkyser", contactRole:"Vorstand", contactChannel:"+49 221 277220",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Tresono macht keine öffentlichen AUM-Angaben; führendes unabhängiges MFO mit Sachwert-/Immobilienschwerpunkt (gegr. 2010).", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung — Immobilien ausdrücklicher Kernbereich (eigene Sparte), aber kein bezifferter Anteil.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Wohnen:55, Buero:25, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Köln / Rheinland", intensity:"mittel", usages:["Wohnen","Buero"], center:[50.94,6.96], radiusKm:25,
        basis:"quelle", note:"Sitz Köln. Dokumentierter Deal: Transaktions-Execution 65 geförderte Wohnungen Schwandorf/Ostbayern (Advisory, kein Eigenbestand).", sources:[{label:"anlegerplus.de Schwandorf-Deal",url:"https://anlegerplus.de/gbi-verkauft-65-gef-rderte-wohnungen-im-ostbayerischen-schwandorf-an-private-investoren-tresono-f-hrt-transaktion-aus/"}] }
    ]
  },

  {
    id:"feri_fo",
    name:"FERI — Institutional & Family Office GmbH", kurz:"FERI",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Rathausplatz 8–10, 61348 Bad Homburg v. d. Höhe",
    hqLat:50.2272, hqLng:8.6183,
    website:"feri.de", domain:"feri.de",
    linkedin:"", contactName:"Britta Süßmann", contactRole:"Leitung Family Office", contactChannel:"+49 6172 916-3600",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:39.0, unit:"Mrd €", basis:"quelle", note:"FERI-Gruppe >39 Mrd € (mit MLP-Gruppe >65 Mrd €, davon >18 Mrd € Alternatives inkl. Immobilien). Family-Office-Segment nicht separat ausgewiesen. Einer der ersten deutschen MFOs (1987, Quandt-Umfeld).", sources:[{label:"kreditwesen.de",url:"https://www.kreditwesen.de/kreditwesen/ergaenzende-informationen/kreditwesen-meldungen/feri-verwaltetes-vermoegen-steigt-ueber-39-milliarden-euro-id63238.h"},{label:"Northdata HRB 9763",url:"https://www.northdata.com/Feri%20Institutional%20&%20Family%20Office%20GmbH,%20Bad%20Homburg/HRB%209763"}] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung — Immobilien Teil der >18 Mrd € Alternatives; keine FO-spezifische Quote ausweisbar.", sources:[] },
    reInvestedEUR:3.0,
    usage:{ Buero:40, Wohnen:35, Logistik:15, Retail:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main / DACH", intensity:"mittel", usages:["Buero","Wohnen"], center:[50.22,8.62], radiusKm:35,
        basis:"extrapolation", note:"Immobilien breit über Fonds/Private-Markets, kein einzelobjektbezogener FO-Bestand.", sources:[] }
    ]
  },

  {
    id:"oddo_bhf_fo",
    name:"ODDO BHF Family Office GmbH", kurz:"ODDO BHF FO",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Gallusanlage 8, 60329 Frankfurt am Main",
    hqLat:50.1082, hqLng:8.6702,
    website:"oddo-bhf.com", domain:"oddo-bhf.com",
    linkedin:"", contactName:"Jürgen Unger", contactRole:"Sprecher der Geschäftsführung", contactChannel:"fo.oddo-bhf.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:20.0, unit:"Mrd €", basis:"extrapolation", note:"FO-spezifische Zahl nicht ausgewiesen. Einordnung: ODDO BHF Private Wealth Management >20 Mrd €, Gruppe >140 Mrd €. Dienstleister-MFO aus BHF-BANK-Tradition (NICHT Bethmann Bank). Reine Einschätzung für FO-Segment.", sources:[{label:"ODDO BHF About",url:"https://www.oddo-bhf.com/about-us/"},{label:"Northdata HRB 51846",url:"https://www.northdata.com/ODDO%20BHF%20Family%20Office%20GmbH,%20Frankfurt%20a%C2%B7%20Main/Amtsgericht%20Frankfurt%20am%20Main%20HRB%2051846"}] },
    reQuote:{ value:0.0, basis:"quelle", note:"Beratungs-/Dienstleistungs-MFO ohne eigenes Immobilienportfolio; Immobilien nur Beratungsthema für Mandanten.", sources:[{label:"ODDO BHF FO Frankfurt",url:"https://fo.oddo-bhf.com/en/locations/frankfurt/"}] },
    reInvestedEUR:0,
    usage:{ Buero:60, Wohnen:25, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Frankfurt (Standort)", intensity:"niedrig", usages:["Buero"], center:[50.11,8.67], radiusKm:10,
        basis:"quelle", note:"Bürostandort, kein RE-Eigenbestand. Weitere Standorte Paris, Zürich.", sources:[{label:"Silberturm-Umzug",url:"https://www.private-banking-magazin.de/hauptsitz-oddo-bhf-buero-frankfurt-silberturm-gallusanlage-8/"}] }
    ]
  },

  {
    id:"habbel_pohlig",
    name:"Habbel, Pohlig & Partner (Vermögensverwaltung / MFO)", kurz:"Habbel Pohlig",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Sonnenberger Straße 14, 65193 Wiesbaden",
    hqLat:50.0900, hqLng:8.2470,
    website:"hpp-vermoegensverwaltung.de", domain:"hpp-vermoegensverwaltung.de",
    linkedin:"", contactName:"Matthias Habbel", contactRole:"Geschäftsführer / Hauptgesellschafter", contactChannel:"hpp-vermoegensverwaltung.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.6, unit:"Mrd €", basis:"quelle", note:"~600 Mio €. Bankunabhängige Vermögensverwaltung (gegr. 1996), positioniert sich teils als MFO; Fokus ausschließlich liquide Wertpapiere.", sources:[{label:"VuV",url:"https://vuv.de/vermoegensverwalter/habbel-pohlig-partner-vermoegensverwaltung-wiesbaden/"}] },
    reQuote:{ value:0.0, basis:"quelle", note:"Verwaltet ausschließlich liquide, börsengehandelte Wertpapiere — keine Immobilien.", sources:[{label:"Impressum",url:"https://www.hpp-vermoegensverwaltung.de/impressum/"}] },
    reInvestedEUR:0,
    usage:{ Sonstiges:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Wiesbaden (Standort)", intensity:"niedrig", usages:["Sonstiges"], center:[50.09,8.24], radiusKm:5,
        basis:"quelle", note:"Reine Wertpapierverwaltung, kein Immobilieninvestment. Zweitstandort Mainz.", sources:[{label:"VuV",url:"https://vuv.de/vermoegensverwalter/habbel-pohlig-partner-vermoegensverwaltung-wiesbaden/"}] }
    ]
  },

  // ===== Unternehmer- / Familien-Vermögen (SFO) =====

  {
    id:"castell",
    name:"Fürstlich Castell'sches Vermögen (Familie zu Castell) / F & C Capital GmbH", kurz:"Castell",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schlossplatz 5, 97355 Castell (Domänenamt/Familiensitz); Bank-HQ Marktplatz 1, 97070 Würzburg",
    hqLat:49.7458, hqLng:10.3555,
    website:"castell.de", domain:"castell-bank.de",
    linkedin:"", contactName:"Ferdinand Fürst zu Castell-Castell", contactRole:"Familie / F & C Capital GmbH", contactChannel:"castell.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"quelle", note:"Familien-Privatvermögen ~0,5 Mrd € (Schätzung Family Office Research). FO-Vehikel F & C Capital GmbH (HRB 15572 AG Würzburg). Eigene Fürstlich Castell'sche Bank (~1,4 Mrd € verwaltetes Vermögen) separat als operatives Institut.", sources:[{label:"Family Office Research: reichste Würzburger",url:"https://www.familyofficeresearch.de/2025/03/07/die-reichsten-w%C3%BCrzburger/"},{label:"Wikipedia Castell'sche Bank",url:"https://de.wikipedia.org/wiki/F%C3%BCrstlich_Castell%E2%80%99sche_Bank"}] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung — Realvermögen v.a. Grund/Boden: Wald (~5.000 ha), Weinberge (~110 ha), Schlossbestand; keine kommerziellen Büro-/Retail-Renditeobjekte.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Sonstiges:80, Gastro:20 },
    confirmedObjects:[
      { name:"Fürstlich Castell'sches Domänenamt / Weingut", address:"Schlossplatz 5, 97355 Castell", lat:49.7458, lng:10.3555,
        usage:"Sonstiges", area:"~110 ha Weinberge (davon ~70 ha Eigenbesitz)", purchaseDate:"Familienbesitz seit Jahrhunderten", valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"Wikipedia Domänenamt",url:"https://de.wikipedia.org/wiki/F%C3%BCrstlich_Castell%E2%80%99sches_Dom%C3%A4nenamt"},{label:"VDP Winzer",url:"https://www.vdp.de/de/die-winzer/franken/fuerstlich-castellsches-domaenenamt"}] },
      { name:"Forstbetrieb Fürstlich Castell (Steigerwald)", address:"Raum Castell, 97355 Castell (Steigerwald)", lat:49.74, lng:10.36,
        usage:"Sonstiges", area:"~5.000 ha Wald", purchaseDate:"Familienbesitz", valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"Family Office Research",url:"https://www.familyofficeresearch.de/2025/03/07/die-reichsten-w%C3%BCrzburger/"}] }
    ],
    heatmap:[
      { name:"Castell / Steigerwald", intensity:"hoch", usages:["Sonstiges","Gastro"], center:[49.745,10.356], radiusKm:12,
        basis:"quelle", note:"Kernbesitz der Familie: Wald, Weinberge, Schloss.", sources:[{label:"Family Office Research",url:"https://www.familyofficeresearch.de/2025/03/07/die-reichsten-w%C3%BCrzburger/"}] },
      { name:"Würzburg (Bank/Verwaltung)", intensity:"mittel", usages:["Buero"], center:[49.796,9.930], radiusKm:3,
        basis:"quelle", note:"Hauptverwaltung Fürstlich Castell'sche Bank, Marktplatz 1.", sources:[{label:"Castell-Bank Standorte",url:"https://castell-bank.de/ueber-uns/standorte/wuerzburg/"}] }
    ]
  },

  {
    id:"roechling_immo",
    name:"Familie Röchling — Privatimmobilien (München)", kurz:"Röchling (Familie)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Theresienstraße 40, 80333 München",
    hqLat:48.1489, hqLng:11.5680,
    website:"", domain:"",
    linkedin:"", contactName:"Cristopher Röchling", contactRole:"GF der RE-Verwaltung der Familie", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Familie Röchling gesamt ~3,4 Mrd € (Kunststoffkonzern Röchling SE = operativ, hier NICHT gemeint). Eintrag = Privatvermögen/Familie; die Immobilienverwaltung läuft über die RE-Tochter Röchling Immobilien GmbH & Co. KG 'Mauerkircher Straße' (HRA 87237 AG München) — diese GmbH ist die operative RE-Gesellschaft, nicht selbst das Family Office. ACHTUNG: Familienbezug plausibel (Name + GF), aber nicht 100 % durch eine Quelle bestätigt.", sources:[{label:"Creditreform",url:"https://firmeneintrag.creditreform.de/80333/8170725250/ROECHLING_IMMOBILIEN_GMBH_CO_KG_MAUERKIRCHER_STRASSE"}] },
    reQuote:{ value:1.0, basis:"quelle", note:"Reines Immobilien-Verwaltungsvehikel (objektbezogene KG-Struktur).", sources:[{label:"openregister",url:"https://openregister.de/company/DE-HRB-D2601-159868"}] },
    reInvestedEUR:0.5,
    usage:{ Wohnen:70, Buero:30 },
    confirmedObjects:[
      { name:"Objekt Mauerkircher Straße (namensgebende KG)", address:"Mauerkircher Straße, 81679 München-Bogenhausen (Hausnr. nicht verifiziert)", lat:48.152, lng:11.608,
        usage:"Wohnen", area:null, purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"Creditreform",url:"https://firmeneintrag.creditreform.de/80333/8170725250/ROECHLING_IMMOBILIEN_GMBH_CO_KG_MAUERKIRCHER_STRASSE"}] }
    ],
    heatmap:[
      { name:"München-Bogenhausen", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.152,11.608], radiusKm:8,
        basis:"quelle", note:"Objektbezogene KG(s) mit Straßennamen deuten auf mehrere Münchner Objekte.", sources:[{label:"Creditreform",url:"https://firmeneintrag.creditreform.de/80333/8170725250/ROECHLING_IMMOBILIEN_GMBH_CO_KG_MAUERKIRCHER_STRASSE"}] }
    ]
  },

  {
    id:"merck_vermoegens",
    name:"Emanuel-Merck-Vermögens-KG (Familie Merck)", kurz:"Merck (Vermögens-KG)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Emanuel-Merck-Platz 1, 64293 Darmstadt",
    hqLat:49.8687, hqLng:8.6549,
    website:"", domain:"",
    linkedin:"", contactName:"", contactRole:"Komplementäre (diskret)", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:5.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung für das separierte Privatvermögen. Familie Merck gesamt ~33,8 Mrd € (2024, v.a. Merck-KGaA-Anteile via E. Merck KG = operative Holding, hier NICHT gemeint). Die Emanuel-Merck-Vermögens-KG (HRA 4605 AG Darmstadt) gilt als eines der größten deutschen SFOs.", sources:[{label:"DAS INVESTMENT Meta-Ranking",url:"https://www.dasinvestment.com/meta-ranking-aus-ranglisten-vom-manager-magazin-bloomberg-und-forbes-25/"},{label:"Online-Handelsregister HRA 4605",url:"https://www.online-handelsregister.de/handelsregisterauszug/he/Darmstadt/HRA/4605/Emanuel-Merck-Vermoegens-KG"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — RE-Anteil gering; die KG verwaltet primär Privatvermögen inkl. einiger bebauter Grundstücke (Registerzweck). Operative Konzern-RE liegt separat in Merck Real Estate GmbH.", sources:[] },
    reInvestedEUR:1.0,
    usage:{ Buero:70, Sonstiges:30 },
    confirmedObjects:[
      { name:"Verwaltungsgebäude Emanuel-Merck-Vermögens-KG", address:"Rheinstraße 7–9, 64283 Darmstadt", lat:49.872, lng:8.649,
        usage:"Buero", area:null, purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"Online-Handelsregister HRA 4605",url:"https://www.online-handelsregister.de/handelsregisterauszug/he/Darmstadt/HRA/4605/Emanuel-Merck-Vermoegens-KG"}] },
      { name:"Bebaute Grundstücke (Registerzweck)", address:"Gernsheim / Weiterstadt / Darmstadt", lat:49.75, lng:8.49,
        usage:"Sonstiges", area:null, purchaseDate:null, valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"Online-Handelsregister HRA 4605",url:"https://www.online-handelsregister.de/handelsregisterauszug/he/Darmstadt/HRA/4605/Emanuel-Merck-Vermoegens-KG"}] }
    ],
    heatmap:[
      { name:"Darmstadt / Südhessen", intensity:"mittel", usages:["Buero","Sonstiges"], center:[49.87,8.65], radiusKm:20,
        basis:"quelle", note:"Registerzweck nennt bebaute Grundstücke in Darmstadt, Gernsheim, Weiterstadt.", sources:[{label:"Online-Handelsregister HRA 4605",url:"https://www.online-handelsregister.de/handelsregisterauszug/he/Darmstadt/HRA/4605/Emanuel-Merck-Vermoegens-KG"}] }
    ]
  },

  {
    id:"burda_bpi",
    name:"Burda Principal Investments (Familie Burda)", kurz:"Burda (BPI)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Arabellastraße 23, 81925 München",
    hqLat:48.1520, hqLng:11.6236,
    website:"burda-principal-investments.com", domain:"burda-principal-investments.com",
    linkedin:"", contactName:"Christian Teichmann", contactRole:"Geschäftsführer (CEO BPI)", contactChannel:"burda-principal-investments.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Hubert Burda ~3,7 Mrd USD (Forbes 2024). Operativer Medienkonzern Hubert Burda Media = separat/operativ. BPI (HRA 105973 AG München) = Growth-Equity-/Principal-Investment-Arm der Familie (Etsy, Vinted, Zocdoc, Carsome).", sources:[{label:"Forbes/uamr",url:"https://www.uamr.de/hubert-burda-vermoegen/"},{label:"Northdata HRA 105973",url:"https://www.northdata.com/Burda%20Principal%20Investments%20GmbH%20&%20Co%C2%B7%20KG,%20M%C3%BCnchen/HRA%20105973"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Fokus Growth Equity/Venture; kein isoliertes Immobilien-FO-Vehikel öffentlich. Bekannter Immobilienakteur v.a. am Konzernsitz.", sources:[] },
    reInvestedEUR:0.3,
    usage:{ Buero:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"München (Arabellapark)", intensity:"mittel", usages:["Buero"], center:[48.152,11.624], radiusKm:10,
        basis:"quelle", note:"Konzern-/Investmentsitz Arabellastraße 23, Arabellapark.", sources:[{label:"IZ Unternehmensprofil",url:"https://www.iz.de/profile/unternehmen/Hubert%20Burda%20Media/"}] }
    ]
  },

  {
    id:"wacker_familie",
    name:"Dr. Alexander Wacker Familiengesellschaft (Familie Wacker)", kurz:"Wacker (Familie)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Gisela-Stein-Straße 1, 81671 München",
    hqLat:48.1290, hqLng:11.6150,
    website:"", domain:"",
    linkedin:"", contactName:"Peter-Alexander Wacker", contactRole:"Eigentümer / Aufsichtsratsvorsitzender Wacker Chemie", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:4.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Familienvermögen historisch 2,65–4,5 Mrd € (manager magazin); Familie hält >50 % an Wacker Chemie. Beteiligungsvehikel: Dr. Alexander Wacker Familiengesellschaft mbH (HRB 515 AG München); dediziertes SFO: Blue Elephant Holding GmbH (Bad Wiessee, Energie/Venture). Operative Wacker Chemie AG = separat.", sources:[{label:"Northdata HRB 515",url:"https://www.northdata.com/Dr.+Alexander+Wacker+Familiengesellschaft+mbH,+M%C3%BCnchen/HRB+515"},{label:"DDW Wacker-Familie",url:"https://die-deutsche-wirtschaft.de/familienunternehmen/wacker-familie-wacker-chemie-muenchen-inhaber/"}] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung — Blue Elephant energie-/venture-fokussiert; keine RE-Quote ausgewiesen, kein sichtbarer RE-Kern.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Buero:50, Sonstiges:50 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Oberbayern (Tegernsee)", intensity:"niedrig", usages:["Buero","Sonstiges"], center:[48.13,11.60], radiusKm:30,
        basis:"extrapolation", note:"Sitz München; Blue Elephant Holding in Bad Wiessee/Tegernsee. Kein öffentliches RE-Portfolio.", sources:[] }
    ]
  },

  {
    id:"profunda",
    name:"Profunda (Family Office der Familie Boehringer/von Baumbach)", kurz:"Profunda",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Friedrich-Ebert-Anlage 56, 60325 Frankfurt am Main (urspr. Binger Straße 173, 55216 Ingelheim am Rhein)",
    hqLat:50.1122, hqLng:8.6648,
    website:"", domain:"",
    linkedin:"", contactName:"Hubertus von Baumbach", contactRole:"Geschäftsführer Profunda Verwaltungs-GmbH", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:5.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Gesellschafterfamilie (Boehringer/von Baumbach) gesamt ~47–52 Mrd € (Bloomberg); operativer Pharmakonzern Boehringer Ingelheim = separat. Profunda (SFO) verwaltet das Privatvermögen: PE, Health Care, Versicherung, Immobilien. Über Profunda gemanagtes Portfolio nicht separat ausgewiesen.", sources:[{label:"DAS INVESTMENT / Bloomberg",url:"https://www.dasinvestment.com/bloomberg-das-sind-die-25-wohlhabendsten-familien-des-planeten/?page=3"},{label:"Northdata Profunda Verwaltungs-GmbH",url:"https://www.northdata.com/Profunda%20Verwaltungs-GmbH,%20Frankfurt%20a%C2%B7%20Main/Amtsgericht%20Frankfurt%20am%20Main%20HRB%20136162"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — eigene RE-Sparte belegt (Profunda real estate GmbH & Co. KG), aber keine quantifizierte Quote und keine öffentliche Objektliste.", sources:[] },
    reInvestedEUR:1.0,
    usage:{ Buero:50, Wohnen:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main (Ingelheim/Frankfurt)", intensity:"mittel", usages:["Buero","Wohnen"], center:[50.11,8.66], radiusKm:30,
        basis:"quelle", note:"Sitz Ingelheim→Frankfurt; eigene Immobilientochter Profunda real estate. Kein öffentliches Einzelobjekt-Portfolio.", sources:[{label:"private-banking-magazin",url:"https://www.private-banking-magazin.de/vom-eon-asset-management-hendrik-kammeyer-wechselt-zum-family-office-profunda-1455184919/"}] },
      { name:"Hamburg", intensity:"niedrig", usages:["Buero"], center:[53.55,10.00], radiusKm:15,
        basis:"quelle", note:"Profunda Vermögen GmbH, Hamburg (HRB 104902).", sources:[{label:"Northdata Profunda Vermögen",url:"https://www.northdata.com/Profunda%20Verm%C3%B6gen%20GmbH,%20Hamburg/HRB%20104902"}] }
    ]
  }

]);
