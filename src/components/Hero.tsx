import React from "react";
import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Terminal, Shield, CheckCircle2, ArrowRight, Github, Linkedin, Mail, Twitter, Code, Activity, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden justify-center select-none border-b border-slate-800/80">
      
      {/* Abstract cyber cafe design graphic grids */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-hero" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 243, 255, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status node pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-300 font-medium">Financial Software Engineer</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyber-cyan font-bold">ONLINE</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-sky-400 to-indigo-400">Stephen Baraka</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-mono font-semibold text-slate-300">
                Bridging Finance, Accounting & Software Engineering
              </p>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-sans">
                I build digital solutions at the intersection of accounting principles, financial systems, business logic, and modern full-stack web engineering.
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block">SPECIALIZATION</span>
                <span className="text-sm font-bold text-cyber-cyan font-mono">FinTech & Web</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block">DEGREE</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">B.Sc. Accounting & IT</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block">LOCATION</span>
                <span className="text-sm font-bold text-purple-400 font-mono">Maseno / Kenya</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-cyan-950/50 flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sandbox"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition flex items-center gap-2"
              >
                System Sandbox <Terminal className="w-4 h-4 text-cyber-cyan" />
              </a>
            </div>

            {/* Social profiles icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
                title="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Enhancement Profile Card with Radar Pulse & Unavatar Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              
              {/* Animated Radar Pulse Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-emerald-500/20 blur-xl animate-pulse-glow pointer-events-none" />

              {/* Main Card Chassis */}
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Cover Photo */}
                <div className="h-28 w-full relative overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.coverPhoto}
                    alt="Cover"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>

                {/* Avatar Portrait */}
                <div className="px-6 pb-6 relative -mt-12">
                  <div className="relative inline-block mb-3">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-24 h-24 rounded-2xl border-4 border-slate-950 shadow-xl object-cover bg-slate-900"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 border-2 border-slate-950 flex items-center justify-center text-[10px] text-slate-950 font-bold" title="Verified Node">
                      ✓
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white">
                    {personalInfo.name}
                  </h3>
                  
                  <p className="text-xs font-mono text-cyan-400 mt-0.5 font-semibold">
                    @Obraimss • Financial Software Engineer
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed font-sans">
                    Reading B.Sc. Accounting & Finance with IT at Maseno University. Specialized in financial ledger tools, developer platforms, and modern web applications.
                  </p>

                  {/* Terminal CLI Status Badge */}
                  <div className="mt-4 pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Node Status:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      ACTIVE_STATION
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
