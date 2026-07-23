/* =========================================================================
   Family Offices – Datensatz v2 (Pilot: 10 immobilien-aktive Family Offices)
   Stand: 07/2026
   -------------------------------------------------------------------------
   Jede Schätzung trägt Quellen:  sources: [{label,url}, ...]
   Reine Einschätzung ohne Einzelquelle:  basis:"extrapolation" (+ note)
   Bestätigte Quelle:  basis:"quelle"
   confirmedObjects  = exakte Adresse, scharfe Pins (Seite 2)
   heatmap           = Regionen mit Investitionsintensität (weiche Overlays)
   category: 'gruen' großes RE · 'gelb' minimal/<10% aber Interesse · 'rot' keins
   ========================================================================= */

window.FO_DATA = [
  {
    id:"otto", name:"CURA Vermögensverwaltung G.m.b.H. & Co. KG", kurz:"Otto Family Office (CURA)",
    typ:"SFO", land:"Deutschland", hqAddress:"Saseler Damm 39a, 22395 Hamburg",
    hqLat:53.6510, hqLng:10.1000, website:"ece.com", domain:"ece.com",
    linkedin:"https://www.linkedin.com/company/ece",
    contactName:"Alexander Otto (CEO ECE) · Henning Eggers (GF CURA/ECE)",
    contactRole:"CEO ECE Group / Geschäftsführer",
    contactChannel:"über ECE Group – Ankauf/Investment-Management",
    category:"gruen",
    aum:{ value:30.0, unit:"Mrd €", basis:"quelle",
      sources:[{label:"Forbes – Alexander Otto",url:"https://www.forbes.com/profile/alexander-otto/"},
               {label:"ECE – Otto family as investors",url:"https://www.ece.com/en/about-us/otto-family-as-investors"}] },
    reQuote:{ value:0.67, basis:"extrapolation",
      note:"Immobilien Kern der Familie (ECE >30 Mrd € GAV); exakte Quote nicht öffentlich – Schätzung.",
      sources:[{label:"ECE Group",url:"https://www.ece.com/en/about-us/ece-group"}] },
    reInvestedEUR:20.0,
    usage:{ Retail:70, Buero:15, Hotel:10, Wohnen:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (ECE-Zentrale & Standorte)", intensity:"hoch", usages:["Retail","Buero"],
        center:[53.55,9.99], radiusKm:25, basis:"quelle",
        sources:[{label:"ECE Group",url:"https://www.ece.com/en/about-us/ece-group"}] },
      { name:"Rhein-Main (Shopping-Center)", intensity:"mittel", usages:["Retail"],
        center:[50.11,8.68], radiusKm:35, basis:"quelle",
        sources:[{label:"ECE – Center-Portfolio",url:"https://www.ece.com/"}] },
      { name:"Berlin (Shopping-Center)", intensity:"mittel", usages:["Retail"],
        center:[52.52,13.40], radiusKm:30, basis:"quelle",
        sources:[{label:"ECE – Center-Portfolio",url:"https://www.ece.com/"}] },
      { name:"Rhein-Ruhr (Shopping-Center)", intensity:"mittel", usages:["Retail"],
        center:[51.45,7.01], radiusKm:45, basis:"quelle",
        sources:[{label:"ECE – Center-Portfolio",url:"https://www.ece.com/"}] }
    ]
  },
  {
    id:"wirtgen", name:"WIRTGEN INVEST Holding GmbH", kurz:"Wirtgen Invest",
    typ:"SFO", land:"Deutschland", hqAddress:"Wirtgen Campus 1, 53577 Neustadt (Wied)",
    hqLat:50.5500, hqLng:7.4200, website:"wirtgen-invest.de", domain:"wirtgen-invest.de",
    linkedin:"https://www.linkedin.com/company/wirtgen-invest-holding-gmbh/",
    contactName:"Jürgen & Stefan Wirtgen (GF Real Estate)",
    contactRole:"Geschäftsführer Wirtgen Invest Real Estate",
    contactChannel:"info@wirtgen-invest.de · +49 2683 9466 0", contactLinkedin:"",
    category:"gruen",
    aum:{ value:5.0, unit:"Mrd €", basis:"extrapolation",
      note:"Immobilienportfolio >1 Mrd € belegt; Gesamt-AUM nach Verkauf Wirtgen Group (~5,2 Mrd $) geschätzt.",
      sources:[{label:"Wirtgen Invest – Real Estate",url:"https://www.wirtgen-invest.de/en/real-estate/"}] },
    reQuote:{ value:0.30, basis:"extrapolation",
      note:"1 von 4 Anlagefeldern; exakte Quote nicht öffentlich.",
      sources:[{label:"Wirtgen Invest",url:"https://www.wirtgen-invest.de/en/family-office/"}] },
    reInvestedEUR:1.5,
    usage:{ Buero:30, Retail:28, Wohnen:20, Hotel:22 },
    confirmedObjects:[
      { name:"T8 (Taunusanlage 8)", address:"Taunusanlage 8, 60329 Frankfurt a. M.", lat:50.1149, lng:8.6700,
        usage:"Buero", area:"~30.000 m² (20 Etagen, 68 m)", purchaseDate:"06/2019", valueEUR:400, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – T8",url:"https://www.wirtgen-invest.de/en/portfolio/taunusanlage-8-frankfurt/"},
                 {label:"taunusanlage8.de",url:"https://taunusanlage8.de/en/facts-figures"}] },
      { name:"LYGHT", address:"Georg-Glock-Straße 12–14, 40474 Düsseldorf", lat:51.2560, lng:6.7720,
        usage:"Buero", area:"Redevelopment (Kennedydamm)", purchaseDate:"Bestand", valueEUR:150, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – LYGHT",url:"https://www.wirtgen-invest.de/en/portfolio/lyght-dusseldorf/"},
                 {label:"MOMENI – LYGHT",url:"https://momeni-group.com/en/press/press-detail/momeni-gruppe-realisiert-nachhaltiges-redevelopment-lyght-am-duesseldorfer-kennedydamm"}] },
      { name:"Altes Eichamt", address:"Spichernstraße 73–77, 50829 Köln", lat:50.9540, lng:6.9160,
        usage:"Buero", area:"~8.000 m² Bürofläche", purchaseDate:"Bestand", valueEUR:60, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Altes Eichamt",url:"https://www.wirtgen-invest.de/portfolio/altes-eichamt/"}] },
      { name:"Trinkaus-Karree", address:"Königsallee 21–23, 40212 Düsseldorf", lat:51.2247, lng:6.7797,
        usage:"Retail", area:"ehem. HSBC-Zentrale", purchaseDate:"2021 (JV)", valueEUR:200, status:"Bestand (JV)", images:[],
        sources:[{label:"Wirtgen Invest – Trinkaus-Karree",url:"https://www.wirtgen-invest.de/en/portfolio/trinkaus-karree-dusseldorf/"}] },
      { name:"Wallhaus", address:"Neuer Wall 43, 20354 Hamburg", lat:53.5512, lng:9.9905,
        usage:"Retail", area:"~5.000 m² (LEED Gold)", purchaseDate:"2019", valueEUR:120, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Wallhaus",url:"https://www.wirtgen-invest.de/en/portfolio/wallhaus-hamburg/"}] },
      { name:"Bazaar de Cologne", address:"Mittelstraße 12–14, 50672 Köln", lat:50.9366, lng:6.9430,
        usage:"Retail", area:"Shopping-Passage", purchaseDate:"Bestand", valueEUR:80, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Bazaar de Cologne",url:"https://www.wirtgen-invest.de/en/portfolio/bazaar-de-cologne/"}] },
      { name:"Opern Passagen", address:"Schwertnergasse 1, 50667 Köln", lat:50.9385, lng:6.9530,
        usage:"Retail", area:"Shopping-Passage", purchaseDate:"Bestand", valueEUR:90, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Opern Passagen",url:"https://www.wirtgen-invest.de/en/portfolio/opern-passagen-cologne/"}] },
      { name:"Charlie Living", address:"Zimmerstraße 94, 10117 Berlin", lat:52.5075, lng:13.3905,
        usage:"Wohnen", area:"High-End Wohnen (Checkpoint Charlie)", purchaseDate:"Bestand", valueEUR:120, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Charlie Living",url:"https://www.wirtgen-invest.de/en/portfolio/charlie-living-berlin/"}] },
      { name:"Stafflenberg Living", address:"Stafflenbergstraße, 70184 Stuttgart", lat:48.7790, lng:9.1930,
        usage:"Wohnen", area:"Wohnensemble (Gänsheide)", purchaseDate:"Bestand", valueEUR:60, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Stafflenberg Living",url:"https://www.wirtgen-invest.de/en/portfolio/stafflenberg-living-stuttgart/"}] },
      { name:"Motel One Schillerstraße", address:"Schillerstraße 3, 80336 München", lat:48.1395, lng:11.5640,
        usage:"Hotel", area:"269 Zimmer, ~10.000 m²", purchaseDate:"2023 (fertig 04/2025)", valueEUR:80, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Motel One München",url:"https://www.wirtgen-invest.de/en/motel-one-schillerstrase-munich/"},
                 {label:"immobilienmanager.de",url:"https://www.immobilienmanager.de/muenchen-neues-motel-one-geht-an-wirtgen-invest-14092023"}] },
      { name:"Wellness Resort Sylt (A-ROSA)", address:"List auf Sylt, 25992", lat:55.0170, lng:8.4130,
        usage:"Hotel", area:"177 Zimmer/Suiten, 3.500 m²", purchaseDate:"2022", valueEUR:50, status:"Bestand", images:[],
        sources:[{label:"Wirtgen Invest – Wellness Resort Sylt",url:"https://www.wirtgen-invest.de/en/portfolio/wellness-resort-sylt/"},
                 {label:"Flick Gocke Schaumburg",url:"https://www.fgs.de/en/news-and-insights/news/flick-gocke-schaumburg-beraet-wirtgen-invest-beim-kauf-des-a-rosa-auf-sylt"}] }
    ],
    foreignObjects:"Zusätzlich (nicht auf DE-Karte): 50 Finsbury Square (London/Büro), Motel One Antwerpen (BE/Hotel).",
    heatmap:[
      { name:"Frankfurt / Rhein-Main", intensity:"hoch", usages:["Buero","Retail"], center:[50.11,8.68], radiusKm:30, basis:"quelle",
        sources:[{label:"Wirtgen Invest – Portfolio (Top-7)",url:"https://www.wirtgen-invest.de/en/real-estate/"}] },
      { name:"Hamburg", intensity:"mittel", usages:["Retail","Hotel"], center:[53.55,9.99], radiusKm:25, basis:"quelle",
        sources:[{label:"Wirtgen Invest – Wallhaus",url:"https://www.wirtgen-invest.de/en/portfolio/wallhaus-hamburg/"}] },
      { name:"Düsseldorf", intensity:"mittel", usages:["Retail"], center:[51.22,6.78], radiusKm:20, basis:"quelle",
        sources:[{label:"Wirtgen Invest – Trinkaus-Karree",url:"https://www.wirtgen-invest.de/en/portfolio/trinkaus-karree-dusseldorf/"}] }
    ]
  },
  {
    id:"schoerghuber", name:"Schörghuber Stiftung & Co. Holding KG / Bayerische Hausbau", kurz:"Schörghuber / Bayerische Hausbau",
    typ:"SFO", land:"Deutschland", hqAddress:"Denninger Straße 165, 81925 München",
    hqLat:48.1600, hqLng:11.6300, website:"hausbau.de", domain:"hausbau.de",
    linkedin:"https://de.linkedin.com/company/bayerische-hausbau",
    contactName:"Team Ankauf Bayerische Hausbau",
    contactRole:"Ankauf / Investment",
    contactChannel:"ankauf@hausbau.de · Denninger Str. 165, 81925 München",
    category:"gruen",
    aum:{ value:4.0, unit:"Mrd €", basis:"quelle",
      note:"Immobilienportfolio ~3,3 Mrd €; Konzernumsatz ~771 Mio € (2018).",
      sources:[{label:"Bayerische Hausbau – Unternehmen",url:"https://www.hausbau.de/unternehmen/schoerghuber-unternehmensgruppe"},
               {label:"Wikipedia – Bayerische Hausbau",url:"https://de.wikipedia.org/wiki/Bayerische_Hausbau"}] },
    reQuote:{ value:0.82, basis:"quelle",
      note:"Immobilien = zentrales Geschäftsfeld der Gruppe.",
      sources:[{label:"Bayerische Hausbau",url:"https://www.hausbau.de/"}] },
    reInvestedEUR:3.3,
    usage:{ Wohnen:35, Buero:25, Retail:20, Hotel:10, Gastro:10 },
    confirmedObjects:[
      { name:"Objekt Marienplatz 22", address:"Marienplatz 22, 80331 München", lat:48.1369, lng:11.5760,
        usage:"Retail", area:"Altstadt-Toplage", purchaseDate:"Bestand", valueEUR:150, status:"Bestand", images:[],
        sources:[{label:"Bayerische Hausbau",url:"https://www.hausbau.de/"}] },
      { name:"Objekt Kaufingerstraße 15", address:"Kaufingerstraße 15, 80331 München", lat:48.1378, lng:11.5730,
        usage:"Retail", area:"Fußgängerzone", purchaseDate:"Bestand", valueEUR:120, status:"Bestand", images:[],
        sources:[{label:"Bayerische Hausbau",url:"https://www.hausbau.de/"}] },
      { name:"Joseph-Pschorr-Haus", address:"Neuhauser Straße 9, 80331 München", lat:48.1382, lng:11.5700,
        usage:"Retail", area:"Altstadt-Toplage", purchaseDate:"Bestand", valueEUR:200, status:"Bestand", images:[],
        sources:[{label:"Bayerische Hausbau",url:"https://www.hausbau.de/"}] },
      { name:"Donisl", address:"Weinstraße 1, 80331 München", lat:48.1376, lng:11.5748,
        usage:"Gastro", area:"Traditionsgaststätte", purchaseDate:"Bestand", valueEUR:40, status:"Bestand", images:[],
        sources:[{label:"Bayerische Hausbau",url:"https://www.hausbau.de/"}] },
      { name:"BIKINI Berlin (entwickelt, lt. Presse verkauft)", address:"Budapester Straße 38–50, 10787 Berlin", lat:52.5060, lng:13.3380,
        usage:"Buero", area:"Ensemble Büro/Retail/Hotel", purchaseDate:"entwickelt bis 2014", valueEUR:300, status:"Verkauft", images:[],
        sources:[{label:"Wikipedia – Bikini-Haus",url:"https://de.wikipedia.org/wiki/Bikini-Haus"}] }
    ],
    heatmap:[
      { name:"München (Kernmarkt)", intensity:"hoch", usages:["Wohnen","Buero","Retail","Hotel"], center:[48.137,11.575], radiusKm:20, basis:"quelle",
        sources:[{label:"Bayerische Hausbau – Ankauf (ab 5.000 m², München)",url:"https://www.hausbau.de/unternehmen/ankauf"}] },
      { name:"Berlin", intensity:"niedrig", usages:["Buero","Retail"], center:[52.505,13.338], radiusKm:15, basis:"quelle",
        sources:[{label:"Bayerische Hausbau – Bikini Berlin",url:"https://www.hausbau.de/"}] }
    ]
  },
  {
    id:"hqtrust", name:"HQ Trust GmbH (Harald Quandt Holding)", kurz:"HQ Trust / Harald Quandt",
    typ:"MFO", land:"Deutschland", hqAddress:"Am Pilgerrain 17, 61352 Bad Homburg v. d. Höhe",
    hqLat:50.2205, hqLng:8.6050, website:"hqtrust.de", domain:"hqtrust.de",
    linkedin:"https://www.linkedin.com/company/hq-trust-gmbh/",
    contactName:"Jochen Butz · Christian Stadtmüller (GF)",
    contactRole:"Geschäftsführer · Real-Assets-Team",
    contactChannel:"über hqtrust.de (Kontakt)",
    category:"gelb",
    aum:{ value:17.0, unit:"Mrd €", basis:"quelle",
      note:"HQ Trust + HQ Capital + CP Capital zusammen >17 Mrd €.",
      sources:[{label:"HQ Holding – Über uns",url:"https://www.hqholding.com/en/ueber-uns"}] },
    reQuote:{ value:0.12, basis:"extrapolation",
      note:"RE Teil der Real-Assets-Allokation, überwiegend über Fonds/US – exakte Quote nicht öffentlich.",
      sources:[{label:"HQ Trust",url:"https://www.hqtrust.de/"}] },
    reInvestedEUR:2.0,
    usage:{ Wohnen:80, Sonstiges:20 },
    confirmedObjects:[
      { name:"Harald-Quandt-Haus", address:"Am Pilgerrain 17, 61352 Bad Homburg", lat:50.2205, lng:8.6050,
        usage:"Buero", area:"Sitz des Family Office", purchaseDate:"Bestand", valueEUR:30, status:"Bestand (Eigennutzung)", images:[],
        sources:[{label:"HQ Holding",url:"https://www.hqholding.com/en/ueber-uns"}] }
    ],
    heatmap:[
      { name:"Rhein-Main (Sitz)", intensity:"niedrig", usages:null, center:[50.15,8.65], radiusKm:30, basis:"extrapolation",
        note:"MFO – DE-Immobilien kaum als Einzelobjekte offengelegt; Region abgeleitet vom Sitz. Reine Einschätzung.",
        sources:[] }
    ]
  },
  {
    id:"aurec", name:"Aurec Capital / Aurec Real Estate Europe GmbH", kurz:"Aurec Capital",
    typ:"SFO", land:"Israel (investiert in DE)", hqAddress:"Bleibtreustraße 41, 10623 Berlin (DE-Einheit)",
    hqLat:52.5050, hqLng:13.3230, website:"aurec-capital.com", domain:"aurec-capital.com",
    linkedin:"https://www.linkedin.com/company/aurec-capital",
    contactName:"Aurec Real Estate Europe GmbH (Akquisitions-Team)",
    contactRole:"Deal-Sourcing / Asset Management",
    contactChannel:"über aurecre.de · Bleibtreustraße 41, 10623 Berlin",
    category:"gruen",
    aum:{ value:1.5, unit:"Mrd €", basis:"quelle",
      note:"RE-Akquisitionsvolumen DE/PL/CY ~1 Mrd €; Gesamt-AUM nicht öffentlich.",
      sources:[{label:"Aurec Capital – Real Estate",url:"https://aurec-capital.com/real-estate/"}] },
    reQuote:{ value:0.67, basis:"extrapolation",
      note:"RE = Kernstrategie; Anteil am Gesamtvermögen geschätzt.",
      sources:[{label:"Aurec Capital",url:"https://aurec-capital.com/"}] },
    reInvestedEUR:1.0,
    usage:{ Buero:60, Wohnen:25, Retail:15 },
    confirmedObjects:[
      { name:"Gothaer Hauptverwaltung", address:"Gothaer Allee 1, 50969 Köln", lat:50.8992, lng:6.9498,
        usage:"Buero", area:"~100.000 m² (mehrere Gebäude)", purchaseDate:"Sale-and-Leaseback", valueEUR:300, status:"Bestand", images:[],
        sources:[{label:"Aurec Capital – Real Estate",url:"https://aurec-capital.com/real-estate/"}] },
      { name:"Eschborn Plaza", address:"Mergenthalerallee, 65760 Eschborn", lat:50.1439, lng:8.5706,
        usage:"Buero", area:"~42.000 m²", purchaseDate:"Bestand", valueEUR:150, status:"Bestand", images:[],
        sources:[{label:"Aurec Capital – Real Estate",url:"https://aurec-capital.com/real-estate/"}] }
    ],
    heatmap:[
      { name:"Köln", intensity:"hoch", usages:["Buero"], center:[50.90,6.95], radiusKm:20, basis:"quelle",
        sources:[{label:"Aurec Capital – Gothaer HV",url:"https://aurec-capital.com/real-estate/"}] },
      { name:"Rhein-Main / Eschborn", intensity:"mittel", usages:["Buero"], center:[50.14,8.57], radiusKm:20, basis:"quelle",
        sources:[{label:"Aurec Capital – Eschborn Plaza",url:"https://aurec-capital.com/real-estate/"}] },
      { name:"Berlin (Wohnportfolio)", intensity:"mittel", usages:["Wohnen"], center:[52.50,13.41], radiusKm:15, basis:"quelle",
        sources:[{label:"Aurec Capital – Wohnportfolio Berlin",url:"https://aurec-capital.com/real-estate/"}] }
    ]
  },
  {
    id:"dohle", name:"DOHLE Family Office (Handelsgruppe Holding GmbH & Co. KG)", kurz:"Dohle Family Office",
    typ:"SFO", land:"Deutschland", hqAddress:"Jean-Dohle-Straße 1, 53721 Siegburg",
    hqLat:50.7900, hqLng:7.2000, website:"dohle-gruppe.com", domain:"dohle-gruppe.com",
    linkedin:"",
    contactName:"Kurt Dohle · Klaus Dohle · Nicolas von Loeper",
    contactRole:"Geschäftsführung / Investments",
    contactChannel:"über dohle-gruppe.com/invest",
    contactLinkedin:"https://de.linkedin.com/in/nicolas-von-loeper-872059158", contactLinkedinName:"Nicolas von Loeper",
    category:"gruen",
    aum:{ value:2.0, unit:"Mrd €", basis:"extrapolation",
      note:"Keine offizielle Zahl; grobe Größenordnung aus Handelsgruppe + Family Office abgeleitet.",
      sources:[] },
    reQuote:{ value:0.35, basis:"extrapolation",
      note:"Immobilien explizit als Anlagefokus genannt; Anteil geschätzt.",
      sources:[{label:"Dohle – Invest",url:"https://dohle-gruppe.com/invest/"}] },
    reInvestedEUR:0.7,
    usage:{ Wohnen:40, Buero:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rheinland (Köln/Bonn/Siegburg)", intensity:"mittel", usages:null, center:[50.80,7.10], radiusKm:35, basis:"extrapolation",
        note:"Keine öffentlichen Einzelobjekte; Region abgeleitet vom Sitz und Handelsgebiet. Reine Einschätzung.",
        sources:[{label:"Dohle – Invest",url:"https://dohle-gruppe.com/invest/"}] }
    ]
  },
  {
    id:"koehler", name:"KOEHLER GROUP Holding GmbH", kurz:"KOEHLER GROUP",
    typ:"SFO", land:"Deutschland", hqAddress:"Marktplatz 5, 70173 Stuttgart",
    hqLat:48.7758, hqLng:9.1789, website:"koehlergroup.com", domain:"koehlergroup.com",
    linkedin:"https://www.linkedin.com/company/koehler-group",
    contactName:"René Marius Köhler (GF) · KOEHLER Real Estate",
    contactRole:"Geschäftsführer / Gründer",
    contactChannel:"über koehlergroup.com · Marktplatz 5, 70173 Stuttgart",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"quelle",
      note:"Investiertes Kapital ~400 Mio € (von 50 Mio gewachsen), EK-Quote >50 %.",
      sources:[{label:"Stuttgarter Zeitung – R. M. Köhler",url:"https://www.stuttgarter-zeitung.de/inhalt.gruender-ren-marius-koehler-was-den-stuttgarter-zum-erfolgreichen-investor-macht.5e1f475a-7e88-4f72-988c-ea3b68d45dc9.html"}] },
    reQuote:{ value:0.375, basis:"extrapolation",
      note:"1 von 3 Geschäftsfeldern; exakter Anteil nicht öffentlich.",
      sources:[{label:"KOEHLER GROUP",url:"https://www.koehlergroup.com/en/"}] },
    reInvestedEUR:0.15,
    usage:{ Logistik:40, Wohnen:35, Buero:25 },
    confirmedObjects:[
      { name:"Wohn-/Geschäftshaus Königstraße", address:"Königstraße, 70173 Stuttgart", lat:48.7765, lng:9.1795,
        usage:"Retail", area:"2.363 m² (6 Gewerbe + 2 Wohnen)", purchaseDate:"Ankauf", valueEUR:25, status:"Bestand", images:[],
        sources:[{label:"deal-magazin – KOEHLER Königstraße",url:"http://www.deal-magazin.com/news/122154/Stuttgart-KOEHLER-kauft-kernsaniertes-Objekt-auf-der-Koenigstrasse"}] },
      { name:"Wohn-/Geschäftshaus Freiburg", address:"79098 Freiburg im Breisgau", lat:47.9959, lng:7.8494,
        usage:"Wohnen", area:"1.450 m² (11 Einheiten)", purchaseDate:"Ankauf", valueEUR:15, status:"Bestand", images:[],
        sources:[{label:"KOEHLER GROUP",url:"https://www.koehlergroup.com/en/"}] }
    ],
    heatmap:[
      { name:"Region Stuttgart", intensity:"hoch", usages:["Logistik","Wohnen","Buero"], center:[48.78,9.18], radiusKm:30, basis:"quelle",
        sources:[{label:"KOEHLER GROUP – Real Estate",url:"https://www.koehlergroup.com/en/"}] },
      { name:"Süddeutschland", intensity:"mittel", usages:["Logistik","Wohnen"], center:[48.4,9.5], radiusKm:80, basis:"quelle",
        sources:[{label:"KOEHLER GROUP",url:"https://www.koehlergroup.com/en/"}] }
    ]
  },
  {
    id:"molento", name:"Molento (Tengelmann/Haub) – Trei Real Estate GmbH", kurz:"Molento / Trei (Haub)",
    typ:"SFO", land:"Deutschland", hqAddress:"Klaus-Bungert-Str. 5b, 40468 Düsseldorf (Trei)",
    hqLat:51.2600, hqLng:6.7500, website:"treirealestate.com", domain:"treirealestate.com",
    linkedin:"https://www.linkedin.com/company/trei-real-estate-gmbh",
    contactName:"Pepijn Morshuis (CEO) · Matthias Schultz (GF)",
    contactRole:"CEO / Geschäftsführer Trei Real Estate",
    contactChannel:"deutschland@treirealestate.com · +49 211 54011-000",
    contactLinkedin:"https://www.linkedin.com/in/pepijn-morshuis-4503b019/", contactLinkedinName:"Pepijn Morshuis",
    category:"gruen",
    aum:{ value:5.0, unit:"Mrd €", basis:"quelle",
      note:"Immobilienvermögen der Familie/Konzern >5 Mrd € (v. a. Trei).",
      sources:[{label:"THE PROPERTY – Familie Haub",url:"https://the-property.org/2021/06/28/deutschlands-dynastien-diesmal-familie-haub/"}] },
    reQuote:{ value:1.0, basis:"extrapolation",
      note:"Immobilien = dominanter Vermögensblock; Quote ~100 % geschätzt.",
      sources:[{label:"Trei Real Estate",url:"https://www.treirealestate.com/unternehmen"}] },
    reInvestedEUR:5.0,
    usage:{ Retail:60, Wohnen:40 },
    confirmedObjects:[
      { name:"Ehem. Tengelmann-Zentrale (verkauft)", address:"Wissollstraße, 45478 Mülheim a. d. Ruhr", lat:51.4256, lng:6.8583,
        usage:"Sonstiges", area:"historisches Areal", purchaseDate:"2020 verkauft (Soravia)", valueEUR:100, status:"Verkauft", images:[],
        sources:[{label:"Immobilien Zeitung – Verkauf",url:"https://www.iz.de/transaktionen/news/-soravia-kauft-die-muelheimer-tengelmann-zentrale-156396"}] }
    ],
    heatmap:[
      { name:"Bundesweit (Nahversorgung)", intensity:"hoch", usages:["Retail"], center:[51.2,10.2], radiusKm:180, basis:"quelle",
        sources:[{label:"private-banking-magazin – Molento/MEAG",url:"https://www.private-banking-magazin.de/tengelmann-family-office-verkauft-immobilien-an-die-meag/"}] },
      { name:"Metropolen (Wohn-Development)", intensity:"mittel", usages:["Wohnen"], center:[52.0,9.5], radiusKm:120, basis:"quelle",
        sources:[{label:"Trei Real Estate – Wohnen",url:"https://www.treirealestate.com/unternehmen"}] }
    ]
  },
  {
    id:"kuehne", name:"Kühne Holding AG (inkl. Kühne Real Estate AG)", kurz:"Kühne Holding",
    typ:"SFO", land:"Schweiz (investiert in DE)", hqAddress:"Schindellegi (Feusisberg), Kanton Schwyz, CH",
    hqLat:47.1500, hqLng:8.7200, website:"kuehne-holding.com", domain:"kuehne-holding.com",
    linkedin:"https://www.linkedin.com/company/k%C3%BChne-holding-ag",
    contactName:"Karl Gernandt (Präsident) · Kühne Real Estate AG",
    contactRole:"Präsident / Verwaltungsrat",
    contactChannel:"über kuehne-holding.com",
    category:"gelb",
    aum:{ value:30.0, unit:"Mrd €", basis:"extrapolation",
      note:"Vermögen K.-M. Kühne ~30+ Mrd $ (Ranking-Schätzung), nicht = liquides RE-Kapital.",
      sources:[{label:"Wikipedia – Klaus-Michael Kühne",url:"https://en.wikipedia.org/wiki/Klaus-Michael_K%C3%BChne"}] },
    reQuote:{ value:0.03, basis:"extrapolation",
      note:"RE nicht Kern, aber sehr große Einzelprojekte (Elbtower).",
      sources:[{label:"Handelsblatt – Kühne/Elbtower",url:"https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-krise-milliardaer-klaus-michael-kuehne-prueft-uebernahme-des-elbtowers/29523124.html"}] },
    reInvestedEUR:1.0,
    usage:{ Buero:60, Hotel:40 },
    confirmedObjects:[
      { name:"Elbtower (Engagement)", address:"Zweibrückenstraße, HafenCity, 20457 Hamburg", lat:53.5407, lng:10.0110,
        usage:"Buero", area:"~100.000 m² (geplant, 64 Etagen)", purchaseDate:"ab 2024 (nach Signa-Insolvenz)", valueEUR:950, status:"In Entwicklung", images:[],
        sources:[{label:"Handelsblatt – Kühne/Elbtower",url:"https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-krise-milliardaer-klaus-michael-kuehne-prueft-uebernahme-des-elbtowers/29523124.html"}] }
    ],
    heatmap:[
      { name:"Hamburg", intensity:"hoch", usages:["Buero","Hotel"], center:[53.54,10.00], radiusKm:20, basis:"quelle",
        sources:[{label:"Handelsblatt – Elbtower",url:"https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-krise-milliardaer-klaus-michael-kuehne-prueft-uebernahme-des-elbtowers/29523124.html"}] }
    ]
  },
  {
    id:"viessmann", name:"Viessmann Generations Group GmbH & Co. KG", kurz:"Viessmann Generations Group",
    typ:"SFO", land:"Deutschland", hqAddress:"Im Birkenried 1, 35088 Battenberg (Eder)",
    hqLat:51.0100, hqLng:8.6400, website:"vgg.de", domain:"viessmann.com",
    linkedin:"https://de.linkedin.com/company/viessmann",
    contactName:"Max Viessmann (CEO) · FGTC Investment (München)",
    contactRole:"CEO / Family Office Lead",
    contactChannel:"über vgg.de / fgtc-investment.com",
    category:"gelb",
    aum:{ value:4.0, unit:"Mrd €", basis:"extrapolation",
      note:"Familienvermögen mehrere Mrd € nach Carrier-Deal (~12 Mrd €, tw. Aktien/Cash).",
      sources:[{label:"Wikipedia – Viessmann",url:"https://en.wikipedia.org/wiki/Viessmann"}] },
    reQuote:{ value:0.075, basis:"extrapolation",
      note:"RE-Allokation im Aufbau; Anteil klein, wachsend.",
      sources:[{label:"private-banking-magazin – Viessmann/Do Investment",url:"https://www.private-banking-magazin.de/familienunternehmen-kauft-do-investment-und-benennt-es-um/"}] },
    reInvestedEUR:0.3,
    usage:{ Buero:40, Hotel:30, Gastro:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (Aufbau)", intensity:"niedrig", usages:null, center:[51.0,9.5], radiusKm:120, basis:"extrapolation",
        note:"RE-Einheit (Viessmann Real Estate) im Aufbau; keine Einzelobjekte öffentlich. Reine Einschätzung.",
        sources:[{label:"Northdata – Viessmann Generations Group",url:"https://www.northdata.com/Viessmann+Group+GmbH+&+Co.+KG,+Allendorf+(Eder)/Amtsgericht+Marburg+HRA+3389"}] }
    ]
  },
  {
    id:"athos", name:"ATHOS Service GmbH (Strüngmann Family Office)", kurz:"ATHOS (Strüngmann)",
    typ:"SFO", land:"Deutschland", hqAddress:"Rosenheimer Platz 6, 81669 München",
    hqLat:48.1268, hqLng:11.5983, website:"kein öffentlicher Web-Auftritt (SFO)", domain:"",
    linkedin:"", contactName:"Thomas & Andreas Strüngmann · GF: T. Maier, C. Förster, C. Rappl, W. Essler",
    contactRole:"Gesellschafter / Geschäftsführung", contactChannel:"über ATHOS Service GmbH, Rosenheimer Platz 6, 81669 München",
    category:"gelb",
    aum:{ value:30.0, unit:"Mrd €", basis:"quelle",
      note:"~30 Mrd $ inkl. BioNTech-Beteiligung; Fokus Healthcare/Biotech, nicht Immobilien.",
      sources:[{label:"Forbes – Strüngmann Family Office",url:"https://www.forbes.com/sites/paulwestall/2021/08/24/the-family-office-saving-lives-boosting-the-economy-and-making-billions/"},
               {label:"Northdata – ATHOS Service GmbH",url:"https://www.northdata.com/ATHOS%20Service%20GmbH,%20M%C3%BCnchen/HRB%20157929"}] },
    reQuote:{ value:0.05, basis:"extrapolation",
      note:"Kein öffentliches Immobilien-Kerngeschäft; sehr großes Kapital → potenzieller RE-Käufer. Quote reine Einschätzung.",
      sources:[] },
    reInvestedEUR:1.0, usage:{ Sonstiges:100 }, confirmedObjects:[],
    heatmap:[
      { name:"München (Sitz)", intensity:"niedrig", usages:null, center:[48.13,11.60], radiusKm:25, basis:"extrapolation",
        note:"Kein öffentliches Immobilienportfolio; Region vom Sitz abgeleitet. Reine Einschätzung.", sources:[] }
    ]
  },
  {
    id:"zech", name:"Zech Group SE / Deutsche Immobilien Holding (Familie Zech)", kurz:"Zech Group",
    typ:"SFO", land:"Deutschland", hqAddress:"Hansator 20, 28217 Bremen (Überseestadt)",
    hqLat:53.1140, hqLng:8.7690, website:"zech-group.com", domain:"zech-group.com",
    linkedin:"", contactName:"Kurt Zech (Vorsitzender) · Zech Immobilien GmbH / DIH AG",
    contactRole:"Immobilien: Zech Immobilien / Deutsche Immobilien Holding", contactChannel:"über zech-group.com / zech-immobilien.de",
    category:"gruen",
    aum:{ value:8.0, unit:"Mrd €", basis:"extrapolation",
      note:"Einer der größten Projektentwickler Deutschlands; Gesamt-AUM nicht offiziell, Größenordnung geschätzt.",
      sources:[{label:"Wikipedia – Zech Group",url:"https://de.wikipedia.org/wiki/Zech_Group"},
               {label:"Zech Group",url:"https://www.zech-group.com/en/company/"}] },
    reQuote:{ value:0.80, basis:"quelle",
      note:"Immobilien = Kerngeschäft (Zech Immobilien, Deutsche Immobilien Holding).",
      sources:[{label:"Deutsche Immobilien Holding AG",url:"https://www.dih-ag.de/en/company/"},
               {label:"Zech Immobilien",url:"https://www.zech-immobilien.de/"}] },
    reInvestedEUR:6.0, usage:{ Buero:35, Wohnen:25, Hotel:20, Retail:20 }, confirmedObjects:[],
    heatmap:[
      { name:"Bremen (Sitz & Projekte)", intensity:"hoch", usages:["Buero","Wohnen","Hotel"], center:[53.08,8.80], radiusKm:25, basis:"quelle",
        sources:[{label:"Zech Group",url:"https://www.zech-group.com/en/company/"}] },
      { name:"Bundesweit (Projektentwicklung)", intensity:"mittel", usages:["Buero","Wohnen","Hotel","Retail"], center:[51.2,10.2], radiusKm:160, basis:"quelle",
        sources:[{label:"Wikipedia – Zech Group",url:"https://de.wikipedia.org/wiki/Zech_Group"}] }
    ]
  },
  {
    id:"hurler", name:"Jost Hurler Beteiligungs- und Verwaltungs GmbH & Co. KG", kurz:"Jost Hurler",
    typ:"SFO", land:"Deutschland", hqAddress:"Leopoldstraße 184, 80804 München",
    hqLat:48.1790, hqLng:11.5860, website:"jost-hurler.de", domain:"jost-hurler.de",
    linkedin:"", contactName:"Jost Hurler Immobilienmanagement GmbH",
    contactRole:"Immobilienmanagement / Ankauf", contactChannel:"über jost-hurler.de · Leopoldstr. 184, 80804 München",
    category:"gruen",
    aum:{ value:2.0, unit:"Mrd €", basis:"extrapolation",
      note:"Eigenbestands-Immobilien; kein offizielles AUM veröffentlicht.",
      sources:[{label:"Wikipedia – Jost Hurler",url:"https://de.wikipedia.org/wiki/Jost_Hurler"}] },
    reQuote:{ value:0.90, basis:"quelle",
      note:"Immobilien = Kern (Eigenbestand: Shopping-Center, Wohn-/Gewerbeobjekte).",
      sources:[{label:"Jost Hurler",url:"https://www.jost-hurler.de/en/"}] },
    reInvestedEUR:1.8, usage:{ Retail:50, Wohnen:25, Buero:25 },
    confirmedObjects:[
      { name:"HUMA Einkaufswelt", address:"Thomas-Dehler-Straße, 81737 München (Neuperlach)", lat:48.1010, lng:11.6410,
        usage:"Retail", area:"~90.000 m² (nach Neubau)", purchaseDate:"Bestand", valueEUR:300, status:"Bestand", images:[],
        sources:[{label:"Jost Hurler",url:"https://www.jost-hurler.de/en/"},{label:"Wikipedia – Jost Hurler",url:"https://de.wikipedia.org/wiki/Jost_Hurler"}] }
    ],
    heatmap:[
      { name:"München (Eigenbestand)", intensity:"hoch", usages:["Retail","Wohnen","Buero"], center:[48.14,11.57], radiusKm:22, basis:"quelle",
        sources:[{label:"Jost Hurler",url:"https://www.jost-hurler.de/en/"}] }
    ]
  },
  {
    id:"sahle", name:"Sahle Wohnen GmbH & Co. KG (Familie Sahle)", kurz:"Sahle Wohnen",
    typ:"SFO", land:"Deutschland", hqAddress:"Bismarckstraße 34, 48268 Greven",
    hqLat:52.0920, hqLng:7.6180, website:"sahle-wohnen.de", domain:"sahle-wohnen.de",
    linkedin:"", contactName:"Familie Sahle · GF Andreas Tegelkamp / Carsten Lucassen",
    contactRole:"Geschäftsführung / Bestandshaltung", contactChannel:"kontakt@sahle.de · Bismarckstr. 34, 48268 Greven",
    category:"gruen",
    aum:{ value:3.5, unit:"Mrd €", basis:"extrapolation",
      note:"~23.000 eigene Wohnungen; Wert grob aus Bestand geschätzt (kein offizielles AUM).",
      sources:[{label:"Wikipedia – Sahle Wohnen",url:"https://de.wikipedia.org/wiki/Sahle_Wohnen"}] },
    reQuote:{ value:0.95, basis:"quelle",
      note:"Reines Wohnungsunternehmen (Bestandshalter).",
      sources:[{label:"Sahle Wohnen",url:"https://www.sahle-wohnen.de/"}] },
    reInvestedEUR:3.5, usage:{ Wohnen:100 }, confirmedObjects:[],
    heatmap:[
      { name:"NRW (Münsterland/Rheinland)", intensity:"hoch", usages:["Wohnen"], center:[51.6,7.3], radiusKm:70, basis:"quelle",
        sources:[{label:"Sahle Wohnen – Standorte",url:"https://www.sahle-wohnen.de/"}] },
      { name:"Berlin / Hamburg / Frankfurt", intensity:"niedrig", usages:["Wohnen"], center:[52.2,10.5], radiusKm:130, basis:"quelle",
        sources:[{label:"Wikipedia – Sahle Wohnen",url:"https://de.wikipedia.org/wiki/Sahle_Wohnen"}] }
    ]
  },
  {
    id:"doblinger", name:"Doblinger Beteiligung GmbH (Doblinger Unternehmensgruppe)", kurz:"Doblinger",
    typ:"SFO", land:"Deutschland", hqAddress:"Lilienthalallee 25, 80939 München",
    hqLat:48.2095, hqLng:11.5760, website:"doblinger-unternehmensgruppe.de", domain:"doblinger-unternehmensgruppe.de",
    linkedin:"", contactName:"Familie/Unternehmensgruppe Doblinger (gegr. Alfons Doblinger)",
    contactRole:"Immobilien / Bestandshaltung", contactChannel:"über doblinger-unternehmensgruppe.de",
    category:"gruen",
    aum:{ value:8.0, unit:"Mrd €", basis:"extrapolation",
      note:"~19.000 Wohnungen + Toplagen München; laut Presse eines der wertvollsten Immobilienvermögen – Größenordnung geschätzt.",
      sources:[{label:"Rosa-Luxemburg-Stiftung",url:"https://www.rosalux.de/news/id/52100/doblinger-das-wertvollste-immobilienvermoegen"},
               {label:"Wikipedia – Doblinger",url:"https://de.wikipedia.org/wiki/Doblinger_Unternehmensgruppe"}] },
    reQuote:{ value:0.90, basis:"quelle",
      note:"Immobilien = Kern (Wohnbestand + Toplagen-Grundstücke München).",
      sources:[{label:"Doblinger Unternehmensgruppe",url:"https://www.doblinger-unternehmensgruppe.de/"}] },
    reInvestedEUR:7.0, usage:{ Wohnen:70, Retail:20, Buero:10 },
    confirmedObjects:[
      { name:"Kaufhof-/Galeria-Gebäude am Marienplatz", address:"Kaufingerstraße 1–5, 80331 München", lat:48.1372, lng:11.5745,
        usage:"Retail", area:"Warenhaus-Immobilie (Toplage)", purchaseDate:"Bestand", valueEUR:400, status:"Bestand", images:[],
        sources:[{label:"Rosa-Luxemburg-Stiftung",url:"https://www.rosalux.de/news/id/52100/doblinger-das-wertvollste-immobilienvermoegen"},
                 {label:"Abendzeitung München",url:"https://www.abendzeitung-muenchen.de/muenchen/bayernlb-verkauft-luxusbauten-an-doblinger-und-benko-entstehen-wohnungen-art-838859"}] }
    ],
    heatmap:[
      { name:"München (Kernmarkt)", intensity:"hoch", usages:["Wohnen","Retail","Buero"], center:[48.14,11.57], radiusKm:22, basis:"quelle",
        sources:[{label:"Doblinger",url:"https://www.doblinger-unternehmensgruppe.de/"}] }
    ]
  },
  {
    id:"garbe", name:"GARBE Industrial Real Estate GmbH (Familie Garbe)", kurz:"GARBE",
    typ:"SFO", land:"Deutschland", hqAddress:"Caffamacherreihe 8, 20355 Hamburg",
    hqLat:53.5560, hqLng:9.9860, website:"garbe.de", domain:"garbe.de",
    linkedin:"https://de.linkedin.com/company/garbe-industrial-real-estate-gmbh",
    contactName:"Familie Garbe · GARBE Industrial Real Estate", contactRole:"Ankauf Logistik-/Industrieimmobilien",
    contactChannel:"über garbe-industrial.de", category:"gruen",
    aum:{ value:10.3, unit:"Mrd €", basis:"quelle",
      note:"AUM >10 Mrd € (2022); 194 Objekte, 5,3 Mio m² (europaweit).",
      sources:[{label:"GARBE – 10 Mrd € AUM",url:"https://www.garbe-industrial.de/garbe-industrial-real-estate-knackt-im-ersten-halbjahr-die-10-milliarden-euro-marke-bei-den-assets-under-management/"}] },
    reQuote:{ value:1.0, basis:"quelle",
      note:"Spezialist Logistik-/Industrieimmobilien (Kerngeschäft).",
      sources:[{label:"GARBE Industrial",url:"https://www.garbe-industrial.de/"}] },
    reInvestedEUR:10.3, usage:{ Logistik:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Logistik-Hubs bundesweit", intensity:"hoch", usages:["Logistik"], center:[51.2,10.2], radiusKm:170, basis:"quelle",
        sources:[{label:"GARBE Industrial – Portfolio",url:"https://www.garbe-industrial.de/"}] }
    ]
  },
  {
    id:"becken", name:"Becken Holding GmbH (Family Office Dieter Becken)", kurz:"Becken",
    typ:"SFO", land:"Deutschland", hqAddress:"Esplanade 41, 20354 Hamburg",
    hqLat:53.5585, hqLng:9.9905, website:"becken-hamburg.de", domain:"becken-hamburg.de",
    linkedin:"https://de.linkedin.com/company/becken-holding-gmbh",
    contactName:"Dieter Becken (Gründer) · Becken Development / Asset Management / Estates",
    contactRole:"Development / Asset Management / Ankauf", contactChannel:"info@becken.de · Esplanade 41, 20354 Hamburg",
    category:"gruen",
    aum:{ value:2.0, unit:"Mrd €", basis:"extrapolation",
      note:"Inhabergeführtes Immobilien-/Investmenthaus (seit 1978); AUM nicht offiziell, geschätzt.",
      sources:[{label:"Becken – Unternehmen",url:"https://www.becken-hamburg.de/en/unternehmen/"}] },
    reQuote:{ value:0.90, basis:"quelle",
      note:"Immobilien = Kern (Büro, Wohnen, Logistik; Development + Asset-Management).",
      sources:[{label:"Becken",url:"https://www.becken-hamburg.de/"}] },
    reInvestedEUR:1.8, usage:{ Buero:50, Wohnen:30, Logistik:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg (Sitz & Projekte)", intensity:"hoch", usages:["Buero","Wohnen"], center:[53.55,9.99], radiusKm:22, basis:"quelle",
        sources:[{label:"Becken",url:"https://www.becken-hamburg.de/"}] },
      { name:"Berlin / Frankfurt / München", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.5,10.5], radiusKm:150, basis:"quelle",
        sources:[{label:"Becken – Standorte",url:"https://www.becken-hamburg.de/en/unternehmen/"}] }
    ]
  },
  {
    id:"momeni", name:"MOMENI Group (MOMENI Immobilien Holding)", kurz:"MOMENI",
    typ:"SFO", land:"Deutschland", hqAddress:"Kaiser-Wilhelm-Straße 14, 20355 Hamburg",
    hqLat:53.5555, hqLng:9.9820, website:"momeni-group.com", domain:"momeni-group.com",
    linkedin:"https://de.linkedin.com/company/momeni-group1",
    contactName:"Familie Momeni · MOMENI Investment Management", contactRole:"Investment Management / Development / Ankauf",
    contactChannel:"über momeni-group.com", category:"gruen",
    aum:{ value:3.0, unit:"Mrd €", basis:"extrapolation",
      note:"Inhabergeführter Investment-/Fondsmanager (gegr. 2004); AUM nicht offiziell, geschätzt.",
      sources:[{label:"MOMENI Group",url:"https://momeni-group.com/en/"}] },
    reQuote:{ value:0.90, basis:"quelle",
      note:"Hochwertige Innenstadt-Immobilien (Büro/Retail) in Metropolen – Kerngeschäft.",
      sources:[{label:"MOMENI – Properties",url:"https://momeni-group.com/en/properties"}] },
    reInvestedEUR:2.5, usage:{ Buero:50, Retail:30, Wohnen:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Innenstadt-Metropolen (HH/FfM/D/B)", intensity:"hoch", usages:["Buero","Retail"], center:[51.6,9.9], radiusKm:150, basis:"quelle",
        sources:[{label:"MOMENI – Investment Management",url:"https://momeni-group.com/en/investment-management"}] }
    ]
  },
  {
    id:"gundlach", name:"Gundlach Bau und Immobilien (Familie Gundlach)", kurz:"Gundlach",
    typ:"SFO", land:"Deutschland", hqAddress:"Am Holzgraben 1, 30171 Hannover (Villa Köhler)",
    hqLat:52.3760, hqLng:9.7560, website:"gundlach-bau.de", domain:"gundlach-bau.de",
    linkedin:"", contactName:"Familie Gundlach (5. Gen.: K. Schmidt, C. Schmidt, L. Hansen)",
    contactRole:"Bestand / Development / Verwaltung", contactChannel:"über gundlach-bau.de",
    category:"gruen",
    aum:{ value:0.8, unit:"Mrd €", basis:"extrapolation",
      note:"~4.300 eigene Wohnungen/Objekte (Region Hannover); Wert grob geschätzt.",
      sources:[{label:"Wikipedia – Gundlach",url:"https://de.wikipedia.org/wiki/Gundlach_Bau_und_Immobilien"}] },
    reQuote:{ value:0.85, basis:"quelle",
      note:"Integrierte Immobiliengruppe (Bestand + Development), Fokus Hannover.",
      sources:[{label:"Gundlach – Unternehmen",url:"https://www.gundlach-bau.de/ueber-uns/das-unternehmen"}] },
    reInvestedEUR:0.7, usage:{ Wohnen:80, Buero:10, Retail:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Region Hannover", intensity:"hoch", usages:["Wohnen"], center:[52.37,9.74], radiusKm:35, basis:"quelle",
        sources:[{label:"Gundlach",url:"https://www.gundlach-bau.de/"}] }
    ]
  },
  {
    id:"mayfair", name:"Mayfair Vermögensverwaltungs SE (Familie Herz)", kurz:"Mayfair (Herz)",
    typ:"SFO", land:"Deutschland", hqAddress:"Neuer Jungfernstieg, 20354 Hamburg (Palais Mayfair)",
    hqLat:53.5565, hqLng:9.9925, website:"mayfair-hamburg.de", domain:"mayfair-hamburg.de",
    linkedin:"", contactName:"Günter Herz & Daniela Herz-Schnoeckl (Tchibo-Erben)",
    contactRole:"Familienholding / Investments", contactChannel:"über mayfair-hamburg.de",
    category:"gelb",
    aum:{ value:5.0, unit:"Mrd €", basis:"extrapolation",
      note:"Familienholding der Herz-Geschwister (nach Tchibo-Verkauf 2002); Vermögen mehrere Mrd €, geschätzt.",
      sources:[{label:"Wikipedia – Mayfair Vermögensverwaltung",url:"https://en.wikipedia.org/wiki/Mayfair_Verm%C3%B6gensverwaltung"}] },
    reQuote:{ value:0.20, basis:"extrapolation",
      note:"Immobilien = eine von drei Säulen (neben Unternehmensbeteiligungen und Wertpapieren).",
      sources:[{label:"Mayfair Hamburg",url:"https://www.mayfair-hamburg.de/"}] },
    reInvestedEUR:1.0, usage:{ Sonstiges:60, Buero:20, Wohnen:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg", intensity:"mittel", usages:null, center:[53.55,9.99], radiusKm:22, basis:"extrapolation",
        note:"Immobilien-Säule vorhanden, aber kein öffentliches Objektverzeichnis; Region vom Sitz abgeleitet.",
        sources:[{label:"Mayfair Hamburg",url:"https://www.mayfair-hamburg.de/"}] }
    ]
  }
];

window.USAGE_LABELS = { Buero:"Büro", Wohnen:"Wohnen", Retail:"Einzelhandel/Retail", Logistik:"Logistik", Hotel:"Hotel", Gastro:"Gastronomie", Sonstiges:"Gemischt/Sonstiges" };
window.USAGE_COLORS = { Buero:"#3b82f6", Wohnen:"#22c55e", Retail:"#f59e0b", Logistik:"#8b5cf6", Hotel:"#ec4899", Gastro:"#ef4444", Sonstiges:"#94a3b8" };
window.CATEGORY_META = {
  gruen:{ color:"#34c759", label:"Großes Immobiliengeschäft" },
  gelb: { color:"#ffcc00", label:"Kein/minimales RE (<10%), aber Interesse" },
  rot:  { color:"#ff3b30", label:"Kein Immobiliengeschäft & kein Interesse" }
};
window.INTENSITY = { niedrig:{w:0.13,r:1.0}, mittel:{w:0.20,r:1.25}, hoch:{w:0.28,r:1.5} };
