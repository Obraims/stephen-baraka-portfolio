import React, { useState } from "react";
import { 
  Plus, Trash2, CheckCircle2, AlertTriangle, 
  TrendingUp, Calculator 
} from "lucide-react";

interface LedgerEntry {
  id: string;
  account: string;
  type: "debit" | "credit";
  amount: number;
}

export default function LedgerShowcase() {
  const [entries, setEntries] = useState<LedgerEntry[]>([
    { id: "1", account: "Cash Assets (Debit)", type: "debit", amount: 1200000 },
    { id: "2", account: "Retained Earnings (Equity)", type: "credit", amount: 800000 },
    { id: "3", account: "Software Capitalization (Assets)", type: "debit", amount: 400000 },
    { id: "4", account: "Accounts Payable (Liabilities)", type: "credit", amount: 800000 },
  ]);

  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"debit" | "credit">("debit");
  const [taxRate, setTaxRate] = useState<number>(16);

  const [simulationStatus, setSimulationStatus] = useState<string | null>(null);

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountName || !amount) return;

    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) return;

    const newEntry: LedgerEntry = {
      id: Date.now().toString(),
      account: accountName,
      type,
      amount: val,
    };

    setEntries(prev => [...prev, newEntry]);
    setAccountName("");
    setAmount("");
    setSimulationStatus(`Successfully recorded: KSh ${val.toLocaleString()}`);

    setTimeout(() => setSimulationStatus(null), 3000);
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(item => item.id !== id));
  };

  const totalDebits = entries.filter(e => e.type === "debit").reduce((sum, e) => sum + e.amount, 0);
  const totalCredits = entries.filter(e => e.type === "credit").reduce((sum, e) => sum + e.amount, 0);
  const diff = Math.abs(totalDebits - totalCredits);
  const isBalanced = totalDebits === totalCredits && entries.length > 0;

  const calculatedTaxWithholding = totalDebits * (taxRate / 100);

  let runningSum = 0;
  const chartPoints = entries.map((entry, idx) => {
    runningSum += (entry.type === "debit" ? entry.amount : -entry.amount);
    return { name: `T-${idx + 1}`, value: runningSum };
  });

  const maxValue = Math.max(...chartPoints.map(p => Math.abs(p.value)), 100000);
  const paddingY = 30;
  const graphWidth = 450;
  const graphHeight = 150;

  const svgPoints = chartPoints.map((point, index) => {
    const x = chartPoints.length > 1 ? (index / (chartPoints.length - 1)) * (graphWidth - 40) + 20 : 20;
    const halfHeight = graphHeight / 2;
    const y = halfHeight - (point.value / maxValue) * (halfHeight - paddingY);
    return { x, y, value: point.value };
  });

  const dPath = svgPoints.reduce((path, p, i) => {
    return path + `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`;
  }, "");

  return (
    <div id="financial-ledger-analyzer" className="grid lg:grid-cols-12 gap-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="lg:col-span-4 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-mono text-cyan-400 font-bold bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-800/40">
            Financial Tech Hybrid Node
          </span>
          <h3 className="text-2xl font-bold font-display text-white mt-3 leading-tight">
            GAAP Double-Entry Ledger Simulation
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Add debit entries (assets, expenditures) and credit entries (revenue, equity, liabilities) to test real-time ledger balancing.
          </p>
        </div>

        <div className="mt-6 space-y-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-cyber-blue" /> Tax Rate Config (VAT):
            </span>
            <div className="flex items-center gap-1.5">
              <input 
                type="number" 
                value={taxRate} 
                onChange={e => setTaxRate(Number(e.target.value) || 0)}
                className="w-12 bg-slate-900 border border-slate-800 text-center rounded text-white py-0.5"
                min="0"
                max="50"
              />
              <span className="text-slate-400">%</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-900 pt-3">
            <span className="text-xs text-slate-400">Calculated VAT (Debit):</span>
            <span className="text-sm font-semibold font-mono text-emerald-400">
              KSh {calculatedTaxWithholding.toLocaleString(undefined, { maximumFractionDigits: 1 })}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-slate-900 pt-3">
            <span className="text-xs text-slate-400">Ledger Balance Discrepancy:</span>
            <span className={`text-sm font-bold font-mono ${isBalanced ? "text-emerald-400" : "text-yellow-400"}`}>
              {isBalanced ? "KSh 0.00" : `KSh ${diff.toLocaleString()}`}
            </span>
          </div>

          <div className={`mt-2 flex items-center gap-2 p-2.5 rounded-lg text-xs font-semibold ${
            isBalanced 
              ? "bg-emerald-950/50 border border-emerald-800/40 text-emerald-400" 
              : "bg-yellow-950/40 border border-yellow-800/20 text-yellow-500"
          }`}>
            {isBalanced ? (
              <>
                <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                <span>Equations balanced. Ledger verified dynamically.</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
                <span>Off-balance by KSh {diff.toLocaleString()}! Check entries.</span>
              </>
            )}
          </div>
        </div>

        {simulationStatus && (
          <div className="mt-4 p-2 bg-cyan-950/40 border border-cyan-800/40 rounded-lg text-xs font-mono text-cyan-400 text-center animate-pulse">
            {simulationStatus}
          </div>
        )}
      </div>

      <div className="lg:col-span-8 flex flex-col gap-6">
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-slate-300 font-bold">Flow Chart Index (Cumulative Balance)</span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              runningSum >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
            }`}>
              Net Reserve: KSh {runningSum.toLocaleString()}
            </span>
          </div>

          <div className="w-full h-[150px] relative overflow-hidden flex items-center justify-center">
            {chartPoints.length > 0 ? (
              <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="w-full h-full overflow-visible">
                <line 
                  x1="10" 
                  y1={graphHeight / 2} 
                  x2={graphWidth - 10} 
                  y2={graphHeight / 2} 
                  stroke="#334155" 
                  strokeDasharray="4"
                  strokeWidth="1.5"
                />

                {dPath && (
                  <path 
                    d={dPath} 
                    fill="none" 
                    stroke="url(#neon-neon)" 
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                <defs>
                  <linearGradient id="neon-neon" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {svgPoints.map((p, i) => (
                  <g key={i}>
                    <circle 
                      cx={p.x} 
                      cy={p.y} 
                      r="7.5" 
                      fill={p.value >= 0 ? "#10b981" : "#ef4444"} 
                      opacity="0.3" 
                      className="animate-ping"
                    />
                    <circle 
                      cx={p.x} 
                      cy={p.y} 
                      r="4.5" 
                      fill={p.value >= 0 ? "#10b981" : "#ef4444"} 
                      stroke="#020617" 
                      strokeWidth="1.5"
                    />
                    <text 
                      x={p.x} 
                      y={p.y - 10} 
                      fill="#94a3b8" 
                      fontSize="9" 
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {p.value >= 0 ? "+" : ""}{(p.value / 1000).toFixed(0)}k
                    </text>
                  </g>
                ))}
              </svg>
            ) : (
              <p className="text-xs text-slate-500 font-mono">No entries logged.</p>
            )}
          </div>
        </div>

        <div className="flex-1 max-h-[170px] overflow-y-auto space-y-2 pr-1">
          {entries.map((ent) => (
            <div 
              key={ent.id} 
              className="flex justify-between items-center text-xs bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60 hover:border-slate-700/60 transition group"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${ent.type === "debit" ? "bg-cyan-500" : "bg-purple-500"}`}></span>
                <span className="font-semibold text-slate-200">{ent.account}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-slate-300">
                  {ent.type === "debit" ? "Debit" : "Credit"}: <strong className={ent.type === "debit" ? "text-cyan-400" : "text-purple-400"}>KSh {ent.amount.toLocaleString()}</strong>
                </span>

                <button 
                  onClick={() => deleteEntry(ent.id)}
                  className="text-slate-500 hover:text-red-400 transition opacity-0 group-hover:opacity-100 p-0.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={addEntry} className="grid sm:grid-cols-12 gap-3 shrink-0">
          <input 
            type="text"
            required
            value={accountName}
            onChange={e => setAccountName(e.target.value)}
            placeholder="Account Name (e.g. Software License)"
            className="sm:col-span-5 bg-slate-950 border border-slate-800 text-xs px-3.5 py-2.5 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
          <input 
            type="number"
            required
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Amount KSh"
            className="sm:col-span-3 bg-slate-950 border border-slate-800 text-xs px-3.5 py-2.5 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono"
            min="100"
          />
          <select 
            value={type}
            onChange={e => setType(e.target.value as "debit" | "credit")}
            className="sm:col-span-2 bg-slate-950 border border-slate-800 text-xs px-2.5 py-2.5 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
          >
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
          </select>
          <button 
            type="submit"
            className="sm:col-span-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg text-xs px-4 py-2.5 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        </form>
      </div>
    </div>
  );
}
