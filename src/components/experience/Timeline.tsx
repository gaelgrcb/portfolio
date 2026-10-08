"use client";

import type { ExperienceCommit } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

function CommitNode({ entry, index }: { entry: ExperienceCommit; index: number }) {
  const isFirst = index === 0;

  return (
    <li className="relative pl-8 sm:pl-10">
      {/* rail */}
      <span
        aria-hidden
        className="absolute left-[9px] top-0 h-full w-px bg-noir-800 sm:left-[11px]"
      />
      {isFirst ? (
        <span
          aria-hidden
          className="absolute left-[3px] top-1 flex size-3.5 items-center justify-center rounded-full border border-terminal-green/60 bg-noir-950 sm:left-[5px] sm:size-4"
        >
          <span className="size-1.5 rounded-full bg-terminal-green shadow-glow-green" />
        </span>
      ) : (
        <span
          aria-hidden
          className="absolute left-[3px] top-1 flex size-3.5 items-center justify-center rounded-full border border-noir-600 bg-noir-950 sm:left-[5px] sm:size-4"
        >
          <span className="size-1.5 rounded-full bg-noir-500" />
        </span>
      )}

      <div className="pb-12 last:pb-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
          <span
            className={
              isFirst ? "text-terminal-green" : "text-terminal-cyan/80"
            }
          >
            {entry.commitHash}
          </span>
          <span className="text-noir-500">[{entry.branch}]</span>
          <time dateTime={entry.date} className="text-noir-500">
            {entry.date}
          </time>
          <span className="ml-auto rounded border border-noir-700 px-2 py-0.5 text-[10px] uppercase tracking-wider text-noir-400">
            {entry.period}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold tracking-tight text-noir-100 sm:text-xl">
          {entry.role}
        </h3>
        <p className="mt-0.5 font-mono text-sm text-noir-400">
          {entry.company} <span aria-hidden className="text-noir-600">·</span>{" "}
          {entry.location}
        </p>

        <ul className="mt-4 space-y-2.5">
          {entry.impactSummaries.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-sm leading-relaxed text-noir-300">
              <span aria-hidden className="mt-1.5 font-mono text-[10px] text-terminal-green/70">
                +
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </li>
  );
}

export function Timeline() {
  const { t } = useLanguage();
  const section = t.ui.experienceSection;
  const expList = t.experience;

  return (
    <section id="log" aria-labelledby="log-title" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              kicker={section.kicker}
              title={section.title}
              description={section.description}
              className="mb-0"
            />
          </div>
          <Reveal>
            <ol aria-label="Career timeline" className="border-l-0">
              {expList.map((entry, i) => (
                <CommitNode key={entry.commitHash} entry={entry} index={i} />
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
