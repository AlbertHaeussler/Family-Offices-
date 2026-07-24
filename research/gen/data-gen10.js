/* Worker 10 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"jw_watzl",
    name:"JW Investment Holding GmbH / WATZL Group (Familie Watzl)", kurz:"Watzl Group",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Heinrich-Knote-Straße 20, 82343 Pöcking",
    hqLat:47.9720, hqLng:11.2970,
    website:"watzl-group.com", domain:"watzl-group.com",
    linkedin:"", contactName:"Jan Watzl", contactRole:"Geschäftsführender Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Laut veröffentlichtem Ankaufsprofil (jw-investmentholding.com/ankaufsprofil, watzl-group.com): Büro-/Geschäftshäuser, Wohnen, Hotel, Industrie/Logistik, Retail. Ticketgröße 5–35 Mio € (bis 100 Mio € möglich; unter 5 Mio € nur mit hohem Upside). Regionen: wirtschaftsstarke Städte ab 40.000 Einwohnern in Bayern und Baden-Württemberg, ausnahmsweise bundesweit und in der Schweiz. Risikoklassen Core/Core+/Value-Add/Opportunistic. Auch Leerstände, kurze WALT (<5 J). Nur Asset Deals. Bestand mit Repositionierung/Revitalisierung sowie Quartiersentwicklung.",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; eigentümergeführtes Immobilien-Family-Office, laut Presse Ankauf von 5 Büro-/Geschäftshäusern in Süddeutschland, konkretes AUM nicht veröffentlicht.", sources:[] },
    reQuote:{ value:0.95, basis:"quelle", note:"Kerngeschäft ist Immobilien (Bestand + Entwicklung Süddeutschland).", sources:[{label:"WATZL Group / JW Investment Holding",url:"https://www.watzl-group.com/en/"}] },
    reInvestedEUR:0.38,
    usage:{ Buero:45, Retail:20, Wohnen:15, Logistik:10, Hotel:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Bayern (wirtschaftsstarke Städte ab 40.000 EW)", intensity:"hoch", usages:["Buero","Retail","Wohnen"], center:[48.3,11.5], radiusKm:120,
        basis:"quelle", note:"Ankaufsprofil: Bayern Schwerpunkt.", sources:[{label:"Ankaufsprofil JW Investment Holding",url:"https://jw-investmentholding.com/ankaufsprofil/"}] },
      { name:"Baden-Württemberg", intensity:"mittel", usages:["Buero","Retail"], center:[48.7,9.2], radiusKm:100,
        basis:"quelle", note:"Ankaufsprofil: BW als zweite Kernregion.", sources:[{label:"Ankaufsprofil JW Investment Holding",url:"https://jw-investmentholding.com/ankaufsprofil/"}] }
    ],
    about:["Eigentümergeführtes Immobilien-Family-Office der Familie Watzl (Jan Watzl), früher JW Investment Holding, heute WATZL Group.","Fokus auf nachhaltige Entwicklung hochwertiger Immobilien in Süddeutschland.","Repositionierung/Revitalisierung von Bestand sowie Quartiersentwicklung."],
    structure:{
      fo:"JW Investment Holding GmbH bzw. WATZL Group GmbH – eigentümergeführtes Family Office / Immobiliengruppe.",
      managers:["Jan Watzl"],
      decisions:"Ankäufe über die Holding, Asset Deals gemäß veröffentlichtem Ankaufsprofil.",
      contact:"Für Objektangebote direkt an die WATZL Group / JW Investment Holding (Ankaufsteam)."
    }
  },

  {
    id:"ritter_holding_muc",
    name:"RITTER Holding AG (Ritter Unternehmensgruppe)", kurz:"Ritter Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Mauerkircherstraße 8, 81679 München",
    hqLat:48.1520, hqLng:11.6060,
    website:"ritter-projekte.de", domain:"ritter-projekte.de",
    linkedin:"", contactName:"Hannes Ritter", contactRole:"Geschäftsführer / Vorstand", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Laut Eigendarstellung (ritter-projekte.de): Family Office mit über 30 Jahren Historie, kauft, entwickelt und verwaltet Immobilien in Berlin und München für langfristigen Bestand. Diverse Nutzungen von Gewerbe über Wohnen bis zu Spezialimmobilien; langfristig orientierter Investor mit Fokus auf wertbeständige, zukunftsfähige Nutzungskonzepte. Konkrete Ticketgrößen nicht öffentlich; Schwerpunkt Bestandshalten und Projektentwicklung in den Metropolen München und Berlin.",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; über 30 Jahre RE-Family-Office in München/Berlin, konkretes AUM nicht veröffentlicht.", sources:[] },
    reQuote:{ value:0.9, basis:"quelle", note:"Kerngeschäft ist Immobilien (Bestand + Entwicklung).", sources:[{label:"Ritter Unternehmensgruppe",url:"https://ritter-projekte.de/"}] },
    reInvestedEUR:0.36,
    usage:{ Buero:35, Wohnen:40, Retail:15, Sonstiges:10 },
    confirmedObjects:[
      { name:"Neue Spreespeicher (DGNB-Gold-zertifiziert)", address:"Schlesische Straße (an der Spree), 10997 Berlin-Kreuzberg", lat:52.4966, lng:13.4498,
        usage:"Buero", area:"n/a", purchaseDate:"", valueEUR:120, status:"Bestand/Entwicklung",
        images:[], connection:"Von der Ritter Unternehmensgruppe entwickeltes/gehaltenes Vorzeigeprojekt (Eigendarstellung ritter-projekte.de). Hausnr. nicht verifiziert, Verortung an Schlesische Str./Spree.",
        sources:[{label:"Ritter Unternehmensgruppe – Projekte",url:"https://ritter-projekte.de/"}] }
    ],
    heatmap:[
      { name:"München", intensity:"hoch", usages:["Wohnen","Buero"], center:[48.14,11.57], radiusKm:20,
        basis:"quelle", note:"Kernmarkt lt. Eigendarstellung (u.a. Wohnprojekt Flemingstraße, Bogenhausen – Hausnr. nicht verifiziert).", sources:[{label:"Ritter Unternehmensgruppe",url:"https://ritter-projekte.de/"}] },
      { name:"Berlin", intensity:"hoch", usages:["Buero","Wohnen"], center:[52.50,13.42], radiusKm:20,
        basis:"quelle", note:"Kernmarkt lt. Eigendarstellung (Neue Spreespeicher, Kreuzberg).", sources:[{label:"Ritter Unternehmensgruppe",url:"https://ritter-projekte.de/"}] }
    ],
    about:["Family Office der Familie Ritter (Ritter Unternehmensgruppe), über 30 Jahre in München ansässig.","Kauft, entwickelt und hält Immobilien in München und Berlin langfristig.","Nutzungen von Gewerbe über Wohnen bis Spezialimmobilien; nachhaltige, wertbeständige Konzepte (DGNB-Gold beim Neuen Spreespeicher)."],
    structure:{
      fo:"RITTER Holding AG / Ritter Unternehmensgruppe – Family Office mit Immobilienfokus.",
      managers:["Hannes Ritter"],
      decisions:"Ankauf/Entwicklung über die eigene Immobilienorganisation der Gruppe.",
      contact:"Objektangebote an die Ritter Unternehmensgruppe (München, Mauerkircherstraße 8)."
    }
  },

  {
    id:"asset_immobilien_owl",
    name:"Asset Immobilien GmbH & Co. KG (Asset Group)", kurz:"Asset Immobilien",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Bahnhofstraße 18, 33378 Rheda-Wiedenbrück",
    hqLat:51.8490, hqLng:8.3000,
    website:"asset-immo.de", domain:"asset-immo.de",
    linkedin:"", contactName:"Daniel Nottbrock", contactRole:"Geschäftsführer", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Laut Eigendarstellung (asset-immo.de) 2001 als Single Family Office in Rheda-Wiedenbrück gegründet; Fokus auf Verwaltung eines umfangreichen eigenen Immobilienportfolios sowie Handel mit Immobilien. Schwerpunktregion Ostwestfalen-Lippe (Rheda-Wiedenbrück, seit 2019 zweiter Standort Lemgo). Assetklassen: Grundstücke, Gebäude und Wohnungen (An- und Verkauf); zusätzlich Haus-/Grundstücksservice. Konkrete Ticketgrößen und Risikoklassen nicht öffentlich.",
    category:"gruen",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; SFO mit umfangreichem eigenem RE-Portfolio in OWL, kein öffentliches AUM.", sources:[] },
    reQuote:{ value:0.95, basis:"quelle", note:"Kerngeschäft ausschließlich Immobilien (Bestand + Handel).", sources:[{label:"Asset Immobilien – Über uns",url:"https://www.asset-immo.de/ueber-uns.html"}] },
    reInvestedEUR:0.19,
    usage:{ Wohnen:50, Buero:25, Retail:15, Sonstiges:10 },
    confirmedObjects:[
      { name:"Historisches Firmengebäude / Bürostandort Asset Group", address:"Bahnhofstraße 18, 33378 Rheda-Wiedenbrück", lat:51.8490, lng:8.3000,
        usage:"Buero", area:"n/a", purchaseDate:"2017", valueEUR:3, status:"Bestand",
        images:[], connection:"Eigenes, Ende 2017 bezogenes historisches Firmengebäude der Asset Group (Eigendarstellung asset-immo.de).",
        sources:[{label:"Asset Immobilien – Über uns",url:"https://www.asset-immo.de/ueber-uns.html"}] }
    ],
    heatmap:[
      { name:"Ostwestfalen-Lippe (Rheda-Wiedenbrück / Gütersloh)", intensity:"hoch", usages:["Wohnen","Buero","Retail"], center:[51.85,8.30], radiusKm:35,
        basis:"quelle", note:"Kernregion des eigenen Portfolios.", sources:[{label:"Asset Immobilien",url:"https://www.asset-immo.de/standort-rheda-wiedenbrueck.html"}] },
      { name:"Lemgo", intensity:"mittel", usages:["Wohnen"], center:[52.03,8.90], radiusKm:20,
        basis:"quelle", note:"Zweiter Standort seit 2019.", sources:[{label:"Asset Immobilien – Standort Lemgo",url:"https://www.asset-immo.de/standort-lemgo.html"}] }
    ],
    about:["2001 als Single Family Office in Rheda-Wiedenbrück gegründet (Asset Group).","Verwaltet ein umfangreiches eigenes Immobilienportfolio und betreibt Immobilienhandel.","Geführt von Daniel Nottbrock (seit 2017 zusätzlich Stefan Heimann)."],
    structure:{
      fo:"Asset Immobilien GmbH & Co. KG (Asset Group) – Single Family Office mit Immobilienportfolio.",
      managers:["Daniel Nottbrock","Stefan Heimann"],
      decisions:"An-/Verkauf über die Asset Group selbst (eigenes Portfolio + Handel).",
      contact:"Objektangebote an Asset Immobilien, Rheda-Wiedenbrück / Lemgo."
    }
  },

  {
    id:"dirk_cordes_ki",
    name:"Dirk Cordes Beteiligungsgesellschaft mbH (Single Family Office Cordes)", kurz:"Dirk Cordes",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Fraunhoferstraße 13, 24118 Kiel",
    hqLat:54.3390, hqLng:10.1180,
    website:"dirkcordes.de", domain:"dirkcordes.de",
    linkedin:"", contactName:"Dirk Cordes", contactRole:"Geschäftsführender Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Laut Eigendarstellung (dirkcordes.de) ist die Beteiligungsgesellschaft der Kern eines Single Family Office mit drei Bereichen: dc Beteiligungen (Unternehmensbeteiligungen, oft Minderheiten), dc Energie (Photovoltaik) und dc Immobilien. dc Immobilien verwaltet Bestandsimmobilien in Kiel und Umgebung und realisiert Projekte als Investor für das eigene Portfolio. Regionaler Fokus Kiel/Schleswig-Holstein; konkrete Ticketgrößen nicht öffentlich.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; regionales SFO mit drei Bereichen (Beteiligungen/Energie/Immobilien), kein öffentliches AUM.", sources:[] },
    reQuote:{ value:0.4, basis:"quelle", note:"Immobilien einer von drei Bereichen (eigenes Bestandsportfolio Kiel).", sources:[{label:"Dirk Cordes – Immobilien",url:"https://www.dirkcordes.de/immobilien/"}] },
    reInvestedEUR:0.04,
    usage:{ Wohnen:50, Buero:25, Retail:15, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Kiel und Umgebung", intensity:"mittel", usages:["Wohnen","Buero"], center:[54.32,10.13], radiusKm:25,
        basis:"quelle", note:"dc Immobilien: Bestand + eigene Projekte in Kiel und Umgebung. Keine Einzeladressen öffentlich belegt.", sources:[{label:"Dirk Cordes – Immobilien",url:"https://www.dirkcordes.de/immobilien/"}] }
    ],
    about:["Single Family Office von Dirk Cordes (Dipl.-Kfm. FH), Sitz Kiel, seit 2004.","Drei Bereiche: dc Beteiligungen (Unternehmen), dc Energie (Photovoltaik), dc Immobilien.","dc Immobilien hält und entwickelt eigenes Portfolio in Kiel und Umgebung."],
    structure:{
      fo:"Dirk Cordes Beteiligungsgesellschaft mbH – Kern des Single Family Office Cordes.",
      managers:["Dirk Cordes"],
      decisions:"Immobilien-Ankäufe über den Bereich dc Immobilien (eigenes Portfolio).",
      contact:"Objektangebote (Kiel/Umgebung) an dc Immobilien / Dirk Cordes Beteiligungsgesellschaft."
    }
  },

  {
    id:"jasika_holding_hh",
    name:"JASIKA Holding GmbH (Familienholding, HafenCity)", kurz:"JASIKA Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Kaiserkai 53, 20457 Hamburg",
    hqLat:53.5420, hqLng:9.9920,
    website:"jasika-holding.de", domain:"jasika-holding.de",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (kein veröffentlichtes Ankaufsprofil). Struktur deutet auf eine Immobilien-Familienholding mit Sitz in der Hamburger HafenCity: Untergesellschaften u.a. JASIKA Vermögensverwaltungsgesellschaft, JASIKA Projektentwicklungsgesellschaft, JASIKA Grundstücke, mehrere JASIKA Business-Center KGs sowie JASIKA Energy (Quelle: Handelsregister-/Branchenverzeichnisse). Schwerpunkt Gewerbe-/Büroimmobilien (Business-Center) im Raum Hamburg; Eigentümerfamilie nicht öffentlich verifiziert.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; Immobilien-Familienholding in der HafenCity mit mehreren Objektgesellschaften, kein öffentliches AUM; Eigentümerfamilie nicht verifiziert.", sources:[] },
    reQuote:{ value:0.8, basis:"extrapolation", note:"Reine Einschätzung; Holding hält überwiegend Immobilien (Business-Center, Grundstücke, Projektentwicklung).", sources:[] },
    reInvestedEUR:0.08,
    usage:{ Buero:60, Retail:20, Wohnen:10, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (HafenCity / Innenstadt)", intensity:"mittel", usages:["Buero","Retail"], center:[53.541,9.992], radiusKm:12,
        basis:"quelle", note:"Sitz und Objektgesellschaften in der HafenCity (Am Kaiserkai). Einzeleigentum an konkreten Gebäuden nicht öffentlich verifiziert.", sources:[{label:"JASIKA Holding – Branchenverzeichnis",url:"https://www.wer-zu-wem.de/firma/jasika.html"}] }
    ],
    about:["Familienholding mit Sitz in der Hamburger HafenCity (Am Kaiserkai 53).","Mehrere Objekt-/Untergesellschaften: Vermögensverwaltung, Projektentwicklung, Grundstücke, Business-Center, Energy.","Schwerpunkt Gewerbe-/Büroimmobilien im Raum Hamburg. Eigentümerfamilie öffentlich nicht eindeutig verifiziert."],
    structure:{
      fo:"JASIKA Holding GmbH – Dachgesellschaft einer Immobilien-Familienholding.",
      managers:[],
      decisions:"Ankauf/Entwicklung über die JASIKA-Objektgesellschaften (Projektentwicklung, Grundstücke).",
      contact:"Objektangebote an die JASIKA Holding / Projektentwicklungsgesellschaft, Hamburg."
    }
  },

  {
    id:"ras_holding_dus",
    name:"RAS Holding GmbH (Richard A. Schmitz)", kurz:"RAS Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Kaiser-Friedrich-Ring 14, 40545 Düsseldorf",
    hqLat:51.2340, hqLng:6.7500,
    website:"", domain:"",
    linkedin:"", contactName:"Richard Alexander Schmitz", contactRole:"Geschäftsführer / Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (kein veröffentlichtes Ankaufsprofil). Laut Handelsregister-/Presseinfos (northdata, companyhouse) 2013 gegründete private Holding von Richard Alexander Schmitz (aus der Familie des Luxus-Projektentwicklers Ralf Schmitz GmbH & Co. KGaA, Kempen/Düsseldorf/Hamburg/Berlin). Gegenstand u.a. Erwerb/Verwaltung von Vermögen und Beteiligungen sowie An-/Verkauf und Sanierung von Immobilien; Schmitz agiert zusätzlich als Angel-Investor im Immobilienbereich. Ticketgrößen/Regionen nicht öffentlich.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; private Holding eines Mitglieds der Ralf-Schmitz-Familie, kein öffentliches AUM.", sources:[] },
    reQuote:{ value:0.4, basis:"quelle", note:"Immobilien einer von mehreren Vermögensbereichen (plus Beteiligungen/Angel-Investments).", sources:[{label:"RAS Holding GmbH – northdata",url:"https://www.northdata.com/RAS%20Holding%20GmbH,%20D%C3%BCsseldorf/HRB%2088081"}] },
    reInvestedEUR:0.04,
    usage:{ Wohnen:60, Buero:20, Retail:10, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf / Rheinland", intensity:"mittel", usages:["Wohnen","Buero"], center:[51.23,6.77], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung; Sitz Düsseldorf, Familienbezug zu Ralf Schmitz (Kempen/Düsseldorf). Keine Einzeladressen belegt.", sources:[] }
    ],
    about:["Private Holding von Richard Alexander Schmitz (geb. 1981), gegründet 2013, Sitz Düsseldorf.","Richard A. Schmitz ist seit 2006 in der Geschäftsleitung des Familienunternehmens Ralf Schmitz GmbH & Co. KGaA (Luxus-Wohnimmobilien seit 1864).","RAS Holding: Vermögens-/Beteiligungsverwaltung sowie An-/Verkauf und Sanierung von Immobilien; zusätzlich Angel-Investments."],
    structure:{
      fo:"RAS Holding GmbH – privates Family Office / Beteiligungsholding von Richard A. Schmitz.",
      managers:["Richard Alexander Schmitz"],
      decisions:"Entscheidungen über die RAS Holding; operatives Wohnbau-Geschäft der Familie läuft separat über Ralf Schmitz GmbH & Co. KGaA.",
      contact:"Für private Investments/Beteiligungen: RAS Holding. Klassische Bauträger-Projekte laufen bei Ralf Schmitz GmbH & Co. KGaA (nicht dasselbe)."
    }
  },

  {
    id:"sbinvest_bringmann",
    name:"SBInvest GmbH (Familie Bringmann)", kurz:"SBInvest",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Neubruch 1, 82266 Inning am Ammersee",
    hqLat:48.0780, hqLng:11.1470,
    website:"sb-invest.com", domain:"sb-invest.com",
    linkedin:"", contactName:"Sebastian Bringmann", contactRole:"Geschäftsführer (Dipl.-Kfm.)", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (kein veröffentlichtes Objekt-Ankaufsprofil). Laut Eigendarstellung (sb-invest.com) ist SBInvest die 2007 gegründete, zu 100% im Besitz der Familie Bringmann stehende private Holding; überwiegend aktiv gemanagte Beteiligungen in den Bereichen Immobilien, Musikindustrie und Innovation. Immobilien somit einer von drei Schwerpunkten; konkrete Assetklassen/Ticketgrößen/Regionen nicht öffentlich.",
    category:"gelb",
    aum:{ value:0.15, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; private Familienholding (Bringmann) mit Beteiligungen in RE/Musik/Innovation, kein öffentliches AUM.", sources:[] },
    reQuote:{ value:0.35, basis:"quelle", note:"Immobilien einer von drei Schwerpunkten (neben Musikindustrie und Innovation).", sources:[{label:"SBInvest – Unternehmen",url:"https://sb-invest.com/unternehmen"}] },
    reInvestedEUR:0.05,
    usage:{ Wohnen:40, Buero:30, Retail:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Ammersee-Region (Oberbayern)", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.08,11.30], radiusKm:40,
        basis:"extrapolation", note:"Reine Einschätzung; Sitz Inning am Ammersee, Bezug Großraum München. Keine Einzeladressen belegt.", sources:[] }
    ],
    about:["Private Holding der Familie Bringmann, 2007 gegründet, Sitz Inning am Ammersee.","Zu 100% familiengehalten; überwiegend aktiv gemanagte Beteiligungen.","Schwerpunkte: Immobilien, Musikindustrie und Innovation; mindestens 5% des Gewinns für soziale/gemeinnützige Projekte."],
    structure:{
      fo:"SBInvest GmbH – Single Family Office / private Holding der Familie Bringmann.",
      managers:["Sebastian Bringmann"],
      decisions:"Beteiligungs- und Immobilienentscheidungen über die Holding.",
      contact:"Objekt-/Beteiligungsangebote an SBInvest GmbH, Inning am Ammersee."
    }
  },

  {
    id:"aventum_fo_stuttgart",
    name:"A/VENTUM family office AG (Familie Heller)", kurz:"A/VENTUM",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Rotebühlplatz 17, 70178 Stuttgart",
    hqLat:48.7720, hqLng:9.1700,
    website:"avfo.de", domain:"avfo.de",
    linkedin:"", contactName:"Oliver Heller", contactRole:"Vorstand / Gründer", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (kein Objekt-Ankaufsprofil). A/VENTUM ist ein Multi Family Office (family office Consulting AG) in Stuttgart mit Vorständen Oliver und Tobias Heller u.a.; betreut Privatvermögen und Institutionen. Immobilien werden über die konzerneigene A/VENTUM Real Estate Sales & Solutions GmbH & Co. KG (Immobiliendienstleister/Makler, ca. 15 MA) abgedeckt – primär Vermittlung/Beratung, kein öffentlich definiertes Eigen-Ankaufsprofil.",
    category:"gelb",
    aum:{ value:0.6, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; MFO allokiert Klientenvermögen, betreutes Volumen nicht öffentlich beziffert.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung; RE über konzerneigene Real-Estate-Dienstleistungstochter, kein RE-Eigenbestandskern.", sources:[] },
    reInvestedEUR:0.12,
    usage:{ Wohnen:50, Buero:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Stuttgart / Baden-Württemberg", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.77,9.18], radiusKm:40,
        basis:"quelle", note:"Sitz Stuttgart; RE-Tochter (A/VENTUM Real Estate) als Dienstleister/Makler in der Region.", sources:[{label:"A/VENTUM family office",url:"https://www.avfo.de/impressum/"}] }
    ],
    about:["Multi Family Office (Consulting AG) der Familie Heller, Sitz Stuttgart, gegründet 2015.","Betreut Privatvermögen und Institutionen; Vorstände u.a. Oliver und Tobias Heller.","Immobilienbereich über die konzerneigene A/VENTUM Real Estate Sales & Solutions (Makler/Dienstleister, ~15 MA)."],
    structure:{
      fo:"A/VENTUM family office (Consulting) AG – Multi Family Office.",
      managers:["Oliver Heller","Tobias Heller","Alwin Schmider","Carmen Straßer"],
      decisions:"Allokation für Klienten; Immobilien überwiegend über die RE-Dienstleistungstochter.",
      contact:"Objektangebote an A/VENTUM Real Estate Sales & Solutions (Stuttgart) – nicht an das reine Consulting-MFO."
    }
  },

  {
    id:"home_beteiligungen_schulervoith",
    name:"HOME Beteiligungen GmbH (Familie Schuler-Voith)", kurz:"HOME Beteiligungen",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Max-Joseph-Straße 7, 80333 München",
    hqLat:48.1430, hqLng:11.5730,
    website:"", domain:"",
    linkedin:"", contactName:"Robert Schuler-Voith", contactRole:"Geschäftsführer / Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar. Laut Handelsregister (northdata, HRB 129500) war die HOME Beteiligungen GmbH die Beteiligungsholding von Dr. Robert Schuler-Voith (Erwerb, Halten und Verwaltung von Beteiligungen). Sie wurde 2021 auf die MERCURA Holding GmbH (Vaduz, Liechtenstein) verschmolzen; das Family Office der Familie Schuler-Voith besteht demnach über MERCURA fort. Kein öffentlich definierter Immobilien-Ankaufsfokus.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung; Beteiligungsholding der Familie Schuler-Voith, 2021 auf Mercura Holding (Liechtenstein) verschmolzen; kein öffentliches AUM.", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung; reine Beteiligungsholding, kein belegter RE-Kern.", sources:[] },
    reInvestedEUR:0.015,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.14,11.57], radiusKm:15,
        basis:"extrapolation", note:"Reine Einschätzung; Sitz München. Kein belegter Immobilien-Eigenbestand; Entität 2021 auf Mercura Holding verschmolzen.", sources:[] }
    ],
    about:["Beteiligungsholding der Familie Schuler-Voith (Dr. Robert Schuler-Voith), Sitz München.","Gegenstand: Erwerb, Halten und Verwaltung von Unternehmensbeteiligungen.","2021 auf die MERCURA Holding GmbH (Vaduz, Liechtenstein) verschmolzen – Family Office besteht über Mercura fort."],
    structure:{
      fo:"HOME Beteiligungen GmbH – Beteiligungsholding/Family Office der Familie Schuler-Voith (heute unter MERCURA Holding, Liechtenstein).",
      managers:["Robert Schuler-Voith"],
      decisions:"Beteiligungsentscheidungen über die Holding bzw. heute MERCURA Holding.",
      contact:"Kontakt über die Familie Schuler-Voith / MERCURA Holding (München/Vaduz). Kein belegter RE-Ankauf."
    }
  }

]);
