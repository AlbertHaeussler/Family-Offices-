// Topic list + field definitions for Green Street News fact extraction.
//
// An article can belong to ONE OR MORE topics (or none of the 8 → "Other").
// The model decides which topics apply and fills the relevant fields. Every
// record also carries a verbatim `keyExcerpt` and the `sourceUrl` so the fact
// stays readable/traceable in the app.
//
// COPYRIGHT NOTE: `keyExcerpt` (and `fullText`, when there is no link) are
// verbatim GS text — keep them for INTERNAL app use. For a PUBLIC app show
// only `summary` (own words) + `sourceUrl`.

export const TOPICS = [
  'Corporate', 'Financing', 'Fundraising', 'Investment',
  'Leasing', 'People', 'Policy & Regulation', 'Sustainability',
];

// Fields present on every record regardless of topic.
export const COMMON_FIELDS = [
  { name: 'headline', desc: 'Short neutral headline in your own words (max 12 words). Do not copy the article title verbatim.' },
  { name: 'summary', desc: 'One or two factual sentences in your OWN words. Never copy a sentence from the article.' },
  { name: 'keyExcerpt', desc: 'The single most important VERBATIM sentence from the article that states the key fact (copy it exactly, max ~350 chars). This is the "key snippet" to read back later.' },
  { name: 'company', desc: 'Primary company/organisation the news is about.' },
  { name: 'property', desc: 'Name of the building/asset/portfolio, if any.' },
  { name: 'address', desc: 'Street address of the property if stated.' },
  { name: 'city', desc: 'City of the property or event.' },
  { name: 'country', desc: 'Country (usually Germany here).' },
  { name: 'eventDate', desc: 'Date of the event/deal in YYYY-MM-DD if stated.' },
];

// Topic-specific fields. The model fills whichever apply to the chosen topics.
export const TOPIC_FIELDS = {
  Financing: [
    { name: 'borrower', desc: 'Party that took the loan / is financed.' },
    { name: 'lender', desc: 'Bank/lender providing the financing.' },
    { name: 'loanAmount', desc: 'Loan amount incl. currency as written, e.g. "€120m".' },
    { name: 'loanType', desc: 'e.g. senior loan, refinancing, development loan, mezzanine.' },
    { name: 'purpose', desc: 'What the loan is for (acquisition, refinancing, development…).' },
    { name: 'ltv', desc: 'Loan-to-value % if stated.' },
    { name: 'interestRate', desc: 'Interest rate / margin if stated.' },
    { name: 'term', desc: 'Loan term / maturity if stated.' },
  ],
  Investment: [
    { name: 'buyer', desc: 'Acquiring party.' },
    { name: 'seller', desc: 'Selling party.' },
    { name: 'price', desc: 'Transaction price incl. currency, e.g. "€85m".' },
    { name: 'assetType', desc: 'Office, logistics, residential, retail, hotel, etc.' },
    { name: 'sizeSqm', desc: 'Size in sqm if stated.' },
    { name: 'yield', desc: 'Yield / cap rate % if stated.' },
  ],
  Leasing: [
    { name: 'tenant', desc: 'Party leasing the space.' },
    { name: 'landlord', desc: 'Landlord / owner.' },
    { name: 'rent', desc: 'Rent / rate if stated.' },
    { name: 'leaseTerm', desc: 'Lease length / term if stated.' },
  ],
  Fundraising: [
    { name: 'fundName', desc: 'Name of the fund/vehicle.' },
    { name: 'manager', desc: 'Fund manager / sponsor.' },
    { name: 'amountRaised', desc: 'Capital raised incl. currency.' },
    { name: 'targetAmount', desc: 'Target size if stated.' },
    { name: 'strategy', desc: 'Investment strategy / focus.' },
    { name: 'investors', desc: 'Named LPs / investors if any.' },
  ],
  Corporate: [
    { name: 'companies', desc: 'Companies involved (semicolon-separated).' },
    { name: 'eventType', desc: 'M&A, merger, JV, restructuring, listing, etc.' },
    { name: 'dealValue', desc: 'Value incl. currency if stated.' },
  ],
  People: [
    { name: 'person', desc: 'Name of the person.' },
    { name: 'role', desc: 'New role / title.' },
    { name: 'newCompany', desc: 'Company they are joining / are at.' },
    { name: 'previousCompany', desc: 'Company they are leaving, if stated.' },
    { name: 'moveType', desc: 'hire, promotion, departure, appointment.' },
  ],
  'Policy & Regulation': [
    { name: 'jurisdiction', desc: 'Country/region/city the rule applies to.' },
    { name: 'policyTopic', desc: 'Subject: tax, zoning, ESG rules, rent control, etc.' },
    { name: 'effectiveDate', desc: 'When it takes effect if stated.' },
    { name: 'impact', desc: 'Who/what is affected, in your own words.' },
  ],
  Sustainability: [
    { name: 'initiative', desc: 'ESG/sustainability initiative or measure.' },
    { name: 'metric', desc: 'Any figure: CO2, EPC rating, energy target, etc.' },
    { name: 'targetYear', desc: 'Target year if stated (e.g. net-zero by 2030).' },
  ],
};

// Generic catch-all so uncommon fields still get captured.
export const EXTRA_FIELDS = [
  { name: 'otherFacts', desc: 'Any other concrete, usable fact not covered above (own words).' },
];

// Deduplicated union of every field, for the single unified extraction tool.
export function allFieldDefs() {
  const seen = new Map();
  for (const f of [...COMMON_FIELDS, ...Object.values(TOPIC_FIELDS).flat(), ...EXTRA_FIELDS]) {
    if (!seen.has(f.name)) seen.set(f.name, f);
  }
  return [...seen.values()];
}

// Column order for a per-topic CSV (common + that topic's fields + trace fields).
export function columnsForTopic(topic) {
  const specific = (TOPIC_FIELDS[topic] || []).map((f) => f.name);
  return [
    'articleId', 'topics',
    'headline', 'company', 'property', 'address', 'city', 'country', 'eventDate',
    ...specific,
    'summary', 'keyExcerpt', 'sourceUrl',
  ];
}

// Best-effort keyword classifier — only for a quick pre-run distribution
// preview. The authoritative topics come from the model at extraction time.
const ALIASES = {
  finance: 'Financing', financing: 'Financing', debt: 'Financing',
  investment: 'Investment', transactions: 'Investment', deals: 'Investment',
  leasing: 'Leasing', occupier: 'Leasing',
  fundraising: 'Fundraising', funds: 'Fundraising',
  corporate: 'Corporate', people: 'People', appointments: 'People',
  policy: 'Policy & Regulation', regulation: 'Policy & Regulation',
  sustainability: 'Sustainability', esg: 'Sustainability',
};

export function previewTopic(article) {
  const cands = [];
  const push = (v) => { if (v) cands.push(String(v).toLowerCase().trim()); };
  if (Array.isArray(article.sector)) article.sector.forEach((s) => push(s?.name ?? s));
  else push(article.sector?.name ?? article.sector);
  push(article.primaryCategory?.name ?? article.primaryCategory);
  for (const c of cands) {
    if (TOPICS.map((t) => t.toLowerCase()).includes(c)) return TOPICS.find((t) => t.toLowerCase() === c);
    for (const [k, v] of Object.entries(ALIASES)) if (c.includes(k)) return v;
  }
  return 'Other';
}
