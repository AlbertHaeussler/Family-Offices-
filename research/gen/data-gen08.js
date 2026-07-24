/* Worker 08 — neue FOs aus 280er-Liste. NUR diese Datei bearbeiten. Schema: research/SHARED_INSTRUCTIONS.md */
window.FO_DATA = (window.FO_DATA || []).concat([
  {
    id:"broermann_invest",
    name:"Broermann Invest GmbH / Broermann Holding (Familie große Broermann, Asklepios)", kurz:"große Broermann Family Office",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Debusweg 3, 61462 Königstein im Taunus",
    hqLat:50.187, hqLng:8.470,
    website:"brhhh.com", domain:"brhhh.com",
    linkedin:"", contactName:"Vorstand/Geschäftsführung Broermann Holding (Erben Dr. Bernard große Broermann, †2024)", contactRole:"Family-Office-Holding", contactChannel:"über Broermann Health & Heritage Hotels / Holding Königstein",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Fokus historisch auf Luxushotellerie (Broermann Health & Heritage Hotels: Villa Rothschild & Falkenstein Grand in Königstein, Atlantic Hamburg; im Ausland Montreux) sowie Klinik-/Gesundheitsimmobilien über Asklepios. Kein öffentlich publiziertes Ankaufsprofil; Erwerbe historisch opportunistisch bei Trophy-/Heritage-Objekten (z.B. Atlantic Kempinski Hamburg 2014). Ticketgröße für Trophy-Assets 50-150 Mio €. Regionen: Rhein-Main/Königstein, Hamburg. Bestandshalter, Core/Prime. Quelle: hotelbau.de, brhhh.com. Details darüber hinaus nicht öffentlich ermittelbar.",
    category:"gruen",
    aum:{ value:4.5, unit:"Mrd €", basis:"quelle", note:"Nettovermögen Dr. Bernard große Broermann ~5,1 Mrd USD (Forbes 2021); Kernvermögen in Asklepios (Gesundheit) + Luxushotels + Immobilien.", sources:[{label:"Wikipedia – Bernard große Broermann",url:"https://de.wikipedia.org/wiki/Bernard_gro%C3%9Fe_Broermann"}] },
    reQuote:{ value:0.15, basis:"extrapolation", note:"Reine Einschätzung: Großteil des Vermögens in Asklepios-Gesundheitsgeschäft; Immobilien = Luxushotels + Klinikimmobilien, geschätzt ~15%.", sources:[] },
    reInvestedEUR:0.7,
    usage:{ Hotel:70, Sonstiges:20, Buero:10 },
    confirmedObjects:[
      { name:"Villa Rothschild, Autograph Collection", address:"Im Rothschildpark 1, 61462 Königstein im Taunus", lat:50.184, lng:8.466,
        usage:"Hotel", area:"5-Sterne Schlosshotel", purchaseDate:"1999/2000", valueEUR:30, status:"Bestand",
        connection:"Betrieb/Eigentum über Broermann Health & Heritage Hotels (Familie große Broermann).",
        images:[], sources:[{label:"Broermann Health & Heritage Hotels",url:"https://brhhh.com/"},{label:"hotelbau.de",url:"https://www.hotelbau.de/aktuelles/atlantic-hamburg/"}] },
      { name:"Falkenstein Grand, Autograph Collection", address:"Debusweg 6-18, 61462 Königstein im Taunus", lat:50.187, lng:8.471,
        usage:"Hotel", area:"5-Sterne Hotel & Kongress", purchaseDate:"vor 2000", valueEUR:45, status:"Bestand",
        connection:"Betrieb/Eigentum über Broermann Health & Heritage Hotels (Familie große Broermann); direkt am Family-Office-Sitz Debusweg.",
        images:[], sources:[{label:"Broermann Health & Heritage Hotels",url:"https://brhhh.com/"},{label:"hotelbau.de",url:"https://www.hotelbau.de/aktuelles/atlantic-hamburg/"}] },
      { name:"Hotel Atlantic Hamburg, Autograph Collection", address:"An der Alster 72-79, 20099 Hamburg", lat:53.5566, lng:10.0044,
        usage:"Hotel", area:"5-Sterne Grandhotel an der Alster", purchaseDate:"2014", valueEUR:120, status:"Bestand",
        connection:"2014 als Atlantic Kempinski durch Dr. Broermann Hotels & Residences GmbH erworben.",
        images:[], sources:[{label:"hotelbau.de – Broermann kauft Atlantic",url:"https://www.hotelbau.de/aktuelles/asklepios-chef-broermann-kauft-das-atlantic-kempinski-hamburg/"}] }
    ],
    heatmap:[
      { name:"Königstein / Rhein-Main", intensity:"hoch", usages:["Hotel"], center:[50.185,8.468], radiusKm:15,
        basis:"quelle", note:"Family-Office-Sitz + zwei Luxushotels + Asklepios-Umfeld.", sources:[{label:"brhhh.com",url:"https://brhhh.com/"}] },
      { name:"Hamburg", intensity:"mittel", usages:["Hotel"], center:[53.556,10.004], radiusKm:10,
        basis:"quelle", note:"Hotel Atlantic an der Alster.", sources:[{label:"hotelbau.de",url:"https://www.hotelbau.de/aktuelles/asklepios-chef-broermann-kauft-das-atlantic-kempinski-hamburg/"}] }
    ],
    about:["Family Office / Holding der Familie Dr. Bernard große Broermann (†2024), Mitgründer der Asklepios Kliniken.","Kernvermögen im Gesundheitskonzern Asklepios (operativ) sowie Luxushotellerie und Immobilien.","Betreibt über Broermann Health & Heritage Hotels fünf Luxushotels, davon drei in Deutschland (Königstein 2x, Hamburg).","Trophy-/Heritage-Objekte, Core-Bestandshalter."],
    structure:{
      fo:"Broermann Invest GmbH / Broermann Holding GmbH (Debusweg 3, Königstein) als Beteiligungs-/Vermögensholding der Familie.",
      managers:["Geschäftsführung Broermann Holding","Hotel-Betrieb: CEO Stefan Massa (operativ)"],
      decisions:"Ankäufe über die Familienholding / Dr. Broermann Hotels & Residences bzw. Asklepios für Klinikimmobilien.",
      contact:"Makler mit Hotel-/Trophy-Objekten an die Broermann Holding / Hotels & Residences in Königstein, nicht an den Hotelbetrieb."
    }
  },
  {
    id:"famos_otten",
    name:"Famos Immobilien GmbH (Familie Otten – 'Familie Otten Service')", kurz:"Famos (Otten Family Office)",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Raderbroich 9, 41352 Korschenbroich",
    hqLat:51.192, hqLng:6.512,
    website:"famos-immobilien.de", domain:"famos-immobilien.de",
    linkedin:"", contactName:"Hans Hünnscheid (Geschäftsführer); Joshua Heckner (Leiter Immobilien ab 2025)", contactRole:"Geschäftsführung / Immobilienleitung", contactChannel:"famos-immobilien.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office der Unternehmerfamilie Otten (Vermögen aus Selgros/Cash-&-Carry), seit 1959 auf Immobilien fokussiert; seit 2008 auch als Multi Family Office für 'Family & Friends' und Dritte tätig. Leistungen: Immobilien-Asset-Management, Property-Management, Bestandsentwicklung. Kauft/hält primär deutsche Bestandsimmobilien (Wohnen, Gewerbe, Handel) generationenübergreifend. Konkrete Ticketgrößen/Regionsangaben nicht öffentlich publiziert; Schwerpunkt Rheinland/Niederrhein. Quelle: famos-immobilien.de, marke-niederrhein.de. Genaues Ankaufsraster nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.6, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: über 65 Jahre gewachsenes Otten-Immobilienvermögen plus verwaltete Family-&-Friends-Mandate; keine offizielle AuM-Zahl publiziert.", sources:[] },
    reQuote:{ value:0.9, basis:"quelle", note:"Kerngeschäft ist Immobilien (Immobilien-Family-Office).", sources:[{label:"Famos – Über uns",url:"https://www.famos-immobilien.de/"}] },
    reInvestedEUR:0.5,
    usage:{ Wohnen:35, Retail:30, Buero:25, Sonstiges:10 },
    confirmedObjects:[],
    heatmap:[
      { name:"Niederrhein / Rheinland", intensity:"hoch", usages:["Wohnen","Retail","Buero"], center:[51.19,6.51], radiusKm:40,
        basis:"quelle", note:"Sitz Korschenbroich; Otten-Vermögen und -Immobilien am Niederrhein.", sources:[{label:"marke-niederrhein.de",url:"https://marke-niederrhein.de/famos/"}] }
    ],
    about:["Family Office der Unternehmerfamilie Otten (Korschenbroich), Name = 'Familie Otten Service'.","Über 65 Jahre Firmenhistorie, seit 1959 Verwaltung des Otten-Immobilienvermögens.","Seit 2008 'Family & Friends'-Programm → faktisch Multi Family Office für Dritte.","Kern: Immobilien-Asset-Management, Property-Management, Bestandsentwicklung."],
    structure:{
      fo:"Famos Immobilien GmbH als Immobilien-Family-Office der Familie Otten.",
      managers:["Hans Hünnscheid (Geschäftsführer)","Joshua Heckner (Leiter Immobilien, ab 2025)"],
      decisions:"Ankäufe/Asset-Management über Famos-Geschäftsführung.",
      contact:"Makler mit Bestandsobjekten Rheinland/Niederrhein an die Immobilienleitung Famos."
    }
  },
  {
    id:"jc_investments_clauss",
    name:"JC Investments GmbH (Familie Clauß)", kurz:"JC Investments (Clauß)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Liebigstraße 16, 61130 Nidderau",
    hqLat:50.243, hqLng:8.868,
    website:"jci.de", domain:"jci.de",
    linkedin:"", contactName:"Johannes Clauß; Nadja Thiemt-Clauß (Geschäftsführung)", contactRole:"Geschäftsführung / Familie", contactChannel:"jci.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office (gegr. 1992 von Johannes Clauß) mit Fokus auf Venture Capital (Gründer) und Private Equity (Mittelstand) in zukunftsgerichteten Branchen (Technologie, Infrastruktur, Biotechnologie, Handwerk). Kein öffentlich erkennbarer Immobilien-Ankaufsfokus. Direktes Immobilien-Ankaufsprofil: nicht öffentlich ermittelbar. Quelle: jci.de.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: etabliertes Unternehmer-Family-Office ohne publizierte AuM-Zahl.", sources:[] },
    reQuote:{ value:0.05, basis:"extrapolation", note:"Reine Einschätzung: Fokus VC/PE, Immobilien allenfalls Nebenposition.", sources:[] },
    reInvestedEUR:0.02,
    usage:{ Sonstiges:100 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main", intensity:"niedrig", usages:["Sonstiges"], center:[50.24,8.87], radiusKm:30,
        basis:"extrapolation", note:"Reine Einschätzung: Sitz Nidderau; kein klarer RE-Fokus.", sources:[] }
    ],
    about:["Single Family Office der Familie Clauß, gegründet 1992 von Johannes Clauß.","Investiert Beteiligungskapital in Gründer (VC) und Mittelständler (PE).","Fokus Technologie, Infrastruktur, Biotechnologie, Handwerk.","Kapital vorhanden, aber kein Immobilien-Kerngeschäft."],
    structure:{
      fo:"JC Investments GmbH als SFO der Familie Clauß.",
      managers:["Johannes Clauß","Nadja Thiemt-Clauß"],
      decisions:"Beteiligungsentscheidungen durch die Familie/Geschäftsführung.",
      contact:"Für Immobilien voraussichtlich kein primärer Ansprechpartner – Fokus liegt auf Unternehmensbeteiligungen."
    }
  },
  {
    id:"rothenberger_4xs",
    name:"ROTHENBERGER 4xS Vermögensverwaltung GmbH (Familie Rothenberger)", kurz:"Rothenberger 4xS",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Friedrich-Ebert-Anlage 3, 60327 Frankfurt am Main",
    hqLat:50.107, hqLng:8.660,
    website:"rothenberger-4xs.com", domain:"rothenberger-4xs.com",
    linkedin:"", contactName:"Familie Rothenberger (Gesellschafter)", contactRole:"Familien-Holding", contactChannel:"rothenberger-4xs.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Familiengeführte Unternehmensholding, die strategische Beteiligungen in Maschinenbau, Werkzeuge, Immobilien und technologiegetriebenes Venture Capital aktiv managt (Quelle: rothenberger-4xs.com). Immobilien sind eine von vier Säulen; kein öffentliches, spezifisches Immobilien-Ankaufsprofil (Assetklassen/Ticketgröße/Regionen). Ankaufsraster nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.3, unit:"Mrd €", basis:"quelle", note:"Bilanzsumme der Vermögensverwaltungs-GmbH per 2022 ~100 Mio € (Creditreform); Familienvermögen darüber hinaus.", sources:[{label:"Creditreform Firmeneintrag",url:"https://firmeneintrag.creditreform.de/60327/6290123195/ROTHENBERGER_4_X_S_VERMOEGENSVERWALTUNG_GMBH"}] },
    reQuote:{ value:0.2, basis:"extrapolation", note:"Reine Einschätzung: Immobilien = eine von vier Beteiligungssäulen.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Buero:40, Sonstiges:30, Wohnen:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Rhein-Main / Frankfurt", intensity:"mittel", usages:["Buero","Wohnen"], center:[50.107,8.66], radiusKm:25,
        basis:"quelle", note:"Sitz Frankfurt; Immobilien als Beteiligungssäule.", sources:[{label:"rothenberger-4xs.com",url:"https://www.rothenberger-4xs.com/"}] }
    ],
    about:["Familiengeführte Holding der Familie Rothenberger (Werkzeug-/Rohrbearbeitungs-Erbe).","Vier Säulen: Maschinenbau, Werkzeuge, Immobilien, Venture Capital.","Aktives Management strategischer Beteiligungen aus Frankfurt.","Kapital vorhanden; Immobilien eine Säule, aber kein publiziertes Ankaufsprofil."],
    structure:{
      fo:"ROTHENBERGER 4xS Vermögensverwaltung GmbH als Familienholding.",
      managers:["Familie Rothenberger / Geschäftsführung der Holding"],
      decisions:"Beteiligungs- und Immobilienentscheidungen über die Holding.",
      contact:"Makler mit passenden Objekten an die 4xS-Vermögensverwaltung in Frankfurt."
    }
  },
  {
    id:"dbe_group_meerbusch",
    name:"DBE GmbH (Family Office, Meerbusch)", kurz:"DBE Group",
    typ:"MFO",
    land:"Deutschland",
    hqAddress:"Poststraße 20, 40667 Meerbusch",
    hqLat:51.259, hqLng:6.688,
    website:"dbe-group.com", domain:"dbe-group.com",
    linkedin:"", contactName:"Geschäftsführung DBE GmbH", contactRole:"Family Office / Investment", contactChannel:"dbe-group.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office (MFO) mit klarem Immobilien-Ankaufsfokus für seine Klienten: Büroimmobilien in Top-5-Städten und Prime-Innenstadtlagen, Handelsimmobilien sowie hochwertige Wohnentwicklungen. Verwaltetes Vermögen ~110 Mio €; geplantes Investitionsvolumen ~120 Mio € in Immobilien. Quelle: Immobilien Zeitung / die-deutsche-wirtschaft.de. Ticketgrößen im Einzelnen nicht publiziert; Core/Prime in deutschen A-Städten.",
    category:"gelb",
    aum:{ value:0.11, unit:"Mrd €", basis:"quelle", note:"Verwaltetes Vermögen ~110 Mio €, geplante RE-Investition ~120 Mio €.", sources:[{label:"die-deutsche-wirtschaft.de",url:"https://die-deutsche-wirtschaft.de/investoren/dbe-gmbh-meerbusch-family-office/"},{label:"Immobilien Zeitung",url:"https://www.immobilien-zeitung.de/1000052306/family-office-dbe-will-bei-investitionen-zulegen"}] },
    reQuote:{ value:0.9, basis:"quelle", note:"Immobilien-Investment ist das Kerngeschäft des Family Office.", sources:[{label:"die-deutsche-wirtschaft.de",url:"https://die-deutsche-wirtschaft.de/investoren/dbe-gmbh-meerbusch-family-office/"}] },
    reInvestedEUR:0.11,
    usage:{ Buero:50, Wohnen:30, Retail:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutsche Top-5-Städte", intensity:"hoch", usages:["Buero","Retail","Wohnen"], center:[51.0,9.0], radiusKm:300,
        basis:"quelle", note:"Zielmarkt: Büro in Top-5-Städten, Prime-Innenstadt, Handel, hochwertiges Wohnen.", sources:[{label:"die-deutsche-wirtschaft.de",url:"https://die-deutsche-wirtschaft.de/investoren/dbe-gmbh-meerbusch-family-office/"}] },
      { name:"Rheinland / Düsseldorf", intensity:"mittel", usages:["Buero","Wohnen"], center:[51.26,6.69], radiusKm:30,
        basis:"quelle", note:"Sitz Meerbusch bei Düsseldorf.", sources:[{label:"dasoertliche.de",url:"https://www.dasoertliche.de/Themen/DBE-GmbH-Meerbusch-B%C3%BCderich-Poststr"}] }
    ],
    about:["Family Office (MFO) in Meerbusch mit Immobilien-Investmentfokus für Klienten.","Zielobjekte: Büro in Top-5-Städten/Prime-Lagen, Handel, hochwertiges Wohnen.","AuM ~110 Mio €, RE-Investitionsziel ~120 Mio €.","Aktiver deutscher RE-Käufer – für Makler relevant."],
    structure:{
      fo:"DBE GmbH ('DBE – The Value Company') als Family Office in Meerbusch.",
      managers:["Geschäftsführung DBE GmbH"],
      decisions:"Immobilienankäufe für Family-Office-Klienten über die DBE-Geschäftsführung.",
      contact:"Makler mit Büro-/Prime-/Wohnentwicklungsobjekten an DBE GmbH, Meerbusch."
    }
  },
  {
    id:"roi_urban_berlin",
    name:"R.O.I. GmbH (Single Family Office Ulrich/Ulli Urban)", kurz:"R.O.I. (Urban)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Marienstraße 9, 10117 Berlin",
    hqLat:52.520, hqLng:13.386,
    website:"roi-berlin.de", domain:"roi-berlin.de",
    linkedin:"", contactName:"Ulrich (Ulli) Urban (Gesellschafter/Geschäftsführer)", contactRole:"Inhaber Single Family Office", contactChannel:"roi-berlin.de",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Single Family Office von Ulli Urban (gegr. 2002). Beteiligung und Beratung bei wachstumsorientierten Immobilienprojekten, Unternehmen und Start-ups; Verwaltung eigener und fremder Immobiliengesellschaften; Holding für Immobilien-Portfoliogesellschaften im Eigeninteresse. Aktivitäten verwurzelt in Berlin, Thüringen und Sachsen. Konkrete Ticketgrößen/Assetklassen-Raster nicht öffentlich publiziert. Quelle: familyofficehub.io, roi-berlin.de.",
    category:"gelb",
    aum:{ value:0.2, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: etabliertes SFO mit Immobilien-Beteiligungen; keine publizierte AuM-Zahl.", sources:[] },
    reQuote:{ value:0.6, basis:"quelle", note:"Immobilien(-projekte und -portfoliogesellschaften) sind eine Kernsäule des SFO.", sources:[{label:"familyofficehub.io – R.O.I. GmbH",url:"https://familyofficehub.io/family-office-portraits/europe-single-family-offices/r-o-i-gmbh-single-office-in-berlin-germany/"}] },
    reInvestedEUR:0.12,
    usage:{ Wohnen:50, Buero:30, Sonstiges:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Berlin", intensity:"hoch", usages:["Wohnen","Buero"], center:[52.52,13.39], radiusKm:30,
        basis:"quelle", note:"Sitz und Aktivitätsschwerpunkt Berlin.", sources:[{label:"familyofficehub.io",url:"https://familyofficehub.io/family-office-portraits/europe-single-family-offices/r-o-i-gmbh-single-office-in-berlin-germany/"}] },
      { name:"Thüringen / Sachsen", intensity:"mittel", usages:["Wohnen","Buero"], center:[50.9,11.6], radiusKm:80,
        basis:"quelle", note:"Aktivitäten laut Profil in Thüringen und Sachsen.", sources:[{label:"familyofficehub.io",url:"https://familyofficehub.io/family-office-portraits/europe-single-family-offices/r-o-i-gmbh-single-office-in-berlin-germany/"}] }
    ],
    about:["Single Family Office von Ulli Urban, gegründet 2002 in Berlin.","Beteiligungen an wachstumsorientierten Immobilienprojekten, Unternehmen und Start-ups.","Holding für eigene Immobilien-Portfoliogesellschaften.","Schwerpunkt Berlin, Thüringen, Sachsen."],
    structure:{
      fo:"R.O.I. GmbH (bzw. Urban AM GmbH) als SFO von Ulli Urban.",
      managers:["Ulli Urban (Gesellschafter-Geschäftsführer)"],
      decisions:"Ankäufe/Beteiligungen über Urban bzw. die Portfoliogesellschaften.",
      contact:"Makler mit Objekten/Projekten Berlin/Thüringen/Sachsen an R.O.I. / Urban AM."
    }
  },
  {
    id:"pace_klingele",
    name:"PACE Beteiligungsgesellschaft mbH (Familie Klingele)", kurz:"PACE (Klingele)",
    typ:"SFO",
    land:"Deutschland",
    hqAddress:"Gustav-Siegle-Straße 50, 70193 Stuttgart",
    hqLat:48.774, hqLng:9.163,
    website:"", domain:"",
    linkedin:"", contactName:"Fiona Klingele (Geschäftsführerin)", contactRole:"Geschäftsführung Familienholding", contactChannel:"über PACE Beteiligungsgesellschaft, Stuttgart",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Beteiligungs-/Familienholding der Unternehmerfamilie Klingele (Klingele Paper & Packaging SE, Wellpappe/Papier; Klebchemie). PACE ist persönlich haftende Gesellschafterin der operativen Klingele-Gesellschaften. Immobilien werden v.a. über die 'Klingele Immobilien Verwaltungsgesellschaft mbH' und die Industriestandorte (Remshalden, Werne, Weener) gehalten – überwiegend eigengenutzte Industrie-/Logistikimmobilien. Kein öffentliches externes Ankaufsprofil. Nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.8, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: Klingele-Gruppe (Wellpappe/Papier) ist ein großer Mittelständler; keine publizierte Family-Office-AuM.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung: Vermögen v.a. im Industriegeschäft; Immobilien überwiegend eigengenutzte Werksstandorte.", sources:[] },
    reInvestedEUR:0.1,
    usage:{ Logistik:40, Sonstiges:40, Buero:20 },
    confirmedObjects:[],
    heatmap:[
      { name:"Baden-Württemberg / Stuttgart", intensity:"mittel", usages:["Logistik","Buero"], center:[48.77,9.16], radiusKm:40,
        basis:"quelle", note:"Sitz der Familienholding Stuttgart; Klingele-Standort Remshalden.", sources:[{label:"Northdata – PACE",url:"https://www.northdata.com/PACE+Beteiligungsgesellschaft+mbH,+Stuttgart/HRB+20532"}] }
    ],
    about:["Beteiligungs-/Familienholding der Unternehmerfamilie Klingele.","Hält u.a. Klingele Paper & Packaging (Wellpappe/Papier) und Klebchemie.","Persönlich haftende Gesellschafterin der operativen Klingele-KGs.","Kapital vorhanden; Immobilien überwiegend eigengenutzte Industriestandorte."],
    structure:{
      fo:"PACE Beteiligungsgesellschaft mbH als Familienholding der Klingeles.",
      managers:["Fiona Klingele (Geschäftsführerin)"],
      decisions:"Beteiligungsentscheidungen über die Holding; Immobilien über Klingele Immobilien Verwaltung.",
      contact:"Für externe RE-Ankäufe kein publizierter Fokus – primär Industrie-/Beteiligungsholding."
    }
  },
  {
    id:"armada_aegerter",
    name:"ARMADA Investment Group AG (Family Office Daniel S. Aegerter)", kurz:"Armada (Aegerter)",
    typ:"SFO",
    land:"Schweiz (investiert in DE)",
    hqAddress:"Seestrasse 30, 8700 Küsnacht, Schweiz",
    hqLat:47.317, hqLng:8.585,
    website:"armada.com", domain:"armada.com",
    linkedin:"https://www.linkedin.com/company/armada-investment-group-ag", contactName:"Daniel S. Aegerter (Inhaber)", contactRole:"Gründer / Family Office", contactChannel:"armada.com",
    contactLinkedin:"", contactLinkedinName:"",
    uid:"",
    ankaufsprofil:"Family Office der Familie Aegerter (Küsnacht/Zürich), gegründet 2000 von Daniel S. Aegerter. Investiert über Assetklassen hinweg: Private Equity, Public Markets, Venture Capital (Gründerkapital) und Immobilien. Hielt bis 2015 ein deutsches Multi-Tenant-Immobilienportfolio (2015 an Grand City Properties verkauft). Aktuell Schwerpunkt PE/VC; kein aktuell publiziertes deutsches Immobilien-Ankaufsprofil. Quelle: armada.com. Aktuelles RE-Raster nicht öffentlich ermittelbar.",
    category:"gelb",
    aum:{ value:0.5, unit:"Mrd €", basis:"extrapolation", note:"Reine Einschätzung: breit diversifiziertes Single Family Office; keine offizielle AuM-Zahl publiziert.", sources:[] },
    reQuote:{ value:0.1, basis:"extrapolation", note:"Reine Einschätzung: deutsches RE-Portfolio 2015 an Grand City verkauft; Immobilien aktuell Nebenposition zu PE/VC.", sources:[] },
    reInvestedEUR:0.05,
    usage:{ Wohnen:40, Buero:30, Retail:30 },
    confirmedObjects:[],
    heatmap:[
      { name:"Deutschland (Multi-Tenant, historisch)", intensity:"niedrig", usages:["Wohnen","Buero"], center:[51.0,10.0], radiusKm:300,
        basis:"quelle", note:"Historisches deutsches Multi-Tenant-Portfolio, 2015 an Grand City Properties verkauft; heute kein bekannter aktiver RE-Fokus in DE.", sources:[{label:"armada.com",url:"https://www.armada.com/"}] }
    ],
    about:["Family Office von Daniel S. Aegerter (Küsnacht/Zürich), gegründet 2000.","Investiert in Private Equity, Public Markets, Venture Capital und Immobilien.","Hielt bis 2015 ein deutsches Multi-Tenant-Immobilienportfolio (Verkauf an Grand City).","Heute Schwerpunkt Gründer-/Beteiligungskapital; Immobilien Nebenposition."],
    structure:{
      fo:"ARMADA Investment Group AG als Family Office der Familie Aegerter.",
      managers:["Daniel S. Aegerter (Inhaber/Gründer)"],
      decisions:"Allokation/Manager-Selektion über das Family Office in Küsnacht.",
      contact:"Aktuell kein bekannter aktiver deutscher RE-Ankaufskanal – Fokus PE/VC."
    }
  }
]);
