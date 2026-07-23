export interface Project {
  id: number | string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl: string;
  highlights: string[];
  learning: string[];
  timeline: string;
  featured: boolean;
  category: "Fullstack" | "Frontend" | "Finance & IT";
}

export interface SkillItem {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  experience: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: SkillItem[];
}

export interface GitHubCommit {
  repo: string;
  message: string;
  date: string;
  sha: string;
}

export interface InteractiveTerminalCommand {
  command: string;
  description: string;
  output: string | string[] | (() => string | string[]);
}
