import React from "react";
import { motion } from "motion/react";
import { Code, Cpu, Database, Cloud, Terminal, Sparkles, Wrench, Layers, Landmark } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: any;
  accentColor: string;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      name: "Languages",
      icon: Code,
      accentColor: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/50",
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"]
    },
    {
      name: "Frontend",
      icon: Layers,
      accentColor: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-50 dark:bg-cyan-950/50",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "Recharts"]
    },
    {
      name: "Backend",
      icon: Cpu,
      accentColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/50",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Middleware Routing"]
    },
    {
      name: "Databases",
      icon: Database,
      accentColor: "text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-50 dark:bg-amber-950/50",
      skills: ["PostgreSQL", "SQLite", "3NF Relational Schema Design", "Query Optimization"]
    },
    {
      name: "Financial Systems",
      icon: Landmark,
      accentColor: "text-purple-600 dark:text-purple-400 border-purple-500/20 bg-purple-50 dark:bg-purple-950/50",
      skills: ["Double-Entry Bookkeeping Math", "Financial Statements (Balance Sheet/Income)", "Integer Currency Arithmetic", "Business Logic"]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      accentColor: "text-violet-600 dark:text-violet-400 border-violet-500/20 bg-violet-50 dark:bg-violet-950/50",
      skills: ["Vercel", "Docker", "Git & GitHub", "Linux CLI", "Deployment Pipelines"]
    },
    {
      name: "Developer Tools",
      icon: Wrench,
      accentColor: "text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-50 dark:bg-blue-950/50",
      skills: ["VS Code", "Postman API Suite", "npm / pnpm", "Chrome DevTools", "Zod Validation"]
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
            <Wrench className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Technical Skills & Specializations
          </h2>
          <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
            Organized categories of tools, languages, and financial engineering capabilities I actively use.
          </p>
        </div>

        {/* Organized Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05, duration: 0.35 }}
                className="p-6 bg-stone-50/70 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/70 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2.5 rounded-xl border ${category.accentColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-stone-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-white dark:bg-slate-900/90 border border-stone-200/80 dark:border-slate-700/80 rounded-lg text-xs font-mono font-medium text-stone-700 dark:text-slate-300 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
