import React, { useState } from 'react';
import { SERVICES_DATA, PRICING_PLANS } from '../data/siteData';
import {
  CheckCircle2,
  Database,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  FileSpreadsheet,
  Headphones,
  Check,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onRequestSample: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onRequestSample,
}) => {
  const [selectedSchemaCategory, setSelectedSchemaCategory] = useState<string>('contact');

  const schemaCategories = [
    { id: 'contact', label: 'Contact Identity' },
    { id: 'firmographic', label: 'Company Firmographics' },
    { id: 'technographic', label: 'Technographics & Tech Stack' },
    { id: 'verification', label: 'Deliverability Telemetry' },
  ];

  const schemaFields: Record<string, { field: string; type: string; example: string; description: string }[]> = {
    contact: [
      { field: 'full_name', type: 'string', example: 'Elena Rostova', description: 'Standardized First and Last legal name' },
      { field: 'job_title', type: 'string', example: 'Chief Revenue Officer', description: 'Normalized functional business title' },
      { field: 'seniority_level', type: 'enum', example: 'C-Suite', description: 'C-Suite, VP, Director, Manager, or Lead' },
      { field: 'functional_dept', type: 'enum', example: 'Sales & Revenue', description: 'Standardized department categorization' },
      { field: 'work_email', type: 'email', example: 'elena.rostova@cloudscale-global.com', description: 'Triple-verified business inbox' },
      { field: 'direct_mobile', type: 'e164', example: '+1 (415) 890-4122', description: 'Carrier HLR verified direct mobile' },
      { field: 'desk_direct_line', type: 'e164', example: '+1 (415) 890-4100 ext. 204', description: 'Direct office extension bypassing IVR' },
      { field: 'linkedin_url', type: 'url', example: 'https://linkedin.com/in/elena-rostova', description: 'Verified public executive profile link' },
    ],
    firmographic: [
      { field: 'company_name', type: 'string', example: 'CloudScale Global Inc.', description: 'Normalized legal entity business name' },
      { field: 'primary_domain', type: 'domain', example: 'cloudscale-global.com', description: 'Validated primary corporate domain' },
      { field: 'industry_category', type: 'taxonomy', example: 'Enterprise Software & SaaS', description: 'Granular B2B vertical taxonomy' },
      { field: 'naics_code', type: 'code', example: '511210', description: 'Software Publishers standardized code' },
      { field: 'revenue_range', type: 'band', example: '$50M - $100M', description: 'Audited annual turnover estimation' },
      { field: 'employee_count', type: 'integer', example: '640', description: 'Exact full-time employee headcount' },
      { field: 'hq_address', type: 'string', example: '500 Howard St, San Francisco, CA', description: 'Physical corporate headquarters location' },
      { field: 'funding_stage', type: 'enum', example: 'Series C ($48M Raised)', description: 'Last known institutional funding round' },
    ],
    technographic: [
      { field: 'crm_system', type: 'string', example: 'Salesforce Enterprise', description: 'Active core customer relationship platform' },
      { field: 'marketing_auto', type: 'string', example: 'Marketo / HubSpot', description: 'Detected marketing automation stack' },
      { field: 'cloud_infra', type: 'array', example: 'AWS (S3, EC2, Lambda), GCP', description: 'Primary hosting and computing footprint' },
      { field: 'data_warehouse', type: 'string', example: 'Snowflake / BigQuery', description: 'Analytics and database infrastructure' },
      { field: 'security_tools', type: 'array', example: 'CrowdStrike, Okta, Palo Alto', description: 'Enterprise identity & defense systems' },
      { field: 'hr_erp_stack', type: 'string', example: 'Workday / NetSuite', description: 'Back-office corporate planning system' },
    ],
    verification: [
      { field: 'smtp_check_status', type: 'status', example: 'VALID_250_OK', description: 'Live server handshake response code' },
      { field: 'mx_record_domain', type: 'domain', example: 'aspmx.l.google.com', description: 'Validated receiving mail exchange server' },
      { field: 'deliverability_score', type: 'percentage', example: '99.4%', description: 'Proprietary inbox delivery confidence' },
      { field: 'hlr_lookup_carrier', type: 'carrier', example: 'AT&T Mobility (Active Line)', description: 'Mobile direct dial network state' },
      { field: 'verification_timestamp', type: 'iso8601', example: '2026-10-05T14:22:10Z', description: 'Last automated re-verification ping' },
      { field: 'gdpr_lawful_basis', type: 'legal', example: 'Art. 6(1)(f) Legitimate Interest', description: 'Documented European compliance rationale' },
    ],
  };

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HEADER SECTION */}
      <section className="bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-900">
              <Database className="w-3.5 h-3.5" />
              <span>Comprehensive Data Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              B2B Contact Database & Intelligence Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every sales sequence is only as effective as the data feeding it. Explore our suite of verified direct dials, triple-verified email rosters, technographic intelligence, and continuous CRM enrichment pipelines.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onRequestSample}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                Request Custom Sample Dataset
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-all"
              >
                Speak with a Data Architect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED SERVICES BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                      SERVICE {service.number}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {service.accuracyRate} Verified Accuracy
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm font-semibold text-blue-900">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                      Core Engineering Standards:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Specification Box */}
                <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200/90 space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Ideal Target Audience
                    </span>
                    <p className="text-xs font-medium text-slate-800 mt-1">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Standard Deliverables
                    </span>
                    <p className="text-xs text-slate-700 mt-1">
                      {service.deliverables}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onRequestSample}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Request Sample for {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE DATA SCHEMA INSPECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
              Exhaustive 40+ Point Data Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Field-Level B2B Data Schema Inspector
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Every contact record delivered by Vanguard B2B is rich, standardized, and immediately compatible with enterprise CRMs and sequencers.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-4">
            {schemaCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSchemaCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedSchemaCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Schema Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-800/80 text-slate-300 font-mono uppercase tracking-wider border-b border-slate-700">
                  <th className="py-3 px-4">Field Name</th>
                  <th className="py-3 px-4">Data Type</th>
                  <th className="py-3 px-4">Sample Value</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                {schemaFields[selectedSchemaCategory]?.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-blue-400">{row.field}</td>
                    <td className="py-3 px-4 text-emerald-400 text-[11px]">{row.type}</td>
                    <td className="py-3 px-4 text-slate-200">{row.example}</td>
                    <td className="py-3 px-4 text-slate-400 font-sans text-xs">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. TRANSPARENT PRICING & DATA PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Predictable Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent B2B Dataset Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            No punitive multi-year lock-ins. High-fidelity contact intelligence with automated 1:1 bounce credit replacement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                plan.highlight
                  ? 'bg-slate-900 text-white ring-2 ring-blue-600 shadow-xl'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className={`text-xs mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.tier}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tabular-nums tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-xs ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.cadence}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold mt-1.5 ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                    {plan.leadVolume}
                  </div>
                </div>

                <div className={`border-t pt-6 space-y-3 mb-8 ${plan.highlight ? 'border-slate-800' : 'border-slate-100'}`}>
                  {plan.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.highlight ? 'text-blue-400' : 'text-emerald-600'
                        }`}
                      />
                      <span className={plan.highlight ? 'text-slate-300' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    if (plan.id === 'enterprise') {
                      onNavigate('contact');
                    } else {
                      onRequestSample();
                    }
                  }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    plan.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 sm:p-12 text-center border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">
            Need a Bespoke Dataset with Custom Filtration?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Our data research team builds tailored prospect rosters with custom qualification criteria within 48 to 72 business hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Request Custom Build Quote
            </button>
            <button
              onClick={onRequestSample}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-300 transition-colors"
            >
              Download Sample Output
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
