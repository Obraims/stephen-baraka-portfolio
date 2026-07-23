import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, CheckCircle2, Clock, Calendar, Tag } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-950 border border-slate-800 transition cursor-pointer z-10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 mb-2">
                  <Tag className="w-3 h-3" /> {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                {project.demoUrl && project.demoUrl !== "#sandbox" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition shadow-md"
                  >
                    Live Preview <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
                >
                  GitHub <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Modal scrollable body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300">
            <p className="text-base leading-relaxed text-slate-200">
              {project.fullDesc}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h3 className="text-sm font-mono font-bold text-red-400 uppercase tracking-wider">
                  The Problem
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h3 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  The Solution
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Key System Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-xs rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
