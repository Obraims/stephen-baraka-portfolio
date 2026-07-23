import { Code2, Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";

interface Snippet {
  id: string;
  title: string;
  language: string;
  description: string;
  code: string;
}

export default function CodePlayground() {
  const [activeId, setActiveId] = useState("vat-engine");
  const [copied, setCopied] = useState(false);

  const snippets: Snippet[] = [
    {
      id: "vat-engine",
      title: "Kenya 16% VAT Math Engine",
      language: "typescript",
      description: "Integer minor-unit (cents) arithmetic algorithm for computing pre-tax and output VAT values without floating point errors.",
      code: `// Kenya 16% Output VAT Tax Extractor (Minor Unit Integer Math)
export interface TaxBreakdown {
  preTaxCents: bigint;
  vatCents: bigint;
  totalCents: bigint;
}

export function computeKenyaVAT(grossCents: bigint): TaxBreakdown {
  if (grossCents <= 0n) {
    throw new Error("Invoice total must be positive");
  }

  // Pre-Tax = Gross / 1.16 => (Gross * 100) / 116
  const preTaxCents = (grossCents * 100n) / 116n;
  const vatCents = grossCents - preTaxCents;

  return {
    preTaxCents,
    vatCents,
    totalCents: grossCents,
  };
}`
    },
    {
      id: "express-auth",
      title: "Express JWT Authorization Guard",
      language: "typescript",
      description: "Stateless authorization middleware parsing HttpOnly JWT bearer tokens for secure route protection.",
      code: `import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: { userId: string; role: string };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Access token required" });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid or expired token" });
    req.user = decoded as { userId: string; role: string };
    next();
  });
};`
    },
    {
      id: "postgres-schema",
      title: "PostgreSQL 3NF Double-Entry Schema",
      language: "sql",
      description: "Normalized relational schema for general ledger accounts, transaction journals, and audit logs.",
      code: `-- Double-Entry Journal Entries Schema (3NF)
CREATE TABLE accounts (
  account_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_name VARCHAR(100) NOT NULL,
  account_type VARCHAR(20) CHECK (account_type IN ('asset', 'liability', 'equity', 'revenue', 'expense')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE journal_entries (
  entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_date DATE NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE journal_lines (
  line_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_id UUID REFERENCES journal_entries(entry_id) ON DELETE CASCADE,
  account_id UUID REFERENCES accounts(account_id),
  type VARCHAR(6) CHECK (type IN ('debit', 'credit')),
  amount_cents BIGINT NOT NULL CHECK (amount_cents > 0)
);`
    }
  ];

  const activeSnippet = snippets.find((s) => s.id === activeId) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="code-snippets" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
            <Code2 className="h-3.5 w-3.5" />
            <span>Code Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
            Clean Implementation Patterns
          </h2>
          <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base">
            Sample code architectures demonstrating precision math, secure backend guards, and SQL schema design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Snippet Selector */}
          <div className="lg:col-span-4 space-y-3">
            {snippets.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activeId === s.id 
                    ? "bg-indigo-50/80 dark:bg-slate-800 border-indigo-500/60 text-stone-900 dark:text-white shadow-xs" 
                    : "bg-stone-50 dark:bg-slate-950/40 border-stone-200/60 dark:border-slate-800 text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    {s.language}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold mt-1">
                  {s.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {s.description}
                </p>
              </button>
            ))}
          </div>

          {/* Code Viewer */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl text-xs font-mono">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-400">
              <span className="flex items-center gap-2 font-semibold text-slate-200">
                <Terminal className="h-4 w-4 text-emerald-400" />
                {activeSnippet.title}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition cursor-pointer text-xs"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy Code"}</span>
              </button>
            </div>

            <div className="p-5 overflow-x-auto text-slate-200 leading-relaxed max-h-[420px]">
              <pre>
                <code>{activeSnippet.code}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
