import React from "react";
import { motion } from "motion/react";
import { Code, Cpu, PieChart, Wrench } from "lucide-react";

interface SkillItem {
  name: string;
  desc: string;
}

interface Category {
  name: string;
  icon: any;
  accentColor: string;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: Category[] = [
    {
      name: "Frontend Engineering",
      icon: Code,
      accentColor: "text-indigo-600 dark:text-indigo-400",
      skills: [
        { name: "React 19 & Vite", desc: "Building fast, reactive single-page interfaces with clean component architectures." },
        { name: "TypeScript", desc: "Strict static typing, interfaces, and compile-time bug prevention." },
        { name: "Tailwind CSS v4", desc: "Responsive utility-first styling and custom design systems." },
        { name: "Framer Motion", desc: "Hardware-accelerated micro-animations and smooth layout transitions." },
        { name: "Recharts & D3.js", desc: "Transforming raw financial datasets into intuitive interactive visual charts." }
      ]
    },
    {
      name: "Backend & Databases",
      icon: Cpu,
      accentColor: "text-emerald-600 dark:text-emerald-400",
      skills: [
        { name: "Node.js & Express", desc: "Designing REST APIs, middleware routines, and server microservices." },
        { name: "Go (Golang)", desc: "High-concurrency API handlers and performant backend services." },
        { name: "PostgreSQL", desc: "Normalized relational schemas (3NF), queries, and data integrity." },
        { name: "JWT Auth & Security", desc: "Stateless user authentication using secure access/refresh token patterns." },
        { name: "REST API Design", desc: "Structured endpoints with Zod validation, error handling, and documentation." }
      ]
    },
    {
      name: "Finance & Accounting IT",
      icon: PieChart,
      accentColor: "text-amber-600 dark:text-amber-400",
      skills: [
        { name: "Double-Entry Bookkeeping", desc: "Strict GAAP ledger reconciliation where Assets = Liabilities + Equity." },
        { name: "Kenya 16% VAT Tax Math", desc: "Integer-based arithmetic algorithms for calculating pre-tax and output VAT." },
        { name: "Financial Reporting", desc: "Generating automated income statements, balance sheets, and cash flow views." },
        { name: "System Auditing", desc: "Verifying audit logs, transaction histories, and internal controls." },
        { name: "Amortization Math", desc: "Calculating loan schedules and debt service without floating-point errors." }
      ]
    },
    {
      name: "Tools & DevOps",
      icon: Wrench,
      accentColor: "text-violet-600 dark:text-violet-400",
      skills: [
        { name: "Docker Containers", desc: "Packaging full-stack services into isolated container environments." },
        { name: "Git & GitHub", desc: "Version control, pull-request workflows, and CI/CD pipelines." },
        { name: "Python Scripting", desc: "Automation scripts, data manipulation, and web scraping utilities." },
        { name: "Linux & Shell", desc: "Command line administration, bash scripts, and server deployment." },
        { name: "Vercel & Cloud", desc: "Deploying and managing production frontend and serverless environments." }
      ]
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
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
            Combining software engineering proficiency with academic knowledge in finance and IT.
          </p>
        </div>

        {/* 4 Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08, duration: 0.4 }}
                className="p-6 bg-stone-50/60 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/80 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className={`p-2 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 ${category.accentColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-stone-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="p-3 bg-white dark:bg-slate-900/80 border border-stone-200/60 dark:border-slate-700/60 rounded-xl"
                      >
                        <h4 className="text-xs font-mono font-bold text-stone-900 dark:text-slate-100">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-stone-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
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
