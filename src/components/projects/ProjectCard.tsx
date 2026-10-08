"use client";

import { ArrowUpRight, FolderGit2, Globe } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const ui = t.ui.projectsSection;
  const metrics = project.metrics.slice(0, 3);

  return (
    <article
      aria-labelledby={`project-${project.id}`}
      className={cn(
        "group relative flex h-full flex-col rounded-lg border bg-noir-900/40 p-5 shadow-subtle-card transition-colors duration-300 sm:p-6",
        project.featured
          ? "border-noir-700/80 hover:border-terminal-green/40"
          : "border-noir-800 hover:border-noir-600",
      )}
    >
      {project.featured ? (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-green/60 to-transparent"
        />
      ) : null}

      <header className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3
          id={`project-${project.id}`}
          className="font-mono text-base font-semibold tracking-tight text-noir-100 transition-colors group-hover:text-terminal-green sm:text-lg"
        >
          {project.title}
        </h3>
        <span className="font-mono text-[11px] text-noir-500">{project.archType}</span>
      </header>

      <p className="mt-2.5 text-sm leading-relaxed text-noir-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech, i) => (
          <Badge key={tech} variant={i === 0 ? "green" : "neutral"}>
            {tech}
          </Badge>
        ))}
      </div>

      <details className="group/details mt-4 rounded border border-noir-800 bg-noir-950/40">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3.5 py-2.5 font-mono text-xs text-noir-400 transition-colors hover:text-noir-200 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="text-terminal-cyan">»</span> {ui.problemSolutionToggle}
          </span>
          <span
            aria-hidden
            className="text-noir-500 transition-transform duration-200 group-open/details:rotate-90"
          >
            ›
          </span>
        </summary>
        <div className="space-y-2.5 border-t border-noir-800 px-3.5 py-3 text-xs leading-relaxed">
          <div className="text-noir-300">
            <span className="mr-2 inline-block rounded bg-noir-800/80 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-rose">
              {ui.challengePrefix}
            </span>
            <span>{project.challenge}</span>
          </div>
          <div className="text-noir-300">
            <span className="mr-2 inline-block rounded bg-noir-800/80 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-green">
              {ui.solutionPrefix}
            </span>
            <span>{project.solution}</span>
          </div>
        </div>
      </details>

      {metrics.length > 0 ? (
        <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-noir-800 pt-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-noir-500">
                {m.label}
              </dt>
              <dd className="mt-1 font-mono text-sm font-semibold text-terminal-cyan">
                {m.value}
              </dd>
              <dd className="mt-0.5 text-[10px] leading-snug text-noir-500">{m.detail}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <footer className="mt-auto flex items-center gap-4 pt-5">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-noir-300 transition-colors hover:text-terminal-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
          >
            <FolderGit2 className="size-3.5" aria-hidden />
            {ui.sourceBtn}
            <ArrowUpRight
              aria-hidden
              className="size-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-noir-300 transition-colors hover:text-terminal-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-cyan/60"
          >
            <Globe className="size-3.5" aria-hidden />
            {ui.demoBtn}
            <ArrowUpRight aria-hidden className="size-3 opacity-60" />
          </a>
        ) : null}
      </footer>
    </article>
  );
}
