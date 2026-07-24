/* Worker 07 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"benner_holding",
    name:"Benner Holding GmbH (Familie Benner)", kurz:"Benner Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Adolfsallee 21, 65185 Wiesbaden",
    hqLat:50.0748, hqLng:8.2385,
    website:"benner-holding.com", domain:"benner-holding.com",
    linkedin:"", contactName:"Dr. Dominik Benner", contactRole:"Geschäftsführender Gesellschafter",
    contactChannel:"Adolfsallee 21, 65185 Wiesbaden / benner-holding.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Diversifizierte Familienholding (5. Generation, seit 1882) mit Immobilien als einem der Hauptstandbeine neben eCommerce (The Platform Group), Handel, Beteiligungen, Landwirtschaft/Energie. Immobilienschwerpunkt Wohnen in Wiesbaden – laut eigener Darstellung einer der größten Vermieter der Stadt mit über 1.000 Wohnungen; zusätzlich Beteiligungs/Buy-&-Build-Zukäufe operativer Unternehmen. Bestandshaltung mit langem Anlagehorizont. Konkrete Ticketgrößen/Regionalfokus über Wiesbaden hinaus nicht öffentlich publiziert (Quelle: benner-holding.com/beteiligungen, de.wikipedia.org/wiki/Benner_Holding, private-banking-magazin.de).",
    category:"gruen",
    aum:{ value:1.3, unit:"Mrd € (Umsatz)", basis:"quelle",
      note:"Gruppenumsatz 2025 ~1,3 Mrd €, 54 Tochtergesellschaften, ~2.470 Mitarbeiter; reines Vermögens-AUM nicht separat ausgewiesen.",
      sources:[{label:"Benner Holding – Wikipedia",url:"https://de.wikipedia.org/wiki/Benner_Holding"}] },
    reQuote:{ value:0.25, basis:"extrapolation",
      note:"Reine Einschätzung: Immobilien sind ein Hauptstandbein (>1.000 Wohnungen Wiesbaden), aber Gruppe wird von eCommerce/Handel dominiert; keine belegte RE-Quote veröffentlicht.",
      sources:[] },
    reInvestedEUR:0.4,
    usage:{ Wohnen:70, Buero:10, Retail:15, Gastro:5 },
    confirmedObjects:[],
    heatmap:[
      { name:"Wiesbaden (Wohnportfolio)", intensity:"hoch", usages:["Wohnen","Retail"], center:[50.0782,8.2397], radiusKm:12,
        basis:"quelle", note:"Laut eigener Darstellung einer der größten Vermieter Wiesbadens mit über 1.000 Wohnungen; Einzeladressen nicht öffentlich.",
        sources:[{label:"Benner Holding – Wikipedia",url:"https://de.wikipedia.org/wiki/Benner_Holding"}] }
    ],
    about:[
      "Familienholding der Familie Benner (Wiesbaden), 5. Generation, Ursprung 1882.",
      "Seit 2012/2014 von Dr. Dominik Benner geführt und zur Holding umgebaut.",
      "Standbeine: Immobilien (Wohnen Wiesbaden), eCommerce/The Platform Group, Handel, Beteiligungen, Landwirtschaft/Energie, Gastronomie.",
      "Valeska Benner verantwortet Immobilien & Finanzierung (seit 2018)."
    ],
    structure:{
      fo:"Benner Holding GmbH – private Familienholding/Family Office, Mehrheitsgesellschafter zahlreicher Beteiligungen.",
      managers:["Dr. Dominik Benner (Eigentümer/Geschäftsführer)","Valeska Benner (Immobilien & Finanzierung)"],
      decisions:"Ankäufe zentral über die Holding-Geschäftsführung; Immobilien über den Bereich Grundbesitz/Finanzierung.",
      contact:"Immobilienangebote an die Benner Holding, Adolfsallee 21, Wiesbaden (Bereich Immobilien/Finanzierung)."
    }
  },

  {
    id:"fo_wimmer",
    name:"Family Office Wimmer GmbH (Familie Wimmer)", kurz:"FO Wimmer",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Ringstraße 14, 84347 Pfarrkirchen",
    hqLat:48.4310, hqLng:12.9270,
    website:"mywimmer.com", domain:"mywimmer.com",
    linkedin:"", contactName:"Hans-Peter Wimmer / Maximilian Wimmer", contactRole:"Geschäftsführer",
    contactChannel:"Ringstraße 14, 84347 Pfarrkirchen / mywimmer.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 11953 (Amtsgericht Landshut)",
    ankaufsprofil:"Single Family Office der Familie Wimmer (Pfarrkirchen/Niederbayern). Gesellschaftszweck laut Handelsregister: Verwaltung eigenen Vermögens, Beteiligungen an anderen Unternehmen im In- und Ausland sowie zentrale Verwaltungs-/Dienstleistungen. Konkretes Immobilien-Ankaufsprofil (Assetklassen, Ticketgröße, Region, Core/Value-Add) nicht öffentlich ermittelbar (Quelle: Handelsregister Landshut HRB 11953, mywimmer.com).",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: SFO mit eigenem Büro und internationalen Beteiligungen; keine belegte Vermögensangabe öffentlich.",
      sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation",
      note:"Reine Einschätzung: Immobilienanteil nicht belegt; SFO verwaltet vorrangig eigenes Vermögen und Unternehmensbeteiligungen.",
      sources:[] },
    reInvestedEUR:0.06,
    usage:{ Wohnen:40, Buero:30, Sonstiges:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Niederbayern / Pfarrkirchen", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.4306,12.9328], radiusKm:40,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz und mutmaßlicher Heimatmarkt des SFO; keine bestätigten Objekte öffentlich.",
        sources:[] }
    ],
    structure:{
      fo:"Family Office Wimmer GmbH – Single Family Office (HRB 11953 Landshut), Verwaltung eigenen Vermögens und Beteiligungen.",
      managers:["Hans-Peter Wimmer","Maximilian Wimmer"],
      decisions:"Anlageentscheidungen über die Geschäftsführung des Family Office.",
      contact:"Family Office Wimmer, Ringstraße 14, Pfarrkirchen."
    }
  },

  {
    id:"reku_holding",
    name:"REKU-Holding GmbH (Familie Kuge)", kurz:"REKU-Holding",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Franz-Gleim-Straße 45, 34212 Melsungen",
    hqLat:51.1290, hqLng:9.5560,
    website:"reku-holding.de", domain:"reku-holding.de",
    linkedin:"", contactName:"Reinhard Kuge / Martin Kuge", contactRole:"Geschäftsführer",
    contactChannel:"Franz-Gleim-Straße 45, 34212 Melsungen / reku-holding.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 11947 (Amtsgericht Fritzlar)",
    ankaufsprofil:"Familienholding der Familie Kuge (Melsungen/Nordhessen, gegr. 2014). Neben Unternehmensbeteiligungen wurde der Ankauf und die Vermietung von Immobilien in den letzten Jahren als zusätzliches Geschäftsfeld ausgebaut – Kauf, Bau und Vermietung von Immobilien im privaten wie gewerblichen Bereich. Regionaler Schwerpunkt Nordhessen (u.a. 2024 Erwerb von 50% an der Sandcenter Melsungen Grundstücks mbH; seit 2020 Eigentümer der W.J. Real Estate Management/Rental). Ticketgröße/Renditeprofil nicht öffentlich beziffert (Quelle: reku-holding.de).",
    category:"gelb",
    aum:{ value:0.25, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung: regionale Familienholding mit wachsendem Immobilienstandbein; keine belegte Vermögensangabe.",
      sources:[] },
    reQuote:{ value:0.35, basis:"quelle",
      note:"Immobilien laut Unternehmensdarstellung eigenes, in den letzten Jahren ausgebautes Geschäftsfeld (Kauf/Bau/Vermietung privat & gewerblich).",
      sources:[{label:"REKU-Holding – Kuge Stiftung/Geschäftsfelder",url:"https://www.reku-holding.de/"}] },
    reInvestedEUR:0.08,
    usage:{ Wohnen:50, Buero:20, Retail:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Melsungen / Nordhessen", intensity:"mittel", usages:["Wohnen","Retail","Buero"], center:[51.1319,9.5498], radiusKm:35,
        basis:"quelle", note:"Kauf, Bau und Vermietung privater & gewerblicher Immobilien; u.a. Beteiligung Sandcenter Melsungen. Einzeladressen nicht öffentlich.",
        sources:[{label:"REKU-Holding GmbH",url:"https://www.reku-holding.de/"}] }
    ],
    structure:{
      fo:"REKU-Holding GmbH – Familienholding der Familie Kuge (HRB 11947 Fritzlar); verbundene Kuge Stiftung.",
      managers:["Reinhard Kuge","Martin Kuge"],
      decisions:"Immobilien-Ankäufe über die Holding-Geschäftsführung.",
      contact:"REKU-Holding, Franz-Gleim-Straße 45, Melsungen."
    }
  },

  {
    id:"anh_hausbesitz",
    name:"ANH Hausbesitz GmbH & Co. KG (Familie Bremke)", kurz:"ANH Hausbesitz",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Neheimer Markt 2, 59755 Arnsberg",
    hqLat:51.4498, hqLng:7.9640,
    website:"anh-hausbesitz.de", domain:"anh-hausbesitz.de",
    linkedin:"", contactName:"Andreas Bremke / Uwe Kröber", contactRole:"Geschäftsführer",
    contactChannel:"Neheimer Markt 2, 59755 Arnsberg / anh-hausbesitz.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRA 2436 (Amtsgericht Arnsberg)",
    ankaufsprofil:"Immobilienvehikel der Kaufmannsfamilie Bremke (Handelsunternehmen Bremke & Hoerster / Famila-Regionalgesellschaft, Ursprung 1864). Fokus auf Entwicklung, Management und Vermietung hochwertiger Handels-, Büro- und Hotelimmobilien: Verbrauchermärkte/Fachmarktzentren, Büro- und Geschäftshäuser, Hotels und Spezial-Einkaufszentren; realisiert mit Ankermietern wie Kaufland, Rewe und Aldi. Schwerpunktregion Sauerland/Arnsberg; Bestandshaltung mit Projektentwicklungsanteil. Ticketgröße nicht öffentlich beziffert (Quelle: anh-hausbesitz.de, wer-zu-wem.de).",
    category:"gruen",
    aum:{ value:0.4, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung des Immobilienbestands (Fachmarkt/Büro/Hotel über 20+ Jahre); keine belegte Portfoliozahl veröffentlicht.",
      sources:[] },
    reQuote:{ value:0.9, basis:"quelle",
      note:"ANH ist das dedizierte Immobilien-/Hausbesitz-Vehikel der Familie Bremke – nahezu vollständig Immobilien.",
      sources:[{label:"ANH Hausbesitz – Historie/Profil",url:"https://www.wer-zu-wem.de/firma/anh-hausbesitz.html"}] },
    reInvestedEUR:0.4,
    usage:{ Retail:55, Buero:20, Hotel:20, Sonstiges:5 },
    confirmedObjects:[
      { name:"Firmensitz / Geschäftshaus Neheimer Markt", address:"Neheimer Markt 2, 59755 Arnsberg", lat:51.4498, lng:7.9640,
        usage:"Buero", area:"n.v.", purchaseDate:"n.v.", valueEUR:null, status:"Bestand",
        images:[], connection:"Sitz und Objekt der ANH Hausbesitz im Rahmen der Quartiersentwicklung 'Aktives Neheim'.",
        sources:[{label:"Aktives Neheim – ANH Hausbesitz",url:"https://arnsberg-neheim.de/service/immobilien/anh-hausbesitz-gmbh-u-co-kg"}] }
    ],
    heatmap:[
      { name:"Sauerland / Arnsberg-Neheim", intensity:"hoch", usages:["Retail","Buero","Hotel"], center:[51.4494,7.9636], radiusKm:30,
        basis:"quelle", note:"Handels-, Büro- und Hotelimmobilien mit Ankermietern Kaufland/Rewe/Aldi; Kernregion Sauerland.",
        sources:[{label:"ANH Hausbesitz",url:"https://www.wer-zu-wem.de/firma/anh-hausbesitz.html"}] }
    ],
    structure:{
      fo:"ANH Hausbesitz GmbH & Co. KG – Immobilien-/Hausbesitzgesellschaft der Familie Bremke (Bremke & Hoerster / Famila).",
      managers:["Andreas Bremke (Geschäftsführer)","Uwe Kröber (Geschäftsführer)"],
      decisions:"Ankäufe/Entwicklungen über die ANH-Geschäftsführung.",
      contact:"ANH Hausbesitz, Neheimer Markt 2, Arnsberg."
    }
  },

  {
    id:"argon_piech",
    name:"Argon GmbH (Family Office Ferdinand Piëch)", kurz:"Argon (Piëch)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Königstraße 19A, 70173 Stuttgart",
    hqLat:48.7784, hqLng:9.1772,
    website:"argon.ag", domain:"argon.ag",
    linkedin:"", contactName:"Ferdinand Piëch / Dirk Wehinger", contactRole:"Geschäftsführer",
    contactChannel:"Königstraße 19A, 70173 Stuttgart",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 727053 (Amtsgericht Stuttgart)",
    ankaufsprofil:"Single Family Office von Ferdinand Piëch (jr.), Sohn des früheren VW-Patriarchen. Fokus auf erstklassige, ertragsstarke Gewerbeimmobilien in Toplagen im deutschsprachigen Raum (Deutschland/Österreich) – klassische Family-Office-Strategie: Prime-Standorte, lange Haltedauer, geringer Fremdkapitalhebel, Bestandshaltung. Belegte Objekte u.a. Hindenburgbau Stuttgart (2019 für ~101 Mio. € erworben, Zentrum 01 GmbH), ferner Forum1 Böblingen und Stachus-Objekt München (Presse). Diskretes Off-Market-Vorgehen ohne öffentliches Ankaufsprofil (Quelle: Stuttgarter Zeitung/Nachrichten, THOMAS DAILY, Immobilien Zeitung).",
    category:"gruen",
    aum:{ value:3.0, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung des Familienvermögens/Immobilienportfolios Ferdinand Piëch (jr.); kein öffentlich belegter Gesamtwert.",
      sources:[] },
    reQuote:{ value:0.7, basis:"extrapolation",
      note:"Reine Einschätzung: Family Office mit starkem Immobilienfokus (Prime-Gewerbe); Quote nicht offiziell beziffert.",
      sources:[] },
    reInvestedEUR:2.0,
    usage:{ Buero:45, Retail:45, Gastro:5, Sonstiges:5 },
    confirmedObjects:[
      { name:"Hindenburgbau Stuttgart", address:"Arnulf-Klett-Platz 2, 70173 Stuttgart", lat:48.7838, lng:9.1808,
        usage:"Retail", area:"~17.270 m²", purchaseDate:"2019", valueEUR:101, status:"Bestand",
        images:[], connection:"2019 über die Zentrum 01 GmbH (Ferdinand Piëch Holding / Piëch Holding) für ~101 Mio. € erworben.",
        sources:[
          {label:"THOMAS DAILY: Piëch kauft Hindenburgbau für 101 Mio. €",url:"https://www.thomas-daily.de/td-morning-news/57311-stuttgart-piech-kauft-hindenburgbau-fuer-101-mio-euro/"},
          {label:"Stuttgarter Zeitung: Piëch kauft ehemaligen Hindenburgbau",url:"https://www.stuttgarter-zeitung.de/inhalt.immobiliengeschaeft-in-stuttgart-pi-ch-kauft-ehemaligen-hindenburgbau.f7c256fd-9eaf-4611-9ba0-d0783cf4fb22.html"}
        ] }
    ],
    heatmap:[
      { name:"Stuttgart / Region (Prime-Gewerbe)", intensity:"hoch", usages:["Buero","Retail"], center:[48.7784,9.1772], radiusKm:25,
        basis:"quelle", note:"Hindenburgbau Stuttgart; ferner Forum1 Böblingen (Adresse nicht final verifiziert).",
        sources:[{label:"Immobilien Zeitung: Ferdinand Piëch",url:"https://www.iz.de/suche/schlagworte/Ferdinand+Pi%C3%ABch/"}] },
      { name:"München (Highstreet/Retail)", intensity:"mittel", usages:["Retail","Buero"], center:[48.1391,11.5652], radiusKm:8,
        basis:"quelle", note:"Presseberichten zufolge Stachus-Objekt München im Portfolio; genaue Adresse/Anteil nicht final verifiziert.",
        sources:[{label:"Stuttgarter Nachrichten: Piëch-Imperium wächst",url:"https://www.stuttgarter-nachrichten.de/inhalt.hindenburgbau-verkauft-pi-ch-imperium-in-stuttgart-waechst-weiter.5b4948b5-a107-4161-a51e-7f5eb0c2670a.html"}] }
    ],
    about:[
      "Single Family Office von Ferdinand Piëch (jr.), Sohn des VW-Patriarchen Ferdinand Piëch.",
      "Sitz Königstraße 19A, Stuttgart; agiert diskret ohne öffentliche Marke.",
      "Investiert in erstklassige Gewerbeimmobilien in Toplagen (DE/AT).",
      "Bekannte Objekte: Hindenburgbau Stuttgart, Forum1 Böblingen, Stachus München."
    ],
    structure:{
      fo:"Argon GmbH – Family Office Ferdinand Piëch (jr.); Ankäufe teils über Zweckgesellschaften wie Zentrum 01 GmbH / 'Argon Portfolio'-Gesellschaften.",
      managers:["Ferdinand Piëch (Geschäftsführer)","Dirk Wehinger (Geschäftsführer)"],
      decisions:"Investitionsentscheidungen über die Argon-Geschäftsführung / Piëch Holding-Struktur.",
      contact:"Argon GmbH, Königstraße 19A, Stuttgart – diskrete, meist Off-Market-Ansprache."
    }
  },

  {
    id:"orsus_vanagtmael",
    name:"ORSUS GmbH (Familie van Agtmael)", kurz:"ORSUS",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Charlottenplatz 6, 70173 Stuttgart",
    hqLat:48.7770, hqLng:9.1832,
    website:"orsus-property.de", domain:"orsus-property.de",
    linkedin:"", contactName:"Jeroen M. van Agtmael / Willem G. van Agtmael / Dirk Löhle", contactRole:"Geschäftsführung",
    contactChannel:"Charlottenplatz 6, 70173 Stuttgart / orsus-property.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 22757 (Amtsgericht Stuttgart)",
    ankaufsprofil:"Privates Immobilienvehikel der Familie van Agtmael (Miteigentümerfamilie des Stuttgarter Modehauses Breuninger, ~40%). Gesellschaftszweck: Erwerb, Halten und Bewertung von Immobilien, Property Management sowie Errichtung gewerblich/wohnwirtschaftlich genutzter Gebäude. Schwerpunkt Stuttgart/Region; Bestandshaltung, teils über Objektgesellschaften (u.a. 'Zweite ORSUS Mönchstr. 11 GmbH', Salzstraße 140 als Joint Venture mit Argon/Piëch). Ticketgröße/Renditeprofil nicht öffentlich beziffert (Quelle: Handelsregister Stuttgart HRB 22757, orsus-property.de).",
    category:"gruen",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation",
      note:"Reine Einschätzung; ORSUS ist das private RE-Vehikel der van-Agtmael-Familie (getrennt vom operativen Breuninger). Kein belegter Portfoliowert.",
      sources:[] },
    reQuote:{ value:0.9, basis:"quelle",
      note:"Zweck laut Handelsregister ist Erwerb/Halten/Verwaltung von Immobilien – nahezu reines Immobilienvehikel.",
      sources:[{label:"ORSUS GmbH – Handelsregister/Northdata",url:"https://www.northdata.com/ORSUS+GmbH,+Stuttgart/HRB+22757"}] },
    reInvestedEUR:0.45,
    usage:{ Buero:40, Retail:35, Wohnen:20, Sonstiges:5 },
    confirmedObjects:[
      { name:"Objekt Mönchstraße 11 (Stuttgart)", address:"Mönchstraße 11, 70173 Stuttgart", lat:48.7788, lng:9.1790,
        usage:"Buero", area:"n.v.", purchaseDate:"n.v.", valueEUR:null, status:"Bestand",
        images:[], connection:"Gehalten über die eigens benannte Objektgesellschaft 'Zweite ORSUS Mönchstr. 11 GmbH' (Geschäftsführer Jeroen van Agtmael / Dirk Löhle).",
        sources:[{label:"Zweite ORSUS Mönchstr. 11 GmbH – Cylex/Handelsregister",url:"https://web2.cylex.de/firma-home/orsus-gmbh-9813693.html"}] }
    ],
    heatmap:[
      { name:"Stuttgart-Mitte (Gewerbe/Wohnen)", intensity:"hoch", usages:["Buero","Retail","Wohnen"], center:[48.7767,9.1830], radiusKm:12,
        basis:"quelle", note:"Bestandsimmobilien in Stuttgart, teils über Objektgesellschaften (Mönchstr. 11; Salzstraße 140 als 'Argon Orsus'-JV mit Piëch).",
        sources:[{label:"ORSUS GmbH – Northdata",url:"https://www.northdata.com/ORSUS+GmbH,+Stuttgart/HRB+22757"}] }
    ],
    structure:{
      fo:"ORSUS GmbH – privates Immobilienvehikel der Familie van Agtmael (Breuninger-Miteigentümer), getrennt vom operativen Modehaus.",
      managers:["Jeroen M. van Agtmael","Willem G. van Agtmael","Dirk Löhle"],
      decisions:"Ankäufe über ORSUS/Objektgesellschaften; teils Joint Ventures mit dem Piëch-Family-Office (Argon).",
      contact:"ORSUS GmbH, Charlottenplatz 6, Stuttgart."
    }
  }

]);
