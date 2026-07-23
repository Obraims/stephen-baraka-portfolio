import React, { useState } from "react";
import { motion } from "motion/react";
import TerminalSimulator from "./TerminalSimulator";
import LedgerShowcase from "./LedgerShowcase";
import { Terminal, Calculator, Sparkles } from "lucide-react";

export default function SystemSandbox() {
  const [activeTab, setActiveTab] = useState<"terminal" | "ledger">("terminal");

  return (
    <section 
      id="sandbox" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030712] border-b border-slate-800/80 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 text-cyan-400 text-xs font-mono font-semibold rounded-full border border-cyan-800/40 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Environment</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Interactive System Sandbox
          </h2>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Test the live CLI Bash Terminal shell and the GAAP Double-Entry Financial Ledger simulator.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center items-center">
          <div className="bg-slate-950 border border-slate-800 p-1.5 rounded-2xl flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-5 py-2.5 rounded-xl font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === "terminal"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-950/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal className="w-4 h-4" /> BASH TERMINAL SHELL
            </button>
            <button
              onClick={() => setActiveTab("ledger")}
              className={`px-5 py-2.5 rounded-xl font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === "ledger"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-950/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Calculator className="w-4 h-4" /> GAAP LEDGER ENGINE
            </button>
          </div>
        </div>

        {/* Sandbox Content Container */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "terminal" ? (
            <TerminalSimulator />
          ) : (
            <LedgerShowcase />
          )}
        </div>

      </div>
    </section>
  );
}
