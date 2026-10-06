import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Database,
  Lock,
  Globe2,
  Users2,
  Cpu,
  ArrowRight,
  FileCheck2,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onRequestSample: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestSample }) => {
  const verificationSteps = [
    {
      num: '01',
      title: 'Global Corporate Registry Indexing',
      desc: 'Continuous real-time ingestion of company filings, business registrations, SEC disclosures, and corporate structural changes across 190+ jurisdictions.',
    },
    {
      num: '02',
      title: 'DNS & Active MX Record Validation',
      desc: 'Real-time DNS interrogation confirming active receiving mail servers, validating SPF, DKIM, and DMARC parameters before testing inboxes.',
    },
    {
      num: '03',
      title: 'Live SMTP Socket Handshake Ping',
      desc: 'Our validation engine connects directly to the target recipient mail server, performing an EHLO/RCPT TO handshake without transmitting actual emails.',
    },
    {
      num: '04',
      title: 'Catch-All Domain Disambiguation',
      desc: 'Advanced statistical algorithms resolve difficult catch-all servers by comparing historical deliverability telemetry across millions of peer transactions.',
    },
    {
      num: '05',
      title: 'Mobile Carrier HLR Direct Line Ping',
      desc: 'Direct mobile phone numbers are checked via Home Location Register (HLR) queries to confirm subscriber status, roaming state, and active carrier network.',
    },
    {
      num: '06',
      title: 'Human-in-the-Loop Analyst Verification',
      desc: 'Dedicated research analysts manually review C-suite executive changes, corporate board appointments, and M&A leadership reorganizations.',
    },
    {
      num: '07',
      title: 'GDPR & CCPA Suppression Screening',
      desc: 'All data is screened against global Do-Not-Call (DNC) lists, corporate opt-out directories, and European Article 14 transparency registries.',
    },
    {
      num: '08',
      title: 'Rolling 30-Day Freshness Lifecycle',
      desc: 'Every single record in our 75M+ database is scheduled for mandatory re-verification every 30 days to systematically combat natural data decay.',
    },
    {
      num: '09',
      title: '1:1 Automated Bounce Replacement SLA',
      desc: 'We stand behind our data with a contractual 95%+ deliverability guarantee. Any hard bounce within 14 days is automatically replaced with fresh credits.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Julian Thorne',
      role: 'Chief Executive Officer & Co-Founder',
      bio: 'Former VP of Revenue Operations at Oracle and Snowflake. 18 years optimizing enterprise sales data architectures and B2B go-to-market pipelines.',
    },
    {
      name: 'Dr. Aris Thorne-Vance',
      role: 'Chief Technology Officer & Head of Data Engineering',
      bio: 'PhD in Distributed Systems from Carnegie Mellon. Former principal engineer architecting large-scale graph databases and real-time telecom verification protocols.',
    },
    {
      name: 'Sophia Lindqvist',
      role: 'Chief Privacy Officer & Legal Counsel',
      bio: 'Specialist in European Data Protection (CIPP/E, CIPM) with extensive background counseling Fortune 500 enterprises on cross-border GDPR and CCPA data transfers.',
    },
    {
      name: 'Marcus Sterling',
      role: 'VP of Customer Success & Strategic Accounts',
      bio: 'Experienced sales enablement leader who has helped 400+ outbound B2B teams implement multi-threaded account-based marketing workflows.',
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-900">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Vanguard B2B</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              The Mission for Uncompromising B2B Data Accuracy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We founded Vanguard B2B with a singular conviction: sales development teams shouldn't spend half their working lives dealing with 30% bounce rates, broken phone trees, and outdated directory scraps.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STORY & TEAM PHOTO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Our Origin
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineered by Sales Leaders, Built by Data Scientists
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In 2021, our founders were leading a 40-person enterprise SDR team. Despite paying six-figure annual contracts to legacy contact vendors, their bounce rates hovered above 22%, phone connection rates were under 5%, and secondary outbound domains were repeatedly burned by mailbox providers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We realized the legacy data industry was built on a broken model: mass web scraping with quarterly batch updates that ignored the reality of modern 30% annual workforce turnover.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Vanguard B2B was engineered from the ground up as a continuous verification pipeline. By combining live SMTP handshakes, carrier HLR mobile lookup, and algorithmic catch-all disambiguation, we deliver the cleanest, most reliable B2B contact intelligence in the enterprise ecosystem.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div>
                <div className="text-2xl font-extrabold text-slate-900">75M+</div>
                <div className="text-xs text-slate-500">Verified Profiles</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-extrabold text-slate-900">190+</div>
                <div className="text-xs text-slate-500">Countries Covered</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-extrabold text-slate-900">95%+</div>
                <div className="text-xs text-slate-500">Contractual SLA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
              <img
                src="/src/assets/images/about_team_office_1791273524506.jpg"
                alt="Vanguard B2B engineering and research team headquarters"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-950 text-white flex items-center justify-between text-xs">
                <span>Vanguard B2B Global Data Operations HQ</span>
                <span className="text-slate-400">San Francisco · London · Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPRIETARY 9-STEP WATERFALL VERIFICATION METHODOLOGY */}
      <section className="bg-slate-100/70 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              The Technology Behind The 95% SLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our 9-Step Waterfall Verification Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              How we eliminate bounces, bypass gatekeepers, and ensure total regulatory compliance before any record enters your export.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verificationSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    STEP {step.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRIVACY, SECURITY & COMPLIANCE FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-900 mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Total Legal & Regulatory Compliance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Data Privacy Built Into Every API Call
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              We operate exclusively in the B2B commercial intelligence space. We never harvest or sell consumer, medical, or private personal data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>GDPR Article 6</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All European business contacts are processed under Legitimate Interest for commercial communications relevant to professional responsibilities.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CCPA & CPRA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict adherence to California consumer and employee privacy statutes with automated 24-hour Right to Opt-Out honoring.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>SOC 2 Type II</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Independently audited controls governing security, availability, and processing integrity across our data warehouse infrastructure.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-emerald-400" />
                <span>Global Suppression</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time synchronization against global national Do-Not-Call (DNC) registries, Robinson lists, and internal exclusion requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Executive Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Experienced B2B Data & Revenue Architects
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Led by veterans from Oracle, Snowflake, and enterprise compliance practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((leader, lidx) => (
            <div
              key={lidx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                {leader.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{leader.name}</h3>
                <div className="text-xs font-semibold text-blue-600 mt-0.5">
                  {leader.role}
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Experience the Difference of Verified Outbound Data
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
            Get 25 complimentary verified contacts tailored to your exact ICP and benchmark our deliverability directly against your current data source.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={onRequestSample}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Request Free Benchmark Sample
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
