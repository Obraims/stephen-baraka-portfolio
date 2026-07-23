import React from "react";
import { motion } from "motion/react";
import { Compass, Landmark, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export default function FinancialIdentityPhilosophy() {
  return (
    <section 
      id="philosophy" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5" />
            <span>Positioning & Philosophy</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Engineering at the Intersection of Finance & Technology
          </h2>

          <p className="text-stone-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            How I approach software architecture, financial systems development, and real-world digital solutions.
          </p>
        </div>

        {/* 2-Column Grid: My Engineering Philosophy vs Why Financial Software? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: My Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-5"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                My Engineering Philosophy
              </h3>
            </div>

            <div className="space-y-3 text-xs text-stone-600 dark:text-slate-300 leading-relaxed">
              <div className="p-3.5 bg-stone-50 dark:bg-slate-800/50 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                <strong className="text-stone-900 dark:text-white font-mono block mb-1">1. Mathematical Correctness & Zero Errors</strong>
                In financial systems, floating-point rounding errors or unhandled edge cases mean lost revenue. I prioritize exact integer calculations and strict type safety.
              </div>

              <div className="p-3.5 bg-stone-50 dark:bg-slate-800/50 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                <strong className="text-stone-900 dark:text-white font-mono block mb-1">2. User-Centric Simplicity</strong>
                Financial software shouldn't feel bloated or intimidating. Clean user interfaces, fast feedback loops, and intuitive data visualizations lead to better decisions.
              </div>

              <div className="p-3.5 bg-stone-50 dark:bg-slate-800/50 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                <strong className="text-stone-900 dark:text-white font-mono block mb-1">3. Maintainable & Pragmatic Code</strong>
                I focus on writing clean, modular TypeScript and React code that is easy to audit, test, scale, and maintain long-term.
              </div>
            </div>
          </motion.div>

          {/* Column 2: Why Financial Software? */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-5"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                Why Financial Software?
              </h3>
            </div>

            <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              Every business, institution, and individual relies on financial systems. Yet many existing accounting tools are slow, outdated, and difficult to use.
            </p>

            <div className="space-y-3 text-xs text-stone-600 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Bridge the Knowledge Gap:</strong> Most developers don't understand GAAP double-entry accounting rules, and most accountants don't write code. I bridge both worlds.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Automate Repetitive Workflows:</strong> From automated reconciliation to dynamic ledger visualization, software eliminates manual data entry errors.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>High-Impact Specialization:</strong> Building software for FinTech, banking, business applications, and automation delivers measurable business value.</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
