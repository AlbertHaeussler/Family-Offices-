/* Worker 14 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   Eingetragen: 7 Family Offices. Geskippt (operativ/Fondsmanager, kein FO):
   - Conren Land (Frankfurt): RE-Investment-/Fondsmanager für Dritte (Family Offices/Institutionelle) -> kein FO.
   - Krulich Immobilien (München): operatives RE-/Property-Management-Unternehmen (~15.000 WE, Dienstleister) -> operativ.
   - brandhochzwei (München): operativer RE-Projektentwickler + Architektur (Brüder Brand) -> operativ.
   - Tectaplan (München): operative Bau-/Grundbesitzentwicklungs-Firmengruppe (Bauträger) -> operativ.
   Hinweis: Keine deutschen Objekte mit exakter, verifizierbarer Adresse+Koordinaten belegbar -> confirmedObjects leer, Heatmap genutzt. */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"freiberger_amerang",
    name:"Freiberger Verwaltungs SE / Freiberger Holding (Family Office Ernst Freiberger)", kurz:"Freiberger",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Freibergerplatz 1, 83123 Amerang",
    hqLat:47.9869, hqLng:12.3106,
    website:"freiberger-holding.de", domain:"freiberger-holding.de",
    linkedin:"", contactName:"Ernst Freiberger", contactRole:"Gründer / Gesellschafter", contactChannel:"über Freiberger Holding SE, Amerang",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Kein öffentliches Ankaufsprofil. Diversifiziertes Single Family Office aus dem Verkauf der Freiberger Lebensmittelgruppe (Tiefkühl-Pizza) an Südzucker 1998; Kapital in Private Equity, Immobilien (eigene Immobilien-Sparte/TECTUM, u.a. Berliner Gewerbeobjekte), Infrastruktur, Healthcare (Medical Park Klinikgruppe) und Hotellerie (EfA). Für Immobilien: Bestandsorientierung, Gewerbe/Wohnen, primär Deutschland; konkrete Ticketgrößen/Regionen nicht öffentlich ermittelbar (Quellen: altss.com, Preqin-Profil, Northdata).",
    category:"gruen",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. Vermögen aus Verkauf der Freiberger-Lebensmittelgruppe an Südzucker (1998); breit diversifiziert (PE, Immobilien, Medical Park, Hotellerie). Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung — RE eine von mehreren Säulen (eigene Immobilien-Sparte/TECTUM, Berliner Gewerbeobjekte), Anteil nicht beziffert.", sources:[] },
    reInvestedEUR:0.4,
    usage:{ Buero:35, Wohnen:20, Retail:15, Hotel:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin (Gewerbeimmobilien)", intensity:"mittel", usages:["Buero","Retail"], center:[52.5200,13.4050], radiusKm:20,
        basis:"extrapolation", note:"Mehrere Berliner Gewerbeobjekte über die Freiberger-Immobiliensparte belegt (altss/Preqin), aber keine exakten Einzeladressen verifiziert.", sources:[{label:"altss.com Profil",url:"https://altss.com/profile/freiberger-verwaltungs"}] },
      { name:"Oberbayern / Amerang (Sitz)", intensity:"niedrig", usages:["Hotel","Sonstiges"], center:[47.9869,12.3106], radiusKm:40,
        basis:"extrapolation", note:"Sitz-Region; Medical Park (Kliniken) und Hotellerie regional verankert.", sources:[] }
    ]
  },

  {
    id:"southern_blue_holzkirchen",
    name:"Southern Blue Beteiligungsgesellschaft mbH (Family Office Dr. Schubert)", kurz:"Southern Blue",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Bergfeldstraße 5, 83607 Holzkirchen",
    hqLat:47.8846, hqLng:11.6942,
    website:"southern-blue.de", domain:"southern-blue.de",
    linkedin:"", contactName:"Dr. Hannspeter Schubert", contactRole:"Geschäftsführender Gesellschafter", contactChannel:"über southern-blue.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 110400 (AG München)",
    ankaufsprofil:"Laut Eigendarstellung (southern-blue.de) seit ~25 Jahren als Family Office in Unternehmensbeteiligungen UND Immobilien investiert; langfristiger, wertschaffender Horizont. Fokus auf zukunftsfähige mittelständische Unternehmen (Transaktion/Finanzierung/Restrukturierung). Konkrete Immobilien-Assetklassen, Ticketgrößen und Zielregionen nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. Eigentümergeführtes SFO/Beteiligungsholding, gegr. 2001 durch Dr. Hannspeter Schubert (Ex-Wirtschaftsprüfer). Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — Immobilien laut Website eine der zwei Anlageklassen (neben Unternehmensbeteiligungen); Anteil nicht beziffert.", sources:[] },
    reInvestedEUR:0.06,
    usage:{ Buero:40, Wohnen:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Oberbayern", intensity:"niedrig", usages:["Buero","Wohnen"], center:[47.8846,11.6942], radiusKm:40,
        basis:"extrapolation", note:"Sitz Holzkirchen (Landkreis Miesbach); Immobilieninvestments laut Website, aber ohne öffentliche Einzelobjekte/Adressen.", sources:[{label:"southern-blue.de",url:"https://www.southern-blue.de/"}] }
    ]
  },

  {
    id:"axtmann_holding",
    name:"Axtmann Holding GmbH (Family Office Axtmann)", kurz:"Axtmann",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Willy-Brandt-Platz 2, 12529 Schönefeld (Flughafen BER)",
    hqLat:52.3667, hqLng:13.5033,
    website:"", domain:"",
    linkedin:"", contactName:"Siegfried Axtmann", contactRole:"Gesellschafter (Gründer FAI Aviation Group)", contactChannel:"über Axtmann Holding GmbH, Schönefeld",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 13922 (AG Cottbus)",
    ankaufsprofil:"Kein öffentliches Ankaufsprofil. International tätige Beteiligungs-/Investmentholding der Familie Axtmann (Nürnberg) mit Schwerpunkt Aviation/Mobilität und Immobilien sowie direkten/indirekten Beteiligungen an ~18 Unternehmen im In- und Ausland; langfristiger Kapitalerhalt (Quellen: altss.com, Northdata, Firmenregister). Immobilien-Assetklassen, Ticketgrößen und Regionen nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. SFO der Familie Axtmann (Siegfried Axtmann, FAI Aviation Group); Fokus Aviation/Mobilität + Immobilien + Beteiligungen. Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — Immobilien laut Profil ein Investmentbereich neben Aviation/Beteiligungen; Anteil nicht beziffert.", sources:[] },
    reInvestedEUR:0.06,
    usage:{ Buero:40, Logistik:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin / Brandenburg (Sitz BER)", intensity:"niedrig", usages:["Buero","Logistik"], center:[52.3667,13.5033], radiusKm:30,
        basis:"extrapolation", note:"Sitz am Flughafen BER, Schönefeld; Immobilien laut Profil, aber keine öffentlichen Einzelobjekte/Adressen.", sources:[{label:"altss.com Profil",url:"https://altss.com/profile/axtmann"}] }
    ]
  },

  {
    id:"equity_seven_teute",
    name:"Equity Seven Beteiligungsgesellschaft mbH (Family Office Kai Teute)", kurz:"Equity Seven",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Stormsweg 5a, 22085 Hamburg",
    hqLat:53.5686, hqLng:10.0206,
    website:"equity-seven.de", domain:"equity-seven.de",
    linkedin:"", contactName:"Kai Teute", contactRole:"Gründer / Geschäftsführer", contactChannel:"über equity-seven.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 101285 (AG Hamburg)",
    ankaufsprofil:"Unternehmerholding/Family Office von Kai Teute (gegr. 2006), Hamburg; vier Geschäftsbereiche, u.a. Beteiligungen/Business-Angel-Investments (Frühphase), Retail (BK Retail/Mode). Kein öffentlich erkennbarer Immobilien-Ankaufsfokus; Immobilien-Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.15, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. Unternehmerholding/SFO Kai Teute (Equity Seven Unternehmensgruppe, gegr. 2006). Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — kein erkennbarer RE-Kern; Schwerpunkt Beteiligungen/Venture/Retail. Immobilienanteil unklar.", sources:[] },
    reInvestedEUR:0.015,
    usage:{ Buero:40, Retail:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg", intensity:"niedrig", usages:["Buero","Retail"], center:[53.5511,9.9937], radiusKm:20,
        basis:"extrapolation", note:"Sitz Hamburg; Unternehmerholding mit Beteiligungen/Retail, kein öffentliches Immobilienportfolio mit Adressen.", sources:[{label:"equity-seven.de",url:"https://www.equity-seven.de/ueber-uns"}] }
    ]
  },

  {
    id:"kjup_capital",
    name:"kjup Capital Family Office GmbH & Co. KG", kurz:"kjup Capital",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Alter Wall 12, 20457 Hamburg (Zielliste nannte PLZ 20459; laut Registern/Impressum 20457)",
    hqLat:53.5497, hqLng:9.9930,
    website:"kjup.com", domain:"kjup.com",
    linkedin:"", contactName:"kjup Capital (Geschäftsführung)", contactRole:"Single Family Office", contactChannel:"contact@kjup.com / +49 40 4503010",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 85224 (AG Hamburg); LEI 391200VBBR0FF0DHDC88",
    ankaufsprofil:"Single Family Office einer Hamburger Familie (>30 Jahre unternehmerische Asset-Allokation). Laut Eigendarstellung (kjup.com/BFGF): Direktinvestments in Small-/Mid-Cap-Unternehmen UND Immobilien in Deutschland sowie globale Investments in Private-Equity-Fonds und Private-Equity-Real-Estate-Fonds. Konkrete RE-Assetklassen/Ticketgrößen/Regionen für Direktankäufe nicht näher öffentlich beziffert.",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. SFO Hamburger Familie, >30 Jahre; Direktbeteiligungen + Immobilien DE + PE-/PE-RE-Fonds. Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — Immobilien (direkt DE + PE-Real-Estate-Fonds) klar als Anlageklasse belegt, aber Anteil nicht beziffert.", sources:[] },
    reInvestedEUR:0.15,
    usage:{ Buero:35, Wohnen:35, Retail:15, Logistik:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (Direktimmobilien, Sitz Hamburg)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[53.5497,9.9930], radiusKm:25,
        basis:"extrapolation", note:"Direktinvestments in Immobilien in Deutschland laut kjup.com/BFGF; keine öffentlichen Einzelobjekte/Adressen.", sources:[{label:"kjup.com",url:"https://www.kjup.com/"},{label:"BFGF Profil",url:"https://bfgf.de/en/kjup-capital/"}] }
    ]
  },

  {
    id:"k5_advisors_muenchen",
    name:"K5 Advisors GmbH & Co. KG (K5 Family Office)", kurz:"K5 Advisors",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Waltherstraße 23, 80337 München",
    hqLat:48.1289, hqLng:11.5686,
    website:"k5.ag", domain:"k5.ag",
    linkedin:"", contactName:"K5 Advisors (Geschäftsführung)", contactRole:"Single Family Office", contactChannel:"office@k5.ag / +49 89 12503953-0",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office in München (gegr. 2011). Laut Profilen (altss.com, Preqin) überwiegend Investments in Immobilien und alternative Anlageklassen; langfristiger Werterhalt/-zuwachs. Konkrete Immobilien-Ankaufskriterien (Assetklassen, Ticketgröße, Regionen, Core/Value-Add) nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. Kleines SFO (München, gegr. 2011, ~6 MA), RE-lastig. Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung — laut Profilen 'überwiegend Immobilien und alternative Anlageklassen'; genauer Anteil nicht beziffert.", sources:[] },
    reInvestedEUR:0.08,
    usage:{ Buero:40, Wohnen:40, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Süddeutschland", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.1351,11.5820], radiusKm:30,
        basis:"extrapolation", note:"Sitz München; RE-lastiges SFO, aber kein öffentliches Portfolio mit Einzeladressen.", sources:[{label:"altss.com Profil",url:"https://altss.com/profile/k5-advisors-gmbh-co-kg"}] }
    ]
  },

  {
    id:"ruddat_bremen",
    name:"Ruddat Family Office / Ruddat Grundbesitz (Familie Ruddat)", kurz:"Ruddat",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Obernstraße 39–43, 28195 Bremen",
    hqLat:53.0758, hqLng:8.8072,
    website:"rghb.de", domain:"rghb.de",
    linkedin:"", contactName:"Alexander Ruddat", contactRole:"Geschäftsführer", contactChannel:"über Ruddat Family Office GmbH / Ruddat Grundbesitz, Bremen",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 37431 HB (AG Bremen)",
    ankaufsprofil:"Familie Ruddat (Bremen) mit eigener Ruddat Family Office GmbH und Ruddat Grundbesitz GmbH & Co. KG (gleiche Adresse). Fokus laut Firmenprofilen: Ankauf, Entwicklung und Asset-Management von Einzelhandels-/Handelsimmobilien in deutschen Metropolregionen; zusätzlich Verwaltung bebauter/unbebauter Grundstücke und Immobilienbewertung. Ticketgrößen/Off-Market-Präferenz nicht öffentlich beziffert.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publizierter AUM. Familienvermögen im eigenen Family Office + Immobilien-Vehikel (Ruddat Grundbesitz, Retail-Immobilien). Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung — RE ist der Kern (Ankauf/Entwicklung/Asset-Management Handelsimmobilien); Anteil geschätzt.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Retail:70, Buero:15, Wohnen:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Bremen / Norddeutschland", intensity:"mittel", usages:["Retail"], center:[53.0758,8.8072], radiusKm:30,
        basis:"extrapolation", note:"Sitz Bremen; Schwerpunkt Handelsimmobilien in Metropolregionen, aber keine verifizierten Einzelobjekte/Adressen öffentlich.", sources:[{label:"Kompass Firmenprofil",url:"https://de.kompass.com/c/ruddat-grundbesitz-gmbh-co-kg/de918699/"}] },
      { name:"Deutsche Metropolregionen (Handelsimmobilien)", intensity:"niedrig", usages:["Retail"], center:[52.5200,13.4050], radiusKm:25,
        basis:"extrapolation", note:"Ankauf/Entwicklung Einzelhandelsimmobilien in Metropolregionen laut Profil; ohne konkrete Adressen.", sources:[] }
    ]
  }

]);
