import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, CheckCircle2, Heart, Code2, Sparkles, Terminal } from "lucide-react";

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
        
        {/* Left column: Human Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Driven by Curiosity & Real-World Problem Solving
          </h2>

          <div className="space-y-4 text-stone-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              I'm <strong className="text-stone-900 dark:text-white">Stephen Baraka</strong>, an undergraduate student at <strong className="text-stone-900 dark:text-white">Maseno University</strong> pursuing a Bachelor of Science in Accounting & Finance with Information Technology.
            </p>

            <p>
              My journey in software engineering is fueled by a genuine passion for building useful products. Whether it's crafting reactive web frontends, designing robust REST APIs, automating workflows, or experimenting with modern AI frameworks, I thrive on turning ideas into functional, performant code.
            </p>

            <p>
              Rather than getting caught up in corporate jargon, I focus on the fundamentals: clean code architecture, intuitive user interfaces, efficient data structures, and continuous learning.
            </p>
          </div>

          {/* Core Passions Grid */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Artificial Intelligence & Agentic Workflows",
              "Full-Stack Web Applications (React & Node)",
              "Developer Tools & Automation Scripts",
              "Cloud Technologies & Open Source"
            ].map((passion, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-stone-700 dark:text-slate-200 text-sm">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="font-medium text-xs font-mono">{passion}</span>
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
            <h3 className="text-xl font-display font-bold text-amber-600 dark:text-amber-400">
              Maseno Uni
            </h3>
            <p className="text-xs font-mono text-stone-500 dark:text-slate-400 uppercase tracking-wider mt-2 font-semibold">
              B.Sc. Accounting & IT
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs">
            <h3 className="text-xl font-display font-bold text-violet-600 dark:text-violet-400">
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
