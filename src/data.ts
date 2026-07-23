import { Project, SkillCategory } from "./types";

export const personalInfo = {
  name: "Stephen Baraka",
  title: "Financial Software Engineer",
  subtitle: "Bridging Financial Engineering, Accounting Logic & Modern Full-Stack Systems",
  email: "obraimssteve@gmail.com",
  secondaryEmail: "stephenbaraka9283@gmail.com",
  github: "https://github.com/Obraim",
  linkedin: "https://www.linkedin.com/in/stephen-baraka-055b7040b",
  twitter: "https://x.com/Obraimss",
  tiktok: "https://www.tiktok.com/@_obraims_",
  whatsapp: "https://wa.me/254743717285",
  avatar: "https://unavatar.io/twitter/Obraimss",
  coverPhoto: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000&auto=format&fit=crop",
  university: "Maseno University",
  degree: "B.Sc. Accounting and Finance with IT",
  bio: [
    "I am a Financial Software Engineer studying B.Sc. Accounting & Finance with IT at Maseno University. My mission is to bridge financial principles, accounting discipline, and modern full-stack web engineering by building digital tools that solve real-world problems.",
    "Understanding double-entry ledger mathematics and financial statement structures allows me to engineer software that is mathematically precise, clean, and zero-error.",
    "I focus on writing high-performance TypeScript, building responsive web applications, and creating scalable automation tools."
  ],
  terminalWelcome: [
    "Initializing Stephen Baraka's Shell Terminal...",
    "Specialization: Financial Software Engineering & Full-Stack Systems",
    "Status: ONLINE | Target Node: @Obraimss",
    "Type 'help' to audit available console profiles."
  ]
};

export const projects: Project[] = [
  {
    id: "gitvora",
    title: "Gitvora",
    slug: "gitvora",
    shortDesc: "GitHub Portfolio Generator & Realtime Repository Analytics Dashboard.",
    fullDesc: "Gitvora connects with the GitHub API to automatically generate developer portfolios and track repository contribution metrics in real-time.",
    problem: "Developers spend excessive time manually building and updating static portfolio sites.",
    solution: "Automates developer portfolio generation by pulling real-time repository activity, language splits, and contribution stats into a responsive dashboard.",
    tech: ["Next.js", "React", "GitHub API", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://gitvora-jf2ugr9qe-obraims-projects-d0bfc7b8.vercel.app",
    githubUrl: "https://github.com/Obraims/gitvora",
    highlights: [
      "Real-time GitHub REST API integration with token caching",
      "Dynamic repository statistics and contribution charts",
      "Responsive client-side Next.js performance",
      "One-click Vercel cloud deployment pipeline"
    ],
    learning: [
      "Mastered GitHub REST API rate-limiting handling",
      "Optimized client-side rendering with SWR caching",
      "Designed clean glassmorphic dashboard layouts"
    ],
    timeline: "2024 - Active",
    featured: true,
    category: "Frontend"
  },
  {
    id: "dev-tier",
    title: "Dev-Tier",
    slug: "dev-tier",
    shortDesc: "Interactive Tier-List Platform for Developer Tools & Libraries.",
    fullDesc: "An interactive platform allowing software engineers to rate, review, and rank development tools, frameworks, and libraries across multiple categories.",
    problem: "Evaluating and choosing effective developer tooling is fragmented across blogs and forums.",
    solution: "Built a drag-and-drop tier list ranking application with real-time category filtering and community voting.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://dev-tier-7oeydr2iv-obraims-projects-d0bfc7b8.vercel.app",
    githubUrl: "https://github.com/Obraims/dev-tier",
    highlights: [
      "Sub-50ms UI drag-and-drop tier reordering",
      "Indexed over 250+ developer tools across 8 categories",
      "RESTful API backend powered by PostgreSQL",
      "Custom rating matrix algorithm"
    ],
    learning: [
      "Implemented state synchronization across complex tier lists",
      "Designed relational PostgreSQL schemas for user reviews and rankings",
      "Enforced strict type safety across full-stack TypeScript interfaces"
    ],
    timeline: "2024 - Active",
    featured: true,
    category: "Fullstack"
  },
  {
    id: "knightbot-md",
    title: "Knightbot-MD",
    slug: "knightbot-md",
    shortDesc: "Modular WhatsApp Automation & Command Bot Microservice.",
    fullDesc: "A multi-device WhatsApp automation system and command bot built with Python, Node.js, and containerized Docker services.",
    problem: "Automating messaging workflows and instant customer responses across WhatsApp multi-device protocols is complex.",
    solution: "Engineered a modular command handler microservice featuring scheduled triggers, sandboxed execution, and multi-device connection persistence.",
    tech: ["Python", "Docker", "Node.js", "Baileys API", "Linux"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Obraims/Knightbot-MD",
    highlights: [
      "99.9% uptime on containerized Docker deployment",
      "Modular command handler architecture",
      "Multi-device session persistence and auto-reconnect",
      "Low CPU and RAM footprint under 120MB"
    ],
    learning: [
      "Mastered containerized microservice deployment with Docker",
      "Handled asynchronous WebSockets and polling queues",
      "Built resilient error recovery pipelines"
    ],
    timeline: "2024 - Active",
    featured: true,
    category: "Fullstack"
  },
  {
    id: "finledger-engine",
    title: "FinLedger",
    slug: "finledger",
    shortDesc: "Financial Ledger Visualizer & Double-Entry Math Tool.",
    fullDesc: "An interactive double-entry bookkeeping ledger analyzer that parses transaction logs, executes zero-error integer currency arithmetic, and renders balance sheets, income statements, and tax breakdowns.",
    problem: "Traditional double-entry accounting desktop software is clunky and difficult to visualize in modern browsers.",
    solution: "Built a browser-side financial engine utilizing minor-unit (cents) integer arithmetic for zero floating-point errors, paired with Recharts balance graphs.",
    tech: ["TypeScript", "React", "Recharts", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    demoUrl: "#sandbox",
    githubUrl: "https://github.com/Obraim",
    highlights: [
      "Zero-floating-point-error minor-unit integer arithmetic",
      "Interactive balance sheet and income statement graphs",
      "Dynamic VAT/Tax breakdown calculator",
      "CSV & JSON transaction log parser"
    ],
    learning: [
      "Applied GAAP double-entry ledger rules in TypeScript",
      "Optimized minor-unit bigint arithmetic algorithms",
      "Rendered dynamic financial flow lines using Recharts"
    ],
    timeline: "2024 - Active",
    featured: true,
    category: "Finance & IT"
  }
];

export const skillsData: { [key: string]: SkillCategory } = {
  languages: {
    category: "Languages",
    color: "bg-cyber-blue",
    skills: [
      { name: "TypeScript", level: "Advanced", experience: "2+ years" },
      { name: "JavaScript (ES6+)", level: "Advanced", experience: "3+ years" },
      { name: "Python", level: "Intermediate", experience: "2 years" },
      { name: "SQL", level: "Intermediate", experience: "2 years" },
      { name: "HTML5 / CSS3", level: "Advanced", experience: "3+ years" }
    ]
  },
  frontend: {
    category: "Frontend Engineering",
    color: "bg-cyber-cyan",
    skills: [
      { name: "React 18/19", level: "Advanced", experience: "2+ years" },
      { name: "Next.js", level: "Intermediate", experience: "1.5 years" },
      { name: "Tailwind CSS", level: "Advanced", experience: "2+ years" },
      { name: "Framer Motion", level: "Intermediate", experience: "1.5 years" },
      { name: "Vite", level: "Advanced", experience: "2 years" },
      { name: "Recharts", level: "Intermediate", experience: "1 year" }
    ]
  },
  backend: {
    category: "Backend & Systems",
    color: "bg-cyber-green",
    skills: [
      { name: "Node.js", level: "Intermediate", experience: "2 years" },
      { name: "Express.js", level: "Intermediate", experience: "2 years" },
      { name: "RESTful API Design", level: "Advanced", experience: "2 years" },
      { name: "JWT Auth & Middleware", level: "Advanced", experience: "1.5 years" }
    ]
  },
  databases: {
    category: "Databases",
    color: "bg-amber-500",
    skills: [
      { name: "PostgreSQL", level: "Intermediate", experience: "1.5 years" },
      { name: "SQLite", level: "Intermediate", experience: "1.5 years" },
      { name: "3NF Relational Schema", level: "Advanced", experience: "2 years" }
    ]
  },
  financeIT: {
    category: "Financial Systems",
    color: "bg-cyber-purple",
    skills: [
      { name: "Double-Entry Bookkeeping Math", level: "Advanced", experience: "2+ years" },
      { name: "Financial Statements (Balance Sheet/Income)", level: "Advanced", experience: "2+ years" },
      { name: "Integer Currency Arithmetic", level: "Advanced", experience: "2+ years" },
      { name: "Business Logic & Audit Rules", level: "Advanced", experience: "2+ years" }
    ]
  },
  devops: {
    category: "Cloud & DevOps",
    color: "bg-indigo-500",
    skills: [
      { name: "Vercel Cloud", level: "Advanced", experience: "2 years" },
      { name: "Docker", level: "Intermediate", experience: "1 year" },
      { name: "Git & GitHub", level: "Advanced", experience: "3+ years" },
      { name: "Linux CLI", level: "Intermediate", experience: "2 years" }
    ]
  }
};
