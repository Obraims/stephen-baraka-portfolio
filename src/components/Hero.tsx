import { Github, Linkedin, Mail, Terminal, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import frontProfileImage from "../assets/images/profile_front.jpg.png";

export default function Hero() {
  const roles = [
    "Financial Software Engineer",
    "Full-Stack Web Engineer",
    "FinTech & Automation Specialist"
  ];
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [activeRightTab, setActiveRightTab] = useState<"card" | "terminal">("card");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "System Ready: Stephen Baraka Shell",
    "Specialization: Financial Software Engineering & Web Systems",
    "Type 'help' for available commands.",
    ""
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLines]);

  const handleTerminalCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;
    
    let response: string[] = [];
    
    if (cmd === "help") {
      response = [
        `$ ${rawCmd}`,
        "AVAILABLE COMMANDS:",
        "  help      - Show available commands",
        "  bio       - Read background and university studies",
        "  skills    - View technical stack & tools",
        "  projects  - Show featured software projects",
        "  contact   - Display contact details",
        "  clear     - Clear terminal history"
      ];
    } else if (cmd === "clear") {
      setTerminalLines([]);
      setTerminalInput("");
      return;
    } else if (cmd === "bio") {
      response = [
        `$ ${rawCmd}`,
        "IDENTITY & PROFILE:",
        "  Name          : Stephen Baraka",
        "  Title         : Financial Software Engineer",
        "  University    : Maseno University, Kenya",
        "  Degree        : B.Sc. Accounting and Finance with IT",
        "  Mission       : Bridging financial logic, business systems, and modern",
        "                  full-stack web software to solve real-world problems."
      ];
    } else if (cmd === "skills") {
      response = [
        `$ ${rawCmd}`,
        "TECHNICAL STACK:",
        "  - Languages: TypeScript, JavaScript, Python, SQL, HTML/CSS",
        "  - Frontend : React, Next.js, Tailwind CSS, Vite, Motion",
        "  - Backend  : Node.js, Express, REST APIs",
        "  - FinTech  : Ledger Math, Integer Currency Arithmetic, GAAP Rules",
        "  - Tools    : Git, Docker, PostgreSQL, Vercel, Linux CLI"
      ];
    } else if (cmd === "projects") {
      response = [
        `$ ${rawCmd}`,
        "FEATURED PROJECTS:",
        "  1. Gitvora   : GitHub Portfolio Generator & Analytics",
        "  2. Dev-Tier  : Interactive Developer Tools Tier List",
        "  3. Knightbot : WhatsApp Automation & Bot",
        "  4. FinLedger : Double-Entry Bookkeeping Visualizer"
      ];
    } else if (cmd === "contact") {
      response = [
        `$ ${rawCmd}`,
        "CONTACT DETAILS:",
        "  - Email   : obraimssteve@gmail.com",
        "  - GitHub  : github.com/Obraims",
        "  - LinkedIn: linkedin.com/in/stephen-baraka-055b7040b",
        "  - WhatsApp: +254 743 717 285"
      ];
    } else {
      response = [
        `$ ${rawCmd}`,
        `Command not found: '${rawCmd}'. Type 'help' for options.`
      ];
    }
    
    setTerminalLines((prev) => [...prev, ...response, ""]);
    setTerminalInput("");
  };

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-stone-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Info */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium rounded-full border border-indigo-200/60 dark:border-indigo-800/50">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Financial Software Engineer</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-stone-900 dark:text-white">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Stephen Baraka</span>
            </h1>

            {/* Sliding Role Title */}
            <div className="h-9 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-display font-semibold text-stone-700 dark:text-slate-300"
                >
                  {roles[roleIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-base md:text-lg text-stone-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Bridging finance, business logic, and modern software engineering. I build practical web applications, FinTech tools, developer platforms, and automation systems that solve real-world problems.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-md shadow-indigo-500/20 flex items-center gap-2"
            >
              View Featured Work <ChevronRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-stone-800 dark:text-slate-200 font-medium text-sm transition-all border border-stone-200 dark:border-slate-700"
            >
              Get In Touch
            </a>

            {/* Quick Social Buttons */}
            <div className="flex items-center space-x-2.5 ml-1">
              <a
                href="https://github.com/Obraims"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl text-stone-700 dark:text-slate-300 transition-colors"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/stephen-baraka-055b7040b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl text-stone-700 dark:text-slate-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:obraimssteve@gmail.com"
                className="p-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl text-stone-700 dark:text-slate-300 transition-colors"
                title="Email Me"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Switcher (Card / CLI) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          
          {/* Switch Tabs */}
          <div className="flex items-center p-1 bg-stone-200/70 dark:bg-slate-800/80 rounded-xl mb-4 text-xs font-mono">
            <button
              onClick={() => setActiveRightTab("card")}
              className={`px-4 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeRightTab === "card" 
                  ? "bg-white dark:bg-slate-900 text-stone-900 dark:text-white shadow-xs" 
                  : "text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              PROFILE CARD
            </button>
            <button
              onClick={() => setActiveRightTab("terminal")}
              className={`px-4 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeRightTab === "terminal" 
                  ? "bg-white dark:bg-slate-900 text-stone-900 dark:text-white shadow-xs" 
                  : "text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              CLI CONSOLE
            </button>
          </div>

          <div className="w-full flex justify-center items-center h-[410px]">
            {activeRightTab === "card" ? (
              <div className="relative w-[300px] sm:w-[330px] rounded-2xl overflow-hidden shadow-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 group">
                <div className="h-[360px] relative overflow-hidden">
                  <img
                    src={frontProfileImage}
                    alt="Stephen Baraka Profile"
                    referrerPolicy="no-referrer"
                    className="object-cover object-top w-full h-full transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                      Maseno University
                    </span>
                    <h3 className="text-xl font-display font-bold text-white">
                      Stephen Baraka
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 font-medium">
                      Financial Software Engineer
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900 dark:bg-slate-950 flex items-center justify-between text-xs font-medium border-t border-slate-800 text-slate-300 dark:text-slate-400">
                  <span>📍 Kenya</span>
                  <span className="text-indigo-400 font-mono font-semibold">B.Sc. Accounting & IT</span>
                </div>
              </div>
            ) : (
              /* INTERACTIVE TERMINAL CONSOLE */
              <div className="w-[300px] sm:w-[350px] h-[390px] bg-slate-950 border border-slate-800 rounded-2xl shadow-xl p-4 flex flex-col font-mono text-xs leading-relaxed text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                    <Terminal className="h-3.5 w-3.5" />
                    stephen@baraka-dev:~
                  </span>
                  <span className="text-slate-500">zsh</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 pr-1 text-[11px]">
                  {terminalLines.map((line, idx) => (
                    <div key={idx} className="whitespace-pre-wrap">
                      {line.startsWith("$") ? (
                        <span className="text-indigo-400 font-bold">{line}</span>
                      ) : line.includes(":") ? (
                        <span className="text-slate-200">{line}</span>
                      ) : (
                        <span className="text-slate-400">{line}</span>
                      )}
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleTerminalCommand(terminalInput);
                  }}
                  className="mt-2 pt-2 border-t border-slate-800/80 flex items-center gap-1 text-[11px]"
                >
                  <span className="text-emerald-400 font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type 'help'..."
                    className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-[11px]"
                  />
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
