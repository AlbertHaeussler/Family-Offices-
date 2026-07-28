#!/usr/bin/env node
// FREE topic sort — no API key, no cost. Groups the crawled articles by Green
// Street's own topic/sector field and writes one CSV per topic (+ a combined
// one). This is the zero-cost path: all articles, sorted, 1:1.
//
//   node sort.mjs
//
// (The paid extract.mjs step is optional and only for pulling structured facts
//  like "who took a loan for which building".)

import { previewTopic, TOPICS } from './lib/schemas.mjs';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const csvEscape = (v) => {
  if (v == null) return '';
  const s = Array.isArray(v) ? v.map((x) => x?.name ?? x).filter(Boolean).join('; ') : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const flat = (arr) => (Array.isArray(arr) ? arr.map((x) => x?.name ?? x).filter(Boolean).join('; ') : (arr?.name ?? arr ?? ''));
const articleUrl = (a) => (Array.isArray(a.gsNewsUrl) ? a.gsNewsUrl[0] : a.gsNewsUrl) || '';

function parseFlags(argv) {
  const f = {};
  for (const a of argv.slice(2)) {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    if (m) f[m[1]] = m[2] === undefined ? true : m[2];
  }
  return f;
}

async function main() {
  const flags = parseFlags(process.argv);
  const outDir = path.resolve(flags.out || './out');
  const storePath = path.join(outDir, 'articles.json');
  if (!existsSync(storePath)) {
    console.error(`No ${storePath}. Run the crawler first: node crawl.mjs --germany`);
    process.exit(1);
  }
  const articles = JSON.parse(await readFile(storePath, 'utf8'));
  console.log(`→ ${articles.length} articles`);

  const rows = articles.map((a) => ({
    id: a.id,
    topic: previewTopic(a),
    title: a.title ?? '',
    excerpt: a.excerpt ?? '',
    sector: flat(a.sector),
    region: flat(a.region),
    subregion: flat(a.subregion),
    writers: flat(a.writers),
    date: a.createdAt ?? '',
    content: a.content ?? '',
    sourceUrl: articleUrl(a),
  }));

  const cols = ['id', 'topic', 'title', 'excerpt', 'sector', 'region', 'subregion', 'writers', 'date', 'sourceUrl', 'content'];
  const toCsv = (list) => [cols.join(','), ...list.map((r) => cols.map((c) => csvEscape(r[c])).join(','))].join('\n');

  // Combined table.
  await writeFile(path.join(outDir, 'articles-by-topic.csv'), toCsv(rows));

  // One CSV per topic.
  const byTopicDir = path.join(outDir, 'by-topic-free');
  await mkdir(byTopicDir, { recursive: true });
  const counts = {};
  for (const topic of [...TOPICS, 'Other']) {
    const list = rows.filter((r) => r.topic === topic);
    counts[topic] = list.length;
    if (list.length) await writeFile(path.join(byTopicDir, `${topic.replace(/[^a-z0-9]+/gi, '_')}.csv`), toCsv(list));
  }

  console.log('→ Topic counts:', counts);
  console.log(`\n✓ FREE sort done — no API, no cost:`);
  console.log(`  ${path.join(outDir, 'articles-by-topic.csv')}  (all, combined)`);
  console.log(`  ${byTopicDir}/<Topic>.csv  (one per topic)`);
  console.log('\n⚠ Internal use only — Green Street content stays private.');
}

main().catch((e) => { console.error('\nFATAL:', e.message); process.exit(1); });
