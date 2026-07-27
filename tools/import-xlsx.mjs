#!/usr/bin/env node
/* =========================================================================
   FO News-Import aus strukturierten Excel-Auswertungen
   -------------------------------------------------------------------------
   Wandelt bereits strukturierte Transaktions-Tabellen (Thomas Daily / Savills
   und Green Street) in den News-Datensatz ../news.js (window.FO_NEWS) um.

   Modell: pro Transaktion bis zu ZWEI Einträge
     - Käufer    -> rolle "Käufer",    status "besitzt"  (GRÜN: gekauft, hält)
     - Verkäufer -> rolle "Verkäufer", status "besessen" (ROT: verkauft)

   Koordinaten sind OPTIONAL: das Markt-Radar sucht über Stadt/Objektart/Rolle
   als Text und funktioniert auch ohne. Für Karten-Pins mappt ein statischer
   Städte-Gazetteer die häufigen DACH/EU-Städte; unbekannte Städte bekommen
   lat/lng = null (erscheinen in der Suche, nicht als Pin). Mit --geocode kann
   lokal Nominatim für fehlende Städte nachgeladen werden.

   Aufruf:
     node import-xlsx.mjs --td <pfad.xlsx> --gs <pfad.xlsx> [optionen]
   Optionen:
     --out <pfad>   Ziel (Default ../news.js)
     --merge        an bestehende news.js anhängen statt ersetzen
     --dry-run      nur Statistik, nichts schreiben
     --geocode      fehlende Städte per Nominatim nachladen (nur lokal sinnvoll)
   ========================================================================= */

import XLSXpkg from "../vendor/xlsx.js";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const XLSX = XLSXpkg;
const __dirname = dirname(fileURLToPath(import.meta.url));

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const flag = n => argv.includes(n);
const TD = opt("--td");
const GS = opt("--gs");
const OUT = resolve(__dirname, opt("--out", "../news.js"));
const MERGE = flag("--merge");
const DRY = flag("--dry-run");
const GEOCODE = flag("--geocode");

if (!TD && !GS) { console.error("Mind. eine Quelle nötig: --td <xlsx> und/oder --gs <xlsx>"); process.exit(1); }

// ---- Städte-Gazetteer (Stadtzentrum, ~city-level) ----
const CITY = {
  "berlin":[52.520,13.405],"münchen":[48.137,11.575],"hamburg":[53.551,9.994],"frankfurt":[50.111,8.682],
  "köln":[50.938,6.960],"düsseldorf":[51.228,6.773],"nürnberg":[49.452,11.077],"hannover":[52.376,9.732],
  "stuttgart":[48.776,9.183],"leipzig":[51.340,12.373],"bremen":[53.079,8.802],"dresden":[51.050,13.737],
  "wiesbaden":[50.083,8.240],"mainz":[49.992,8.247],"mannheim":[49.487,8.466],"erfurt":[50.984,11.030],
  "essen":[51.456,7.012],"dortmund":[51.514,7.465],"magdeburg":[52.121,11.628],"karlsruhe":[49.007,8.404],
  "gelsenkirchen":[51.518,7.086],"halle":[51.482,11.970],"bonn":[50.737,7.098],"münster":[51.960,7.626],
  "würzburg":[49.792,9.953],"wolfsburg":[52.423,10.787],"aachen":[50.776,6.084],"bremerhaven":[53.540,8.580],
  "leverkusen":[51.033,6.985],"mönchengladbach":[51.180,6.442],"ingolstadt":[48.766,11.425],
  "norderstedt":[53.706,9.994],"freiburg":[47.999,7.842],"potsdam":[52.391,13.064],"duisburg":[51.435,6.763],
  "kiel":[54.323,10.135],"regensburg":[49.013,12.101],"krefeld":[51.334,6.564],"bochum":[51.482,7.216],
  "darmstadt":[49.872,8.651],"augsburg":[48.371,10.898],"hildesheim":[52.155,9.951],"lübeck":[53.866,10.687],
  "osnabrück":[52.279,8.047],"göttingen":[51.541,9.916],"heidelberg":[49.399,8.672],"neuss":[51.198,6.687],
  "fulda":[50.554,9.677],"flensburg":[54.783,9.437],"weimar":[50.980,11.329],"hagen":[51.360,7.472],
  "rosenheim":[47.856,12.123],"landau":[49.199,8.117],"rostock":[54.092,12.099],"fürth":[49.478,10.990],
  "bielefeld":[52.020,8.532],"neumünster":[54.072,9.982],"offenbach":[50.096,8.766],"kaufbeuren":[47.880,10.622],
  "teltow":[52.402,13.271],"chemnitz":[50.828,12.921],"aschaffenburg":[49.976,9.152],"bühl":[48.696,8.135],
  "braunschweig":[52.268,10.526],"heilbronn":[49.142,9.211],"wetzlar":[50.559,8.502],"hamm":[51.680,7.821],
  "hanau":[50.132,8.916],"erlangen":[49.590,11.005],"delmenhorst":[53.051,8.633],"langen":[49.991,8.660],
  "zürich":[47.377,8.542],"weener":[53.166,7.360],"villingen-schwenningen":[48.060,8.459],
  "wuppertal":[51.256,7.150],"gießen":[50.587,8.678],"ulm":[48.401,9.987],"recklinghausen":[51.614,7.198],
  "wismar":[53.891,11.466],"paderborn":[51.719,8.754],"worms":[49.634,8.360],"koblenz":[50.356,7.594],
  "alzey":[49.746,8.116],"bottrop":[51.524,6.923],"saarbrücken":[49.240,6.997],"feldkirchen":[48.148,11.735],
  "kaiserslautern":[49.440,7.749],"bad homburg":[50.227,8.618],"salzgitter":[52.155,10.335],"trier":[49.750,6.638],
  "warschau":[52.230,21.011],"wien":[48.208,16.374],"eschborn":[50.144,8.570],"weinheim":[49.545,8.667],
  "kassel":[51.312,9.480],"neubrandenburg":[53.558,13.261],"bamberg":[49.892,10.887],"herne":[51.537,7.222],
  "lüneburg":[53.247,10.414],"traunreut":[47.966,12.593],"holzminden":[51.828,9.446],"innsbruck":[47.269,11.404],
  "zwickau":[50.718,12.496],"cottbus":[51.760,14.334],"mülheim":[51.431,6.880],"bergkamen":[51.616,7.635],
  "basel":[47.559,7.588],"amsterdam":[52.370,4.895],"lissabon":[38.722,-9.139],"london":[51.507,-0.128],
  "paris":[48.857,2.352],"madrid":[40.417,-3.703],"mailand":[45.464,9.190],"prag":[50.076,14.438]
};
const norm = s => String(s || "").toLowerCase().trim()
  .replace(/\s*\(.*?\)\s*/g, "").split(/[/,]/)[0].trim(); // "Landau/Pfalz"->"landau", "Stuttgart-Möhringen" bleibt

// ---- Assetklasse -> Objektart ----
function usage(a) {
  const s = String(a || "").toLowerCase();
  if (/büro|buero|office/.test(s)) return "Buero";
  if (/wohn|residential/.test(s)) return "Wohnen";
  if (/einzelhandel|retail|handel|fachmarkt|shopping/.test(s)) return "Retail";
  if (/logistik|industrie|logistics/.test(s)) return "Logistik";
  if (/hotel/.test(s)) return "Hotel";
  if (/gastro|restaurant/.test(s)) return "Gastro";
  return "Sonstiges"; // Grundstück, Rechenzentrum, Pflege/Gesundheit, unklar
}
// bei zusammengesetzten GS-Klassen ("Büro; Hotel") den ersten Teil nehmen
const firstAsset = a => String(a || "").split(/[;,]/)[0].trim();

// ---- Preis -> Mio EUR ----
function priceMio(v) {
  if (v === "" || v == null) return null;
  if (typeof v === "number") return v;               // TD: schon Mio EUR
  const s = String(v).toLowerCase().replace(/\s|€|eur/g, "").replace(",", ".");
  const m = s.match(/([\d.]+)\s*(bn|mrd|b|m|mio)?/);
  if (!m) return null;
  let n = parseFloat(m[1]); if (isNaN(n)) return null;
  if (/bn|mrd|b$/.test(m[2] || "")) n *= 1000;        // Mrd -> Mio
  return Math.round(n * 10) / 10;
}
function isoDate(v) {
  if (v == null || v === "") return "";
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  const s = String(v).trim();
  const m = s.match(/(\d{4})[-/.](\d{1,2})(?:[-/.](\d{1,2}))?/);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}${m[3] ? "-" + m[3].padStart(2, "0") : ""}`;
  return s.slice(0, 10);
}
const generic = s => /^(ein|eine|mehrere|diverse|unbekannt|n\.a\.|verschiedene)\b/i.test(String(s).trim());
const clean = (s, n = 300) => String(s || "").replace(/\s+/g, " ").trim().slice(0, n);

// deterministischer kleiner Versatz, damit gleiche Stadt nicht exakt stapelt
function jitter(id) { let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0; return [((h % 100) / 100 - 0.5) * 0.06, (((h >> 8) % 100) / 100 - 0.5) * 0.06]; }
const norm2 = s => String(s || "").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

const entries = [];
const seen = new Set();
const geoNeeded = new Set();

function coordsFor(stadt, id) {
  const key = norm(stadt);
  const base = CITY[key] || (key.includes("-") ? CITY[key.split("-")[0]] : null); // "stuttgart-möhringen"->"stuttgart"
  if (!base) { if (stadt) geoNeeded.add(stadt); return [null, null]; }
  const [dy, dx] = jitter(id);
  return [+(base[0] + dy).toFixed(4), +(base[1] + dx).toFixed(4)];
}

function push(o) {
  if (!o.firma || generic(o.firma)) return;
  o.objektart = usage(o.objektart);
  const id = "n-" + norm2([o.stadt, o.firma, o.objekt, o.rolle].join("-")).slice(0, 60) + "-" + norm2(o.datum);
  const dk = [norm2(o.firma), norm2(o.objekt), (o.datum || "").slice(0, 7), o.rolle].join("|");
  if (seen.has(dk)) return; seen.add(dk);
  const [lat, lng] = coordsFor(o.stadt, id);
  entries.push({
    id, firma: o.firma, firmaId: "", investortyp: o.investortyp || "",
    rolle: o.rolle, status: o.rolle === "Käufer" ? "besitzt" : "besessen",
    objekt: o.objekt || o.headline, objektart: o.objektart,
    stadt: o.stadt || "", region: "", lat, lng,
    wertMioEUR: o.wertMioEUR ?? null, datum: o.datum || "",
    headline: o.headline || o.objekt || "", summary: o.summary || "",
    quelle: { label: o.quelleLabel || "", url: o.quelleUrl || "" },
    _stand: new Date().toISOString().slice(0, 7)
  });
}

function readSheet(path, sheetName) {
  const wb = XLSX.read(readFileSync(resolve(process.cwd(), path)), { type: "buffer" });
  const sn = wb.SheetNames.includes(sheetName) ? sheetName : wb.SheetNames[0];
  return XLSX.utils.sheet_to_json(wb.Sheets[sn], { defval: "" });
}

// ---- Thomas Daily ----
if (TD) {
  const rows = readSheet(TD, "Transaktionen");
  let n = 0;
  for (const r of rows) {
    const status = String(r["Status"] || "");
    if (/gescheitert/i.test(status)) continue;          // kein Verkauf -> überspringen
    const common = {
      objekt: clean(r["Objekt / Meldung"], 140), headline: clean(r["Objekt / Meldung"], 140),
      objektart: r["Assetklasse"], stadt: r["Stadt"], datum: isoDate(r["Datum"]),
      wertMioEUR: priceMio(r["Kaufpreis Mio EUR"]), summary: clean(r["Originaltext"], 360),
      quelleLabel: r["Quelle"] || "Thomas Daily / Savills", quelleUrl: ""
    };
    if (String(r["Käufer"]).trim()) { push({ ...common, firma: clean(r["Käufer"], 120), rolle: "Käufer", investortyp: r["Käufer-Typ"] }); n++; }
    if (String(r["Verkäufer"]).trim()) { push({ ...common, firma: clean(r["Verkäufer"], 120), rolle: "Verkäufer", investortyp: r["Verkäufer-Typ"] }); n++; }
  }
  console.log(`TD: ${rows.length} Zeilen -> ${n} Partei-Nennungen verarbeitet`);
}

// ---- Green Street ----
if (GS) {
  const rows = readSheet(GS, "News").filter(r => String(r["Art der Nachricht"]) === "Transaktion");
  let n = 0;
  for (const r of rows) {
    const common = {
      objekt: clean(r["Adresse"] || r["Betreff"], 140), headline: clean(r["Betreff"], 140),
      objektart: firstAsset(r["Assetklasse"]), stadt: r["Stadt"], datum: isoDate(r["Datum"]),
      wertMioEUR: priceMio(r["Kaufpreis"]), summary: clean(r["Text des Artikels"], 360),
      quelleLabel: r["Quelle"] || "Green Street News", quelleUrl: ""
    };
    if (String(r["Käufer (erkannt)"]).trim()) { push({ ...common, firma: clean(r["Käufer (erkannt)"], 120), rolle: "Käufer", investortyp: r["Investorentyp (Käufer)"] }); n++; }
    if (String(r["Verkäufer (erkannt)"]).trim()) { push({ ...common, firma: clean(r["Verkäufer (erkannt)"], 120), rolle: "Verkäufer" }); n++; }
  }
  console.log(`GS: ${rows.length} Transaktions-Zeilen -> ${n} Partei-Nennungen verarbeitet`);
}

// ---- optional: fehlende Städte per Nominatim ----
async function geocodeMissing() {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const cache = {};
  for (const stadt of geoNeeded) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(stadt)}`;
      const res = await fetch(url, { headers: { "User-Agent": "FO-News/1.0", Accept: "application/json" } });
      const j = await res.json();
      if (j && j[0]) cache[norm(stadt)] = [+j[0].lat, +j[0].lon];
      await sleep(1100);
    } catch { /* skip */ }
  }
  let filled = 0;
  for (const e of entries) if (e.lat == null && cache[norm(e.stadt)]) {
    const [dy, dx] = jitter(e.id); const b = cache[norm(e.stadt)];
    e.lat = +(b[0] + dy).toFixed(4); e.lng = +(b[1] + dx).toFixed(4); filled++;
  }
  console.log(`Geocoding: ${Object.keys(cache).length} Städte aufgelöst, ${filled} Einträge ergänzt`);
}

// ---- schreiben ----
const HEADER = `/* =========================================================================
   Family Offices - NEWS-Datensatz  (Markt-Radar / Deal-News)
   -------------------------------------------------------------------------
   Automatisch erzeugt aus strukturierten Transaktions-Auswertungen
   (Thomas Daily / Savills + Green Street) via tools/import-xlsx.mjs.
   status: "besitzt" = GRÜN (gekauft, hält) · "besessen" = ROT (verkauft)
   lat/lng koennen null sein (dann nur in der Suche, nicht als Karten-Pin).
   ========================================================================= */
`;
function write(arr) {
  arr.sort((a, b) => (b.datum || "").localeCompare(a.datum || ""));
  const stand = new Date().toISOString().slice(0, 7);
  const body = HEADER + `\nwindow.FO_NEWS_STAND = ${JSON.stringify(stand)};\n\n` +
    `window.FO_NEWS = ${JSON.stringify(arr, null, 1)};\n`;
  writeFileSync(OUT, body, "utf8");
  console.log(`Geschrieben: ${OUT} (${arr.length} Einträge, Stand ${stand})`);
}

(async () => {
  if (GEOCODE && geoNeeded.size) await geocodeMissing();

  let final = entries;
  if (MERGE) {
    try {
      const w = {}; new Function("window", readFileSync(OUT, "utf8"))(w);
      const old = w.FO_NEWS || [];
      const have = new Set(old.map(e => e.id));
      final = old.concat(entries.filter(e => !have.has(e.id)));
    } catch (e) { console.warn("Merge: bestehende news.js nicht lesbar, ersetze.", e.message); }
  }

  const withCoords = final.filter(e => e.lat != null).length;
  console.log(`\nEinträge gesamt: ${final.length} · mit Koordinaten (Pin): ${withCoords} · nur Suche: ${final.length - withCoords}`);
  console.log(`Städte ohne Gazetteer-Treffer (${geoNeeded.size}): ${[...geoNeeded].slice(0, 20).join(", ")}${geoNeeded.size > 20 ? " …" : ""}`);
  const byStatus = final.reduce((m, e) => (m[e.status] = (m[e.status] || 0) + 1, m), {});
  console.log(`Status: ${JSON.stringify(byStatus)}`);

  if (DRY) { console.log("\n--dry-run: nichts geschrieben."); return; }
  write(final);
})().catch(e => { console.error("Abbruch:", e); process.exit(1); });
