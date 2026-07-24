/* Worker 09 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"buchmann_ffm",
    name:"Josef Buchmann Immobilien (Vermögen Josef Buchmann)", kurz:"Buchmann",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Limescorso 8, 60439 Frankfurt am Main",
    hqLat:50.1742, hqLng:8.6357,
    website:"buchmann.com", domain:"buchmann.com",
    linkedin:"", contactName:"Dr. h.c. Josef Buchmann", contactRole:"Eigentümer", contactChannel:"office/Immobilienverwaltung im Nordwestzentrum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Bestandshalter von Gewerbe-/Handels- und Wohnimmobilien im Raum Frankfurt/Rhein-Main; Fokus großformatige Handels- (Einkaufszentren), Büro-/Hochhaus- und Kulturobjekte. Historisch stark im Neubau/Redevelopment (u.a. Shell-Hochhaus, Sanierung Nordwestzentrum). Konkretes öffentliches Ankaufsprofil/Ticketgröße nicht publiziert; Charakter langfristiger Bestandshalter mit Development-Historie (Quelle: buchmann.com, Wikipedia).",
    category:"gruen",
    aum:{ value:2.2, unit:"Mrd €", basis:"quelle", note:"Privatvermögen Josef Buchmann, überwiegend Immobilien; Portfolio >350.000 m² BGF.", sources:[{label:"Wikipedia — Josef Buchmann",url:"https://de.wikipedia.org/wiki/Josef_Buchmann"},{label:"Family Office Research — reichste Frankfurter",url:"https://www.familyofficeresearch.de/die-reichsten-frankfurter/"}] },
    reQuote:{ value:0.9, basis:"extrapolation", note:"Reine Einschätzung: Vermögen fast vollständig in Immobilien.", sources:[] },
    reInvestedEUR:2.0,
    usage:{ Retail:55, Buero:30, Sonstiges:15 },
    confirmedObjects:[
      { name:"Nordwestzentrum (Einkaufszentrum)", address:"Limescorso 8, 60439 Frankfurt am Main", lat:50.1742, lng:8.6357,
        usage:"Retail", area:"eines der größten Einkaufszentren Deutschlands", purchaseDate:"1990er (Erwerb & Sanierung)", valueEUR:800, status:"Bestand",
        connection:"In den 1990ern von Buchmann erworben und saniert; laut Wikipedia bis heute im Besitz; zugleich Firmensitz.",
        images:[], sources:[{label:"Wikipedia — Josef Buchmann",url:"https://de.wikipedia.org/wiki/Josef_Buchmann"}] },
      { name:"Naxoshalle (Kulturzentrum)", address:"Waldschmidtstraße 19, 60316 Frankfurt am Main", lat:50.1198, lng:8.7051,
        usage:"Sonstiges", area:"denkmalgeschützte ehem. Fabrikhalle", purchaseDate:"1988", valueEUR:40, status:"Bestand",
        connection:"1988 von Buchmann gekauft und an die Stadt Frankfurt (Kulturzentrum) vermietet.",
        images:[], sources:[{label:"Wikipedia — Josef Buchmann",url:"https://de.wikipedia.org/wiki/Josef_Buchmann"}] }
    ],
    heatmap:[
      { name:"Frankfurt / Rhein-Main", intensity:"hoch", usages:["Retail","Buero","Sonstiges"], center:[50.1109,8.6821], radiusKm:20,
        basis:"quelle", note:"Immobilienportfolio überwiegend in Frankfurt (Nordwestzentrum, Naxoshalle, Hochhäuser, Hotels).", sources:[{label:"Wikipedia — Josef Buchmann",url:"https://de.wikipedia.org/wiki/Josef_Buchmann"}] }
    ]
  },

  {
    id:"genio_ege_freiburg",
    name:"genio Beteiligungsgesellschaft mbH (Family Office Familie Ege)", kurz:"genio",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Robert-Bunsen-Str. 5, 79108 Freiburg im Breisgau",
    hqLat:48.0290, hqLng:7.8330,
    website:"genio.de", domain:"genio.de",
    linkedin:"", contactName:"Martin & Andreas Ege", contactRole:"Geschäftsführende Gesellschafter", contactChannel:"Ulrich Löffler (Bevollmächtigter)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Gewerbeimmobilien im südwestdeutschen Raum (Region Freiburg/Südbaden); Ankauf und Betrieb von Bestands-Gewerbeobjekten sowie Unternehmensbeteiligungen. Langfristiger Bestandshalter (Family-Office-Charakter). Ticketgrößen/Off-Market-Präferenz nicht öffentlich (Quelle: genio.de).",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: mittelständisches Unternehmer-Family-Office, keine AUM-Zahl publiziert.", sources:[] },
    reQuote:{ value:0.5, basis:"extrapolation", note:"Reine Einschätzung: zwei Segmente (Immobilien + Unternehmensbeteiligungen).", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Buero:40, Sonstiges:40, Logistik:20 },
    confirmedObjects:[
      { name:"Gewerbeobjekt Robert-Bunsen-Straße 5/5A", address:"Robert-Bunsen-Str. 5, 79108 Freiburg im Breisgau", lat:48.0290, lng:7.8330,
        usage:"Sonstiges", area:"Gewerbe-/Bürostandort im Industriegebiet", purchaseDate:"", valueEUR:20, status:"Bestand",
        connection:"Portfolio-Objekt von genio; Standort des Elektrogroßhändlers Alexander Bürkle sowie Sitz von genio (Quelle: genio.de/portfolio/freiburg).",
        images:[], sources:[{label:"genio Portfolio Freiburg",url:"http://www.genio.de/portfolio/freiburg"}] }
    ],
    heatmap:[
      { name:"Freiburg / Südbaden", intensity:"hoch", usages:["Buero","Sonstiges"], center:[48.0100,7.8500], radiusKm:30,
        basis:"quelle", note:"Ankauf/Betrieb von Gewerbeimmobilien im südwestdeutschen Raum.", sources:[{label:"genio.de",url:"https://genio.de/"}] }
    ]
  },

  {
    id:"sk_kiener_bb",
    name:"S.K. Management- und Beteiligungs GmbH (Family Office Familie Kiener)", kurz:"SK Gruppe",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Ludwig-Wilhelm-Str. 1, 76530 Baden-Baden",
    hqLat:48.7606, hqLng:8.2410,
    website:"sk-mb.de", domain:"sk-mb.de",
    linkedin:"", contactName:"Sigmund Kiener", contactRole:"Gründer/Eigentümer", contactChannel:"Geschäftsleitung SK Gruppe",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Diversifiziertes Single Family Office (2013) mit drei Segmenten: Unternehmensbeteiligungen, Immobilien und Finanzanlagen. Im RE-Segment Bestandshalter (u.a. die von der arvato-infoscore-Gruppe genutzten Gebäude in Baden-Baden). Öffentliches Ankaufsprofil/Ticketgröße nicht publiziert (Quelle: sk-mb.de, PERE).",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: Vermögen aus Verkauf infoscore/arvato-Umfeld; keine belastbare AUM-Zahl publiziert.", sources:[] },
    reQuote:{ value:0.35, basis:"extrapolation", note:"Reine Einschätzung: RE eines von drei diversifizierten Segmenten.", sources:[] },
    reInvestedEUR:0.35,
    usage:{ Buero:70, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Baden-Baden / Nordschwarzwald", intensity:"mittel", usages:["Buero"], center:[48.7606,8.2410], radiusKm:20,
        basis:"quelle", note:"Gebäude der arvato-infoscore-Gruppe in Baden-Baden verbleiben im Eigentum der SK Gruppe; exakte Objektadressen nicht verifiziert.", sources:[{label:"SK Gruppe — sk-mb.de",url:"https://www.sk-mb.de/skgruppe"}] }
    ]
  },

  {
    id:"ativo_meltl_chiemgau",
    name:"Ativo Beteiligungs GmbH & Co. KG (Family Office Familie Meltl)", kurz:"Ativo",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Gut Sossau 31, 83355 Grabenstätt",
    hqLat:47.8480, hqLng:12.5520,
    website:"ativo-beteiligungen.de", domain:"ativo-beteiligungen.de",
    linkedin:"", contactName:"Familie Josef & Dorothea Meltl", contactRole:"Gründer/Gesellschafter", contactChannel:"Geschäftsleitung Ativo",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Aktives Family Office aus dem Chiemgau; nachhaltige Investments in Industriebeteiligungen, erneuerbare Energien, Immobilien sowie Forst- und Landwirtschaft (u.a. Gut Sossau, Milchgut Bahnitz). RE ist ein Segment unter mehreren; konkretes Ankaufsprofil/Ticketgröße nicht öffentlich (Quelle: ativo-beteiligungen.de).",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: mittelständisches Family Office, keine AUM-Zahl publiziert.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung: RE nur eines von mehreren Segmenten (Beteiligungen, Energie, Agrar/Forst).", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Sonstiges:60, Logistik:20, Buero:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Chiemgau / Oberbayern", intensity:"mittel", usages:["Sonstiges"], center:[47.8480,12.5520], radiusKm:30,
        basis:"quelle", note:"Sitz und Agrar-/Immobilienbasis im Chiemgau (Gut Sossau); weitere Aktivitäten in Brandenburg/Sachsen-Anhalt (Milchgut Bahnitz).", sources:[{label:"Ativo Beteiligungen",url:"https://www.ativo-beteiligungen.de/ueber-ativo/"}] }
    ]
  },

  {
    id:"raffay_cie_berlin",
    name:"Raffay & Cie. GmbH (Family Office / Investmentholding)", kurz:"Raffay & Cie.",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Meinekestraße 5, 10719 Berlin",
    hqLat:52.5030, hqLng:13.3270,
    website:"raffay.com", domain:"raffay.com",
    linkedin:"", contactName:"Christian Wessel", contactRole:"Geschäftsführer", contactChannel:"Geschäftsführung (auch Annegret Schwindt)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Investmentholding/Family Office mit Schwerpunkt Early-Stage Venture Capital (Internet/Digital Media, u.a. RI Digital Ventures) und Immobilien. Konkretes RE-Ankaufsprofil (Assetklassen, Ticketgröße, Regionen) nicht öffentlich publiziert (Quelle: raffay.com, dataroomx Family-Office-Verzeichnis).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: keine AUM-Zahl publiziert; VC-lastige Investmentholding.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung: RE ein Fokus neben VC.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:50, Wohnen:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin", intensity:"mittel", usages:["Buero","Wohnen"], center:[52.5030,13.3270], radiusKm:20,
        basis:"quelle", note:"Sitz Berlin (Meinekestraße), Zweigstelle Hamburg; RE einer der Investmentschwerpunkte.", sources:[{label:"Raffay & Cie. — Impressum",url:"https://raffay.com/impressum.html"}] }
    ]
  },

  {
    id:"jahn_vv_essen",
    name:"Jahn Vermögensverwaltung GmbH (Familie Jahn)", kurz:"Jahn VV",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Adlerstraße 15, 45307 Essen",
    hqLat:51.4776, hqLng:7.1200,
    website:"jahn-vermoegensverwaltung.de", domain:"jahn-vermoegensverwaltung.de",
    linkedin:"", contactName:"Wolf-Dieter Jahn", contactRole:"Geschäftsführer", contactChannel:"info@jahnvv.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Familien-Vermögensverwaltung mit Fokus Immobilienverwaltung und eigene Projekte (Bau-/Finanzsektor, >35 Jahre); Logistik erwähnt. Bestandshalter/Entwickler eigener Objekte im Raum Essen/Ruhrgebiet. Konkretes Ankaufsprofil nicht öffentlich (Quelle: jahn-vermoegensverwaltung.de). Hausnr. Impressum bestätigt, Objektportfolio nicht öffentlich einsehbar.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: kleines regionales Familien-RE-Vehikel, keine Zahlen publiziert.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung: Kern ist Immobilien-/Projektverwaltung.", sources:[] },
    reInvestedEUR:0.07,
    usage:{ Buero:40, Logistik:30, Wohnen:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Essen / Ruhrgebiet", intensity:"mittel", usages:["Buero","Logistik"], center:[51.4776,7.1200], radiusKm:25,
        basis:"quelle", note:"Sitz Essen-Leithe; Verwaltung eigener Immobilien-/Projekte im Ruhrgebiet. Keine Einzeladressen öffentlich verifiziert.", sources:[{label:"Jahn Vermögensverwaltung",url:"https://jahn-vermoegensverwaltung.de/"}] }
    ]
  },

  {
    id:"fastrada_wuerselen",
    name:"FASTRADA Family Office GmbH", kurz:"FASTRADA",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Fastradaallee 1, 52146 Würselen",
    hqLat:50.8236, hqLng:6.1289,
    website:"fastrada.com", domain:"fastrada.com",
    linkedin:"", contactName:"Lars Hagedorn", contactRole:"Geschäftsführer", contactChannel:"office@fastrada.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (Single Family Office, 2014 gegründet, Verwaltung des Familienvermögens; kein öffentliches Immobilien-Ankaufsprofil auffindbar — Quelle: northdata/fastrada.com).",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: kleines SFO (2–10 MA), keine Zahlen publiziert.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung: RE-Anteil unbekannt, allgemeine Vermögensverwaltung.", sources:[] },
    reInvestedEUR:0.04,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Aachen / Würselen", intensity:"niedrig", usages:["Buero","Wohnen"], center:[50.8236,6.1289], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz im Raum Aachen; kein öffentliches Immobilienportfolio bekannt.", sources:[] }
    ]
  }

]);
