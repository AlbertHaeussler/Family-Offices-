// Green Street News (GSN) API client — dependency-free (Node 18+ global fetch).
//
// LEGAL / AGB: Green Street News content is proprietary and copyrighted.
// Per the Terms & Conditions it may be used "solely for internal business
// purposes" and may NOT be reproduced, re-distributed, sold or otherwise
// transferred without prior written consent. Keep everything this client
// downloads INTERNAL. Do NOT publish raw article text (e.g. on the public
// Vercel app) — only derived facts + a link back to the Green Street source.

const OAUTH_URL = process.env.GS_OAUTH_URL || 'https://login.greenstreet.com/oauth/token';
const AUDIENCE = process.env.GS_AUDIENCE || 'https://api.greenstreet.com';
const BASE = process.env.GS_BASE_URL || 'https://web-news-service.greenstreet.com';

export const ALL_REGIONS = ['ASA', 'AUS', 'CAN', 'EUR', 'USA', 'UK'];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Retry wrapper for transient failures (429 / 5xx / 424 / network errors).
async function withRetry(fn, { attempts = 5, base = 1500, label = 'request' } = {}) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const retriable = err.retriable ?? true;
      if (!retriable || i === attempts - 1) break;
      const wait = base * 2 ** i;
      console.warn(`  ↻ ${label} failed (${err.message}); retry ${i + 1}/${attempts - 1} in ${wait}ms`);
      await sleep(wait);
    }
  }
  throw lastErr;
}

export function createClient({ clientId, clientSecret }) {
  if (!clientId || !clientSecret) {
    throw new Error('Missing GS_CLIENT_ID / GS_CLIENT_SECRET (see .env.example).');
  }

  let token = null;
  let tokenExpiresAt = 0;

  async function getToken() {
    // Reuse cached token until 60s before expiry.
    if (token && Date.now() < tokenExpiresAt - 60_000) return token;
    return withRetry(async () => {
      const res = await fetch(OAUTH_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
          audience: AUDIENCE,
        }),
      });
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        const err = new Error(`OAuth ${res.status}: ${body.slice(0, 300)}`);
        err.retriable = res.status >= 500 || res.status === 429;
        throw err;
      }
      const json = await res.json();
      token = json.access_token;
      tokenExpiresAt = Date.now() + (json.expires_in ?? 3600) * 1000;
      return token;
    }, { label: 'oauth' });
  }

  async function apiGet(path, { params, raw = false } = {}) {
    const url = new URL(BASE + path);
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v == null) continue;
        if (Array.isArray(v)) v.forEach((item) => url.searchParams.append(k, String(item)));
        else url.searchParams.set(k, String(v));
      }
    }
    return withRetry(async () => {
      const t = await getToken();
      const res = await fetch(url, { headers: { Authorization: `Bearer ${t}` } });
      if (!res.ok) {
        const body = raw ? '' : await res.text().catch(() => '');
        const err = new Error(`GET ${path} → ${res.status}: ${body.slice(0, 300)}`);
        err.status = res.status;
        // 401 → token issue (retry after refresh); 403/422 → entitlement/validation (do not retry).
        err.retriable = res.status === 429 || res.status >= 500 || res.status === 424 || res.status === 401;
        if (res.status === 401) { token = null; tokenExpiresAt = 0; }
        throw err;
      }
      return raw ? Buffer.from(await res.arrayBuffer()) : res.json();
    }, { label: `GET ${path}` });
  }

  return {
    ping: () => apiGet('/api/ping'),
    getRegions: () => apiGet('/api/regions'),
    getSectors: () => apiGet('/api/sectors'),
    listArticles: ({ region, page = 1, keyword, sectors, subregions } = {}) =>
      apiGet('/api/articles', { params: { region, page, keyword, sectors, subregions } }),
    getArticle: (id) => apiGet(`/api/articles/${id}`),
    getArticleImage: (id, { src, region }) =>
      apiGet(`/api/articles/${id}/image`, { params: { src, region }, raw: true }),
  };
}
