/* =========================================================================
   FO_DESC – kuratierte KI-Beschreibungen je Family Office (optional).
   Wird per id in FO_DATA gemerged. Konfliktfrei zu data.js / research-Parts,
   weil nur diese Datei die Texte trägt. Felder pro Firma (alle optional):

     about:      [String]  – 3–5 Stichpunkte: von wem, was sie hauptsächlich machen
     structure:  { fo, managers:[String], decisions, contact }
                 fo        – was genau das Family Office ist
                 managers  – Investment-/Vermögensmanager (Namen, wenn belegt)
                 decisions – wer Ankäufe entscheidet/durchführt
                 contact   – bei wem man sich als Makler MELDEN sollte (nicht die falsche Stelle)
     objects:    { "Objektname": "warum dieses Objekt dem FO zuzurechnen ist" }
     sources:    { "Quellen-Label": "was diese Quelle mit dem FO zu tun hat" }

   Alle Texte sind KI-recherchiert/Einschätzung – in der UI entsprechend markiert.
   Fehlt eine Firma hier, erzeugt die App aus den Strukturdaten ein Auto-Kurzprofil.
   ========================================================================= */
window.FO_DESC = {

  otto: {
    about: [
      "Single Family Office der Hamburger Unternehmerfamilie Otto (Otto Group / Versandhandel, u. a. otto.de).",
      "Immobilien-Schwerpunkt läuft über die ECE Group – Europas größter Entwickler und Betreiber von Shopping-Centern.",
      "2024 hat Otto/CURA zusammen mit Partnern die Mehrheit an der börsennotierten Deutsche EuroShop übernommen.",
      "Investitionsfokus: Retail (Shopping-Center), zunehmend Büro, Hotel und Wohnen in Top-Lagen."
    ],
    structure: {
      fo: "CURA Vermögensverwaltung G.m.b.H. & Co. KG – das SFO der Familie Otto.",
      managers: ["Alexander Otto (Prinzipal, CEO ECE Group)", "Henning Eggers (Geschäftsführer CURA)"],
      decisions: "Immobilien-Ankäufe laufen operativ über das Investment-Management der ECE Group, nicht über die Otto Group (Handel).",
      contact: "Für Objektangebote: ECE Group, Bereich Investment Management / Ankauf in Hamburg – NICHT die Otto-Group-Handelszentrale und nicht direkt Alexander Otto."
    },
    objects: {
      "A10 Center": "Teil des Portfolios der Deutsche EuroShop, an der Otto/CURA seit der Übernahme 2024 die Mehrheit hält – deshalb der Familie Otto zurechenbar.",
      "Allee-Center Hamm": "Gehört zum Deutsche-EuroShop-Portfolio (Otto/CURA-Mehrheit); zusätzlich von ECE gemanagt."
    },
    sources: {
      "Deutsche EuroShop – Standorte": "Listet die Center der Deutsche EuroShop – jene Gesellschaft, die Otto/CURA 2024 mehrheitlich übernommen hat. Der Standort ist also indirekt Otto-Bestand.",
      "private-banking-magazin – Otto/Cura übernimmt DES": "Belegt die Übernahme der Deutsche EuroShop durch das Otto/CURA-Single-Family-Office – die Brücke zwischen Objekt und Family Office."
    }
  }

};
