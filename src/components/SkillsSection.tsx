import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  BarChart3, 
  Wrench, 
  CheckCircle2, 
  Search,
  ShieldCheck
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-blue-400" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Layout: <Layout className="w-5 h-5 text-cyan-400" />,
    Database: <Database className="w-5 h-5 text-purple-400" />,
    Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-pink-400" />,
    Wrench: <Wrench className="w-5 h-5 text-indigo-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
  };

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchingSkills = category.skills.filter((skill) => {
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.details && skill.details.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (skill.level && skill.level.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });

    return {
      ...category,
      skills: matchingSkills
    };
  }).filter((category) => {
    if (selectedCategory !== 'all' && category.title !== selectedCategory) {
      return false;
    }
    return category.skills.length > 0;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills & Competencies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Strictly verified technologies from coursework, certifications, and hands-on implementations. No arbitrary percentage bars.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Java, SQL, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.title
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all shadow-md space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {iconMap[category.icon] || <Code2 className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-blue-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white tracking-tight">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-medium ${
                            skill.level === 'Primary' 
                              ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                              : skill.level === 'Certified'
                              ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.details && (
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {skill.details}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <ShieldCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-blue-400 hover:text-blue-300 underline font-medium"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
