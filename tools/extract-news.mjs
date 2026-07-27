#!/usr/bin/env node
/* =========================================================================
   FO News-Extractor
   -------------------------------------------------------------------------
   Liest eine Datei mit Roh-News/E-Mails, lässt Claude die Immobilien-Deals
   strukturiert extrahieren, geocodiert Stadt/Adresse, dedupliziert gegen den
   bestehenden Datensatz und schreibt ../news.js (window.FO_NEWS) neu.

   Gedacht als wiederholbarer "sammeln & updaten"-Schritt: bei neuen E-Mails
   erneut ausführen – nur neue Deals werden angehängt.

   Voraussetzungen:
     - Node 18+  (globales fetch)
     - npm install            (im Ordner tools/ – zieht @anthropic-ai/sdk)
     - Umgebungsvariable ANTHROPIC_API_KEY  (oder `ant auth login`-Profil)

   Aufruf:
     node extract-news.mjs <pfad/zur/emails-datei> [optionen]

   Eingabeformate (automatisch erkannt):
     - .json : Array aus Strings ODER Objekten {subject?, from?, date?, body|text}
     - sonst : Klartext; wird an typischen E-Mail-Grenzen in einzelne Mails
               zerlegt (mbox "From ", Header "From:/Subject:", oder Delimiter
               "-----" / "=====" / Formfeed). Fällt auf 1 Block zurück.

   Optionen:
     --dry-run          nichts schreiben, nur Vorschau ausgeben
     --limit N          maximal N E-Mail-Blöcke verarbeiten (Test)
     --model <id>       Modell überschreiben (Default: claude-opus-5)
     --no-geocode       kein Nominatim; nur statische Städte-Koordinaten
     --out <pfad>       Ziel-Datei (Default: ../news.js)
   ========================================================================= */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---- CLI-Argumente ----
const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(["--limit", "--model", "--out"]);
function flag(name) { return argv.includes(name); }
function opt(name, def) { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : def; }
// erstes Positional-Argument (nicht Flag, nicht Wert eines Wert-Flags)
let inputPath;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith("--")) { if (VALUE_FLAGS.has(a)) i++; continue; }
  inputPath = a; break;
}
const DRY = flag("--dry-run");
const LIMIT = opt("--limit") ? parseInt(opt("--limit"), 10) : Infinity;
const MODEL = opt("--model", "claude-opus-5");
const NO_GEOCODE = flag("--no-geocode");
const OUT = resolve(__dirname, opt("--out", "../news.js"));

if (!inputPath) {
  console.error("Fehlt: Pfad zur E-Mail-/News-Datei.\n  node extract-news.mjs <datei> [--dry-run] [--limit N] [--model id] [--no-geocode]");
  process.exit(1);
}

// ---- Konstanten (Schema-konform zu news.js) ----
const USAGE_KEYS = ["Buero", "Wohnen", "Retail", "Logistik", "Hotel", "Gastro", "Sonstiges"];
// statische Koordinaten häufiger DACH-Städte (Fallback / --no-geocode)
const CITY_COORDS = {
  "berlin": [52.5200, 13.4050], "münchen": [48.1371, 11.5754], "muenchen": [48.1371, 11.5754],
  "hamburg": [53.5511, 9.9937], "frankfurt": [50.1109, 8.6821], "köln": [50.9375, 6.9603],
  "koeln": [50.9375, 6.9603], "düsseldorf": [51.2277, 6.7735], "duesseldorf": [51.2277, 6.7735],
  "stuttgart": [48.7758, 9.1829], "leipzig": [51.3397, 12.3731], "dresden": [51.0504, 13.7373],
  "nürnberg": [49.4521, 11.0767], "nuernberg": [49.4521, 11.0767], "hannover": [52.3759, 9.7320],
  "bremen": [53.0793, 8.8017], "essen": [51.4556, 7.0116], "dortmund": [51.5136, 7.4653],
  "wien": [48.2082, 16.3738], "zürich": [47.3769, 8.5417], "zuerich": [47.3769, 8.5417]
};

// ---- Extraktions-Schema (JSON Schema für output_config.format) ----
const DEAL_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    deals: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          firma: { type: "string", description: "Käufer bzw. Verkäufer (Family Office / Investor / Firma)" },
          rolle: { type: "string", enum: ["Käufer", "Verkäufer"] },
          status: { type: "string", enum: ["besitzt", "besessen"], description: "besitzt = gekauft und laut News nicht wieder verkauft; besessen = verkauft bzw. gekauft und wieder verkauft" },
          objekt: { type: "string", description: "Name/Bezeichnung der Immobilie" },
          objektart: { type: "string", enum: USAGE_KEYS },
          stadt: { type: "string" },
          region: { type: "string", description: "Bundesland/Region, leer wenn unbekannt" },
          adresse: { type: "string", description: "genaue Adresse/Lage falls genannt, sonst leer" },
          wertMioEUR: { type: ["number", "null"], description: "Deal-Volumen in Mio EUR, null wenn unbekannt" },
          datum: { type: "string", description: "Datum der Meldung/des Deals als YYYY-MM-DD; nur Jahr/Monat wenn Tag fehlt (YYYY-MM)" },
          headline: { type: "string" },
          summary: { type: "string", description: "1-2 Sätze, sachlich" },
          quelleLabel: { type: "string", description: "Quelle/Publikation, sonst 'E-Mail'" },
          quelleUrl: { type: "string", description: "URL falls vorhanden, sonst leer" },
          confidence: { type: "string", enum: ["hoch", "mittel", "niedrig"] }
        },
        required: ["firma", "rolle", "status", "objekt", "objektart", "stadt", "region", "adresse", "wertMioEUR", "datum", "headline", "summary", "quelleLabel", "quelleUrl", "confidence"]
      }
    }
  },
  required: ["deals"]
};

const SYSTEM = `Du extrahierst aus News-Texten/E-Mails Immobilien-Transaktionen (Deutschland und Nachbarländer), bei denen ein Family Office, Investor oder Unternehmen eine Immobilie GEKAUFT oder VERKAUFT hat.

Regeln:
- Gib NUR echte, im Text belegte Transaktionen zurück. Erfinde nichts. Keine Deals -> {"deals": []}.
- status: "besitzt" wenn gekauft und (im selben Text) nicht wieder verkauft; "besessen" wenn verkauft oder gekauft und wieder verkauft.
- objektart: wähle die passendste Nutzungsart. Büroturm/Bürohaus->Buero, Wohnungen/Wohnanlage->Wohnen, Geschäftshaus/Fachmarkt/Einzelhandel->Retail, Logistikhalle/Lager->Logistik, Hotel->Hotel, Restaurant->Gastro, gemischt/Quartier->Sonstiges.
- Ein Text kann mehrere Deals enthalten -> mehrere Einträge.
- wertMioEUR: nur wenn eine Summe genannt ist, sonst null.
- Fasse dich in summary/headline sachlich; keine Werbung.`;

// ---- Datei einlesen & in E-Mail-Blöcke zerlegen ----
function loadChunks(path) {
  const raw = readFileSync(path, "utf8");
  if (path.toLowerCase().endsWith(".json")) {
    const j = JSON.parse(raw);
    if (Array.isArray(j)) {
      return j.map(e => typeof e === "string" ? e : [e.subject, e.from, e.date, e.body || e.text].filter(Boolean).join("\n"));
    }
  }
  // mbox
  if (/^From \S+@?\S* /m.test(raw)) {
    return raw.split(/^From \S.*$/m).map(s => s.trim()).filter(Boolean);
  }
  // explizite Delimiter
  if (/\n[-=]{5,}\n/.test(raw) || raw.includes("\f")) {
    return raw.split(/\n[-=]{5,}\n|\f/).map(s => s.trim()).filter(Boolean);
  }
  // mehrere "Subject:"/"Betreff:"-Header
  const bySubject = raw.split(/\n(?=(?:Subject|Betreff):)/i).map(s => s.trim()).filter(Boolean);
  if (bySubject.length > 1) return bySubject;
  return [raw.trim()];
}

// ---- Geocoding (Nominatim wie in der App), mit statischem Fallback ----
const geoCache = new Map();
async function geocode(stadt, adresse) {
  const key = (adresse || stadt || "").toLowerCase().trim();
  const cityKey = (stadt || "").toLowerCase().trim();
  if (!key) return null;
  if (geoCache.has(key)) return geoCache.get(key);
  if (!NO_GEOCODE) {
    const q = [adresse, stadt].filter(Boolean).join(", ");
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=de,at,ch&q=${encodeURIComponent(q)}`;
      const r = await fetch(url, { headers: { "Accept": "application/json", "User-Agent": "FO-News-Extractor/1.0" } });
      const j = await r.json();
      if (j && j.length) {
        const c = [+j[0].lat, +j[0].lon];
        geoCache.set(key, c);
        await sleep(1100); // Nominatim: max ~1 req/s
        return c;
      }
      await sleep(1100);
    } catch { /* fällt unten auf Städte-Koordinaten zurück */ }
  }
  const c = CITY_COORDS[cityKey] || null;
  geoCache.set(key, c);
  return c;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---- ID + Dedup ----
const foNorm = s => (s || "").toLowerCase()
  .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
  .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function dealId(d) {
  return "n-" + foNorm([d.stadt, d.firma, d.objekt].join("-")).slice(0, 48) + "-" + foNorm(d.datum || "");
}
function dedupKey(d) {
  return [foNorm(d.firma), foNorm(d.objekt), (d.datum || "").slice(0, 7)].join("|");
}

// ---- bestehende news.js laden ----
function loadExisting(path) {
  let existing = [];
  try {
    const src = readFileSync(path, "utf8");
    const sandbox = { window: {} };
    // eigenes File – kontrollierter eval
    new Function("window", src)(sandbox.window);
    existing = sandbox.window.FO_NEWS || [];
  } catch (e) {
    console.warn("Konnte bestehende news.js nicht laden (starte leer):", e.message);
  }
  return existing;
}

// ---- news.js schreiben ----
const HEADER = `/* =========================================================================
   Family Offices - NEWS-Datensatz  (Markt-Radar / Deal-News)
   -------------------------------------------------------------------------
   status: "besitzt" = GRÜN (gekauft, nicht wieder verkauft)
           "besessen" = ROT (verkauft bzw. wieder verkauft)
   Diese Datei wird von tools/extract-news.mjs gepflegt. Manuelle Ergänzungen
   sind möglich, werden aber beim nächsten Lauf beibehalten (Dedup per
   firma|objekt|monat).
   ========================================================================= */
`;
function writeNews(path, arr, stand) {
  // stabil sortieren: neueste Meldung zuerst
  arr.sort((a, b) => (b.datum || "").localeCompare(a.datum || ""));
  const body = HEADER +
    `\nwindow.FO_NEWS_STAND = ${JSON.stringify(stand)};\n\n` +
    `window.FO_NEWS = ${JSON.stringify(arr, null, 2)};\n`;
  writeFileSync(path, body, "utf8");
}

// ---- Claude-Aufruf pro Block ----
async function extractDeals(client, text) {
  const res = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    system: SYSTEM,
    output_config: { format: { type: "json_schema", schema: DEAL_SCHEMA } },
    messages: [{ role: "user", content: `News-Text:\n\n${text.slice(0, 24000)}` }]
  });
  const t = res.content.find(b => b.type === "text");
  if (!t) return [];
  try { return (JSON.parse(t.text).deals) || []; }
  catch { console.warn("  ! Antwort nicht als JSON parsebar, Block übersprungen"); return []; }
}

// ---- Hauptlauf ----
(async () => {
  const client = new Anthropic(); // nutzt ANTHROPIC_API_KEY oder ant-Profil
  const chunks = loadChunks(resolve(process.cwd(), inputPath)).slice(0, LIMIT);
  console.log(`Eingelesen: ${chunks.length} E-Mail-/News-Block(e) aus ${inputPath}`);

  const existing = loadExisting(OUT);
  const seen = new Set(existing.map(dedupKey));
  const nowStand = new Date().toISOString().slice(0, 7); // YYYY-MM (Datenstand)

  const added = [];
  for (let i = 0; i < chunks.length; i++) {
    process.stdout.write(`[${i + 1}/${chunks.length}] extrahiere … `);
    let deals = [];
    try { deals = await extractDeals(client, chunks[i]); }
    catch (e) { console.log(`Fehler: ${e.message}`); continue; }
    console.log(`${deals.length} Deal(s)`);
    for (const d of deals) {
      const k = dedupKey(d);
      if (seen.has(k)) { continue; }
      seen.add(k);
      const coords = await geocode(d.stadt, d.adresse);
      if (!coords) { console.warn(`    · keine Koordinaten für "${d.stadt}/${d.adresse}" – übersprungen`); continue; }
      const entry = {
        id: dealId(d), firma: d.firma, firmaId: "",
        rolle: d.rolle, status: d.status, objekt: d.objekt, objektart: d.objektart,
        stadt: d.stadt, region: d.region || "", lat: +coords[0].toFixed(4), lng: +coords[1].toFixed(4),
        wertMioEUR: d.wertMioEUR ?? null, datum: d.datum,
        headline: d.headline, summary: d.summary,
        quelle: { label: d.quelleLabel || "E-Mail", url: d.quelleUrl || "" },
        _stand: nowStand, _confidence: d.confidence
      };
      added.push(entry);
    }
  }

  console.log(`\nNeue Deals: ${added.length} (Bestand vorher: ${existing.length})`);
  if (added.length) added.slice(0, 10).forEach(e => console.log(`  + ${e.stadt} · ${e.firma} · ${e.objekt} (${e.status}, ${e.datum})`));

  if (DRY) { console.log("\n--dry-run: news.js NICHT geschrieben."); return; }
  if (!added.length) { console.log("Nichts zu schreiben."); return; }

  const merged = existing.concat(added);
  writeNews(OUT, merged, nowStand);
  console.log(`\nGeschrieben: ${OUT} (${merged.length} Einträge, Stand ${nowStand})`);
})().catch(e => { console.error("Abbruch:", e); process.exit(1); });
