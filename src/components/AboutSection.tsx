import React from 'react';
import { Code2, Database, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Technical background, core engineering strengths, and career orientation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a final-year Computer Science Engineering student at <strong className="text-white">Koneru Lakshmaiah University (KLU)</strong>, maintaining an <strong className="text-emerald-400">8.5 CGPA</strong> with an academic specialization in Data Science and Big Data Analytics.
            </p>

            <p>
              My primary technical focus is on <strong className="text-white">Java backend systems, algorithmic problem solving with Data Structures, and full-stack web engineering</strong>. I approach software development with an emphasis on data integrity, clear separation of concerns, and query performance—exemplified in building relational databases with normalized schemas and sub-second retrieval guarantees.
            </p>

            <p>
              Alongside core software engineering, I have pursued rigorous multi-cloud literacy, earning 4 industry-recognized credentials: <strong className="text-white">AWS Certified Cloud Practitioner, Oracle Cloud Infrastructure Foundations Associate, Microsoft Azure Fundamentals (AZ-900), and Automation Anywhere RPA</strong>. This diverse foundational exposure allows me to understand how software translates into production deployments, server architectures, and secure distributed environments.
            </p>

            <p>
              I am seeking an entry-level <strong className="text-white">Java Developer, Java Full Stack Developer, or Software Engineer</strong> role where I can contribute to production backends, collaborate with experienced engineering teams, and deliver robust software.
            </p>

            {/* Core Commitments Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block">Solid Foundation in DSA</strong>
                  <span className="text-slate-400">Proficient in Java Collections, time/space complexity analysis, and clean OOP principles.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block">Database & Query Tuning</strong>
                  <span className="text-slate-400">Hands-on relational modeling in MySQL & PostgreSQL with index-optimized queries.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block">Multi-Cloud Awareness</strong>
                  <span className="text-slate-400">Certified foundation across AWS, OCI, and Azure architectures and identity policies.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block">Fast & Disciplined Learner</strong>
                  <span className="text-slate-400">Demonstrated ability to acquire certifications and build full-stack apps independently.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Highlights & Technical Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                Technical Pillars
              </h3>

              <div className="space-y-4 text-xs">
                {/* Pillar 1 */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      Object-Oriented Java
                    </span>
                    <span className="text-blue-400 font-mono text-[11px]">Primary</span>
                  </div>
                  <p className="mt-1 text-slate-400 leading-relaxed">
                    Writing clean, maintainable modular code using encapsulation, inheritance, polymorphism, and Java Collections Framework.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-emerald-400" />
                      Relational Data Architecture
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px]">Proficient</span>
                  </div>
                  <p className="mt-1 text-slate-400 leading-relaxed">
                    Schema normalization up to 3NF, primary/foreign key constraint enforcement, and query optimization for high-throughput reads.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-400" />
                      Cloud Infrastructure Literacy
                    </span>
                    <span className="text-indigo-400 font-mono text-[11px]">4x Certified</span>
                  </div>
                  <p className="mt-1 text-slate-400 leading-relaxed">
                    Knowledge of security groups, IAM access policies, serverless compute, and object storage across AWS, Azure, and Oracle Cloud.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                >
                  <span>Connect for Opportunities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
