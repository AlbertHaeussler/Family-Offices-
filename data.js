/* =========================================================================
   Family Offices – Datensatz (Pilot: 10 immobilien-aktive Family Offices)
   Stand: 07/2026 · Quellen: Impressum/Handelsregister/Northdata/Fachpresse
   -------------------------------------------------------------------------
   WICHTIG: AUM- und Immobilien-€-Werte sind SCHÄTZUNGEN (Presse/Ranking),
   keine testierten Zahlen. Koordinaten sind teils approximiert.
   category: 'gruen' = großes Immobiliengeschäft
             'gelb'  = kein/minimales RE (<~10%) aber Interesse
             'rot'   = kein RE & kein Interesse
   Objekte: nur Deutschland, nur öffentlich belegte Objekte.
   ========================================================================= */

window.FO_DATA = [
  {
    id: "otto",
    name: "CURA Vermögensverwaltung G.m.b.H. & Co. KG",
    kurz: "Otto Family Office (CURA)",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Saseler Damm 39a, 22395 Hamburg",
    hqLat: 53.6510, hqLng: 10.1000,
    website: "ece.com (operative RE-Firma); FO selbst ohne Website",
    domain: "ece.com",
    linkedin: "https://www.linkedin.com/company/ece",
    contactName: "Alexander Otto (CEO ECE) · Henning Eggers (GF CURA/ECE)",
    contactRole: "CEO ECE Group / Geschäftsführer",
    contactChannel: "über ECE Group – Ankauf/Investment-Management",
    aumEUR: 30.0, reInvestedEUR: 20.0, rePercent: 0.67,
    category: "gruen",
    usage: { Retail: 70, Buero: 15, Hotel: 10, Wohnen: 5 },
    confidence: "HQ/Kontakt hoch · Zahlen geschätzt",
    objects: [
      // >200 ECE-Center in DE/EU nicht einzeln öffentlich – nur HQ gepinnt
    ]
  },
  {
    id: "wirtgen",
    name: "WIRTGEN INVEST Holding GmbH",
    kurz: "Wirtgen Invest",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Wirtgen Campus 1, 53577 Neustadt (Wied)",
    hqLat: 50.5500, hqLng: 7.4200,
    website: "wirtgen-invest.de",
    domain: "wirtgen-invest.de",
    linkedin: "https://www.linkedin.com/company/wirtgen-invest-holding-gmbh/",
    contactName: "Jürgen & Stefan Wirtgen · Jörg Rahn (CIO)",
    contactRole: "Geschäftsführer Real Estate / CIO",
    contactChannel: "info@wirtgen-invest.de · +49 2683 9466 0",
    aumEUR: 5.0, reInvestedEUR: 1.5, rePercent: 0.30,
    category: "gruen",
    usage: { Buero: 50, Retail: 25, Hotel: 15, Wohnen: 10 },
    confidence: "Objekte gut belegt (Website-Portfolio)",
    objects: [
      { name: "T8 / Taunusanlage 8", address: "Taunusanlage 8, 60329 Frankfurt a. M.", lat: 50.1136, lng: 8.6722, usage: "Buero", valueEUR: 400, status: "Bestand", conf: "Hoch" },
      { name: "Wallhaus", address: "Neuer Wall, 20354 Hamburg", lat: 53.5525, lng: 9.9906, usage: "Retail", valueEUR: 120, status: "Bestand", conf: "Mittel" },
      { name: "Trinkaus-Karree", address: "Königsallee 21–23, 40212 Düsseldorf", lat: 51.2249, lng: 6.7793, usage: "Retail", valueEUR: 200, status: "Bestand (JV)", conf: "Hoch" }
    ]
  },
  {
    id: "schoerghuber",
    name: "Schörghuber Stiftung & Co. Holding KG / Bayerische Hausbau",
    kurz: "Schörghuber / Bayerische Hausbau",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Denninger Straße 165, 81925 München",
    hqLat: 48.1600, hqLng: 11.6300,
    website: "hausbau.de",
    domain: "hausbau.de",
    linkedin: "https://de.linkedin.com/company/bayerische-hausbau",
    contactName: "Team Ankauf Bayerische Hausbau",
    contactRole: "Ankauf / Investment",
    contactChannel: "ankauf@hausbau.de · Denninger Str. 165, 81925 München",
    aumEUR: 4.0, reInvestedEUR: 3.3, rePercent: 0.82,
    category: "gruen",
    usage: { Wohnen: 35, Buero: 25, Retail: 20, Hotel: 10, Gastro: 10 },
    confidence: "Öffentliches Ankaufsprofil (ab 5.000 m²)",
    objects: [
      { name: "Objekt Marienplatz 22", address: "Marienplatz 22, 80331 München", lat: 48.1371, lng: 11.5754, usage: "Retail", valueEUR: 150, status: "Bestand", conf: "Hoch" },
      { name: "Objekt Kaufingerstraße 15", address: "Kaufingerstraße 15, 80331 München", lat: 48.1379, lng: 11.5719, usage: "Retail", valueEUR: 120, status: "Bestand", conf: "Hoch" },
      { name: "Joseph-Pschorr-Haus", address: "Neuhauser Straße, 80331 München", lat: 48.1385, lng: 11.5688, usage: "Retail", valueEUR: 200, status: "Bestand", conf: "Mittel" },
      { name: "Donisl", address: "Weinstraße 1, 80331 München", lat: 48.1378, lng: 11.5745, usage: "Gastro", valueEUR: 40, status: "Bestand", conf: "Mittel" },
      { name: "BIKINI Berlin (entwickelt, lt. Presse verkauft)", address: "Budapester Straße 38–50, 10787 Berlin", lat: 52.5058, lng: 13.3376, usage: "Buero", valueEUR: 300, status: "Verkauft", conf: "Mittel" }
    ]
  },
  {
    id: "hqtrust",
    name: "HQ Trust GmbH (Harald Quandt Holding)",
    kurz: "HQ Trust / Harald Quandt",
    typ: "MFO",
    land: "Deutschland",
    hqAddress: "Am Pilgerrain 17, 61352 Bad Homburg v. d. Höhe",
    hqLat: 50.2268, hqLng: 8.6100,
    website: "hqtrust.de",
    domain: "hqtrust.de",
    linkedin: "https://www.linkedin.com/company/hq-trust-gmbh/",
    contactName: "Jochen Butz · Christian Stadtmüller (GF)",
    contactRole: "Geschäftsführer · Real-Assets-Team",
    contactChannel: "über hqtrust.de (Kontakt)",
    aumEUR: 17.0, reInvestedEUR: 2.0, rePercent: 0.12,
    category: "gelb",
    usage: { Wohnen: 80, Sonstiges: 20 },
    confidence: "MFO · RE überwiegend über Fonds/US",
    objects: [
      { name: "Harald-Quandt-Haus", address: "Am Pilgerrain 17, 61352 Bad Homburg", lat: 50.2268, lng: 8.6100, usage: "Buero", valueEUR: 30, status: "Bestand (Eigennutzung)", conf: "Hoch" }
    ]
  },
  {
    id: "aurec",
    name: "Aurec Capital / Aurec Real Estate Europe GmbH",
    kurz: "Aurec Capital",
    typ: "SFO",
    land: "Israel (investiert in DE)",
    hqAddress: "Bleibtreustraße 41, 10623 Berlin (DE-Einheit)",
    hqLat: 52.5050, hqLng: 13.3230,
    website: "aurec-capital.com",
    domain: "aurec-capital.com",
    linkedin: "https://www.linkedin.com/company/aurec-capital",
    contactName: "Aurec Real Estate Europe GmbH (Akquisitions-Team)",
    contactRole: "Deal-Sourcing / Asset Management",
    contactChannel: "über aurecre.de · Bleibtreustraße 41, 10623 Berlin",
    aumEUR: 1.5, reInvestedEUR: 1.0, rePercent: 0.67,
    category: "gruen",
    usage: { Buero: 60, Wohnen: 25, Retail: 15 },
    confidence: "Gründer: Morris Kahn & Shmuel Meitar (Israel)",
    objects: [
      { name: "Gothaer Hauptverwaltung", address: "Gothaer Allee 1, 50969 Köln", lat: 50.9016, lng: 6.9589, usage: "Buero", valueEUR: 300, status: "Bestand (Sale-and-Leaseback)", conf: "Hoch" },
      { name: "Eschborn Plaza", address: "Eschborn (bei Frankfurt)", lat: 50.1439, lng: 8.5706, usage: "Buero", valueEUR: 150, status: "Bestand", conf: "Mittel" },
      { name: "Wohnportfolio Berlin", address: "Kreuzberg / Moabit / Friedrichshain, Berlin", lat: 52.4987, lng: 13.4033, usage: "Wohnen", valueEUR: 100, status: "Bestand", conf: "Mittel" }
    ]
  },
  {
    id: "dohle",
    name: "DOHLE Family Office (Handelsgruppe Holding GmbH & Co. KG)",
    kurz: "Dohle Family Office",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Jean-Dohle-Straße 1, 53721 Siegburg",
    hqLat: 50.7900, hqLng: 7.2000,
    website: "dohle-gruppe.com",
    domain: "dohle-gruppe.com",
    linkedin: "",
    contactName: "Kurt Dohle · Klaus Dohle · Nicolas von Loeper",
    contactRole: "Geschäftsführung / Investments",
    contactChannel: "über dohle-gruppe.com/invest",
    aumEUR: 2.0, reInvestedEUR: 0.7, rePercent: 0.35,
    category: "gruen",
    usage: { Wohnen: 40, Buero: 40, Sonstiges: 20 },
    confidence: "RE Anlagefokus belegt · keine Einzelobjekte öffentlich",
    objects: [
      // keine Einzelobjekte öffentlich – nur HQ
    ]
  },
  {
    id: "koehler",
    name: "KOEHLER GROUP Holding GmbH",
    kurz: "KOEHLER GROUP",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Marktplatz 5, 70173 Stuttgart",
    hqLat: 48.7758, hqLng: 9.1789,
    website: "koehlergroup.com",
    domain: "koehlergroup.com",
    linkedin: "https://www.linkedin.com/company/koehler-group",
    contactName: "René Marius Köhler (GF) · KOEHLER Real Estate",
    contactRole: "Geschäftsführer / Gründer",
    contactChannel: "über koehlergroup.com · Marktplatz 5, 70173 Stuttgart",
    aumEUR: 0.4, reInvestedEUR: 0.15, rePercent: 0.375,
    category: "gruen",
    usage: { Logistik: 40, Wohnen: 35, Buero: 25 },
    confidence: "Mehrere Deals belegt (Königstr., Freiburg)",
    objects: [
      { name: "Wohn-/Geschäftshaus Königstraße", address: "Königstraße, 70173 Stuttgart", lat: 48.7770, lng: 9.1785, usage: "Retail", valueEUR: 25, status: "Ankauf/Bestand", conf: "Hoch" },
      { name: "Wohn-/Geschäftshaus Freiburg", address: "79098 Freiburg im Breisgau", lat: 47.9959, lng: 7.8494, usage: "Wohnen", valueEUR: 15, status: "Ankauf/Bestand", conf: "Hoch" }
    ]
  },
  {
    id: "molento",
    name: "Molento (Tengelmann/Haub) – Trei Real Estate GmbH",
    kurz: "Molento / Trei (Haub)",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Klaus-Bungert-Str. 5b, 40468 Düsseldorf (Trei)",
    hqLat: 51.2600, hqLng: 6.7500,
    website: "treirealestate.com",
    domain: "treirealestate.com",
    linkedin: "https://www.linkedin.com/company/trei-real-estate-gmbh",
    contactName: "Pepijn Morshuis (CEO) · Matthias Schultz (GF)",
    contactRole: "CEO / Geschäftsführer Trei Real Estate",
    contactChannel: "deutschland@treirealestate.com · +49 211 54011-000",
    aumEUR: 5.0, reInvestedEUR: 5.0, rePercent: 1.0,
    category: "gruen",
    usage: { Retail: 60, Wohnen: 40 },
    confidence: "Großes Portfolio · einzelne Transaktionen öffentlich",
    objects: [
      { name: "Ehem. Tengelmann-Zentrale (verkauft)", address: "Wissollstraße, 45478 Mülheim a. d. Ruhr", lat: 51.4256, lng: 6.8583, usage: "Sonstiges", valueEUR: 100, status: "2020 verkauft (Soravia)", conf: "Hoch" }
    ]
  },
  {
    id: "kuehne",
    name: "Kühne Holding AG (inkl. Kühne Real Estate AG)",
    kurz: "Kühne Holding",
    typ: "SFO",
    land: "Schweiz (investiert in DE)",
    hqAddress: "Schindellegi (Feusisberg), Kanton Schwyz, CH",
    hqLat: 47.1500, hqLng: 8.7200,
    website: "kuehne-holding.com",
    domain: "kuehne-holding.com",
    linkedin: "https://www.linkedin.com/company/k%C3%BChne-holding-ag",
    contactName: "Karl Gernandt (Präsident) · Kühne Real Estate AG",
    contactRole: "Präsident / Verwaltungsrat",
    contactChannel: "über kuehne-holding.com",
    aumEUR: 30.0, reInvestedEUR: 1.0, rePercent: 0.03,
    category: "gelb",
    usage: { Buero: 60, Hotel: 40 },
    confidence: "RE projektbezogen (Elbtower) · Nebenfeld",
    objects: [
      { name: "Elbtower (Engagement)", address: "Zweibrückenstraße, HafenCity, 20457 Hamburg", lat: 53.5410, lng: 10.0100, usage: "Buero", valueEUR: 950, status: "In Entwicklung", conf: "Hoch" }
    ]
  },
  {
    id: "viessmann",
    name: "Viessmann Generations Group GmbH & Co. KG",
    kurz: "Viessmann Generations Group",
    typ: "SFO",
    land: "Deutschland",
    hqAddress: "Im Birkenried 1, 35088 Battenberg (Eder)",
    hqLat: 51.0100, hqLng: 8.6400,
    website: "vgg.de / fgtc-investment.com",
    domain: "viessmann.com",
    linkedin: "https://de.linkedin.com/company/viessmann",
    contactName: "Max Viessmann (CEO) · FGTC Investment (München)",
    contactRole: "CEO / Family Office Lead",
    contactChannel: "über vgg.de / fgtc-investment.com",
    aumEUR: 4.0, reInvestedEUR: 0.3, rePercent: 0.075,
    category: "gelb",
    usage: { Buero: 40, Hotel: 30, Gastro: 30 },
    confidence: "RE-Einheit im Aufbau (nach Carrier-Deal)",
    objects: [
      // Portfolio im Aufbau – keine Einzelobjekte öffentlich
    ]
  }
];

// Usage-Kategorien (für Pie / Filter)
window.USAGE_LABELS = {
  Buero: "Büro",
  Wohnen: "Wohnen",
  Retail: "Einzelhandel/Retail",
  Logistik: "Logistik",
  Hotel: "Hotel",
  Gastro: "Gastronomie",
  Sonstiges: "Gemischt/Sonstiges"
};

window.USAGE_COLORS = {
  Buero: "#3b82f6",
  Wohnen: "#22c55e",
  Retail: "#f59e0b",
  Logistik: "#8b5cf6",
  Hotel: "#ec4899",
  Gastro: "#ef4444",
  Sonstiges: "#94a3b8"
};

window.CATEGORY_META = {
  gruen: { color: "#34c759", label: "Großes Immobiliengeschäft" },
  gelb:  { color: "#ffcc00", label: "Kein/minimales RE (<10%), aber Interesse" },
  rot:   { color: "#ff3b30", label: "Kein Immobiliengeschäft & kein Interesse" }
};
