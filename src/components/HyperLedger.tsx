import React, { useState, useEffect } from "react";
import { 
  Calculator, CheckCircle2, AlertCircle, Percent, RefreshCw, DollarSign
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

interface Transaction {
  id: string;
  date: string;
  account: string;
  category: "Asset" | "Liability" | "Equity" | "Revenue" | "Expense";
  type: "debit" | "credit";
  amountInt: number; // Stored in minor units (cents)
  description: string;
}

export default function HyperLedger() {
  const [activeTab, setActiveTab] = useState<"vat" | "ledger" | "amortization">("vat");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  // Ledger state
  const [isBalanced, setIsBalanced] = useState<boolean>(true);
  const [totalDebits, setTotalDebits] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);

  // Kenya VAT Calculator State
  const [vatAmountInput, setVatAmountInput] = useState("100000"); // 100,000 KES
  const [vatResult, setVatResult] = useState<{ preTax: number; vat: number; total: number } | null>(null);

  // Amortization Calculator State
  const [principal, setPrincipal] = useState("500000"); // 500,000 KES
  const [interestRate, setInterestRate] = useState("12"); // 12%
  const [termMonths, setTermMonths] = useState("12"); // 12 months
  const [amortizationData, setAmortizationData] = useState<{ month: number; payment: number; interest: number; principal: number; balance: number }[]>([]);

  useEffect(() => {
    generateInitialLedger();
    calculateVat("100000");
    calculateAmortization("500000", "12", "12");
  }, []);

  const generateInitialLedger = () => {
    const list: Transaction[] = [
      { id: "TX-101", date: "2026-06-01", account: "Cash & Bank", category: "Asset", type: "debit", amountInt: 150000000, description: "Capital Investment Inflow" },
      { id: "TX-102", date: "2026-06-01", account: "Owner Equity", category: "Equity", type: "credit", amountInt: 150000000, description: "Initial Shareholder Capital" },
      { id: "TX-103", date: "2026-06-05", account: "Accounts Receivable", category: "Asset", type: "debit", amountInt: 58000000, description: "Client Software Development Contract" },
      { id: "TX-104", date: "2026-06-05", account: "Service Revenue", category: "Revenue", type: "credit", amountInt: 50000000, description: "Pre-Tax Revenue (Exclusive of VAT)" },
      { id: "TX-105", date: "2026-06-05", account: "VAT Payable (16%)", category: "Liability", type: "credit", amountInt: 8000000, description: "Kenya VAT Output Tax Allocation" },
      { id: "TX-106", date: "2026-06-10", account: "Server Host Expense", category: "Expense", type: "debit", amountInt: 12000000, description: "Cloud Infrastructure Hosting Fee" },
      { id: "TX-107", date: "2026-06-10", account: "Accounts Payable", category: "Liability", type: "credit", amountInt: 12000000, description: "Cloud Vendor Invoice Due" }
    ];
    setTransactions(list);
    auditLedger(list);
  };

  const auditLedger = (list: Transaction[]) => {
    let debits = 0;
    let credits = 0;
    list.forEach(t => {
      if (t.type === "debit") debits += t.amountInt;
      else credits += t.amountInt;
    });
    setTotalDebits(debits / 100);
    setTotalCredits(credits / 100);
    setIsBalanced(debits === credits);
  };

  const calculateVat = (valStr: string) => {
    const num = parseFloat(valStr);
    if (isNaN(num) || num <= 0) {
      setVatResult(null);
      return;
    }
    // Kenya VAT is 16%. Standard inclusive tax formula: PreTax = Total / 1.16
    const preTax = num / 1.16;
    const vat = num - preTax;
    setVatResult({
      preTax: Math.round(preTax * 100) / 100,
      vat: Math.round(vat * 100) / 100,
      total: num
    });
  };

  const calculateAmortization = (pStr: string, rStr: string, tStr: string) => {
    const P = parseFloat(pStr);
    const annualR = parseFloat(rStr) / 100;
    const N = parseInt(tStr, 10);

    if (isNaN(P) || isNaN(annualR) || isNaN(N) || P <= 0 || N <= 0) {
      setAmortizationData([]);
      return;
    }

    const r = annualR / 12; // Monthly interest rate
    // Monthly payment formula: M = P * [r(1+r)^N] / [(1+r)^N - 1]
    const monthlyPayment = r === 0 ? P / N : (P * (r * Math.pow(1 + r, N))) / (Math.pow(1 + r, N) - 1);
    
    let currentBalance = P;
    const rows = [];

    for (let m = 1; m <= N; m++) {
      const interestPay = currentBalance * r;
      const principalPay = monthlyPayment - interestPay;
      currentBalance = Math.max(0, currentBalance - principalPay);

      rows.push({
        month: m,
        payment: Math.round(monthlyPayment),
        interest: Math.round(interestPay),
        principal: Math.round(principalPay),
        balance: Math.round(currentBalance)
      });
    }

    setAmortizationData(rows);
  };

  const chartData = [
    { name: "Total Debits", amount: totalDebits },
    { name: "Total Credits", amount: totalCredits }
  ];

  return (
    <section 
      id="finledger" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Financial Engine</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            FinLedger Accounting & Tax Tools
          </h2>
          <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
            Demonstrating double-entry accounting reconciliation, Kenya 16% VAT arithmetic, and debt amortization calculators.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex space-x-2 border-b border-stone-200 dark:border-slate-800 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("vat")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "vat" 
                ? "border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold" 
                : "border-transparent text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white"
            }`}
          >
            Kenya VAT (16%) Calculator
          </button>

          <button
            onClick={() => setActiveTab("ledger")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "ledger" 
                ? "border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold" 
                : "border-transparent text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white"
            }`}
          >
            Double-Entry Audit Engine
          </button>

          <button
            onClick={() => setActiveTab("amortization")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "amortization" 
                ? "border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold" 
                : "border-transparent text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white"
            }`}
          >
            Loan Amortization Schedule
          </button>
        </div>

        {/* TAB 1: VAT Calculator */}
        {activeTab === "vat" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-display font-bold text-stone-900 dark:text-white flex items-center gap-2">
                <Percent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                Kenya VAT 16% Extractor
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-400">
                Enter an inclusive invoice total (KES) to extract pre-tax revenue and output VAT obligations according to Kenya tax regulations.
              </p>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                  Invoice Gross Amount (KES)
                </label>
                <input
                  type="number"
                  value={vatAmountInput}
                  onChange={(e) => {
                    setVatAmountInput(e.target.value);
                    calculateVat(e.target.value);
                  }}
                  className="w-full px-4 py-2.5 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl text-stone-900 dark:text-white font-mono text-sm outline-none focus:border-emerald-500"
                  placeholder="e.g. 100000"
                />
              </div>

              <div className="flex gap-2">
                {["50000", "100000", "250000", "1000000"].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setVatAmountInput(preset);
                      calculateVat(preset);
                    }}
                    className="px-3 py-1 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 text-xs font-mono rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition cursor-pointer"
                  >
                    KES {parseInt(preset, 10).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-mono font-semibold text-stone-500 dark:text-slate-400 uppercase">
                Tax Output Breakdown
              </h3>

              {vatResult ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-700/60 rounded-xl">
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400 block">
                      Pre-Tax Revenue (86.21%)
                    </span>
                    <span className="text-xl font-display font-bold text-stone-900 dark:text-white mt-1 block font-mono">
                      KES {vatResult.preTax.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 rounded-xl">
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-300 block">
                      Output VAT (16%)
                    </span>
                    <span className="text-xl font-display font-bold text-emerald-600 dark:text-emerald-400 mt-1 block font-mono">
                      KES {vatResult.vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="p-4 bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-700/60 rounded-xl">
                    <span className="text-xs font-mono text-stone-500 dark:text-slate-400 block">
                      Gross Invoice Total
                    </span>
                    <span className="text-xl font-display font-bold text-stone-900 dark:text-white mt-1 block font-mono">
                      KES {vatResult.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-stone-500">Enter a valid amount to compute VAT breakdown.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Double-Entry Audit */}
        {activeTab === "ledger" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-display font-bold text-stone-900 dark:text-white">
                  Journal Transactions Ledger
                </h3>
                <div className={`px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 ${
                  isBalanced 
                    ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" 
                    : "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300"
                }`}>
                  {isBalanced ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <span>{isBalanced ? "EQUATION BALANCED (DEBITS = CREDITS)" : "UNBALANCED LEDGER"}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-stone-50 dark:bg-slate-800 text-stone-500 dark:text-slate-400 uppercase font-mono">
                    <tr>
                      <th className="p-2.5">Date</th>
                      <th className="p-2.5">Account</th>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5 text-right">Amount (KES)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-800 text-stone-800 dark:text-slate-200">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-stone-50/50 dark:hover:bg-slate-800/40">
                        <td className="p-2.5 font-mono text-stone-500">{tx.date}</td>
                        <td className="p-2.5 font-semibold">{tx.account}</td>
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            tx.type === "debit" 
                              ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400" 
                              : "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400"
                          }`}>
                            {tx.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-2.5 text-right font-mono font-semibold">
                          {(tx.amountInt / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-mono font-semibold text-stone-500 dark:text-slate-400 uppercase">
                GAAP Balance Equality Verification
              </h3>

              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={10} tickFormatter={(val) => `${val / 1000000}M`} />
                    <Tooltip formatter={(val: any) => `KES ${Number(val).toLocaleString()}`} />
                    <Bar dataKey="amount" fill="#6366f1" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-stone-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-stone-500 block">Total Debits</span>
                  <span className="text-base font-bold text-indigo-600 dark:text-indigo-400 block mt-0.5">
                    KES {totalDebits.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="p-3 bg-stone-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-stone-500 block">Total Credits</span>
                  <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                    KES {totalCredits.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Amortization */}
        {activeTab === "amortization" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-display font-bold text-stone-900 dark:text-white">
                Loan Amortization Calculator
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                    Principal Amount (KES)
                  </label>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => {
                      setPrincipal(e.target.value);
                      calculateAmortization(e.target.value, interestRate, termMonths);
                    }}
                    className="w-full px-3.5 py-2 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl text-stone-900 dark:text-white font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => {
                      setInterestRate(e.target.value);
                      calculateAmortization(principal, e.target.value, termMonths);
                    }}
                    className="w-full px-3.5 py-2 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl text-stone-900 dark:text-white font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono font-semibold text-stone-700 dark:text-slate-300 mb-1">
                    Loan Term (Months)
                  </label>
                  <input
                    type="number"
                    value={termMonths}
                    onChange={(e) => {
                      setTermMonths(e.target.value);
                      calculateAmortization(principal, interestRate, e.target.value);
                    }}
                    className="w-full px-3.5 py-2 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl text-stone-900 dark:text-white font-mono outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-mono font-semibold text-stone-500 dark:text-slate-400 uppercase">
                Payment Schedule Breakdown
              </h3>

              <div className="max-h-64 overflow-y-auto border border-stone-100 dark:border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-stone-50 dark:bg-slate-800 text-stone-500 dark:text-slate-400">
                    <tr>
                      <th className="p-2">Month</th>
                      <th className="p-2">Payment</th>
                      <th className="p-2">Principal</th>
                      <th className="p-2">Interest</th>
                      <th className="p-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-800 text-stone-700 dark:text-slate-300">
                    {amortizationData.map((row) => (
                      <tr key={row.month}>
                        <td className="p-2">{row.month}</td>
                        <td className="p-2 font-semibold">KES {row.payment.toLocaleString()}</td>
                        <td className="p-2 text-indigo-600 dark:text-indigo-400">KES {row.principal.toLocaleString()}</td>
                        <td className="p-2 text-amber-600 dark:text-amber-400">KES {row.interest.toLocaleString()}</td>
                        <td className="p-2">KES {row.balance.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
