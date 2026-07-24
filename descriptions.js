/* =========================================================================
   FO_DESC – kuratierte, EINFACH geschriebene Beschreibungen je Family Office.
   Ziel: ein Fünftklässler versteht sofort, wer das ist und wie die Verbindung
   zu einer Immobilie ist. Wird per id in FO_DATA gemerged (konfliktfrei).

   Felder pro Firma (alle optional):
     about:     [String]  – einfache Sätze: wer die Familie ist, woher das Geld
                            kommt, was sie mit Immobilien machen
     structure: { fo, managers:[String], decisions, contact }
     objects:   { "Objektname": "warum genau dieses Haus zu dieser Familie gehört" }
     sources:   { "Quellen-Label": "was diese Quelle mit der Familie zu tun hat" }

   Nur öffentlich bekannte Fakten. Keine erfundenen Ansprechpartner.
   Fehlt eine Firma, baut die App aus den Zahlen ein einfaches Auto-Profil.
   ========================================================================= */
window.FO_DESC = {

  otto: {
    about: [
      "Das ist das private Geld-Team der Familie Otto aus Hamburg. Diese Familie ist durch den Versandhandel reich geworden – bekannt vor allem durch „otto.de“ und die Otto Group.",
      "Mit Immobilien beschäftigt sich die Familie vor allem über eine Firma namens ECE. ECE baut und betreibt große Einkaufszentren – die Firma ist darin die größte in Europa.",
      "Im Jahr 2024 hat die Familie Otto zusammen mit Partnern die Mehrheit an einer Firma namens „Deutsche EuroShop“ gekauft. Dieser Firma gehören viele Einkaufszentren in Deutschland.",
      "Kurz gesagt: Wenn du ein großes Einkaufszentrum verkaufst, ist die Familie Otto ein sehr wahrscheinlicher Käufer. Sie mögen außerdem Büros, Hotels und Wohnungen in guten Lagen."
    ],
    structure: {
      fo: "Das Family Office heißt „CURA Vermögensverwaltung“. Das ist die Firma, die das Geld der Familie Otto verwaltet.",
      managers: ["Alexander Otto (Chef der Immobilien-Firma ECE, Kopf der Familie in Sachen Immobilien)", "Henning Eggers (Geschäftsführer von CURA)"],
      decisions: "Die eigentlichen Immobilien-Käufe macht das Ankaufs-Team der ECE – nicht die Handels-Firma Otto Group.",
      contact: "Wenn du ein Objekt anbieten willst: Melde dich beim Ankaufs-/Investment-Team der ECE in Hamburg. NICHT bei der Otto-Group-Zentrale (das ist der Versandhandel) und nicht direkt bei Herrn Otto."
    },
    objects: {
      "A10 Center": "Dieses Einkaufszentrum gehört der Firma „Deutsche EuroShop“. Und von dieser Firma hat die Familie Otto 2024 die Mehrheit gekauft. Deshalb steckt am Ende die Familie Otto dahinter.",
      "Allee-Center Hamm": "Gehört ebenfalls zur „Deutsche EuroShop“ (Mehrheit bei der Familie Otto) und wird zusätzlich von der Otto-Firma ECE gemanagt."
    },
    sources: {
      "Deutsche EuroShop – Standorte": "Diese Seite listet alle Einkaufszentren der „Deutsche EuroShop“ auf. Weil die Familie Otto diese Firma 2024 mehrheitlich gekauft hat, gehören diese Zentren indirekt der Familie.",
      "private-banking-magazin – Otto/Cura übernimmt DES": "Dieser Artikel beweist, dass das Otto-Family-Office die „Deutsche EuroShop“ übernommen hat – das ist die Brücke zwischen dem Gebäude und der Familie."
    }
  },

  wirtgen: {
    about: [
      "Das ist das Geld-Team der Familie Wirtgen aus dem Westerwald (nahe Köln).",
      "Reich geworden ist die Familie mit Maschinen für den Straßenbau (die „Wirtgen Group“). Diese Firma haben sie 2017 für rund 4,4 Milliarden Euro an den US-Konzern John Deere verkauft.",
      "Das viele Geld aus dem Verkauf legen sie jetzt an – ein großer Teil davon in Immobilien.",
      "Für einen Makler heißt das: Hier ist echtes Geld da, um Gebäude zu kaufen."
    ],
    structure: {
      fo: "Das Family Office heißt „Wirtgen Invest“. Es verwaltet das Vermögen der Familie Wirtgen.",
      managers: ["Familie Wirtgen (u. a. Jürgen und Stefan Wirtgen)"],
      decisions: "Immobilien-Käufe laufen über Wirtgen Invest bzw. dessen Immobilien-Team.",
      contact: "Melde dich beim Immobilien-Team von Wirtgen Invest."
    }
  },

  athos: {
    about: [
      "Das ist das Geld-Team der Zwillingsbrüder Thomas und Andreas Strüngmann aus dem Raum München.",
      "Reich geworden sind sie mit Medikamenten: Ihre Firma „Hexal“ (günstige Nachahmer-Medikamente) haben sie 2005 an den großen Pharma-Konzern Novartis verkauft.",
      "Sehr bekannt wurden sie noch einmal, weil sie früh in die Impfstoff-Firma BioNTech investiert haben.",
      "Ihr Geld-Team heißt „ATHOS“. Es legt das Vermögen breit an – auch in Immobilien."
    ],
    structure: {
      fo: "Das Family Office heißt „ATHOS Service GmbH“.",
      managers: ["Thomas Strüngmann und Andreas Strüngmann (die beiden Brüder)"],
      decisions: "Anlage-Entscheidungen trifft das ATHOS-Team.",
      contact: "Melde dich beim ATHOS-Büro in München."
    }
  },

  kuehne: {
    about: [
      "Das ist das Geld-Team von Klaus-Michael Kühne, einem der reichsten Deutschen. Er wohnt in der Schweiz.",
      "Sein Geld kommt vor allem aus der Logistik: Ihm gehört ein großer Teil der weltbekannten Spedition „Kühne + Nagel“ (Transport von Waren rund um die Welt). Er ist außerdem Großaktionär der Reederei Hapag-Lloyd.",
      "Er investiert auch gern in Hotels (zum Beispiel das „Fontenay“ in Hamburg) und in andere Immobilien.",
      "Kurz: ein sehr großer Geldgeber, der Logistik-Immobilien und schöne Hotels mag."
    ],
    structure: {
      fo: "Das Family Office heißt „Kühne Holding“ (Sitz in der Schweiz).",
      managers: ["Klaus-Michael Kühne"],
      decisions: "Käufe laufen über die Kühne Holding.",
      contact: "Melde dich bei der Kühne Holding."
    }
  },

  wuerth: {
    about: [
      "Das ist das Geld-Team der Familie Würth aus Künzelsau (Baden-Württemberg).",
      "Reich geworden ist die Familie mit einem einfachen, aber riesigen Geschäft: Schrauben, Dübel und Werkzeug für Handwerker (die „Würth-Gruppe“). Aus einem kleinen Betrieb wurde ein Weltkonzern.",
      "Bekanntester Kopf ist Reinhold Würth. Die Familie besitzt sehr viele eigene Gebäude und investiert weiter in Immobilien.",
      "Für Makler: großes, solides Vermögen – oft interessiert an Gewerbe-Immobilien."
    ],
    structure: {
      fo: "Das Vermögen der Familie steckt in der Würth-Gruppe und den Vermögens-Gesellschaften der Familie.",
      managers: ["Reinhold Würth und Familie"],
      decisions: "Immobilien werden über die Gesellschaften der Familie/Gruppe gekauft.",
      contact: "Melde dich beim Immobilien-Bereich der Würth-Gruppe."
    }
  },

  iho: {
    about: [
      "Das ist das Geld-Team der Familie Schaeffler aus Herzogenaurach (bei Nürnberg).",
      "Reich ist die Familie durch die Firma „Schaeffler“ – die baut wichtige Teile für Autos und Maschinen, zum Beispiel Kugellager. Der Familie gehört außerdem ein großer Anteil am Auto-Zulieferer Continental.",
      "Die Familie (u. a. Georg F. W. Schaeffler und Maria-Elisabeth Schaeffler-Thumann) bündelt ihr Vermögen in der „IHO Holding“.",
      "Ein sehr großes Vermögen, das auch in Immobilien angelegt wird."
    ],
    structure: {
      fo: "Das Family Office heißt „IHO Holding“.",
      managers: ["Georg F. W. Schaeffler", "Maria-Elisabeth Schaeffler-Thumann"],
      decisions: "Anlagen laufen über die IHO Holding.",
      contact: "Melde dich bei der IHO Holding."
    }
  },

  skion: {
    about: [
      "Das ist das Geld-Team von Susanne Klatten, einer der reichsten Frauen Deutschlands.",
      "Ihr Geld kommt vor allem von der Auto-Firma BMW – ihrer Familie gehört ein großer Anteil. Ihr gehört außerdem der Chemie-Konzern Altana.",
      "Ihr Anlage-Team heißt „SKion“. Damit investiert sie in Firmen und auch in Immobilien.",
      "Kurz: sehr viel Geld, breit angelegt."
    ],
    structure: {
      fo: "Das Family Office heißt „SKion GmbH“.",
      managers: ["Susanne Klatten"],
      decisions: "Investitionen laufen über SKion.",
      contact: "Melde dich beim SKion-Büro."
    }
  },

  aqton: {
    about: [
      "Das ist das Geld-Team von Stefan Quandt, dem Bruder von Susanne Klatten.",
      "Auch sein Vermögen kommt vor allem von der Auto-Firma BMW – die Familie Quandt ist der größte Eigentümer von BMW.",
      "Sein Anlage-Team heißt „AQTON“. Damit investiert er in Firmen und Immobilien.",
      "Ein sehr großes Vermögen mit Sitz im Raum Bad Homburg (bei Frankfurt)."
    ],
    structure: {
      fo: "Das Family Office heißt „AQTON SE“.",
      managers: ["Stefan Quandt"],
      decisions: "Investitionen laufen über AQTON.",
      contact: "Melde dich beim AQTON-Büro."
    }
  },

  dievini: {
    about: [
      "Das ist das Geld-Team von Dietmar Hopp, einem der Gründer des großen Software-Konzerns SAP.",
      "Mit dem Geld aus SAP investiert er viel in Medizin und Biotechnologie (zum Beispiel in die Impfstoff-Firma CureVac). Dafür gibt es die Firma „dievini“.",
      "Rund um Heidelberg und Walldorf besitzt und baut er auch Immobilien.",
      "Für Makler in der Region Rhein-Neckar ein wichtiger, kapitalstarker Name."
    ],
    structure: {
      fo: "Das Family Office heißt „dievini Hopp BioTech holding“.",
      managers: ["Dietmar Hopp und Familie"],
      decisions: "Investitionen laufen über die Hopp-Gesellschaften.",
      contact: "Melde dich beim dievini-/Hopp-Büro in Walldorf."
    }
  },

  molento: {
    about: [
      "Das ist das Geld-Team der Familie Haub.",
      "Reich geworden ist die Familie mit dem Handels-Konzern „Tengelmann“ (früher Supermärkte, dazu Ketten wie OBI und KiK).",
      "Für Immobilien hat die Familie einen eigenen Arm namens „TREI Real Estate“. Der kauft und baut vor allem Wohnungen und Einkaufsmärkte, auch im Ausland.",
      "Kurz: erfahrener Immobilien-Investor mit Handels-Wurzeln."
    ],
    structure: {
      fo: "Das Family Office wird hier „Molento“ genannt; der Immobilien-Arm heißt „TREI Real Estate“.",
      managers: ["Familie Haub"],
      decisions: "Immobilien-Käufe laufen über TREI Real Estate.",
      contact: "Melde dich beim Immobilien-Team TREI Real Estate."
    }
  },

  sixt: {
    about: [
      "Das ist das Geld-Team der Familie Sixt aus Pullach bei München.",
      "Bekannt ist die Familie durch die Autovermietung „SIXT“ – die orangefarbenen Mietwagen kennst du bestimmt.",
      "Mit dem Vermögen der Familie werden auch Immobilien gekauft und gehalten.",
      "Ein bekannter Name aus dem Raum München."
    ],
    structure: {
      fo: "Das Vermögen der Familie steckt in den Familien-Gesellschaften rund um die Sixt SE.",
      managers: ["Familie Sixt (Alexander und Konstantin Sixt)"],
      decisions: "Immobilien werden über die Familien-Gesellschaften gehalten.",
      contact: "Melde dich beim Vermögens-/Immobilien-Bereich der Familie Sixt."
    }
  },

  beisheim: {
    about: [
      "Das ist das Geld-Team, das auf Otto Beisheim zurückgeht. Er war einer der Gründer von „Metro“ (die großen Cash-&-Carry-Großmärkte).",
      "Sein Erbe wird heute über die „Beisheim Holding“ verwaltet (Sitz in der Schweiz).",
      "Die Beisheim-Gruppe investiert gern in hochwertige Immobilien und Hotels – zum Beispiel gehört ihr das „Beisheim Center“ am Potsdamer Platz in Berlin mit dem Ritz-Carlton-Hotel.",
      "Kurz: ein Investor, der edle Lagen und Hotels mag."
    ],
    structure: {
      fo: "Das Family Office heißt „Beisheim Holding / Beisheim Group“ (Sitz in Baar, Schweiz).",
      managers: ["Beisheim Holding (Verwalter des Beisheim-Erbes)"],
      decisions: "Investitionen laufen über die Beisheim Holding.",
      contact: "Melde dich bei der Beisheim Group."
    }
  }

};
