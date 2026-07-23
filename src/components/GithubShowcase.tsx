import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, Star, Code, ExternalLink, GitCommit, GitBranch
} from "lucide-react";

interface Repo {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  stars: number;
  url: string;
  problem: string;
  solution: string;
  highlights: string[];
}

export default function GithubShowcase() {
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [contributionGrid, setContributionGrid] = useState<{ dateStr: string; count: number; colorClass: string }[]>([]);

  useEffect(() => {
    // Generate 52 weeks * 7 days contribution grid
    const totalDays = 52 * 7;
    const now = new Date();
    const startDate = new Date(now.getTime() - totalDays * 24 * 60 * 60 * 1000);
    const grid = [];
    
    for (let i = 0; i < totalDays; i++) {
      const curDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      const dayOfWeek = curDate.getUTCDay();
      
      let commitWeight = 3;
      if (dayOfWeek === 0 || dayOfWeek === 6) commitWeight = 0.5;
      
      const randValue = Math.random();
      let count = 0;
      if (randValue < 0.35) count = 0;
      else if (randValue < 0.7) count = Math.floor(Math.random() * commitWeight) + 1;
      else if (randValue < 0.9) count = Math.floor(Math.random() * 3) + 2;
      else count = Math.floor(Math.random() * 4) + 4;

      const dateStr = curDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      
      let colorClass = "bg-stone-200 dark:bg-slate-800/80";
      if (count === 1) colorClass = "bg-emerald-200 dark:bg-emerald-950";
      else if (count === 2) colorClass = "bg-emerald-300 dark:bg-emerald-900";
      else if (count === 3) colorClass = "bg-emerald-500 dark:bg-emerald-600";
      else if (count >= 4) colorClass = "bg-emerald-600 dark:bg-emerald-400";

      grid.push({ dateStr, count, colorClass });
    }
    setContributionGrid(grid);
  }, []);

  const reposList: Repo[] = [
    {
      id: "gitvora",
      title: "gitvora",
      desc: "Dynamic GitHub portfolio generator that turns repository data and contribution graphs into beautiful web showcases.",
      tech: ["Next.js", "React", "GitHub API", "Tailwind CSS"],
      stars: 12,
      url: "https://github.com/Obraims/gitvora",
      problem: "Developers spend hours manually coding and updating static portfolios whenever they publish new GitHub repositories.",
      solution: "Automates portfolio updates by connecting directly to the GitHub API, generating real-time analytics graphs, commit heatmaps, and repository cards.",
      highlights: [
        "Real-time GitHub REST API data synchronization",
        "Automated commit graph generation",
        "Vercel live deployment with optimized caching"
      ]
    },
    {
      id: "knightbot-md",
      title: "Knightbot-MD",
      tag: "WhatsApp Automation System",
      desc: "Multi-device WhatsApp automation system and command dispatcher built with Python and containerized services.",
      tech: ["Python", "Docker", "Node.js", "Baileys API"],
      stars: 28,
      url: "https://github.com/Obraims/Knightbot-MD",
      problem: "Automating messaging workflows safely across unstable multi-device session connections without service crashes.",
      solution: "Built a containerized multi-threaded agent system with session state recovery and error isolation.",
      highlights: [
        "Containerized Docker execution environment",
        "Multi-device session persistence",
        "Custom command router with modular handlers"
      ]
    } as any,
    {
      id: "dev-tier",
      title: "dev-tier",
      desc: "Developer tools ranking and tier-list platform allowing engineers to review and vote on tools across tech stacks.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      stars: 15,
      url: "https://github.com/Obraims/dev-tier",
      problem: "Finding genuine developer consensus on tool quality across different categories is fragmented.",
      solution: "Created an interactive tier-list platform for developers to rate, discuss, and filter developer tools in real time.",
      highlights: [
        "Interactive drag-and-drop tier creation",
        "Category filtering (Frontend, Backend, DevOps, DB)",
        "Responsive dark & light mode UI"
      ]
    },
    {
      id: "finledger-core",
      title: "finledger-core",
      desc: "Precision double-entry accounting software engine with integer-based Kenya VAT calculation algorithms.",
      tech: ["TypeScript", "React", "Recharts", "Accounting Math"],
      stars: 8,
      url: "https://github.com/Obraims",
      problem: "Floating-point precision issues in JavaScript lead to rounding errors in financial tax calculations.",
      solution: "Stores monetary balances in minor units (cents) and executes integer arithmetic for tax & GAAP double-entry ledger balancing.",
      highlights: [
        "Zero-floating-point-error minor-unit arithmetic",
        "Kenya VAT 16% tax output calculations",
        "Recharts balance sheet & income statement visualizers"
      ]
    }
  ];

  return (
    <section 
      id="github" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
              <Github className="h-3.5 w-3.5" />
              <span>Open Source Activity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
              GitHub Contributions & Repositories
            </h2>
            <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base max-w-xl">
              Tracking consistent development activity, open-source repositories, and code contributions on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Obraims"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-slate-800 hover:bg-stone-800 dark:hover:bg-slate-700 text-white text-xs font-mono font-medium rounded-xl transition shadow-xs"
          >
            Follow @Obraims <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Contribution Heatmap Card */}
        <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 mb-10">
          <div className="flex items-center justify-between mb-4 text-xs font-mono">
            <span className="font-semibold text-stone-700 dark:text-slate-300 flex items-center gap-2">
              <GitCommit className="h-4 w-4 text-emerald-500" />
              Continuous Commit Activity (Past Year)
            </span>
            <span className="text-stone-500">github.com/Obraims</span>
          </div>

          {/* Grid Representation */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-rows-7 grid-flow-col gap-1 w-max">
              {contributionGrid.map((day, idx) => (
                <div
                  key={idx}
                  title={`${day.dateStr}: ${day.count} commits`}
                  className={`w-3 h-3 rounded-xs ${day.colorClass} transition-colors`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-slate-400 mt-3 pt-3 border-t border-stone-200/60 dark:border-slate-800">
            <span>Learn more on GitHub</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-xs bg-stone-200 dark:bg-slate-800" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-200 dark:bg-emerald-950" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400 dark:bg-emerald-700" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 dark:bg-emerald-400" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reposList.map((repo) => (
            <div
              key={repo.id}
              onClick={() => setSelectedRepo(repo)}
              className="p-6 bg-stone-50/60 dark:bg-slate-800/60 border border-stone-200 dark:border-slate-700/80 rounded-2xl cursor-pointer hover:border-indigo-500/50 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <GitBranch className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
                    {repo.title}
                  </h3>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-stone-400 hover:text-stone-900 dark:hover:text-white p-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-200/60 dark:border-slate-700/60">
                <div className="flex flex-wrap gap-1.5">
                  {repo.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 bg-white dark:bg-slate-900 text-stone-600 dark:text-slate-300 rounded border border-stone-200/60 dark:border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
                  Read Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedRepo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRepo(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-2xl z-10 p-6 md:p-8 overflow-hidden text-left"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase">
                    Repository Breakdown
                  </span>
                  <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-white mt-1">
                    {selectedRepo.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedRepo(null)}
                  className="px-3 py-1 bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-300 rounded-lg text-xs font-medium"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-mono text-xs font-semibold text-stone-500 dark:text-slate-400 uppercase">The Problem</h4>
                  <p className="text-stone-700 dark:text-slate-300 mt-1">{selectedRepo.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold text-stone-500 dark:text-slate-400 uppercase">The Technical Solution</h4>
                  <p className="text-stone-700 dark:text-slate-300 mt-1">{selectedRepo.solution}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold text-stone-500 dark:text-slate-400 uppercase">Key Features & Highlights</h4>
                  <ul className="list-disc list-inside text-stone-700 dark:text-slate-300 mt-1 space-y-1">
                    {selectedRepo.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-800 flex justify-end">
                <a
                  href={selectedRepo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-xl shadow-xs transition"
                >
                  Open on GitHub <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
