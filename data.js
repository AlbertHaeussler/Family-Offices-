/* =========================================================================
   Family Offices - Datensatz (NUR echte Family Offices: SFO/MFO + Unternehmer-Vermögensholdings)
   KEIN operatives Immobilien-/Bau-/Entwicklungsunternehmen.
   Stand: 07/2026 · Schätzungen tragen Quellen; basis:'extrapolation'=reine Einschätzung.
   ========================================================================= */

window.FO_DATA = [
  {
    "id": "otto",
    "name": "CURA Vermögensverwaltung G.m.b.H. & Co. KG",
    "kurz": "Otto Family Office (CURA)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Saseler Damm 39a, 22395 Hamburg",
    "hqLat": 53.651,
    "hqLng": 10.1,
    "website": "ece.com",
    "domain": "ece.com",
    "linkedin": "https://www.linkedin.com/company/ece",
    "contactName": "Alexander Otto (CEO ECE) · Henning Eggers (GF CURA/ECE)",
    "contactRole": "CEO ECE Group / Geschäftsführer",
    "contactChannel": "über ECE Group – Ankauf/Investment-Management",
    "category": "gruen",
    "aum": {
      "value": 30,
      "unit": "Mrd €",
      "basis": "quelle",
      "sources": [
        {
          "label": "Forbes – Alexander Otto",
          "url": "https://www.forbes.com/profile/alexander-otto/"
        },
        {
          "label": "ECE – Otto family as investors",
          "url": "https://www.ece.com/en/about-us/otto-family-as-investors"
        }
      ]
    },
    "reQuote": {
      "value": 0.67,
      "basis": "extrapolation",
      "note": "Immobilien Kern der Familie (ECE >30 Mrd € GAV); exakte Quote nicht öffentlich – Schätzung.",
      "sources": [
        {
          "label": "ECE Group",
          "url": "https://www.ece.com/en/about-us/ece-group"
        }
      ]
    },
    "reInvestedEUR": 20,
    "usage": {
      "Retail": 70,
      "Buero": 15,
      "Hotel": 10,
      "Wohnen": 5
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Hamburg (ECE-Zentrale & Standorte)",
        "intensity": "hoch",
        "usages": [
          "Retail",
          "Buero"
        ],
        "center": [
          53.55,
          9.99
        ],
        "radiusKm": 25,
        "basis": "quelle",
        "sources": [
          {
            "label": "ECE Group",
            "url": "https://www.ece.com/en/about-us/ece-group"
          }
        ]
      },
      {
        "name": "Rhein-Main (Shopping-Center)",
        "intensity": "mittel",
        "usages": [
          "Retail"
        ],
        "center": [
          50.11,
          8.68
        ],
        "radiusKm": 35,
        "basis": "quelle",
        "sources": [
          {
            "label": "ECE – Center-Portfolio",
            "url": "https://www.ece.com/"
          }
        ]
      },
      {
        "name": "Berlin (Shopping-Center)",
        "intensity": "mittel",
        "usages": [
          "Retail"
        ],
        "center": [
          52.52,
          13.4
        ],
        "radiusKm": 30,
        "basis": "quelle",
        "sources": [
          {
            "label": "ECE – Center-Portfolio",
            "url": "https://www.ece.com/"
          }
        ]
      },
      {
        "name": "Rhein-Ruhr (Shopping-Center)",
        "intensity": "mittel",
        "usages": [
          "Retail"
        ],
        "center": [
          51.45,
          7.01
        ],
        "radiusKm": 45,
        "basis": "quelle",
        "sources": [
          {
            "label": "ECE – Center-Portfolio",
            "url": "https://www.ece.com/"
          }
        ]
      }
    ]
  },
  {
    "id": "wirtgen",
    "name": "WIRTGEN INVEST Holding GmbH",
    "kurz": "Wirtgen Invest",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Wirtgen Campus 1, 53577 Neustadt (Wied)",
    "hqLat": 50.55,
    "hqLng": 7.42,
    "website": "wirtgen-invest.de",
    "domain": "wirtgen-invest.de",
    "linkedin": "https://www.linkedin.com/company/wirtgen-invest-holding-gmbh/",
    "contactName": "Jürgen & Stefan Wirtgen (GF Real Estate)",
    "contactRole": "Geschäftsführer Wirtgen Invest Real Estate",
    "contactChannel": "info@wirtgen-invest.de · +49 2683 9466 0",
    "contactLinkedin": "",
    "category": "gruen",
    "aum": {
      "value": 5,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Immobilienportfolio >1 Mrd € belegt; Gesamt-AUM nach Verkauf Wirtgen Group (~5,2 Mrd $) geschätzt.",
      "sources": [
        {
          "label": "Wirtgen Invest – Real Estate",
          "url": "https://www.wirtgen-invest.de/en/real-estate/"
        }
      ]
    },
    "reQuote": {
      "value": 0.3,
      "basis": "extrapolation",
      "note": "1 von 4 Anlagefeldern; exakte Quote nicht öffentlich.",
      "sources": [
        {
          "label": "Wirtgen Invest",
          "url": "https://www.wirtgen-invest.de/en/family-office/"
        }
      ]
    },
    "reInvestedEUR": 1.5,
    "usage": {
      "Buero": 30,
      "Retail": 28,
      "Wohnen": 20,
      "Hotel": 22
    },
    "confirmedObjects": [
      {
        "name": "T8 (Taunusanlage 8)",
        "address": "Taunusanlage 8, 60329 Frankfurt a. M.",
        "lat": 50.1149,
        "lng": 8.67,
        "usage": "Buero",
        "area": "~30.000 m² (20 Etagen, 68 m)",
        "purchaseDate": "06/2019",
        "valueEUR": 400,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – T8",
            "url": "https://www.wirtgen-invest.de/en/portfolio/taunusanlage-8-frankfurt/"
          },
          {
            "label": "taunusanlage8.de",
            "url": "https://taunusanlage8.de/en/facts-figures"
          }
        ]
      },
      {
        "name": "LYGHT",
        "address": "Georg-Glock-Straße 12–14, 40474 Düsseldorf",
        "lat": 51.256,
        "lng": 6.772,
        "usage": "Buero",
        "area": "Redevelopment (Kennedydamm)",
        "purchaseDate": "Bestand",
        "valueEUR": 150,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – LYGHT",
            "url": "https://www.wirtgen-invest.de/en/portfolio/lyght-dusseldorf/"
          },
          {
            "label": "MOMENI – LYGHT",
            "url": "https://momeni-group.com/en/press/press-detail/momeni-gruppe-realisiert-nachhaltiges-redevelopment-lyght-am-duesseldorfer-kennedydamm"
          }
        ]
      },
      {
        "name": "Altes Eichamt",
        "address": "Spichernstraße 73–77, 50829 Köln",
        "lat": 50.954,
        "lng": 6.916,
        "usage": "Buero",
        "area": "~8.000 m² Bürofläche",
        "purchaseDate": "Bestand",
        "valueEUR": 60,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Altes Eichamt",
            "url": "https://www.wirtgen-invest.de/portfolio/altes-eichamt/"
          }
        ]
      },
      {
        "name": "Trinkaus-Karree",
        "address": "Königsallee 21–23, 40212 Düsseldorf",
        "lat": 51.2247,
        "lng": 6.7797,
        "usage": "Retail",
        "area": "ehem. HSBC-Zentrale",
        "purchaseDate": "2021 (JV)",
        "valueEUR": 200,
        "status": "Bestand (JV)",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Trinkaus-Karree",
            "url": "https://www.wirtgen-invest.de/en/portfolio/trinkaus-karree-dusseldorf/"
          }
        ]
      },
      {
        "name": "Wallhaus",
        "address": "Neuer Wall 43, 20354 Hamburg",
        "lat": 53.5512,
        "lng": 9.9905,
        "usage": "Retail",
        "area": "~5.000 m² (LEED Gold)",
        "purchaseDate": "2019",
        "valueEUR": 120,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Wallhaus",
            "url": "https://www.wirtgen-invest.de/en/portfolio/wallhaus-hamburg/"
          }
        ]
      },
      {
        "name": "Bazaar de Cologne",
        "address": "Mittelstraße 12–14, 50672 Köln",
        "lat": 50.9366,
        "lng": 6.943,
        "usage": "Retail",
        "area": "Shopping-Passage",
        "purchaseDate": "Bestand",
        "valueEUR": 80,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Bazaar de Cologne",
            "url": "https://www.wirtgen-invest.de/en/portfolio/bazaar-de-cologne/"
          }
        ]
      },
      {
        "name": "Opern Passagen",
        "address": "Schwertnergasse 1, 50667 Köln",
        "lat": 50.9385,
        "lng": 6.953,
        "usage": "Retail",
        "area": "Shopping-Passage",
        "purchaseDate": "Bestand",
        "valueEUR": 90,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Opern Passagen",
            "url": "https://www.wirtgen-invest.de/en/portfolio/opern-passagen-cologne/"
          }
        ]
      },
      {
        "name": "Charlie Living",
        "address": "Zimmerstraße 94, 10117 Berlin",
        "lat": 52.5075,
        "lng": 13.3905,
        "usage": "Wohnen",
        "area": "High-End Wohnen (Checkpoint Charlie)",
        "purchaseDate": "Bestand",
        "valueEUR": 120,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Charlie Living",
            "url": "https://www.wirtgen-invest.de/en/portfolio/charlie-living-berlin/"
          }
        ]
      },
      {
        "name": "Stafflenberg Living",
        "address": "Stafflenbergstraße, 70184 Stuttgart",
        "lat": 48.779,
        "lng": 9.193,
        "usage": "Wohnen",
        "area": "Wohnensemble (Gänsheide)",
        "purchaseDate": "Bestand",
        "valueEUR": 60,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Stafflenberg Living",
            "url": "https://www.wirtgen-invest.de/en/portfolio/stafflenberg-living-stuttgart/"
          }
        ]
      },
      {
        "name": "Motel One Schillerstraße",
        "address": "Schillerstraße 3, 80336 München",
        "lat": 48.1395,
        "lng": 11.564,
        "usage": "Hotel",
        "area": "269 Zimmer, ~10.000 m²",
        "purchaseDate": "2023 (fertig 04/2025)",
        "valueEUR": 80,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Motel One München",
            "url": "https://www.wirtgen-invest.de/en/motel-one-schillerstrase-munich/"
          },
          {
            "label": "immobilienmanager.de",
            "url": "https://www.immobilienmanager.de/muenchen-neues-motel-one-geht-an-wirtgen-invest-14092023"
          }
        ]
      },
      {
        "name": "Wellness Resort Sylt (A-ROSA)",
        "address": "List auf Sylt, 25992",
        "lat": 55.017,
        "lng": 8.413,
        "usage": "Hotel",
        "area": "177 Zimmer/Suiten, 3.500 m²",
        "purchaseDate": "2022",
        "valueEUR": 50,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "Wirtgen Invest – Wellness Resort Sylt",
            "url": "https://www.wirtgen-invest.de/en/portfolio/wellness-resort-sylt/"
          },
          {
            "label": "Flick Gocke Schaumburg",
            "url": "https://www.fgs.de/en/news-and-insights/news/flick-gocke-schaumburg-beraet-wirtgen-invest-beim-kauf-des-a-rosa-auf-sylt"
          }
        ]
      }
    ],
    "foreignObjects": "Zusätzlich (nicht auf DE-Karte): 50 Finsbury Square (London/Büro), Motel One Antwerpen (BE/Hotel).",
    "heatmap": [
      {
        "name": "Frankfurt / Rhein-Main",
        "intensity": "hoch",
        "usages": [
          "Buero",
          "Retail"
        ],
        "center": [
          50.11,
          8.68
        ],
        "radiusKm": 30,
        "basis": "quelle",
        "sources": [
          {
            "label": "Wirtgen Invest – Portfolio (Top-7)",
            "url": "https://www.wirtgen-invest.de/en/real-estate/"
          }
        ]
      },
      {
        "name": "Hamburg",
        "intensity": "mittel",
        "usages": [
          "Retail",
          "Hotel"
        ],
        "center": [
          53.55,
          9.99
        ],
        "radiusKm": 25,
        "basis": "quelle",
        "sources": [
          {
            "label": "Wirtgen Invest – Wallhaus",
            "url": "https://www.wirtgen-invest.de/en/portfolio/wallhaus-hamburg/"
          }
        ]
      },
      {
        "name": "Düsseldorf",
        "intensity": "mittel",
        "usages": [
          "Retail"
        ],
        "center": [
          51.22,
          6.78
        ],
        "radiusKm": 20,
        "basis": "quelle",
        "sources": [
          {
            "label": "Wirtgen Invest – Trinkaus-Karree",
            "url": "https://www.wirtgen-invest.de/en/portfolio/trinkaus-karree-dusseldorf/"
          }
        ]
      }
    ]
  },
  {
    "id": "hqtrust",
    "name": "HQ Trust GmbH (Harald Quandt Holding)",
    "kurz": "HQ Trust / Harald Quandt",
    "typ": "MFO",
    "land": "Deutschland",
    "hqAddress": "Am Pilgerrain 17, 61352 Bad Homburg v. d. Höhe",
    "hqLat": 50.2205,
    "hqLng": 8.605,
    "website": "hqtrust.de",
    "domain": "hqtrust.de",
    "linkedin": "https://www.linkedin.com/company/hq-trust-gmbh/",
    "contactName": "Jochen Butz · Christian Stadtmüller (GF)",
    "contactRole": "Geschäftsführer · Real-Assets-Team",
    "contactChannel": "über hqtrust.de (Kontakt)",
    "category": "gelb",
    "aum": {
      "value": 17,
      "unit": "Mrd €",
      "basis": "quelle",
      "note": "HQ Trust + HQ Capital + CP Capital zusammen >17 Mrd €.",
      "sources": [
        {
          "label": "HQ Holding – Über uns",
          "url": "https://www.hqholding.com/en/ueber-uns"
        }
      ]
    },
    "reQuote": {
      "value": 0.12,
      "basis": "extrapolation",
      "note": "RE Teil der Real-Assets-Allokation, überwiegend über Fonds/US – exakte Quote nicht öffentlich.",
      "sources": [
        {
          "label": "HQ Trust",
          "url": "https://www.hqtrust.de/"
        }
      ]
    },
    "reInvestedEUR": 2,
    "usage": {
      "Wohnen": 80,
      "Sonstiges": 20
    },
    "confirmedObjects": [
      {
        "name": "Harald-Quandt-Haus",
        "address": "Am Pilgerrain 17, 61352 Bad Homburg",
        "lat": 50.2205,
        "lng": 8.605,
        "usage": "Buero",
        "area": "Sitz des Family Office",
        "purchaseDate": "Bestand",
        "valueEUR": 30,
        "status": "Bestand (Eigennutzung)",
        "images": [],
        "sources": [
          {
            "label": "HQ Holding",
            "url": "https://www.hqholding.com/en/ueber-uns"
          }
        ]
      }
    ],
    "heatmap": [
      {
        "name": "Rhein-Main (Sitz)",
        "intensity": "niedrig",
        "usages": null,
        "center": [
          50.15,
          8.65
        ],
        "radiusKm": 30,
        "basis": "extrapolation",
        "note": "MFO – DE-Immobilien kaum als Einzelobjekte offengelegt; Region abgeleitet vom Sitz. Reine Einschätzung.",
        "sources": []
      }
    ]
  },
  {
    "id": "dohle",
    "name": "DOHLE Family Office (Handelsgruppe Holding GmbH & Co. KG)",
    "kurz": "Dohle Family Office",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Jean-Dohle-Straße 1, 53721 Siegburg",
    "hqLat": 50.79,
    "hqLng": 7.2,
    "website": "dohle-gruppe.com",
    "domain": "dohle-gruppe.com",
    "linkedin": "",
    "contactName": "Kurt Dohle · Klaus Dohle · Nicolas von Loeper",
    "contactRole": "Geschäftsführung / Investments",
    "contactChannel": "über dohle-gruppe.com/invest",
    "contactLinkedin": "https://de.linkedin.com/in/nicolas-von-loeper-872059158",
    "contactLinkedinName": "Nicolas von Loeper",
    "category": "gruen",
    "aum": {
      "value": 2,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Keine offizielle Zahl; grobe Größenordnung aus Handelsgruppe + Family Office abgeleitet.",
      "sources": []
    },
    "reQuote": {
      "value": 0.35,
      "basis": "extrapolation",
      "note": "Immobilien explizit als Anlagefokus genannt; Anteil geschätzt.",
      "sources": [
        {
          "label": "Dohle – Invest",
          "url": "https://dohle-gruppe.com/invest/"
        }
      ]
    },
    "reInvestedEUR": 0.7,
    "usage": {
      "Wohnen": 40,
      "Buero": 40,
      "Sonstiges": 20
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Rheinland (Köln/Bonn/Siegburg)",
        "intensity": "mittel",
        "usages": null,
        "center": [
          50.8,
          7.1
        ],
        "radiusKm": 35,
        "basis": "extrapolation",
        "note": "Keine öffentlichen Einzelobjekte; Region abgeleitet vom Sitz und Handelsgebiet. Reine Einschätzung.",
        "sources": [
          {
            "label": "Dohle – Invest",
            "url": "https://dohle-gruppe.com/invest/"
          }
        ]
      }
    ]
  },
  {
    "id": "koehler",
    "name": "KOEHLER GROUP Holding GmbH",
    "kurz": "KOEHLER GROUP",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Marktplatz 5, 70173 Stuttgart",
    "hqLat": 48.7758,
    "hqLng": 9.1789,
    "website": "koehlergroup.com",
    "domain": "koehlergroup.com",
    "linkedin": "https://www.linkedin.com/company/koehler-group",
    "contactName": "René Marius Köhler (GF) · KOEHLER Real Estate",
    "contactRole": "Geschäftsführer / Gründer",
    "contactChannel": "über koehlergroup.com · Marktplatz 5, 70173 Stuttgart",
    "category": "gruen",
    "aum": {
      "value": 0.4,
      "unit": "Mrd €",
      "basis": "quelle",
      "note": "Investiertes Kapital ~400 Mio € (von 50 Mio gewachsen), EK-Quote >50 %.",
      "sources": [
        {
          "label": "Stuttgarter Zeitung – R. M. Köhler",
          "url": "https://www.stuttgarter-zeitung.de/inhalt.gruender-ren-marius-koehler-was-den-stuttgarter-zum-erfolgreichen-investor-macht.5e1f475a-7e88-4f72-988c-ea3b68d45dc9.html"
        }
      ]
    },
    "reQuote": {
      "value": 0.375,
      "basis": "extrapolation",
      "note": "1 von 3 Geschäftsfeldern; exakter Anteil nicht öffentlich.",
      "sources": [
        {
          "label": "KOEHLER GROUP",
          "url": "https://www.koehlergroup.com/en/"
        }
      ]
    },
    "reInvestedEUR": 0.15,
    "usage": {
      "Logistik": 40,
      "Wohnen": 35,
      "Buero": 25
    },
    "confirmedObjects": [
      {
        "name": "Wohn-/Geschäftshaus Königstraße",
        "address": "Königstraße, 70173 Stuttgart",
        "lat": 48.7765,
        "lng": 9.1795,
        "usage": "Retail",
        "area": "2.363 m² (6 Gewerbe + 2 Wohnen)",
        "purchaseDate": "Ankauf",
        "valueEUR": 25,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "deal-magazin – KOEHLER Königstraße",
            "url": "http://www.deal-magazin.com/news/122154/Stuttgart-KOEHLER-kauft-kernsaniertes-Objekt-auf-der-Koenigstrasse"
          }
        ]
      },
      {
        "name": "Wohn-/Geschäftshaus Freiburg",
        "address": "79098 Freiburg im Breisgau",
        "lat": 47.9959,
        "lng": 7.8494,
        "usage": "Wohnen",
        "area": "1.450 m² (11 Einheiten)",
        "purchaseDate": "Ankauf",
        "valueEUR": 15,
        "status": "Bestand",
        "images": [],
        "sources": [
          {
            "label": "KOEHLER GROUP",
            "url": "https://www.koehlergroup.com/en/"
          }
        ]
      }
    ],
    "heatmap": [
      {
        "name": "Region Stuttgart",
        "intensity": "hoch",
        "usages": [
          "Logistik",
          "Wohnen",
          "Buero"
        ],
        "center": [
          48.78,
          9.18
        ],
        "radiusKm": 30,
        "basis": "quelle",
        "sources": [
          {
            "label": "KOEHLER GROUP – Real Estate",
            "url": "https://www.koehlergroup.com/en/"
          }
        ]
      },
      {
        "name": "Süddeutschland",
        "intensity": "mittel",
        "usages": [
          "Logistik",
          "Wohnen"
        ],
        "center": [
          48.4,
          9.5
        ],
        "radiusKm": 80,
        "basis": "quelle",
        "sources": [
          {
            "label": "KOEHLER GROUP",
            "url": "https://www.koehlergroup.com/en/"
          }
        ]
      }
    ]
  },
  {
    "id": "molento",
    "name": "Molento (Tengelmann/Haub) – Trei Real Estate GmbH",
    "kurz": "Molento / Trei (Haub)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Klaus-Bungert-Str. 5b, 40468 Düsseldorf (Trei)",
    "hqLat": 51.26,
    "hqLng": 6.75,
    "website": "treirealestate.com",
    "domain": "treirealestate.com",
    "linkedin": "https://www.linkedin.com/company/trei-real-estate-gmbh",
    "contactName": "Pepijn Morshuis (CEO) · Matthias Schultz (GF)",
    "contactRole": "CEO / Geschäftsführer Trei Real Estate",
    "contactChannel": "deutschland@treirealestate.com · +49 211 54011-000",
    "contactLinkedin": "https://www.linkedin.com/in/pepijn-morshuis-4503b019/",
    "contactLinkedinName": "Pepijn Morshuis",
    "category": "gruen",
    "aum": {
      "value": 5,
      "unit": "Mrd €",
      "basis": "quelle",
      "note": "Immobilienvermögen der Familie/Konzern >5 Mrd € (v. a. Trei).",
      "sources": [
        {
          "label": "THE PROPERTY – Familie Haub",
          "url": "https://the-property.org/2021/06/28/deutschlands-dynastien-diesmal-familie-haub/"
        }
      ]
    },
    "reQuote": {
      "value": 1,
      "basis": "extrapolation",
      "note": "Immobilien = dominanter Vermögensblock; Quote ~100 % geschätzt.",
      "sources": [
        {
          "label": "Trei Real Estate",
          "url": "https://www.treirealestate.com/unternehmen"
        }
      ]
    },
    "reInvestedEUR": 5,
    "usage": {
      "Retail": 60,
      "Wohnen": 40
    },
    "confirmedObjects": [
      {
        "name": "Ehem. Tengelmann-Zentrale (verkauft)",
        "address": "Wissollstraße, 45478 Mülheim a. d. Ruhr",
        "lat": 51.4256,
        "lng": 6.8583,
        "usage": "Sonstiges",
        "area": "historisches Areal",
        "purchaseDate": "2020 verkauft (Soravia)",
        "valueEUR": 100,
        "status": "Verkauft",
        "images": [],
        "sources": [
          {
            "label": "Immobilien Zeitung – Verkauf",
            "url": "https://www.iz.de/transaktionen/news/-soravia-kauft-die-muelheimer-tengelmann-zentrale-156396"
          }
        ]
      }
    ],
    "heatmap": [
      {
        "name": "Bundesweit (Nahversorgung)",
        "intensity": "hoch",
        "usages": [
          "Retail"
        ],
        "center": [
          51.2,
          10.2
        ],
        "radiusKm": 180,
        "basis": "quelle",
        "sources": [
          {
            "label": "private-banking-magazin – Molento/MEAG",
            "url": "https://www.private-banking-magazin.de/tengelmann-family-office-verkauft-immobilien-an-die-meag/"
          }
        ]
      },
      {
        "name": "Metropolen (Wohn-Development)",
        "intensity": "mittel",
        "usages": [
          "Wohnen"
        ],
        "center": [
          52,
          9.5
        ],
        "radiusKm": 120,
        "basis": "quelle",
        "sources": [
          {
            "label": "Trei Real Estate – Wohnen",
            "url": "https://www.treirealestate.com/unternehmen"
          }
        ]
      }
    ]
  },
  {
    "id": "kuehne",
    "name": "Kühne Holding AG (inkl. Kühne Real Estate AG)",
    "kurz": "Kühne Holding",
    "typ": "SFO",
    "land": "Schweiz (investiert in DE)",
    "hqAddress": "Schindellegi (Feusisberg), Kanton Schwyz, CH",
    "hqLat": 47.15,
    "hqLng": 8.72,
    "website": "kuehne-holding.com",
    "domain": "kuehne-holding.com",
    "linkedin": "https://www.linkedin.com/company/k%C3%BChne-holding-ag",
    "contactName": "Karl Gernandt (Präsident) · Kühne Real Estate AG",
    "contactRole": "Präsident / Verwaltungsrat",
    "contactChannel": "über kuehne-holding.com",
    "category": "gelb",
    "aum": {
      "value": 30,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Vermögen K.-M. Kühne ~30+ Mrd $ (Ranking-Schätzung), nicht = liquides RE-Kapital.",
      "sources": [
        {
          "label": "Wikipedia – Klaus-Michael Kühne",
          "url": "https://en.wikipedia.org/wiki/Klaus-Michael_K%C3%BChne"
        }
      ]
    },
    "reQuote": {
      "value": 0.03,
      "basis": "extrapolation",
      "note": "RE nicht Kern, aber sehr große Einzelprojekte (Elbtower).",
      "sources": [
        {
          "label": "Handelsblatt – Kühne/Elbtower",
          "url": "https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-krise-milliardaer-klaus-michael-kuehne-prueft-uebernahme-des-elbtowers/29523124.html"
        }
      ]
    },
    "reInvestedEUR": 1,
    "usage": {
      "Buero": 60,
      "Hotel": 40
    },
    "confirmedObjects": [
      {
        "name": "Elbtower (Engagement)",
        "address": "Zweibrückenstraße, HafenCity, 20457 Hamburg",
        "lat": 53.5407,
        "lng": 10.011,
        "usage": "Buero",
        "area": "~100.000 m² (geplant, 64 Etagen)",
        "purchaseDate": "ab 2024 (nach Signa-Insolvenz)",
        "valueEUR": 950,
        "status": "In Entwicklung",
        "images": [],
        "sources": [
          {
            "label": "Handelsblatt – Kühne/Elbtower",
            "url": "https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-krise-milliardaer-klaus-michael-kuehne-prueft-uebernahme-des-elbtowers/29523124.html"
          }
        ]
      }
    ],
    "heatmap": [
      {
        "name": "Hamburg",
        "intensity": "hoch",
        "usages": [
          "Buero",
          "Hotel"
        ],
        "center": [
          53.54,
          10
        ],
        "radiusKm": 20,
        "basis": "quelle",
        "sources": [
          {
            "label": "Handelsblatt – Elbtower",
            "url": "https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-krise-milliardaer-klaus-michael-kuehne-prueft-uebernahme-des-elbtowers/29523124.html"
          }
        ]
      }
    ]
  },
  {
    "id": "viessmann",
    "name": "Viessmann Generations Group GmbH & Co. KG",
    "kurz": "Viessmann Generations Group",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Im Birkenried 1, 35088 Battenberg (Eder)",
    "hqLat": 51.01,
    "hqLng": 8.64,
    "website": "vgg.de",
    "domain": "viessmann.com",
    "linkedin": "https://de.linkedin.com/company/viessmann",
    "contactName": "Max Viessmann (CEO) · FGTC Investment (München)",
    "contactRole": "CEO / Family Office Lead",
    "contactChannel": "über vgg.de / fgtc-investment.com",
    "category": "gelb",
    "aum": {
      "value": 4,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Familienvermögen mehrere Mrd € nach Carrier-Deal (~12 Mrd €, tw. Aktien/Cash).",
      "sources": [
        {
          "label": "Wikipedia – Viessmann",
          "url": "https://en.wikipedia.org/wiki/Viessmann"
        }
      ]
    },
    "reQuote": {
      "value": 0.075,
      "basis": "extrapolation",
      "note": "RE-Allokation im Aufbau; Anteil klein, wachsend.",
      "sources": [
        {
          "label": "private-banking-magazin – Viessmann/Do Investment",
          "url": "https://www.private-banking-magazin.de/familienunternehmen-kauft-do-investment-und-benennt-es-um/"
        }
      ]
    },
    "reInvestedEUR": 0.3,
    "usage": {
      "Buero": 40,
      "Hotel": 30,
      "Gastro": 30
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Deutschland (Aufbau)",
        "intensity": "niedrig",
        "usages": null,
        "center": [
          51,
          9.5
        ],
        "radiusKm": 120,
        "basis": "extrapolation",
        "note": "RE-Einheit (Viessmann Real Estate) im Aufbau; keine Einzelobjekte öffentlich. Reine Einschätzung.",
        "sources": [
          {
            "label": "Northdata – Viessmann Generations Group",
            "url": "https://www.northdata.com/Viessmann+Group+GmbH+&+Co.+KG,+Allendorf+(Eder)/Amtsgericht+Marburg+HRA+3389"
          }
        ]
      }
    ]
  },
  {
    "id": "athos",
    "name": "ATHOS Service GmbH (Strüngmann Family Office)",
    "kurz": "ATHOS (Strüngmann)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Rosenheimer Platz 6, 81669 München",
    "hqLat": 48.1268,
    "hqLng": 11.5983,
    "website": "kein öffentlicher Web-Auftritt (SFO)",
    "domain": "",
    "linkedin": "",
    "contactName": "Thomas & Andreas Strüngmann · GF: T. Maier, C. Förster, C. Rappl, W. Essler",
    "contactRole": "Gesellschafter / Geschäftsführung",
    "contactChannel": "über ATHOS Service GmbH, Rosenheimer Platz 6, 81669 München",
    "category": "gelb",
    "aum": {
      "value": 30,
      "unit": "Mrd €",
      "basis": "quelle",
      "note": "~30 Mrd $ inkl. BioNTech-Beteiligung; Fokus Healthcare/Biotech, nicht Immobilien.",
      "sources": [
        {
          "label": "Forbes – Strüngmann Family Office",
          "url": "https://www.forbes.com/sites/paulwestall/2021/08/24/the-family-office-saving-lives-boosting-the-economy-and-making-billions/"
        },
        {
          "label": "Northdata – ATHOS Service GmbH",
          "url": "https://www.northdata.com/ATHOS%20Service%20GmbH,%20M%C3%BCnchen/HRB%20157929"
        }
      ]
    },
    "reQuote": {
      "value": 0.05,
      "basis": "extrapolation",
      "note": "Kein öffentliches Immobilien-Kerngeschäft; sehr großes Kapital → potenzieller RE-Käufer. Quote reine Einschätzung.",
      "sources": []
    },
    "reInvestedEUR": 1,
    "usage": {
      "Sonstiges": 100
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "München (Sitz)",
        "intensity": "niedrig",
        "usages": null,
        "center": [
          48.13,
          11.6
        ],
        "radiusKm": 25,
        "basis": "extrapolation",
        "note": "Kein öffentliches Immobilienportfolio; Region vom Sitz abgeleitet. Reine Einschätzung.",
        "sources": []
      }
    ]
  },
  {
    "id": "mayfair",
    "name": "Mayfair Vermögensverwaltungs SE (Familie Herz)",
    "kurz": "Mayfair (Herz)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Neuer Jungfernstieg, 20354 Hamburg (Palais Mayfair)",
    "hqLat": 53.5565,
    "hqLng": 9.9925,
    "website": "mayfair-hamburg.de",
    "domain": "mayfair-hamburg.de",
    "linkedin": "",
    "contactName": "Günter Herz & Daniela Herz-Schnoeckl (Tchibo-Erben)",
    "contactRole": "Familienholding / Investments",
    "contactChannel": "über mayfair-hamburg.de",
    "category": "gelb",
    "aum": {
      "value": 5,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Familienholding der Herz-Geschwister (nach Tchibo-Verkauf 2002); Vermögen mehrere Mrd €, geschätzt.",
      "sources": [
        {
          "label": "Wikipedia – Mayfair Vermögensverwaltung",
          "url": "https://en.wikipedia.org/wiki/Mayfair_Verm%C3%B6gensverwaltung"
        }
      ]
    },
    "reQuote": {
      "value": 0.2,
      "basis": "extrapolation",
      "note": "Immobilien = eine von drei Säulen (neben Unternehmensbeteiligungen und Wertpapieren).",
      "sources": [
        {
          "label": "Mayfair Hamburg",
          "url": "https://www.mayfair-hamburg.de/"
        }
      ]
    },
    "reInvestedEUR": 1,
    "usage": {
      "Sonstiges": 60,
      "Buero": 20,
      "Wohnen": 20
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Hamburg",
        "intensity": "mittel",
        "usages": null,
        "center": [
          53.55,
          9.99
        ],
        "radiusKm": 22,
        "basis": "extrapolation",
        "note": "Immobilien-Säule vorhanden, aber kein öffentliches Objektverzeichnis; Region vom Sitz abgeleitet.",
        "sources": [
          {
            "label": "Mayfair Hamburg",
            "url": "https://www.mayfair-hamburg.de/"
          }
        ]
      }
    ]
  },
  {
    "id": "aqton",
    "name": "AQTON SE (Family Office Stefan Quandt)",
    "kurz": "AQTON (S. Quandt)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Bad Homburg v. d. Höhe (Quandt-Cluster)",
    "hqLat": 50.2245,
    "hqLng": 8.6185,
    "website": "—",
    "domain": "",
    "linkedin": "",
    "contactName": "Stefan Quandt · AQTON SE / Delton AG",
    "contactRole": "Investment-Holding / Beteiligungen",
    "contactChannel": "privat; über AQTON SE, Bad Homburg",
    "category": "gelb",
    "aum": {
      "value": 35,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Größtes FO Deutschlands (Schätzung); v. a. BMW-Beteiligung + Industrieholdings. Kein RE-Kerngeschäft.",
      "sources": [
        {
          "label": "familyofficehub – AQTON SE",
          "url": "https://familyofficehub.io/blog/the-stefan-quandt-family-office-aqton-se/"
        },
        {
          "label": "Wikipedia – Stefan Quandt",
          "url": "https://en.wikipedia.org/wiki/Stefan_Quandt"
        }
      ]
    },
    "reQuote": {
      "value": 0.02,
      "basis": "extrapolation",
      "note": "Kein öffentliches Immobilien-Portfolio; sehr großes Kapital → potenzieller Käufer. Reine Einschätzung.",
      "sources": []
    },
    "reInvestedEUR": 0.7,
    "usage": {
      "Sonstiges": 100
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Rhein-Main / Bad Homburg (Sitz)",
        "intensity": "niedrig",
        "usages": null,
        "center": [
          50.15,
          8.65
        ],
        "radiusKm": 30,
        "basis": "extrapolation",
        "note": "Kein RE-Portfolio bekannt; Region vom Sitz abgeleitet.",
        "sources": []
      }
    ]
  },
  {
    "id": "skion",
    "name": "SKion GmbH (Family Office Susanne Klatten)",
    "kurz": "SKion (Klatten)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Günther-Quandt-Haus, Seedammweg 55, 61352 Bad Homburg",
    "hqLat": 50.224,
    "hqLng": 8.618,
    "website": "skion.de",
    "domain": "skion.de",
    "linkedin": "",
    "contactName": "Susanne Klatten · Prof. Dr. Frank Richter (GF)",
    "contactRole": "Investment-Holding / Beteiligungen",
    "contactChannel": "über skion.de · Seedammweg 55, 61352 Bad Homburg",
    "category": "gelb",
    "aum": {
      "value": 25,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Vermögen S. Klatten (BMW + Altana); SKion investiert in Industrie/Materials/Wasser/Life-Sciences, kein RE-Kern.",
      "sources": [
        {
          "label": "familyofficehub – SKion",
          "url": "https://familyofficehub.io/family-office-portraits/the-susanne-klatten-family-office-skion-gmbh/"
        },
        {
          "label": "SKion – Legal Notice",
          "url": "https://www.skion.de/en/legal-notice"
        }
      ]
    },
    "reQuote": {
      "value": 0.02,
      "basis": "extrapolation",
      "note": "Kein öffentliches Immobilien-Portfolio; Fokus Industriebeteiligungen. Reine Einschätzung.",
      "sources": []
    },
    "reInvestedEUR": 0.5,
    "usage": {
      "Sonstiges": 100
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Bad Homburg / Rhein-Main (Sitz)",
        "intensity": "niedrig",
        "usages": null,
        "center": [
          50.15,
          8.65
        ],
        "radiusKm": 30,
        "basis": "extrapolation",
        "note": "Kein RE-Portfolio bekannt; Region vom Sitz abgeleitet.",
        "sources": []
      }
    ]
  },
  {
    "id": "dievini",
    "name": "dievini Hopp BioTech holding (Family Office Dietmar Hopp)",
    "kurz": "dievini (Hopp)",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Johann-Jakob-Astor-Str. 57, 69190 Walldorf",
    "hqLat": 49.296,
    "hqLng": 8.642,
    "website": "dievini.de",
    "domain": "dievini.de",
    "linkedin": "",
    "contactName": "Dietmar Hopp · dievini (Hopp-Familie)",
    "contactRole": "Investment-Holding (Life Sciences)",
    "contactChannel": "über dievini.de · Walldorf",
    "category": "gelb",
    "aum": {
      "value": 10,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "SAP-Vermögen D. Hopp; dievini fokussiert Life/Health Sciences. RE läuft über separate Hopp-Vehikel (Rhein-Neckar).",
      "sources": [
        {
          "label": "altss – dievini Hopp",
          "url": "https://altss.com/profile/dievini-hopp-dietmar-hopp-family-office"
        },
        {
          "label": "Northdata – dievini",
          "url": "https://www.northdata.com/dievini%20Hopp%20BioTech%20holding%20GmbH%20&%20Co%C2%B7%20KG,%20Walldorf/Amtsgericht%20Mannheim%20HRA%20700792"
        }
      ]
    },
    "reQuote": {
      "value": 0.03,
      "basis": "extrapolation",
      "note": "dievini selbst = Biotech; Immobilien der Familie Hopp über andere Gesellschaften. Reine Einschätzung.",
      "sources": []
    },
    "reInvestedEUR": 0.3,
    "usage": {
      "Sonstiges": 100
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Rhein-Neckar (Walldorf/Heidelberg)",
        "intensity": "niedrig",
        "usages": null,
        "center": [
          49.4,
          8.68
        ],
        "radiusKm": 35,
        "basis": "extrapolation",
        "note": "RE der Familie Hopp regional (Rhein-Neckar), aber nicht über dievini. Reine Einschätzung.",
        "sources": []
      }
    ]
  },
  {
    "id": "ehlerding",
    "name": "Family Office Karl Ehlerding",
    "kurz": "Ehlerding",
    "typ": "SFO",
    "land": "Deutschland",
    "hqAddress": "Hamburg (HafenCity, nahe Elbphilharmonie)",
    "hqLat": 53.5415,
    "hqLng": 9.984,
    "website": "—",
    "domain": "",
    "linkedin": "",
    "contactName": "Karl Ehlerding (Familie)",
    "contactRole": "Investor (Aktien + Immobilien)",
    "contactChannel": "privates Family Office, Hamburg",
    "category": "gelb",
    "aum": {
      "value": 1.5,
      "unit": "Mrd €",
      "basis": "extrapolation",
      "note": "Ex-Großaktionär WCM (Immobilien/Beteiligungen); heute vermögender Investor. Größenordnung geschätzt.",
      "sources": [
        {
          "label": "Wikipedia – Karl Ehlerding",
          "url": "https://de.wikipedia.org/wiki/Karl_Ehlerding"
        },
        {
          "label": "Undervalued Shares – Ehlerding",
          "url": "https://www.undervalued-shares.com/weekly-dispatches/weltbeste-investoren-teil-1-karl-ehlerding-exklusives-interview-zum-80-geburtstag/"
        }
      ]
    },
    "reQuote": {
      "value": 0.4,
      "basis": "extrapolation",
      "note": "Aktiv im Immobiliengeschäft (aus WCM-Historie); genaue Quote nicht öffentlich.",
      "sources": [
        {
          "label": "Wikipedia – Karl Ehlerding",
          "url": "https://de.wikipedia.org/wiki/Karl_Ehlerding"
        }
      ]
    },
    "reInvestedEUR": 0.6,
    "usage": {
      "Wohnen": 50,
      "Buero": 50
    },
    "confirmedObjects": [],
    "heatmap": [
      {
        "name": "Hamburg / bundesweit (Wohn-/Gewerbe)",
        "intensity": "mittel",
        "usages": [
          "Wohnen",
          "Buero"
        ],
        "center": [
          53.55,
          9.99
        ],
        "radiusKm": 30,
        "basis": "extrapolation",
        "note": "RE-aktiv, aber kein öffentliches Objektverzeichnis. Reine Einschätzung.",
        "sources": []
      }
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
