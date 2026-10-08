"use client";

import type { FC } from "react";
import {
  SiPhp,
  SiLaravel,
  SiSpringboot,
  SiTypescript,
  SiAngular,
  SiReact,
  SiPython,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiCisco,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Blocks, Database, Network, ShieldCheck } from "lucide-react";

export interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: FC<SkillIconProps> = ({ name, className = "size-5" }) => {
  const norm = name.toLowerCase();

  // Java & Spring Boot
  if (norm.includes("spring")) {
    return <SiSpringboot className={className} style={{ color: "#6db33f" }} aria-hidden="true" />;
  }
  if (norm.includes("java")) {
    return <FaJava className={className} style={{ color: "#f89820" }} aria-hidden="true" />;
  }

  // PHP & Laravel
  if (norm.includes("laravel")) {
    return <SiLaravel className={className} style={{ color: "#ff2d20" }} aria-hidden="true" />;
  }
  if (norm.includes("php")) {
    return <SiPhp className={className} style={{ color: "#777bb4" }} aria-hidden="true" />;
  }

  // TypeScript / Angular / React
  if (norm.includes("typescript")) {
    return <SiTypescript className={className} style={{ color: "#3178c6" }} aria-hidden="true" />;
  }
  if (norm.includes("angular")) {
    return <SiAngular className={className} style={{ color: "#dd0031" }} aria-hidden="true" />;
  }
  if (norm.includes("react")) {
    return <SiReact className={className} style={{ color: "#61dafb" }} aria-hidden="true" />;
  }

  // Python & FastAPI
  if (norm.includes("fastapi")) {
    return <SiFastapi className={className} style={{ color: "#05998b" }} aria-hidden="true" />;
  }
  if (norm.includes("python")) {
    return <SiPython className={className} style={{ color: "#3776ab" }} aria-hidden="true" />;
  }

  // Databases
  if (norm.includes("postgres")) {
    return <SiPostgresql className={className} style={{ color: "#4169e1" }} aria-hidden="true" />;
  }
  if (norm.includes("mysql")) {
    return <SiMysql className={className} style={{ color: "#4479a1" }} aria-hidden="true" />;
  }
  if (norm.includes("sql server")) {
    return <Database className={className} style={{ color: "#cc292b" }} aria-hidden="true" />;
  }

  // Infrastructure & DevOps
  if (norm.includes("docker")) {
    return <SiDocker className={className} style={{ color: "#2496ed" }} aria-hidden="true" />;
  }
  if (norm.includes("github")) {
    return <SiGithubactions className={className} style={{ color: "#2088ff" }} aria-hidden="true" />;
  }
  if (norm.includes("git")) {
    return <SiGit className={className} style={{ color: "#f05032" }} aria-hidden="true" />;
  }
  if (norm.includes("linux") || norm.includes("shell")) {
    return <SiLinux className={className} style={{ color: "#fcc624" }} aria-hidden="true" />;
  }

  // Architecture, Security & Networks
  if (norm.includes("cisco") || norm.includes("ccna") || norm.includes("network")) {
    return <SiCisco className={className} style={{ color: "#1ba0d7" }} aria-hidden="true" />;
  }
  if (norm.includes("seguridad") || norm.includes("security") || norm.includes("rbac") || norm.includes("jwt")) {
    return <ShieldCheck className={className} style={{ color: "#06b6d4" }} aria-hidden="true" />;
  }
  if (norm.includes("rest") || norm.includes("webhook") || norm.includes("api")) {
    return <Network className={className} style={{ color: "#10b981" }} aria-hidden="true" />;
  }
  if (norm.includes("solid") || norm.includes("pattern") || norm.includes("patrones")) {
    return <Blocks className={className} style={{ color: "#a855f7" }} aria-hidden="true" />;
  }

  return <Blocks className={className} style={{ color: "#10b981" }} aria-hidden="true" />;
};
