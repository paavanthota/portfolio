import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <span>04 // ACADEMIC RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Foundations
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Formal computer science engineering training, mathematical grounding, and coursework.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mt-12 space-y-8 relative">
          
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-800" />

          {EDUCATION_LIST.map((edu) => (
            <div 
              key={edu.institution}
              className="relative md:pl-20 group"
            >
              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-5 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-emerald-500 items-center justify-center text-emerald-400 shadow-md group-hover:scale-110 transition-transform">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all shadow-md">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <span className="inline-block text-xs font-mono text-emerald-400 font-semibold mb-1">
                      {edu.degree}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      {edu.field}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {edu.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Score Badge */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center sm:text-right shrink-0">
                    <span className="text-2xl font-black font-mono text-emerald-400 block leading-tight">
                      {edu.score}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                      {edu.scoreType}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Key Academic Highlights & Coursework
                  </h4>
                  <div className="space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
