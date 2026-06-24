import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, ChevronRight, ChevronLeft, Github, Layers, ShieldCheck, Activity, CheckCircle, X
} from "lucide-react";

import obraimAiImg from "../assets/images/obraim_ai_1781970891191.jpg";
import knightbotMdImg from "../assets/images/knightbot_md_1781970929560.jpg";
import ujimaiCapstoneImg from "../assets/images/ujimai_capstone_1781970949691.jpg";
import toolloopImg from "../assets/images/toolloop_1781970969255.jpg";

interface Project {
  id: string;
  title: string;
  tag: string;
  desc: string;
  longDesc: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  icon: any;
  image: string;
  link?: string;
  github?: string;
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const projectsList: Project[] = [
    {
      id: "gitvora",
      title: "Gitvora",
      tag: "GitHub Portfolio Generator",
      desc: "A dynamic platform that connects with GitHub to auto-generate developer portfolios and track repository analytics.",
      longDesc: "Gitvora automates software portfolio creation by fetching live repository data, contribution graphs, and repository stats via the GitHub API. Built with Next.js and React for smooth client-side performance.",
      tech: ["Next.js", "React", "GitHub API", "Tailwind CSS", "Vercel"],
      metrics: [
        { label: "Data Sync", value: "Realtime" },
        { label: "Performance", value: "98/100" },
        { label: "Deployment", value: "Vercel" }
      ],
      accentColor: "from-indigo-500 to-violet-600",
      icon: Github,
      image: obraimAiImg,
      link: "https://gitvora-jf2ugr9qe-obraims-projects-d0bfc7b8.vercel.app",
      github: "https://github.com/Obraims/gitvora"
    },
    {
      id: "dev-tier",
      title: "Dev-Tier",
      tag: "Developer Tools Platform",
      desc: "An interactive tier-list platform for developers to rate, review, and rank development tools and frameworks.",
      longDesc: "Dev-Tier allows software engineers to evaluate and discover effective development tools across multiple categories. Features interactive tier creation, community voting, and responsive category filtering.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      metrics: [
        { label: "UI Response", value: "< 50ms" },
        { label: "Tool Index", value: "250+" },
        { label: "Architecture", value: "REST API" }
      ],
      accentColor: "from-amber-500 to-orange-600",
      icon: Layers,
      image: ujimaiCapstoneImg,
      link: "https://dev-tier-7oeydr2iv-obraims-projects-d0bfc7b8.vercel.app",
      github: "https://github.com/Obraims/dev-tier"
    },
    {
      id: "knightbot-md",
      title: "Knightbot-MD",
      tag: "WhatsApp Automation & Bot",
      desc: "A modular multi-device WhatsApp automation system and command bot built with Python and containerized services.",
      longDesc: "Knightbot-MD handles automated command handling, scheduled messages, event listening, and sandboxed execution across multi-device WhatsApp protocols. Designed for stability and low resource overhead.",
      tech: ["Python", "Docker", "Node.js", "Baileys API", "Linux"],
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Architecture", value: "Microservice" },
        { label: "Execution", value: "Docker" }
      ],
      accentColor: "from-purple-500 to-violet-600",
      icon: ShieldCheck,
      image: knightbotMdImg,
      github: "https://github.com/Obraims/Knightbot-MD"
    },
    {
      id: "finledger-engine",
      title: "FinLedger Math & Tax Engine",
      tag: "Financial Accounting Module",
      desc: "Precision double-entry accounting software engine with integer-based Kenya 16% VAT calculation algorithms.",
      longDesc: "FinLedger implements corporate GAAP double-entry ledger validation rules with precise minor-unit arithmetic (preventing floating-point rounding bugs). Generates balance sheets, income statements, and tax breakdown reports.",
      tech: ["TypeScript", "React", "Recharts", "GAAP Math", "Tailwind CSS"],
      metrics: [
        { label: "Precision", value: "100% Integer" },
        { label: "Tax Rules", value: "Kenya 16% VAT" },
        { label: "Accounting", value: "GAAP Double-Entry" }
      ],
      accentColor: "from-emerald-500 to-teal-600",
      icon: Activity,
      image: toolloopImg,
      link: "#finledger"
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.8;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    if (currentIdx !== activeIdx && currentIdx >= 0 && currentIdx < projectsList.length) {
      setActiveIdx(currentIdx);
    }
  };

  const slideTo = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.8;
    const targetIdx = direction === "left" ? Math.max(0, activeIdx - 1) : Math.min(projectsList.length - 1, activeIdx + 1);
    scrollRef.current.scrollTo({
      left: targetIdx * cardWidth,
      behavior: "smooth"
    });
    setActiveIdx(targetIdx);
  };

  return (
    <section 
      id="projects" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto relative">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
              Projects & Applications
            </h2>
            <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
              A selection of web applications, developer tools, and software solutions I have designed and deployed.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => slideTo("left")}
              className="p-2.5 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl hover:bg-stone-50 dark:hover:bg-slate-750 text-stone-700 dark:text-slate-300 transition-colors shadow-xs outline-none cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => slideTo("right")}
              className="p-2.5 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl hover:bg-stone-50 dark:hover:bg-slate-750 text-stone-700 dark:text-slate-300 transition-colors shadow-xs outline-none cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8"
        >
          {projectsList.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="flex-none w-[85%] sm:w-[55%] lg:w-[42%] snap-center cursor-pointer group rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 md:p-7 shadow-xs hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                        {project.tag}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300">
                      <ProjectIcon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 border border-stone-100 dark:border-slate-800 bg-stone-100 dark:bg-slate-950">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed font-sans mb-5 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="text-xs font-mono font-medium px-2.5 py-1 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 rounded-md border border-stone-200/60 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-indigo-600 dark:text-indigo-400 pt-2 border-t border-stone-100 dark:border-slate-800">
                    <span>View Project Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2 mt-2">
          {projectsList.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => slideTo(idx > activeIdx ? "right" : "left")}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIdx ? "w-6 bg-indigo-600 dark:bg-indigo-400" : "w-2 bg-stone-300 dark:bg-slate-700"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-2xl z-10 overflow-hidden text-left cursor-default flex flex-col max-h-[90vh]"
            >
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                      {selectedProject.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-stone-900 dark:text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg border border-stone-200 dark:border-slate-800 text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6 border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-950">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-stone-500 dark:text-slate-400 uppercase mb-2">
                      Overview
                    </h4>
                    <p className="text-base text-stone-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric) => (
                      <div 
                        key={metric.label}
                        className="p-3.5 rounded-xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-700/60 text-center"
                      >
                        <span className="block text-[10px] font-mono text-stone-500 dark:text-slate-400 uppercase">
                          {metric.label}
                        </span>
                        <span className="text-sm font-display font-bold text-stone-900 dark:text-white mt-1 block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-semibold text-stone-500 dark:text-slate-400 uppercase mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-3 py-1 bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200 border border-stone-200 dark:border-slate-700 rounded-lg text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-stone-50 dark:bg-slate-950 border-t border-stone-200 dark:border-slate-800 flex items-center justify-end gap-3">
                {selectedProject.link && selectedProject.link.startsWith("http") && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-xl shadow-xs transition"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-xs rounded-xl shadow-xs transition"
                  >
                    GitHub Code <Github className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 bg-stone-200 dark:bg-slate-800 text-stone-800 dark:text-slate-200 font-medium text-xs rounded-xl hover:bg-stone-300 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
