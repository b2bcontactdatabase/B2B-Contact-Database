import { ServiceItem, IndustryItem, FAQItem, PricingPlan } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'direct-dials',
    number: '01',
    title: 'Verified Direct Dials & Mobile Phone Intelligence',
    tagline: 'Bypass corporate switchboards and gatekeepers directly to decision-makers.',
    description: 'Connect directly with senior leaders on their desk direct lines and verified mobile numbers. Every number is screened via real-time carrier HLR lookups to verify connectivity and eliminate disconnected lines.',
    keyFeatures: [
      '85%+ direct connection rate on C-level and VP contacts',
      'Continuous HLR carrier line connectivity checks',
      'Do-Not-Call (DNC) and TPS national registry filtering',
      'Local timezone and dialing window intelligence'
    ],
    idealFor: 'Outbound SDR teams, executive search recruiters, and high-velocity AE sales cadences.',
    deliverables: 'CSV / CRM export with direct desk phone, verified mobile, extension, and HQ backup lines.',
    accuracyRate: '96.2%'
  },
  {
    id: 'triple-verified-email',
    number: '02',
    title: 'Triple-Verified B2B Email Intelligence Datasets',
    tagline: 'Zero spam traps, zero catch-all bounce surprises, 95%+ inbox delivery.',
    description: 'Proprietary 3-tier validation protocol combining DNS MX validation, real-time live SMTP socket handshakes (without sending test mail), and catch-all domain pattern disambiguation.',
    keyFeatures: [
      'Guaranteed bounce rate < 4% across all campaigns',
      'Catch-all domain verification via proprietary email pattern matching',
      'Spam trap, honeypot, and disposable domain elimination',
      '100% free credits replacement for any hard bounce'
    ],
    idealFor: 'Demand generation leaders, cold email marketing specialists, and revenue operations.',
    deliverables: 'Strictly deliverable business email addresses with confidence rating and MX record verification timestamp.',
    accuracyRate: '98.8%'
  },
  {
    id: 'firmographics-technographics',
    number: '03',
    title: 'Firmographic & Technographic Profiling',
    tagline: 'Filter by revenue, tech stack, funding rounds, and buying power.',
    description: 'Deep firmographic data across 12M+ worldwide companies. Map out which prospective clients are running Salesforce, AWS, HubSpot, Snowflake, SAP, or 2,400+ other enterprise technologies.',
    keyFeatures: [
      '2,400+ tracked software frameworks, cloud providers, and CRMs',
      'Annual revenue bands, exact employee headcount tiers, and growth velocity',
      'Standardized NAICS, SIC, and proprietary sub-industry taxonomies',
      'Funding history, series stage, and headquarters geographical coordinates'
    ],
    idealFor: 'Account-Based Marketing (ABM) managers and Product-Led Growth (PLG) outbound teams.',
    deliverables: 'Complete corporate profile with active tech stack tags, parent/subsidiary hierarchy, and revenue bands.',
    accuracyRate: '95.4%'
  },
  {
    id: 'abm-buying-groups',
    number: '04',
    title: 'Account-Based Marketing (ABM) Buying Committees',
    tagline: 'Engage all 6–10 enterprise decision-makers involved in modern purchasing.',
    description: 'Enterprise deals are never bought by a single individual. Our ABM datasets map complete internal buying committees: the Economic Buyer, Technical Evaluator, Executive Sponsor, and End User Champion.',
    keyFeatures: [
      'Comprehensive buying committee mapping across Target Accounts',
      'Hierarchical org charts with direct reporting structures',
      'Cross-departmental contact coverage (IT, Security, Procurement, Finance)',
      'Account-level penetration tracking'
    ],
    idealFor: 'Enterprise sales teams targeting Tier-1 strategic accounts with deal sizes > $50,000.',
    deliverables: 'Multi-threaded contact clusters per target account mapped by evaluation role.',
    accuracyRate: '97.1%'
  },
  {
    id: 'crm-enrichment',
    number: '05',
    title: 'Automated CRM Enrichment & Data Hygiene',
    tagline: 'Transform stale, rotting CRM records into enriched, actionable revenue fuel.',
    description: 'B2B data decays at 30% per year due to job changes, promotions, and company restructurings. Our enrichment pipeline continuously refreshes your Salesforce or HubSpot database in real time.',
    keyFeatures: [
      'Bi-directional automated sync with Salesforce, HubSpot, and Outreach',
      'Fills missing phone numbers, titles, LinkedIn URLs, and company revenues',
      'Flags departed contacts and suggests new successors in the same role',
      'Deduplication and standardization of company domain names'
    ],
    idealFor: 'Revenue Operations (RevOps) leaders seeking clean reporting and automated routing.',
    deliverables: 'Cleaned, standardized CRM records with automated field-mapping reports.',
    accuracyRate: '96.8%'
  },
  {
    id: 'custom-prospecting',
    number: '06',
    title: 'Custom Prospect Sourcing & ICP Mining',
    tagline: 'Bespoke contact discovery engineered by senior data analysts.',
    description: 'When off-the-shelf databases lack niche vertical criteria, our human-in-the-loop research team builds hand-curated prospect lists according to your exact Ideal Customer Profile (ICP) requirements.',
    keyFeatures: [
      'Target hyper-niche industries (e.g. MedTech cleanroom managers, cold-storage warehouse directors)',
      '100% human-verified contact details with phone call confirmation where required',
      'Custom qualification questionnaires and compliance validation',
      'Rapid delivery within 48 to 72 business hours'
    ],
    idealFor: 'Companies launching new specialized product offerings or entering greenfield territories.',
    deliverables: 'Pristine custom CSV/Excel roster with dedicated verification audit certificate.',
    accuracyRate: '99.2%'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'enterprise-software',
    name: 'Enterprise Software & SaaS',
    description: 'Target CTOs, VPs of Engineering, Product Heads, and RevOps leaders actively scaling tech infrastructures.',
    recordCount: '18.4M+ Verified Contacts',
    keyPersonas: ['Chief Technology Officer', 'VP of Engineering', 'Director of DevOps', 'Head of Revenue Operations'],
    commonTechStacks: ['AWS', 'Kubernetes', 'Snowflake', 'Datadog', 'Salesforce'],
    sampleCompanies: ['Databricks', 'Stripe', 'Atlassian', 'Confluent']
  },
  {
    id: 'healthcare-medtech',
    name: 'Healthcare & MedTech',
    description: 'Reach hospital system procurement, clinical informatics directors, and medical device compliance executives.',
    recordCount: '9.2M+ Verified Contacts',
    keyPersonas: ['Chief Medical Officer', 'VP of Clinical Operations', 'Director of Procurement', 'Head of Health Informatics'],
    commonTechStacks: ['Epic Systems', 'Cerner', 'Veeva Systems', 'Workday'],
    sampleCompanies: ['Mayo Clinic', 'Medtronic', 'Quest Diagnostics', 'Boston Scientific']
  },
  {
    id: 'financial-services',
    name: 'Financial Services & FinTech',
    description: 'Connect with Managing Directors, Risk Officers, Portfolio Managers, and FinTech product architects.',
    recordCount: '12.8M+ Verified Contacts',
    keyPersonas: ['Chief Risk Officer', 'Head of Compliance', 'Managing Director', 'VP of Quantitative Strategy'],
    commonTechStacks: ['Bloomberg', 'FactSet', 'Azure Cloud', 'Tableau', 'Stripe'],
    sampleCompanies: ['Morgan Stanley', 'BlackRock', 'Brex', 'Fidelity']
  },
  {
    id: 'manufacturing-oem',
    name: 'Industrial Manufacturing & OEM',
    description: 'Engage plant managers, VP of Supply Chain, Industrial Automation engineers, and global procurement teams.',
    recordCount: '11.5M+ Verified Contacts',
    keyPersonas: ['Plant General Manager', 'VP of Global Sourcing', 'Director of Quality Assurance', 'Automation Engineer'],
    commonTechStacks: ['Siemens MindSphere', 'SAP S/4HANA', 'PTC ThingWorx', 'Rockwell Automation'],
    sampleCompanies: ['Bosch', 'Schneider Electric', 'Caterpillar', 'ABB']
  },
  {
    id: 'logistics-supply',
    name: 'Logistics & Supply Chain',
    description: 'Direct lines to fleet operations directors, freight procurement leaders, and 3PL warehouse executives.',
    recordCount: '8.1M+ Verified Contacts',
    keyPersonas: ['VP of Transportation', 'Director of Fulfillment', 'Global Supply Chain Director', 'Fleet Operations Lead'],
    commonTechStacks: ['Manhattan Associates', 'Blue Yonder', 'Oracle Transportation', 'Samsara'],
    sampleCompanies: ['Maersk', 'FedEx', 'DHL Supply Chain', 'Kuehne+Nagel']
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consulting',
    description: 'Partner with Managing Partners, Practice Leaders, In-House Legal Counsel, and Human Capital directors.',
    recordCount: '15.2M+ Verified Contacts',
    keyPersonas: ['Managing Partner', 'Head of Talent Acquisition', 'General Counsel', 'Principal Consultant'],
    commonTechStacks: ['Microsoft 365', 'Salesforce', 'NetSuite', 'Greenhouse'],
    sampleCompanies: ['McKinsey', 'Deloitte', 'PwC', 'Accenture']
  }
];

export const WHY_CHOOSE_US_METRICS = [
  {
    metric: '95%+',
    label: 'Deliverability SLA Guarantee',
    detail: 'Backed by 100% automated credit replacement on any hard bounce.'
  },
  {
    metric: '75M+',
    label: 'Verified Global Decision Makers',
    detail: 'Targetable across 190+ countries, filtered by seniority, tech stack, and revenue.'
  },
  {
    metric: '30 Days',
    label: 'Continuous Refresh Cycle',
    detail: 'Every contact re-verified on a 30-day cadence to catch job changes.'
  },
  {
    metric: '100%',
    label: 'Regulatory Compliance Standard',
    detail: 'Strict alignment with GDPR Article 6 legitimate interest, CCPA, and CASL.'
  }
];

export const COMPARISON_BENCHMARKS = [
  {
    feature: 'Email Deliverability Guarantee',
    vanguard: '95%+ with 1:1 bounce credit replacement',
    genericScrapers: '70%–80% with high domain spam burn risk',
    legacyDatabases: '82%–88% (stale records older than 6 months)'
  },
  {
    feature: 'Direct Dial Phone Accuracy',
    vanguard: '96.2% verified via live carrier HLR check',
    genericScrapers: 'Main company switchboards only (gatekeepers)',
    legacyDatabases: 'Disconnected mobile numbers from outdated CVs'
  },
  {
    feature: 'Data Refresh Frequency',
    vanguard: 'Continuous rolling 30-day verification loop',
    genericScrapers: 'One-time static scrape',
    legacyDatabases: 'Quarterly or annual batch updates'
  },
  {
    feature: 'Technographic Intelligence',
    vanguard: '2,400+ enterprise tech stacks actively indexed',
    genericScrapers: 'None',
    legacyDatabases: 'Basic web tech tags only'
  },
  {
    feature: 'Legal & Privacy Compliance',
    vanguard: 'GDPR / CCPA / CASL fully audited and compliant',
    genericScrapers: 'High non-compliance and legal liability risk',
    legacyDatabases: 'Complex opt-out processes'
  },
  {
    feature: 'Custom ICP Prospect Sourcing',
    vanguard: 'Dedicated human research analysts for niche lists',
    genericScrapers: 'Not available',
    legacyDatabases: 'Expensive enterprise add-on ($20k+ minimum)'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How does Vanguard B2B guarantee 95%+ email deliverability?',
    answer: 'We utilize a proprietary 3-tier validation waterfall. First, our engine checks domain DNS and active MX records. Second, it executes a live SMTP handshake ping with the recipient mail server without sending an email. Third, our algorithm resolves catch-all domains using statistical name-pattern mapping. Contacts that fail any step are excluded from your exported list.',
    category: 'Data Quality'
  },
  {
    question: 'Are your business contact datasets compliant with GDPR and CCPA regulations?',
    answer: 'Yes. All data collected by Vanguard B2B adheres to GDPR Article 6 (Legitimate Interest for B2B commercial communications) and Article 14 notice requirements. We only store professional business contact information (never personal consumer data). We maintain a global suppression list and honor opt-out and Right to be Forgotten requests within 24 hours.',
    category: 'Compliance'
  },
  {
    question: 'How often is contact information updated in the database?',
    answer: 'Our database runs on a rolling 30-day verification cycle. Every record is re-verified at least once a month. When you export or request custom prospect lists, our engine triggers an instant real-time verification ping to guarantee you receive the freshest possible contact details.',
    category: 'Data Quality'
  },
  {
    question: 'What CRM and sales engagement platforms do you integrate with?',
    answer: 'We provide one-click integrations and direct API webhooks for Salesforce, HubSpot, Outreach, Salesloft, Apollo, and Zoho CRM. Additionally, you can export raw datasets in CSV or Excel formats with custom field mappings to match your internal schemas.',
    category: 'Integration'
  },
  {
    question: 'What happens if an email bounces or a phone number is invalid?',
    answer: 'We back our 95%+ deliverability guarantee with a 100% replacement policy. If any verified email bounces or phone number fails within 14 days of export, simply upload your bounce log to our dashboard to receive automated replacement credits immediately.',
    category: 'Data Quality'
  },
  {
    question: 'Can you build custom prospect lists for niche industries and specific criteria?',
    answer: 'Yes. For specialized requirements—such as cleanroom engineers, cold-chain logistics directors, or companies planning an ERP migration—our bespoke prospect sourcing team uses human research analysts to manually verify and assemble custom rosters tailored precisely to your Ideal Customer Profile.',
    category: 'Pricing'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Prospector',
    tier: 'For individual SDRs and small founder-led outbound campaigns',
    price: '$490',
    cadence: 'per month',
    leadVolume: '2,500 Verified Contacts / mo',
    description: 'Essential contact intelligence for teams launching high-accuracy cold outreach campaigns.',
    features: [
      '2,500 triple-verified B2B work emails',
      '1,250 direct dial phone numbers',
      'Standard firmographics (Industry, Revenue, Size)',
      '95%+ deliverability guarantee',
      'CSV / Excel export format',
      'Standard email support (24h response)'
    ],
    highlight: false,
    ctaText: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth Revenue',
    tier: 'Most popular for scaling sales teams and demand gen engines',
    price: '$1,290',
    cadence: 'per month',
    leadVolume: '10,000 Verified Contacts / mo',
    description: 'Advanced data intelligence with technographic signals and direct CRM integrations.',
    features: [
      '10,000 triple-verified B2B work emails',
      '6,000 verified direct dials & mobile numbers',
      '2,400+ technographic tech stack filters',
      'Salesforce & HubSpot 1-click sync',
      'Account-Based Marketing buying group mapping',
      'Priority live chat support & dedicated account lead',
      'Instant 1:1 bounce credit replacement'
    ],
    highlight: true,
    ctaText: 'Start Growth Plan'
  },
  {
    id: 'enterprise',
    name: 'Enterprise ABM',
    tier: 'For enterprise revenue teams targeting high-ACV strategic deals',
    price: '$2,890',
    cadence: 'per month',
    leadVolume: '30,000 Verified Contacts / mo',
    description: 'Comprehensive data solution with automated CRM hygiene and dedicated research analysts.',
    features: [
      '30,000 triple-verified contacts with direct dials',
      'Continuous CRM data enrichment & rotting record hygiene',
      '500 custom human-verified bespoke leads per month',
      'Full API webhook access with unlimited seats',
      'Dedicated Customer Success Director & custom onboarding',
      'Quarterly B2B market TAM penetration reports',
      'Custom Master Service Agreement (MSA) & SLA'
    ],
    highlight: false,
    ctaText: 'Contact Enterprise Sales'
  }
];
