import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, MessageSquare, ExternalLink, Sparkles, Send } from "lucide-react";
import { personalInfo } from "../data";

export default function SocialHub() {
  const platforms = [
    {
      name: "GitHub",
      handle: "@Obraim",
      desc: "Explore my open-source software repositories, contribution graph, and source code.",
      url: personalInfo.github,
      icon: Github,
      color: "from-slate-700 to-slate-900",
      accent: "text-slate-200 border-slate-700"
    },
    {
      name: "LinkedIn",
      handle: "Stephen Baraka",
      desc: "Connect professionally, view my career roadmap, and explore engineering collaborations.",
      url: personalInfo.linkedin,
      icon: Linkedin,
      color: "from-blue-600 to-sky-700",
      accent: "text-sky-400 border-blue-800/50"
    },
    {
      name: "Twitter / X",
      handle: "@Obraimss",
      desc: "Follow my software engineering updates, tech insights, and project announcements.",
      url: personalInfo.twitter,
      icon: Twitter,
      color: "from-sky-500 to-cyan-600",
      accent: "text-cyan-400 border-sky-800/50"
    },
    {
      name: "TikTok",
      handle: "@_obraims_",
      desc: "Watch short coding clips, developer tools demonstrations, and tech breakdowns.",
      url: personalInfo.tiktok,
      icon: Send,
      color: "from-pink-600 to-rose-700",
      accent: "text-pink-400 border-pink-800/50"
    },
    {
      name: "WhatsApp Direct",
      handle: "+254 743 717 285",
      desc: "Reach out directly for rapid communication, project discussions, and inquiries.",
      url: personalInfo.whatsapp,
      icon: MessageSquare,
      color: "from-emerald-600 to-teal-700",
      accent: "text-emerald-400 border-emerald-800/50"
    },
    {
      name: "Email Communication",
      handle: personalInfo.email,
      desc: "Send formal inquiries, contract proposals, or project briefs via email.",
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "from-violet-600 to-purple-700",
      accent: "text-purple-400 border-purple-800/50"
    }
  ];

  return (
    <section 
      id="connect" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800/80 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 text-cyan-400 text-xs font-mono font-semibold rounded-full border border-cyan-800/40 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Connectivity</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Connect Across Platforms
          </h2>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Find me across developer platforms, social networks, and direct communication channels.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-slate-950 border ${p.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition">
                      {p.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 font-semibold block mt-0.5">
                      {p.handle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition">
                  <span>Connect Node</span>
                  <span>↗</span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
