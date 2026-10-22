import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  ShieldCheck, 
  FileDown, 
  Eye, 
  X
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <span>05 // INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & Accreditations
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Multi-cloud and automation credentials validated by official examinations from AWS, Oracle, Microsoft, and Automation Anywhere.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header with Issuer & Date */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Verification & Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.verificationNote}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer with Verified Proof buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Issued: {cert.issueDate}
                </span>

                <div className="flex items-center gap-2">
                  {cert.badgeUrl && (
                    <button
                      onClick={() => setPreviewCert(cert)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-300 text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Badge</span>
                    </button>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-medium transition-colors"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Certificate PDF</span>
                    </a>
                  )}

                  {!cert.badgeUrl && !cert.pdfUrl && (
                    <span className="text-[11px] font-mono text-slate-500">
                      Exam Code: {cert.code}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Badge Preview Modal */}
        {previewCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
            onClick={() => setPreviewCert(null)}
          >
            <div 
              className="relative max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-sm">{previewCert.title}</h3>
                <button 
                  onClick={() => setPreviewCert(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 flex justify-center">
                {previewCert.badgeUrl && (
                  <img
                    src={previewCert.badgeUrl}
                    alt={previewCert.title}
                    className="max-h-72 object-contain rounded-xl border border-slate-700"
                  />
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>Issuer: {previewCert.issuer}</span>
                {previewCert.pdfUrl && (
                  <a
                    href={previewCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Open Certificate PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
