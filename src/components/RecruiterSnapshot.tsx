import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Mail, 
  Phone, 
  CheckCircle, 
  Briefcase, 
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterSnapshotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterSnapshot: React.FC<RecruiterSnapshotProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0e1424] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Recruiter 30-Second Snapshot
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready for Hire
                </span>
              </h2>
              <p className="text-xs text-slate-400">Condensed technical evaluation summary for hiring managers</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Candidate Overview */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-sm font-medium text-blue-400">{PERSONAL_INFO.role}</p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <span>Koneru Lakshmaiah University (2022–2026)</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">8.5 CGPA</span>
                <span>•</span>
                <span>India (Open to Relocation)</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume_Paavan_Kumar.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Recruiter Evaluation Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Column 1: Core Technical Competency */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Core Technical Skills
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Primary Language:</strong> Java (OOP, Collections, Multithreading, Exception Handling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Data Structures:</strong> Arrays, LinkedLists, Stacks, Queues, Trees, HashMaps, Algorithmic Problem Solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Full-Stack & Web:</strong> React, Node.js, Express.js, REST APIs, HTML5/CSS3</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Databases:</strong> MySQL (Relational Schema Design, Normalization, Query Optimization), PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Python & Analytics:</strong> Python, Pandas, NumPy, Matplotlib, Data Preprocessing</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Verifiable Proof of Work */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Proof of Execution
              </h4>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white block">1. Library Management System</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Java + MySQL application. Designed 4-table normalized relational schema; tuned queries to guarantee &lt; 1s data retrieval for 500+ records.
                  </span>
                </li>
                <li className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white block">2. Crop Classification in Hyperspectral Images</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Python + Deep Learning. Reduced data dimensionality by 40% via PCA across 10,000+ images; achieved 92% prediction accuracy.
                  </span>
                </li>
                <li className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-white block">3. LocalLens Civic Operations System</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Full-Stack MERN. 3-role platform (Citizen, Admin, Volunteer) with interactive Leaflet GPS pin-dropping and chronological audit trails.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications Bar */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-amber-400" />
              Verified Industry Certifications (4x Multi-Cloud)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="block font-semibold text-white text-[11px]">AWS Cloud</span>
                <span className="text-[10px] text-slate-400">Practitioner (CLF-C02)</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="block font-semibold text-white text-[11px]">Oracle OCI</span>
                <span className="text-[10px] text-slate-400">Foundations Assoc.</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="block font-semibold text-white text-[11px]">Microsoft Azure</span>
                <span className="text-[10px] text-slate-400">AZ-900 Fundamentals</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="block font-semibold text-white text-[11px]">Automation Anywhere</span>
                <span className="text-[10px] text-slate-400">RPA Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Contact & Next Step */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-200">Ready for Technical Screenings & Interviews</p>
              <p className="text-[11px] text-slate-400">Actively considering Java Developer, Full-Stack, and Software Engineer opportunities.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
              </button>

              <button
                onClick={copyPhone}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{copiedPhone ? "Copied Phone!" : "Copy Phone"}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Software%20Developer%20Role`}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30"
              >
                Email Directly
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Source: Official Resume of Thota Paavan Kumar</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white underline text-xs"
          >
            Close & Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
