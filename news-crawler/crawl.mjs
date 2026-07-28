#!/usr/bin/env node
// Green Street News crawler — pulls ALL articles across all entitled regions
// and writes a 1:1 structured table (JSON + CSV). Mapping/extraction is a
// separate downstream step.
//
// LEGAL: Green Street content is copyrighted and licensed for INTERNAL use
// only. Output stays in ./out (git-ignored). Do not publish raw text.
//
// Usage:
//   GS_CLIENT_ID=... GS_CLIENT_SECRET=... node crawl.mjs [flags]
// Flags:
//   --regions=USA,EUR   Restrict to regions (default: all, skip un-entitled)
//   --out=./out         Output directory
//   --concurrency=4     Parallel detail fetches
//   --delay=250         ms delay between detail fetches (politeness)
//   --max-pages=1000    Safety cap on pagination per region
//   --refresh           Re-fetch article details even if already cached
//   --dry-run           List articles only, skip full-content detail fetch
//   --images            Also download featured images (binary) into out/images

import { createClient, ALL_REGIONS } from './lib/gsClient.mjs';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseFlags(argv) {
  const f = {};
  for (const a of argv.slice(2)) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (m) f[m[1]] = m[2] === undefined ? true : m[2];
  }
  return f;
}

// Load .env if present (simple KEY=VALUE parser, no dependency).
async function loadDotenv() {
  const p = path.join(process.cwd(), '.env');
  if (!existsSync(p)) return;
  const txt = await readFile(p, 'utf8');
  for (const line of txt.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

// Run tasks with a bounded concurrency pool.
async function pool(items, size, worker) {
  const results = new Array(items.length);
  let idx = 0;
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await worker(items[i], i);
    }
  });
  await Promise.all(runners);
  return results;
}

function csvEscape(v) {
  if (v == null) return '';
  const s = String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function flattenName(arr) {
  if (!Array.isArray(arr)) return arr?.name ?? '';
  return arr.map((x) => x?.name ?? x).filter(Boolean).join('; ');
}

const CSV_COLUMNS = [
  'id', 'region', 'primaryCategory', 'sector', 'subregion',
  'title', 'excerpt', 'address', 'content',
  'writers', 'createdAt', 'updatedAt', 'gsNewsUrl', 'featuredImage',
];

// address is intentionally left blank here — it is embedded in `content`
// and gets extracted in the downstream mapping step, not by this crawler.
function toRow(a) {
  return {
    id: a.id,
    region: flattenName(a.region),
    primaryCategory: a.primaryCategory ?? '',
    sector: flattenName(a.sector),
    subregion: flattenName(a.subregion),
    title: a.title ?? '',
    excerpt: a.excerpt ?? '',
    address: '',
    content: a.content ?? '',
    writers: flattenName(a.writers),
    createdAt: a.createdAt ?? '',
    updatedAt: a.updatedAt ?? '',
    gsNewsUrl: a.gsNewsUrl ?? '',
    featuredImage: typeof a.featuredImage === 'string' ? a.featuredImage : (a.featuredImage?.src ?? ''),
  };
}

async function main() {
  await loadDotenv();
  const flags = parseFlags(process.argv);
  const outDir = path.resolve(flags.out || './out');
  const concurrency = Number(flags.concurrency || 4);
  const delay = Number(flags.delay || 250);
  const maxPages = Number(flags['max-pages'] || 1000);
  // --germany is a shortcut for: region=EUR + auto-resolved Germany subregion.
  let regions = flags.regions ? String(flags.regions).split(',').map((s) => s.trim().toUpperCase()) : ALL_REGIONS;
  if (flags.germany) regions = ['EUR'];
  let subregions = flags.subregions
    ? String(flags.subregions).split(',').map((s) => Number(s.trim())).filter((n) => !Number.isNaN(n))
    : null;

  await mkdir(outDir, { recursive: true });
  await mkdir(path.join(outDir, 'raw'), { recursive: true });

  const client = createClient({
    clientId: process.env.GS_CLIENT_ID,
    clientSecret: process.env.GS_CLIENT_SECRET,
  });

  console.log('→ Health check…');
  try { await client.ping(); console.log('  ok'); }
  catch (e) { console.warn('  ping failed:', e.message); }

  // Save taxonomy reference data for the downstream mapping step.
  let regionsRef = [];
  try {
    const [rr, sectorsRef] = await Promise.all([client.getRegions(), client.getSectors()]);
    regionsRef = Array.isArray(rr) ? rr : (rr.data ?? rr.items ?? []);
    await writeFile(path.join(outDir, 'regions.json'), JSON.stringify(rr, null, 2));
    await writeFile(path.join(outDir, 'sectors.json'), JSON.stringify(sectorsRef, null, 2));
    console.log('→ Saved regions.json / sectors.json');
  } catch (e) {
    console.warn('→ Could not fetch taxonomy:', e.message);
  }

  // --list-regions: print the region/subregion tree and exit (helper).
  if (flags['list-regions']) {
    const tops = regionsRef.filter((r) => (r.parent ?? 0) === 0);
    for (const t of tops) {
      console.log(`\n[${t.id}] ${t.name}`);
      for (const s of regionsRef.filter((r) => r.parent === t.id)) {
        console.log(`   └─ subregion ${s.id}  ${s.name}`);
      }
    }
    console.log('\n→ Pass a subregion id via --subregions=<id>');
    return;
  }

  // --germany: auto-resolve the Germany subregion id under EUR.
  if (flags.germany && !subregions) {
    const match = regionsRef.filter(
      (r) => (r.parent ?? 0) !== 0 && /germany|deutschland/i.test(r.name || ''),
    );
    if (match.length) {
      subregions = match.map((r) => r.id);
      console.log(`→ Germany subregion(s) resolved: ${match.map((r) => `${r.id} (${r.name})`).join(', ')}`);
    } else {
      console.warn('→ Could not auto-find a "Germany" subregion. Run with --list-regions to inspect,');
      console.warn('  then pass the id manually, e.g.  node crawl.mjs --germany --subregions=<id>');
      console.warn('  Continuing WITHOUT a country filter would fetch all of Europe — aborting.');
      return;
    }
  }

  // Resume: load previously stored articles keyed by id.
  const store = new Map();
  const storePath = path.join(outDir, 'articles.json');
  if (existsSync(storePath) && !flags.refresh) {
    try {
      const prev = JSON.parse(await readFile(storePath, 'utf8'));
      for (const a of prev) store.set(String(a.id), a);
      console.log(`→ Resuming: ${store.size} articles already in store`);
    } catch { /* start fresh */ }
  }

  // Phase 1 — enumerate article IDs across all regions via pagination.
  const discovered = new Map(); // id -> { id, region, listItem }
  for (const region of regions) {
    const label = subregions ? `${region} (subregions ${subregions.join(',')})` : region;
    console.log(`\n=== Region ${label}: listing articles ===`);
    let page = 1;
    let emptyStop = false;
    while (page <= maxPages && !emptyStop) {
      let list;
      try {
        list = await client.listArticles({ region, page, subregions });
      } catch (e) {
        if (e.status === 403 || e.status === 422) {
          console.warn(`  region ${region} not entitled / invalid (${e.status}) — skipping`);
        } else {
          console.warn(`  page ${page} failed: ${e.message} — stopping region`);
        }
        break;
      }
      const items = Array.isArray(list) ? list : (list.data ?? list.items ?? []);
      if (!items.length) { emptyStop = true; break; }
      for (const it of items) {
        const id = String(it.id);
        if (!discovered.has(id)) discovered.set(id, { id, region, listItem: it });
      }
      process.stdout.write(`  page ${page}: +${items.length} (total ${discovered.size})\r`);
      page++;
      await sleep(delay);
    }
    console.log(`\n  region ${region} done`);
  }
  console.log(`\n→ Discovered ${discovered.size} unique articles`);

  // Phase 2 — fetch full detail for each article (skip cached unless --refresh).
  const toFetch = [...discovered.values()].filter((d) => flags.refresh || !store.has(d.id));
  console.log(`→ Fetching detail for ${toFetch.length} articles (${store.size} cached)`);

  if (!flags['dry-run']) {
    let done = 0;
    await pool(toFetch, concurrency, async (d) => {
      try {
        const full = await client.getArticle(d.id);
        // Ensure region present (list carries it; detail may too).
        if (!full.region) full.region = d.listItem?.region;
        store.set(d.id, full);
        await writeFile(path.join(outDir, 'raw', `${d.id}.json`), JSON.stringify(full));
        if (flags.images && (full.featuredImage?.src || d.listItem?.featuredImage?.src)) {
          try {
            const src = full.featuredImage?.src || d.listItem.featuredImage.src;
            const img = await client.getArticleImage(d.id, { src, region: d.region });
            await mkdir(path.join(outDir, 'images'), { recursive: true });
            await writeFile(path.join(outDir, 'images', `${d.id}.img`), img);
          } catch (e) { /* image optional */ }
        }
      } catch (e) {
        console.warn(`  article ${d.id} failed: ${e.message}`);
      } finally {
        done++;
        if (done % 10 === 0) process.stdout.write(`  detail ${done}/${toFetch.length}\r`);
        await sleep(delay);
      }
    });
    console.log(`\n  detail fetch complete`);
  } else {
    // Dry-run: store the minimal list items so the table still gets written.
    for (const d of toFetch) if (!store.has(d.id)) store.set(d.id, d.listItem);
  }

  // Phase 3 — write outputs.
  const all = [...store.values()];
  await writeFile(storePath, JSON.stringify(all, null, 2));

  const rows = all.map(toRow);
  const csv = [
    CSV_COLUMNS.join(','),
    ...rows.map((r) => CSV_COLUMNS.map((c) => csvEscape(r[c])).join(',')),
  ].join('\n');
  await writeFile(path.join(outDir, 'articles.csv'), csv);

  console.log(`\n✓ Done. ${all.length} articles`);
  console.log(`  ${storePath}`);
  console.log(`  ${path.join(outDir, 'articles.csv')}`);
  console.log('\n⚠ Internal use only — do not publish Green Street raw text.');
}

main().catch((e) => { console.error('\nFATAL:', e.message); process.exit(1); });
