/* Worker 03 — neue FOs aus 280er-Liste (slice-03). NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   Eingetragen: 9 FOs. Geskippt: Amadeus Private Capital (operative RE-/Wohnungsgesellschaft),
   HBB (operativer Projektentwickler/Center-Betreiber), Dr. Vogg Immobilien (operativer RE-/FM-Dienstleister). */
window.FO_DATA = (window.FO_DATA || []).concat([
  {
    id:"dzinvest",
    name:"DZ Invest GmbH (Unternehmer-Family-Office)", kurz:"DZ Invest",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Kiesstraße 4, 60486 Frankfurt am Main (vormals Robert-Bosch-Str. 28, 63225 Langen)",
    hqLat:50.121, hqLng:8.639,
    website:"dz-invest.com", domain:"dz-invest.com",
    linkedin:"", contactName:"Geschäftsführung DZ Invest", contactRole:"Geschäftsführer", contactChannel:"über dz-invest.com / Investment-Management",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Unternehmerisches Single Family Office mit Immobilienschwerpunkt: Hotels, Büro, Wohnen, Industrie- und Gewerbeobjekte; laut Eigendarstellung >600.000 m² Bestand und >500 Mio. € Transaktionsvolumen (davon ~150 Mio. € über Development), zzgl. PE-/Startup-Beteiligungen. Fokus Rhein-Main/Frankfurt, Value-Add bis Core über aktives Asset Management (z. B. Klingerstr. 20/Allerheiligenstr. 42, 2013 gekauft, 2020 als Core-Objekt verkauft). Ticketgröße nicht öffentlich publiziert (Quelle: dz-invest.com, deal-magazin.com).",
    category:"gruen",
    aum:{ value:0.6, unit:"Mrd €", basis:"quelle", note:">500 Mio. € Transaktionsvolumen, >600.000 m² Bestand laut Unternehmensprofil; AUM-Zahl gerundet geschätzt.", sources:[{label:"investorenguide.de – DZ Invest",url:"https://www.investorenguide.de/investor-finden/dz-invest-gmbh/"},{label:"deal-magazin – DZ Invest verkauft Frankfurt-Ensemble an Family Office",url:"http://www.deal-magazin.com/news/1/88370/DZ-Invest-verkauft-Gebaeudeensemble-in-Frankfurt-an-Family-Office"}] },
    reQuote:{ value:0.8, basis:"extrapolation", note:"Reine Einschätzung – Immobilien sind erklärter Kern, daneben PE/Startups.", sources:[] },
    reInvestedEUR:0.48,
    usage:{ Buero:35, Wohnen:20, Hotel:20, Sonstiges:15, Retail:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main / Frankfurt", intensity:"hoch", usages:["Buero","Wohnen","Hotel"], center:[50.11,8.68], radiusKm:35, basis:"quelle", note:"Kern-Investitionsregion; u. a. Ankauf/Verkauf Innenstadt-Ensemble Klingerstr./Allerheiligenstr.", sources:[{label:"deal-magazin – DZ Invest Frankfurt",url:"http://www.deal-magazin.com/news/1/88370/DZ-Invest-verkauft-Gebaeudeensemble-in-Frankfurt-an-Family-Office"}] }
    ]
  },
  {
    id:"obotritia",
    name:"Obotritia Capital KGaA (Rolf Elgeti)", kurz:"Obotritia (Elgeti)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"August-Bebel-Straße 68, 14482 Potsdam",
    hqLat:52.392, hqLng:13.098,
    website:"obotritia-capital.com", domain:"obotritia-capital.com",
    linkedin:"", contactName:"Rolf Elgeti", contactRole:"persönlich haftender Gesellschafter / Gründer", contactChannel:"über Obotritia Capital / Deutsche Konsum REIT-Umfeld",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Investment-/Family-Office-Holding von Rolf Elgeti (Ex-CEO TAG Immobilien). Schwerpunkt börsennotierte Immobilien-Beteiligungen: ~30 % an Deutsche Konsum REIT-AG (Handels-/Nahversorgungsimmobilien bundesweit, v. a. Ost-/Norddeutschland) sowie Deutsche Industrie REIT/Light-Industrial und ~50 Startup-Beteiligungen. Direktankauf über die börsennotierten REITs: kleinteilige Nahversorger/Fachmärkte, Ticket meist einstelliger bis niedriger zweistelliger Mio.-Bereich, Bestand mit Value-Add. Off-Market-affin (Quelle: deutsche-konsum.de, marketscreener.com).",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – wesentliche Werte über gelistete Beteiligungen (Deutsche Konsum REIT ~30 %, Deutsche Industrie REIT) plus Startups; keine belastbare Gesamt-AUM-Angabe öffentlich.", sources:[] },
    reQuote:{ value:0.7, basis:"quelle", note:"Vermögensschwerpunkt in börsennotierten Immobilien-REITs.", sources:[{label:"Deutsche Konsum REIT – Obotritia strukturiert Beteiligungen um",url:"https://www.deutsche-konsum.de/en/press-downloads/corporate-news/meldung/hauptaktionaerin-obotritia-capital-kgaa-strukturiert-ihre-beteiligungen-an-der-deutsche-konsum-reit-ag-um-2472289"},{label:"MarketScreener – Rolf Elgeti Positionen",url:"https://www.marketscreener.com/insider/ROLF-ELGETI-A0CNAJ/"}] },
    reInvestedEUR:0.7,
    usage:{ Retail:60, Logistik:25, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Ost-/Norddeutschland – Nahversorgung (über Deutsche Konsum REIT)", intensity:"hoch", usages:["Retail"], center:[52.4,13.1], radiusKm:60, basis:"quelle", note:"Deutsche Konsum REIT hält bundesweit, mit Schwerpunkt Ost-/Norddeutschland, Handels-/Nahversorgungsimmobilien.", sources:[{label:"Deutsche Konsum REIT – Corporate News",url:"https://www.deutsche-konsum.de/en/press-downloads/corporate-news/meldung/hauptaktionaerin-obotritia-capital-kgaa-strukturiert-ihre-beteiligungen-an-der-deutsche-konsum-reit-ag-um-2472289"}] },
      { name:"Bundesweit – Light Industrial (über Deutsche Industrie REIT)", intensity:"mittel", usages:["Logistik"], center:[52.0,10.5], radiusKm:120, basis:"quelle", note:"Elgeti kontrollierte/prägte Deutsche Industrie REIT (Light-Industrial-Portfolio).", sources:[{label:"MarketScreener – Rolf Elgeti",url:"https://www.marketscreener.com/insider/ROLF-ELGETI-A0CNAJ/"}] }
    ]
  },
  {
    id:"zimmermann_invest",
    name:"Zimmermann Investment GmbH & Co. KG (Familie Zimmermann)", kurz:"Zimmermann Investment",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Eicken 1, 58791 Werdohl",
    hqLat:51.262, hqLng:7.765,
    website:"z-investment.de", domain:"z-investment.de",
    linkedin:"", contactName:"Reinhold Zimmermann · Patrick Zimmermann", contactRole:"Geschäftsführende Gesellschafter", contactChannel:"über z-investment.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office der Familie Zimmermann (gegr. 1990, Werdohl/Südwestfalen). Breit diversifiziert: Immobilien (u. a. Gewerbe), Consumer Internet/E-Commerce (B2C & B2B), Technologie, FinTech, Bildung, Services. Exit-orientierte Beteiligungen. Konkretes Immobilien-Ankaufsprofil (Assetklassen/Ticket/Region) nicht öffentlich ermittelbar (Quelle: z-investment.de, PitchBook).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine Vermögensangaben öffentlich.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung – Immobilien nur eine von mehreren Anlageklassen.", sources:[] },
    reInvestedEUR:0.09,
    usage:{ Buero:40, Retail:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Südwestfalen / bundesweit (Gewerbe)", intensity:"mittel", usages:["Buero","Retail"], center:[51.26,7.77], radiusKm:60, basis:"extrapolation", note:"Reine Einschätzung – Sitz Werdohl, gewerblicher RE-Anteil im Portfolio, genaue Standorte nicht belegt.", sources:[] }
    ]
  },
  {
    id:"cjh_fo",
    name:"CJH Family Office GmbH", kurz:"CJH Family Office",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Blumenstr. 2-4, 40212 Düsseldorf",
    hqLat:51.221, hqLng:6.782,
    website:"cjhfo.de", domain:"cjhfo.de",
    linkedin:"", contactName:"Carsten Häming", contactRole:"Geschäftsführer", contactChannel:"über cjhfo.de/kontakt",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Multi Family Office (Düsseldorf, HRB 83628, seit 2018). Schwerpunkt Immobilien und Direktbeteiligungen: Nachfolgelösungen, MBO/MBI, Konzern-Spin-offs, Mezzanine-Kapital. Langfristiger, holistischer Investmentansatz für Partner/Mandanten. Konkretes Immobilien-Ankaufsprofil (Ticket/Region/Nutzung) nicht öffentlich ermittelbar (Quelle: familyoffice.de, die-deutsche-wirtschaft.de).",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – MFO ohne öffentliche AUM-Angabe.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung – Immobilien laut Profil ein Schwerpunkt neben Direktbeteiligungen.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Buero:40, Wohnen:30, Retail:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"NRW / Rheinland (Düsseldorf)", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.22,6.78], radiusKm:50, basis:"extrapolation", note:"Reine Einschätzung – Sitz Düsseldorf, RE-Schwerpunkt, konkrete Objekte nicht belegt.", sources:[] }
    ]
  },
  {
    id:"guenther_holding",
    name:"Günther Holding SE (Familie Günther)", kurz:"Günther Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Steinhöft 11, 20459 Hamburg",
    hqLat:53.545, hqLng:9.983,
    website:"guenther-holding.com", domain:"guenther-holding.com",
    linkedin:"", contactName:"Oliver Jaster · Niklas Friedrichsen", contactRole:"Vorstand (Board of Executive Directors)", contactChannel:"über guenther-holding.com/contact",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Familienholding der Familie Günther (Hamburg, gegr. 1945). Beteiligungen in Glücksspiel, Maschinenbau, Software/IT, Direktvertrieb sowie Wohnimmobilien; größte Beteiligung M.A.X. Automation (Industrie). Immobilien nur ein Segment; konkretes Ankaufsprofil (Ticket/Region) nicht öffentlich ermittelbar (Quelle: die-deutsche-wirtschaft.de, wer-zu-wem.de).",
    category:"gelb",
    aum:{ value:0.8, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – Umsatz Gruppe ~300 Mio. €/Jahr, Vermögens-/Equity-Zahl nicht öffentlich.", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung – Wohnimmobilien nur eines von mehreren Beteiligungssegmenten.", sources:[] },
    reInvestedEUR:0.12,
    usage:{ Wohnen:80, Buero:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg / Norddeutschland (Wohnen)", intensity:"mittel", usages:["Wohnen"], center:[53.55,9.99], radiusKm:40, basis:"extrapolation", note:"Reine Einschätzung – Sitz Hamburg, Segment Wohnimmobilien, konkrete Objekte nicht belegt.", sources:[] }
    ]
  },
  {
    id:"berggruen_holdings",
    name:"Nicolas Berggruen Holdings GmbH", kurz:"Berggruen Holdings",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Wilhelm-Kabus-Straße 42/44, 10829 Berlin (auch Fasanenstr. 77, 10623 Berlin)",
    hqLat:52.478, hqLng:13.365,
    website:"berggruenholdings.de", domain:"berggruenholdings.de",
    linkedin:"", contactName:"Nicolas Berggruen", contactRole:"Gründer/Eigentümer", contactChannel:"über berggruenholdings.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Eigentümergeführtes Immobilien-Investmentvehikel des Investors Nicolas Berggruen (gegr. 2005). Kauft, saniert, modernisiert und vermietet Wohn-, Büro- und Gewerbeimmobilien in Berlin und Potsdam; laut Eigendarstellung ~450 Mio. € in ~100 Objekte (~300.000 m²) investiert, inkl. denkmalgeschützter Spezialimmobilien (z. B. Café Moskau). Langfristiger Bestandshalter mit Fokus Architektur/Ästhetik. Ticket nicht publiziert (Quelle: berggruenholdings.de, lto.de).",
    category:"gruen",
    aum:{ value:0.5, unit:"Mrd €", basis:"quelle", note:"~450 Mio. € in ~100 Objekte (~300.000 m²) in Berlin/Potsdam investiert; deutsches RE-Vehikel (globales Berggruen-Vermögen deutlich größer).", sources:[{label:"LTO – Berggruen-Holding verkauft Wohnportfolio",url:"https://www.lto.de/recht/kanzleien-unternehmen/k/greenberg-traurig-cms-nicolas-berggruen-immobilienportfolio-verkauf-berlin-immobilienwirtschaftsrecht"},{label:"Greenberg Traurig – Sale of housing portfolio",url:"https://www.gtlaw.com/en/news/2017/1/greenberg-traurig-germany-advises-nicolas-berggruen-holdings-on-the-sale-of"}] },
    reQuote:{ value:1.0, basis:"quelle", note:"Reines Immobilien-Investmentvehikel.", sources:[{label:"Berggruen Holdings – Unternehmen",url:"https://www.berggruenholdings.de/unternehmen.html"}] },
    reInvestedEUR:0.45,
    usage:{ Wohnen:55, Buero:20, Sonstiges:15, Retail:10 },
    confirmedObjects:[
      { name:"Café Moskau", address:"Karl-Marx-Allee 34, 10243 Berlin", lat:52.5216, lng:13.4197,
        usage:"Sonstiges", area:"denkmalgeschützt, Event-Location bis ~2.400 Gäste", purchaseDate:"2007", valueEUR:30, status:"Bestand",
        connection:"2007 von TLG Immobilien durch die Nicolas Berggruen Holding erworben und denkmalgerecht saniert.",
        images:[], sources:[{label:"Wikipedia – Café Moskau",url:"https://de.wikipedia.org/wiki/Caf%C3%A9_Moskau"}] }
    ],
    heatmap:[
      { name:"Berlin (Mitte/Tiergarten/Wedding u. a.)", intensity:"hoch", usages:["Wohnen","Buero","Sonstiges"], center:[52.52,13.40], radiusKm:20, basis:"quelle", note:"~100 Objekte in Berlin/Potsdam, u. a. denkmalgeschützte Industriehöfe und Wohnhäuser.", sources:[{label:"LTO – Berggruen Wohnportfolio",url:"https://www.lto.de/recht/kanzleien-unternehmen/k/greenberg-traurig-cms-nicolas-berggruen-immobilienportfolio-verkauf-berlin-immobilienwirtschaftsrecht"}] },
      { name:"Potsdam", intensity:"mittel", usages:["Wohnen"], center:[52.40,13.06], radiusKm:15, basis:"quelle", note:"Teil des Berggruen-Bestands neben Berlin.", sources:[{label:"Berggruen Holdings – Unternehmen",url:"https://www.berggruenholdings.de/unternehmen.html"}] }
    ]
  },
  {
    id:"vondermark",
    name:"von der Mark Vermögensverwaltungsgesellschaft mbH (Familie von der Mark)", kurz:"von der Mark",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Ostfeldstr. 46, 30559 Hannover",
    hqLat:52.352, hqLng:9.833,
    website:"", domain:"",
    linkedin:"", contactName:"Geschäftsführung von der Mark", contactRole:"Geschäftsführer", contactChannel:"über Handelsregister/Northdata (HRB 202497 Hannover)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office der Familie von der Mark (Hannover, seit 2007). Verwaltung, Beratung und Anlage privaten Kapitals mit besonderem Fokus auf Erwerb und Entwicklung von Immobilien inkl. Bestandsoptimierung (§34c GewO). Konkrete Assetklassen/Ticketgrößen/Regionen nicht öffentlich ermittelbar (Quelle: Northdata, genios.de).",
    category:"gruen",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – keine Vermögens-/Portfolioangaben öffentlich.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung – Immobilien laut Unternehmenszweck erklärter Schwerpunkt.", sources:[] },
    reInvestedEUR:0.14,
    usage:{ Wohnen:50, Buero:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hannover / Niedersachsen", intensity:"mittel", usages:["Wohnen","Buero"], center:[52.37,9.73], radiusKm:40, basis:"extrapolation", note:"Reine Einschätzung – Sitz Hannover, RE-Fokus, konkrete Objekte nicht belegt.", sources:[] }
    ]
  },
  {
    id:"widerker",
    name:"Widerker Investment Management GmbH & Co. KG (Widerker Group)", kurz:"Widerker Group",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Lautenschlagerstraße 23, 70173 Stuttgart",
    hqLat:48.783, hqLng:9.181,
    website:"widerker.com", domain:"widerker.com",
    linkedin:"", contactName:"Familie Widerker / Geschäftsführung", contactRole:"Geschäftsführer", contactChannel:"über widerker.com (Investment-Profil)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Familiengeführte, immobilienorientierte Gruppe (Widerker Group, Stuttgart & Berlin) mit eigenem Bestand >400.000 m², überwiegend in Deutschland. Fokus: Eigentum, Development, Sanierung, Instandhaltung und Management von Gewerbeimmobilien bundesweit; sucht laut Investment-Profil aktiv Immobilieninvestments in Deutschland und der EU, mit erheblichen Eigenmitteln. Genaue Ticketgrößen nicht publiziert (Quelle: widerker.com Investment-Profil).",
    category:"gruen",
    aum:{ value:0.6, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung – >400.000 m² eigener Bestand laut Website, kein AUM-Wert publiziert.", sources:[] },
    reQuote:{ value:0.9, basis:"quelle", note:"Immobilienorientierte Gruppe mit eigenem Bestand als Kern.", sources:[{label:"Widerker Group – Investment-Profil",url:"https://www.widerker.com/investment-profil.html"}] },
    reInvestedEUR:0.54,
    usage:{ Buero:45, Retail:30, Logistik:15, Wohnen:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Stuttgart / Baden-Württemberg", intensity:"hoch", usages:["Buero","Retail"], center:[48.78,9.18], radiusKm:40, basis:"quelle", note:"Sitz und Investitionsschwerpunkt; gewerblicher Bestand.", sources:[{label:"Widerker Group – Home",url:"https://www.widerker.com/en/index.html"}] },
      { name:"Berlin", intensity:"mittel", usages:["Buero","Retail"], center:[52.52,13.40], radiusKm:25, basis:"quelle", note:"Zweiter Standort/Investitionsraum der Gruppe.", sources:[{label:"Widerker Group – Home",url:"https://www.widerker.com/en/index.html"}] }
    ]
  }
]);
