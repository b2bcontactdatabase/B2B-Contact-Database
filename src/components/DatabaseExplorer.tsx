import React, { useState, useMemo } from 'react';
import { SAMPLE_CONTACTS } from '../data/contactData';
import { B2BContact } from '../types';
import { Search, Filter, Download, Check, ShieldCheck, Phone, Mail, Building, Layers, Eye, EyeOff } from 'lucide-react';

interface DatabaseExplorerProps {
  onRequestSample: () => void;
}

export const DatabaseExplorer: React.FC<DatabaseExplorerProps> = ({ onRequestSample }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedSeniority, setSelectedSeniority] = useState<string>('All');
  const [unmaskedIds, setUnmaskedIds] = useState<Record<string, boolean>>({});
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const industries = [
    'All',
    'Enterprise Software',
    'Healthcare & MedTech',
    'Financial Services',
    'Manufacturing & OEM',
    'Logistics & Supply',
    'Professional Services',
  ];

  const seniorities = ['All', 'C-Suite', 'VP', 'Director'];

  const filteredContacts = useMemo(() => {
    return SAMPLE_CONTACTS.filter((contact) => {
      const matchesIndustry =
        selectedIndustry === 'All' || contact.industry === selectedIndustry;
      const matchesSeniority =
        selectedSeniority === 'All' || contact.seniority === selectedSeniority;
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        !query ||
        contact.fullName.toLowerCase().includes(query) ||
        contact.companyName.toLowerCase().includes(query) ||
        contact.jobTitle.toLowerCase().includes(query) ||
        contact.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesIndustry && matchesSeniority && matchesQuery;
    });
  }, [searchQuery, selectedIndustry, selectedSeniority]);

  // Scaled live database count calculation to illustrate real database scale
  const simulatedTotalCount = useMemo(() => {
    const baseTotal = 75240000;
    let factor = 1.0;
    if (selectedIndustry !== 'All') factor *= 0.16;
    if (selectedSeniority !== 'All') factor *= 0.28;
    if (searchQuery) factor *= 0.05;
    return Math.floor(baseTotal * factor).toLocaleString();
  }, [selectedIndustry, selectedSeniority, searchQuery]);

  const toggleUnmask = (id: string) => {
    setUnmaskedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Real client-side CSV download
  const handleExportCSV = () => {
    const headers = [
      'Full Name',
      'Job Title',
      'Seniority',
      'Company Name',
      'Industry',
      'Location',
      'Work Email',
      'Direct Phone',
      'Company Revenue',
      'Company Size',
      'Tech Stack',
      'Verification Score',
    ];

    const rows = filteredContacts.map((c) => [
      `"${c.fullName}"`,
      `"${c.jobTitle}"`,
      `"${c.seniority}"`,
      `"${c.companyName}"`,
      `"${c.industry}"`,
      `"${c.location}, ${c.country}"`,
      `"${c.email}"`,
      `"${c.directPhone}"`,
      `"${c.revenue}"`,
      `"${c.companySize}"`,
      `"${c.technologies.join('; ')}"`,
      `"${c.verificationScore}%"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `vanguard_b2b_verified_contacts_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Header bar of the explorer */}
      <div className="bg-slate-900 p-6 sm:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Contact Database Explorer
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Instant Prospect & Direct Dial Lookup
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Query 75M+ verified B2B decision-makers. Filter by industry, seniority, company size, and installed software tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold shadow-sm transition-all whitespace-nowrap"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Sample Exported!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Sample CSV</span>
                </>
              )}
            </button>
            <button
              onClick={onRequestSample}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all whitespace-nowrap"
            >
              <span>Unlock 75M+ Records</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search box */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, company, title, or tech (e.g. Snowflake)..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Industry Filter */}
          <div className="md:col-span-4 relative">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-800/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind} className="bg-slate-900 text-white">
                  Industry: {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Seniority Filter */}
          <div className="md:col-span-3 relative">
            <select
              value={selectedSeniority}
              onChange={(e) => setSelectedSeniority(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-800/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none"
            >
              {seniorities.map((sen) => (
                <option key={sen} value={sen} className="bg-slate-900 text-white">
                  Level: {sen}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count indicator */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <span>Estimated Matches in Global Base:</span>
            <span className="font-semibold text-blue-400 tabular-nums">
              {simulatedTotalCount} contacts
            </span>
          </div>
          <div>
            <span>Showing verified preview records ({filteredContacts.length} available)</span>
          </div>
        </div>
      </div>

      {/* Table view */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
              <th className="py-3 px-4">Contact & Title</th>
              <th className="py-3 px-4">Company & Revenue</th>
              <th className="py-3 px-4">Direct Contact Data</th>
              <th className="py-3 px-4">Verified Tech Stack</th>
              <th className="py-3 px-4 text-right">Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredContacts.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500">
                  <div className="max-w-xs mx-auto space-y-2">
                    <Filter className="w-8 h-8 mx-auto text-slate-400" />
                    <p className="text-sm font-medium text-slate-700">No records match your filters</p>
                    <p className="text-xs text-slate-500">
                      Try resetting your search query or selecting a different industry.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedIndustry('All');
                        setSelectedSeniority('All');
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-medium"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              filteredContacts.map((contact) => {
                const isUnmasked = !!unmaskedIds[contact.id];
                const displayEmail = isUnmasked
                  ? contact.email
                  : contact.email.replace(/(.{2})(.*)(@.*)/, '$1••••••$3');
                const displayPhone = isUnmasked
                  ? contact.directPhone
                  : contact.directPhone.replace(/(.{7})(.*)/, '$1••-••••');

                return (
                  <tr key={contact.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Contact & Title */}
                    <td className="py-4 px-4 align-top">
                      <div className="font-semibold text-slate-900 text-sm">
                        {contact.fullName}
                      </div>
                      <div className="text-slate-600 font-medium">{contact.jobTitle}</div>
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1 text-[11px]">
                        <span>{contact.seniority}</span>
                        <span>·</span>
                        <span>{contact.department}</span>
                      </div>
                    </td>

                    {/* Company & Industry */}
                    <td className="py-4 px-4 align-top">
                      <div className="font-medium text-slate-900 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{contact.companyName}</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        {contact.industry}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1 text-[11px]">
                        <span>{contact.location}</span>
                        <span>·</span>
                        <span className="font-semibold text-slate-600">{contact.revenue}</span>
                        <span>·</span>
                        <span>{contact.companySize} emp</span>
                      </div>
                    </td>

                    {/* Direct Contact Data */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 font-mono text-slate-800">
                          <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate max-w-[200px]">{displayEmail}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-slate-800">
                          <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{displayPhone}</span>
                        </div>
                        <button
                          onClick={() => toggleUnmask(contact.id)}
                          className="text-[11px] text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors"
                        >
                          {isUnmasked ? (
                            <>
                              <EyeOff className="w-3 h-3" /> Hide contact details
                            </>
                          ) : (
                            <>
                              <Eye className="w-3 h-3" /> Unmask verified data
                            </>
                          )}
                        </button>
                      </div>
                    </td>

                    {/* Technographics */}
                    <td className="py-4 px-4 align-top">
                      <div className="flex flex-wrap gap-1 max-w-[210px]">
                        {contact.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/60 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Verification Score & Date */}
                    <td className="py-4 px-4 align-top text-right">
                      <div className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="tabular-nums">{contact.verificationScore}% Deliverability</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {contact.lastVerifiedDate}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Explorer Bottom Bar */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <p className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All contacts screened under GDPR Article 6 & CCPA compliance standards.</span>
        </p>
        <button
          onClick={onRequestSample}
          className="font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
        >
          <span>Need a customized list of 5,000+ verified prospects? Request custom build →</span>
        </button>
      </div>
    </div>
  );
};
