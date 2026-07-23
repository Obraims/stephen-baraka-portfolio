import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sun, Moon, Github, Linkedin, Twitter, Mail, Clock, 
  Menu, X, ArrowUpRight, Sparkles, Terminal, Activity 
} from "lucide-react";

import Hero from "./components/Hero";
import About from "./components/About";
import FinancialIdentityPhilosophy from "./components/FinancialIdentityPhilosophy";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import SystemSandbox from "./components/SystemSandbox";
import Skills from "./components/Skills";
import WhatImBuilding from "./components/WhatImBuilding";
import SocialHub from "./components/SocialHub";
import Contact from "./components/Contact";
import { personalInfo } from "./data";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme reveal portal coordinates
  const [revealCoords, setRevealCoords] = useState({ x: 0, y: 0 });
  const [isRevealing, setIsRevealing] = useState(false);

  // Live East Africa Time (EAT UTC+3) Clock
  const [eatTime, setEatTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const eatOffsetNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3 * 3600000));
      setEatTime(eatOffsetNow.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = "Stephen Baraka | Financial Software Engineer";
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Circular Clip-Path Portal Theme Toggle
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDark(prev => !prev);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setRevealCoords({ x, y });
    setIsRevealing(true);
    setTimeout(() => {
      setIsRevealing(false);
    }, 700);
  };

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "philosophy", href: "#philosophy" },
    { name: "journey", href: "#journey" },
    { name: "projects", href: "#projects" },
    { name: "sandbox", href: "#sandbox" },
    { name: "skills", href: "#skills" },
    { name: "focus", href: "#focus" },
    { name: "connect", href: "#connect" },
    { name: "contact", href: "#contact" }
  ];

  // ScrollSpy active link listener
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.name);
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans relative bg-cyber-grid ${
      isDark ? "bg-[#030712] text-[#f8fafc]" : "bg-[#f8fafc] text-[#0f172a]"
    }`}>
      
      {/* Circle Clip Path Portal Overlay for theme transition */}
      {isRevealing && (
        <div 
          className="fixed inset-0 z-[999] pointer-events-none"
          style={{
            background: isDark ? "#030712" : "#f8fafc",
            animation: "reveal-anim 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        />
      )}

      {/* Embedded CSS for keyframe circular clip-path */}
      <style>{`
        @keyframes reveal-anim {
          0% {
            clip-path: circle(0px at ${revealCoords.x}px ${revealCoords.y}px);
          }
          100% {
            clip-path: circle(150% at ${revealCoords.x}px ${revealCoords.y}px);
          }
        }
      `}</style>

      {/* Floating Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isDark 
          ? "bg-[#030712]/90 border-slate-800/80 backdrop-blur-md" 
          : "bg-white/90 border-slate-200/80 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <a 
              href="#home" 
              className="font-display font-bold text-lg tracking-wide select-none group flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-cyber-blue flex items-center justify-center font-mono text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/10 group-hover:scale-105 transition duration-300">
                SB
              </div>
              <span className={`transition ${isDark ? "text-white" : "text-[#0f172a]"} font-mono text-xs hidden sm:inline`}>
                STEPHEN_BARAKA.sh
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-3 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-[11px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider relative transition duration-300 ${
                    activeTab === link.name
                      ? isDark ? "text-cyber-cyan" : "text-cyan-600"
                      : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
                  }`}
                >
                  {link.name}
                  {activeTab === link.name && (
                    <motion.span 
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-cyan rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              
              {/* EAT Local Time Clock Badge */}
              <div className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono leading-none ${
                isDark 
                  ? "bg-slate-950/60 border-slate-800 text-slate-300" 
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}>
                <Clock className="w-3.5 h-3.5 text-cyber-green shrink-0 animate-pulse" />
                <span>Local Time (EAT): {eatTime || "00:00:00"}</span>
              </div>

              {/* Dark Mode Switch Trigger */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme viewport"
                className={`p-2 rounded-xl border cursor-pointer transition duration-300 relative overflow-hidden flex items-center justify-center ${
                  isDark 
                    ? "bg-slate-950 border-slate-800 text-yellow-400 hover:border-slate-700"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
                title="Switch viewport scheme"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute"
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute"
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                </div>
              </button>

              {/* Connect CTA button */}
              <a 
                href="#contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white rounded-xl text-xs font-semibold font-mono tracking-wide uppercase transition shadow-md shadow-cyan-950/20"
              >
                Connect
              </a>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-slate-800 bg-[#030712]/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col space-y-3 font-mono text-xs uppercase">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-cyber-cyan transition py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* CORE STORYTELLING SECTION FLOW */}
      <main className="relative z-10">
        <Hero />
        <About />
        <FinancialIdentityPhilosophy />
        <Timeline />
        <Projects />
        <SystemSandbox />
        <Skills />
        <WhatImBuilding />
        <SocialHub />
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-display font-bold text-white text-base">
              Stephen Baraka
            </span>
            <span className="text-xs text-slate-400 font-sans">
              Financial Software Engineer • Maseno University B.Sc. Accounting & IT
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1">
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1">
              Twitter/X <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition">
              Email
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600 font-mono">
          © {new Date().getFullYear()} Stephen Baraka. All rights reserved. Powered by React 19, TypeScript & Tailwind CSS.
        </div>
      </footer>

    </div>
  );
}
