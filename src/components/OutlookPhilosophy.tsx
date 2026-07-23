import React from "react";
import { motion } from "motion/react";
import { Hammer, BookOpen, Compass, Briefcase, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function OutlookPhilosophy() {
  return (
    <section 
      id="philosophy" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        {/* SECTION 1: Currently Building & Learning Now */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Currently Building Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                <Hammer className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  Active Projects
                </span>
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                  Currently Building
                </h3>
              </div>
            </div>

            <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              Developing next-generation developer tooling and web platforms using Next.js 15, TypeScript, and modern AI SDKs for automated profile analytics and workflow automation.
            </p>

            <ul className="space-y-2 text-xs font-mono text-stone-700 dark:text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>Gitvora portfolio analytics enhancements & GitHub API integration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>Lightweight CLI developer tools and automation scripts in Node & Python</span>
              </li>
            </ul>
          </motion.div>

          {/* Learning Now Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Continuous Growth
                </span>
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                  Learning Now
                </h3>
              </div>
            </div>

            <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              Expanding my knowledge in AI agent frameworks, cloud infrastructure, performance optimization, and scalable system design patterns.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["AI Agent Tool Calling", "System Architecture", "Cloud Native (Docker/Vercel)", "Advanced PostgreSQL Querying"].map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 text-xs font-mono rounded-lg border border-stone-200 dark:border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* SECTION 2: Development Philosophy & What I'm Looking For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Development Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                  Core Values
                </span>
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                  Development Philosophy
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-600 dark:text-slate-300 leading-relaxed">
              <div className="p-3 bg-stone-50 dark:bg-slate-800/50 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                <strong className="text-stone-900 dark:text-white font-mono block mb-0.5">1. Solve Real Problems</strong>
                Software should make people's lives easier and solve actual pain points, not just demonstrate technology for its own sake.
              </div>

              <div className="p-3 bg-stone-50 dark:bg-slate-800/50 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                <strong className="text-stone-900 dark:text-white font-mono block mb-0.5">2. Prioritize Usability & Performance</strong>
                Clean interfaces, fast load times, accessible UX, and well-structured code are non-negotiable.
              </div>

              <div className="p-3 bg-stone-50 dark:bg-slate-800/50 rounded-xl border border-stone-200/60 dark:border-slate-700/60">
                <strong className="text-stone-900 dark:text-white font-mono block mb-0.5">3. Honest Craftsmanship & Learning</strong>
                Stay humble, write maintainable code, test thoroughly, and never stop improving technical fundamentals.
              </div>
            </div>
          </motion.div>

          {/* What I'm Looking For */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-800/60">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider block">
                    Next Chapter
                  </span>
                  <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white">
                    What I'm Looking For
                  </h3>
                </div>
              </div>

              <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                I am actively seeking opportunities to collaborate, learn, and contribute to impactful software products:
              </p>

              <div className="space-y-2.5 text-xs text-stone-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>Software Engineering Internships / Junior Developer Roles</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>Full-Stack Web Development Projects (React, TypeScript, Node.js)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>Open Source Collaborations & Community Developer Initiatives</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 dark:border-slate-800">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-xl transition shadow-xs"
              >
                Let's Work Together <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
