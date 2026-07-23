import React from "react";
import { motion } from "motion/react";
import { Hammer, Sparkles, ArrowUpRight, CheckCircle2, Target } from "lucide-react";

export default function WhatImBuilding() {
  return (
    <section 
      id="focus" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider">
            <Target className="h-3.5 w-3.5" />
            <span>Current Focus & Vision</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Active Development & Future Vision
          </h2>

          <p className="text-stone-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            What I'm actively working on today, and where I am aiming to make an impact tomorrow.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: What I'm Building */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 bg-stone-50/70 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs space-y-5"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                <Hammer className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  Active Software Projects
                </span>
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                  What I'm Building
                </h3>
              </div>
            </div>

            <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              Actively developing software tools that combine web performance, API integration, and practical business utility:
            </p>

            <ul className="space-y-3 text-xs text-stone-700 dark:text-slate-300 font-sans">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span><strong>Gitvora Platform Enhancements:</strong> Expanding real-time repository analytics, automated PDF exporter, and custom developer themes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span><strong>FinTech & Ledger Visualizers:</strong> Building lightweight browser-side financial tools for automatic reconciliation and statement generation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span><strong>Developer CLI Tools:</strong> Developing Node.js & Python automation scripts for workflow efficiency and data processing.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Looking Ahead */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 bg-stone-50/70 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs space-y-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-800/60">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider block">
                    Future Roadmap
                  </span>
                  <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                    Looking Ahead
                  </h3>
                </div>
              </div>

              <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                My long-term mission is to build financial technology software that simplifies business management, empowers individuals, and drives financial clarity across Africa and globally.
              </p>

              <div className="space-y-2.5 text-xs text-stone-700 dark:text-slate-300">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                  <strong className="text-stone-900 dark:text-white font-mono block mb-0.5">FinTech & Business Applications</strong>
                  Building scalable web platforms for payment processing, automated accounting, and financial reporting.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                  <strong className="text-stone-900 dark:text-white font-mono block mb-0.5">Engineering Excellence</strong>
                  Collaborating with innovative software teams to engineer high-throughput APIs, cloud systems, and user-first web applications.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200/60 dark:border-slate-700/60">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-xl transition shadow-xs"
              >
                Connect With Me <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
