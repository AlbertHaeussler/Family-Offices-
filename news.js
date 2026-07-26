/* =========================================================================
   Family Offices - NEWS-Datensatz  (Markt-Radar / Deal-News)
   -------------------------------------------------------------------------
   Ziel: aus News ableiten, WER WO WAS gekauft/verkauft hat, um beim Verkauf
   einer Immobilie schnell die passenden Käufer zu finden.

   status:
     "besitzt"  -> gekauft und (laut News) NICHT wieder verkauft  = GRÜN
     "besessen" -> gekauft und wieder verkauft, ODER nur verkauft = ROT

   Feld-Schema pro News-Eintrag:
     id          eindeutige ID
     firma       Käufer/Verkäufer (Anzeigename)
     firmaId     optional: id aus FO_DATA (window.FO_DATA), sonst ""
     rolle       "Käufer" | "Verkäufer"
     status      "besitzt" | "besessen"   (siehe oben)
     objekt      Name/Bezeichnung der Immobilie
     objektart   Nutzungs-Key aus USAGE_LABELS: Buero|Wohnen|Retail|Logistik|Hotel|Gastro|Sonstiges
     stadt       Stadt
     region      grössere Region/Bundesland (für Umkreis-Text)
     lat,lng     Koordinaten (für Pin)
     wertMioEUR  Deal-Volumen in Mio € (Schätzung/Presse), null wenn unbekannt
     datum       ISO-Datum der Meldung/des Deals (YYYY-MM-DD)
     headline    Schlagzeile
     summary     1-2 Sätze Zusammenfassung (menschlich lesbar)
     quelle      { label, url }
     _stand      Datenstand (für "sammeln & updaten")

   Diese Datei ist bewusst wie data.js aufgebaut: statisch, versioniert,
   per Extraktion nachfüllbar/aktualisierbar. Beispieldaten unten sind
   realistisch modelliert, aber Platzhalter – echte Extraktion ersetzt sie.
   ========================================================================= */

window.FO_NEWS_STAND = "2026-07";

window.FO_NEWS = [
  // ---------------- BERLIN ----------------
  { id:"n-be-001", firma:"Quantum Immobilien Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Bürocampus Mediaspree", objektart:"Buero", stadt:"Berlin", region:"Berlin",
    lat:52.5015, lng:13.4520, wertMioEUR:210, datum:"2026-03-12",
    headline:"Family Office sichert sich Büroensemble an der Spree",
    summary:"Ein Hamburger Family Office erwirbt einen voll vermieteten Bürocampus in Berlin-Friedrichshain als langfristiges Core-Investment.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  { id:"n-be-002", firma:"Becker Vermögensverwaltung", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Wohnportfolio Prenzlauer Berg (240 WE)", objektart:"Wohnen", stadt:"Berlin", region:"Berlin",
    lat:52.5385, lng:13.4245, wertMioEUR:96, datum:"2025-11-04",
    headline:"240 Wohnungen in Prenzlauer Berg wechseln den Eigentümer",
    summary:"Ein süddeutsches Single Family Office kauft ein Wohnportfolio mit 240 Einheiten und will langfristig halten.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  { id:"n-be-003", firma:"Nordlicht Capital (SFO)", firmaId:"", rolle:"Verkäufer", status:"besessen",
    objekt:"Geschäftshaus Friedrichstraße", objektart:"Retail", stadt:"Berlin", region:"Berlin",
    lat:52.5170, lng:13.3888, wertMioEUR:78, datum:"2025-06-20",
    headline:"Family Office trennt sich von Einzelhandelsobjekt in Mitte",
    summary:"Nach acht Jahren Haltedauer verkauft das Family Office ein Geschäftshaus in der Friedrichstraße an einen institutionellen Investor.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  { id:"n-be-004", firma:"Otto Family Office (CURA)", firmaId:"otto", rolle:"Käufer", status:"besitzt",
    objekt:"Mixed-Use-Quartier Alexanderplatz", objektart:"Sonstiges", stadt:"Berlin", region:"Berlin",
    lat:52.5219, lng:13.4132, wertMioEUR:320, datum:"2026-01-28",
    headline:"CURA/ECE steigt bei Berliner Mixed-Use-Quartier ein",
    summary:"Das Otto Family Office beteiligt sich an einem gemischt genutzten Quartier mit Handel, Büro und Hotel am Alexanderplatz.",
    quelle:{ label:"private-banking-magazin", url:"https://www.private-banking-magazin.de/" }, _stand:"2026-07" },

  { id:"n-be-005", firma:"Meridian Estates FO", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Bürohaus Berlin-Mitte", objektart:"Buero", stadt:"Berlin", region:"Berlin",
    lat:52.5240, lng:13.4010, wertMioEUR:64, datum:"2024-09-15",
    headline:"Family Office kauft Bürohaus in Berlin-Mitte",
    summary:"Ein belgisches Family Office erwirbt ein saniertes Bürohaus mit Behördenmietern in zentraler Lage.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  // ---------------- MÜNCHEN ----------------
  { id:"n-mu-001", firma:"Alpenraute Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Büroturm Werksviertel", objektart:"Buero", stadt:"München", region:"Bayern",
    lat:48.1268, lng:11.6025, wertMioEUR:180, datum:"2026-05-02",
    headline:"Münchner Family Office kauft Büroturm im Werksviertel",
    summary:"Ein Münchner Family Office sichert sich einen Büroturm mit Tech-Mietern als Bestandsinvestment.",
    quelle:{ label:"Süddeutsche Immobilien", url:"https://www.sueddeutsche.de/" }, _stand:"2026-07" },

  { id:"n-mu-002", firma:"Wittelsbacher Privatkontor", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Wohnanlage Bogenhausen (120 WE)", objektart:"Wohnen", stadt:"München", region:"Bayern",
    lat:48.1520, lng:11.6180, wertMioEUR:140, datum:"2025-08-19",
    headline:"120 Wohnungen in Bogenhausen an Family Office verkauft",
    summary:"Ein Family Office erwirbt eine hochwertige Wohnanlage in Bogenhausen und plant langfristigen Bestand.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  { id:"n-mu-003", firma:"Isar Kapital (MFO)", firmaId:"", rolle:"Verkäufer", status:"besessen",
    objekt:"Hotel am Hauptbahnhof", objektart:"Hotel", stadt:"München", region:"Bayern",
    lat:48.1401, lng:11.5590, wertMioEUR:95, datum:"2025-03-08",
    headline:"Multi Family Office verkauft Hotel in München",
    summary:"Nach fünf Jahren trennt sich ein Multi Family Office von einem 4-Sterne-Hotel nahe dem Hauptbahnhof.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  { id:"n-mu-004", firma:"Alpenraute Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Logistikzentrum München-Nord", objektart:"Logistik", stadt:"München", region:"Bayern",
    lat:48.2200, lng:11.5900, wertMioEUR:72, datum:"2026-04-22",
    headline:"Family Office erweitert Logistikbestand im Münchner Norden",
    summary:"Das Family Office kauft eine neue Logistikhalle und baut damit sein Logistikportfolio in der Region weiter aus.",
    quelle:{ label:"Logistik Heute", url:"https://www.logistik-heute.de/" }, _stand:"2026-07" },

  // ---------------- HAMBURG ----------------
  { id:"n-ha-001", firma:"Elbufer Vermögen (SFO)", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Kontorhaus HafenCity", objektart:"Buero", stadt:"Hamburg", region:"Hamburg",
    lat:53.5410, lng:9.9985, wertMioEUR:130, datum:"2026-02-11",
    headline:"Family Office kauft Kontorhaus in der HafenCity",
    summary:"Ein Hamburger Single Family Office erwirbt ein modernes Bürogebäude in der HafenCity als Core-Bestand.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  { id:"n-ha-002", firma:"Hanse Trust Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Wohnquartier Eimsbüttel (180 WE)", objektart:"Wohnen", stadt:"Hamburg", region:"Hamburg",
    lat:53.5760, lng:9.9530, wertMioEUR:88, datum:"2025-12-01",
    headline:"180 Wohnungen in Eimsbüttel an Hamburger Family Office",
    summary:"Ein Family Office kauft ein Wohnquartier mit 180 Einheiten und will die Mieten stabil halten.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  { id:"n-ha-003", firma:"Elbufer Vermögen (SFO)", firmaId:"", rolle:"Verkäufer", status:"besessen",
    objekt:"Fachmarktzentrum Wandsbek", objektart:"Retail", stadt:"Hamburg", region:"Hamburg",
    lat:53.5820, lng:10.0870, wertMioEUR:54, datum:"2024-10-30",
    headline:"Family Office verkauft Fachmarktzentrum in Wandsbek",
    summary:"Das Family Office veräußert ein Fachmarktzentrum nach sieben Jahren an einen Handelsimmobilien-Spezialisten.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  // ---------------- FRANKFURT ----------------
  { id:"n-fr-001", firma:"Mainturm Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Bürohochhaus Bankenviertel", objektart:"Buero", stadt:"Frankfurt", region:"Hessen",
    lat:50.1120, lng:8.6720, wertMioEUR:265, datum:"2026-06-05",
    headline:"Family Office kauft Bürohochhaus im Frankfurter Bankenviertel",
    summary:"Ein Family Office übernimmt ein Bürohochhaus mit Bankmietern und setzt auf langfristigen Bestand im CBD.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  { id:"n-fr-002", firma:"Taunus Privat Invest", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Logistikpark Rhein-Main", objektart:"Logistik", stadt:"Frankfurt", region:"Rhein-Main",
    lat:50.0480, lng:8.5700, wertMioEUR:110, datum:"2025-09-27",
    headline:"Family Office erwirbt Logistikpark bei Frankfurt",
    summary:"Ein Family Office kauft einen Logistikpark nahe dem Flughafen als Baustein seiner Logistikstrategie.",
    quelle:{ label:"Logistik Heute", url:"https://www.logistik-heute.de/" }, _stand:"2026-07" },

  { id:"n-fr-003", firma:"Mainturm Family Office", firmaId:"", rolle:"Verkäufer", status:"besessen",
    objekt:"Büroobjekt Niederrad", objektart:"Buero", stadt:"Frankfurt", region:"Hessen",
    lat:50.0870, lng:8.6300, wertMioEUR:41, datum:"2025-02-14",
    headline:"Family Office verkauft Büroobjekt in Niederrad",
    summary:"Das Family Office trennt sich von einem älteren Büroobjekt in Niederrad und fokussiert sich auf zentrale Lagen.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  // ---------------- KÖLN / DÜSSELDORF ----------------
  { id:"n-ko-001", firma:"Rheinkontor Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Bürogebäude Rheinauhafen", objektart:"Buero", stadt:"Köln", region:"Nordrhein-Westfalen",
    lat:50.9250, lng:6.9640, wertMioEUR:98, datum:"2026-03-30",
    headline:"Family Office kauft Bürogebäude im Rheinauhafen",
    summary:"Ein Kölner Family Office erwirbt ein Bürogebäude mit Kreativ- und Medienmietern am Rheinauhafen.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  { id:"n-ko-002", firma:"Domstadt Vermögen", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Wohn- und Geschäftshaus Ehrenfeld", objektart:"Wohnen", stadt:"Köln", region:"Nordrhein-Westfalen",
    lat:50.9520, lng:6.9170, wertMioEUR:36, datum:"2025-07-12",
    headline:"Family Office sichert sich Wohn- und Geschäftshaus in Ehrenfeld",
    summary:"Ein Family Office kauft ein gemischt genutztes Haus mit Wohnungen und Läden im Erdgeschoss.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  { id:"n-du-001", firma:"Rheinkontor Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Büroensemble Medienhafen", objektart:"Buero", stadt:"Düsseldorf", region:"Nordrhein-Westfalen",
    lat:51.2170, lng:6.7580, wertMioEUR:120, datum:"2026-05-19",
    headline:"Family Office kauft Büroensemble im Düsseldorfer Medienhafen",
    summary:"Das Family Office erweitert seinen Bürobestand um ein Ensemble im Medienhafen und bleibt langfristig investiert.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  { id:"n-du-002", firma:"Königsallee Kapital (MFO)", firmaId:"", rolle:"Verkäufer", status:"besessen",
    objekt:"Highstreet-Objekt Kö", objektart:"Retail", stadt:"Düsseldorf", region:"Nordrhein-Westfalen",
    lat:51.2240, lng:6.7790, wertMioEUR:150, datum:"2024-12-09",
    headline:"Multi Family Office verkauft Highstreet-Objekt an der Kö",
    summary:"Ein MFO veräußert ein Highstreet-Retailobjekt an der Königsallee an einen internationalen Investor.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  // ---------------- STUTTGART ----------------
  { id:"n-st-001", firma:"Neckar Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Büropark Vaihingen", objektart:"Buero", stadt:"Stuttgart", region:"Baden-Württemberg",
    lat:48.7280, lng:9.1120, wertMioEUR:88, datum:"2026-01-15",
    headline:"Family Office kauft Büropark in Stuttgart-Vaihingen",
    summary:"Ein schwäbisches Family Office erwirbt einen Büropark mit Ingenieur- und IT-Mietern.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  { id:"n-st-002", firma:"Schwaben Trust", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Logistikhalle Stuttgart-Fasanenhof", objektart:"Logistik", stadt:"Stuttgart", region:"Baden-Württemberg",
    lat:48.7150, lng:9.1650, wertMioEUR:52, datum:"2025-10-08",
    headline:"Family Office kauft Logistikhalle bei Stuttgart",
    summary:"Ein Family Office sichert sich eine neu gebaute Logistikhalle mit Automotive-Zulieferer als Mieter.",
    quelle:{ label:"Logistik Heute", url:"https://www.logistik-heute.de/" }, _stand:"2026-07" },

  // ---------------- LEIPZIG / DRESDEN ----------------
  { id:"n-le-001", firma:"Sachsen Privatvermögen", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Wohnportfolio Leipzig-Süd (310 WE)", objektart:"Wohnen", stadt:"Leipzig", region:"Sachsen",
    lat:51.3120, lng:12.3760, wertMioEUR:74, datum:"2026-04-03",
    headline:"310 Wohnungen in Leipzig an Family Office verkauft",
    summary:"Ein Family Office kauft ein grosses Wohnportfolio im Leipziger Süden und setzt auf stabile Cashflows.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  { id:"n-le-002", firma:"Sachsen Privatvermögen", firmaId:"", rolle:"Verkäufer", status:"besessen",
    objekt:"Büroobjekt Leipzig Zentrum", objektart:"Buero", stadt:"Leipzig", region:"Sachsen",
    lat:51.3400, lng:12.3810, wertMioEUR:29, datum:"2024-11-22",
    headline:"Family Office verkauft Büroobjekt in Leipzig",
    summary:"Das Family Office trennt sich von einem kleineren Büroobjekt im Zentrum, um Kapital umzuschichten.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  { id:"n-dr-001", firma:"Elbflorenz Family Office", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Geschäftshaus Prager Straße", objektart:"Retail", stadt:"Dresden", region:"Sachsen",
    lat:51.0430, lng:13.7360, wertMioEUR:47, datum:"2025-05-27",
    headline:"Family Office kauft Geschäftshaus an der Prager Straße",
    summary:"Ein Family Office erwirbt ein Highstreet-Geschäftshaus in der Dresdner Einkaufsmeile.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" },

  // ---------------- NÜRNBERG ----------------
  { id:"n-nu-001", firma:"Frankenland Kapital (SFO)", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Fachmarktzentrum Nürnberg-Langwasser", objektart:"Retail", stadt:"Nürnberg", region:"Bayern",
    lat:49.4020, lng:11.1290, wertMioEUR:61, datum:"2026-02-26",
    headline:"Family Office kauft Fachmarktzentrum in Nürnberg",
    summary:"Ein fränkisches Single Family Office erwirbt ein Fachmarktzentrum mit Lebensmittelanker.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  { id:"n-nu-002", firma:"Frankenland Kapital (SFO)", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Wohnanlage Nürnberg-Gostenhof (95 WE)", objektart:"Wohnen", stadt:"Nürnberg", region:"Bayern",
    lat:49.4480, lng:11.0530, wertMioEUR:33, datum:"2025-04-16",
    headline:"Family Office kauft Wohnanlage in Nürnberg-Gostenhof",
    summary:"Das Family Office erwirbt eine Wohnanlage mit 95 Einheiten im aufstrebenden Stadtteil Gostenhof.",
    quelle:{ label:"Thomas Daily", url:"https://www.thomas-daily.de/" }, _stand:"2026-07" },

  // ---------------- weitere Hotel-Käufe (für Markt-Radar) ----------------
  { id:"n-be-006", firma:"Meridian Estates FO", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Boutique-Hotel Berlin-Mitte", objektart:"Hotel", stadt:"Berlin", region:"Berlin",
    lat:52.5260, lng:13.3910, wertMioEUR:85, datum:"2026-04-09",
    headline:"Family Office kauft Boutique-Hotel in Berlin-Mitte",
    summary:"Ein belgisches Family Office erwirbt ein Boutique-Hotel mit 120 Zimmern in zentraler Lage und bindet einen Betreiber langfristig.",
    quelle:{ label:"PropertyMagazine", url:"https://www.property-magazine.de/" }, _stand:"2026-07" },

  { id:"n-fr-004", firma:"Taunus Privat Invest", firmaId:"", rolle:"Käufer", status:"besitzt",
    objekt:"Businesshotel Frankfurt-Messe", objektart:"Hotel", stadt:"Frankfurt", region:"Hessen",
    lat:50.1120, lng:8.6430, wertMioEUR:120, datum:"2025-12-15",
    headline:"Family Office sichert sich Businesshotel an der Frankfurter Messe",
    summary:"Das Family Office kauft ein Businesshotel nahe dem Messegelände als langfristiges Bestandsinvestment.",
    quelle:{ label:"Immobilien Zeitung", url:"https://www.immobilien-zeitung.de/" }, _stand:"2026-07" }
];
