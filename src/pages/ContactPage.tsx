import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download,
  Building,
} from 'lucide-react';

interface ContactPageProps {
  onRequestSample: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRequestSample }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    company: '',
    companySize: '100-500 employees',
    industry: 'Enterprise Software',
    seniority: 'C-Suite & VP',
    targetVolume: '10,000 - 25,000 contacts',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.workEmail && formData.firstName) {
      setSubmitted(true);
    }
  };

  const offices = [
    {
      city: 'San Francisco (Global HQ)',
      address: '100 Montgomery Street, Suite 1800',
      region: 'San Francisco, CA 94104, United States',
      phone: '+1 (415) 890-4100',
      email: 'sf.desk@vanguardb2b.com',
      hours: 'Mon - Fri, 8:00 AM - 6:00 PM PST',
    },
    {
      city: 'New York (Midtown)',
      address: '350 Fifth Avenue, 42nd Floor',
      region: 'New York, NY 10118, United States',
      phone: '+1 (212) 789-2040',
      email: 'ny.desk@vanguardb2b.com',
      hours: 'Mon - Fri, 8:00 AM - 6:00 PM EST',
    },
    {
      city: 'London (EMEA Operations)',
      address: '25 Bank Street, Canary Wharf',
      region: 'London E14 5JP, United Kingdom',
      phone: '+44 20 7946 0800',
      email: 'emea.desk@vanguardb2b.com',
      hours: 'Mon - Fri, 8:30 AM - 6:00 PM GMT',
    },
    {
      city: 'Singapore (APAC Hub)',
      address: 'Marina Bay Financial Centre, Tower 2',
      region: 'Singapore 018983',
      phone: '+65 6789 0123',
      email: 'apac.desk@vanguardb2b.com',
      hours: 'Mon - Fri, 9:00 AM - 6:00 PM SGT',
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HEADER */}
      <section className="bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-900">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Enterprise Sales & Custom Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Connect With a B2B Data Specialist
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need to license 50,000 verified decision-maker records, audit your existing CRM database for data decay, or commission a custom research build, our senior analysts respond within 15 minutes during market hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & DIRECT CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {!submitted ? (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Request Custom Prospect Dataset or Schedule Demo
                </h2>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Fill in your target Ideal Customer Profile (ICP) parameters below to receive sample records and custom volume pricing.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Marcus"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Vance"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="m.vance@company.com"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Direct Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Enterprises Ltd"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Company Headcount
                      </label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      >
                        <option value="1-50 employees">1 - 50 employees</option>
                        <option value="50-250 employees">50 - 250 employees</option>
                        <option value="250-1,000 employees">250 - 1,000 employees</option>
                        <option value="1,000-5,000 employees">1,000 - 5,000 employees</option>
                        <option value="5,000+ employees">5,000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Target Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      >
                        <option value="Enterprise Software">Enterprise Software & SaaS</option>
                        <option value="Healthcare & MedTech">Healthcare & MedTech</option>
                        <option value="Financial Services">Financial Services & FinTech</option>
                        <option value="Manufacturing & OEM">Manufacturing & OEM</option>
                        <option value="Logistics & Supply">Logistics & Supply Chain</option>
                        <option value="Professional Services">Professional Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Target Dataset Volume
                      </label>
                      <select
                        value={formData.targetVolume}
                        onChange={(e) => setFormData({ ...formData, targetVolume: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                      >
                        <option value="2,500 contacts">Starter (2,500 contacts)</option>
                        <option value="10,000 - 25,000 contacts">Growth (10,000 - 25,000 contacts)</option>
                        <option value="50,000+ contacts">Enterprise (50,000+ contacts)</option>
                        <option value="Custom Bespoke Roster">Custom Bespoke Research Roster</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Specific Criteria or Installed Technologies (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We require VPs of Supply Chain at companies using SAP with revenue > $50M in the US and Germany..."
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry & Receive Custom Sample</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Non-disclosure guaranteed. Strict adherence to GDPR & CCPA.</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-5">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Request Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.firstName} {formData.lastName}</span>. A senior enterprise data specialist has been assigned to your request for <span className="font-semibold text-slate-900">{formData.company}</span>.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-left space-y-2 text-xs max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Routing Queue:</span>
                    <span className="font-mono font-semibold text-blue-600">Enterprise Data Solutions Desk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">SLA Response Window:</span>
                    <span className="font-semibold text-slate-900">&lt; 15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Segment:</span>
                    <span className="font-semibold text-slate-900">{formData.industry} ({formData.targetVolume})</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Submit another inquiry or update parameters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Desk Details & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 space-y-5 shadow-lg">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Enterprise Direct Desk
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect immediately with our solutions team for live dataset scoping, API sandbox access, or customized MSAs.
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Enterprise Inquiries</div>
                    <a
                      href="mailto:enterprise@vanguardb2b.com"
                      className="text-slate-300 hover:text-blue-400 font-mono transition-colors"
                    >
                      enterprise@vanguardb2b.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Toll-Free Direct Sales Line</div>
                    <span className="font-mono text-slate-300">+1 (800) 492-8820</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Live Support & Scoping Desk</div>
                    <div className="text-slate-400">24 hours / day, Monday through Friday</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onRequestSample}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Instant 25-Record Sample Download</span>
                </button>
              </div>
            </div>

            {/* SLA Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3 shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Our Contractual Commitments
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>95%+ Email Deliverability backed by 1:1 automated credit replacement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Carrier-tested direct dials with active line verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% compliant with GDPR Art. 6 legitimate interest & CCPA.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL OFFICE LOCATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Global Footprint
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Worldwide Data Operations & Client Hubs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, oidx) => (
            <div
              key={oidx}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">{office.city}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {office.address}
                <br />
                {office.region}
              </p>
              <div className="border-t border-slate-100 pt-3 space-y-1 text-[11px] text-slate-500">
                <div className="font-mono text-slate-700">{office.phone}</div>
                <div>{office.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
