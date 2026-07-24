/* Worker 11 — neue FOs aus 280er-Liste (slice-11). NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([
  {
    id:"deilmann_cd",
    name:"C. Deilmann GmbH & Co. KG (Familie Deilmann)", kurz:"C. Deilmann (Deilmann)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Osterberg 8, 48455 Bad Bentheim",
    hqLat:52.3010, hqLng:7.1560,
    website:"cdeilmann.de", domain:"cdeilmann.de",
    linkedin:"", contactName:"Familie Deilmann (4. Generation)", contactRole:"Gesellschafter / Holding-Leitung", contactChannel:"über cdeilmann.de (Impressum), Osterberg 8, 48455 Bad Bentheim",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Eigenständige Sparte „Immobilienmanagement“ neben Industriebeteiligungen und Vermögensverwaltung; laut Website konservatives Bestands-Immobilienmanagement für das Familienvermögen. Konkrete Assetklassen, Ticketgrößen und Regionen werden nicht öffentlich kommuniziert (Quelle: cdeilmann.de). Über die reine Bestandsverwaltung hinaus nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.25, unit:"Mrd €", basis:"quelle", note:"Konzernumsatz ca. 265 Mio $ (D&B), ~1.100 Mitarbeiter; Vermögen der Holding nicht veröffentlicht. Fokus auf Industriebeteiligungen (Gartenbau, Erneuerbare, Engineering), Immobilien nur eine Sparte.", sources:[{label:"Dun & Bradstreet – C. Deilmann GmbH & Co. KG",url:"https://www.dnb.com/business-directory/company-profiles.c_deilmann_gmbh__co_kg.4b52c3fbe29973a8272fa290e71ac4df.html"},{label:"C. Deilmann – Website",url:"https://cdeilmann.de/"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Immobilien = eine von drei Sparten (Industriebeteiligungen, Vermögensverwaltung, Immobilienmanagement). Anteil geschätzt, keine Einzelquelle. Reine Einschätzung.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Wohnen:40, Buero:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Bad Bentheim / Grafschaft Bentheim (Sitz)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[52.30,7.16], radiusKm:30, basis:"extrapolation", note:"Kein öffentliches Objektportfolio; Region vom Firmensitz abgeleitet. Reine Einschätzung.", sources:[] }
    ]
  },
  {
    id:"fn_capital_holding",
    name:"FN Capital Holding GmbH (FN-Gruppe)", kurz:"FN Capital Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Rosa-Luxemburg-Straße 9, 18055 Rostock",
    hqLat:54.0890, hqLng:12.1330,
    website:"fn-gruppe.de", domain:"fn-gruppe.de",
    linkedin:"", contactName:"FN Capital Holding GmbH (familiengeführt)", contactRole:"Geschäftsführung / Ankauf", contactChannel:"über fn-gruppe.de, Rosa-Luxemburg-Straße 9, 18055 Rostock",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 13559 (Amtsgericht Rostock)",
    ankaufsprofil:"Familiengeführtes Vermögensverwaltungs-/Family-Office mit Immobilien-Kerngeschäft: Ankauf und Halten eigener Bestandsimmobilien mit Value-Add-Ansatz (Leerstandsabbau, Modernisierung, Neupositionierung). Schwerpunkt Handels-/Gewerbe- und großflächige Objekte in Mecklenburg-Vorpommern (Rostock, Schwerin, Güstrow, Umland). Ankäufe aus Eigenkapital, schnelle/diskrete Transaktionen (Quelle: fn-gruppe.de, Immobilien Zeitung). Ticketgrößen nicht veröffentlicht.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Aktiver Immobilien-Bestandshalter in MV; Portfoliogröße nicht veröffentlicht, aus mehreren großflächigen Transaktionen (Güstrow ~12 ha, Ziesendorf ~115.000 m² ex-Coca-Cola, Handelscenter Schwerin) grob geschätzt. Reine Einschätzung.", sources:[{label:"Immobilien Zeitung – Profil FN Capital Holding",url:"https://www.iz.de/profile/unternehmen/FN%20Capital%20Holding/"},{label:"FN-Gruppe – Website",url:"https://fn-gruppe.de/"}] },
    reQuote:{ value:0.85, basis:"quelle", note:"Unternehmenszweck laut Handelsregister: Erwerb und Verwaltung eigenen Vermögens, insbesondere Immobilien und Beteiligungen; Kerngeschäft Immobilien.", sources:[{label:"companyhouse – FN Capital Holding GmbH",url:"https://www.companyhouse.de/en/FN-Capital-Holding-GmbH-Rostock"}] },
    reInvestedEUR:0.25,
    usage:{ Retail:40, Logistik:25, Buero:20, Wohnen:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rostock & Umland", intensity:"hoch", usages:["Retail","Logistik","Buero"], center:[54.09,12.13], radiusKm:30, basis:"quelle", note:"Sitz und mehrere Ankäufe (u.a. Ziesendorf ex-Coca-Cola-Areal ~115.000 m² südwestlich Rostock).", sources:[{label:"Immobilien Zeitung – FN Capital Holding",url:"https://www.iz.de/profile/unternehmen/FN%20Capital%20Holding/"}] },
      { name:"Mecklenburg-Vorpommern (Schwerin/Güstrow)", intensity:"mittel", usages:["Retail"], center:[53.63,11.41], radiusKm:60, basis:"quelle", note:"Handelscenter Schwerin (~4.500 m², an dänisches Family Office verkauft) und ~12 ha Areal in Güstrow.", sources:[{label:"Immobilien Zeitung – FN Capital Holding",url:"https://www.iz.de/profile/unternehmen/FN%20Capital%20Holding/"}] }
    ]
  },
  {
    id:"kaldox_gruppe",
    name:"Kaldox Gruppe (Family Office, Familie Dohrmann)", kurz:"Kaldox",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Hamburg (Billbrook/Osten Hamburgs) – Hausnr. nicht verifiziert",
    hqLat:53.5310, hqLng:10.0930,
    website:"kaldox.de", domain:"kaldox.de",
    linkedin:"", contactName:"Nasrin Dohrmann (GF, KALDOX Management GmbH)", contactRole:"Geschäftsführung", contactChannel:"über kaldox.de, KALDOX Management GmbH, Hamburg",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office (ursprünglich Import-/Export- und Schifffahrtsvermögen), heute Fokus Immobilien und landwirtschaftliche Flächen. Ankauf, Bestandshaltung und Weiterentwicklung von Gewerbe- und Industrieimmobilien (Büro, Lager, Logistik) in den östlichen Hamburger Gewerbegebieten (Billbrook, Rothenburgsort u.a.); langfristiger, nachhaltiger Bestandshalter-Ansatz mit Revitalisierung (Quelle: kaldox.de, immobilienmanager). Ticketgrößen nicht veröffentlicht; kauft auch Portfolios (z.B. „The Billbrook“).",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Portfolio nicht veröffentlicht; allein das Logistikportfolio „The Billbrook“ (~185.000 m², 6 Objekte, Ankauf 2023) belegt ein dreistelliges Mio-Volumen. Gesamtvermögen grob geschätzt. Reine Einschätzung.", sources:[{label:"immobilienmanager – Kaldox kauft Logistikportfolio Billbrook",url:"https://www.immobilienmanager.de/kaldox-kauft-logistikportfolio-in-hamburg-billbrook-20122023"}] },
    reQuote:{ value:0.8, basis:"quelle", note:"Family Office mit klarem Immobilien-Kern (Gewerbe/Logistik Hamburg) plus landwirtschaftliche Flächen.", sources:[{label:"listenchampion – Family Office Kaldox",url:"https://www.listenchampion.de/2023/12/27/family-office-investor-fuer-logistikimmobilien-in-hamburg-kaldox/"}] },
    reInvestedEUR:0.35,
    usage:{ Logistik:50, Buero:25, Sonstiges:25 },
    confirmedObjects:[
      { name:"Logistikportfolio „The Billbrook“ (6 Objekte)", address:"Hamburg-Billbrook, 22113 Hamburg (Straßen/Hausnr. nicht verifiziert)", lat:53.5310, lng:10.0930,
        usage:"Logistik", area:"~185.000 m²", purchaseDate:"2023", valueEUR:150, status:"Bestand",
        images:[], connection:"Direktkauf des Family Office Kaldox (Dez. 2023).", sources:[{label:"immobilienmanager – Kaldox kauft Logistikportfolio Billbrook",url:"https://www.immobilienmanager.de/kaldox-kauft-logistikportfolio-in-hamburg-billbrook-20122023"}] }
    ],
    heatmap:[
      { name:"Hamburg-Ost (Billbrook/Rothenburgsort)", intensity:"hoch", usages:["Logistik","Buero"], center:[53.531,10.093], radiusKm:12, basis:"quelle", note:"Kerngebiet der Gewerbe-/Logistikimmobilien; Wert des Portfolios geschätzt.", sources:[{label:"listenchampion – Kaldox",url:"https://www.listenchampion.de/2023/12/27/family-office-investor-fuer-logistikimmobilien-in-hamburg-kaldox/"}] }
    ]
  },
  {
    id:"schadeberg_fo",
    name:"Schawei Holding GmbH & Co. KG / Schadeberg Family Office (Familie Schadeberg, Krombacher)", kurz:"Schadeberg FO (Krombacher)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Hagener Str. 261, 57223 Kreuztal",
    hqLat:50.9680, hqLng:7.9880,
    website:"", domain:"",
    linkedin:"", contactName:"Bernhard Schadeberg · Petra Schadeberg-Herrmann · Barbara Lambrecht-Schadeberg", contactRole:"Gesellschafter / Family Office", contactChannel:"über Schawei GmbH / SFO GmbH, Kreuztal",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"Schawei GmbH: HRB 8726 (AG Siegen); SFO GmbH: HRB 11726 (AG Siegen)",
    ankaufsprofil:"Single Family Office des Krombacher-Vermögens (Familie Schadeberg). Breit diversifiziert über Direkt-Co-Investments, SPVs und Fondsbeteiligungen: Private Equity, Private Credit, Hedgefonds, Immobilien, Infrastruktur, Rohstoffe; Regionen Europa und Nordamerika. Immobilien sind eine von mehreren Assetklassen, i.d.R. indirekt (Fonds/Co-Investments); ein spezifisches Immobilien-Ankaufsprofil (Nutzung/Ticket/Region) ist nicht öffentlich (Quelle: Altss/Crunchbase-Profile Schadeberg Family Office).",
    category:"gelb",
    aum:{ value:2.0, unit:"Mrd €", basis:"extrapolation", note:"Vermögen aus Krombacher-Brauerei (eine der größten privaten Brauereien Deutschlands); Höhe nicht veröffentlicht, grob geschätzt. Reine Einschätzung.", sources:[{label:"Wikipedia – Krombacher Brauerei",url:"https://en.wikipedia.org/wiki/Krombacher_Brauerei"},{label:"Altss – Schadeberg Family Office",url:"https://altss.com/profile/schadeberg-family-office"}] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Immobilien nur eine von vielen Assetklassen, meist indirekt über Fonds/Co-Investments. Anteil geschätzt. Reine Einschätzung.", sources:[] },
    reInvestedEUR:0.3,
    usage:{ Buero:40, Wohnen:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Siegerland (Kreuztal, Sitz)", intensity:"niedrig", usages:null, center:[50.97,7.99], radiusKm:30, basis:"extrapolation", note:"Kein öffentliches Direktimmobilien-Portfolio; Region vom Sitz abgeleitet, Investments überwiegend indirekt. Reine Einschätzung.", sources:[] }
    ]
  },
  {
    id:"droege_group",
    name:"Droege Group AG (Familie Droege)", kurz:"Droege Group",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Poststraße 5–6, 40213 Düsseldorf",
    hqLat:51.2230, hqLng:6.7750,
    website:"droege-group.com", domain:"droege-group.com",
    linkedin:"", contactName:"Walter P. J. Droege (Gründer) · Dr. Ernest-W. Droege (CEO)", contactRole:"Eigentümerfamilie / Vorstand", contactChannel:"über droege-group.com, Poststraße 5–6, 40213 Düsseldorf",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Vollständig familieneigene Beteiligungs- und Beratungsgruppe (Walter Droege). Das private Family Office investiert das Familienvermögen laut Gruppe überwiegend in Immobilien und Beteiligungen (über die Droege Real Estate Holding); Beteiligungsseite fokussiert Spin-offs/Turnarounds/Nachfolgen als Mehrheitskäufe. Konkretes Immobilien-Ankaufsprofil (Nutzung/Ticket/Region/Core vs. Value-Add) wird nicht öffentlich kommuniziert (Quelle: Droege Group / Wikipedia).",
    category:"gelb",
    aum:{ value:3.6, unit:"Mrd €", basis:"quelle", note:"Family Office/Beteiligungsgruppe verwaltet ca. 3,6 Mrd $ über Buyouts/Special Situations; RE über Droege Real Estate Holding.", sources:[{label:"Altss – Droege Group",url:"https://altss.com/profile/droege-group"},{label:"Wikipedia – Droege Group",url:"https://de.wikipedia.org/wiki/Droege_Group"}] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"„Überwiegend in Immobilien und Beteiligungen“ investiert; Immobilienanteil nicht beziffert. Reine Einschätzung.", sources:[] },
    reInvestedEUR:0.9,
    usage:{ Buero:50, Wohnen:25, Sonstiges:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf / Rheinland (Sitz)", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.22,6.78], radiusKm:35, basis:"extrapolation", note:"Immobilien über Droege Real Estate Holding; keine öffentlichen Einzeladressen. Region vom Sitz abgeleitet. Reine Einschätzung.", sources:[] }
    ]
  },
  {
    id:"jp_beteiligung",
    name:"JP Beteiligungs-Gesellschaft mbH (Hamburger Unternehmerfamilie)", kurz:"JP Beteiligung",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Alstertor 9, 20095 Hamburg",
    hqLat:53.5520, hqLng:10.0010,
    website:"jp-beteiligung.de", domain:"jp-beteiligung.de",
    linkedin:"", contactName:"JP Beteiligungs-Gesellschaft mbH", contactRole:"Geschäftsführung / Ankauf", contactChannel:"über jp-beteiligung.de, Alstertor 9, 20095 Hamburg, +49 40 30394990",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 113107 (Amtsgericht Hamburg)",
    ankaufsprofil:"Family Office einer Hamburger Unternehmerfamilie (über 200-jährige Tradition), investiert ausschließlich Eigenkapital ohne Bank-/Fondsfinanzierung. Fokus: Bestandsimmobilien (Wohnen, Büro, Gewerbe, Hotel) sowie Mezzanine-Finanzierungen, jeweils in Deutschland. Kurze Entscheidungswege, schnelle und diskrete Transaktionen (Quelle: jp-beteiligung.de). Ticketgrößen/Städte nicht näher veröffentlicht.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reines Eigenkapital-Family-Office; Volumen nicht veröffentlicht, grob geschätzt. Reine Einschätzung.", sources:[{label:"Die Deutsche Wirtschaft – JP Beteiligungs-Gesellschaft mbH",url:"https://die-deutsche-wirtschaft.de/investoren/jp-beteiligungs-gesellschaft-mbh-hamburg-investoren/"}] },
    reQuote:{ value:0.7, basis:"quelle", note:"Schwerpunkt Immobilieninvestments (Bestand) plus Mezzanine; Immobilien = Kerngeschäft.", sources:[{label:"JP Beteiligung – Website",url:"https://www.jp-beteiligung.de/"}] },
    reInvestedEUR:0.2,
    usage:{ Wohnen:35, Buero:30, Retail:20, Hotel:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz/Fokus)", intensity:"mittel", usages:["Wohnen","Buero","Retail","Hotel"], center:[53.55,10.00], radiusKm:30, basis:"quelle", note:"Bestandsimmobilien deutschlandweit, Sitz Hamburg; keine öffentlichen Einzeladressen.", sources:[{label:"JP Beteiligung – Website",url:"https://www.jp-beteiligung.de/"}] },
      { name:"Deutschland (Bestand & Mezzanine)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[51.0,10.0], radiusKm:250, basis:"quelle", note:"Transaktionen im Immobiliensektor deutschlandweit.", sources:[{label:"Die Deutsche Wirtschaft – JP Beteiligung",url:"https://die-deutsche-wirtschaft.de/investoren/jp-beteiligungs-gesellschaft-mbh-hamburg-investoren/"}] }
    ]
  },
  {
    id:"houben_vv",
    name:"Houben Vermögensverwaltung GmbH (Familie Houben)", kurz:"Houben (München)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Alter Hof 6, 80331 München",
    hqLat:48.1370, hqLng:11.5780,
    website:"houben.com", domain:"houben.com",
    linkedin:"", contactName:"Burghart Houben", contactRole:"Geschäftsführer / Ankauf", contactChannel:"Ankauf: ankauf@houben.com, +49 89 291900-0, Alter Hof 6, 80331 München",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 181433 (Amtsgericht München)",
    ankaufsprofil:"Privates Family Office (Familie Houben) mit Immobilien-Kern: Ankauf, Asset- und Bestandsmanagement eigener Objekte. Gesucht werden Mehrfamilienhäuser, Wohn- und Geschäftshäuser, Portfolios und Gebäudeanteile mit ca. 500–5.000 m² Mietfläche; klarer geografischer Fokus München, bevorzugt im 3-km-Radius um den Marienplatz. Langfristiger Bestandshalter (Quelle: houben.com, gelbeseiten). Ankaufskontakt: ankauf@houben.com.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Münchner Bestandshalter (Wohn-/Geschäftshäuser Innenstadt); Portfoliogröße nicht veröffentlicht, grob geschätzt. Reine Einschätzung.", sources:[{label:"Northdata – Houben Vermögensverwaltung GmbH",url:"https://www.northdata.com/Houben%20Verm%C3%B6gensverwaltung%20GmbH,%20M%C3%BCnchen/HRB%20181433"}] },
    reQuote:{ value:0.9, basis:"quelle", note:"Zweck: Verwaltung eigenen Vermögens, insbesondere Immobilien; reiner Immobilien-Bestandshalter.", sources:[{label:"gelbeseiten – Houben-Vermögensverwaltung GmbH",url:"https://www.gelbeseiten.de/gsbiz/db0ca812-2aec-4752-accd-2d90a193c9a4"}] },
    reInvestedEUR:0.25,
    usage:{ Wohnen:55, Buero:25, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München-Altstadt (Umkreis Marienplatz)", intensity:"hoch", usages:["Wohnen","Buero","Retail"], center:[48.137,11.575], radiusKm:5, basis:"quelle", note:"Erklärter Ankaufsfokus: Wohn-/Geschäftshäuser 500–5.000 m² im 3-km-Radius um den Marienplatz; keine öffentlichen Einzeladressen.", sources:[{label:"gelbeseiten – Houben-Vermögensverwaltung GmbH",url:"https://www.gelbeseiten.de/gsbiz/db0ca812-2aec-4752-accd-2d90a193c9a4"}] }
    ]
  }
]);
