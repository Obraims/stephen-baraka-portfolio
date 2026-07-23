import React, { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";
import ProjectDetailModal from "./ProjectDetailModal";
import { ExternalLink, Github, Sparkles, Layers, ArrowRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Fullstack", "Frontend", "Finance & IT"];

  const filteredProjects = filterCategory === "All"
    ? projects
    : projects.filter(p => p.category === filterCategory);

  return (
    <section 
      id="projects" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030712] border-b border-slate-800/80 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 text-cyan-400 text-xs font-mono font-semibold rounded-full border border-cyan-800/40 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Portfolio Applications</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Featured Projects & Engineering Work
          </h2>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Software solutions bridging FinTech, developer tools, web applications, and microservices.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center items-center gap-2 flex-wrap font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl border transition cursor-pointer font-medium ${
                filterCategory === cat
                  ? "bg-cyan-600 border-cyan-500 text-white shadow-md shadow-cyan-950/50"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition hover:shadow-cyan-950/20"
            >
              {/* Image banner */}
              <div 
                className="h-56 relative overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-400 font-mono text-[10px] rounded-full font-semibold">
                  {p.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 
                    onClick={() => setSelectedProject(p)}
                    className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition cursor-pointer"
                  >
                    {p.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {p.shortDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-slate-950 text-slate-400 font-mono text-[10px] rounded-md border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      Audit Details <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {p.demoUrl && p.demoUrl !== "#sandbox" && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition p-1"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition p-1"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
