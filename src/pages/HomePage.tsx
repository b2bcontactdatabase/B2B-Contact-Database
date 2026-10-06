import React, { useState } from 'react';
import {
  SERVICES_DATA,
  INDUSTRIES_SERVED,
  WHY_CHOOSE_US_METRICS,
  COMPARISON_BENCHMARKS,
  FAQS_DATA,
} from '../data/siteData';
import { DatabaseExplorer } from '../components/DatabaseExplorer';
import { RoiCalculator } from '../components/RoiCalculator';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  RefreshCw,
  PhoneCall,
  MailCheck,
  ChevronDown,
  Building2,
  Users,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onRequestSample: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestSample }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToExplorer = () => {
    const el = document.getElementById('database-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-200/60">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Enterprise B2B Contact Intelligence & Lead Generation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
                Precision B2B Contact Data to Power Predictable Revenue.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Bypass corporate gatekeepers and eliminate bounced outbound. Access 75M+ triple-verified decision-makers with direct mobile dials, accurate work emails, and technographic intelligence backed by an ironclad 95%+ deliverability SLA.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={scrollToExplorer}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-lg shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Explore Live Database</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onRequestSample}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-lg border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Request Custom Sample</span>
                </button>
              </div>

              {/* Proof Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/90">
                {WHY_CHOOSE_US_METRICS.map((item, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Column: Visual Hero Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900">
                <img
                  src="/src/assets/images/hero_b2b_intelligence_1791273510269.jpg"
                  alt="Enterprise boardroom and B2B revenue intelligence analytics"
                  className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Floating Micro Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg text-slate-900">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-blue-600">Active Real-Time Pipeline</span>
                    <span className="text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Live Feed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-900">14,200+ Verified Records</strong> refreshed in the last 24 hours across SaaS, Healthcare, and OEM Manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE DATABASE EXPLORER SECTION */}
      <section id="database-explorer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Instant Database Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Search, Filter & Export High-Accuracy Business Contacts
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Test our verified database live. Filter by industry, seniority level, and technological stack, then export a sample CSV directly to your device.
          </p>
        </div>

        <DatabaseExplorer onRequestSample={onRequestSample} />
      </section>

      {/* 3. FOUR CORE BENEFITS OF B2B CONTACT DATABASES */}
      <section className="bg-slate-100/70 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Strategic Advantages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              The Fundamental Benefits of High-Fidelity B2B Contact Data
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Outbound success is no longer a volume game. Modern sales organizations thrive on data cleanliness, contact accuracy, and strategic timing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <MailCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Eliminate Bounced Outbound & Protect Domain Health
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Outbound campaigns with bounce rates &gt; 3% destroy Google and Microsoft sender reputations. Our triple-verified emails keep bounce rates below 2%, safeguarding your email domains.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Direct Dials That Bypass Corporate Gatekeepers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                General company switchboards connect with decision-makers under 4% of the time. Our carrier-verified direct mobile lines achieve an 85%+ direct connection rate, saving SDRs 15 hours a week.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Precision Account-Based Marketing (ABM)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Map the entire internal buying committee. Target economic buyers, technical champions, and security leads across your top Tier-1 enterprise accounts with multi-threaded cadences.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Automated CRM Data Hygiene & Decay Defense
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                B2B contact information decays at roughly 30% per year. Our rolling 30-day verification engine detects job changes and automatically refreshes rotting CRM records with current incumbents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Contact Data Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Engineered specifically for sales development representatives, revenue leaders, and demand generation teams.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Explore Complete Services & Pricing Schema</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    Service {service.number}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    {service.accuracyRate} Accuracy
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.keyFeatures.slice(0, 2).map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Details & Sample Output</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED SECTION */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Targeted Market Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industries Served Across 190+ Countries
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Every vertical requires distinct decision-maker personas, compliance standards, and technological profiling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/80 hover:border-blue-500/60 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">{ind.name}</h3>
                  <span className="text-xs text-blue-400 font-semibold tabular-nums">
                    {ind.recordCount}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ind.description}
                </p>
                <div>
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Key Decision Maker Personas
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {ind.keyPersonas.map((persona, pidx) => (
                      <span
                        key={pidx}
                        className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {persona}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-700/60 text-xs text-slate-400 flex items-center justify-between">
                  <span>Sample accounts:</span>
                  <span className="text-slate-300 font-medium">
                    {ind.sampleCompanies.slice(0, 3).join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE ROI & PIPELINE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculator onRequestSample={onRequestSample} />
      </section>

      {/* 7. WHY CHOOSE US (COMPARISON TABLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            The Accuracy Benchmark
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why High-Velocity Sales Teams Choose Vanguard B2B
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Compare our real-time verification infrastructure against scraped directories and legacy quarterly database vendors.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 w-1/4">Evaluation Criteria</th>
                  <th className="py-4 px-6 w-1/4 bg-blue-50/70 text-blue-900 border-x border-blue-100">
                    Vanguard B2B Intelligence
                  </th>
                  <th className="py-4 px-6 w-1/4 text-slate-600">Generic Web Scrapers</th>
                  <th className="py-4 px-6 w-1/4 text-slate-600">Legacy Contact Vendors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_BENCHMARKS.map((benchmark, bidx) => (
                  <tr key={bidx} className="hover:bg-slate-50/50">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {benchmark.feature}
                    </td>
                    <td className="py-4 px-6 bg-blue-50/30 text-blue-950 font-semibold border-x border-blue-100">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{benchmark.vanguard}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      {benchmark.genericScrapers}
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      {benchmark.legacyDatabases}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. FAQS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know About Our B2B Database
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Transparent answers on deliverability SLAs, compliance protocols, and custom prospect builds.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. HIGH-CONVERTING BOTTOM CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-300">
              Accelerate Outbound Pipeline Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Equip Your Sales Team With Verified Direct Dials?
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              Stop burning secondary domains on unverified scrapes. Download 25 complimentary verified contacts matching your exact target persona or speak with a data solutions specialist.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onRequestSample}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request Free Sample Dataset</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Data Strategy Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
