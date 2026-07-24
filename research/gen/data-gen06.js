/* Worker 06 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"wittelsbacher_waf",
    name:"Wittelsbacher Ausgleichsfonds (Haus Wittelsbach)", kurz:"Wittelsbacher Ausgleichsfonds",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schumannstraße 10, 81635 München",
    hqLat:48.1420, hqLng:11.6080,
    website:"waf-bayern.de", domain:"waf-bayern.de",
    linkedin:"", contactName:"", contactRole:"Immobilienverwaltung / Vermögensverwaltung", contactChannel:"waf-bayern.de/immobilien",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Bestandshaltendes Familien-/Fondsvermögen des Hauses Wittelsbach. Schwerpunkt: Wohn- und Geschäftshäuser (Mietshäuser) in und um München, dazu land- und forstwirtschaftliche Flächen (~13.000 ha) sowie Schlösser/Kunst. Verkaufserlöse werden laut Fonds in Münchner Mietshäuser reinvestiert (Quelle: waf-bayern.de/immobilien, Wikipedia). Kein öffentlich publiziertes Ankaufsprofil mit Ticketgrößen; Kern ist langfristiger Bestand, kein Development für Dritte. Off-Market-Präferenz anzunehmen. Details nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:3.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Fonds veröffentlicht keine Vermögensbilanz. Umfang aus Grundbesitz (~13.000 ha), Münchner Immobilien, Beteiligungen und Kunstsammlungen abgeleitet.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung — erheblicher Teil des ertragbringenden Vermögens in Immobilien (v.a. München) und Grund, daneben Land-/Forstwirtschaft, Beteiligungen und Kunst.", sources:[] },
    reInvestedEUR:1.2,
    usage:{ Wohnen:55, Buero:15, Retail:15, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"München (Mietshäuser)", intensity:"hoch", usages:["Wohnen","Retail"], center:[48.137,11.575], radiusKm:15,
        basis:"quelle", note:"Fonds hält/verwaltet Wohn- und Geschäftshäuser in und um München; keine Einzeladressen öffentlich verifiziert.", sources:[{label:"WAF Immobilien",url:"https://www.waf-bayern.de/immobilien/"},{label:"Wikipedia WAF",url:"https://de.wikipedia.org/wiki/Wittelsbacher_Ausgleichsfonds"}] },
      { name:"Bayern (Grund/Forst, Schlösser)", intensity:"mittel", usages:["Sonstiges"], center:[47.9,11.2], radiusKm:120,
        basis:"quelle", note:"~13.000 ha Land-/Forstflächen sowie Schlösser (Berg, Hohenschwangau, Berchtesgaden) — nicht als handelbare Investmentobjekte gemappt.", sources:[{label:"Historisches Lexikon Bayerns",url:"https://www.historisches-lexikon-bayerns.de/Lexikon/Wittelsbacher_Ausgleichsfonds"}] }
    ],
    about:["Öffentlich-rechtlicher Fonds (gegr. 1923) zur Versorgung des ehemaligen bayerischen Königshauses Wittelsbach.","Verwaltet das private Familienvermögen: Immobilien (v.a. München), Land-/Forstwirtschaft, Beteiligungen, Kunst.","Bestandshalter, kein Projektentwickler für Dritte."],
    structure:{ fo:"Stiftung des öffentlichen Rechts / Fondsvermögen des Hauses Wittelsbach.", managers:["eigene Immobilienverwaltung des Fonds"], decisions:"Fondsverwaltung / Gremien des WAF.", contact:"Immobilienabteilung des Wittelsbacher Ausgleichsfonds, München." }
  },

  {
    id:"prs_family_trust_schorr",
    name:"PRS Family Trust GmbH (Familie Rainer Schorr)", kurz:"PRS Family Trust",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Tauentzienstraße 11, 10789 Berlin",
    hqLat:52.5030, hqLng:13.3380,
    website:"rainer-schorr.com", domain:"rainer-schorr.com",
    linkedin:"linkedin.com/company/prs-family-trust", contactName:"Rainer Schorr", contactRole:"Inhaber / Geschäftsführer", contactChannel:"rainer-schorr.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Eigenkapitalstarkes Single Family Office mit Fokus auf den deutschen Immobilienmarkt, Schwerpunkt Berlin. Deckt laut Eigendarstellung die gesamte Wertschöpfungskette ab: Ankauf, Portfolio-Restrukturierung, Projektentwicklung, Management und Verkauf. Ankaufsfokus: Büro- und Handelsimmobilien sowie Grundstücke mit Entwicklungspotenzial; opportunistisch/value-add. Vorgeschichte: Rainer Schorr gründete 1998 SIAG Schorr Immobilien AG (Wohn-/Gewerbe in Berlin und weiteren dt. Großstädten); 2024 Interesse an insolventer Helma Eigenheimbau (Quelle: rainer-schorr.com, iz.de, a1news). Konkrete Ticketgrößen nicht öffentlich publiziert.",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publiziertes AUM. Abgeleitet aus jahrzehntelanger Berliner RE-Tätigkeit (SIAG, PRS) und Kaufkraft (u.a. Helma-Übernahmeversuch 2024).", sources:[] },
    reQuote:{ value:0.85, basis:"quelle", note:"RE-fokussiertes Family Office; investiert primär in den deutschen Immobilienmarkt (Büro, Retail, Entwicklungsgrundstücke).", sources:[{label:"DDW PRS Family Trust",url:"https://die-deutsche-wirtschaft.de/investoren/prs-family-trust-gmbh-berlin-family-office/"}] },
    reInvestedEUR:0.85,
    usage:{ Buero:45, Retail:30, Wohnen:15, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin", intensity:"hoch", usages:["Buero","Retail","Wohnen"], center:[52.52,13.405], radiusKm:25,
        basis:"quelle", note:"Investitionsschwerpunkt Berlin (Büro, Retail, Entwicklungsgrundstücke). Keine Einzeladressen öffentlich verifiziert.", sources:[{label:"iz.de PRS Family Trust",url:"https://www.iz.de/profile/unternehmen/PRS%20Family%20Trust/"},{label:"a1news Rainer Schorr",url:"https://a1news.co.uk/who-is-rainer-schorr-german-real-estate-tycoon-owner-of-prs-family-trust-gmbh/"}] }
    ],
    about:["Single Family Office von Immobilienunternehmer Rainer Schorr (ex Treuhand Berlin, Aengevelt, Gründer SIAG Schorr Immobilien AG 1998).","Investiert in den deutschen Immobilienmarkt mit Schwerpunkt Berlin; gesamte Wertschöpfungskette von Ankauf bis Verkauf.","2024 Übernahmeversuch der insolventen Helma Eigenheimbau."],
    structure:{ fo:"PRS Family Trust GmbH, Berlin (HRB 137428 B).", managers:["Rainer Schorr (Inhaber/GF)"], decisions:"Ankäufe entscheidet der Inhaber Rainer Schorr.", contact:"PRS Family Trust GmbH / Rainer Schorr, Tauentzienstraße 11, Berlin." }
  },

  {
    id:"corvis_family_office",
    name:"Corvis Family Office (Corvis Immobilien Management GmbH)", kurz:"Corvis",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Max-Keith-Straße 66, 45136 Essen",
    hqLat:51.4400, hqLng:7.0300,
    website:"corvis.org", domain:"corvis.org",
    linkedin:"linkedin.com/company/corvis-family-office", contactName:"", contactRole:"JUST Real Estate (Immobilienbereich)", contactChannel:"corvis.org/kontakt",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office mit vier Geschäftsbereichen (JUST Real Estate, JUST Machinery, JUST Wine, JUST Organic Food). Immobilienbereich (JUST Real Estate) investiert bevorzugt in Gewerbeimmobilien und optimiert den Bestand sukzessive nach ESG-Kriterien (PV auf Dächern, E-Ladepunkte, Entsiegelung). Zusätzlich Land-/Forstwirtschaft. Beteiligungsfokus daneben: Mittelstand mit ~25–80 Mio € Umsatz (Maschinen-/Anlagenbau). Kein öffentlich publiziertes Ticketing/Regionenraster; Bestandshalter, kein Development für Dritte (Quelle: corvis.org, DDW). Details nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publiziertes AUM. Family Office mit eigenständigem, aktiv verwaltetem Gewerbeimmobilien-Portfolio plus Mittelstandsbeteiligungen, Wein und Bio-Food.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung — Immobilien sind eine von vier Kernsäulen (JUST Real Estate), keine Einzeladressen öffentlich verifiziert.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Buero:35, Retail:25, Logistik:15, Sonstiges:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Essen / Ruhrgebiet", intensity:"mittel", usages:["Buero","Retail"], center:[51.458,7.014], radiusKm:40,
        basis:"quelle", note:"Sitz Essen; Gewerbeimmobilien-Portfolio (JUST Real Estate). Keine Einzeladressen öffentlich verifiziert.", sources:[{label:"Corvis Real Estate",url:"https://www.corvis.org/real-estate"},{label:"DDW Corvis",url:"https://die-deutsche-wirtschaft.de/investoren/corvis-gmbh-family-office-essen-family-office/"}] }
    ],
    about:["Family Office (gegr. 2003) einer Unternehmerfamilie in Essen; Dachmarke 'JUST the CORVIS Family Office'.","Vier Bereiche: JUST Real Estate (Gewerbeimmobilien), JUST Machinery (Maschinen-/Anlagenbau), JUST Wine, JUST Organic Food.","Erstes Family Office in DE mit ZNU-Nachhaltigkeitszertifizierung; eigene Regenbogen-Stiftung."],
    structure:{ fo:"Corvis GmbH / Corvis Immobilien Management GmbH, Essen (HRB 20579).", managers:["Corvis Immobilien Management (JUST Real Estate)"], decisions:"Ankäufe über den Immobilienbereich der Corvis-Gruppe.", contact:"JUST Real Estate / Corvis Immobilien Management GmbH, Max-Keith-Straße 66, Essen." }
  },

  {
    id:"kopp_invest_nuernberg",
    name:"Familie Daniel Kopp Grundbesitzverwaltung & Immobilieninvestitionen (KOPP Invest)", kurz:"KOPP Invest",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Regensburger Straße 336, 90480 Nürnberg",
    hqLat:49.4400, hqLng:11.1200,
    website:"kopp-invest.de", domain:"kopp-invest.de",
    linkedin:"", contactName:"Daniel Kopp", contactRole:"Inhaber", contactChannel:"kontakt@kopp-invest.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Familien-Immobilieninvestor (Bestandshalter) mit Wurzeln in Nürnberg. Sucht laufend Gewerbeobjekte aller Art, Wohn- und Geschäftshäuser sowie Grundstücke innerhalb von Nürnberg und im 100-km-Radius. Ankauf für das eigene Portfolio, Fokus auf langfristigen Werterhalt; bei Nutzungsänderungen Kernsanierungen mit hochwertigen Materialien und Energieeffizienz. Core/Core+ bis value-add, Bestand statt Development für Dritte (Quelle: kopp-invest.de). Ticketgrößen nicht explizit publiziert.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publiziertes AUM. Privater Bestandshalter mit Wohn-/Geschäftshäusern und Gewerbeobjekten im Großraum Nürnberg.", sources:[] },
    reQuote:{ value:0.9, basis:"quelle", note:"Kerngeschäft ist der Ankauf und die langfristige Bestandshaltung von Immobilien im Raum Nürnberg (eigene Grundbesitzverwaltung).", sources:[{label:"KOPP Invest",url:"https://www.kopp-invest.de/"}] },
    reInvestedEUR:0.27,
    usage:{ Wohnen:40, Retail:25, Buero:20, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Nürnberg + 100 km", intensity:"hoch", usages:["Wohnen","Retail","Buero"], center:[49.452,11.077], radiusKm:100,
        basis:"quelle", note:"Erklärter Ankaufsradius: Nürnberg und 100-km-Umkreis; Wohn-/Geschäftshäuser, Gewerbe, Grundstücke. Keine Einzeladressen öffentlich verifiziert.", sources:[{label:"KOPP Invest",url:"https://www.kopp-invest.de/"}] }
    ],
    about:["Family Office / Grundbesitzverwaltung der Familie Daniel Kopp in Nürnberg.","Kauft Gewerbeobjekte, Wohn-/Geschäftshäuser und Grundstücke im Raum Nürnberg (100-km-Radius) für das eigene Portfolio.","Langfristiger Bestandshalter mit Fokus auf Werterhalt und Sanierung."],
    structure:{ fo:"Familie Daniel Kopp Grundbesitzverwaltung und Immobilieninvestitionen (KOPP Invest), Nürnberg.", managers:["Daniel Kopp"], decisions:"Ankäufe entscheidet Daniel Kopp / KOPP Invest.", contact:"KOPP Invest, Regensburger Straße 336, Nürnberg (kontakt@kopp-invest.de)." }
  },

  {
    id:"nanz_handelsimmobilien",
    name:"Nanz Handelsimmobilien GmbH (Familie Nanz)", kurz:"Nanz Handelsimmobilien",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Augsburger Straße 554, 70329 Stuttgart",
    hqLat:48.7800, hqLng:9.2400,
    website:"", domain:"",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"Stuttgart-Untertürkheim",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office der Familie Nanz (ehem. Lebensmittel-/Handelsunternehmerfamilie). Kern: Handelsimmobilien. Agiert als Bestandshalter, Investor und (Eigen-)Projektentwickler primär im Großraum Stuttgart sowie in süd- und mitteldeutschen Regionen. Fokus Einzelhandels-/Handelsimmobilien; langfristiger Bestand (Quelle: Preqin, northdata, branchen-info). Ticketgrößen nicht öffentlich publiziert; Bilanzsumme 2023 lt. northdata ~60 Mio €.",
    category:"gruen",
    aum:{ value:0.15, unit:"Mrd €", basis:"quelle", note:"Bilanzsumme 2023 lt. northdata ~60 Mio €; RE-Verkehrswerte plausibel höher. Reines RE-Family-Office der Familie Nanz.", sources:[{label:"northdata Nanz Handelsimmobilien",url:"https://www.northdata.com/Nanz%20Handelsimmobilien%20GmbH,%20Stuttgart/HRB%20230113"}] },
    reQuote:{ value:0.9, basis:"quelle", note:"Kerngeschäft Handelsimmobilien (Bestand/Investor/Entwickler) im Raum Stuttgart und Süd-/Mitteldeutschland.", sources:[{label:"branchen-info Nanz",url:"https://stuttgart.branchen-info.net/fp_4256331.php"}] },
    reInvestedEUR:0.12,
    usage:{ Retail:70, Buero:15, Wohnen:10, Sonstiges:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Großraum Stuttgart", intensity:"hoch", usages:["Retail"], center:[48.78,9.18], radiusKm:35,
        basis:"quelle", note:"Schwerpunkt Handelsimmobilien im Raum Stuttgart; keine Einzeladressen öffentlich verifiziert.", sources:[{label:"branchen-info Nanz",url:"https://stuttgart.branchen-info.net/fp_4256331.php"}] },
      { name:"Süd-/Mitteldeutschland", intensity:"mittel", usages:["Retail"], center:[49.5,9.5], radiusKm:150,
        basis:"quelle", note:"Weitere Handelsimmobilien in süd- und mitteldeutschen Regionen laut Firmenprofil.", sources:[{label:"branchen-info Nanz",url:"https://stuttgart.branchen-info.net/fp_4256331.php"}] }
    ],
    about:["Family Office der Familie Nanz (traditionsreiche Handelsunternehmerfamilie), Sitz Stuttgart-Untertürkheim.","Kern: Handelsimmobilien — Bestandshalter, Investor und Eigen-Projektentwickler.","Schwerpunkt Großraum Stuttgart sowie süd-/mitteldeutsche Regionen."],
    structure:{ fo:"Nanz Handelsimmobilien GmbH, Stuttgart (HRB 230113); daneben Nanz Immobilien GmbH.", managers:["Geschäftsführung Nanz"], decisions:"Ankäufe über Nanz Handelsimmobilien GmbH.", contact:"Nanz Handelsimmobilien GmbH, Augsburger Straße 554, Stuttgart." }
  },

  {
    id:"kronseder_beteiligung",
    name:"Beteiligungsgesellschaft Kronseder mbH (Familie Kronseder / Krones AG)", kurz:"Kronseder Beteiligung",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Königsberger Straße 4, 93073 Neutraubling",
    hqLat:48.9888, hqLng:12.2040,
    website:"", domain:"",
    linkedin:"", contactName:"", contactRole:"Familienholding", contactChannel:"Neutraubling",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar — Familienholding der Familie Kronseder, hält primär die Beteiligung an der Krones AG (Getränke-/Verpackungstechnik). Kein öffentliches Immobilien-Ankaufsprofil bekannt.",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publiziertes AUM. Wert dominiert durch die Familien-Beteiligung an der börsennotierten Krones AG; Beteiligungsgesellschaft Kronseder mbH ist die Familienholding (HRB 1137 Regensburg).", sources:[] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung — Industrie-/Beteiligungsholding, kein erkennbarer Immobilien-Kern; keine verifizierten RE-Objekte.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:50, Sonstiges:50 },
    confirmedObjects:[],
    heatmap:[
      { name:"Region Regensburg / Neutraubling", intensity:"niedrig", usages:["Sonstiges"], center:[48.99,12.2], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz der Familienholding; kein belegtes Immobilien-Investitionsprogramm.", sources:[] }
    ],
    about:["Beteiligungs-/Familienholding der Familie Kronseder (Gründerfamilie der Krones AG, Neutraubling).","Verwaltet primär das Familienvermögen rund um die Krones-Beteiligung.","Industrie-/Beteiligungsholding — kein erkennbarer Immobilien-Kern (gelb: Kapital vorhanden, kein RE-Fokus)."],
    structure:{ fo:"Beteiligungsgesellschaft Kronseder mbH, Neutraubling (HRB 1137, AG Regensburg).", managers:[], decisions:"Familie/Holding.", contact:"Beteiligungsgesellschaft Kronseder mbH, Königsberger Straße 4, Neutraubling." }
  },

  {
    id:"hlb_family_office_bluecher",
    name:"HLB Family Office GmbH (Familie Hasso von Blücher)", kurz:"HLB Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Mettmanner Straße 25, 40699 Erkrath",
    hqLat:51.2230, hqLng:6.9110,
    website:"", domain:"",
    linkedin:"", contactName:"Stefan Janssen", contactRole:"Geschäftsführer", contactChannel:"Erkrath",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar — Single Family Office für das Vermögen von Hasso von Blücher (Unternehmerfamilie Blücher, Aktivkohle/Schutztextilien) und nahestehende Gesellschaften. Deckt alle Assetklassen inkl. Immobilien ab; kein öffentliches Immobilien-Ankaufsprofil/Ticketing bekannt (Quelle: private-banking-magazin, gelbeseiten).",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publiziertes AUM. SFO der Familie von Blücher (Blücher GmbH / Aktivkohle- und Schutzmaterialien); Stammkapital der GmbH 250.000 €.", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung — Immobilien sind eine von mehreren Assetklassen (Struktur, liquide Anlagen, Beteiligungen, Immobilien); keine verifizierten RE-Objekte.", sources:[] },
    reInvestedEUR:0.075,
    usage:{ Buero:40, Wohnen:35, Retail:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rheinland (Düsseldorf/Erkrath)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[51.22,6.9], radiusKm:40,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz des SFO; kein belegtes Immobilien-Investitionsprogramm.", sources:[] }
    ],
    about:["Single Family Office (gegr. 2016) für Hasso von Blücher und seinen engsten Familienkreis (Unternehmerfamilie Blücher, Aktivkohle/ABC-Schutzmaterialien).","Betreut alle Assetklassen: Strukturierung, liquide Anlagen, Beteiligungen, Immobilien.","Aufgebaut von Stefan Janssen (ex Sal. Oppenheim)."],
    structure:{ fo:"HLB Family Office GmbH, Erkrath (HRB 27040 AG Wuppertal).", managers:["Stefan Janssen (GF)"], decisions:"SFO / Familie von Blücher.", contact:"HLB Family Office GmbH, Mettmanner Straße 25, Erkrath." }
  },

  {
    id:"agusta_family_office_hh",
    name:"Agusta GmbH — Family Office Hamburg", kurz:"Agusta",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Dorotheenstraße 64, 22301 Hamburg",
    hqLat:53.5800, hqLng:10.0100,
    website:"agusta.de", domain:"agusta.de",
    linkedin:"linkedin.com/company/agusta-family-office", contactName:"Hans-Peter Bannert / Ralph Kempcke", contactRole:"Geschäftsführer/Gründer", contactChannel:"agusta.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Unabhängiges (Multi-)Family Office; berät Mandanten in liquiden Anlagen, Beteiligungen und Immobilien. Im Immobilienbereich optimiert Agusta die Portfolios der Mandanten und wickelt Transaktionen im In- und Ausland gemeinsam mit RE-Spezialisten ab — d.h. Allokation für Klienten, kein eigenes Bestandsportfolio. Kein publiziertes eigenes Ankaufsprofil/Ticketing (Quelle: agusta.de).",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — als MFO betreutes Mandantenvermögen nicht öffentlich; gegr. 2014 von Hans-Peter Bannert und Ralph Kempcke.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — MFO allokiert für Mandanten in Immobilien über Spezialisten; kein eigenes RE-Kernportfolio.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:40, Wohnen:35, Retail:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg / überregional", intensity:"niedrig", usages:["Buero","Wohnen"], center:[53.55,10.0], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — MFO-Sitz Hamburg; Immobilientransaktionen im In-/Ausland für Mandanten, keine eigenen Objekte.", sources:[] }
    ],
    about:["Unabhängiges Family Office (MFO) in Hamburg, gegr. 2014 von Hans-Peter Bannert und Ralph Kempcke.","Umfassende Vermögensbetreuung: liquide Anlagen, Beteiligungen, Immobilien, Controlling, Sekretariatsservices.","Immobilien werden für Mandanten mit RE-Spezialisten optimiert/transaktioniert (kein eigenes Bestandsportfolio)."],
    structure:{ fo:"Agusta GmbH, Hamburg (HRB 134277).", managers:["Hans-Peter Bannert","Ralph Kempcke"], decisions:"Mandanten entscheiden; Agusta koordiniert mit RE-Spezialisten.", contact:"Agusta GmbH, Dorotheenstraße 64, Hamburg." }
  },

  {
    id:"alluti_bleicher",
    name:"Alluti GmbH (Bert Bleicher Family Office)", kurz:"Alluti",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schlosshof 7, 82229 Seefeld",
    hqLat:48.0370, hqLng:11.2130,
    website:"alluti.de", domain:"alluti.de",
    linkedin:"linkedin.com/company/alluti-gmbh", contactName:"Bert Bleicher", contactRole:"Inhaber / Geschäftsführer", contactChannel:"alluti.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office des Unternehmers Bert Bleicher (Sitz Schloss Seefeld). Investiert in Immobilien, Unternehmen und liquide Anlagen; ausgeprägter Schwerpunkt auf Early-Stage/Venture- und Seed-Investments sowie Beratung und Portfoliomanagement. Immobilien sind eine von mehreren Anlageklassen; kein publiziertes eigenes RE-Ankaufsprofil/Ticketing (Quelle: alluti.de, altss).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein publiziertes AUM. SFO des Unternehmers Bert Bleicher (gegr. 2014); Fokus VC/Seed, daneben Immobilien und liquide Anlagen.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — Immobilien eine von drei Säulen (Immobilien, Unternehmen, liquide Anlagen); Schwerpunkt eher Venture/Seed. Keine verifizierten RE-Objekte.", sources:[] },
    reInvestedEUR:0.06,
    usage:{ Buero:40, Wohnen:35, Sonstiges:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Region München / Oberbayern", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.04,11.2], radiusKm:40,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz Seefeld bei München; kein belegtes RE-Investitionsprogramm mit Adressen.", sources:[] }
    ],
    about:["Single Family Office des Unternehmers Bert Bleicher, Sitz Schloss Seefeld (Bayern), gegr. 2014.","Investiert in Immobilien, Unternehmen und liquide Anlagen; Schwerpunkt Early-Stage-/Seed-Venture ('Smart Invest').","Versteht sich als Investor, Ideengeber und Unterstützer."],
    structure:{ fo:"Alluti GmbH, Seefeld (HRB 210537 AG München).", managers:["Bert Bleicher (Inhaber/GF)"], decisions:"Ankäufe/Investments entscheidet Bert Bleicher.", contact:"Alluti GmbH, Schlosshof 7, Seefeld." }
  }

]);
