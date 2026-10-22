import React, { useState } from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Phone, 
  CheckCircle, 
  Copy, 
  Terminal, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenRecruiterSnapshot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterSnapshot }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background radial gradients for subtle tech atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-slate-700/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Recruiter Information (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Java Developer & Software Engineer Roles
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                <span>Class of 2026</span>
                <span className="text-slate-600">•</span>
                <span className="text-blue-400 font-semibold">8.5 CGPA</span>
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-2.5 text-lg sm:text-xl font-medium text-gradient-cyan tracking-tight">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Recruiter-friendly bio summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              B.Tech Computer Science graduate specializing in <strong className="text-white font-medium">Data Science & Big Data Analytics</strong> at Koneru Lakshmaiah University (8.5 CGPA). Proficient in <strong className="text-white font-medium">Java, Data Structures, Python, React, Node.js, SQL</strong>, and multi-cloud architectures with <strong className="text-white font-medium">4 industry certifications</strong> (AWS, OCI, Azure, RPA).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume_Paavan_Kumar.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700/80 shadow-sm transition-all hover:border-slate-500"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterSnapshot}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/40 text-indigo-300 font-medium text-sm border border-indigo-500/30 transition-all"
                title="View condensed candidate summary"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>30s Recruiter Snapshot</span>
              </button>
            </div>

            {/* Contact Pills / Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              {/* Email */}
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* Phone */}
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all group"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-purple-400 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="block text-xl font-bold font-mono text-blue-400">8.5</span>
                <span className="text-xs text-slate-400 font-medium">B.Tech CGPA (KLU)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="block text-xl font-bold font-mono text-indigo-400">4x</span>
                <span className="text-xs text-slate-400 font-medium">Cloud Certifications</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="block text-xl font-bold font-mono text-emerald-400">&lt; 1.0s</span>
                <span className="text-xs text-slate-400 font-medium">DB Query Response</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="block text-xl font-bold font-mono text-violet-400">92%</span>
                <span className="text-xs text-slate-400 font-medium">Deep Learning Accuracy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Card & Technical Architecture Snippet (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md relative">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-2xl blur-lg opacity-70" />

              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Header with photo & status */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="relative">
                    <img
                      src="/paavan-profile.png"
                      alt={PERSONAL_INFO.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-600 shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xl';
                          fallback.innerText = 'PK';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" title="Actively Seeking Roles" />
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-base">Thota Paavan Kumar</h3>
                    <p className="text-xs text-slate-400">Software Developer Candidate</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        Java
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        React
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        SQL
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        AWS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architecture / Engineering Capability Card */}
                <div className="mt-4 bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      CandidateProfile.java
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Compiled
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] leading-relaxed">
                    <p><span className="text-purple-400">public class</span> <span className="text-yellow-300">SoftwareEngineer</span> &#123;</p>
                    <p className="pl-3"><span className="text-slate-400">// Core Competency Matrix</span></p>
                    <p className="pl-3"><span className="text-blue-400">String</span> primary = <span className="text-emerald-300">"Java, DSA, OOP, JDBC"</span>;</p>
                    <p className="pl-3"><span className="text-blue-400">String</span> web = <span className="text-emerald-300">"React, Node.js, REST APIs"</span>;</p>
                    <p className="pl-3"><span className="text-blue-400">String</span> db = <span className="text-emerald-300">"MySQL (4-tbl schema), PostgreSQL"</span>;</p>
                    <p className="pl-3"><span className="text-blue-400">String[]</span> certs = &#123;<span className="text-amber-300">"AWS"</span>, <span className="text-amber-300">"OCI"</span>, <span className="text-amber-300">"Azure"</span>, <span className="text-amber-300">"RPA"</span>&#125;;</p>
                    <p className="pl-3"><span className="text-blue-400">boolean</span> readyToRelocate = <span className="text-purple-400">true</span>;</p>
                    <p>&#125;</p>
                  </div>
                </div>

                {/* Key Strengths Checklist */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Proven record: 8.5 CGPA in CSE at KLU with 90% in intermediate.</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Real full-stack implementation experience in Java, Node.js, and React.</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>4 industry certifications across major cloud providers (AWS, Oracle, Azure).</span>
                  </div>
                </div>

                {/* Recruiter Evaluation helper */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Recruiter Verification:</span>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download="Resume_Paavan_Kumar.pdf"
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                  >
                    Download Source PDF <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
