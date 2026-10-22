import React, { useState } from 'react';
import { 
  FileDown, 
  ExternalLink, 
  CheckCircle, 
  Copy, 
  FileText, 
  ShieldCheck, 
  Eye
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const copyResumeLink = () => {
    const url = window.location.origin + PERSONAL_INFO.resumeUrl;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="resume" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span>06 // CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official Resume & Documentation
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Verified single source of truth containing academic credentials, project methodologies, and technical competencies.
          </p>
        </div>

        {/* Resume Showcase Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Document Icon & Status (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="w-20 h-24 rounded-xl bg-slate-900 border-2 border-slate-700 flex flex-col items-center justify-center relative shadow-lg group">
                <FileText className="w-10 h-10 text-blue-400" />
                <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase font-bold">PDF • 68 KB</span>
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5" />
                </span>
              </div>

              <h4 className="mt-4 font-bold text-white text-sm">Resume_Paavan_Kumar.pdf</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Authentic Attached File</p>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                100% Authentic Source
              </div>
            </div>

            {/* Information & Action Buttons (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Thota Paavan Kumar — Resume Overview
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Tailored for technical recruiters, hiring managers, and interview panels evaluating candidates for <strong>Java Developer, Java Full Stack Developer, and Software Engineer</strong> roles.
                </p>
              </div>

              {/* What is in this resume? */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>B.Tech CSE (8.5 CGPA, KLU '26)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Core Java, DSA & OOP Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Sub-second Relational MySQL Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>4 Multi-Cloud & Tech Certifications</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Resume_Paavan_Kumar.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Open in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <button
                  onClick={copyResumeLink}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm border border-slate-800 transition-colors"
                  title="Copy direct download link"
                >
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{copiedLink ? "Link Copied!" : "Copy Link"}</span>
                </button>
              </div>

              {/* Guarantee */}
              <p className="text-[11px] text-slate-400 font-mono pt-1">
                * Downloads the real, original PDF resume attached to this profile.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
