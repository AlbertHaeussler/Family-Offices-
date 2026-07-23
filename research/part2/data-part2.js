/* Datendatei für Worker 2 — NUR diese Datei bearbeiten (kein Git-Konflikt mit anderen).
   Firmen als Objekte in das Array unten pushen. Schema: siehe research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  // ===== Hamburg — Multi Family Offices (gelb: Kapital/Beratung, kein eigener RE-Kern) =====
  {
    id:"spudy",
    name:"Spudy & Co. Family Office GmbH", kurz:"Spudy Family Office",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Neuer Jungfernstieg 15, 20354 Hamburg",
    hqLat:53.5567, hqLng:9.9905,
    website:"spudy.com", domain:"spudy.com",
    linkedin:"", contactName:"Jens Spudy", contactRole:"Gründer / Managing Partner", contactChannel:"über spudy.com/kontakt",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:4.0, unit:"Mrd €", basis:"quelle", note:"~4 Mrd € im Family Office nach Konzernumbau 2023/24 (historisch ~11 Mrd € Gruppe); zusätzlich ~2 Mrd € in den Spudy-Real-Estate-Gesellschaften.", sources:[
      {label:"cash-online – Spudy schließt Umbau ab", url:"https://www.cash-online.de/a/family-office-spudy-schliesst-unternehmensumbau-ab-394720/"},
      {label:"Immobilien Zeitung – Profil Spudy", url:"https://www.iz.de/profile/unternehmen/Spudy%20&%20Co.%20Family%20Office/"}
    ] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung – eigener RE-Arm (Spudy Real Estate) investiert v.a. für Mandanten; keine offengelegte Quote.", sources:[] },
    reInvestedEUR:2.0,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz & Spudy Real Estate)", intensity:"mittel", usages:["Buero","Wohnen"], center:[53.5567,9.9905], radiusKm:20,
        basis:"quelle", note:"Sitz des FO; eigener Real-Estate-Arm (~2 Mrd €).", sources:[{label:"Spudy Group", url:"https://spudy.com/"}] }
    ]
  },
  {
    id:"kontora",
    name:"Kontora Family Office GmbH", kurz:"Kontora",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Jungfernstieg 51, 20354 Hamburg",
    hqLat:53.5540, hqLng:9.9925,
    website:"kontora.com", domain:"kontora.com",
    linkedin:"", contactName:"Dr. Patrick Maurenbrecher / Stephan Buchwald", contactRole:"Geschäftsführende Gesellschafter", contactChannel:"über kontora.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:5.0, unit:"Mrd €", basis:"quelle", note:">5 Mrd € beraten/verwaltet (2024/25); seit 04/2025 Teil von AlTi Tiedemann Global.", sources:[
      {label:"Kontora – Website", url:"https://www.kontora.com/en/"},
      {label:"familyoffice.de – Anbieter Kontora", url:"https://www.familyoffice.de/anbieter/kontora"}
    ] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung – Immobilien als Mandanten-/Co-Investment (Finnland, Kopenhagen, Stuttgart 'Tower 99'); keine offengelegte Quote.", sources:[] },
    reInvestedEUR:1.0,
    usage:{ Buero:45, Wohnen:40, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz)", intensity:"mittel", usages:["Buero","Wohnen"], center:[53.5540,9.9925], radiusKm:15,
        basis:"quelle", note:"Sitz des MFO.", sources:[{label:"Kontora Impressum", url:"https://www.kontora.com/imprint/"}] },
      { name:"Stuttgart / Kopenhagen (Mandanten-RE)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[48.7758,9.1829], radiusKm:20,
        basis:"quelle", note:"Mandanten-Immobilienstrategien (u.a. Tower 99 Stuttgart, Bestand Kopenhagen).", sources:[{label:"Kontora – Kopenhagen", url:"https://www.kontora.com/news/artikel/beteiligung-an-immobilienstrategie-in-kopenhagen-mit-zentral-gelegenen-bestandsobjekten/"}] }
    ]
  },
  {
    id:"marcardstein",
    name:"Marcard, Stein & Co AG", kurz:"Marcard, Stein & Co",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Ballindamm 36, 20095 Hamburg",
    hqLat:53.5520, hqLng:9.9950,
    website:"marcard.de", domain:"marcard.de",
    linkedin:"", contactName:"Thomas R. Fischer", contactRole:"Sprecher des Vorstands", contactChannel:"über marcard.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:6.0, unit:"Mrd €", basis:"extrapolation", note:"AUM nicht öffentlich; grobe Einschätzung für eine der ältesten reinen FO-Banken (~84 MA). Übernahme durch Rothschild & Co signiert 06/2026 (behördl. Genehmigung ausstehend). Reine Einschätzung.", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung – Immobilien nur als Asset-Klasse im Vermögensmanagement, kein eigenes Portfolio.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Buero:50, Wohnen:35, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[53.5520,9.9950], radiusKm:15,
        basis:"quelle", note:"Sitz der FO-Bank.", sources:[{label:"Marcard Impressum", url:"https://www.marcard.de/de/impressum/"}] }
    ]
  },
  {
    id:"berenbergfo",
    name:"Berenberg Family Office (Joh. Berenberg, Gossler & Co. KG)", kurz:"Berenberg Family Office",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Neuer Jungfernstieg 20, 20354 Hamburg",
    hqLat:53.5570, hqLng:9.9900,
    website:"berenberg.de", domain:"berenberg.de",
    linkedin:"", contactName:"Dennis Nacken", contactRole:"Leiter Family Office", contactChannel:"über berenberg.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:38.0, unit:"Mrd €", basis:"quelle", note:">38 Mrd € Assets gruppenweit (Bank); die FO-Einheit wird nicht separat ausgewiesen.", sources:[
      {label:"Berenberg – About us", url:"https://www.berenberg.de/en/about-us/"}
    ] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung – Immobilien als Asset-Klasse im Family-Office-Mandat, kein eigenes RE-Portfolio.", sources:[] },
    reInvestedEUR:1.0,
    usage:{ Buero:55, Wohnen:30, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz)", intensity:"niedrig", usages:["Buero"], center:[53.5570,9.9900], radiusKm:15,
        basis:"quelle", note:"Sitz der Bank / FO-Einheit.", sources:[{label:"Berenberg Family Offices", url:"https://www.berenberg.de/unsere-kunden/family-offices/"}] }
    ]
  },

  // ===== Handels-/Familien-Dynastien Nord & NRW =====
  {
    id:"rossmann",
    name:"Familie Roßmann (Rossmann Beteiligungs GmbH)", kurz:"Roßmann (Familie)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Isernhägener Straße 16, 30938 Burgwedel",
    hqLat:52.492, hqLng:9.862,
    website:"rossmann.de", domain:"rossmann.de",
    linkedin:"", contactName:"Dirk Roßmann / Raoul Roßmann", contactRole:"Gesellschafter", contactChannel:"über unternehmen.rossmann.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:4.5, unit:"Mrd €", basis:"quelle", note:"Vermögen Familie Roßmann ~4–4,7 Mrd € (Forbes). Das Beteiligungs-Vehikel ('Rossmann Family Office') hält u.a. Aurubis (~23%), Deutsche Beteiligungs AG (>25%), K+S.", sources:[
      {label:"Forbes – Dirk Rossmann", url:"https://www.forbes.com/profile/dirk-rossmann/"},
      {label:"private-banking-magazin – Rossmann Family Office bei Aurubis", url:"https://www.private-banking-magazin.de/rossmann-family-office-steigt-bei-aurubis-ein/"}
    ] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung – Immobilien überwiegend operativ über die RE-Tochter Dirk Rossmann Immobiliengruppe GmbH (Filial-/Logistikobjekte), nicht als Kapitalanlage-Portfolio.", sources:[] },
    reInvestedEUR:0.7,
    usage:{ Retail:40, Logistik:30, Buero:20, Wohnen:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hannover / Burgwedel", intensity:"mittel", usages:["Retail","Logistik"], center:[52.492,9.862], radiusKm:40,
        basis:"quelle", note:"Sitz; operative RE-Gruppe entwickelt/hält Filial- & Logistikimmobilien.", sources:[{label:"Dirk Rossmann Immobilien", url:"https://drimmobilien.rossmann.de/kontakt-dr-immobilien.html"}] }
    ]
  },
  {
    id:"deichmann_fo",
    name:"Familie Deichmann (Deichmann-Familienverwaltungsgesellschaft mbH)", kurz:"Deichmann (Familie)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Deichmannweg 9, 45359 Essen",
    hqLat:51.470, hqLng:6.940,
    website:"deichmann.com", domain:"deichmann.com",
    linkedin:"", contactName:"Heinrich Otto Deichmann", contactRole:"Inhaber / Vorsitzender", contactChannel:"über deichmann.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:5.2, unit:"Mrd €", basis:"quelle", note:"Vermögen Familie Deichmann ~5,2 Mrd €. Die Familienverwaltungsgesellschaft ist Komplementär u.a. einer Wohn-/Geschäftshaus-GbR in Köln.", sources:[
      {label:"die-deutsche-wirtschaft – Familie Deichmann", url:"https://die-deutsche-wirtschaft.de/familienunternehmen/deichmann-familie-deichmann-se-essen-inhaber/"},
      {label:"GENIOS – Deichmann-Familienverwaltungsgesellschaft", url:"https://www.genios.de/firmen/firma/DE/deichmann-familienverwaltungsgesellschaft-mbh.html"}
    ] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung – dokumentierte RE-Aktivität (Köln), aber keine offengelegte Quote am Gesamtvermögen.", sources:[] },
    reInvestedEUR:1.0,
    usage:{ Wohnen:40, Retail:35, Buero:25 },
    confirmedObjects:[
      { name:"Wohn- und Geschäftshäuser Köln (Bonner Str./Koblenzer Str. GbR)", address:"Bonner Straße / Koblenzer Straße, Köln (Hausnr. nicht verifiziert)", lat:50.906, lng:6.972,
        usage:"Wohnen", area:"Wohn- & Geschäftshäuser", purchaseDate:"Bestand", valueEUR:null, status:"Bestand",
        images:[], sources:[{label:"GENIOS – Zweck Familienverwaltungsgesellschaft (Komplementär der GbR)", url:"https://www.genios.de/firmen/firma/DE/deichmann-familienverwaltungsgesellschaft-mbh.html"}] }
    ],
    heatmap:[
      { name:"Essen (Sitz)", intensity:"niedrig", usages:["Buero"], center:[51.470,6.940], radiusKm:15,
        basis:"quelle", note:"Sitz der Familienverwaltungsgesellschaft (Deichmann-Campus).", sources:[{label:"Creditreform – Deichmann SE (Deichmannweg 9)", url:"https://firmeneintrag.creditreform.de/45359/5110165584/DEICHMANN_SE"}] },
      { name:"Köln (Wohn-/Geschäftshäuser)", intensity:"mittel", usages:["Wohnen","Retail"], center:[50.906,6.972], radiusKm:10,
        basis:"quelle", note:"Registrierter Zweck: Halten/Entwickeln von Wohn- & Geschäftshäusern.", sources:[{label:"GENIOS", url:"https://www.genios.de/firmen/firma/DE/deichmann-familienverwaltungsgesellschaft-mbh.html"}] }
    ]
  },
  {
    id:"fielmann_fo",
    name:"Fielmann Family Office GmbH (Familie Fielmann)", kurz:"Fielmann Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Esplanade 41, 20354 Hamburg",
    hqLat:53.557, hqLng:9.990,
    website:"fielmann.de", domain:"fielmann.de",
    linkedin:"", contactName:"Marc Fielmann", contactRole:"Familienoberhaupt / CEO Fielmann Group", contactChannel:"über fielmann.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:3.5, unit:"Mrd €", basis:"extrapolation", note:"Vermögen Familie Fielmann grob 3–4 Mrd € (Einschätzung). Das FO (gegr. 2019) verwaltet Direktbeteiligungen, Venture, Immobilien & Landwirtschaft. Reine Einschätzung.", sources:[] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung – FO-Mandat umfasst laut private-banking-magazin ausdrücklich Immobilien & Landwirtschaft; Quote nicht offengelegt.", sources:[] },
    reInvestedEUR:0.8,
    usage:{ Wohnen:30, Buero:25, Sonstiges:45 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz)", intensity:"niedrig", usages:["Buero"], center:[53.557,9.990], radiusKm:15,
        basis:"quelle", note:"Sitz Fielmann Family Office GmbH (Esplanade 41).", sources:[{label:"private-banking-magazin – Fielmann Family Office", url:"https://www.private-banking-magazin.de/fielmann-family-office-sucht-investmentanalysten/"}] },
      { name:"Schleswig-Holstein / Plön (Landwirtschaft & Forst)", intensity:"mittel", usages:["Sonstiges"], center:[54.16,10.42], radiusKm:35,
        basis:"quelle", note:"Ökolandbau/Forst-Engagement der Familie (Region Plön); FO-Mandat 'Landwirtschaft'.", sources:[{label:"private-banking-magazin", url:"https://www.private-banking-magazin.de/fielmann-family-office-sucht-investmentanalysten/"}] }
    ]
  },
  {
    id:"jahrholding",
    name:"Jahr Holding GmbH (Familie Jahr)", kurz:"Jahr Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Ballindamm 17, 20095 Hamburg",
    hqLat:53.552, hqLng:10.001,
    website:"jahr-media.de", domain:"jahr-media.de",
    linkedin:"", contactName:"Familie Jahr (Erben John Jahr)", contactRole:"Gesellschafter", contactChannel:"über jahr-media.de",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Nach Verkauf der 25,1% Gruner+Jahr-Anteile (2014) an Bertelsmann in Immobilien, Medien & Gastronomie reinvestiert; Vermögen nicht offengelegt. Reine Einschätzung.", sources:[] },
    reQuote:{ value:0.5, basis:"extrapolation", note:"Reine Einschätzung – aktive Projektentwicklung (John Jahr Haus, Berlin) + Bestand; Quote geschätzt.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[
      { name:"John Jahr Haus", address:"Kurfürstenstraße 72-74, 10787 Berlin", lat:52.5019, lng:13.3417,
        usage:"Buero", area:"~16.900 m² Büro + 46 Wohnungen + ~800 m² Retail (17 Geschosse, ~70 m)", purchaseDate:"2023 (Grundstein) / fertiggestellt 2026", valueEUR:null, status:"Neubau/Projektentwicklung",
        images:[], sources:[
          {label:"immobilienmanager – Grundsteinlegung John Jahr Haus", url:"https://www.immobilienmanager.de/berlin-grundsteinlegung-fuer-john-jahr-haus-19092023"},
          {label:"entwicklungsstadt.de – John Jahr Haus fertig", url:"https://www.entwicklungsstadt.de/city-west-john-jahr-haus-an-der-kurfuerstenstrasse-ist-fertig/"},
          {label:"HAMBURG TEAM – Kurfürstenstraße 72-74", url:"https://hamburgteam.de/projektentwicklung/projekte/kurfuerstenstrasse-72-74/"}
        ] }
    ],
    heatmap:[
      { name:"Hamburg (Sitz)", intensity:"niedrig", usages:["Buero"], center:[53.552,10.001], radiusKm:15,
        basis:"quelle", note:"Sitz Jahr Holding GmbH (Ballindamm 17).", sources:[{label:"Handelsregister – Jahr Holding GmbH", url:"https://www.online-handelsregister.de/handelsregisterauszug/hh/Hamburg/HRB/147654/Jahr-Holding-GmbH"}] },
      { name:"Berlin City West (Projektentwicklung)", intensity:"hoch", usages:["Buero","Wohnen","Retail"], center:[52.5019,13.3417], radiusKm:8,
        basis:"quelle", note:"John Jahr Haus, Kurfürstenstraße 72-74.", sources:[{label:"entwicklungsstadt.de", url:"https://www.entwicklungsstadt.de/city-west-john-jahr-haus-an-der-kurfuerstenstrasse-ist-fertig/"}] }
    ]
  },

  // ===== Oetker (Investment-/Beteiligungszweig nach dem Familien-Split 2021) =====
  {
    id:"oetker_geschwister",
    name:"Geschwister Oetker Beteiligungen KG / Oetker Collection KG (Familie Oetker)", kurz:"Geschwister Oetker",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Friedhofstraße 70, 33659 Bielefeld",
    hqLat:52.049, hqLng:8.526,
    website:"oetker-collection.com", domain:"oetker-collection.com",
    linkedin:"", contactName:"Dr. Alfred Oetker / Carl Ferdinand Oetker", contactRole:"Gesellschafter / Geschäftsführung", contactChannel:"über oetker-collection.com",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gruen",
    aum:{ value:2.5, unit:"Mrd €", basis:"quelle", note:"Zweig nach Oetker-Split 2021 (Henkell Freixenet, Martin Braun, Budenheim, Oetker Collection Hotels): Umsatz ~2,5 Mrd €, ~8.300 MA, 146 Gesellschaften. Privatvermögen nicht separat ausgewiesen.", sources:[
      {label:"Oetker Collection – Geschwister Oetker", url:"https://www.oetkercollection.com/geschwister-oetker/"},
      {label:"Handelsblatt – Familie teilt Oetker-Gruppe auf", url:"https://www.handelsblatt.com/unternehmen/mittelstand/familienunternehmer/lebensmittelhersteller-loesung-nach-langem-streit-familie-teilt-oetker-gruppe-auf/27438446.html"}
    ] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung – eigene Office-RE-Sparte 'Columbus Properties' + Oetker Collection Luxushotels (operative RE); Quote geschätzt.", sources:[] },
    reInvestedEUR:1.5,
    usage:{ Hotel:50, Buero:40, Sonstiges:10 },
    confirmedObjects:[
      { name:"Brenners Park-Hotel & Spa (Oetker Collection)", address:"Schillerstraße 4/6, 76530 Baden-Baden", lat:48.762, lng:8.238,
        usage:"Hotel", area:"5-Sterne-Luxushotel", purchaseDate:"Bestand (Oetker Collection)", valueEUR:null, status:"Bestand",
        images:[], sources:[
          {label:"Oetker Collection – Columbus Properties / Hotels", url:"https://oetker-collection.com/en/business-divisions/columbus-properties/"},
          {label:"Brenners Park-Hotel", url:"https://www.oetkercollection.com/hotels/brenners-park-hotel-spa/"}
        ] }
    ],
    heatmap:[
      { name:"Bielefeld (Sitz & Columbus Properties Office-RE)", intensity:"mittel", usages:["Buero"], center:[52.049,8.526], radiusKm:20,
        basis:"quelle", note:"Sitz; eigene Office-Real-Estate-Sparte Columbus Properties.", sources:[{label:"Oetker Collection – Columbus Properties", url:"https://oetker-collection.com/en/business-divisions/columbus-properties/"}] },
      { name:"Baden-Baden (Oetker Collection Hotel)", intensity:"hoch", usages:["Hotel"], center:[48.762,8.238], radiusKm:8,
        basis:"quelle", note:"Brenners Park-Hotel & Spa.", sources:[{label:"Oetker Collection", url:"https://www.oetkercollection.com/hotels/brenners-park-hotel-spa/"}] }
    ]
  },

  // ===== Aldi-Erben (sehr private Stiftungsvermögen; RE weitgehend operativ) =====
  {
    id:"albrecht_nord",
    name:"Markus-/Lukas-/Jakobus-Stiftung (Familie Albrecht, Aldi Nord)", kurz:"Albrecht Nord (Stiftungen)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Essen (Stiftungssitz Nortorf/Essen; exakte Adresse nicht öffentlich)",
    hqLat:51.49, hqLng:7.09,
    website:"aldi-nord.de", domain:"aldi-nord.de",
    linkedin:"", contactName:"Theo Albrecht jr. / Babette Albrecht", contactRole:"Stiftungsvorstand (Familie)", contactChannel:"nicht öffentlich",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:17.8, unit:"Mrd €", basis:"quelle", note:"Familienvermögen Theo-Albrecht-Erben ~17,8 Mrd € (Forbes). Vermögen liegt in den Familienstiftungen (Markus 61%, Lukas 19,5%, Jakobus 19,5%) über Aldi Nord/Trader Joe's.", sources:[
      {label:"Wikipedia – Markus-Stiftung (Beteiligungen)", url:"https://de.wikipedia.org/wiki/Markus-Stiftung"},
      {label:"Wikipedia – Theo Albrecht junior (Vermögen)", url:"https://de.wikipedia.org/wiki/Theo_Albrecht_junior"}
    ] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung – Immobilien weitgehend operativ (Filial-/Logistikobjekte über die Grundstücksgesellschaften), kein privates Anlage-Portfolio bekannt.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Retail:60, Logistik:30, Buero:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Essen / Ruhrgebiet (Sitz & Grundstücksges.)", intensity:"niedrig", usages:["Retail","Logistik"], center:[51.49,7.09], radiusKm:30,
        basis:"quelle", note:"Operative Filial-/Logistikimmobilien u.a. über Grundstücksgesellschaft (Hohewardstr. 345–349, Herten).", sources:[{label:"Creditreform – Grundstücksgesellschaft Herten", url:"https://firmeneintrag.creditreform.de/45699/4050368236/MARKUS_STIFTUNG_LUKAS_STIFTUNG_UND_JAKOBUS_STIFTUNG_GRUNDSTUECKSGESELLSCHAFT_HERTEN"}] }
    ]
  },
  {
    id:"albrecht_sued",
    name:"Siepmann-Stiftung (Familie Albrecht/Heister, Aldi Süd)", kurz:"Albrecht Süd (Siepmann-Stiftung)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Südgewerbegebiet, 82223 Eichenau (Stiftungssitz; exakte Adresse nicht öffentlich)",
    hqLat:48.17, hqLng:11.30,
    website:"aldi-sued.de", domain:"aldi-sued.de",
    linkedin:"", contactName:"Peter Max Heister / Beate Heister", contactRole:"Stiftungsvorstand (Familie)", contactChannel:"nicht öffentlich",
    contactLinkedin:"", contactLinkedinName:"",
    category:"gelb",
    aum:{ value:18.3, unit:"Mrd €", basis:"quelle", note:"Vermögen Karl Albrecht jr. & Beate Heister zusammen ~18,3 Mrd € (2024). Aldi-Süd-Anteile v.a. über Siepmann-Stiftung (~75%).", sources:[
      {label:"Wikipedia – Siepmann-Stiftung", url:"https://de.wikipedia.org/wiki/Siepmann-Stiftung"},
      {label:"Wikipedia – Beate Heister (Vermögen)", url:"https://en.wikipedia.org/wiki/Beate_Heister"}
    ] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung – Immobilien weitgehend operativ (Filial-/Logistikobjekte), kein privates Anlage-Portfolio bekannt.", sources:[] },
    reInvestedEUR:0.5,
    usage:{ Retail:60, Logistik:30, Buero:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Mülheim a. d. Ruhr (operativer Konzernsitz)", intensity:"niedrig", usages:["Retail","Logistik"], center:[51.42,6.88], radiusKm:25,
        basis:"quelle", note:"Operativer Sitz Aldi Süd; RE überwiegend Filial-/Logistikbestand.", sources:[{label:"Wikipedia – Siepmann-Stiftung", url:"https://de.wikipedia.org/wiki/Siepmann-Stiftung"}] },
      { name:"Eichenau (Stiftungssitz)", intensity:"niedrig", usages:["Sonstiges"], center:[48.17,11.30], radiusKm:10,
        basis:"quelle", note:"Sitz der Siepmann-Stiftung (Südgewerbegebiet Eichenau).", sources:[{label:"Bayer. Stiftungsverzeichnis", url:"https://stiftungen.bayern.de/stiftung/13258"}] }
    ]
  }

]);
