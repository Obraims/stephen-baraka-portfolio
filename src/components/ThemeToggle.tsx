/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === "light" ? "dark" : "light";
    
    // Smooth clip-path radial expanding lens check
    if (typeof document !== "undefined" && (document as any).startViewTransition) {
      const x = e.clientX;
      const y = e.clientY;
      
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      
      const transition = (document as any).startViewTransition(() => {
        setTheme(nextTheme);
        const root = window.document.documentElement;
        if (nextTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      });
      
      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: nextTheme === "dark" ? clipPath : clipPath.reverse(),
          },
          {
            duration: 500,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: nextTheme === "dark" ? "::view-transition-new(root)" : "::view-transition-old(root)",
          }
        );
      });
    } else {
      // Standard safe fallback
      setTheme(nextTheme);
      const root = window.document.documentElement;
      if (nextTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer transition-colors focus:outline-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ y: -6, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 6, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <Sun className="h-5 w-5 stroke-1.5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -6, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 6, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="h-5 w-5 stroke-1.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
