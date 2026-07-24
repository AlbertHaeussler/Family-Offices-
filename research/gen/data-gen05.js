/* Worker 05 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md
   Geskippt (nicht eingetragen):
   - Bauwens GmbH & Co. KG (Frankfurt): operativer Immobilien-/Entwicklungskonzern, in §0 explizit als RAUS gelistet.
   - COPRO Gruppe (Berlin): operativer Projektentwickler/Immobilienmanager (kein FO).
   - AENU Advisor GmbH (Berlin): Climate-Tech-VC-Fondsmanager für Dritte (Art. 9 SFDR, ~170 Mio Fonds), kein RE — PE/VC für Dritte, daher skip.
*/
window.FO_DATA = (window.FO_DATA || []).concat([
  {
    id:"hevella_elgeti",
    name:"Hevella Capital GmbH & Co. KGaA (Rolf Elgeti / Obotritia)", kurz:"Hevella/Elgeti",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"August-Bebel-Straße 68, 14482 Potsdam",
    hqLat:52.3958, hqLng:13.0980,
    website:"hevella-capital.com", domain:"hevella-capital.com",
    linkedin:"", contactName:"Rolf Elgeti", contactRole:"Gründer/Geschäftsführer (über Hevella Beteiligungen GmbH)", contactChannel:"Impressum hevella-capital.com/impressum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Immobilienschwerpunkt des Elgeti-Kosmos (Obotritia/Hevella): Wohnen sowie Handels-/Nahversorgungsimmobilien und Light-Industrial/Logistik, überwiegend in ost- und norddeutschen Sekundär-/B-Lagen — sichtbar über die von Elgeti gegründeten/geführten REITs (Deutsche Konsum REIT: Handel/Nahversorgung; Deutsche Industrie REIT: Logistik/Light-Industrial; TAG-Historie: Wohnen). Value-Add/opportunistisch, Bestandshalter mit hoher Deal-Frequenz. Konkrete Ticketgrößen/Regionen des privaten Vehikels nicht separat öffentlich (Quelle: MarketScreener/Business Immo Profil Rolf Elgeti, obotritia-capital.com).",
    category:"gruen",
    aum:{ value:1.0, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — privates Vermögen Elgeti/Obotritia nicht öffentlich beziffert; RE-Exponierung überwiegend über gelistete REITs (DKR/DIR) und Beteiligungen, nicht als Direkt-AUM des FO ausgewiesen.", sources:[] },
    reQuote:{ value:0.6, basis:"extrapolation", note:"Reine Einschätzung — Elgeti stammt aus dem Immobiliengeschäft (Ex-CEO TAG), RE dominiert das Portfolio, daneben VC/Financial Services.", sources:[] },
    reInvestedEUR:0.6,
    usage:{ Wohnen:40, Retail:35, Logistik:20, Buero:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Ostdeutschland/Brandenburg (Nahversorgung & Wohnen)", intensity:"hoch", usages:["Retail","Wohnen"], center:[52.40,13.06], radiusKm:120,
        basis:"quelle", note:"Elgeti-REITs (Deutsche Konsum REIT / Deutsche Industrie REIT) mit Schwerpunkt ost-/norddeutsche Sekundärlagen; privates Vehikel Hevella/Obotritia im selben Umfeld aktiv.", sources:[{label:"MarketScreener Rolf Elgeti",url:"https://www.marketscreener.com/insider/ROLF-ELGETI-A0CNAJ/"},{label:"Obotritia Capital",url:"https://www.obotritia-capital.com/"}] },
      { name:"Deutschland (Light-Industrial/Logistik)", intensity:"mittel", usages:["Logistik"], center:[51.30,10.50], radiusKm:250,
        basis:"quelle", note:"Über Deutsche Industrie REIT AG bundesweit Light-Industrial-Objekte.", sources:[{label:"Business Immo — Elgeti",url:"https://www.businessimmo.com/eu/directory/peoples/159249"}] }
    ],
    about:["Privates Investmentvehikel von Rolf Elgeti (Ex-CEO TAG Immobilien) rund um Obotritia Capital KGaA","Breiter Fokus: gelistete/ungelistete Immobilien, VC, Financial Services","RE-Exponierung v.a. über die von Elgeti gegründeten REITs Deutsche Konsum REIT und Deutsche Industrie REIT"],
    structure:{
      fo:"Hevella Capital GmbH & Co. KGaA, Potsdam — Teil des Elgeti/Obotritia-Family-Office-Kosmos.",
      managers:["Rolf Elgeti (über Hevella Beteiligungen GmbH als Komplementärin)"],
      decisions:"Investitionsentscheidungen bei Elgeti/Obotritia; operative RE-Umsetzung teils über die börsennotierten REITs.",
      contact:"Objektangebote an Obotritia Capital / Elgeti-Umfeld richten (nicht an die gelisteten REITs als Erstadresse)."
    }
  },
  {
    id:"faktumb_sfo",
    name:"faktum-b GmbH (deutsches Single Family Office)", kurz:"faktum-b",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Liebigstraße 53, 60323 Frankfurt am Main",
    hqLat:50.1173, hqLng:8.6631,
    website:"faktum-b.de", domain:"faktum-b.de",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"Impressum faktum-b.de/impressum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Laut Eigendarstellung (faktum-b.de) langfristig orientiertes SFO seit 2007 (zwei Generationen, DE/SE/GB) mit Fokus auf alternative/illiquide Assetklassen — insbesondere Direktinvestments in Immobilien sowie Private Equity über Fondsbeteiligungen. Konkrete Ankaufskriterien (Nutzung, Ticketgröße, Regionen, Risikoklasse) nicht öffentlich spezifiziert; eigene Gesellschaft 'faktum-b capital (GmbH & Co.) KG' als Investmentvehikel. Ansonsten nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Vermögen nicht öffentlich beziffert. SFO seit 2007, zwei Generationen.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — RE als eine von mehreren illiquiden Assetklassen (neben PE-Fonds) genannt.", sources:[] },
    reInvestedEUR:0.15,
    usage:{ Buero:35, Wohnen:35, Retail:15, Sonstiges:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (Direkt-Immobilien)", intensity:"mittel", usages:["Buero","Wohnen"], center:[50.11,8.68], radiusKm:250,
        basis:"quelle", note:"SFO nennt Direktinvestments in Immobilien als Kern-Assetklasse; konkrete Standorte nicht veröffentlicht.", sources:[{label:"faktum-b — Single Family Office",url:"https://faktum-b.de/"}] }
    ],
    about:["Deutsches Single Family Office seit 2007, zwei Vermögensinhaber-Generationen (DE/SE/GB)","Fokus auf illiquide/alternative Assetklassen","Kern: Direktinvestments Immobilien + Private Equity über Fonds"],
    structure:{
      fo:"faktum-b GmbH / faktum-b capital (GmbH & Co.) KG, Frankfurt.",
      managers:[],
      decisions:"Family-Office-intern; keine öffentlichen Namen der Investmentverantwortlichen.",
      contact:"Kontakt über Impressum faktum-b.de; Objekte an das SFO direkt."
    }
  },
  {
    id:"priam_riegel",
    name:"Priam Immobilien GmbH (Familie Riegel)", kurz:"Priam/Riegel",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Wilhelmstr. 43, 53474 Bad Neuenahr-Ahrweiler",
    hqLat:50.5480, hqLng:7.1170,
    website:"", domain:"",
    linkedin:"", contactName:"Julia Riegel", contactRole:"Geschäftsführerin (Hans Arndt Riegel: Prokura)", contactChannel:"Handelsregister Koblenz HRB 28240",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 28240 (AG Koblenz)",
    ankaufsprofil:"Gesellschaftszweck laut Handelsregister: Verwaltung und Nutzung ausschließlich eigenen Grundbesitzes und Kapitalvermögens; ergänzend Verwaltung von Wohngebäuden bzw. Bau und Verkauf von Ein-/Zweifamilienhäusern und Eigentumswohnungen. Also wohnwirtschaftlicher Eigenbestand der Familie Riegel im Raum Bonn/Rheinland (2021 von Bonn nach Bad Neuenahr-Ahrweiler verlegt, vormals 'Riegel Grundinvest GmbH'). Ticketgröße/Regionen/Off-Market nicht öffentlich spezifiziert (Quelle: Northdata/webvalid HRB 28240).",
    category:"gruen",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Vermögen nicht öffentlich; Stammkapital nur 25.000 €, hält aber eigenen Grundbesitz. Familie Riegel (Namensnähe zur Haribo-Gründerfamilie Riegel nicht belegt).", sources:[] },
    reQuote:{ value:0.8, basis:"quelle", note:"Gesellschaftszweck ist ausschließlich eigener Grundbesitz + Kapitalvermögen — RE ist der Kern.", sources:[{label:"Priam Immobilien — Northdata",url:"https://www.northdata.com/Priam%20Immobilien%20GmbH,%20Bad%20Neuenahr-Ahrweiler/Amtsgericht%20Koblenz%20HRB%2028240"}] },
    reInvestedEUR:0.16,
    usage:{ Wohnen:80, Buero:10, Retail:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Raum Bonn / Rheinland / Ahrtal (Wohnen)", intensity:"mittel", usages:["Wohnen"], center:[50.60,7.10], radiusKm:40,
        basis:"quelle", note:"Familien-RE-Holding, Sitz Bonn→Bad Neuenahr-Ahrweiler; eigener Grundbesitz, konkrete Adressen nicht öffentlich.", sources:[{label:"Priam Immobilien — Companyhouse",url:"https://www.companyhouse.de/en/Priam-Immobilien-GmbH-Bad-Neuenahr-Ahrweiler"}] }
    ],
    about:["RE-Holding der Familie Riegel (Julia Riegel GF, Hans Arndt Riegel Prokura)","Zweck: Verwaltung/Nutzung ausschließlich eigenen Grundbesitzes","Vormals 'Riegel Grundinvest GmbH', 2021 von Bonn nach Bad Neuenahr-Ahrweiler verlegt"],
    structure:{
      fo:"Priam Immobilien GmbH (+ Priam Beteiligungs-GmbH als Beteiligungsholding), Bad Neuenahr-Ahrweiler.",
      managers:["Julia Riegel (GF)","Hans Arndt Riegel (Prokurist)"],
      decisions:"Familienintern (Riegel).",
      contact:"Über die Gesellschaft / Handelsregisteradresse Wilhelmstr. 43."
    }
  },
  {
    id:"hec_haindl",
    name:"HEC Vermögensverwaltung GmbH (Familie Haindl)", kurz:"HEC/Haindl",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Exerzierstraße 24, 13357 Berlin",
    hqLat:52.5520, hqLng:13.3750,
    website:"", domain:"",
    linkedin:"", contactName:"Thomas Haindl", contactRole:"Geschäftsführer (mit Heinrich Essing)", contactChannel:"HRB 120327 B (AG Charlottenburg)",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 120327 B (AG Charlottenburg)",
    ankaufsprofil:"nicht öffentlich ermittelbar — Vermögensverwaltung der Familie Haindl (Papier-Dynastie; Haindl Papier ging an UPM-Kymmene). Keine öffentlichen Ankaufskriterien; kein erkennbarer Immobilien-Investmentschwerpunkt dokumentiert (Quelle: Northdata HRB 120327 B).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentlicher Wert. Haindl-Familienvermögen stammt aus Verkauf der Papiersparte an UPM; HEC ist ein Vermögensverwaltungsvehikel (laut einer Quelle Status inaktiv/geschlossen).", sources:[] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung — kein RE-Schwerpunkt dokumentiert; breite Vermögensverwaltung.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (allgemein)", intensity:"niedrig", usages:["Buero","Wohnen"], center:[51.00,10.00], radiusKm:300,
        basis:"extrapolation", note:"Reine Einschätzung — kein konkreter RE-Standort belegt; Vermögensverwaltung ohne öffentlichen Immobilienfokus.", sources:[] }
    ],
    about:["Vermögensverwaltung der Familie Haindl (ehem. größter deutscher Papierhersteller, verkauft an UPM-Kymmene)","GF Thomas Haindl / Heinrich Essing","Kein öffentlich dokumentierter Immobilien-Investmentschwerpunkt"],
    structure:{
      fo:"HEC Vermögensverwaltung GmbH, Berlin.",
      managers:["Thomas Haindl","Heinrich Essing"],
      decisions:"Familienintern.",
      contact:"Über Handelsregisteradresse; nicht mit Serafin-Holding (Philipp Haindl) verwechseln."
    }
  },
  {
    id:"olbricht_vv",
    name:"Prof. Dr. Dr. Thomas Olbricht Vermögensverwaltung (Familie Ströher/Wella)", kurz:"Olbricht",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Oefte 6, 45219 Essen",
    hqLat:51.3600, hqLng:6.9400,
    website:"", domain:"",
    linkedin:"", contactName:"Prof. Dr. Dr. Thomas Olbricht", contactRole:"Inhaber", contactChannel:"—",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar — privates Vermögen von Thomas Olbricht (Erbe der Wella-/Ströher-Gründerfamilie, ~165 Mio € aus dem Wella-Verkauf an P&G). Schwerpunkt öffentlich sichtbar auf Kunst (Olbricht Collection / me Collectors Room Berlin), kein dokumentiertes Immobilien-Ankaufsprofil (Quelle: Wikipedia/Handelsblatt).",
    category:"gelb",
    aum:{ value:0.85, unit:"Mrd €", basis:"quelle", note:"Vermögen ~850 Mio € (Manager Magazin 2013, Rang 138 der 500 reichsten Deutschen). Wella-/Ströher-Familie.", sources:[{label:"Thomas Olbricht — Wikipedia",url:"https://de.wikipedia.org/wiki/Thomas_Olbricht"},{label:"Wirtschaft-Magazin Porträt",url:"https://wirtschaft-magazin.de/thomas-olbricht/"}] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung — Schwerpunkt Kunst/Beteiligungen, kein dokumentierter RE-Kern.", sources:[] },
    reInvestedEUR:0.08,
    usage:{ Buero:40, Wohnen:40, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (allgemein)", intensity:"niedrig", usages:["Sonstiges"], center:[51.36,6.94], radiusKm:200,
        basis:"extrapolation", note:"Reine Einschätzung — kein belegter Immobilienstandort; Vermögen v.a. Kunst/Beteiligungen.", sources:[] }
    ],
    about:["Privatvermögen Prof. Dr. Dr. Thomas Olbricht, Erbe der Wella-Gründerfamilie Ströher","~850 Mio € Vermögen (Manager Magazin 2013)","Öffentlich v.a. als Kunstsammler bekannt (me Collectors Room Berlin) — kein RE-Kern dokumentiert"],
    structure:{
      fo:"Prof. Dr. Dr. Thomas Olbricht Vermögensverwaltung, Essen-Kettwig (Oefte 6).",
      managers:["Thomas Olbricht"],
      decisions:"Persönlich/familienintern.",
      contact:"Diskretes Einzel-FO; keine öffentliche Ankaufsstelle."
    }
  },
  {
    id:"zwei7_wulf",
    name:"zwei.7 Holding GmbH (Karsten Wulf)", kurz:"zwei.7",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Heger-Tor-Wall 26, 49078 Osnabrück",
    hqLat:52.2760, hqLng:8.0370,
    website:"zweipunkt7.com", domain:"zweipunkt7.com",
    linkedin:"linkedin.com/company/zwei-7-holding-gmbh", contactName:"Karsten Wulf", contactRole:"Gründer/CEO", contactChannel:"zweipunkt7.com",
    contactLinkedin:"linkedin.com/in/karsten-wulf-87827a96", contactLinkedinName:"Karsten Wulf",
    uid:"HRB 211017 (AG Osnabrück)",
    ankaufsprofil:"Single Family Office von Karsten Wulf (Gründer/Verkäufer der buw-Gruppe) mit drei Säulen: (1) Nachfolgelösungen/Mittelstands-Beteiligungen, (2) Venture Capital in Digital Health & Care (DACH), (3) Immobilien als dritte Säule. Konkrete RE-Ankaufskriterien (Nutzung, Ticket, Regionen) nicht öffentlich spezifiziert (Quelle: zweipunkt7.com; wirmagazin.de-Interview).",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Vermögen aus Verkauf der buw-Gruppe (Call-Center, ~161 Mio € Umsatz 2016, an Convergys verkauft); FO-Volumen nicht öffentlich beziffert.", sources:[] },
    reQuote:{ value:0.25, basis:"extrapolation", note:"Reine Einschätzung — Immobilien sind eine von drei Säulen, nicht der Kern.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Wohnen:40, Buero:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Osnabrück / Nordwestdeutschland", intensity:"mittel", usages:["Wohnen","Buero"], center:[52.28,8.04], radiusKm:60,
        basis:"quelle", note:"SFO mit Sitz Osnabrück; Immobilien als dritte Portfoliosäule (regionaler Bezug plausibel, konkrete Objekte nicht veröffentlicht).", sources:[{label:"zwei.7 — Unternehmen",url:"https://www.zweipunkt7.com/en/our-company/"},{label:"wir-Magazin Interview Karsten Wulf",url:"https://www.wirmagazin.de/single-family-office/karsten-wulf-gibt-einblicke-in-sein-family-office-zwei-7-20179/"}] }
    ],
    about:["SFO von Karsten Wulf (Gründer der Call-Center-Gruppe buw, verkauft an Convergys)","Drei Säulen: Mittelstands-Nachfolge, VC Digital Health/Care (DACH), Immobilien","Unternehmerischer Investmentansatz"],
    structure:{
      fo:"zwei.7 Holding GmbH, Osnabrück.",
      managers:["Karsten Wulf (Gründer/CEO)"],
      decisions:"Karsten Wulf / FO-Team.",
      contact:"Über zweipunkt7.com; Objekte an die Immobiliensäule des FO."
    }
  },
  {
    id:"etc_endrev",
    name:"ETC Management GmbH — ENDREV Gruppe (Familie Endrev)", kurz:"ETC/ENDREV",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Weimarstraße 21, 70176 Stuttgart (Verwaltung lt. Website Heidehofstr. 10, 70184 Stuttgart)",
    hqLat:48.7780, hqLng:9.1630,
    website:"etc-gruppe.de", domain:"etc-gruppe.de",
    linkedin:"", contactName:"Javor V. Endrev / Kalin V. Endrev", contactRole:"Geschäftsführer (2. Generation)", contactChannel:"etc-gruppe.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 105393 (AG Stuttgart)",
    ankaufsprofil:"Single Family Office der Familie Endrev (ENDREV Gruppe, gegr. 1990 als ETC Trading & Consulting) mit Kernkompetenz Immobilien-Asset-Management. Fokus: Wohn- und Gewerbeimmobilien im Großraum Stuttgart, Schwerpunkt Revitalisierung/Modernisierung von Wohnungen und Mehrfamilienhäusern, energieeffiziente Konzepte und bezahlbarer Wohnraum; Bestandshalter mit Wertsteigerung (Value-Add). Laufender Ankauf ('sucht kontinuierlich neue Objekte'). Ticketgröße/Off-Market nicht beziffert (Quelle: etc-gruppe.de).",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Portfoliovolumen nicht öffentlich; SFO mit RE-Kern seit 1990 im Raum Stuttgart.", sources:[] },
    reQuote:{ value:0.8, basis:"quelle", note:"Kernkompetenz laut Eigendarstellung ist Immobilien-Asset-Management — RE ist der Kern.", sources:[{label:"ETC/ENDREV Gruppe",url:"https://etc-gruppe.de/"}] },
    reInvestedEUR:0.24,
    usage:{ Wohnen:70, Buero:15, Retail:15 },
    confirmedObjects:[],
    heatmap:[
      { name:"Großraum Stuttgart (Wohnen/Gewerbe)", intensity:"hoch", usages:["Wohnen","Buero","Retail"], center:[48.78,9.18], radiusKm:35,
        basis:"quelle", note:"ENDREV revitalisiert Wohnungen/Mehrfamilienhäuser im Großraum Stuttgart; konkrete Objektadressen nicht auf der Website veröffentlicht.", sources:[{label:"ETC/ENDREV — Website",url:"https://etc-gruppe.de/"}] }
    ],
    about:["SFO der Familie Endrev (ENDREV Gruppe), 2. Generation (Javor & Kalin Endrev)","Gegr. 1990 als ETC Trading & Consulting (Heilbronn), heute Stuttgart","Kernkompetenz Immobilien-Asset-Management: Revitalisierung von Wohn-/Mehrfamilienhäusern im Raum Stuttgart"],
    structure:{
      fo:"ETC Management GmbH als Gesellschaft der ENDREV Gruppe (Single Family Office), Stuttgart.",
      managers:["Javor V. Endrev","Kalin V. Endrev"],
      decisions:"Familie Endrev; RE-Ankauf über die ETC/ENDREV-Immobiliengesellschaften.",
      contact:"Über etc-gruppe.de; sucht laut Website kontinuierlich neue Objekte."
    }
  },
  {
    id:"nanz_endrev_rienth",
    name:"NANZ ENDREV RIENTH Immobilien GmbH & Co. KG (Familien Nanz, Endrev, Rienth)", kurz:"NANZ ENDREV RIENTH",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Augsburger Straße 554, 70329 Stuttgart",
    hqLat:48.7750, hqLng:9.2560,
    website:"ner-immobilien.de", domain:"ner-immobilien.de",
    linkedin:"linkedin.com/company/nanz-endrev-rienth-immobilien-gmbh-co-kg", contactName:"Florian Nanz / Javor V. Endrev / Thomas Rienth", contactRole:"geschäftsführende Gesellschafter", contactChannel:"ner-immobilien.de/impressum",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 733536 (AG Stuttgart)",
    ankaufsprofil:"Gemeinschaftsvehikel dreier Stuttgarter Unternehmerfamilien (Nanz, Endrev, Rienth) als Bestandshalter, Investor und Projektentwickler mit eigenem Kapital. Fokus: Wohnanlagen und Mehrfamilienhäuser sowie Neubauentwicklung, Schwerpunkte Gebäudemodernisierung, energieeffiziente Konzepte und bezahlbarer Wohnraum; überwiegend Großraum Stuttgart sowie süd-/mitteldeutsche Regionen. Value-Add/Development, sowohl Bestand als auch Neubau (Quelle: ner-immobilien.de; Presse konii.de). Ticketgröße/Off-Market nicht beziffert.",
    category:"gruen",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Volumen nicht öffentlich; 2021 u.a. wohnwirtschaftliches Paket in Stuttgart veräußert (konii.de).", sources:[] },
    reQuote:{ value:0.9, basis:"quelle", note:"Reines Immobilienvehikel (Bestandshalter/Investor/Entwickler) der drei Familien.", sources:[{label:"NANZ ENDREV RIENTH — Website",url:"https://ner-immobilien.de/"}] },
    reInvestedEUR:0.27,
    usage:{ Wohnen:85, Buero:8, Retail:7 },
    confirmedObjects:[],
    heatmap:[
      { name:"Großraum Stuttgart (Wohnen)", intensity:"hoch", usages:["Wohnen"], center:[48.78,9.18], radiusKm:40,
        basis:"quelle", note:"Bestandshalter/Investor/Entwickler v.a. Wohnanlagen & Mehrfamilienhäuser im Raum Stuttgart; 2021 wohnwirtschaftliches Paket in Stuttgart verkauft.", sources:[{label:"konii.de — NER veräußert Wohnpaket Stuttgart",url:"https://www.konii.de/news/nanz-endrev-rienth-immobilien-veraussert-wohnwirtschaftliches-paket-in-stuttgart-202101252950/"}] },
      { name:"Süd-/Mitteldeutschland", intensity:"mittel", usages:["Wohnen"], center:[49.50,9.50], radiusKm:150,
        basis:"quelle", note:"Laut Eigendarstellung auch in süd- und mitteldeutschen Regionen aktiv.", sources:[{label:"NANZ ENDREV RIENTH — Website",url:"https://ner-immobilien.de/"}] }
    ],
    about:["Gemeinschaftsvehikel der Stuttgarter Familien Nanz, Endrev und Rienth (gegr. 2017)","Bestandshalter, Investor und Projektentwickler mit eigenem Familienkapital","Fokus Wohnen (Bestand + Neubau) im Großraum Stuttgart und süd-/mitteldeutsch"],
    structure:{
      fo:"NANZ ENDREV RIENTH Immobilien GmbH & Co. KG (JV dreier Familien), Stuttgart.",
      managers:["Florian Nanz","Javor V. Endrev","Thomas Rienth"],
      decisions:"Die drei geschäftsführenden Gesellschafterfamilien.",
      contact:"Über ner-immobilien.de; RE-Ankauf direkt im Vehikel."
    }
  },
  {
    id:"radmer_muc",
    name:"Wilhelm Radmer Verwaltung GmbH (Familie Radmer)", kurz:"Radmer",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Fürstenrieder Straße 285/287a, 81377 München",
    hqLat:48.1220, hqLng:11.4940,
    website:"wradmer.de", domain:"wradmer.de",
    linkedin:"", contactName:"Felix Veith Max Radmer", contactRole:"Geschäftsführer (Prokura: Gabriele Brabender, Marcus Wilsing)", contactChannel:"wradmer.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 223331 (AG München)",
    ankaufsprofil:"Familien-Immobilienholding Radmer (gegr. 1964, Stammkapital ~3,38 Mio €): Verwaltung eigenen Grundbesitzes und von Beteiligungen an Immobiliengesellschaften sowie Immobilienentwicklung; Schwerpunkt Raum München. Bestandshaltung eigener Objekte plus Entwicklung. Konkrete Ankaufskriterien (Nutzung, Ticket, Off-Market) nicht öffentlich spezifiziert (Quelle: Northdata/webvalid HRB 223331).",
    category:"gruen",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kein öffentlicher Wert; RE-Holding seit 1964, Stammkapital ~3,38 Mio €, Münchner Eigenbestand.", sources:[] },
    reQuote:{ value:0.85, basis:"quelle", note:"Zweck ist Verwaltung/Entwicklung eigenen Grundbesitzes und Immobilienbeteiligungen — RE ist der Kern.", sources:[{label:"Wilhelm Radmer Verwaltung — Northdata",url:"https://www.northdata.de/Wilhelm%20Radmer%20Verwaltung%20GmbH,%20M%C3%BCnchen/HRB%20223331"}] },
    reInvestedEUR:0.17,
    usage:{ Wohnen:50, Buero:25, Retail:25 },
    confirmedObjects:[],
    heatmap:[
      { name:"München / Raum München", intensity:"hoch", usages:["Wohnen","Buero","Retail"], center:[48.12,11.49], radiusKm:30,
        basis:"quelle", note:"Familien-RE-Holding mit Sitz München-Sendling; Verwaltung/Entwicklung eigenen Grundbesitzes im Raum München. Konkrete Objektadressen nicht öffentlich.", sources:[{label:"Wilhelm Radmer — webvalid HRB 223331",url:"https://www.webvalid.de/company/Wilhelm+Radmer+Verwaltung+GmbH,+M%C3%BCnchen/HRB+223331"}] }
    ],
    about:["Immobilien-Holding der Familie Radmer, München (gegr. 1964)","Zweck: Verwaltung eigenen Grundbesitzes + Immobilienbeteiligungen + Entwicklung","GF Felix Veith Max Radmer; Stammkapital ~3,38 Mio €"],
    structure:{
      fo:"Wilhelm Radmer Verwaltung GmbH, München.",
      managers:["Felix Veith Max Radmer (GF)","Gabriele Brabender (Prokura)","Marcus Wilsing (Prokura)"],
      decisions:"Familie Radmer.",
      contact:"Über wradmer.de / Handelsregisteradresse Fürstenrieder Str."
    }
  }
]);
