import React from "react";
import { motion } from "motion/react";
import { Landmark, Database, Layers, Cpu } from "lucide-react";

export default function ArchitectSolve() {
  const specialties = [
    {
      id: "finance-systems",
      title: "Financial System Automation",
      code: "GAAP_BOOKS // TAX_MATH_ENGINE",
      desc: "Designing bespoke client-side ledger analyzers, double-entry GAAP solvers, recursive financial compliance checkers, and dynamic amortization formula parsers.",
      tags: ["GAAP / IFRS", "CSV_PARSER", "MATH.js"],
      icon: Landmark,
      accent: "from-sky-500/20 to-blue-600/10",
      iconBg: "bg-sky-500/10 text-sky-500 dark:bg-sky-950/50 dark:text-cyan-400 border-sky-500/20",
      hoverBorder: "hover:border-cyan-500/40",
      accentText: "text-cyan-600 dark:text-cyan-400"
    },
    {
      id: "backend-apis",
      title: "Resilient APIs & Auth Pools",
      code: "EXPRESS // AUTH_RBAC // PG_SQL",
      desc: "Engineering fast, multi-tenant controllers, security middleware with Helmet/CORS, transactional relational schemas, and highly index-optimized connection pools.",
      tags: ["JWT Token Pool", "Docker Nodes", "Postgres Migration"],
      icon: Database,
      accent: "from-emerald-500/20 to-teal-600/10",
      iconBg: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/40",
      accentText: "text-emerald-600 dark:text-emerald-400"
    },
    {
      id: "frontend-systems",
      title: "High-Fidelity Interface Systems",
      code: "REACT_19 // VITE_V4 // MOTION",
      desc: "Sculpting immersive dashboard environments using lightweight states, fluid micro-interactions, spring physics, and high-DPI custom geometric canvases.",
      tags: ["Spring Physics", "Lighthouse 100", "Strict Types"],
      icon: Layers,
      accent: "from-purple-500/20 to-violet-600/10",
      iconBg: "bg-purple-500/10 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400 border-purple-500/20",
      hoverBorder: "hover:border-purple-500/40",
      accentText: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section 
      id="architect" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider">
            <Cpu className="h-3.5 w-3.5" />
            <span>Core Specialties & Solutions</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            What I Architect & Solve
          </h2>

          <p className="text-stone-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Bridging the gap between empirical financial engineering and high-performance system designs. Here are the core architectures I build:
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 md:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 transition-all duration-300 shadow-xs ${item.hoverBorder} group relative overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className={`p-3.5 rounded-xl border w-fit ${item.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`text-xl font-bold font-display text-stone-900 dark:text-white mt-5 group-hover:${item.accentText} transition-colors`}>
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-stone-400 dark:text-slate-500 mt-1 font-semibold">
                    {item.code}
                  </p>

                  <p className="text-sm text-stone-600 dark:text-slate-300 mt-3 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-stone-100 dark:border-slate-800">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-stone-100 dark:bg-slate-950 px-2.5 py-1 rounded text-[10px] font-mono text-stone-600 dark:text-slate-400 border border-stone-200/60 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
