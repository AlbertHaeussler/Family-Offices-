// LLM-based fact extractor. Sends article text to Claude with a strict
// per-topic tool schema and returns validated structured facts.
//
// LEGAL: article text is sent to the Anthropic API for processing. Use a
// commercial/zero-retention account (Anthropic's commercial API does not
// train on your data). Set ANTHROPIC_API_KEY. Do NOT use a provider that
// retains or trains on inputs — that would be a "transfer to third parties".

import { fieldsFor } from './schemas.mjs';

const API_URL = process.env.ANTHROPIC_BASE_URL
  ? `${process.env.ANTHROPIC_BASE_URL.replace(/\/$/, '')}/v1/messages`
  : 'https://api.anthropic.com/v1/messages';
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5';
const VERSION = '2023-06-01';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Build an Anthropic tool input_schema from a topic's field list (all strings).
function toolFor(topic) {
  const fields = fieldsFor(topic);
  const properties = {};
  for (const f of fields) properties[f.name] = { type: 'string', description: f.desc };
  return {
    name: 'record_facts',
    description: `Extract structured facts for a "${topic}" real-estate news item. Leave a field as an empty string if the article does not state it. Never invent values.`,
    input_schema: { type: 'object', properties, required: [] },
  };
}

const SYSTEM = [
  'You extract structured facts from commercial real-estate news articles.',
  'Rules:',
  '- Only record facts explicitly stated in the article. If unknown, use an empty string.',
  '- Never copy full sentences from the article. `headline` and `summary` must be your own neutral paraphrase (facts only).',
  '- Keep amounts as written (with currency symbol). Keep dates as YYYY-MM-DD when possible.',
  '- Always call the record_facts tool exactly once.',
].join('\n');

export function createExtractor({ apiKey, model = MODEL } = {}) {
  if (!apiKey) throw new Error('Missing ANTHROPIC_API_KEY.');

  async function extract(article, topic) {
    const tool = toolFor(topic);
    const text = (article.content || article.excerpt || '').slice(0, 24000);
    const userMsg =
      `Topic: ${topic}\nTitle: ${article.title || ''}\n\nArticle:\n${text}`;

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
            max_tokens: 1024,
            system: SYSTEM,
            tools: [tool],
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
