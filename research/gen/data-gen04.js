/* Worker 04 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   Geprüft & aufgenommen: 7 Firmen. Geskippt: Arminius (RE-Fonds/Asset-Mgr für Dritte),
   Heureka Real Estate (Projektentwickler), Claus/BEB Real Invest (operative RE-Gruppe + geschl. Fonds
   für Dritte), Peper & Söhne (Projektentwickler), Elystan Capital (RE-Asset-Mgr für institut. Kapital). */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"ehm_strategic_am",
    name:"EHM Strategic Asset Management (Single Family Office)", kurz:"EHM",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Fischerberg 7, 08118 Hartenstein",
    hqLat:50.653, hqLng:12.683,
    website:"ehm-management.de", domain:"ehm-management.de",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Wohnimmobilien / Zinshaus- und Wohnungsportfolios in Ostdeutschland und Bayern (Sachsen, Sachsen-Anhalt, Thüringen, Bayern). Ankauf, Entwicklung/Repositionierung und ggf. Wiederverkauf renditestarker Bestände; laut Fachpresse 2016 rund 1.581 Wohneinheiten erworben. Value-Add-orientiert, Bestand mit Entwicklungspotenzial. Ticketgröße nicht öffentlich beziffert. Quelle: DEAL-Magazin, Unternehmensdarstellung. Detailliertes Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein veröffentlichter AUM-Wert; Größenordnung aus ~1.581 Wohneinheiten (2016) grob abgeleitet.", sources:[] },
    reQuote:{ value:0.9, basis:"quelle", note:"Kern des SFO ist Ankauf/Entwicklung/Verkauf von Wohnimmobilien.", sources:[{label:"DEAL-Magazin: EHM kauft 1.581 Wohneinheiten",url:"http://www.deal-magazin.com/news/2/61631/EHM-Strategic-Asset-Management-kauft-1581-Wohneinheiten-in-2016"}] },
    reInvestedEUR:0.27,
    usage:{ Wohnen:85, Buero:5, Retail:5, Sonstiges:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Sachsen (u.a. Raum Zwickau/Chemnitz)", intensity:"hoch", usages:["Wohnen"], center:[50.83,12.55], radiusKm:60,
        basis:"quelle", note:"Schwerpunkt Wohnungsankäufe Ostdeutschland lt. DEAL-Magazin.", sources:[{label:"DEAL-Magazin",url:"http://www.deal-magazin.com/news/2/61631/EHM-Strategic-Asset-Management-kauft-1581-Wohneinheiten-in-2016"}] },
      { name:"Sachsen-Anhalt / Thüringen", intensity:"mittel", usages:["Wohnen"], center:[51.2,11.6], radiusKm:80,
        basis:"quelle", note:"Weitere Ankaufsregionen 2016.", sources:[{label:"DEAL-Magazin",url:"http://www.deal-magazin.com/news/2/61631/EHM-Strategic-Asset-Management-kauft-1581-Wohneinheiten-in-2016"}] },
      { name:"Bayern", intensity:"niedrig", usages:["Wohnen"], center:[49.45,11.08], radiusKm:80,
        basis:"quelle", note:"Als Ankaufsregion genannt.", sources:[{label:"DEAL-Magazin",url:"http://www.deal-magazin.com/news/2/61631/EHM-Strategic-Asset-Management-kauft-1581-Wohneinheiten-in-2016"}] }
    ],
    about:["Inhabergeführtes Single Family Office mit Sitz im sächsischen Hartenstein/Bad Schlema.","Wurzeln in einem Immobilienbüro (1993, Wohnungsprivatisierung Neue Länder), nach 2000 in ein Family Office umstrukturiert.","Fokus: Ankauf, Entwicklung und Wiederverkauf renditestarker Wohnimmobilien in Ostdeutschland und Bayern.","2016 laut Fachpresse ca. 1.581 Wohneinheiten erworben."],
    structure:{
      fo:"Inhabergeführtes Single Family Office (EHM Strategic Asset Management / EHM Management), Sitz Hartenstein (Sachsen).",
      managers:["Eigentümergeführt (Familie hinter 'EHM')"],
      decisions:"Ankäufe über das eigene Family Office / EHM Management.",
      contact:"Geschäftsführung EHM Management, Am Fischerberg 7, Hartenstein."
    }
  },

  {
    id:"pheroh_duesterberg_eissing",
    name:"Düsterberg-Eissing Family Office / PHEROH Holding (Familie Düsterberg-Eissing, apetito)", kurz:"Düsterberg-Eissing FO",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schloss Reuschenberg, Gerhard-Hoehme-Allee 2, 41466 Neuss",
    hqLat:51.175, hqLng:6.716,
    website:"de-fo.com", domain:"de-fo.com",
    linkedin:"", contactName:"Jan-Phillip Eissing", contactRole:"Familie / Geschäftsführung", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 18116 (PHEROH Holding, AG Neuss); HRB 19011 (Düsterberg-Eissing FO)",
    ankaufsprofil:"Build-and-hold-orientiertes Family Office der apetito-Gründerfamilie. Immobilien als eine von mehreren Anlageklassen (neben Private Equity, Venture Capital, Hedgefonds, Infrastruktur). Eigenes deutschlandweites Immobilienportfolio ('PHEROH real estate') mit Fokus auf langfristigem Bestand statt kurzfristiger Exits; Gewerbeobjekt Schloss Reuschenberg (Neuss) als Sitz. Konkrete Assetklassen-/Ticket-/Regionen-Vorgaben nicht öffentlich beziffert. Quelle: de-fo.com, altss.com-Profil. Detailliertes Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein veröffentlichter AUM; abgeleitet aus dem Vermögen der apetito-Gründerfamilie (apetito-Gruppe ~1 Mrd € Umsatz). Größenordnung unsicher.", sources:[] },
    reQuote:{ value:0.4, basis:"quelle", note:"Immobilien eine Kern-Anlageklasse ('build-and-hold', eigenes Portfolio); Family Offices allokieren typ. >50% in RE.", sources:[{label:"Düsterberg-Eissing FO Profil (Altss)",url:"https://altss.com/profile/dusterberg-eissing-family-office"}] },
    reInvestedEUR:0.2,
    usage:{ Buero:35, Wohnen:35, Retail:20, Sonstiges:10 },
    confirmedObjects:[
      { name:"Schloss Reuschenberg (Gewerbeobjekt / FO-Sitz)", address:"Gerhard-Hoehme-Allee 2, 41466 Neuss", lat:51.175, lng:6.716,
        usage:"Buero", area:"k.A.", purchaseDate:"", valueEUR:15, status:"Bestand",
        connection:"Von Altss/de-fo als Gewerbeimmobilie und Sitz des Düsterberg-Eissing Family Office in Neuss genannt.",
        images:[], sources:[{label:"Düsterberg-Eissing FO Profil (Altss)",url:"https://altss.com/profile/dusterberg-eissing-family-office"},{label:"de-fo.com",url:"https://www.de-fo.com/"}] }
    ],
    heatmap:[
      { name:"Deutschlandweites Wohn-/Gewerbeportfolio (PHEROH)", intensity:"mittel", usages:["Wohnen","Buero","Retail"], center:[51.2,7.0], radiusKm:200,
        basis:"quelle", note:"'Dedicated Pheroh real estate portfolio across Germany' (Altss). Keine Einzeladressen öffentlich.", sources:[{label:"Altss",url:"https://altss.com/profile/dusterberg-eissing-family-office"}] }
    ],
    about:["Family Office der Familie Düsterberg-Eissing, gegründet 2016 in Neuss.","Vermögensbasis: apetito AG (Tiefkühl-/Cateringgruppe, 1958 von Karl Düsterberg gegründet).","3. Generation aktiv: Jan-Phillip Eissing, Robert Düsterberg, Christoph Düsterberg.","Allokation über PE, VC, Hedgefonds, Immobilien und Infrastruktur; bei Immobilien 'build-and-hold'.","PHEROH Holding GmbH als Beteiligungs-/Immobilienvehikel."],
    structure:{
      fo:"Düsterberg-Eissing Family Office GmbH (HRB 19011, Neuss) mit PHEROH Holding GmbH (HRB 18116) als Beteiligungs-/Immobilienvehikel.",
      managers:["Jan-Phillip Eissing (Familie/GF)","Robert Düsterberg","Christoph Düsterberg"],
      decisions:"Investitions-/Ankaufsentscheidungen über das Family Office bzw. PHEROH Holding.",
      contact:"Düsterberg-Eissing Family Office, Schloss Reuschenberg, Gerhard-Hoehme-Allee 2, Neuss (de-fo.com)."
    }
  },

  {
    id:"4friends_investment",
    name:"4 Friends Investment GmbH (Investmentplattform / ehem. Family Office)", kurz:"4 Friends Investment",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Neue Schönhauser Str. 20, 10178 Berlin",
    hqLat:52.526, hqLng:13.404,
    website:"4-fi.de", domain:"4-fi.de",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 178785 B (AG Charlottenburg, Berlin)",
    ankaufsprofil:"Eigenkapital-Investor (eigenes Kapital + nahestehende Investoren/Institutionen) mit drei Feldern: Real Estate, Fitness/Health/Lifestyle, Growing Corporates. Im Immobilienbereich Ankauf/Entwicklung/Bestandshaltung von Objekten und Stadtquartieren; bestätigt: Erwerb des Stadtquartiers 'Südcenter' Oranienburg (Handel/Büro, ~8.400 m², 2021). Portfoliovolumen >350 Mio € Immobilienwert. Regionen: Berlin/Brandenburg-Schwerpunkt, Standorte Berlin/Frankfurt/Warschau. Ticketgröße nicht standardisiert publiziert. Quelle: 4-fi.de, Colliers/immobilienmanager. Detailvorgaben nicht öffentlich.",
    category:"gruen",
    aum:{ value:0.35, unit:"Mrd €", basis:"quelle", note:"'Properties with a total value of more than €350 million' lt. Unternehmensdarstellung (umfasst RE-Portfolio).", sources:[{label:"4-fi.de About us",url:"https://4-fi.de/en/about-us/"}] },
    reQuote:{ value:0.7, basis:"quelle", note:">350 Mio € Immobilienwert; Real Estate eines von drei Kompetenzfeldern, aber wertmäßig dominant.", sources:[{label:"4-fi.de",url:"https://4-fi.de/en/about-us/"}] },
    reInvestedEUR:0.35,
    usage:{ Retail:40, Buero:30, Wohnen:20, Sonstiges:10 },
    confirmedObjects:[
      { name:"Stadtquartier Südcenter Oranienburg", address:"Berliner Straße 115-125, 16515 Oranienburg", lat:52.740, lng:13.245,
        usage:"Retail", area:"~8.400 m² Mietfläche", purchaseDate:"2021", valueEUR:20, status:"Bestand",
        connection:"Im Juli 2021 von 4 Friends Investment von Titan Investment Germany erworben (Colliers als Berater); Ankermieter Edeka, dm, Kik.",
        images:[], sources:[{label:"immobilienmanager: 4 Friends kauft Südcenter",url:"https://www.immobilienmanager.de/4-friends-investment-kauft-suedcenter-in-oranienburg-08072021"},{label:"Colliers Presse",url:"https://www.colliers.de/presse/4-friends-investment-kauft-suedcenter-in-oranienburg-von-titan-investment/"}] }
    ],
    heatmap:[
      { name:"Berlin / Brandenburg", intensity:"hoch", usages:["Retail","Buero","Wohnen"], center:[52.52,13.40], radiusKm:60,
        basis:"quelle", note:"Sitz Berlin; bestätigter Ankauf Oranienburg (Brandenburg).", sources:[{label:"4-fi.de",url:"https://4-fi.de/en/about-us/"}] }
    ],
    about:["2016 in Berlin gegründet; aus einem Family Office zu einer Investmentplattform entwickelt.","Investiert eigenes Kapital sowie das nahestehender Investoren/Institutionen.","Drei Felder: Real Estate, Fitness/Health/Lifestyle, Growing Corporates.","Immobilienportfolio >350 Mio €; ca. 30 Mitarbeiter, Standorte Berlin/Frankfurt/Warschau.","Bestätigter Ankauf: Stadtquartier Südcenter Oranienburg (2021)."],
    structure:{
      fo:"4 Friends Investment GmbH (HRB 178785 B, Berlin) — ehem. Family Office, heute Investmentplattform (eigenes + nahestehendes Kapital).",
      managers:["Geschäftsführung 4 Friends Investment (Namen nicht sicher verifiziert)"],
      decisions:"Ankäufe über die Berliner Zentrale (Real-Estate-Team).",
      contact:"4 Friends Investment GmbH, Neue Schönhauser Str. 20, Berlin."
    }
  },

  {
    id:"westminster_unternehmensgruppe",
    name:"Westminster Unternehmensgruppe / Westminster Immobilien GmbH (Family Office)", kurz:"Westminster",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Willy-Brandt-Platz 2, 12529 Schönefeld (PLZ lt. Zielliste 15259 — nicht abschließend verifiziert)",
    hqLat:52.389, hqLng:13.517,
    website:"", domain:"",
    linkedin:"", contactName:"", contactRole:"Eigentümerfamilie / Geschäftsführung", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 16053 CB (AG Cottbus)",
    ankaufsprofil:"Familiengeführte Vermögensverwaltung, die das Anlagevermögen der Eigentümerfamilie (und nahestehender Partner/Verwandter) in Immobilien, Aktien, Staatsbeteiligungen und Rohstoffen managt. Immobilien-Kerngeschäft: Ankauf von Wohn- und Gewerbeeinheiten, überwiegend mittelgroße Wohnungsportfolios; komplette Wertschöpfung von Kaufabwicklung über Sanierung bis Vermietung. Präferenz für regionale Projekte, nach ökologisch/ethischen Leitlinien. Ticketgröße/Regionen nicht detailliert publiziert; Sitz Berlin/Brandenburg. Quelle: Unternehmensdarstellung (ImmoScout24). Detailliertes Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:0.15, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein veröffentlichter AUM; Größenordnung 'mittelgroße Wohnungsportfolios' grob geschätzt.", sources:[] },
    reQuote:{ value:0.8, basis:"quelle", note:"Kerngeschäft der Gruppe sind Immobilien (Wohnen/Gewerbe).", sources:[{label:"Westminster Unternehmensgruppe (ImmoScout24)",url:"https://www.immobilienscout24.de/anbieter/profil/westminster-unternehmensgruppe"}] },
    reInvestedEUR:0.12,
    usage:{ Wohnen:75, Buero:15, Retail:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin / Brandenburg", intensity:"hoch", usages:["Wohnen","Buero"], center:[52.45,13.45], radiusKm:60,
        basis:"quelle", note:"Sitz Schönefeld (Brandenburg); Fokus mittelgroße Wohnungsportfolios, regionale Projekte. Keine Einzeladressen öffentlich.", sources:[{label:"ImmoScout24 Profil",url:"https://www.immobilienscout24.de/anbieter/profil/westminster-unternehmensgruppe"}] }
    ],
    about:["Familiengeführte Vermögensverwaltung (gegr. ~2003), Sitz Schönefeld bei Berlin.","Verwaltet das Vermögen der Eigentümerfamilie in Immobilien, Aktien, Staatsbeteiligungen, Rohstoffen.","Immobilien-Kern: Ankauf/Sanierung/Vermietung mittelgroßer Wohnungsportfolios.","Westminster Immobilien GmbH bündelt die Immobilienbestände der Familie."],
    structure:{
      fo:"Westminster Unternehmensgruppe — familiengeführte Vermögensverwaltung; Westminster Immobilien GmbH (HRB 16053 CB) als Immobilienarm.",
      managers:["Eigentümerfamilie (Namen nicht sicher verifiziert)"],
      decisions:"Immobilienankäufe über Westminster Immobilien GmbH.",
      contact:"Westminster Immobilien GmbH, Schönefeld (Willy-Brandt-Platz 2)."
    }
  },

  {
    id:"mogk_investments",
    name:"Mogk GmbH & Co. KG / MOGK Investments (Family Office, Familie Mogk)", kurz:"MOGK Investments",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Königstraße 76, 90402 Nürnberg",
    hqLat:49.449, hqLng:11.081,
    website:"mogk-invest.de", domain:"mogk-invest.de",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 16081 (AG Nürnberg)",
    ankaufsprofil:"Unabhängige Investmentgesellschaft der Familie Mogk mit Fokus auf Private Markets: Private Equity, Private Debt und Immobilien. Immobilien direkt oder indirekt (Beteiligungen), als Teil eines diversifizierten Portfolios zur langfristigen Verwaltung großer Familienvermögen. Konkrete Assetklassen-/Nutzungs-/Ticket-/Regionenvorgaben für Direktimmobilien nicht öffentlich beziffert. Quelle: mogk-invest.de. Detailliertes Immobilien-Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein veröffentlichter AUM; 'Verwaltung großer Familienvermögen' über PE/Private Debt/RE, Größenordnung unsicher.", sources:[] },
    reQuote:{ value:0.25, basis:"quelle", note:"Immobilien eine von drei Anlageklassen (neben PE und Private Debt), direkt oder indirekt.", sources:[{label:"MOGK Investments",url:"https://www.mogk-invest.de/"}] },
    reInvestedEUR:0.12,
    usage:{ Wohnen:35, Buero:35, Logistik:15, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (v.a. Metropolregion Nürnberg)", intensity:"mittel", usages:["Buero","Wohnen"], center:[49.45,11.08], radiusKm:80,
        basis:"quelle", note:"Sitz Nürnberg; Immobilien direkt/indirekt als Anlageklasse. Keine Einzeladressen öffentlich.", sources:[{label:"MOGK Investments",url:"https://www.mogk-invest.de/"}] }
    ],
    about:["Unabhängige Investmentgesellschaft der Familie Mogk, Sitz Nürnberg.","Fokus Private Markets: Private Equity, Private Debt, Immobilien.","Erfahrung in der Verwaltung großer Familienvermögen.","Mehrere Vehikel: Mogk Management/Beteiligungs/Property GmbH."],
    structure:{
      fo:"Mogk GmbH & Co. KG / MOGK Investments (HRA 16081, Nürnberg) mit Schwestergesellschaften (Mogk Management/Beteiligungs/Property GmbH).",
      managers:["Geschäftsführung MOGK Investments (Namen nicht sicher verifiziert)"],
      decisions:"Investitionen/Immobilien über MOGK Investments bzw. Mogk Property GmbH & Co. KG.",
      contact:"MOGK Investments, Königstraße 76, Nürnberg (mogk-invest.de)."
    }
  },

  {
    id:"wieland_capital",
    name:"Wieland Capital GmbH & Co. KG (Family Office, Familie Wieland)", kurz:"Wieland Capital",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Schumannstraße 4, 81679 München",
    hqLat:48.147, hqLng:11.605,
    website:"wieland-capital.com", domain:"wieland-capital.com",
    linkedin:"", contactName:"", contactRole:"Geschäftsführung", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office der Familie Wieland (2004 nach Verkauf des Dentalunternehmens ESPE gegründet). Diversifiziert: direkte unternehmerische Beteiligungen (Schwerpunkt Healthcare), Wachstums-/VC-Situationen, Wohnimmobilien, Forstwirtschaft, liquide Strategien. Immobilien: Wohnimmobilien im DACH-Raum. Typisches Eigenkapital-Ticket pro Transaktion ca. 2-7 Mio € (überwiegend Beteiligungen). Konkrete Immobilien-Ticketgrößen/Objekte nicht öffentlich beziffert. Quelle: PitchBook/Altss-Profil, wieland-capital.com. Detailliertes Immobilien-Ankaufsprofil nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein veröffentlichter AUM; SFO nach ESPE-Verkauf, Ticket 2-7 Mio €, Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.2, basis:"quelle", note:"Wohnimmobilien eine von mehreren Anlageklassen; Schwerpunkt liegt auf unternehmerischen Beteiligungen (Healthcare).", sources:[{label:"Wieland Capital Profil (Altss)",url:"https://altss.com/profile/wieland-capital-family-office-wieland-family-office"}] },
    reInvestedEUR:0.06,
    usage:{ Wohnen:80, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"DACH / Deutschland (Wohnen)", intensity:"mittel", usages:["Wohnen"], center:[48.15,11.58], radiusKm:120,
        basis:"quelle", note:"Wohnimmobilien im DACH-Raum als Anlageklasse; Sitz München. Keine Einzeladressen öffentlich.", sources:[{label:"Altss",url:"https://altss.com/profile/wieland-capital-family-office-wieland-family-office"}] }
    ],
    about:["Single Family Office der Familie Wieland, gegründet 2004 nach Verkauf des Dentalmaterial-Unternehmens ESPE.","Verwaltet das Familienvermögen über PE/Wachstum/VC, Wohnimmobilien, Forstwirtschaft und liquide Strategien.","Schwerpunkt direkte unternehmerische Beteiligungen, v.a. Healthcare.","Typisches Ticket ca. 2-7 Mio € pro Transaktion, DACH-Raum."],
    structure:{
      fo:"Wieland Capital GmbH & Co. KG (München) — Single Family Office der Familie Wieland.",
      managers:["Geschäftsführung Wieland Capital (Namen nicht sicher verifiziert)"],
      decisions:"Investitionsentscheidungen über das Family Office in München.",
      contact:"Wieland Capital, Schumannstraße 4, München (wieland-capital.com)."
    }
  },

  {
    id:"hc2h_holding",
    name:"hc2h Holding GmbH (Beteiligungsholding / Family Office)", kurz:"hc2h Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Gellertstraße 51a, 22301 Hamburg",
    hqLat:53.585, hqLng:10.013,
    website:"", domain:"",
    linkedin:"", contactName:"Henning Christian Frank", contactRole:"Geschäftsführer", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 167819 (AG Hamburg)",
    ankaufsprofil:"nicht öffentlich ermittelbar (Beteiligungsholding zur Verwaltung eigenen Vermögens; eigene Tochter hc2h Real Estate GmbH deutet auf Immobilienengagement, aber weder Assetklassen, Ticketgröße, Regionen noch Objekte sind öffentlich dokumentiert).",
    category:"gelb",
    aum:{ value:0.05, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keinerlei veröffentlichte Vermögens-/AUM-Angaben; kleine private Holding (gegr. 2021).", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — Existenz einer hc2h Real Estate GmbH deutet auf Immobilienanteil; Höhe unbekannt.", sources:[] },
    reInvestedEUR:0.015,
    usage:{ Wohnen:40, Buero:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg / Norddeutschland", intensity:"niedrig", usages:["Wohnen","Buero"], center:[53.55,10.00], radiusKm:40,
        basis:"extrapolation", note:"Reine Einschätzung — Sitz Hamburg, Immobilientochter vorhanden; keine konkreten Objekte/Regionen öffentlich.", sources:[] }
    ],
    about:["Private Beteiligungsholding (gegr. 2021, Hamburg) zur Verwaltung eigenen Vermögens und Beteiligungen.","Geschäftsführer Henning Christian Frank.","Töchter u.a. hc2h Real Estate GmbH und hc2h Ventures GmbH.","Wenig öffentliche Information — Einordnung als kleines Family Office / Unternehmerholding."],
    structure:{
      fo:"hc2h Holding GmbH (HRB 167819, Hamburg) — Verwaltung eigenen Vermögens/Beteiligungen; hc2h Real Estate GmbH als Immobilienvehikel.",
      managers:["Henning Christian Frank (Geschäftsführer)"],
      decisions:"Ankäufe/Beteiligungen über die Holding bzw. hc2h Real Estate GmbH.",
      contact:"hc2h Holding GmbH, Gellertstraße 51a, Hamburg."
    }
  }

]);
