import React, { useState } from "react";
import { 
  Github, Linkedin, Twitter, Mail, Copy, Check, ExternalLink, MessageCircle, Share2
} from "lucide-react";

export default function SocialHub() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("obraimssteve@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const channels = [
    {
      name: "GitHub",
      handle: "@Obraims",
      url: "https://github.com/Obraims",
      description: "Explore my open-source repositories, full-stack projects, and code commit history.",
      icon: Github,
      badge: "Code & Repos",
      accent: "hover:border-stone-400 dark:hover:border-slate-500"
    },
    {
      name: "LinkedIn",
      handle: "Stephen Baraka",
      url: "https://www.linkedin.com/in/stephen-baraka-055b7040b",
      description: "Connect with me professionally to discuss software engineering, finance IT, and career opportunities.",
      icon: Linkedin,
      badge: "Professional Network",
      accent: "hover:border-blue-500/50"
    },
    {
      name: "TikTok",
      handle: "@_obraims_",
      url: "https://www.tiktok.com/@_obraims_?is_from_webapp=1&sender_device=pc",
      description: "Tech showcases, software breakdown videos, and coding updates.",
      icon: Share2,
      badge: "Tech Content",
      accent: "hover:border-pink-500/50"
    },
    {
      name: "Twitter / X",
      handle: "@Obraimss",
      url: "https://x.com/Obraimss",
      description: "Engineering thoughts, tech industry news, and development updates.",
      icon: Twitter,
      badge: "Updates & Thoughts",
      accent: "hover:border-sky-500/50"
    },
    {
      name: "WhatsApp Direct",
      handle: "+254 743 717 285",
      url: "https://wa.me/254743717285",
      description: "Direct instant message line for fast project inquiries or quick chat.",
      icon: MessageCircle,
      badge: "Instant Chat",
      accent: "hover:border-emerald-500/50"
    },
    {
      name: "Direct Email",
      handle: "obraimssteve@gmail.com",
      url: "mailto:obraimssteve@gmail.com",
      description: "Send direct project inquiries, contract requests, or questions.",
      icon: Mail,
      badge: "Email Contact",
      accent: "hover:border-indigo-500/50"
    }
  ];

  return (
    <section 
      id="social-hub" 
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-stone-50 dark:bg-slate-950/40 border-b border-stone-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-semibold rounded-full uppercase tracking-wider mb-3">
              <span>Connect & Socials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 dark:text-white">
              Online Profiles & Channels
            </h2>
            <p className="text-stone-600 dark:text-slate-400 font-sans mt-2 text-base max-w-xl">
              Connect across GitHub, LinkedIn, TikTok, WhatsApp, or send a direct email.
            </p>
          </div>

          <button
            onClick={copyEmailToClipboard}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 hover:bg-stone-50 dark:hover:bg-slate-750 text-stone-800 dark:text-slate-200 text-xs font-mono font-medium rounded-xl transition cursor-pointer shadow-xs"
          >
            {copiedEmail ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
            <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
          </button>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl transition-all duration-300 shadow-xs flex flex-col justify-between group ${channel.accent}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-stone-50 dark:bg-slate-800 rounded-xl text-stone-800 dark:text-slate-200 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-400 rounded-md">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-stone-900 dark:text-white flex items-center gap-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {channel.name}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <span className="text-xs font-mono font-medium text-stone-500 dark:text-slate-400 block mt-0.5">
                    {channel.handle}
                  </span>

                  <p className="text-xs text-stone-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  <span>Visit Profile</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
