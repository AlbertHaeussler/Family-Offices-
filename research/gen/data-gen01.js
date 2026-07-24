/* Worker 01 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"dahlke_dria",
    name:"Dahlke Family Office / DRIA GmbH (Familie Dahlke)", kurz:"Dahlke / DRIA",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Apfelstraße 82, 52525 Heinsberg",
    hqLat:51.0606, hqLng:6.0956,
    website:"dria.eu", domain:"dria.eu",
    linkedin:"", contactName:"Alexander Dahlke / Oliver Dahlke", contactRole:"Geschäftsführer / Gesellschafter", contactChannel:"über dria.eu (Kontakt/Ankaufsprofile)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Fokus auf Handelsimmobilien (Fachmarktzentren, Nahversorger/Supermärkte) und zunehmend Last-Mile-Logistik, bundesweit. Laut eigener Ankaufsprofil-Seite (dria.eu/ankaufsprofile) Gewerbeimmobilien u.a. im Raum Düsseldorf/NRW bis ca. 10 Mio € Ticket sowie größere Fachmarktzentren-Portfolios; investiert seit 2019 kontinuierlich als Asset Manager auch für internationale Family Offices (Lahav/Israel, Sunshine/Australien). Core bis Value-Add, Bestand mit Projektierung/Neuprojektierung (z.B. Supermarkt Heinsberg). Off-Market über Dahlke-Netzwerk. Quelle: dria.eu.",
    category:"gruen",
    aum:{ value:0.55, unit:"Mrd €", basis:"quelle", note:"Immobilienportfolio 'über eine halbe Milliarde Euro' (eigenes Dahlke-Portfolio ~250 Mio € + gemanagtes Volumen ~300 Mio € fuer auslaendische FOs).", sources:[{label:"Listenchampion – DRIA erwirbt Handelsimmobilie",url:"https://www.listenchampion.de/2021/11/15/immobilieninvestor-dahlke-real-estate-dria-erwirbt-handelsimmobilie/"},{label:"DRIA GmbH – Über uns",url:"https://www.dria.eu/ueber-uns/"}] },
    reQuote:{ value:0.9, basis:"quelle", note:"Reines Immobilien-Family-Office/Investmenthaus.", sources:[{label:"DRIA GmbH",url:"https://www.dria.eu/"}] },
    reInvestedEUR:0.5,
    usage:{ Retail:70, Logistik:20, Sonstiges:10 },
    confirmedObjects:[
      { name:"Fachmarktzentrum Altenkunstadt (ehem. Rewe)", address:"Weismainer Straße 70, 96264 Altenkunstadt", lat:50.1523, lng:11.1961,
        usage:"Retail", area:"~3.000 m²", purchaseDate:"2023", valueEUR:10, status:"Bestand",
        connection:"Erwerb durch Dahlke Family Holding (Dahlke Family Office).",
        images:[], sources:[{label:"DRIA – Dahlke Family Holding erwirbt FMZ in Altenkunstadt",url:"https://www.dria.eu/aktuelles/dahlke-family-holding-erwirbt-fmz-in-altenkunstadt/"}] },
      { name:"Last-Mile-Logistik Dresden-Friedrichstadt", address:"Bremer Straße 15, 01067 Dresden", lat:51.0632, lng:13.7115,
        usage:"Logistik", area:"n. v.", purchaseDate:"2023", valueEUR:12, status:"Bestand",
        connection:"Erwerb durch Familien Dahlke (Heinsberg) & Porth über gemeinsame Investmentgesellschaft, abgewickelt via DRIA.",
        images:[], sources:[{label:"DRIA – Dahlke & Porth erwerben Last-Mile-Logistik Dresden",url:"https://www.dria.eu/aktuelles/dahlke-porth-erwerben-last-mile-logistik-standort-in-dresden/"}] }
    ],
    heatmap:[
      { name:"Raum Düsseldorf / NRW", intensity:"hoch", usages:["Retail","Logistik"], center:[51.22,6.78], radiusKm:60,
        basis:"quelle", note:"Kern-Zielregion laut Ankaufsprofil.", sources:[{label:"DRIA Ankaufsprofile",url:"https://www.dria.eu/ankaufsprofile/"}] },
      { name:"Bundesweit (Fachmarktzentren)", intensity:"mittel", usages:["Retail"], center:[50.9,10.5], radiusKm:250,
        basis:"quelle", note:"Bundesweite Ankäufe (Bayern, NRW, Sachsen-Anhalt u.a.).", sources:[{label:"DRIA Aktuelles",url:"https://www.dria.eu/aktuelles/"}] }
    ]
  },

  {
    id:"harpen_knauf",
    name:"Family Office Dr. A. Knauf / Harpen Immobilien (Familie Knauf)", kurz:"Harpen (Knauf)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Flugplatz 21, 44319 Dortmund",
    hqLat:51.5225, hqLng:7.6067,
    website:"harpen.de", domain:"harpen.de",
    linkedin:"", contactName:"Robert M. Knauf", contactRole:"Geschäftsführer Harpen Immobilien", contactChannel:"über harpen.de (Kontakt)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Gewerbeimmobilien in den Segmenten Einzelhandel/Fachmarkt, Büro-/Geschäftshäuser und Logistik; Erweiterung des Bestands über Ankäufe und eigene Projektentwicklungen (auch für Dritte). Portfolio derzeit ca. 50 Gewerbeobjekte / ~320.000 m² Nutzfläche. Bestand mit Value-Add/Development-Anteil. Quelle: harpen.de / Regio Manager. Genaue Ticketgrößen nicht öffentlich.",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: ~50 Gewerbeobjekte / ~320.000 m² Nutzfläche; Wert nicht veröffentlicht. Harpen im Eigentum des Family Office Dr. A. Knauf (Familie Knauf).", sources:[] },
    reQuote:{ value:0.85, basis:"quelle", note:"Harpen = Immobilienarm des Knauf-Family-Office; Immobilien seit >30 Jahren Kerngeschäft.", sources:[{label:"Regio Manager – Harpen Immobilien",url:"https://www.regiomanager.de/unternehmen/harpen-immobilien-gmbh/"}] },
    reInvestedEUR:0.9,
    usage:{ Retail:40, Buero:35, Logistik:25 },
    confirmedObjects:[
      { name:"Bürogebäude Westfalentor", address:"Westfalendamm 11, 44141 Dortmund", lat:51.5020, lng:7.4930,
        usage:"Buero", area:"n. v.", purchaseDate:"2004", valueEUR:40, status:"Bestand",
        connection:"Objekt im von Harpen Immobilien (Knauf-Family-Office) gemanagten Bestand; Mieter u.a. EY.",
        images:[], sources:[{label:"Regio Manager – Harpen Immobilien",url:"https://www.regiomanager.de/unternehmen/harpen-immobilien-gmbh/"}] },
      { name:"Fachmarktzentrum Mörfelden-Walldorf", address:"Farmstraße, 64546 Mörfelden-Walldorf", lat:49.9880, lng:8.5800,
        usage:"Retail", area:"n. v.", purchaseDate:"2004", valueEUR:20, status:"Bestand",
        connection:"Fachmarktzentrum im Harpen-Portfolio; Mieter u.a. Takko, KiK.",
        images:[], sources:[{label:"Regio Manager – Harpen Immobilien",url:"https://www.regiomanager.de/unternehmen/harpen-immobilien-gmbh/"}] }
    ],
    heatmap:[
      { name:"Ruhrgebiet / NRW", intensity:"hoch", usages:["Buero","Retail","Logistik"], center:[51.51,7.46], radiusKm:60,
        basis:"quelle", note:"Sitz Dortmund, Schwerpunkt gewerbliche Bestände in NRW.", sources:[{label:"Harpen Immobilien",url:"https://www.harpen.de/start"}] },
      { name:"Rhein-Main (Hessen)", intensity:"mittel", usages:["Retail"], center:[49.99,8.58], radiusKm:40,
        basis:"quelle", note:"FMZ Mörfelden-Walldorf.", sources:[{label:"Regio Manager – Harpen Immobilien",url:"https://www.regiomanager.de/unternehmen/harpen-immobilien-gmbh/"}] }
    ]
  },

  {
    id:"groener_familyoffice",
    name:"Gröner Family Office GmbH (Familie Gröner)", kurz:"Gröner FO",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Binger Straße 40, 14197 Berlin",
    hqLat:52.4802, hqLng:13.3132,
    website:"groener-family.de", domain:"groener-family.de",
    linkedin:"", contactName:"Frank Gröner / Josephine Heigel", contactRole:"Geschäftsführung Family Office", contactChannel:"über groener-family.de (Kontakt)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 199343 B (Berlin)",
    ankaufsprofil:"Family Office verwaltet Immobilien, Gastronomie, Hotellerie und weitere Assets der Familie Gröner; Wohn- und Gewerbeimmobilien bundesweit über CG Real Estate / CG Property Management (Standorte Berlin, Leipzig, Karlsruhe). Christoph Gröner stammt aus großvolumiger Wohn-/Quartiersentwicklung. Konkretes Ankaufsprofil (Ticket/Regionen) nicht detailliert öffentlich; Fokus Wohnen + Hotel/Serviced Apartments. Quelle: groener-family.de.",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: Vermögen der Familie Gröner aus Immobilien/Quartiersentwicklung; keine öffentliche AUM-Zahl.", sources:[] },
    reQuote:{ value:0.7, basis:"quelle", note:"Kern des FO sind Immobilien plus Hotellerie/Gastronomie.", sources:[{label:"private-banking-magazin – Gröner Family Office",url:"https://www.private-banking-magazin.de/christoph-groener-verlaesst-das-family-office-frank-groener-kommt/"}] },
    reInvestedEUR:0.7,
    usage:{ Wohnen:50, Hotel:20, Buero:15, Gastro:10, Retail:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin", intensity:"hoch", usages:["Wohnen","Hotel","Buero"], center:[52.52,13.40], radiusKm:30,
        basis:"quelle", note:"HQ Berlin, CG-Management Berlin.", sources:[{label:"Groener Family Office",url:"https://groener-family.de/"}] },
      { name:"Leipzig", intensity:"mittel", usages:["Wohnen"], center:[51.34,12.37], radiusKm:25,
        basis:"quelle", note:"CG Property Management Standort Leipzig; historischer Gröner-Schwerpunkt.", sources:[{label:"Groener Family Office",url:"https://groener-family.de/"}] },
      { name:"Karlsruhe", intensity:"mittel", usages:["Wohnen"], center:[49.01,8.40], radiusKm:20,
        basis:"quelle", note:"CG-Standort Karlsruhe.", sources:[{label:"Groener Family Office",url:"https://groener-family.de/"}] }
    ]
  },

  {
    id:"digivest_stiefel",
    name:"Digivest GmbH (Familie Stiefel)", kurz:"Digivest (Stiefel)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Levelingstraße 1, 85049 Ingolstadt",
    hqLat:48.7605, hqLng:11.4210,
    website:"digivest.de", domain:"digivest.de",
    linkedin:"", contactName:"Christian & Michael Stiefel", contactRole:"Gesellschafter/Geschäftsführung", contactChannel:"über digivest.de (Kontakt)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 3319 / HRA 2225 (Ingolstadt)",
    ankaufsprofil:"Aufbau eines wertstabilen, nachhaltigen Immobilienportfolios über Wohn- und Gewerbeneubau (eigene Projektentwicklung) sowie strategische Ankäufe; bundesweit, aktuell ~49 Standorte. Schwerpunkt Wohnen und Gewerbe. Ticketgrößen/Off-Market nicht öffentlich spezifiziert. Quelle: digivest.de / Firmenprofile.",
    category:"gruen",
    aum:{ value:0.6, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: bundesweites Portfolio an ~49 Standorten (Wohn-/Gewerbe); kein veröffentlichter Wert. SFO der Familie von Media-Markt-Mitgründer Leopold Stiefel.", sources:[] },
    reQuote:{ value:0.85, basis:"quelle", note:"Digivest ist die Management-Gesellschaft für den bundesweiten Immobilienbestand des Stiefel-Family-Office.", sources:[{label:"Investorenguide – Digivest GmbH",url:"https://www.investorenguide.de/investor-finden/digivest-gmbh/"}] },
    reInvestedEUR:0.55,
    usage:{ Wohnen:55, Buero:25, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Ingolstadt / Oberbayern", intensity:"hoch", usages:["Wohnen","Buero"], center:[48.76,11.42], radiusKm:40,
        basis:"quelle", note:"HQ Ingolstadt; bundesweite Standorte, zusätzlich Wiesbaden & Berlin.", sources:[{label:"Digivest GmbH",url:"https://www.digivest.de/"}] },
      { name:"Bundesweit", intensity:"mittel", usages:["Wohnen","Retail"], center:[50.5,10.0], radiusKm:250,
        basis:"quelle", note:"~49 Standorte deutschlandweit.", sources:[{label:"Investorenguide – Digivest",url:"https://www.investorenguide.de/investor-finden/digivest-gmbh/"}] }
    ]
  },

  {
    id:"weidenhammer_hd",
    name:"Weidenhammer-Gruppe Heidelberg (Familie Weidenhammer)", kurz:"Weidenhammer-Gruppe",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Im Breitspiel 11, 69126 Heidelberg",
    hqLat:49.3760, hqLng:8.6790,
    website:"weidenhammer-gruppe-heidelberg.de", domain:"weidenhammer-gruppe-heidelberg.de",
    linkedin:"", contactName:"Ralf Weidenhammer", contactRole:"Geschäftsführer (CEO)", contactChannel:"über weidenhammer-gruppe-heidelberg.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Investorengemeinschaft der Familie Weidenhammer (nach Verkauf der Weidenhammer Packaging Group an Sonoco 2014); heutiger Fokus auf Ausbau der Bereiche Immobilien und Solar/Erneuerbare, in Deutschland und Europa. Konkrete Assetklassen/Ticketgrößen nicht öffentlich detailliert. Quelle: weidenhammer-gruppe-heidelberg.de. Sonst nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: Vermögen aus Verkauf der Verpackungsgruppe (2014, Sonoco); keine veröffentlichte AUM-Zahl.", sources:[] },
    reQuote:{ value:0.5, basis:"quelle", note:"Family Office fokussiert laut eigener Darstellung auf Immobilien und Solar.", sources:[{label:"Weidenhammer-Gruppe Heidelberg",url:"https://www.weidenhammer-gruppe-heidelberg.de/"}] },
    reInvestedEUR:0.15,
    usage:{ Wohnen:40, Buero:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Neckar / Heidelberg", intensity:"mittel", usages:["Wohnen","Buero"], center:[49.40,8.69], radiusKm:35,
        basis:"quelle", note:"Wurzeln und Sitz in der Metropolregion Rhein-Neckar.", sources:[{label:"Weidenhammer-Gruppe Heidelberg",url:"https://www.weidenhammer-gruppe-heidelberg.de/"}] }
    ]
  },

  {
    id:"valorata_asch",
    name:"Valorata GmbH (Familie Asch)", kurz:"Valorata (Asch)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Nelkenstraße 3, 72119 Ammerbuch",
    hqLat:48.5510, hqLng:8.9800,
    website:"valorata.de", domain:"valorata.de",
    linkedin:"", contactName:"Markus Jakob Asch / Anke Stefanie Asch", contactRole:"Geschäftsführung", contactChannel:"Postanschrift Stauffenbergstraße 10, 72074 Tübingen; über valorata.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 760662 (Stuttgart)",
    ankaufsprofil:"Family Office der Familie Asch zur Verwaltung eigenen Vermögens; realisiert laut Unternehmenszweck mit renommierten Architekten eigene Baumaßnahmen und vermietet die Objekte anschließend (Bestandsaufbau, Development für eigene Rechnung). Assetklassen/Ticketgrößen/Regionen nicht öffentlich detailliert. Quelle: Handelsregister/valorata.de. Weitgehend nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.05, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: kleines SFO (Stammkapital 275.000 €), keine öffentliche Vermögensangabe.", sources:[] },
    reQuote:{ value:0.6, basis:"extrapolation", note:"Reine Einschätzung: Unternehmenszweck umfasst Baumaßnahmen und Vermietung eigener Objekte.", sources:[] },
    reInvestedEUR:0.03,
    usage:{ Wohnen:50, Buero:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Region Tübingen / Ammerbuch", intensity:"niedrig", usages:["Wohnen","Buero"], center:[48.52,9.05], radiusKm:25,
        basis:"quelle", note:"Sitz Ammerbuch, Post Tübingen; regionaler Bestand.", sources:[{label:"Firmenprofil Valorata (HRB 760662)",url:"https://webvalid.de/company/VALORATA+GmbH,+Ammerbuch/HRB+760662"}] }
    ]
  },

  {
    id:"mamisch_fo",
    name:"Mamisch Family Office GmbH (Familie Mamisch)", kurz:"Mamisch FO",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Südliche Münchner Straße 66 C, 82031 Grünwald",
    hqLat:48.0420, hqLng:11.5240,
    website:"mamisch.de", domain:"mamisch.de",
    linkedin:"", contactName:"Stefan Frederking", contactRole:"Geschäftsführer", contactChannel:"über mamisch.de (Kontakt)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 176183 (München)",
    ankaufsprofil:"Holding mit Fokus auf Immobilienprojekte und Unternehmensbeteiligungen; realisiert Projekte in Märkten wie München, Augsburg, Köln und Düsseldorf. Verfügt über Erlaubnis als Immobilienmakler und Bauträger (auch Development). Konkrete Ticketgrößen/Ankaufskriterien nicht öffentlich detailliert. Quelle: mamisch.de / Handelsregister. Hinweis: grenzt an operativen Projektentwickler.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: kleine Family-Office-Holding (Stammkapital 50.500 €); Vermögen nicht öffentlich. Agiert teils als Bauträger/Makler.", sources:[] },
    reQuote:{ value:0.7, basis:"quelle", note:"Kerngeschäft laut Selbstdarstellung: Immobilienprojekte + Beteiligungen.", sources:[{label:"Mamisch Family Office – Über uns",url:"https://mamisch.de/unternehmen/"}] },
    reInvestedEUR:0.06,
    usage:{ Wohnen:50, Buero:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Oberbayern", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.14,11.57], radiusKm:35,
        basis:"quelle", note:"Sitz Grünwald, Projektmarkt München/Augsburg.", sources:[{label:"Mamisch Family Office",url:"https://mamisch.de/"}] },
      { name:"Rheinland (Köln/Düsseldorf)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[50.94,6.96], radiusKm:40,
        basis:"quelle", note:"Projektmärkte Köln & Düsseldorf.", sources:[{label:"Mamisch Family Office",url:"https://mamisch.de/unternehmen/"}] }
    ]
  },

  {
    id:"4lvision_suikat",
    name:"4L Vision GmbH (Ralph Suikat)", kurz:"4L Vision",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Lorenzstraße 29, 76135 Karlsruhe",
    hqLat:49.0010, hqLng:8.3790,
    website:"4l.vision", domain:"4l.vision",
    linkedin:"", contactName:"Dr. Johannes Knorz", contactRole:"Geschäftsführer Family Office (Prinzipal: Ralph Suikat)", contactChannel:"über 4l.vision",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office des Unternehmers Ralph Suikat, seit 2016 ausschließlich auf Impact Investing fokussiert (ökologische/soziale Projekte mit Rendite), Kern der '4L Impact Family' mit >20 Beteiligungen/Partnerunternehmen. Kein Immobilien-Kern erkennbar; Immobilienankäufe nicht öffentlich ausgewiesen. Quelle: 4l.vision. Immobilien-Ankaufsprofil: nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: SFO des Unternehmers Ralph Suikat; keine öffentliche AUM-Zahl.", sources:[] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung: Fokus Impact Investing / Beteiligungen, kein erkennbarer Immobilienkern.", sources:[] },
    reInvestedEUR:0.01,
    usage:{ Sonstiges:70, Wohnen:20, Buero:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Karlsruhe / Baden", intensity:"niedrig", usages:["Sonstiges"], center:[49.01,8.40], radiusKm:20,
        basis:"quelle", note:"Sitz Karlsruhe; Schwerpunkt Impact-Beteiligungen, kein Immobilienfokus.", sources:[{label:"4L Vision",url:"https://4l.vision/"}] }
    ]
  },

  {
    id:"ippen_valley",
    name:"Medizintechnik Beteiligungs-Verwaltungsgesellschaft Valley mbH (Familie Ippen)", kurz:"Ippen / Valley",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Medizinpark 1, 83626 Valley (Oberlaindern)",
    hqLat:47.8620, hqLng:11.7500,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Ippen (Dr. Dirk Ippen)", contactRole:"Gesellschafter", contactChannel:"nicht öffentlich",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Beteiligungs-/Verwaltungsvehikel aus dem Umfeld des Verlegers Dr. Dirk Ippen (Ippen-Gruppe, u.a. Zeitungen, Medizintechnik, Digital-Investments). Vermögensbasis aus Medien/Verlagen und Beteiligungen; Immobilien nur am Rande (z.B. 'Valley Immobilien'). Kein öffentliches Immobilien-Ankaufsprofil. Nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: Verlegerfamilie Ippen zählt zu den vermögendsten Deutschlands (fünftgrößte Zeitungsgruppe); keine öffentliche AUM-Zahl für dieses Vehikel.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung: Kern Medien/Beteiligungen, Immobilien nur nachrangig.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:40, Wohnen:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Oberbayern / München", intensity:"niedrig", usages:["Buero","Wohnen"], center:[47.99,11.60], radiusKm:40,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz Valley/Raum München; kein belegtes Immobilienportfolio öffentlich.", sources:[] }
    ]
  },

  {
    id:"goldschmidt_vvg",
    name:"Vermögensverwaltung Erben Dr. Karl Goldschmidt GmbH (Familie Goldschmidt)", kurz:"VVG Goldschmidt",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Moltkestraße 29, 45138 Essen",
    hqLat:51.4420, hqLng:7.0230,
    website:"vvgoldschmidt.com", domain:"vvgoldschmidt.com",
    linkedin:"", contactName:"Familie Goldschmidt", contactRole:"Gesellschafter", contactChannel:"über vvgoldschmidt.com (Impressum)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 13117 (Essen)",
    ankaufsprofil:"Finanzholding/Family Office der Familie Goldschmidt (seit 1936), verwaltet das Familienvermögen und hält Unternehmensbeteiligungen im In- und Ausland (u.a. 2011 Erwerb Powder Metal Group / Thermite-Sparte). Fokus auf industrielle/unternehmerische Beteiligungen, kein öffentlich ausgewiesener Immobilien-Ankauf. Immobilien-Ankaufsprofil: nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: eingetragenes Kapital ~38,6 Mio €, hält Beteiligungen (PMG u.a.); Gesamtvermögen nicht veröffentlicht.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung: Schwerpunkt Beteiligungen/Finanzholding, kein Immobilienkern erkennbar.", sources:[] },
    reInvestedEUR:0.03,
    usage:{ Buero:50, Sonstiges:50 },
    confirmedObjects:[],
    heatmap:[
      { name:"Essen / Ruhrgebiet", intensity:"niedrig", usages:["Buero"], center:[51.45,7.01], radiusKm:20,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz Essen; kein belegtes Immobilienportfolio öffentlich.", sources:[] }
    ]
  }

]);
