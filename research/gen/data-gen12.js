/* Worker 12 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"christiansen_flensburg",
    name:"C.C.Christiansen GmbH & Co. KG (Familie Christiansen)", kurz:"C.C.Christiansen",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Neustadt 56, 24939 Flensburg",
    hqLat:54.7937, hqLng:9.4370,
    website:"ccchristiansen.de", domain:"ccchristiansen.de",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"info@ccchristiansen.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Traditionsreiche Familienholding (seit 1802) mit eigenem Immobilienbestand plus Mittelstands-Beteiligungen und zwei landwirtschaftlichen Betrieben. Laut Website Verwaltung UND Entwicklung eigener Immobilien; Fokus regional Flensburg/Schleswig-Holstein, langfristiger Bestandshalter mit Diversifikationsziel. Konkrete Assetklassen, Ticketgrößen und Ankaufskriterien nicht öffentlich ausgewiesen (Quelle: ccchristiansen.de).",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — traditionsreiche, aber nicht publizitätspflichtige Familienholding; Größenordnung nicht belegt.", sources:[] },
    reQuote:{ value:0.5, basis:"extrapolation", note:"Reine Einschätzung — Immobilien sind neben Beteiligungen/Agrar erklärter Kernpfeiler.", sources:[] },
    reInvestedEUR:0.2,
    usage:{ Wohnen:40, Buero:20, Retail:20, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Flensburg / Schleswig-Holstein", intensity:"mittel", usages:["Wohnen","Retail","Sonstiges"], center:[54.7937,9.4370], radiusKm:40,
        basis:"quelle", note:"Eigener Immobilienbestand der Familienholding, regionaler Schwerpunkt; Einzeladressen nicht öffentlich.", sources:[{label:"ccchristiansen.de",url:"https://ccchristiansen.de/"}] }
    ]
  },

  {
    id:"franger_ketsch",
    name:"Franger Investment GmbH & Co. KGaA (Familie Franger)", kurz:"Franger Investment",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Dahlienweg 15, 68775 Ketsch",
    hqLat:49.3676, hqLng:8.5300,
    website:"frangerinvestment.com", domain:"frangerinvestment.com",
    linkedin:"", contactName:"Helmut, Stefan & Bernhard Franger", contactRole:"Persönlich haftende Gesellschafter", contactChannel:"frangerinvestment.com/en/contact",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 712187 (AG Mannheim)",
    ankaufsprofil:"Family Office der Familie Franger (gegr. 2011), investiert in Immobilien-, Privat- und Kapitalmärkte. Immobilienseitig langfristige Investments in nachhaltige Immobilienprojekte sowie kurzfristige Zwischenfinanzierungen und Mezzanine-Finanzierungen; daneben VC/Technologie-Beteiligungen (u.a. Traxpay, simpleshow, Ruby Hotels). Ticketgrößen/Regionen für Direktimmobilien nicht spezifisch veröffentlicht (Quelle: frangerinvestment.com).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Größe nicht öffentlich belegt.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — Immobilien ein Pfeiler neben VC/Kapitalmarkt/Mezzanine.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Wohnen:30, Buero:25, Hotel:20, Sonstiges:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Neckar (Ketsch/Mannheim/Heidelberg)", intensity:"mittel", usages:["Wohnen","Buero"], center:[49.4875,8.4660], radiusKm:35,
        basis:"quelle", note:"Sitz und regionaler Bezug; Immobilienprojekte laut Eigenangaben, Einzeladressen nicht veröffentlicht.", sources:[{label:"frangerinvestment.com",url:"http://frangerinvestment.com/en/about-us/"}] }
    ]
  },

  {
    id:"karg_vm_frankfurt",
    name:"KARG Vermögensmanagement GmbH (Familie Karg / Karg'sche Familienstiftung)", kurz:"KARG Vermögensmanagement",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Lyoner Straße 15, 60528 Frankfurt am Main",
    hqLat:50.0857, hqLng:8.6280,
    website:"karg-management.de", domain:"karg-management.de",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"karg-management.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 28177 (AG Frankfurt)",
    ankaufsprofil:"Vermögensverwaltung für die Karg'sche Familienstiftung, Mitglieder der Stifterfamilie und die gemeinnützige Karg-Stiftung; Bilanzsumme der zugehörigen KG zuletzt ~300 Mio € (2023). Schwerpunkt Wertpapiere und Unternehmensbeteiligungen; ein Immobilien-Kern-/Ankaufsprofil ist öffentlich nicht ausgewiesen — daher gelb (Quelle: private-banking-magazin.de; northdata).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"quelle", note:"Bilanzsumme der KARG Vermögensmanagement GmbH & Co. KG 2023 ~300 Mio €; verwaltet oberer dreistelliger Mio-Betrag.", sources:[{label:"private-banking-magazin.de",url:"https://www.private-banking-magazin.de/single-family-office-holt-leiter-wertpapier-und-beteiligungen/"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Fokus Wertpapiere/Beteiligungen, Immobilien nicht als Kern belegt.", sources:[] },
    reInvestedEUR:0.03,
    usage:{ Buero:50, Wohnen:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main / Frankfurt", intensity:"niedrig", usages:["Buero","Wohnen"], center:[50.1109,8.6821], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz Frankfurt; kein belegtes Immobilienportfolio.", sources:[] }
    ]
  },

  {
    id:"schneider_fo_alfter",
    name:"SCHNEIDER Family Office (Familie Schneider)", kurz:"Schneider Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Villepohl 4, 53347 Alfter",
    hqLat:50.7370, hqLng:7.0060,
    website:"schneider-fo.com", domain:"schneider-fo.com",
    linkedin:"", contactName:"Thilo Schneider", contactRole:"Geschäftsführer (auch UCY Real Estate)", contactChannel:"schneider-fo.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office der Familie Schneider (Alfter b. Bonn), breit diversifiziert: Immobilien, Private Equity, Hedgefonds, Anleihen, Aktien, Infrastruktur. Immobilienaktivitäten über die verbundene UCY Real Estate (Gewerbe- und Wohnimmobilien, gleiche Anschrift, GF Thilo Schneider). Konkrete Ticketgrößen/Ankaufskriterien nicht öffentlich (Quelle: schneider-fo.com; privatebanking.com Directory).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Größe nicht öffentlich.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — Immobilien eine von mehreren Assetklassen, RE-Arm UCY Real Estate.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:35, Retail:25, Wohnen:30, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Köln / Bonn / Rheinland", intensity:"mittel", usages:["Buero","Retail","Wohnen"], center:[50.7370,7.0060], radiusKm:40,
        basis:"quelle", note:"Sitz Alfter, RE-Aktivität über UCY Real Estate (Gewerbe-/Wohnimmobilien); Einzeladressen nicht veröffentlicht.", sources:[{label:"schneider-fo.com Impressum/UCY",url:"https://schneider-fo.com/en/legal.html"}] }
    ]
  },

  {
    id:"er_capital_rickmers",
    name:"E.R. Capital Holding GmbH & Cie. KG (Family Office Erck Rickmers)", kurz:"E.R. Capital Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Alsterufer 36, 20354 Hamburg",
    hqLat:53.5620, hqLng:9.9880,
    website:"ercapital.de", domain:"ercapital.de",
    linkedin:"", contactName:"Friedrich Lass-Hennemann", contactRole:"CEO", contactChannel:"ercapital.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office des Hamburger Unternehmers Erck Rickmers (Schifffahrtsvermögen der Familie Rickmers). Seit 2019 gebündelte Geschäftsfelder Immobilien, Private Equity, Energiewende-Assets und Schifffahrt. Immobilien ein Kernpfeiler mit direktem Bestand in Deutschland; genannte Objekte u.a. Hindenburghaus und Warburg-Ensemble in Hamburg sowie das Areal RAW/Stephensonstraße in Frankfurt. Ticketgrößen/Ankaufskriterien nicht detailliert veröffentlicht (Quelle: private-banking-magazin.de; hansa-online.de).",
    category:"gruen",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — bedeutendes Schifffahrts-/Unternehmerfamilienvermögen, nicht beziffert.", sources:[] },
    reQuote:{ value:0.35, basis:"extrapolation", note:"Reine Einschätzung — Immobilien einer von vier Kernbereichen.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Buero:45, Wohnen:25, Retail:15, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Innenstadt/Alster)", intensity:"hoch", usages:["Buero","Wohnen"], center:[53.5560,9.9930], radiusKm:12,
        basis:"quelle", note:"Bestätigte Objekte namentlich: Hindenburghaus und Warburg-Ensemble; exakte Adressen/Koordinaten nicht verifiziert, daher als Region gemappt.", sources:[{label:"private-banking-magazin.de",url:"https://www.private-banking-magazin.de/embargo-neue-struktur-er-capital-holding-buendelt-geschaeftsfelder-in-family-office/"}] },
      { name:"Frankfurt am Main", intensity:"mittel", usages:["Buero","Wohnen"], center:[50.1109,8.6821], radiusKm:12,
        basis:"quelle", note:"Areal RAW/Stephensonstraße (Gallus/Rebstock) als E.R.-Capital-Immobilie genannt; exakte Anschrift nicht verifiziert.", sources:[{label:"private-banking-magazin.de",url:"https://www.private-banking-magazin.de/embargo-neue-struktur-er-capital-holding-buendelt-geschaeftsfelder-in-family-office/"}] }
    ]
  },

  {
    id:"kalodion_zimmer",
    name:"Kalodion GmbH (Family Office David Zimmer)", kurz:"Kalodion",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Unter den Linden 10, 10117 Berlin",
    hqLat:52.5170, hqLng:13.3900,
    website:"kalodion.com", domain:"kalodion.com",
    linkedin:"linkedin.com/company/kalodion-gmbh", contactName:"David Zimmer / Laurence Zimmer", contactRole:"Geschäftsführung", contactChannel:"kalodion.com/impressum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 206946 B (AG Charlottenburg)",
    ankaufsprofil:"Family Office von David Zimmer (Gründer inexio, 2020 an Deutsche Glasfaser verkauft). Drei Felder: Unternehmensbeteiligungen (Early-Stage/Co-Investor, ~18 Beteiligungen), Immobilien und Social Entrepreneurship. Wachsendes Immobilienportfolio, bislang v.a. im Saarland (ehem. inexio-HQ / früheres Bundesbankgebäude in Saarlouis, Mixed-Use-Gebäude in Saarbrücken, Villa Sehmer in Saarbrücken mit 3-Sterne-Restaurant). Ankaufskriterien nicht detailliert veröffentlicht (Quelle: familyofficehub.io; listenchampion.de).",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Erlös inexio-Verkauf, Größe nicht öffentlich beziffert.", sources:[] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung — Immobilien einer von drei Bereichen, Schwerpunkt Beteiligungen/VC.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:50, Gastro:20, Wohnen:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Saarland (Saarlouis / Saarbrücken)", intensity:"mittel", usages:["Buero","Gastro","Wohnen"], center:[49.2400,6.9700], radiusKm:30,
        basis:"quelle", note:"Bestätigte Objekte namentlich: ehem. Bundesbankgebäude / inexio-HQ Saarlouis, Mixed-Use Saarbrücken, Villa Sehmer Saarbrücken; exakte Adressen/Koordinaten nicht verifiziert.", sources:[{label:"familyofficehub.io",url:"https://familyofficehub.io/blog/single-family-office-spotlight-kalodion-gmbh-berlin-germany/"}] }
    ]
  },

  {
    id:"roth_sohn_berlin",
    name:"Roth & Sohn GmbH (Familie Roth / Erbe Rafael Roth)", kurz:"Roth & Sohn",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Kurfürstendamm 178-179, 10707 Berlin",
    hqLat:52.5015, hqLng:13.3230,
    website:"roth-sohn.com", domain:"roth-sohn.com",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"kontakt@roth-sohn.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office / Familiengesellschaft Roth am Kurfürstendamm; steht in der Tradition des Berliner Immobilienunternehmers Rafael Roth (Wikipedia: renommierter Immobilieninvestor). Immobilienschwerpunkt Berlin (Wohn-/Geschäftshäuser). Konkretes, öffentlich ausgewiesenes Ankaufsprofil (Ticketgröße, Core/Value-Add) nicht ermittelbar (Quelle: roth-sohn.com; de.wikipedia.org/wiki/Rafael_Roth).",
    category:"gruen",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Immobilienvermögen der Familie Roth nicht öffentlich beziffert.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung — Familie mit ausgeprägter Immobilientradition (Rafael Roth).", sources:[] },
    reInvestedEUR:0.35,
    usage:{ Wohnen:50, Retail:25, Buero:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin (City West / Charlottenburg)", intensity:"hoch", usages:["Wohnen","Retail","Buero"], center:[52.5015,13.3230], radiusKm:12,
        basis:"quelle", note:"Sitz am Kurfürstendamm, Immobilientradition Familie Roth; Einzeladressen des Portfolios nicht öffentlich.", sources:[{label:"de.wikipedia.org — Rafael Roth",url:"https://de.wikipedia.org/wiki/Rafael_Roth"}] }
    ]
  },

  {
    id:"binding_immobilien_muc",
    name:"Binding Immobilien Verwaltungs- u. Beteiligungs GmbH & Co. KG (Familie Binding)", kurz:"Binding Immobilien",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Brienner Straße 7, 80333 München",
    hqLat:48.1450, hqLng:11.5720,
    website:"", domain:"",
    linkedin:"", contactName:"Franziska Binding-Sibeth", contactRole:"Geschäftsführung", contactChannel:"089 24208 19-12",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 89524 (AG München)",
    ankaufsprofil:"Immobilien- und Beteiligungsholding der Familie Binding (München, gegr. 2007). Verwaltet eigenen Immobilienbestand und Beteiligungen der Familie. Öffentlich kein spezifisches Ankaufsprofil (Assetklassen/Ticketgröße/Regionen) ausgewiesen — nicht öffentlich ermittelbar (Quelle: northdata/companyhouse; gelbeseiten.de).",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — private Familienholding, Größe nicht öffentlich.", sources:[] },
    reQuote:{ value:0.6, basis:"extrapolation", note:"Reine Einschätzung — Immobilien laut Firmenzweck Kern neben Beteiligungen.", sources:[] },
    reInvestedEUR:0.12,
    usage:{ Wohnen:40, Buero:35, Retail:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"München", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.1450,11.5720], radiusKm:20,
        basis:"quelle", note:"Sitz München-Altstadt, eigener Immobilienbestand der Familie Binding; Einzeladressen nicht öffentlich.", sources:[{label:"companyhouse.de",url:"https://www.companyhouse.de/Binding-Immobilien-Verwaltungs-und-Beteiligungs-GmbH-COKG-Muenchen"}] }
    ]
  },

  {
    id:"hylas_holdings_muc",
    name:"Hylas Holdings GmbH (Single Family Office / Familie von Maffei-Umfeld)", kurz:"Hylas Holdings",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Nymphenburger Straße 29, 80335 München",
    hqLat:48.1490, hqLng:11.5560,
    website:"hylas.holdings", domain:"hylas.holdings",
    linkedin:"", contactName:"Andreas Buchner", contactRole:"Geschäftsführer", contactChannel:"hylas.holdings/impressum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 117045 (AG München)",
    ankaufsprofil:"Single Family Office einer Unternehmerfamilie (München). Unterstützt die Familie bei der Verwaltung von Immobilien mit Schwerpunkt Wohnimmobilien; über den Bereich Hylas.Capital werden liquide, illiquide und laufzeitbegrenzte Anlagen gesteuert. 2019 wurden Beteiligungen in die börsennotierte Maffei GmbH & Co. KGaA (Notierung 2024) eingebracht (Hylas hält rd. ein Drittel des Kapitals / hälftige Stimmrechte). Konkrete Ankaufskriterien für Direktimmobilien nicht detailliert veröffentlicht (Quelle: hylas.holdings/portrait, /immobilien).",
    category:"gruen",
    aum:{ value:0.6, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Beteiligung an Maffei KGaA plus Immobilien-/Kapitalvermögen, nicht beziffert.", sources:[] },
    reQuote:{ value:0.4, basis:"extrapolation", note:"Reine Einschätzung — expliziter Immobilien-Schwerpunkt (Wohnen) neben Kapitalanlagen/Beteiligung.", sources:[] },
    reInvestedEUR:0.25,
    usage:{ Wohnen:70, Buero:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"München", intensity:"hoch", usages:["Wohnen"], center:[48.1490,11.5560], radiusKm:20,
        basis:"quelle", note:"Immobilienverwaltung der Familie mit Fokus Wohnen; Einzeladressen nicht öffentlich.", sources:[{label:"hylas.holdings — Immobilien",url:"https://www.hylas.holdings/immobilien"}] }
    ]
  },

  {
    id:"schoeller_group_pullach",
    name:"Schoeller Group GmbH (Familie Schoeller)", kurz:"Schoeller Group",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Zugspitzstraße 15, 82049 Pullach im Isartal",
    hqLat:48.0590, hqLng:11.5230,
    website:"schoeller.org", domain:"schoeller.org",
    linkedin:"", contactName:"Martin Schoeller / Christoph Schoeller", contactRole:"Gesellschafter / Geschäftsführung", contactChannel:"schoeller.org",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office aus der Industrieholding der Familie Schoeller (7. Generation, Ursprung Gebr. Schoeller 1799). Neben dem industriellen Kern (Mehrweg-Kunststoffsysteme, PET-Recycling, erneuerbare Energien; u.a. Schoeller Allibert mit Brookfield) betreibt die Gruppe ein eigenes Family Office mit liquider Vermögensverwaltung, Immobilien (Entwicklungen UND langfristige Bestände) sowie ausgewählten PE/VC-Investments; geografisch Europa mit Zusatz-Exposure in Nordamerika, Asien und Afrika. Konkrete Immobilien-Ankaufskriterien nicht öffentlich (Quelle: schoeller.org; altss.com; die-deutsche-wirtschaft.de).",
    category:"gelb",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Gruppe >1 Mrd € Umsatz industriell; Family-Office-Anlagevermögen nicht separat beziffert.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — Immobilien ein ausgewählter Bereich neben Industrie/PE/liquiden Anlagen.", sources:[] },
    reInvestedEUR:0.15,
    usage:{ Buero:35, Logistik:25, Wohnen:25, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Pullach", intensity:"mittel", usages:["Buero","Wohnen"], center:[48.0590,11.5230], radiusKm:25,
        basis:"quelle", note:"Sitz Pullach; Immobilien-Entwicklungen und Bestände des Family Office, Einzeladressen nicht öffentlich.", sources:[{label:"altss.com — Schoeller Group",url:"https://altss.com/profile/schoeller-group"}] }
    ]
  }

]);
