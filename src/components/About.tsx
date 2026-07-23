import React from "react";
import { motion } from "motion/react";
import { Landmark, Code2, Sparkles, CheckCircle2, ShieldCheck, Layers, BookOpen } from "lucide-react";
import { personalInfo } from "../data";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800/80 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 text-cyan-400 text-xs font-mono font-semibold rounded-full border border-cyan-800/40 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Conceptual Foundation</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Engineering Software with Financial & Business Intelligence
          </h2>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            The Dual Accounting & IT Paradigm — Why bridging financial discipline and modern software engineering creates high-impact solutions.
          </p>
        </div>

        {/* Narrative & Paradigm Columns */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Human Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Why Financial Software Engineering?
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                I am pursuing a B.Sc. in Accounting & Finance with Information Technology at <strong>Maseno University</strong>. My education is not separate from my engineering — it is what makes my software development distinct.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Accounting principles enforce strict mathematical discipline: every debit must equal every credit, and floating-point rounding errors are unacceptable. By applying this financial rigor to software architecture, I build applications that are reliable, type-safe, and zero-error.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Conversely, software engineering elevates accounting by automating manual bookkeeping data entry, parsing complex financial ledgers in real-time, and rendering intuitive visual dashboards.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 mt-6">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-mono text-cyan-400 block uppercase font-bold">Accounting Rigor</span>
                <span className="text-xs text-slate-300 font-medium">GAAP Math & Zero Rounding Errors</span>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Engineering Speed</span>
                <span className="text-xs text-slate-300 font-medium">TypeScript & High-Throughput APIs</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: The Dual Accounting & IT Paradigm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  The Dual Accounting & IT Paradigm
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono mb-0.5">1. Financial Data Integrity</strong>
                    Integer minor-unit (cents) arithmetic guarantees zero floating-point calculation drift across transactions and tax calculations.
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono mb-0.5">2. Business Workflow Automation</strong>
                    Transforming manual paper-based financial workflows into automated web microservices and responsive dashboards.
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono mb-0.5">3. Pragmatic Full-Stack Engineering</strong>
                    Building clean React, Next.js, Node.js, and PostgreSQL software designed to solve concrete business problems.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between mt-4">
              <span>Maseno University Node</span>
              <span className="text-cyan-400 font-bold">B.Sc. Accounting & IT</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
