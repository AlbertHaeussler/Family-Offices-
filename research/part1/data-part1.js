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
  },

  // ===== Runde 2: weitere Rhein-Main / West-FOs =====

  {
    id:"cara_investment",
    name:"Cara Investment GmbH (Single Family Office)", kurz:"Cara Investment",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Goethestraße 34, 60313 Frankfurt am Main",
    hqLat:50.1165, hqLng:8.6740,
    website:"cara-investment.com", domain:"cara-investment.com",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"cara-investment.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Single Family Office (gegr. 2010, HRB 133831 AG Frankfurt); kein öffentliches AUM. Immobilien über die RE-Tochter Cara Real Estate GmbH (HRB 114306) — diese GmbH ist die operative RE-Gesellschaft, nicht selbst das FO.", sources:[{label:"Northdata Cara Investment",url:"https://www.northdata.com/Cara%20Investment%20GmbH,%20Frankfurt"}] },
    reQuote:{ value:0.5, basis:"extrapolation", note:"Reine Einschätzung — Immobilien (Prime RE Europa/USA) eigener Anlagebaustein über Cara Real Estate; keine bezifferte Quote.", sources:[] },
    reInvestedEUR:0.4,
    usage:{ Buero:100 },
    confirmedObjects:[
      { name:"Bürohaus Untermainkai 27–28 (ehem. Sitz Credit Europe Bank)", address:"Untermainkai 27–28, 60329 Frankfurt am Main", lat:50.1078, lng:8.6726,
        usage:"Buero", area:"~4.000 m² MF + 12 TG", purchaseDate:"2020", valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"deal-magazin: Cara kauft",url:"https://www.deal-magazin.com/news/98548/"},{label:"Immobilien Zeitung",url:"https://www.iz.de/"}] }
    ],
    heatmap:[
      { name:"Frankfurt Innenstadt/Bankenviertel", intensity:"hoch", usages:["Buero"], center:[50.11,8.67], radiusKm:3,
        basis:"quelle", note:"Track Record RE-Arm: auch ODDO-BHF-Tower (Bockenheimer Landstr. 10) — 2020/21 an ABG/HanseMerkur verkauft (~300 Mio €), daher NICHT als eigenes Objekt gemappt.", sources:[{label:"openpr/HanseMerkur",url:"https://www.openpr.de/news/1098875/"}] }
    ]
  },

  {
    id:"metzler_familie",
    name:"Familie von Metzler / B. Metzler seel. Sohn & Co. (Familienbank als FO-Vehikel)", kurz:"Metzler (Familie)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Untermainanlage 1, 60329 Frankfurt am Main",
    hqLat:50.1096, hqLng:8.6689,
    website:"metzler.com", domain:"metzler.com",
    linkedin:"", contactName:"Franz von Metzler", contactRole:"Familie / Gesellschafter", contactChannel:"metzler.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.2, unit:"Mrd €", basis:"quelle", note:"Familienvermögen ~1,2 Mrd € (Reichenliste). Älteste dt. Familienbank (seit 1674), vollständig in Familienbesitz; die Bank (Assets ~74 Mrd €, 2020) ist das operative FO-Vehikel der Eigentümerfamilie — Bank-AUM ≠ Familienvermögen.", sources:[{label:"Wikipedia B. Metzler",url:"https://de.wikipedia.org/wiki/B._Metzler_seel._Sohn_%26_Co."},{label:"private-banking-magazin",url:"https://www.private-banking-magazin.de/"}] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung — Fokus Asset Management/Kapital; kein eigenes RE-Kernportfolio.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Frankfurt (Sitz)", intensity:"niedrig", usages:["Buero"], center:[50.11,8.67], radiusKm:5,
        basis:"quelle", note:"Bankhaus als Familienvehikel; kein bestätigtes RE-Portfolio.", sources:[{label:"metzler.com",url:"https://www.metzler.com/"}] }
    ]
  },

  {
    id:"hrk_lunis",
    name:"HRK LUNIS AG (Multi Family Office)", kurz:"HRK Lunis",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Friedrichstraße 31, 60323 Frankfurt am Main",
    hqLat:50.1205, hqLng:8.6650,
    website:"hrklunis.de", domain:"hrklunis.de",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"kontakt@hrklunis.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein sauber belegtes öffentliches AUM. Bankenunabhängiges MFO (aus HRK Vermögensverwaltung + Lunis; BaFin-reguliert), mehrere Standorte; Tochter WERTIQ GmbH (eigenständiges MFO).", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Kapitalfokus, RE nur über Allokation/Fonds für Mandanten.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Buero:40, Wohnen:35, Retail:15, Logistik:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Frankfurt / bundesweit", intensity:"niedrig", usages:["Buero","Wohnen"], center:[50.12,8.66], radiusKm:20,
        basis:"extrapolation", note:"MFO mit mehreren Standorten; kein Eigen-RE-Portfolio.", sources:[] }
    ]
  },

  {
    id:"brehmer_cie",
    name:"BREHMER & CIE. Family Office GmbH", kurz:"Brehmer & Cie.",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Schumannstraße 59, 60325 Frankfurt am Main",
    hqLat:50.1181, hqLng:8.6560,
    website:"brehmer-cie.com", domain:"brehmer-cie.com",
    linkedin:"", contactName:"Monika Brehmer", contactRole:"Gründerin / Geschäftsführerin", contactChannel:"brehmer-cie.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.8, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Unabhängiges MFO (gegr. 2009), BaFin-Wertpapierinstitut.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Vermögensberatung/-verwaltung, kein RE-Kern.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Frankfurt (Sitz)", intensity:"niedrig", usages:["Buero"], center:[50.118,8.656], radiusKm:10,
        basis:"quelle", note:"MFO-Sitz; kein Eigen-RE-Portfolio.", sources:[{label:"Impressum",url:"https://www.brehmer-cie.com/impressum"}] }
    ]
  },

  {
    id:"fbg_family_office",
    name:"Family Office der Frankfurter Bankgesellschaft AG", kurz:"FBG Family Office",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Junghofstraße 26, 60311 Frankfurt am Main",
    hqLat:50.1145, hqLng:8.6770,
    website:"familyoffice-fbg.com", domain:"familyoffice-fbg.com",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"familyoffice-fbg.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:5.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — FO-Segment nicht separat ausgewiesen. MFO der Sparkassen-Finanzgruppe (Frankfurter Bankgesellschaft, Gruppe Basler Kantonalbank).", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Overall-Wealth-Betreuung, keine familieneigene RE.", sources:[] },
    reInvestedEUR:0.3,
    usage:{ Buero:45, Wohnen:35, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Frankfurt (Sitz)", intensity:"niedrig", usages:["Buero"], center:[50.114,8.677], radiusKm:10,
        basis:"quelle", note:"Konzern-MFO; kein Eigen-RE-Portfolio.", sources:[{label:"familyoffice-fbg.com",url:"https://www.familyoffice-fbg.com/"}] }
    ]
  },

  {
    id:"kuder_familypartner",
    name:"Kuder Familypartner GmbH (Multi Family Office)", kurz:"Kuder Familypartner",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Am Untertor 4, 65719 Hofheim am Taunus",
    hqLat:50.0885, hqLng:8.4470,
    website:"kuder-fp.de", domain:"kuder-fp.de",
    linkedin:"", contactName:"Klaus Kuder", contactRole:"Geschäftsführer", contactChannel:"info@kuder-fp.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Inhabergeführtes MFO (>20 Jahre) für einen kleinen Kreis von Unternehmerfamilien (HRB 100950).", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Vermögensorganisation, kein RE-Kern belegt.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:40, Wohnen:40, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hofheim / Rhein-Main", intensity:"niedrig", usages:["Buero","Wohnen"], center:[50.089,8.447], radiusKm:15,
        basis:"quelle", note:"MFO-Sitz; kein Eigen-RE-Portfolio.", sources:[{label:"Impressum",url:"https://www.kuder-fp.de/impressum"}] }
    ]
  },

  {
    id:"fv_frankfurter_vermoegen",
    name:"FV Frankfurter Vermögen AG (Vermögensverwaltung / Family-Office-Services)", kurz:"Frankfurter Vermögen",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Rathausplatz 1, 61348 Bad Homburg v. d. Höhe",
    hqLat:50.2270, hqLng:8.6180,
    website:"frankfurter-vermoegen.com", domain:"frankfurter-vermoegen.com",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"frankfurter-vermoegen.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Unabhängiger Vermögensverwalter mit Family-Office-Leistungen (eher VV mit FO-Dienstleistung als reines FO). Zweitstandort Königstein.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Kapitalfokus, kein RE-Kern.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Bad Homburg / Rhein-Main", intensity:"niedrig", usages:["Buero"], center:[50.227,8.618], radiusKm:15,
        basis:"quelle", note:"VV/FO-Dienstleister; kein Eigen-RE-Portfolio.", sources:[{label:"frankfurter-vermoegen.com",url:"https://www.frankfurter-vermoegen.com/"}] }
    ]
  },

  {
    id:"hfo_henkel",
    name:"HFO GmbH — Henkel Family Office (Familie Henkel)", kurz:"Henkel Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Breite Straße 31, 40213 Düsseldorf",
    hqLat:51.2258, hqLng:6.7745,
    website:"hfo.de", domain:"hfo.de",
    linkedin:"", contactName:"Christian Rouette / Oliver Pütz", contactRole:"Geschäftsführung (Doppelspitze)", contactChannel:"hfo.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:8.5, unit:"Mrd €", basis:"quelle", note:"~8,5 Mrd €. Echtes SFO der Familie Henkel (gegr. 2005, HRB 52730 Düsseldorf); verwaltet das Privatvermögen getrennt vom operativen Henkel-Konzern.", sources:[{label:"private-banking-magazin",url:"https://www.private-banking-magazin.de/"},{label:"Northdata HFO GmbH",url:"https://www.northdata.com/HFO%20GmbH,%20D%C3%BCsseldorf/HRB%2052730"}] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung — kein öffentlich der HFO zuzuordnendes Objekt-Portfolio. (Hinweis: der Verkauf Henkelstraße 230, Düsseldorf-Reisholz war die operative Henkel AG, NICHT HFO.)", sources:[] },
    reInvestedEUR:1.0,
    usage:{ Buero:40, Wohnen:30, Logistik:20, Retail:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf / Rheinland", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.226,6.775], radiusKm:20,
        basis:"quelle", note:"Sitz Düsseldorf; RE-Allokation ohne öffentliche Objektliste.", sources:[{label:"hfo.de",url:"https://www.hfo.de/"}] }
    ]
  },

  {
    id:"werhahn",
    name:"Wilh. Werhahn KG (Familie Werhahn — diversifizierte Familienholding)", kurz:"Werhahn",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Königstraße 1, 41460 Neuss",
    hqLat:51.198, hqLng:6.690,
    website:"werhahn.de", domain:"werhahn.de",
    linkedin:"", contactName:"", contactRole:"Familie Werhahn (Gesellschafter)", contactChannel:"werhahn.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:2.9, unit:"Mrd €", basis:"quelle", note:"Familienvermögen ~2,9 Mrd € (2024). Diversifizierte Familienholding (Baustoffe, Konsumgüter, Finanzdienstleistungen inkl. Bankhaus Werhahn) — überwiegend operativ; enthält aber ein eigenes Immobilien-/Vermögenssegment der Familie. Kein separat firmierendes reines FO-Vehikel gefunden.", sources:[{label:"DDW Werhahn",url:"https://die-deutsche-wirtschaft.de/familienunternehmen/werhahn/"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — RE-Segment vorhanden, aber keine verifizierten Einzeladressen (nur HQ Königstr. 1 Neuss bestätigt).", sources:[] },
    reInvestedEUR:0.3,
    usage:{ Buero:40, Wohnen:30, Retail:20, Logistik:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Neuss / Rheinland", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.198,6.690], radiusKm:20,
        basis:"quelle", note:"Sitz Neuss; weiteres RE in Köln/Ruhr/Berlin genannt, aber ohne verifizierte Einzeladressen.", sources:[{label:"werhahn.de",url:"https://www.werhahn.de/"}] }
    ]
  },

  // ===== Runde 3: bundesweiter Sweep =====
  // HINWEIS: Schörghuber wurde parallel von Part 3 (Süd/Bayern, thematisch korrekt)
  // eingetragen (id "schoerghuber", 5 bestätigte Objekte) — daher hier NICHT doppeln.

  {
    id:"syngroh_grohe",
    name:"Syngroh Beteiligungsgesellschaft mbH / Syngroh Capital (Family Office der Familie Klaus Grohe)",
    kurz:"Syngroh (Grohe/Hansgrohe)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Auestraße 25, 77761 Schiltach",
    hqLat:48.2880, hqLng:8.3410,
    website:"syngroh.com", domain:"syngroh.com",
    linkedin:"", contactName:"Richard Grohe · Ralph Becker (Geschäftsführer FO)", contactRole:"Familie / Geschäftsführung Family Office",
    contactChannel:"über Syngroh Capital / syngroh advisory",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.0, unit:"Mrd €", basis:"quelle",
      note:"Milliardenvermögen der Familie Klaus Grohe; dominiert von ~32 % an Hansgrohe SE, dazu Direktbeteiligungen (Syngroh Capital) und Immobilien (Poligroh). Hansgrohe SE = operativ, separat.",
      sources:[{label:"private-banking-magazin – Hansgrohe Single Family Office",url:"https://www.private-banking-magazin.de/interview-hansgrohe-single-family-office-richard-grohe-ralph-becker/"},{label:"familyofficehub – Syngroh Schiltach",url:"https://familyofficehub.io/family-office-portraits/german-single-family-offices/syngroh-single-family-office-in-schiltach-germany/"}] },
    reQuote:{ value:0.1, basis:"extrapolation",
      note:"Reine Einschätzung: RE über die Tochter Poligroh (~100 Wohneinheiten) ist ein Nebenbaustein; Kern ist die Hansgrohe-Beteiligung. Keine öffentlichen Einzeladressen.",
      sources:[{label:"wir-Magazin – Syngroh/Poligroh",url:"https://www.wirmagazin.de/beteiligungsholding/zurueck-auf-start-syngroh-grohe-holding-investments-8683/"}] },
    reInvestedEUR:0.2,
    usage:{ Wohnen:80, Buero:10, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Schwarzwald / Schiltach", intensity:"niedrig", usages:["Wohnen"], center:[48.2880,8.3410], radiusKm:20,
        basis:"quelle", note:"Wohnimmobilien über Poligroh; Sitz des FO in Schiltach.",
        sources:[{label:"Northdata – Syngroh Beteiligungsgesellschaft mbH",url:"https://www.northdata.com/Syngroh+Beteiligungsgesellschaft+mbH,+Schiltach/Amtsgericht+Stuttgart+HRB+745743"}] }
    ]
  },

  {
    id:"oberwelland_storck",
    name:"TAO Holding GmbH / OW Familien Verwaltungs GmbH (Family Office Familie Oberwelland, August Storck)",
    kurz:"Oberwelland (Storck)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Waldstraße 27, 13403 Berlin",
    hqLat:52.5622, hqLng:13.3560,
    website:"", domain:"",
    linkedin:"", contactName:"Axel Oberwelland", contactRole:"Inhaber / Prinzipal",
    contactChannel:"über TAO Holding GmbH / OW Familien Verwaltungs GmbH (Berlin)",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.5, unit:"Mrd €", basis:"quelle",
      note:"Vermögen Axel Oberwelland ~3,5 Mrd € (dominiert vom operativen Wert der August Storck KG); privates FO investiert über TAO Holding & OW Familien Verwaltungs GmbH in Immobilien und Beteiligungen. August Storck KG = operativ, separat.",
      sources:[{label:"Forbes – Axel Oberwelland & family",url:"https://www.forbes.com/profile/axel-oberwelland/"},{label:"Family Office Research – reichste Berliner",url:"https://www.familyofficeresearch.de/die-reichsten-berliner/"}] },
    reQuote:{ value:0.1, basis:"extrapolation",
      note:"Reine Einschätzung: TAO Holding/OW investieren u.a. in Immobilien, aber ohne öffentlich belegte Einzelobjekte; Kernvermögen ist die Storck-Beteiligung.",
      sources:[] },
    reInvestedEUR:0.3,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin (Sitz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[52.5622,13.3560], radiusKm:15,
        basis:"quelle", note:"Sitz der Familienvehikel (TAO Holding / Oberwelland Familien Beteiligungs KG, Waldstraße 27).",
        sources:[{label:"Northdata – Oberwelland Familien Beteiligungs KG, Berlin",url:"https://www.northdata.de/Oberwelland%20Familien%20Beteiligungs%20KG,%20Berlin/Amtsgericht%20Charlottenburg%20(Berlin)%20HRA%2048083%20B"}] }
    ]
  },

  {
    id:"lennertz_co",
    name:"Lennertz & Co. GmbH (Multi Family Office)",
    kurz:"Lennertz & Co.",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Düsternstraße 10, 20355 Hamburg",
    hqLat:53.5545, hqLng:9.9870,
    website:"lennertz.com", domain:"lennertz.com",
    linkedin:"https://www.linkedin.com/company/lennertz-co", contactName:"Philipp Lennertz", contactRole:"Geschäftsführender Gesellschafter",
    contactChannel:"über Lennertz & Co. – Alternative Investments/Family-Office-Services",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"quelle",
      note:"Verwaltet >1 Mrd € liquides Vermögen (2015 gegründet); Plattform für Alternative Investments (VC, PE, Blockchain, Immobilien).",
      sources:[{label:"altss – Lennertz & Co.",url:"https://altss.com/profile/lennertz-and-co-gmbh"},{label:"Northdata – Lennertz & Co. Family Office GmbH",url:"https://www.northdata.com/Lennertz%20&%20Co%C2%B7%20Family%20Office%20GmbH,%20Hamburg/HRB%20137568"}] },
    reQuote:{ value:0.1, basis:"extrapolation",
      note:"Reine Einschätzung: RE als eine von mehreren Alternative-Investment-Klassen (u.a. Luxus-RE-Projektentwicklung), überwiegend über Fonds/Club-Deals, kein eigenes Objektportfolio.",
      sources:[] },
    reInvestedEUR:0.1,
    usage:{ Wohnen:50, Buero:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz) / überregional (Fonds)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[53.5545,9.9870], radiusKm:10,
        basis:"quelle", note:"MFO allokiert für Klienten u.a. in Immobilienfonds; kein direktes Einzelobjekt-Portfolio.",
        sources:[{label:"lennertz.com",url:"https://www.lennertz.com/"}] }
    ]
  },

  {
    id:"faber_castell_vv",
    name:"Faber-Castell Immobilienverwaltung / Schlossvilla Vermögensverwaltung (Familie Graf von Faber-Castell)",
    kurz:"Faber-Castell (Familie)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Nürnberger Straße 2, 90547 Stein",
    hqLat:49.4132, hqLng:11.0170,
    website:"faber-castell.de", domain:"faber-castell.de",
    linkedin:"", contactName:"Charles Graf von Faber-Castell", contactRole:"Familie / Geschäftsführung",
    contactChannel:"über Faber-Castell Immobilienverwaltung GmbH & Co. KG (Stein)",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: Familienvermögen aus Anteilen an A.W. Faber-Castell AG (operativ, separat) plus privater Grund-/Immobilienbesitz um Schloss Stein; kein öffentliches AUM. RE-Verwaltung über Faber-Castell Immobilienverwaltung GmbH & Co. KG = RE-Tochter, nicht selbst das FO.",
      sources:[{label:"private-banking-magazin – neue Inhaberstrategie Faber-Castell",url:"https://www.private-banking-magazin.de/bei-familie-faber-castell-greift-eine-neue-inhaberstrategie/"}] },
    reQuote:{ value:0.2, basis:"extrapolation",
      note:"Reine Einschätzung: Faber-Castell Immobilienverwaltung + Schlossvilla Vermögensverwaltung verwalten eigene und fremde Objekte; keine öffentlich belegten Einzelobjekte außer dem Schlossareal Stein.",
      sources:[{label:"Companyhouse – Faber-Castell Immobilienverwaltung GmbH & Co. KG",url:"https://www.companyhouse.de/en/Faber-Castell-Immobilienverwaltung-GmbH-Co-KG-Stein"}] },
    reInvestedEUR:0.1,
    usage:{ Wohnen:40, Buero:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Stein / Nürnberg", intensity:"niedrig", usages:["Wohnen","Sonstiges"], center:[49.4132,11.0170], radiusKm:10,
        basis:"quelle", note:"Sitz und Grundbesitz der Familie rund um Schloss Faber-Castell in Stein bei Nürnberg.",
        sources:[{label:"Branchenbuch – Faber-Castell Immobilienverwaltung, Nürnberger Str. 2, Stein",url:"https://branchenbuch.meinestadt.de/stein-mittelfranken/company/14578071"}] }
    ]
  },

  {
    id:"schuerfeld_group",
    name:"Schürfeld Group / G. Schürfeld + Co. (GmbH & Co.) KG (Familie Schürfeld)",
    kurz:"Schürfeld Group",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Domstraße 18, 20095 Hamburg",
    hqLat:53.5486, hqLng:9.9955,
    website:"schuerfeld-group.com", domain:"schuerfeld-group.com",
    linkedin:"https://de.linkedin.com/company/sch%C3%BCrfeld-group", contactName:"Familie Schürfeld", contactRole:"Gesellschafterfamilie",
    contactChannel:"über Schürfeld Group – Beteiligungsmanagement",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: familiengeführte Beteiligungsholding (seit 1937), Portfolio-Unternehmen mit >1,5 Mrd € Umsatz/12.000 MA; Privatvermögen nicht veröffentlicht.",
      sources:[{label:"Wikipedia – Schürfeld",url:"https://de.wikipedia.org/wiki/Sch%C3%BCrfeld"},{label:"Northdata – G. Schürfeld & Co. (GmbH & Co.) KG",url:"https://www.northdata.com/G%C2%B7%20Sch%C3%BCrfeld%20&%20Co%C2%B7%20(GmbH%20&%20Co%C2%B7)%20KG,%20Hamburg/HRA%2041054"}] },
    reQuote:{ value:0.05, basis:"extrapolation",
      note:"Reine Einschätzung: Schwerpunkt Mittelstands-Beteiligungen (Papier/Verpackung/Druck, dazu Start-ups wie 1Komma5°); kein belegter Immobilien-Kern.",
      sources:[] },
    reInvestedEUR:0.05,
    usage:{ Sonstiges:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz)", intensity:"niedrig", usages:["Sonstiges"], center:[53.5486,9.9955], radiusKm:8,
        basis:"quelle", note:"Sitz der Beteiligungsholding; kein dokumentiertes Immobilien-Investment.",
        sources:[{label:"Schürfeld Group – Profil",url:"https://schuerfeld-group.com/en/profile/"}] }
    ]
  }

]);
