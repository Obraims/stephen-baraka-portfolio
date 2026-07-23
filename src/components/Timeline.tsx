import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Code, Terminal, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export default function Timeline() {
  const milestones = [
    {
      id: "m1",
      period: "Jan 2025 – Present",
      status: "ACTIVE NODE",
      title: "Full-Stack Software Lead · System Architect",
      organization: "Independent Development & Open Source",
      description: "Leading the development of responsive web applications, FinTech visualizers, and developer tools. Writing clean TypeScript, Next.js, and containerized microservices.",
      highlights: [
        "Built Gitvora — live GitHub portfolio generator & analytics dashboard.",
        "Created Dev-Tier — interactive developer tools tier-list ranking platform.",
        "Designed FinLedger — zero-error double-entry ledger calculation engine."
      ],
      tech: ["TypeScript", "Next.js", "React 19", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      id: "m2",
      period: "Jan 2024 – Dec 2024",
      status: "REPOS COMPILED",
      title: "Open-Source Systems Contributor & Backend Developer",
      organization: "Personal Projects & Developer Tools",
      description: "Explored API engineering, database schema normalization, and automated messaging infrastructure.",
      highlights: [
        "Engineered Knightbot-MD — containerized WhatsApp automation microservice.",
        "Built RESTful API services with express request validation & JWT authentication.",
        "Optimized client-side rendering with Tailwind CSS and Framer Motion."
      ],
      tech: ["Python", "Node.js", "Express", "Baileys API", "Docker", "Linux"]
    },
    {
      id: "m3",
      period: "Sep 2023 – Present",
      status: "ACADEMIC LOG",
      title: "Undergraduate Student — B.Sc. Accounting & Finance with IT",
      organization: "Maseno University, Kenya",
      description: "Combining formal financial theory, auditing discipline, and GAAP accounting rules with computer science and software development.",
      highlights: [
        "Mastered double-entry ledger bookkeeping, financial statement analysis, and auditing rules.",
        "Applied database normal forms (3NF) and SQL relational schema design to business software.",
        "Bridged business finance and IT to build practical software solutions."
      ],
      tech: ["Accounting Math", "Financial Reporting", "Database Design", "SQL", "Business Logic"]
    }
  ];

  return (
    <section 
      id="journey" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030712] border-b border-slate-800/80 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 text-cyan-400 text-xs font-mono font-semibold rounded-full border border-cyan-800/40 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Chronology of Specialties</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Stephen's Career Operations & Milestones
          </h2>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            My academic timeline at Maseno University and software engineering milestones.
          </p>
        </div>

        {/* Milestone Map Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node Marker */}
                <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-md animate-pulse"></div>
                </div>

                {/* Milestone Card */}
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 hover:border-slate-700 transition">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                        {m.period}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                        {m.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-white">
                        {m.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {m.organization}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {m.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {m.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {m.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-slate-950 text-slate-400 font-mono text-[10px] rounded border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
