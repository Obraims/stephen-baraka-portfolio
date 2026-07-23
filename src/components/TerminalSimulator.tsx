import React, { useState, useRef, useEffect } from "react";
import { Terminal, Cpu, ArrowRight, Sparkles } from "lucide-react";
import { personalInfo, skillsData } from "../data";

export default function TerminalSimulator() {
  const [history, setHistory] = useState<string[]>([
    ...personalInfo.terminalWelcome,
    "Hint: Click any pill below or type commands directly into the terminal."
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const commandShortcuts = ["help", "profile", "github", "skills", "accounting", "clear"];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: string[] = [];

    switch (trimmed) {
      case "help":
        response = [
          "--------------------------------------------------",
          "HELP DESK: Available terminal system commands:",
          "  • help             - Show this reference directory",
          "  • profile          - Print bio summary of Stephen Baraka",
          "  • github           - Connect to GitHub node of 'Obraim' & print status",
          "  • skills           - Extract technical competencies list",
          "  • accounting       - Run double-entry balance formula",
          "  • clear            - Flush log records on terminal",
          "--------------------------------------------------"
        ];
        break;
      case "profile":
        response = [
          `NAME: ${personalInfo.name}`,
          `TITLE: ${personalInfo.title}`,
          `SPECIALTY: ${personalInfo.subtitle}`,
          `UNIVERSITY: ${personalInfo.university}`,
          `DEGREE: ${personalInfo.degree}`,
          "--------------------------------------------------",
          ...personalInfo.bio
        ];
        break;
      case "github":
        response = [
          "⚡ Establishing connection to: https://github.com/Obraim...",
          "🔓 Connection: SECURE (TLS 1.3)",
          "📡 Scanning repository nodes...",
          "--------------------------------------------------",
          "📂 USERNAME: Obraim (Stephen Baraka)",
          "📦 Repositories: Gitvora, Dev-Tier, Knightbot-MD, FinLedger",
          "🔥 Core Tech: TypeScript, React, Node.js, Python, PostgreSQL",
          "⭐ Active Node: Portfolio V2 running on Dev Container",
          "--------------------------------------------------"
        ];
        break;
      case "skills":
        response = [
          "📊 DATABASE QUERY RUN: EXTRACTING SKILLS...",
          "--------------------------------------------------"
        ];
        Object.entries(skillsData).forEach(([, cat]) => {
          response.push(`[${cat.category.toUpperCase()}]`);
          cat.skills.forEach(sk => {
            const dots = ".".repeat(Math.max(2, 35 - sk.name.length));
            response.push(`  • ${sk.name} ${dots} [${sk.level}] (${sk.experience || "N/A"})`);
          });
          response.push("");
        });
        response.push("--------------------------------------------------");
        break;
      case "accounting":
        const currentTax = 0.16; // VAT/GST
        const sampleRevenue = 2450000;
        const netAfterTax = sampleRevenue * (1 - currentTax);
        response = [
          "🧮 FINANCIAL SYSTEM RUN: DOUBLE-ENTRY LEDGER...",
          "--------------------------------------------------",
          "🏢 Sandbox Ledger Calculation Engine",
          `💵 Fiscal Year: ${new Date().getFullYear()}`,
          `📊 Simulated Gross Revenue: KSh ${sampleRevenue.toLocaleString()}`,
          `📈 Tax Rate (VAT): ${(currentTax * 100)}%`,
          `📉 Estimated Net Revenue: KSh ${netAfterTax.toLocaleString()}`,
          "📊 Balance Equation: Assets [KSh 12.4M] = Liabilities [KSh 4.2M] + Equity [KSh 8.2M]",
          "✔️ Double Entry Ledger Validation: BALANCED",
          "--------------------------------------------------"
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        response = [
          `⚠️ SHELL ERROR: Command '${trimmed}' not recognized.`,
          "Type 'help' to review directory."
        ];
    }

    setHistory(prev => [...prev, `obraim-terminal$ ${cmd}`, ...response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
      setInputVal("");
    }
  };

  return (
    <div id="terminal-cli" className="w-full bg-[#020617] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative scanline flex flex-col h-[520px]">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-slate-900 px-4 py-3 border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <Terminal className="text-cyber-cyan w-4 h-4 animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">
            OBRAIM_BASH_SHELL@MASENO-NODE
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
      </div>

      {/* Shortcuts pill indicators */}
      <div className="bg-slate-950 px-4 py-2 border-b border-slate-900 flex flex-wrap gap-2 items-center text-xs text-slate-400 select-none z-10">
        <span className="font-mono text-[10px] text-cyber-blue uppercase font-bold flex items-center gap-1">
          <Cpu className="w-3 text-cyan-400 md:block hidden" /> Quick Commands:
        </span>
        {commandShortcuts.map((sc) => (
          <button
            key={sc}
            onClick={() => executeCommand(sc)}
            className="px-2.5 py-0.5 font-mono text-[11px] bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyber-green hover:border-cyber-green rounded-full cursor-pointer transition-all duration-200 shadow-xs"
          >
            {sc}
          </button>
        ))}
      </div>

      {/* Terminal Feed Scroll area */}
      <div className="flex-1 p-5 overflow-y-auto font-mono text-[13px] leading-relaxed text-emerald-400/90 whitespace-pre-wrap select-text selection:bg-emerald-500/20 selection:text-white">
        {history.map((text, idx) => {
          const isUserCommand = text.startsWith("obraim-terminal$");
          const isError = text.startsWith("⚠️");
          return (
            <div
              key={idx}
              className={`mb-1.5 transition-all duration-300 ${
                isUserCommand
                  ? "text-cyber-cyan font-semibold flex items-center gap-1.5 pt-2"
                  : isError
                  ? "text-red-400 font-bold"
                  : "text-slate-200"
              }`}
            >
              {isUserCommand && <ArrowRight className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />}
              {text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Command prompt bottom */}
      <div className="flex items-center gap-2 bg-slate-950 border-t border-slate-900 p-3 shrink-0 select-none z-10">
        <span className="font-mono text-xs text-cyber-cyan font-bold select-none pl-1 flex items-center gap-1">
          obraim-terminal$ <Sparkles className="w-3 h-3 text-cyber-cyan animate-pulse" />
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command here e.g. 'github' or 'skills'..."
          className="flex-1 bg-transparent text-slate-100 font-mono text-sm border-none outline-none focus:ring-0 focus:border-none p-0"
        />
        <div className="text-[10px] text-slate-500 font-mono mr-2 md:block hidden">
          Press ENTER to compile
        </div>
      </div>
    </div>
  );
}
