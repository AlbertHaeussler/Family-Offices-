/* Worker 13 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([

  {
    id:"solvia_mast",
    name:"solvia Vermögensverwaltungs GmbH (Familie Mast / Mast-Jägermeister)", kurz:"solvia",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Neuer Weg 9, 38302 Wolfenbüttel",
    hqLat:52.1627, hqLng:10.5350,
    website:"", domain:"",
    linkedin:"", contactName:"Wolf-Jakob Herpich", contactRole:"Geschäftsführer (seit 2025)", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 101205 (AG Braunschweig)",
    ankaufsprofil:"nicht öffentlich ermittelbar. Laut Handelsregister-/Unternehmenszweck verwaltet solvia eigenes Vermögen durch An-/Verkauf und Verwaltung von in- und ausländischen Unternehmensbeteiligungen, Wertpapieren und Immobilien; kein veröffentlichtes Ankaufsprofil, keine öffentliche Ticketgröße/Regionalstrategie (Quelle: companyhouse/northdata Firmenzweck).",
    category:"gelb",
    aum:{ value:1.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — solvia macht keine öffentlichen AUM-Angaben. Family Office der 5./6. Generation der Unternehmerfamilie Mast (Spirituosenhersteller Mast-Jägermeister, Umsatz Größenordnung ~0,6–0,7 Mrd €). Größenordnung des verwalteten Familienvermögens geschätzt.", sources:[] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — Immobilien laut Firmenzweck ein Anlagebaustein neben Beteiligungen und Wertpapieren; kein bezifferter Anteil öffentlich.", sources:[{label:"private-banking-magazin: Solvia (Jägermeister-Family-Office)",url:"https://www.private-banking-magazin.de/family-office-solvia-jaegermeister-ralf-bauderer-herpich/"}] },
    reInvestedEUR:0.3,
    usage:{ Wohnen:40, Buero:30, Retail:20, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Braunschweig / Wolfenbüttel", intensity:"mittel", usages:["Wohnen","Buero"], center:[52.20,10.52], radiusKm:35,
        basis:"extrapolation", note:"Sitz-Region des Family Office der Familie Mast; keine öffentlichen Einzelobjekte/Adressen belegt.", sources:[] }
    ],
    about:["Single Family Office der Unternehmerfamilie Mast (Mast-Jägermeister, Wolfenbüttel), gegr. 2005 von Florian Rehm (Hauptgesellschafter Mast-Jägermeister) und Ralf Bauderer.","Verwaltet das Vermögen der 5./6. Generation über Unternehmensbeteiligungen, Wertpapiere und Immobilien.","Geschäftsführung seit 2025: Wolf-Jakob Herpich (zuvor Ralf Bauderer)."],
    structure:{
      fo:"solvia Vermögensverwaltungs GmbH, Wolfenbüttel (HRB 101205, AG Braunschweig).",
      managers:["Wolf-Jakob Herpich (GF seit 2025)"],
      decisions:"Ankaufsentscheidungen intern über die GmbH; Immobilien als ein Baustein der Vermögensallokation.",
      contact:"Family Office in Wolfenbüttel; kein öffentliches Immobilien-Ankaufsteam ausgewiesen."
    }
  },

  {
    id:"auretas_hh",
    name:"AURETAS family trust GmbH (Multi Family Office)", kurz:"Auretas",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Überseeallee 10, 20457 Hamburg (HafenCity)",
    hqLat:53.5418, hqLng:10.0010,
    website:"auretas.de", domain:"auretas.de",
    linkedin:"", contactName:"Randolph Kempcke / Peer Otten / Britta Weidenbach", contactRole:"Geschäftsführende Gesellschafter", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 94463 (AG Hamburg)",
    ankaufsprofil:"nicht öffentlich ermittelbar als Direkt-Ankäufer. AURETAS ist ein Multi Family Office (ganzheitliche Vermögensverwaltung/Controlling für >400 vermögende Mandanten, Stiftungen, Unternehmen); Immobilien werden für Mandanten überwiegend über Mandate/Fonds/Co-Investments allokiert, kein öffentliches Eigen-Ankaufsprofil mit Ticketgröße/Region (Quelle: andsimple.co / vuv.de Profil).",
    category:"gelb",
    aum:{ value:4.0, unit:"Mrd €", basis:"quelle", note:"Über 4 Mrd € für 400+ Mandanten (vermögende Privatpersonen, Unternehmen, Stiftungen). Entstanden 2010 aus Fusion von Döttinger/Straubinger (München, gegr. 1992) und Spudy & Co (Hamburg).", sources:[{label:"AndSimple Family-Office-Profil AURETAS",url:"https://andsimple.co/family-offices/auretas"},{label:"VuV Vermögensverwalter-Profil",url:"https://vuv.de/vermoegensverwalter/auretas-hamburg/"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung — Immobilien Teil der Multi-Asset-Allokation für Mandanten (Mandate/Fonds), kein publizierter RE-Prozentwert.", sources:[] },
    reInvestedEUR:0.8,
    usage:{ Buero:40, Wohnen:35, Retail:15, Logistik:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Hamburg / bundesweit", intensity:"mittel", usages:["Buero","Wohnen"], center:[53.54,10.00], radiusKm:40,
        basis:"extrapolation", note:"Doppelwurzel Hamburg/München; Immobilien für Mandanten über Fonds/Mandate, kein Eigenbestand mit Adressen.", sources:[] }
    ],
    about:["Unabhängiges Multi Family Office in der Hamburger HafenCity, entstanden 2010 aus der Fusion von Döttinger/Straubinger (München) und Spudy & Co (Hamburg).","Betreut über 400 Mandanten mit mehr als 4 Mrd € Vermögen (Privatpersonen, Unternehmen, Stiftungen).","Ganzheitliche Vermögensverwaltung, Anlageberatung und Vermögens-Controlling; Immobilien als eine Anlageklasse."],
    structure:{
      fo:"AURETAS family trust GmbH, Hamburg (HRB 94463).",
      managers:["Randolph Kempcke","Peer Otten","Britta Weidenbach"],
      decisions:"Allokation für Mandanten; Immobilien überwiegend über Fonds/Mandate, kein Eigen-Ankauf mit Objektportfolio.",
      contact:"Family Office Hamburg; Makler sollten Immobilien nur als Mandanten-Investment über die Vermögensverwaltung anbieten, nicht als Direktankauf."
    }
  },

  {
    id:"fraenkle_fo",
    name:"Fränkle Family Office GmbH (Familie Fränkle)", kurz:"Fränkle",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Staarenbergstraße 31, 76703 Kraichtal (Sitz laut HR; Firmengruppe im Raum Bruchsal/Kraichtal)",
    hqLat:49.1260, hqLng:8.5730,
    website:"", domain:"",
    linkedin:"", contactName:"Ulrich W. Fränkle", contactRole:"Geschäftsführer", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"HRB 730923 (AG Mannheim)",
    ankaufsprofil:"nicht öffentlich ermittelbar im Detail. Zweck laut Handelsregister: Gründung von Gesellschaften, Erwerb/Verwaltung von Unternehmens- und Immobilienbeteiligungen, Family-Office-Dienstleistungen und Verwaltung eigenen Vermögens; über die Schwester Fränkle Immobilien GmbH (Bruchsal) auch operative Immobilienverwaltung. Fokus regional Nordbaden/Karlsruhe (Wohn-/Gewerbeimmobilien), keine öffentliche Ticketgröße/Off-Market-Angabe (Quelle: northdata Firmenzweck).",
    category:"gelb",
    aum:{ value:0.1, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — kleines Single Family Office (Stammkapital 25.000 €, gegr. 2018) der Familie Fränkle; keine öffentlichen AUM-Angaben. Größenordnung geschätzt.", sources:[] },
    reQuote:{ value:0.5, basis:"extrapolation", note:"Reine Einschätzung — Immobilien laut Firmenzweck und über Fränkle Immobilien GmbH klarer Baustein; kein bezifferter Anteil öffentlich.", sources:[{label:"northdata Fränkle Immobilien GmbH, Bruchsal",url:"https://www.northdata.com/Fr%C3%A4nkle%20Immobilien%20GmbH,%20Bruchsal/Amtsgericht%20Mannheim%20HRB%20732265"}] },
    reInvestedEUR:0.05,
    usage:{ Wohnen:55, Buero:25, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Nordbaden / Bruchsal / Karlsruhe", intensity:"mittel", usages:["Wohnen","Buero"], center:[49.12,8.58], radiusKm:30,
        basis:"extrapolation", note:"Sitz- und Wirkungsregion der Fränkle-Gruppe (Kraichtal/Bruchsal); Immobilienverwaltung über Fränkle Immobilien GmbH, keine öffentlichen Einzelobjekte belegt.", sources:[] }
    ]
  },

  {
    id:"sedlmayr_grund",
    name:"Sedlmayr Grund und Immobilien AG (Familie Sedlmayr)", kurz:"Sedlmayr",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Marsstraße 46-48, 80335 München",
    hqLat:48.1459, hqLng:11.5562,
    website:"", domain:"",
    linkedin:"", contactName:"", contactRole:"Vorstand", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar im Detail. Die Sedlmayr Grund und Immobilien AG verwaltet den Immobilienbesitz der Münchner Unternehmerfamilie Sedlmayr (historisch verbunden mit der Spaten-Franziskaner-Brauerei) — Schwerpunkt Bestandshaltung von Wohn- und Gewerbeimmobilien im Großraum München (Core, langfristiger Bestand). Kein öffentliches Ankaufsprofil mit Ticketgröße/Off-Market-Angabe.",
    category:"gruen",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Immobilien-Holding der Familie Sedlmayr, Münchner Grundbesitz; keine öffentlichen Vermögensangaben. Größenordnung des Immobilienvermögens geschätzt.", sources:[] },
    reQuote:{ value:0.9, basis:"extrapolation", note:"Reine Einschätzung — als Grund-/Immobilien-AG praktisch vollständig immobilienzentriert (Familienvermögen überwiegend in Münchner Grundbesitz).", sources:[] },
    reInvestedEUR:0.45,
    usage:{ Wohnen:40, Buero:30, Retail:20, Gastro:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"München", intensity:"hoch", usages:["Wohnen","Buero","Retail"], center:[48.14,11.57], radiusKm:20,
        basis:"extrapolation", note:"Familienimmobilienbesitz Sedlmayr im Großraum München (Bestandshaltung). HQ Marsstraße 46-48 selbst Familienobjekt (nicht als Einzel-Objekt mit Wert belegt).", sources:[] }
    ],
    about:["Immobilien-Holding der Münchner Unternehmerfamilie Sedlmayr (historisch verbunden mit der Spaten-Franziskaner-Brauerei).","Verwaltet und hält den Grundbesitz der Familie im Großraum München (langfristige Bestandshaltung).","Immobilienzentriertes Familienvehikel (Grund und Immobilien AG)."],
    structure:{
      fo:"Sedlmayr Grund und Immobilien AG, München (Familien-Immobilienholding).",
      managers:[],
      decisions:"Ankauf/Verwaltung über die AG (Vorstand); Fokus Bestandshaltung Münchner Grundbesitz.",
      contact:"Für Münchner Objektangebote an die Sedlmayr Grund und Immobilien AG, Marsstraße 46-48."
    }
  },

  {
    id:"junge_vv_muc",
    name:"Junge GmbH & Co. VermögensVerwaltungs KG (Familie Junge)", kurz:"Junge VV",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Altheimer Eck 5, 80331 München",
    hqLat:48.1372, hqLng:11.5730,
    website:"", domain:"",
    linkedin:"", contactName:"", contactRole:"", contactChannel:"",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"nicht öffentlich ermittelbar. Vermögensverwaltungs-KG der Familie Junge (München); keine öffentlichen Angaben zu Assetklassen, Ticketgröße, Regionen oder Immobilienstrategie verfügbar.",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung — Familien-Vermögensverwaltungs-KG ohne öffentliche Kennzahlen; Größenordnung nicht belegt.", sources:[] },
    reQuote:{ value:0.3, basis:"extrapolation", note:"Reine Einschätzung — Immobilien bei Familien-Vermögensverwaltungen üblicher Baustein, hier nicht öffentlich beziffert oder bestätigt.", sources:[] },
    reInvestedEUR:0.06,
    usage:{ Wohnen:50, Buero:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"München", intensity:"mittel", usages:["Wohnen","Buero"], center:[48.14,11.57], radiusKm:20,
        basis:"extrapolation", note:"Sitz-Region; keinerlei öffentliche Objekt- oder Strategieangaben — reine Struktureinschätzung (Vermögensverwaltungs-KG).", sources:[] }
    ]
  }

]);
