/* Worker 02 — neue FOs aus 280er-Liste (slice-02). NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"av_holding_ackermans_voelkel",
    name:"A&V Holding GmbH & Co. KG (Familie Ackermans-Voelkel)", kurz:"A&V Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schorndorfer Str. 17, 47906 Kempen",
    hqLat:51.362, hqLng:6.437,
    website:"avholding.de", domain:"avholding.de",
    linkedin:"", contactName:"Markus Voelkel / Katrin Ackermans-Voelkel", contactRole:"Geschäftsführung", contactChannel:"über avholding.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Kein öffentliches Ankaufsprofil auffindbar. Das SFO gibt selbst an, u.a. in 'property, real estate and real estate project developments' zu investieren (Firmenprofil/Family-Office-Verzeichnis b2venture), Assetklassen, Ticketgröße, Regionen und Core/Value-Add jedoch nicht veröffentlicht. Praktisch: nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. SFO der Familie Ackermans-Voelkel; Vermögensursprung aus Allkauf-Gruppe (Gerhard Ackermans, Mitgründer mit Eugen Viehof; Verkauf-Erlöse). Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung. RE ist eine von mehreren Anlageklassen (Wertpapiere, Direktbeteiligungen, PE, Immobilien, RE-Projektentwicklung) laut Selbstbeschreibung; Quote geschätzt.", sources:[{label:"b2venture FO-Übersicht (A&V)",url:"https://resources.b2venture.vc/fundraising/alternative-financing-options/overview-of-family-offices-germany/"}] },
    reInvestedEUR:0.4,
    usage:{ Buero:30, Wohnen:25, Retail:20, Logistik:10, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Niederrhein / Kempen-Krefeld", intensity:"mittel", usages:["Buero","Wohnen","Retail"], center:[51.362,6.437], radiusKm:35,
        basis:"extrapolation", note:"Reine Einschätzung — SFO am Sitz Kempen; kein öffentliches Objektportfolio. Region als Heatmap, keine bestätigten Adressen.", sources:[] }
    ],
    about:["Single Family Office der Familie Ackermans-Voelkel, seit ~2012 in Kempen (Niederrhein).","Vermögensursprung: Allkauf-Gruppe (Gerhard Ackermans, gemeinsam mit Eugen Viehof aufgebaut).","Investiert in Wertpapiere, Direkt-/PE-Beteiligungen sowie Immobilien und RE-Projektentwicklung."],
    structure:{ fo:"A&V Holding GmbH & Co. KG (Amtsgericht Krefeld HRA 7304).", managers:["Markus Voelkel","Katrin Ackermans-Voelkel","Thomas Schröder"], decisions:"Geschäftsführung des SFO.", contact:"Direkt an die Geschäftsführung der A&V Holding, Kempen." }
  },

  {
    id:"defo_duesterberg_eissing",
    name:"Düsterberg-Eissing Family Office GmbH (Familie Eissing)", kurz:"DEFO",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Gerhard-Hoehme-Allee 2, 41466 Neuss",
    hqLat:51.185, hqLng:6.732,
    website:"de-fo.com", domain:"de-fo.com",
    linkedin:"", contactName:"Phillip Eissing", contactRole:"Geschäftsführer", contactChannel:"über de-fo.com/impressum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 19011 (Amtsgericht Neuss)",
    ankaufsprofil:"Nicht öffentlich ermittelbar. DEFO nennt als Kernbereiche Unternehmensbeteiligungen, Vermögensverwaltung und Immobilieninvestments (de-fo.com), veröffentlicht aber kein konkretes Ankaufsprofil (Assetklassen/Ticket/Region/Risikoklasse).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Single Family Office einer deutschen Unternehmerfamilie (HRB 19011, gegr. 2016); Stammkapital 25.000 €. Größenordnung geschätzt.", sources:[{label:"Northdata DEFO HRB 19011",url:"https://www.northdata.com/D%C3%BCsterberg-Eissing%20Family%20Office%20GmbH,%20Neuss/HRB%2019011"}] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung. RE ist eine von drei genannten Säulen (Beteiligungen, Vermögensverwaltung, Immobilien); Quote geschätzt.", sources:[{label:"DEFO Website",url:"https://www.de-fo.com/"}] },
    reInvestedEUR:0.07,
    usage:{ Buero:35, Wohnen:35, Retail:15, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rheinland / Neuss-Düsseldorf", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.185,6.732], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz Neuss; kein öffentliches Objektportfolio. Region als Heatmap, keine bestätigten Adressen.", sources:[] }
    ],
    about:["Single Family Office einer deutschen Unternehmerfamilie (Eissing), Sitz Neuss.","Kernbereiche laut Eigenangabe: Unternehmensbeteiligungen, Vermögensverwaltung, Immobilieninvestments.","Gegründet 2016 (HRB 19011 Neuss)."],
    structure:{ fo:"Düsterberg-Eissing Family Office GmbH (DEFO).", managers:["Phillip Eissing","Nina Gisela Ziemer"], decisions:"Geschäftsführung DEFO.", contact:"Über de-fo.com / Impressum an die Geschäftsführung." }
  },

  {
    id:"hartinger_rosenheim",
    name:"Hartinger Unternehmensgruppe (Immobilien-Family-Office, Familie Hartinger)", kurz:"Hartinger",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Prinzregentenstraße 24, 83022 Rosenheim",
    hqLat:47.857, hqLng:12.118,
    website:"hartinger-rosenheim.de", domain:"hartinger-rosenheim.de",
    linkedin:"", contactName:"Michael Hartinger", contactRole:"Inhaber/Geschäftsführung", contactChannel:"Immobilienankauf-Seite hartinger-rosenheim.de/immobilienankauf.html",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 6423 / HRB 10248 (Amtsgericht Traunstein)",
    ankaufsprofil:"Klar veröffentlicht (hartinger-rosenheim.de/immobilienankauf): Ankauf von Büro-/Gewerbeobjekten, Logistik sowie erschlossenen/geplanten Gewerbegrundstücken ab ca. 2.500 m²; Investitionsvolumen 5–20 Mio € pro Objekt; A-, B- und C-Lagen, Schwerpunkt Süddeutschland/Oberbayern; langfristiger Bestandshalter (kaufen, Wert erhalten, generationenübergreifend managen), auch Value-Add/Revitalisierung; auch Off-Market (jüngste Käufe von Privateigentümern, Kaufpreise vertraulich).",
    category:"gruen",
    aum:{ value:0.2, unit:"Mrd €", basis:"quelle", note:"Eigenangabe: verwaltetes Immobilienvermögen ca. 200 Mio €; ~100.000 m² vermietete Bestandsfläche + ~12.500 m² in Entwicklung, überwiegend Süddeutschland.", sources:[{label:"Hartinger Unternehmensprofil (Zitat via Suche)",url:"https://www.hartinger-rosenheim.de/unternehmensprofil.html"},{label:"IZ Profil Hartinger",url:"https://www.iz.de/profile/unternehmen/Hartinger%20Unternehmensgruppe/"}] },
    reQuote:{ value:0.95, basis:"quelle", note:"Reines Immobilien-Family-Office; nahezu gesamtes verwaltetes Vermögen in Gewerbeimmobilien.", sources:[{label:"Hartinger Immobilienankauf",url:"https://www.hartinger-rosenheim.de/immobilienankauf.html"}] },
    reInvestedEUR:0.2,
    usage:{ Buero:50, Logistik:25, Sonstiges:25 },
    confirmedObjects:[
      { name:"Bürogebäude (ehem. Biogen-HQ), Ismaning", address:"Carl-Zeiss-Ring 6, 85737 Ismaning", lat:48.2245, lng:11.6725,
        usage:"Buero", area:"~3.000 m²", purchaseDate:"2024", valueEUR:15, status:"Bestand",
        connection:"Von Hartinger Grundbesitz GmbH & Co. KG erworben (Rosenheimer Family Office); ehemaliger Biogen-Sitz, Bj. 1990.",
        images:[], sources:[{label:"IZ: Hartinger kauft Ex-Biogen-Immobilie Ismaning",url:"https://www.immobilien-zeitung.de/1000070958/hartinger-kauft-ex-biogen-immobilie-in-ismaning"},{label:"Objektseite Carl-Zeiss-Ring 6",url:"https://www.hartinger-rosenheim.de/immobilien/item/carl-zeiss-ring-6.html"}] },
      { name:"Gewerbeanwesen Euro-Industriepark, München-Milbertshofen", address:"Anton-Ditt-Bogen 16, 80807 München", lat:48.1935, lng:11.5745,
        usage:"Sonstiges", area:"~3.540 m² Mietfläche (Grundstück ~3.700 m²)", purchaseDate:"2024", valueEUR:12, status:"Bestand",
        connection:"Von Hartinger Grundbesitz GmbH & Co. KG erworben; vollvermietetes Lager-/Büroobjekt im Euro-Industriepark (Verkäufer Privateigentümer, Kaufpreis vertraulich).",
        images:[], sources:[{label:"deal-magazin: Hartinger kauft Gewerbeobjekt Euro-Industriepark",url:"http://www.deal-magazin.com/news/1/139657/Hartinger-kauft-Gewerbeobjekt-im-Euro-Industriepark-in-Muenchen"},{label:"Objektseite Anton-Ditt-Bogen 16",url:"https://www.hartinger-rosenheim.de/immobilien/item/gewerbeanwesen-im-euro-industriepark-in-milbertshofen.html"}] }
    ],
    heatmap:[
      { name:"Großraum München", intensity:"hoch", usages:["Buero","Logistik","Sonstiges"], center:[48.20,11.60], radiusKm:35,
        basis:"quelle", note:"Bestätigte Käufe in Ismaning und München-Milbertshofen; Ankaufsfokus Oberbayern.", sources:[{label:"Hartinger Immobilienankauf",url:"https://www.hartinger-rosenheim.de/immobilienankauf.html"}] },
      { name:"Oberbayern / Rosenheim", intensity:"mittel", usages:["Buero","Logistik"], center:[47.857,12.118], radiusKm:40,
        basis:"quelle", note:"Sitz Rosenheim; Ankaufsschwerpunkt Süddeutschland/Oberbayern, A-/B-/C-Lagen.", sources:[{label:"IZ Profil",url:"https://www.iz.de/profile/unternehmen/Hartinger%20Unternehmensgruppe/"}] }
    ],
    about:["Inhabergeführtes Immobilien-Family-Office aus Rosenheim, 3. Generation.","~200 Mio € Immobilienvermögen, ~100.000 m² Bestand, Schwerpunkt Gewerbe Süddeutschland.","Langfristiger Bestandshalter (Werterhalt statt Spekulation), aktiver Ankäufer 2024/25."],
    structure:{ fo:"Hartinger Unternehmensgruppe; Ankäufe über Hartinger Grundbesitz GmbH & Co. KG (Michael Hartinger Holding GmbH).", managers:["Michael Hartinger"], decisions:"Inhabergeführt, Ankäufe über Hartinger Grundbesitz.", contact:"Immobilienankauf-Seite / Michael Hartinger, Prinzregentenstr. 24, Rosenheim." }
  },

  {
    id:"mws_capital_moehren",
    name:"MWS Capital Holding GmbH (Familie Möhren)", kurz:"MWS Capital",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Zeppelinstraße 17, 53424 Remagen",
    hqLat:50.578, hqLng:7.232,
    website:"", domain:"",
    linkedin:"", contactName:"Sven Möhren / Walter Möhren", contactRole:"Geschäftsführer", contactChannel:"Handelsregister (HRB 21302 Koblenz)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 21302 (Amtsgericht Koblenz)",
    ankaufsprofil:"Nicht öffentlich ermittelbar. Gesellschaftszweck (Handelsregister): Verwaltung eigenen Vermögens, insbesondere Immobilien, sowie Halten von Beteiligungen (u.a. MBS CNC-Technologie & Engineering GmbH). Kein veröffentlichtes Ankaufsprofil.",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Familienholding Möhren (Walter & Sven Möhren); Beteiligungen in ~4 Gesellschaften inkl. CNC-Engineering. Größenordnung geschätzt.", sources:[{label:"Northdata MWS Capital HRB 21302",url:"https://www.northdata.com/MWS%20Capital%20Holding%20GmbH,%20Remagen/Amtsgericht%20Koblenz%20HRB%2021302"}] },
    reQuote:{ value:0.3, basis:"quelle", note:"Zweck laut HR-Eintrag: Verwaltung eigenen Vermögens, insbesondere Immobilien, plus Beteiligungen. Anteil geschätzt.", sources:[{label:"Online-Handelsregister MWS Capital",url:"https://www.online-handelsregister.de/handelsregisterauszug/rp/Koblenz/HRB/21302/MWS-Capital-Holding-GmbH"}] },
    reInvestedEUR:0.03,
    usage:{ Buero:30, Wohnen:40, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Mittelrhein / Remagen-Bonn", intensity:"niedrig", usages:["Wohnen","Buero"], center:[50.578,7.232], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz Remagen; eigenes Vermögen inkl. Immobilien laut HR, aber keine öffentlichen Adressen. Region als Heatmap.", sources:[] }
    ],
    about:["Familienholding Möhren (Walter & Sven Möhren), Sitz Remagen.","Verwaltet eigenes Vermögen (insbesondere Immobilien) und hält Unternehmensbeteiligungen (u.a. MBS CNC-Technologie & Engineering).","Kleines/mittleres Single Family Office, keine öffentliche RE-Portfolioseite."],
    structure:{ fo:"MWS Capital Holding GmbH (Komplementärin der MWS Capital Holding GmbH & Co. KG).", managers:["Sven Möhren","Walter Möhren"], decisions:"Geschäftsführung Möhren.", contact:"Über Handelsregister-/Firmensitz Remagen." }
  },

  {
    id:"wetzel_holding_wohltorf",
    name:"WETZEL Holding GmbH (Familie Wetzel)", kurz:"Wetzel Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Waldstraße 5, 21521 Wohltorf",
    hqLat:53.520, hqLng:10.283,
    website:"wetzel-holding.com", domain:"wetzel-holding.com",
    linkedin:"", contactName:"Wolfgang Wetzel", contactRole:"Geschäftsführung", contactChannel:"wetzel-holding.com/kontakt",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 19146 HL (Amtsgericht Lübeck)",
    ankaufsprofil:"Kein Immobilien-Ankaufsprofil. Die Familienholding investiert Mehrheitsbeteiligungen in mittelständische Unternehmen mit fokussierten Geschäftsmodellen in strukturell gesunden, wachsenden Branchen, langfristiger Horizont (wetzel-holding.com). Immobilien nicht als Assetklasse ausgewiesen → für RE-Zwecke: nicht öffentlich ermittelbar / kein RE-Kern.",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Familienholding, langfristige Mehrheitsbeteiligungen an Mittelständlern (z.B. TerraPellet, GASKAW). Größenordnung geschätzt.", sources:[{label:"Northdata WETZEL Holding HRB 19146 HL",url:"https://www.northdata.com/WETZEL%20Holding%20GmbH,%20Wohltorf/Amtsgericht%20L%C3%BCbeck%20HRB%2019146%20HL"}] },
    reQuote:{ value:0.05, basis:"quelle", note:"Kein RE-Kern — Fokus auf operative Unternehmensbeteiligungen (PE-artige Familienholding). Immobilien allenfalls betrieblich.", sources:[{label:"Wetzel Holding Über uns",url:"https://wetzel-holding.com/ueber-uns/"}] },
    reInvestedEUR:0.01,
    usage:{ Sonstiges:60, Buero:20, Logistik:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Metropolregion Hamburg", intensity:"niedrig", usages:["Sonstiges"], center:[53.520,10.283], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — Beteiligungsholding ohne eigenes RE-Portfolio; nur Sitzregion als Heatmap.", sources:[] }
    ],
    about:["Familienholding Wetzel, Sitz Wohltorf (östlich Hamburg).","Investiert Mehrheitsbeteiligungen in mittelständische Unternehmen (z.B. TerraPellet, GASKAW), langfristig.","Kein Immobilien-Schwerpunkt (PE-artiges Family Office)."],
    structure:{ fo:"WETZEL Holding GmbH (HRB 19146 HL Lübeck).", managers:["Wolfgang Wetzel"], decisions:"Geschäftsführung Wetzel.", contact:"wetzel-holding.com/kontakt — jedoch kaum RE-relevant." }
  },

  {
    id:"cinco_capital_hinrichs",
    name:"Cinco Capital GmbH (Lars Hinrichs)", kurz:"Cinco Capital",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Badestraße 2, 20148 Hamburg",
    hqLat:53.573, hqLng:9.988,
    website:"cinco.capital", domain:"cinco.capital",
    linkedin:"", contactName:"Lars Hinrichs", contactRole:"Gründer/Geschäftsführer", contactChannel:"über cinco.capital",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 84733 (Amtsgericht Hamburg)",
    ankaufsprofil:"Nicht öffentlich ermittelbar (kein Immobilien-Ankaufsprofil). Cinco Capital ist die Beteiligungs-/Investmentgesellschaft von Lars Hinrichs (XING-Gründer) mit Fokus auf Direktbeteiligungen an Tech-/Finanz-/Medienunternehmen (Europa/USA). Immobilien kein publizierter Anlageschwerpunkt.",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Persönliches Investmentvehikel von Lars Hinrichs (XING-Verkauf), Ein-Personen-Family-Office. Größenordnung geschätzt.", sources:[{label:"Wikipedia Lars Hinrichs",url:"https://en.wikipedia.org/wiki/Lars_Hinrichs"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Schwerpunkt VC/Tech-Beteiligungen; Immobilien kein Kerngeschäft, allenfalls opportunistisch/privat.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg", intensity:"niedrig", usages:["Buero","Wohnen"], center:[53.573,9.988], radiusKm:20,
        basis:"extrapolation", note:"Reine Einschätzung — VC-/Beteiligungs-Family-Office ohne öffentliches RE-Portfolio; nur Sitzregion.", sources:[] }
    ],
    about:["Investment-/Beteiligungsgesellschaft (Ein-Personen-Family-Office) von Lars Hinrichs, Gründer von XING.","Fokus Direktbeteiligungen an Technologie-, Finanz-, Telko- und Medienunternehmen (Europa/USA).","Immobilien kein publizierter Anlageschwerpunkt → für Makler kaum RE-relevant."],
    structure:{ fo:"Cinco Capital GmbH (HRB 84733 Hamburg).", managers:["Lars Hinrichs"], decisions:"Lars Hinrichs.", contact:"Über cinco.capital — jedoch kaum RE-Fokus." }
  },

  {
    id:"nbt_invest_schulze_ketelhut",
    name:"NBT Invest GmbH & Co. KG (Familie Schulze-Ketelhut)", kurz:"NBT Invest",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Sportallee 47, 22335 Hamburg",
    hqLat:53.632, hqLng:10.010,
    website:"nbt-invest.de", domain:"nbt-invest.de",
    linkedin:"", contactName:"Axel & Steffen Schulze-Ketelhut", contactRole:"Geschäftsführende Gesellschafter", contactChannel:"über nbt-invest.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 65050 (Amtsgericht Hamburg)",
    ankaufsprofil:"Wohnimmobilien-Bestandshalter mit Ankauf: Erwerb von Wohn-/Mehrfamilienhäusern (Bestandsobjekte mit laufenden Mietverhältnissen) sowie Grundstücken zur Wohnbebauung für eigene Rechnung; agiert auch als Globalinvestor bei Wohnbau-Entwicklungsprojekten (Forward Deals, z.B. Ankauf von BPD in Buchholz i.d. Nordheide / geförderter Wohnungsbau 'Charlottes Garten'). Schwerpunkt Hamburg/Umland, Bestand + selektiv Development. Ticket/Regionsdetails nicht veröffentlicht.",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Familie Schulze-Ketelhut verwaltet lt. Firmenzweck >1.000 eigene Wohnungen in Mehrfamilienhäusern; Portfoliowert geschätzt. In der Fachpresse als 'Hamburger Family Office' bezeichnet.", sources:[{label:"Companyhouse NBT Invest",url:"https://www.companyhouse.de/en/NBT-INVEST-GmbH-Co-KG-Hamburg"},{label:"BPD/deal-magazin: Verkauf an Family Office (Forward Deal Buchholz)",url:"http://www.deal-magazin.com/news/73414/Forward-Deal-BPD-verkauft-Wohnprojekt-in-Buchholz-an-Family-Office"}] },
    reQuote:{ value:0.9, basis:"quelle", note:"Wohnimmobilien-Family-Office; nahezu gesamtes Vermögen in Wohnbestand.", sources:[{label:"Companyhouse (Firmenzweck >1.000 Wohnungen)",url:"https://www.companyhouse.de/en/NBT-INVEST-GmbH-Co-KG-Hamburg"}] },
    reInvestedEUR:0.4,
    usage:{ Wohnen:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg & Umland (u.a. Buchholz i.d. Nordheide)", intensity:"hoch", usages:["Wohnen"], center:[53.55,10.00], radiusKm:40,
        basis:"quelle", note:"Wohnbestand >1.000 Einheiten; dokumentierter Forward-Deal-Ankauf in Buchholz i.d. Nordheide (bei Hamburg) von BPD. Exakte Objektadressen nicht öffentlich → Heatmap statt Pins.", sources:[{label:"deal-magazin: Forward Deal Buchholz an Family Office",url:"http://www.deal-magazin.com/news/73414/Forward-Deal-BPD-verkauft-Wohnprojekt-in-Buchholz-an-Family-Office"},{label:"BPD: Globalverkauf 'Charlottes Garten' an Family Office",url:"https://www.bpd-immobilienentwicklung.de/aktuelles/pressemeldungen/globalverkauf-an-family-office-verkauf-des-gefoerderten-wohnungsbaus-in-charlottes-garten"}] }
    ],
    about:["Wohnimmobilien-Family-Office der Familie Schulze-Ketelhut, Sitz Hamburg (Sportallee).","Verwaltet >1.000 eigene Wohnungen; kauft Bestands-Mehrfamilienhäuser und Wohnbau-Forward-Deals für eigene Rechnung.","In der Fachpresse als 'Hamburger Family Office' geführt (Ankäufe u.a. von BPD)."],
    structure:{ fo:"NBT Invest GmbH & Co. KG (HRA 65050 Hamburg).", managers:["Axel Schulze-Ketelhut","Steffen Schulze-Ketelhut","Dr. Jens-J. Schulze-Ketelhut"], decisions:"Familien-Geschäftsführung.", contact:"Über nbt-invest.de an die Geschäftsführung (Wohnankauf Hamburg/Umland)." }
  },

  {
    id:"vibro_viehof",
    name:"Vibro Vermögensverwaltungs- und Beteiligungs-GmbH (Familie Viehof)", kurz:"Vibro (Viehof)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Mozartstraße 19 (Villa Hecht), 41061 Mönchengladbach",
    hqLat:51.192, hqLng:6.428,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Viehof (Eugen jr., Michael, Bernd, Klaus Viehof)", contactRole:"Gesellschafter", contactChannel:"über Firmensitz Villa Hecht, Mönchengladbach",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 5728 (Amtsgericht Mönchengladbach)",
    ankaufsprofil:"Nicht öffentlich ermittelbar (kein publiziertes Ankaufsprofil). Vibro ist die Beteiligungsholding der Viehof-Brüder (Allkauf-Verkauf an Metro). RE-Aktivität dokumentiert (u.a. Entwicklung City-Center/Markt Rheydt über Otten Objekt Rheydt KG); Assetklassen-/Ticket-Details nicht veröffentlicht. Schwerpunktregion Niederrhein/Mönchengladbach.",
    category:"gruen",
    aum:{ value:2.4, unit:"Mrd €", basis:"quelle", note:"Erlös aus Verkauf der Allkauf-Kette an Metro (~2,4 Mrd €), von Eugen Viehof in die Beteiligungsgesellschaft eingebracht. Heutiges Gesamtvermögen breit diversifiziert (Beteiligungen, Wertpapiere, Immobilien).", sources:[{label:"Firmenchronik Familie Viehof/Vibro",url:"https://firmenchronik.de/referenzen/biographien/familie-viehof-firma-vibro/"},{label:"Northdata Vibro HRB 5728",url:"https://www.northdata.com/Vibro%20Verm%C3%B6gensverwaltungs-%20und%20Beteiligungs-GmbH,%20M%C3%B6nchengladbach/Amtsgericht%20Moenchengladbach%20HRB%205728"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — diversifizierte Holding; Immobilien (u.a. Einzelhandels-/Center-Entwicklung Rheydt) sind ein Teilsegment. Quote geschätzt.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Retail:45, Buero:25, Wohnen:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Mönchengladbach / Niederrhein", intensity:"hoch", usages:["Retail","Buero"], center:[51.192,6.428], radiusKm:25,
        basis:"quelle", note:"Vibro entwickelte über Otten Objekt Rheydt KG das City-/Markt-Center in Mönchengladbach-Rheydt; Sitz Villa Hecht MG. Konkrete aktuelle Eigentumsobjekte/Adressen nicht sicher belegt → Heatmap statt Pins.", sources:[{label:"de-academic: Vibro-Beteiligungsgesellschaft (Rheydt-Center)",url:"https://de-academic.com/dic.nsf/dewiki/1461981"}] }
    ],
    about:["Beteiligungsholding der Viehof-Brüder (Vibro = 'Viehof-Brothers'), Sitz Villa Hecht, Mönchengladbach.","Vermögensursprung: Verkauf der Allkauf-Kette an Metro (~2,4 Mrd €).","Breit diversifiziert; Immobilien u.a. Einzelhandels-/Center-Entwicklung in Rheydt."],
    structure:{ fo:"Vibro Vermögensverwaltungs- und Beteiligungs-GmbH (Komplementärin u.a. der VVV Viehof KG).", managers:["Familie Viehof (Eugen jr., Michael, Bernd, Klaus)"], decisions:"Familien-/Gesellschaftergremium Viehof.", contact:"Über Firmensitz Villa Hecht, Mönchengladbach." }
  },

  {
    id:"dquadrat_wolff_mueller",
    name:"Dquadrat Equity Partner GmbH (Family Office der Gesellschafter Wolff & Müller)", kurz:"Dquadrat",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Martin-Luther-Str. 57, 71636 Ludwigsburg",
    hqLat:48.895, hqLng:9.195,
    website:"dquadrat.de", domain:"dquadrat.de",
    linkedin:"", contactName:"Gesellschafterfamilie Wolff", contactRole:"Family Office / Shareholder Office", contactChannel:"über dquadrat.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 210267 (Amtsgericht Stuttgart)",
    ankaufsprofil:"Kein Immobilien-Ankaufsprofil. Dquadrat ist das Family Office der Gesellschafter von WOLFF & MÜLLER; investiert eigene Mittel bevorzugt in Direkt-Eigenkapitalbeteiligungen an High-Tech-Unternehmen in der Wachstumsphase (1–25 % Anteil) und betreut das Shareholder-Office der Familie. Immobilien nicht als Assetklasse ausgewiesen → für RE: nicht öffentlich ermittelbar / kein RE-Kern.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Family Office der Gesellschafterfamilie hinter dem Bauunternehmen WOLFF & MÜLLER; Stammkapital 500.000 €. Größenordnung geschätzt.", sources:[{label:"Northdata Dquadrat HRB 210267",url:"https://www.northdata.com/Dquadrat%20Equity%20Partner%20GmbH,%20Stuttgart/HRB%20210267"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Fokus High-Tech-Direktbeteiligungen; Immobilien kein Kern des FO (das operative Baugeschäft W&M ist separat und nicht Teil dieses FO-Eintrags).", sources:[] },
    reInvestedEUR:0.03,
    usage:{ Buero:50, Sonstiges:30, Wohnen:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Region Stuttgart / Ludwigsburg", intensity:"niedrig", usages:["Buero"], center:[48.895,9.195], radiusKm:25,
        basis:"extrapolation", note:"Reine Einschätzung — VC-/Beteiligungs-FO ohne öffentliches RE-Portfolio; nur Sitzregion.", sources:[] }
    ],
    about:["Family Office / Shareholder Office der Gesellschafter des Bauunternehmens WOLFF & MÜLLER, Sitz Ludwigsburg.","Investiert eigene Mittel v.a. in High-Tech-Direktbeteiligungen (Wachstumsphase).","Immobilien kein publizierter Anlageschwerpunkt des FO."],
    structure:{ fo:"Dquadrat Equity Partner GmbH (HRB 210267 Stuttgart).", managers:["Family Office / Shareholder Office der Familie Wolff"], decisions:"FO-Geschäftsführung; berät zudem die Gruppe bei Transaktionen.", contact:"Über dquadrat.de — jedoch kaum RE-relevant." }
  },

  {
    id:"martini_augsburg",
    name:"Martini GmbH & Co. KG (Familie Martini — Immobilien/Forst/Energie)", kurz:"Martini Augsburg",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Provinostraße 52, 86153 Augsburg",
    hqLat:48.354, hqLng:10.917,
    website:"martini-augsburg.de", domain:"martini-augsburg.de",
    linkedin:"", contactName:"Familie Martini", contactRole:"Geschäftsführung", contactChannel:"martini-augsburg.de/kontakt",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Kein aktives Ankaufsprofil veröffentlicht. Martini ist eine familiengeführte Bestands-/Beteiligungsholding mit den Feldern Immobilien, Forst und Energie (erneuerbar); Immobilienschwerpunkt ist die Entwicklung/Vermietung eigener Gewerbe- und Wohnflächen in Augsburg (v.a. Martinipark). Fokus Bestandshalten & Revitalisierung eigener Objekte, kein breiter externer Ankauf erkennbar → Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Familienholding (seit 1832, ehem. Textil), heute Immobilien/Forst/Energie; Kernwert ist der ~20 ha große Martinipark. Größenordnung geschätzt.", sources:[{label:"AugsburgWiki Martini GmbH & Co. KG",url:"https://www.augsburgwiki.de/index.php/AugsburgWiki/MartiniGmbHUndCoKG"}] },
    reQuote:{ value:0.6, basis:"extrapolation", note:"Reine Einschätzung — Immobilien (Martinipark) sind neben Forst/Energie ein Hauptsegment. Quote geschätzt.", sources:[{label:"AugsburgWiki Martinipark",url:"https://www.augsburgwiki.de/index.php/AugsburgWiki/Martinipark"}] },
    reInvestedEUR:0.18,
    usage:{ Buero:45, Logistik:25, Sonstiges:20, Retail:10 },
    confirmedObjects:[
      { name:"Martinipark (Gewerbe-/Bürocampus, ehem. Textilfabrik)", address:"Provinostraße 52, 86153 Augsburg", lat:48.354, lng:10.917,
        usage:"Buero", area:"Areal ~20 ha, ~105 Firmen", purchaseDate:"seit 1996 (Eigenbestand)", valueEUR:120, status:"Bestand",
        connection:"Eigentum/Entwicklung der Martini GmbH & Co. KG am historischen Firmenstammsitz (ehem. Bleicherei/Färberei Martini & Cie.); Umbau zum Gewerbepark seit 1996. Wert geschätzt.",
        images:[], sources:[{label:"AugsburgWiki Martinipark",url:"https://www.augsburgwiki.de/index.php/AugsburgWiki/Martinipark"},{label:"Martini-Augsburg (Betreiber)",url:"https://martini-augsburg.de/martinipark"}] }
    ],
    heatmap:[
      { name:"Augsburg (Textilviertel)", intensity:"hoch", usages:["Buero","Logistik","Sonstiges"], center:[48.354,10.917], radiusKm:15,
        basis:"quelle", note:"Kern ist der Martinipark im Augsburger Textilviertel (Büro-Lofts, Logistik, Produktion, ~105 Mieter).", sources:[{label:"AugsburgWiki Martinipark",url:"https://www.augsburgwiki.de/index.php/AugsburgWiki/Martinipark"}] }
    ],
    about:["Familienholding Martini (seit 1832 in Augsburg, ehemals Textil), heute Immobilien, Forst und erneuerbare Energie.","Immobilien-Kern: Martinipark – ~20 ha Gewerbe-/Bürocampus im Textilviertel mit ~105 Mietern.","Bestandshalter der eigenen Familienimmobilien; entwickelt/vermietet Gewerbe- und Wohnflächen in Augsburg."],
    structure:{ fo:"Martini GmbH & Co. KG (familiengeführte Holding Immobilien/Forst/Energie).", managers:["Familie Martini (Geschäftsführung)"], decisions:"Familien-Geschäftsführung; RE über die Martini-Immobiliensparte.", contact:"martini-augsburg.de/kontakt (Vermietung/Entwicklung Martinipark)." }
  },

  {
    id:"wessel_management_dienst",
    name:"Wessel Management GmbH (Family Office Rolf Christof Dienst)", kurz:"Wessel Management",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Leopoldstraße 9, 80802 München",
    hqLat:48.158, hqLng:11.585,
    website:"wesselmanagement.de", domain:"wesselmanagement.de",
    linkedin:"", contactName:"Rolf Christof Dienst", contactRole:"Gründer/Managing Partner", contactChannel:"über wesselmanagement.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Kein Immobilien-Ankaufsprofil. Wessel Management ist das Family Office der Familie Rolf Christof Dienst (VC-Pionier); Schwerpunkt Venture-Capital-/Wachstumsbeteiligungen an Technologieunternehmen (1–25 % Anteil, mit Co-Investoren). RE nur als Nebensegment genannt; kein publiziertes Ankaufsprofil → nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentliches AUM. Family Office von Rolf Christof Dienst (VC-Pionier, Mitgründer Matuschka/TVM); ~35 Portfolio-Investments, Team von ~6. Größenordnung geschätzt.", sources:[{label:"Wessel Management Website",url:"https://wesselmanagement.de/"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Fokus Venture Capital; Immobilien nur als Nebeninvestment der Familie genannt.", sources:[] },
    reInvestedEUR:0.03,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.158,11.585], radiusKm:20,
        basis:"extrapolation", note:"Reine Einschätzung — VC-Family-Office ohne öffentliches RE-Portfolio; nur Sitzregion.", sources:[] }
    ],
    about:["Family Office der Familie Rolf Christof Dienst, Sitz München (Leopoldstraße).","Rolf Dienst ist deutscher Venture-Capital-Pionier (Mitgründer TVM/Matuschka-Gruppe, Wellington-Umfeld).","Schwerpunkt VC-/Wachstumsbeteiligungen an Tech-Unternehmen; Immobilien nur Nebensegment."],
    structure:{ fo:"Wessel Management GmbH.", managers:["Rolf Christof Dienst (Managing Partner)","~6-köpfiges Team"], decisions:"Rolf Dienst / Wessel-Team.", contact:"Über wesselmanagement.de — jedoch VC-Fokus, kaum RE." }
  }

]);
