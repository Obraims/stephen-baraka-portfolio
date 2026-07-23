import { useState, useEffect } from "react";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import ArchitectSolve from "./components/ArchitectSolve.tsx";
import Skills from "./components/Skills.tsx";
import HyperLedger from "./components/HyperLedger.tsx";
import GithubShowcase from "./components/GithubShowcase.tsx";
import Projects from "./components/Projects.tsx";
import Timeline from "./components/Timeline.tsx";
import CodePlayground from "./components/CodePlayground.tsx";
import SocialHub from "./components/SocialHub.tsx";
import Contact from "./components/Contact.tsx";
import ThemeToggle from "./components/ThemeToggle.tsx";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const pageContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    }
  }
};

const pageSectionVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronize document theme classlists
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Architect & Solve", href: "#architect" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Ledger Engine", href: "#finledger" },
    { name: "GitHub", href: "#github" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-sand-bg text-stone-900 dark:bg-slate-bg dark:text-slate-200 font-sans transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200 bg-grid-pattern">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-stone-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-display font-bold text-sm md:text-base tracking-wider text-stone-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors uppercase select-none">
            Stephen Baraka
          </a>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/Obraims"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1.5"
              title="GitHub Profile"
            >
              <Github className="h-4.5 w-4.5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/stephen-baraka-055b7040b"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1.5"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle theme={theme} setTheme={setTheme} />
            
            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-lg transition-colors shadow-xs"
            >
              Get in Touch
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu collapsible */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-stone-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-stone-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="flex items-center space-x-4 pt-3 border-t border-stone-100 dark:border-slate-800">
                  <a
                    href="https://github.com/Obraims"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 dark:text-slate-400 hover:text-indigo-600"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/stephen-baraka-055b7040b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 dark:text-slate-400 hover:text-indigo-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:obraimssteve@gmail.com"
                    className="text-stone-600 dark:text-slate-400 hover:text-indigo-600"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CORE PORTFOLIO SECTIONS */}
      <motion.main 
        variants={pageContainerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10"
      >
        <motion.div variants={pageSectionVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <About />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <ArchitectSolve />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <Skills />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <HyperLedger />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <GithubShowcase />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <Timeline />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <CodePlayground />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <SocialHub />
        </motion.div>
        <motion.div variants={pageSectionVariants}>
          <Contact />
        </motion.div>
      </motion.main>

      {/* FOOTER SECTION */}
      <footer className="py-12 px-6 md:px-12 bg-stone-100 dark:bg-slate-950 border-t border-stone-200 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-display font-bold text-stone-900 dark:text-white text-base">
              Stephen Baraka
            </span>
            <span className="text-xs text-stone-500 dark:text-slate-400 font-sans">
              Full-Stack Software Engineer & Accounting IT Student • Maseno University
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-medium text-stone-600 dark:text-slate-400">
            <a href="https://github.com/Obraims" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="https://www.linkedin.com/in/stephen-baraka-055b7040b" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="https://www.tiktok.com/@_obraims_" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
              TikTok <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="mailto:obraimssteve@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Email
            </a>
          </div>

        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-200/60 dark:border-slate-900 text-center text-xs text-stone-400 dark:text-slate-600 font-sans">
          © {new Date().getFullYear()} Stephen Baraka. All rights reserved. Built with React, TypeScript & Tailwind CSS.
        </div>
      </footer>

    </div>
  );
}
