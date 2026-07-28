#!/usr/bin/env node
// Step 2: read crawled articles, extract usable facts + topics via Claude,
// and write one table per topic (an article can appear under several topics)
// plus a combined table. Every row keeps the source link + a verbatim key
// excerpt; if there is no link, the full article text is kept as fallback.
//
//   node extract.mjs                 # extract everything not yet done
//   node extract.mjs --limit=20      # only first 20 (test run)
//   node extract.mjs --refresh       # re-extract even if cached
//
// Requires ANTHROPIC_API_KEY (in .env).

import { createExtractor } from './lib/extractor.mjs';
import { TOPICS, columnsForTopic, previewTopic } from './lib/schemas.mjs';
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
  const s = Array.isArray(v) ? v.join('; ') : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const articleUrl = (a) =>
  (Array.isArray(a.gsNewsUrl) ? a.gsNewsUrl[0] : a.gsNewsUrl) || '';

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

  // Preview distribution (keyword-based, no API cost).
  const dist = {};
  for (const a of articles) { const t = previewTopic(a); dist[t] = (dist[t] || 0) + 1; }
  console.log('→ Rough topic preview (final topics come from the model):', dist);

  let work = articles.filter((a) => flags.refresh || !cache.has(String(a.id)));
  if (flags.limit) work = work.slice(0, Number(flags.limit));
  console.log(`→ Extracting ${work.length} articles`);

  let done = 0, failed = 0;
  await pool(work, concurrency, async (a) => {
    try {
      const facts = await extractor.extract(a);
      let topics = Array.isArray(facts.topics) ? facts.topics.filter((t) => TOPICS.includes(t)) : [];
      if (!topics.length) topics = ['Other'];
      const url = articleUrl(a);
      const rec = { articleId: a.id, topics, sourceUrl: url, ...facts };
      rec.topics = topics; // ensure normalized array wins over model's raw value
      if (!url) rec.fullText = a.content || a.excerpt || ''; // fallback when no link
      cache.set(String(a.id), rec);
    } catch (e) {
      failed++;
      console.warn(`  article ${a.id} failed: ${e.message}`);
    } finally {
      done++;
      if (done % 5 === 0) process.stdout.write(`  ${done}/${work.length} (fail ${failed})\r`);
      await sleep(delay);
    }
  });
  console.log(`\n→ Extraction done (${failed} failed)`);

  const all = [...cache.values()];
  await writeFile(cachePath, JSON.stringify(all, null, 2));

  // One CSV per topic (article appears in each of its topics).
  const byTopicDir = path.join(outDir, 'by-topic');
  await mkdir(byTopicDir, { recursive: true });
  const counts = {};
  for (const topic of [...TOPICS, 'Other']) {
    const rows = all.filter((r) => (r.topics || []).includes(topic));
    counts[topic] = rows.length;
    if (!rows.length) continue;
    const cols = topic === 'Other'
      ? ['articleId', 'topics', 'headline', 'summary', 'keyExcerpt', 'sourceUrl']
      : columnsForTopic(topic);
    const csv = [
      cols.join(','),
      ...rows.map((r) => cols.map((c) => csvEscape(r[c])).join(',')),
    ].join('\n');
    await writeFile(path.join(byTopicDir, `${topic.replace(/[^a-z0-9]+/gi, '_')}.csv`), csv);
  }

  // Combined master table.
  const masterCols = ['articleId', 'topics', 'headline', 'company', 'property', 'address', 'city', 'country', 'eventDate', 'summary', 'keyExcerpt', 'sourceUrl'];
  const master = [
    masterCols.join(','),
    ...all.map((r) => masterCols.map((c) => csvEscape(r[c])).join(',')),
  ].join('\n');
  await writeFile(path.join(outDir, 'facts.csv'), master);

  // App-ready JSON for the webapp (facts + link + excerpt).
  await writeFile(path.join(outDir, 'news.json'), JSON.stringify(all, null, 2));

  console.log('→ Topic counts:', counts);
  console.log(`\n✓ Wrote:`);
  console.log(`  ${path.join(outDir, 'facts.csv')}  (combined)`);
  console.log(`  ${byTopicDir}/<Topic>.csv  (per topic)`);
  console.log(`  ${path.join(outDir, 'news.json')}  (for the app)`);
  console.log('\n⚠ keyExcerpt/fullText are verbatim GS text — internal app only.');
}

main().catch((e) => { console.error('\nFATAL:', e.message); process.exit(1); });
