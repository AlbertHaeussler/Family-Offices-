/* Worker 18 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   WICHTIGER HINWEIS: In dieser Session war KEIN Live-Web-Zugriff möglich (WebSearch-Budget
   erschöpft, WebFetch liefert flächendeckend HTTP 403 vom Egress-Proxy). Es konnten daher
   keine Impressums-/Portfolio-/Presseseiten live geladen und keine Adressen/Objekte belegt
   werden. Alle Firmen unten beruhen auf vorhandenem Recherchewissen (Stand ~Anf. 2026) und
   sind ehrlich als basis:"extrapolation" (sources:[]) markiert. KEINE confirmedObjects, da
   keine Quelle live verifizierbar war (Objekte sind — wo bekannt — in den Notizen genannt).
   Firmen, die sich nicht als Family Office verifizieren ließen bzw. eher operativ/Dritt-Fonds
   sind, wurden geskippt (siehe Bericht). */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"friba_luerssen",
    name:"FRIBA Investment GmbH & Co. KG (Family Office Lürßen)", kurz:"FRIBA / Lürßen",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Zum Alten Speicher 11, 28759 Bremen (Bremen-Vegesack; laut Zielliste)",
    hqLat:53.1662, hqLng:8.6150,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Lürßen", contactRole:"Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (in dieser Session keine Live-Web-Verifikation möglich). FRIBA ist das Vermögens-/Beteiligungsvehikel der Bremer Unternehmerfamilie Lürßen (Fr. Lürssen Werft / NVL, Yacht- und Marineschiffbau). Ein konkretes Immobilien-Ankaufsprofil (Assetklassen, Ticket, Regionen) ist öffentlich nicht dokumentiert.",
    category:"gelb",
    aum:{ value:2.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; sehr vermögende Werften-Familie (Lürssen/NVL). Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung — RE-Anteil unbekannt; Familienvermögen liegt primär im operativen Schiffbau. Kein öffentliches Immobilienportfolio bekannt.", sources:[] },
    reInvestedEUR:0.3,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Bremen / Nordwesten", intensity:"niedrig", usages:["Buero","Wohnen"], center:[53.12,8.68], radiusKm:30,
        basis:"extrapolation", note:"Sitz-Region Bremen (Vegesack). Kein belegtes Einzelobjekt; Zuordnung rein über den Familiensitz.", sources:[] }
    ]
  },

  {
    id:"blackhorse_schwarzschuette",
    name:"Black Horse Investments GmbH (Family Office Patrick Schwarz-Schütte)", kurz:"Black Horse Investments",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Dreischeibenhaus, Dreischeibenhaus 1 (August-Thyssen-Str. 1), 40211 Düsseldorf (laut Zielliste; Hausnr. nicht live verifiziert)",
    hqLat:51.2262, hqLng:6.7855,
    website:"", domain:"",
    linkedin:"", contactName:"Patrick Schwarz-Schütte", contactRole:"Inhaber / Unternehmer", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich als formales Ankaufsprofil ermittelbar (keine Live-Verifikation in dieser Session). Aus Recherchewissen: Patrick Schwarz-Schütte (Erbe der Familie Schwarz-Schütte, ehem. Schwarz Pharma, verkauft an UCB 2006) investiert über Black Horse Investments u.a. in Beteiligungen und hochwertige Landmark-Immobilien in Düsseldorf. Prominentes Beispiel: Erwerb & Revitalisierung des denkmalgeschützten Dreischeibenhauses in Düsseldorf (JV mit Momeni). Ticket/Regionen/Strategie nicht förmlich publiziert.",
    category:"gruen",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; Familienvermögen aus Verkauf Schwarz Pharma an UCB (2006). Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.35, basis:"extrapolation", note:"Reine Einschätzung — Immobilien (u.a. Dreischeibenhaus) sind ein sichtbarer Investmentbereich; exakter Anteil nicht öffentlich beziffert.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Buero:70, Retail:15, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf", intensity:"mittel", usages:["Buero"], center:[51.2262,6.7855], radiusKm:15,
        basis:"extrapolation", note:"Bekannt (aus Recherchewissen, in dieser Session nicht live belegbar): Dreischeibenhaus Düsseldorf (August-Thyssen-Str. 1, 40211), Büro-Hochhaus, revitalisiert im JV mit Momeni. Als heatmap statt confirmedObject geführt, da keine Live-Quelle verifizierbar.", sources:[] }
    ]
  },

  {
    id:"stofanel_stoffel",
    name:"STOFANEL Investment AG (Familie Stoffel)", kurz:"STOFANEL",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Unter den Linden 78, 10117 Berlin (laut Zielliste)",
    hqLat:52.5163, hqLng:13.3800,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Stoffel", contactRole:"Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Aus Recherchewissen (nicht live in dieser Session verifiziert): STOFANEL ist die Investmentgesellschaft der Unternehmerfamilie Stoffel mit ausgeprägtem Immobilien-Fokus, historisch hochwertige Wohn-/Mixed-Use-Entwicklungen in Berliner Top-Lagen (z.B. Projekte 'yoo berlin', 'Marthashof Urban Village' in Prenzlauer Berg, 'Prenzlauer Gärten'). Assetklasse v.a. Wohnen/Design-Residential, Fokus Berlin; formelles Ankaufsprofil (Ticket, Core/Value-Add) nicht öffentlich beziffert.",
    category:"gruen",
    aum:{ value:0.8, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; familieneigene Immobilien-Investmentgesellschaft. Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung — Immobilien sind das erkennbare Kerngeschäft (Berliner Wohn-/Mixed-Use-Projekte); exakter Anteil nicht öffentlich.", sources:[] },
    reInvestedEUR:0.6,
    usage:{ Wohnen:75, Buero:10, Retail:10, Gastro:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin", intensity:"mittel", usages:["Wohnen"], center:[52.53,13.41], radiusKm:20,
        basis:"extrapolation", note:"Bekannt (aus Recherchewissen, nicht live belegbar): Berliner Wohn-/Mixed-Use-Projekte u.a. Marthashof (Prenzlauer Berg), yoo berlin, Prenzlauer Gärten. Als heatmap statt confirmedObjects geführt, da keine exakte Live-Quelle verifizierbar.", sources:[] }
    ]
  },

  {
    id:"mankel_fo",
    name:"Mankel Family Office GmbH (Familie Mankel)", kurz:"Mankel Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Am Kaiser 7, 58256 Ennepetal (laut Zielliste)",
    hqLat:51.3030, hqLng:7.3620,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Mankel", contactRole:"Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (keine Live-Web-Verifikation in dieser Session möglich). Firmiert ausdrücklich als Family Office der Familie Mankel (Ennepetal). Konkrete Assetklassen, Ticketgrößen, Regionen oder Immobilienstrategie sind öffentlich nicht dokumentiert.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; kleineres/mittleres Single Family Office. Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — RE-Anteil unbekannt; typische FO-Allokation mit Immobilienanteil angenommen, nicht belegt.", sources:[] },
    reInvestedEUR:0.09,
    usage:{ Wohnen:45, Buero:35, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Bergisches Land / Ennepetal (Raum Wuppertal-Hagen)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[51.30,7.36], radiusKm:30,
        basis:"extrapolation", note:"Sitz-Region. Kein belegtes Einzelobjekt; Zuordnung rein über den Firmensitz.", sources:[] }
    ]
  },

  {
    id:"gs_realestate_solms",
    name:"GS Real Estate GmbH (Familie zu Solms-Laubach)", kurz:"GS Real Estate",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Roseggerstraße 31, 60320 Frankfurt am Main (laut Zielliste)",
    hqLat:50.1380, hqLng:8.6720,
    website:"", domain:"",
    linkedin:"", contactName:"Familie zu Solms-Laubach", contactRole:"Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (keine Live-Web-Verifikation in dieser Session). Immobilien-Investmentvehikel im Umfeld der (gräflichen) Familie zu Solms-Laubach, Sitz Frankfurt. Konkrete Assetklassen, Ticketgrößen, Regionen, Core/Value-Add-Ausrichtung öffentlich nicht dokumentiert.",
    category:"gelb",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; familiennahes RE-Vehikel. Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.6, basis:"extrapolation", note:"Reine Einschätzung — Namensgebung ('Real Estate') deutet auf Immobilien-Schwerpunkt; exakter Anteil nicht belegt.", sources:[] },
    reInvestedEUR:0.24,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main / Frankfurt", intensity:"niedrig", usages:["Buero","Wohnen"], center:[50.11,8.68], radiusKm:30,
        basis:"extrapolation", note:"Sitz-Region Frankfurt. Kein belegtes Einzelobjekt; Zuordnung über den Firmensitz.", sources:[] }
    ]
  },

  {
    id:"devario_toeller",
    name:"Devario Invest GmbH (Familie Toeller)", kurz:"Devario Invest",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Rheinpromenade 9, 40789 Monheim am Rhein (laut Zielliste)",
    hqLat:51.0955, hqLng:6.8820,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Toeller", contactRole:"Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (keine Live-Web-Verifikation in dieser Session). Investment-/Vermögensvehikel der Familie Toeller mit Sitz an der Rheinpromenade in Monheim am Rhein. Assetklassen, Ticketgrößen, Regionen und Immobilienstrategie öffentlich nicht dokumentiert.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; Family Office / Investmentgesellschaft. Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — RE-Anteil unbekannt; angenommene FO-typische Immobilienquote, nicht belegt.", sources:[] },
    reInvestedEUR:0.09,
    usage:{ Buero:40, Wohnen:40, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rheinland / Monheim-Düsseldorf-Köln", intensity:"niedrig", usages:["Buero","Wohnen"], center:[51.09,6.88], radiusKm:30,
        basis:"extrapolation", note:"Sitz-Region Monheim am Rhein. Kein belegtes Einzelobjekt; Zuordnung über den Firmensitz.", sources:[] }
    ]
  },

  {
    id:"lcl_lammerting",
    name:"LCL Immobilien Düsseldorf GmbH (Familie Lammerting)", kurz:"LCL Immobilien",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Werftstraße 25, 40549 Düsseldorf (Düsseldorf-Heerdt; laut Zielliste)",
    hqLat:51.2360, hqLng:6.7420,
    website:"", domain:"",
    linkedin:"", contactName:"Familie Lammerting", contactRole:"Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar (keine Live-Web-Verifikation in dieser Session). Immobilien-Vehikel der Familie Lammerting mit Sitz in Düsseldorf. Assetklassen, Ticketgrößen, Regionen und Core/Value-Add-Ausrichtung öffentlich nicht dokumentiert. Abgrenzung operatives Unternehmen vs. reines Familienvermögen konnte nicht live geprüft werden.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — keine belegte AUM-Zahl; familiennahes Immobilien-Vehikel. Größenordnung grob geschätzt, nicht verifiziert.", sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation", note:"Reine Einschätzung — Namensgebung ('Immobilien') deutet klaren RE-Schwerpunkt an; exakter Anteil nicht belegt.", sources:[] },
    reInvestedEUR:0.21,
    usage:{ Wohnen:50, Buero:35, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Düsseldorf / Rheinland", intensity:"niedrig", usages:["Wohnen","Buero"], center:[51.23,6.77], radiusKm:20,
        basis:"extrapolation", note:"Sitz-Region Düsseldorf. Kein belegtes Einzelobjekt; Zuordnung über den Firmensitz.", sources:[] }
    ]
  }

]);
