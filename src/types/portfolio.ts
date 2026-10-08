export type SystemStatus = "optimal" | "degraded" | "maintenance";

export interface SystemTelemetry {
  status: "available" | "busy" | "stealth";
  statusText: string;
  uptime: string;
  location: string;
  kernel: string;
  currentCommit: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "x" | "rss";
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  roleSecondary: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  system: SystemTelemetry;
  socials: SocialLink[];
  seedCommands: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  domain: string;
  description: string;
  skills: {
    name: string;
    level: "production" | "advanced" | "proficient";
    highlight?: boolean;
    tags?: string[];
  }[];
  architectureHighlights: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  archType: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceCommit {
  commitHash: string;
  branch: string;
  date: string;
  period: string;
  role: string;
  company: string;
  location: string;
  impactSummaries: string[];
  technologies: string[];
}

export interface TerminalCommandResponse {
  type: "text" | "json" | "error" | "table" | "action";
  payload: string | Record<string, unknown> | Array<Record<string, unknown>>;
}
