import { Calendar, CheckCircle2, GraduationCap, MapPin, Code } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Milestone } from "../types";

import profileBackImage from "../assets/images/profile_back.jpg.png";
import profileFenceImage from "../assets/images/profile_fence.jpg.png";
import profileFrontImage from "../assets/images/profile_front.jpg.png";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const milestones: Milestone[] = [
    {
      id: "m1",
      year: "2023 - PRESENT",
      title: "B.Sc. Accounting and Finance with IT",
      company: "Maseno University",
      description: "Pursuing undergraduate degree combining corporate financial principles with computer science and information technology.",
      highlights: [
        "Mastered corporate GAAP double-entry ledger equations & financial statements.",
        "Studied database management systems (Relational 3NF SQL schemas).",
        "Applied software programming logic to financial auditing and tax calculations."
      ],
      image: profileFenceImage,
      tech: ["Accounting IT", "GAAP Principles", "Relational SQL", "Tax Systems"],
      side: "left",
    },
    {
      id: "m2",
      year: "2024 - PRESENT",
      title: "Full-Stack Web Development & Web Apps",
      company: "Independent Projects",
      description: "Designed, engineered, and deployed multiple production web applications, open-source automation tools, and developer platforms.",
      highlights: [
        "Built and deployed Gitvora — dynamic GitHub portfolio analytics platform.",
        "Engineered Dev-Tier — interactive developer tools ranking tier-list application.",
        "Developed Knightbot-MD — multi-device WhatsApp automation system."
      ],
      image: profileBackImage,
      tech: ["React 19", "TypeScript", "Next.js", "Tailwind CSS", "Python", "Vercel"],
      side: "right",
    },
    {
      id: "m3",
      year: "2025 - PRESENT",
      title: "Financial Systems & Backend Engineering",
      company: "FinTech & Developer Solutions",
      description: "Specializing in precision financial software tools, REST APIs, and high-performance database architectures.",
      highlights: [
        "Implemented integer minor-unit arithmetic for zero-error VAT 16% tax calculation.",
        "Constructed Node.js / Express REST API microservices with JWT security.",
        "Built responsive data visualization dashboards with Recharts and Motion."
      ],
      image: profileFrontImage,
      tech: ["Node.js", "Express", "PostgreSQL", "Go", "Docker", "Recharts"],
      side: "left",
    },
  ];

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto relative">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Journey & Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Academic & Software Engineering Milestones
          </h2>
          <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
            Key milestones in education at Maseno University and full-stack software development.
          </p>
        </div>

        {/* Milestones Container */}
        <div className="space-y-16">
          {milestones.map((milestone, index) => {
            const isEven = milestone.side === "left";
            
            return (
              <div 
                key={milestone.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xs"
              >
                
                {/* Image Col */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-xl overflow-hidden h-64 border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-950">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      referrerPolicy="no-referrer"
                      className="object-cover object-top w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white font-display text-sm font-bold">
                      {milestone.company}
                    </div>
                  </div>
                </div>

                {/* Info Col */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-stone-100 dark:bg-slate-800 text-xs font-mono font-semibold text-stone-700 dark:text-slate-300">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{milestone.year}</span>
                    </span>
                    <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {milestone.company}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-stone-600 dark:text-slate-300 text-sm leading-relaxed">
                    {milestone.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {milestone.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-stone-700 dark:text-slate-300 text-xs md:text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-slate-800">
                    {milestone.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-0.5 bg-stone-100 dark:bg-slate-800 rounded text-xs font-mono font-medium text-stone-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
