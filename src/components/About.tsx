import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, CheckCircle2, Code2, Database, ShieldCheck } from "lucide-react";

function CountUp({ max, duration = 1000 }: { max: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / 16);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const value = Math.round(max * (progress * (2 - progress)));
      
      if (frame >= totalFrames) {
        setCount(max);
        clearInterval(timer);
      } else {
        setCount(value);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [max, duration]);

  return <span>{count}</span>;
}

export default function About() {
  return (
    <section 
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Authentic Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider">
            <GraduationCap className="h-4 w-4" />
            <span>Background & Education</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Bridging Software Development & Financial Intelligence
          </h2>

          <div className="space-y-4 text-stone-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              I am an undergraduate student at <strong className="text-stone-900 dark:text-white">Maseno University</strong> pursuing a B.Sc. in Accounting and Finance with IT. My passion lies in combining the structured precision of accounting with modern software engineering.
            </p>

            <p>
              Whether crafting responsive frontend user experiences in React and TypeScript, building reliable REST API backends in Node.js and Express, or writing precise financial algorithms for double-entry bookkeeping and VAT tax compliance, I build software that is robust, performant, and maintainable.
            </p>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Full-Stack Web Development (React & Node)",
              "Double-Entry Accounting Systems",
              "Relational Databases (PostgreSQL 3NF)",
              "Kenya VAT 16% Tax Math Engines"
            ].map((tag, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-stone-700 dark:text-slate-200 text-sm">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Highlights & Stats Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-5">
          
          <div className="bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-indigo-600 dark:text-indigo-400">
              <CountUp max={15} />+
            </h3>
            <p className="text-xs font-mono text-stone-500 dark:text-slate-400 uppercase tracking-wider mt-2 font-semibold">
              Projects Built
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-emerald-600 dark:text-emerald-400">
              3+
            </h3>
            <p className="text-xs font-mono text-stone-500 dark:text-slate-400 uppercase tracking-wider mt-2 font-semibold">
              Years Coding
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
            <h3 className="text-2xl font-display font-bold text-amber-600 dark:text-amber-400">
              Maseno Uni
            </h3>
            <p className="text-xs font-mono text-stone-500 dark:text-slate-400 uppercase tracking-wider mt-2 font-semibold">
              B.Sc. Accounting & IT
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
            <h3 className="text-2xl font-display font-bold text-violet-600 dark:text-violet-400">
              TypeScript
            </h3>
            <p className="text-xs font-mono text-stone-500 dark:text-slate-400 uppercase tracking-wider mt-2 font-semibold">
              Primary Language
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
