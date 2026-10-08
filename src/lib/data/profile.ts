import type { SystemTelemetry } from "@/types/portfolio";

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
  phone?: string;
  resumeUrl: string;
  system: SystemTelemetry;
  socials: SocialLink[];
  seedCommands: string[];
}

export const profile: Profile = {
  name: "Gael García",
  handle: "Gael García",
  role: "Desarrollador de Software",
  roleSecondary: "Backend Specialist · APIs & Applied AI",
  tagline:
    "Desarrollador de software con 2+ años de experiencia, con fuerte en backend. He trabajado en el sector financiero y asegurador, construyendo APIs, automatizando flujos operativos, con experiencia implementando soluciones de IA aplicada y asegurando la integridad de datos sensibles.",
  location: "Mazatlán, Sinaloa, México",
  email: "gaelgarciabst@gmail.com",
  phone: "(+52) 669 223 9400",
  resumeUrl: "/cv/cv-gaelgarcia.pdf",
  system: {
    status: "available",
    statusText: "Disponible para nuevos retos",
    uptime: "2+ años exp.",
    location: "Mazatlán, Sinaloa, MX",
    kernel: "Linux · Java 21 · PHP · Python · Docker",
    currentCommit: "e4f8b1c",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/gaelgrcb",
      handle: "github.com/gaelgrcb",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gaelgrcb",
      handle: "in/gaelgrcb",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:gaelgarciabst@gmail.com",
      handle: "gaelgarciabst@gmail.com",
      icon: "mail",
    },
    {
      label: "Teléfono",
      href: "tel:+526692239400",
      handle: "(+52) 669 223 9400",
      icon: "phone",
    },
  ],
  seedCommands: ["whoami", "stack --top", "projects"],
};
