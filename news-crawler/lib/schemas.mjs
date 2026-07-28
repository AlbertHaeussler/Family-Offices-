// Per-topic extraction schemas for Green Street News articles.
//
// The 8 topics match Green Street's article sectors. Each topic has its own
// set of usable fields (e.g. Financing → borrower/lender/loan; Investment →
// buyer/seller/price). The LLM fills these from the article text.
//
// NOTE: `summary` must be a short neutral paraphrase in our OWN words — never
// a copied sentence from the article (copyright: only facts are free to use).

// Fields shared by every topic.
const COMMON = [
  { name: 'headline', desc: 'Short neutral headline in your own words (max 12 words). Do not copy the article title verbatim.' },
  { name: 'summary', desc: 'One factual sentence in your OWN words summarising the news. Never copy a sentence from the article.' },
  { name: 'company', desc: 'Primary company/organisation the news is about.' },
  { name: 'property', desc: 'Name of the building/asset/portfolio, if any (else empty).' },
  { name: 'address', desc: 'Street address of the property if stated (else empty).' },
  { name: 'city', desc: 'City of the property or event.' },
  { name: 'country', desc: 'Country (should usually be Germany here).' },
  { name: 'eventDate', desc: 'Date of the event/deal in YYYY-MM-DD if stated, else empty.' },
];

// Topic-specific fields. Keys must match the sector names shown in GSN.
export const SCHEMAS = {
  Financing: {
    label: 'Financing',
    fields: [
      { name: 'borrower', desc: 'Party that took the loan / is financed.' },
      { name: 'lender', desc: 'Bank/lender providing the financing.' },
      { name: 'loanAmount', desc: 'Loan amount incl. currency as written, e.g. "€120m".' },
      { name: 'loanType', desc: 'e.g. senior loan, refinancing, development loan, mezzanine.' },
      { name: 'purpose', desc: 'What the loan is for (acquisition, refinancing, development…).' },
      { name: 'ltv', desc: 'Loan-to-value % if stated.' },
      { name: 'interestRate', desc: 'Interest rate / margin if stated.' },
      { name: 'term', desc: 'Loan term / maturity if stated.' },
    ],
  },
  Investment: {
    label: 'Investment',
    fields: [
      { name: 'buyer', desc: 'Acquiring party.' },
      { name: 'seller', desc: 'Selling party.' },
      { name: 'price', desc: 'Transaction price incl. currency as written, e.g. "€85m".' },
      { name: 'assetType', desc: 'Office, logistics, residential, retail, hotel, etc.' },
      { name: 'sizeSqm', desc: 'Size in sqm if stated.' },
      { name: 'yield', desc: 'Yield / cap rate % if stated.' },
    ],
  },
  Leasing: {
    label: 'Leasing',
    fields: [
      { name: 'tenant', desc: 'Party leasing the space.' },
      { name: 'landlord', desc: 'Landlord / owner.' },
      { name: 'sizeSqm', desc: 'Leased area in sqm if stated.' },
      { name: 'rent', desc: 'Rent / rate if stated.' },
      { name: 'leaseTerm', desc: 'Lease length / term if stated.' },
      { name: 'assetType', desc: 'Office, logistics, retail, etc.' },
    ],
  },
  Fundraising: {
    label: 'Fundraising',
    fields: [
      { name: 'fundName', desc: 'Name of the fund/vehicle.' },
      { name: 'manager', desc: 'Fund manager / sponsor.' },
      { name: 'amountRaised', desc: 'Capital raised incl. currency.' },
      { name: 'targetAmount', desc: 'Target size if stated.' },
      { name: 'strategy', desc: 'Investment strategy / focus.' },
      { name: 'investors', desc: 'Named LPs / investors if any.' },
    ],
  },
  Corporate: {
    label: 'Corporate',
    fields: [
      { name: 'companies', desc: 'Companies involved (semicolon-separated).' },
      { name: 'eventType', desc: 'M&A, merger, JV, restructuring, listing, etc.' },
      { name: 'dealValue', desc: 'Value incl. currency if stated.' },
      { name: 'details', desc: 'Key factual detail in your own words.' },
    ],
  },
  People: {
    label: 'People',
    fields: [
      { name: 'person', desc: 'Name of the person.' },
      { name: 'role', desc: 'New role / title.' },
      { name: 'newCompany', desc: 'Company they are joining / are at.' },
      { name: 'previousCompany', desc: 'Company they are leaving, if stated.' },
      { name: 'moveType', desc: 'hire, promotion, departure, appointment.' },
    ],
  },
  'Policy & Regulation': {
    label: 'Policy & Regulation',
    fields: [
      { name: 'jurisdiction', desc: 'Country/region/city the rule applies to.' },
      { name: 'policyTopic', desc: 'Subject: tax, zoning, ESG rules, rent control, etc.' },
      { name: 'effectiveDate', desc: 'When it takes effect if stated.' },
      { name: 'impact', desc: 'Who/what is affected, in your own words.' },
    ],
  },
  Sustainability: {
    label: 'Sustainability',
    fields: [
      { name: 'initiative', desc: 'ESG/sustainability initiative or measure.' },
      { name: 'metric', desc: 'Any figure: CO2, EPC rating, energy target, etc.' },
      { name: 'targetYear', desc: 'Target year if stated (e.g. net-zero by 2030).' },
      { name: 'details', desc: 'Key factual detail in your own words.' },
    ],
  },
};

export const TOPICS = Object.keys(SCHEMAS);

// Map a raw article sector/category string to one of our topics.
const ALIASES = {
  finance: 'Financing', financing: 'Financing', debt: 'Financing',
  investment: 'Investment', transactions: 'Investment', deals: 'Investment', 'capital markets': 'Investment',
  leasing: 'Leasing', occupier: 'Leasing',
  fundraising: 'Fundraising', funds: 'Fundraising', 'capital raising': 'Fundraising',
  corporate: 'Corporate', 'm&a': 'Corporate',
  people: 'People', 'movers & shakers': 'People', appointments: 'People',
  policy: 'Policy & Regulation', 'policy & regulation': 'Policy & Regulation', regulation: 'Policy & Regulation',
  sustainability: 'Sustainability', esg: 'Sustainability',
};

export function classifyTopic(article) {
  const candidates = [];
  const push = (v) => { if (v) candidates.push(String(v).toLowerCase().trim()); };
  if (Array.isArray(article.sector)) article.sector.forEach((s) => push(s?.name ?? s));
  else push(article.sector?.name ?? article.sector);
  push(article.primaryCategory?.name ?? article.primaryCategory);

  for (const c of candidates) {
    if (SCHEMAS[c]) return c;                 // exact topic name
    for (const [k, v] of Object.entries(ALIASES)) if (c.includes(k)) return v;
  }
  return 'Other';
}

// Build the full ordered field list (common + topic-specific) for a topic.
export function fieldsFor(topic) {
  const topicFields = SCHEMAS[topic]?.fields ?? [];
  return [...COMMON, ...topicFields];
}
