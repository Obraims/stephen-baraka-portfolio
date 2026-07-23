import React from "react";
import { motion } from "motion/react";
import { skillsData } from "../data";
import { Wrench, Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800/80 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 text-cyan-400 text-xs font-mono font-semibold rounded-full border border-cyan-800/40 uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Technical Stack & Specializations
          </h2>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            High-performance technical stack, development tools, and financial software engineering capabilities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([key, cat], catIdx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <h3 className="text-base font-display font-bold text-white uppercase tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {cat.skills.map((sk) => (
                    <div 
                      key={sk.name}
                      className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl flex items-center justify-between text-xs"
                    >
                      <span className="font-mono font-medium text-slate-200">
                        {sk.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 bg-cyan-950/60 border border-cyan-800/40 rounded-md">
                          {sk.level}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {sk.experience}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
