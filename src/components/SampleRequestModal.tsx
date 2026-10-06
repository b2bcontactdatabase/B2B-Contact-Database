import React, { useState } from 'react';
import { X, CheckCircle2, Download, ShieldCheck, ArrowRight, Database } from 'lucide-react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('Enterprise Software');
  const [targetRole, setTargetRole] = useState('C-Suite & VP');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  const handleInstantDownloadSample = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [
        'Full Name,Job Title,Company,Industry,Work Email,Direct Phone,Location,Verification Confidence',
        'Elena Rostova,Chief Revenue Officer,CloudScale Global,Enterprise Software,elena.rostova@cloudscale-global.com,+1 (415) 890-4122,San Francisco CA,99%',
        'Marcus Vance,VP Enterprise Sales,Apex Health,Healthcare & MedTech,m.vance@apexhealthsystems.org,+1 (617) 554-9103,Boston MA,98%',
        'Henri de Montfort,Chief Procurement Officer,EuroTrans Logistics,Logistics & Supply,h.demontfort@eurotrans-group.eu,+31 10 492 8820,Rotterdam NL,97%',
        'Kavita Patel,VP Technology Infrastructure,FinNova Capital,Financial Services,kavita.patel@finnovacapital.co.uk,+44 20 7946 0831,London UK,99%',
        'David Stirling,Managing Director Advisory,Vanguard Strategy,Professional Services,david.stirling@vanguardadvisory.com,+1 (212) 789-2045,New York NY,100%',
      ].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `vanguard_b2b_verified_custom_sample.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-700 transition-colors rounded-lg hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Database className="w-4 h-4" />
              <span>Complimentary Verified Dataset</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Request Your Custom B2B Sample
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Receive 25 verified records matching your exact Ideal Customer Profile (ICP) including direct dials and 95%+ verified work emails.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.jenkins@company.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Growth Inc."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Target Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  >
                    <option value="Enterprise Software">Enterprise Software</option>
                    <option value="Healthcare & MedTech">Healthcare & MedTech</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Manufacturing & OEM">Manufacturing & OEM</option>
                    <option value="Logistics & Supply">Logistics & Supply</option>
                    <option value="Professional Services">Professional Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Target Seniority
                  </label>
                  <select
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  >
                    <option value="C-Suite & VP">C-Suite & VP</option>
                    <option value="Director Level">Director Level</option>
                    <option value="Head of Department">Head of Department</option>
                    <option value="Manager & Team Leads">Manager & Team Leads</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Generate Custom Verified Sample</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strictly confidential. No credit card required.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Sample Generated Successfully!
              </h3>
              <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. We prepared verified sample records matching <span className="font-semibold text-slate-900">{industry}</span> ({targetRole}) for <span className="font-semibold text-slate-900">{company}</span>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Deliverability Confidence:</span>
                <span className="font-semibold text-emerald-600">98.4% Guaranteed</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Direct Dial Availability:</span>
                <span className="font-semibold text-blue-600">100% Mobile / Desk</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Format:</span>
                <span className="font-mono text-slate-700">CSV (Standard CRM Compatible)</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleInstantDownloadSample}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample CSV Now</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Done / Return to Browse
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
