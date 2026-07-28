#!/usr/bin/env node
// Step 2: read crawled articles, classify by topic, extract usable facts via
// Claude, and write one table per topic (+ a combined table).
//
//   node extract.mjs                 # extract everything not yet done
//   node extract.mjs --limit=20      # only first 20 (test run)
//   node extract.mjs --topic=Financing
//   node extract.mjs --refresh       # re-extract even if cached
//
// Requires ANTHROPIC_API_KEY (in .env). See lib/extractor.mjs for the legal note.

import { createExtractor } from './lib/extractor.mjs';
import { classifyTopic, fieldsFor, TOPICS } from './lib/schemas.mjs';
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

async function loadDotenv() {
  const p = path.join(process.cwd(), '.env');
  if (!existsSync(p)) return;
  const txt = await readFile(p, 'utf8');
  for (const line of txt.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

async function pool(items, size, worker) {
  let idx = 0;
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (idx < items.length) { const i = idx++; await worker(items[i], i); }
  });
  await Promise.all(runners);
}

const csvEscape = (v) => {
  if (v == null) return '';
  const s = String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

function articleUrl(a) {
  return a.gsNewsUrl || (Array.isArray(a.gsNewsUrl) ? a.gsNewsUrl[0] : '') || '';
}

async function main() {
  await loadDotenv();
  const flags = parseFlags(process.argv);
  const outDir = path.resolve(flags.out || './out');
  const concurrency = Number(flags.concurrency || 3);
  const delay = Number(flags.delay || 150);

  const storePath = path.join(outDir, 'articles.json');
  if (!existsSync(storePath)) {
    console.error(`No ${storePath}. Run the crawler first: node crawl.mjs --germany`);
    process.exit(1);
  }
  const articles = JSON.parse(await readFile(storePath, 'utf8'));
  console.log(`→ ${articles.length} articles loaded`);

  // Resume cache: articleId -> extracted record.
  const cachePath = path.join(outDir, 'extracted.json');
  const cache = new Map();
  if (existsSync(cachePath) && !flags.refresh) {
    try {
      for (const r of JSON.parse(await readFile(cachePath, 'utf8'))) cache.set(String(r.articleId), r);
      console.log(`→ Resuming: ${cache.size} already extracted`);
    } catch { /* fresh */ }
  }

  const extractor = createExtractor({ apiKey: process.env.ANTHROPIC_API_KEY });
  console.log(`→ Model: ${extractor.model}`);

  // Decide work list.
  let work = articles.map((a) => ({ a, topic: classifyTopic(a) }));
  if (flags.topic) work = work.filter((w) => w.topic === flags.topic);
  work = work.filter((w) => flags.refresh || !cache.has(String(w.a.id)));
  if (flags.limit) work = work.slice(0, Number(flags.limit));

  // Topic distribution overview.
  const dist = {};
  for (const a of articles) { const t = classifyTopic(a); dist[t] = (dist[t] || 0) + 1; }
  console.log('→ Topic distribution:', dist);
  console.log(`→ Extracting ${work.length} articles`);

  let done = 0, failed = 0;
  await pool(work, concurrency, async ({ a, topic }) => {
    try {
      if (topic === 'Other') {
        cache.set(String(a.id), { articleId: a.id, topic, sourceUrl: articleUrl(a),
          title: a.title || '', note: 'unclassified topic — no schema applied' });
      } else {
        const facts = await extractor.extract(a, topic);
        cache.set(String(a.id), { articleId: a.id, topic, sourceUrl: articleUrl(a), ...facts });
      }
    } catch (e) {
      failed++;
      console.warn(`  article ${a.id} (${topic}) failed: ${e.message}`);
    } finally {
      done++;
      if (done % 5 === 0) process.stdout.write(`  ${done}/${work.length} (fail ${failed})\r`);
      await sleep(delay);
    }
  });
  console.log(`\n→ Extraction done (${failed} failed)`);

  // Persist cache.
  const all = [...cache.values()];
  await writeFile(cachePath, JSON.stringify(all, null, 2));

  // Write one CSV per topic.
  const byTopicDir = path.join(outDir, 'by-topic');
  await mkdir(byTopicDir, { recursive: true });
  for (const topic of TOPICS) {
    const rows = all.filter((r) => r.topic === topic);
    if (!rows.length) continue;
    const cols = ['articleId', ...fieldsFor(topic).map((f) => f.name), 'sourceUrl'];
    const csv = [
      cols.join(','),
      ...rows.map((r) => cols.map((c) => csvEscape(r[c])).join(',')),
    ].join('\n');
    const safe = topic.replace(/[^a-z0-9]+/gi, '_');
    await writeFile(path.join(byTopicDir, `${safe}.csv`), csv);
  }

  // Combined master table (shared columns + a JSON blob of topic-specific fields).
  const masterCols = ['articleId', 'topic', 'headline', 'company', 'property', 'address', 'city', 'country', 'eventDate', 'summary', 'sourceUrl'];
  const master = [
    masterCols.join(','),
    ...all.map((r) => masterCols.map((c) => csvEscape(r[c])).join(',')),
  ].join('\n');
  await writeFile(path.join(outDir, 'facts.csv'), master);

  console.log(`\n✓ Wrote:`);
  console.log(`  ${path.join(outDir, 'facts.csv')}  (combined)`);
  console.log(`  ${byTopicDir}/<Topic>.csv  (per topic)`);
  console.log(`  ${cachePath}  (raw extracted JSON)`);
  console.log('\n⚠ Internal use only — publish derived facts + source link, not GS text.');
}

main().catch((e) => { console.error('\nFATAL:', e.message); process.exit(1); });
