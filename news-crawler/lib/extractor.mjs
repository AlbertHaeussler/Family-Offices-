// LLM fact extractor. One call per article returns: which topic(s) apply
// (1+, or none), the common fields, the topic-specific fields, and a verbatim
// keyExcerpt. Uses Claude tool-use for guaranteed structured output.
//
// LEGAL: article text is sent to the Anthropic API. Use a commercial/
// zero-retention account (the commercial API does not train on your data).
// Set ANTHROPIC_API_KEY. keyExcerpt is verbatim GS text — internal use.

import { allFieldDefs, TOPICS } from './schemas.mjs';

const API_URL = process.env.ANTHROPIC_BASE_URL
  ? `${process.env.ANTHROPIC_BASE_URL.replace(/\/$/, '')}/v1/messages`
  : 'https://api.anthropic.com/v1/messages';
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5';
const VERSION = '2023-06-01';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Single unified tool covering topics[] + all possible fields.
function buildTool() {
  const properties = {
    topics: {
      type: 'array',
      items: { type: 'string', enum: TOPICS },
      description: 'All topics that apply to this article (one or more). If none of these fit, return an empty array.',
    },
  };
  for (const f of allFieldDefs()) {
    properties[f.name] = { type: 'string', description: f.desc };
  }
  return {
    name: 'record_facts',
    description: 'Record structured, usable facts from a commercial real-estate news article. Fill only fields the article actually states; leave the rest as empty strings. Never invent values.',
    input_schema: { type: 'object', properties, required: ['topics'] },
  };
}

const TOOL = buildTool();

const SYSTEM = [
  'You extract structured facts from commercial real-estate news articles.',
  'Rules:',
  '- Choose ALL applicable topics (an article can have several, e.g. a deal that is both Investment and Financing).',
  '- Only record facts explicitly stated. If unknown, use an empty string.',
  '- `headline` and `summary` are YOUR OWN neutral paraphrase — never copy article sentences.',
  '- `keyExcerpt` is the OPPOSITE: copy the single most important sentence VERBATIM (exact words), max ~350 chars.',
  '- Keep amounts as written (with currency). Dates as YYYY-MM-DD when possible.',
  '- Always call record_facts exactly once.',
].join('\n');

export function createExtractor({ apiKey, model = MODEL } = {}) {
  if (!apiKey) throw new Error('Missing ANTHROPIC_API_KEY.');

  async function extract(article) {
    const text = (article.content || article.excerpt || '').slice(0, 24000);
    const userMsg = `Title: ${article.title || ''}\n\nArticle:\n${text}`;

    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': VERSION,
          },
          body: JSON.stringify({
            model,
            max_tokens: 1200,
            system: SYSTEM,
            tools: [TOOL],
            tool_choice: { type: 'tool', name: 'record_facts' },
            messages: [{ role: 'user', content: userMsg }],
          }),
        });
        if (!res.ok) {
          const body = await res.text().catch(() => '');
          if ((res.status === 429 || res.status >= 500) && attempt < 4) {
            await sleep(2000 * 2 ** attempt); continue;
          }
          throw new Error(`Anthropic ${res.status}: ${body.slice(0, 300)}`);
        }
        const json = await res.json();
        const block = (json.content || []).find((b) => b.type === 'tool_use');
        if (!block) throw new Error('No tool_use in response');
        return block.input;
      } catch (e) {
        if (attempt === 4) throw e;
        await sleep(2000 * 2 ** attempt);
      }
    }
  }

  return { extract, model };
}
