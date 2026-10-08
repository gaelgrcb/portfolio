"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { SkillCategory } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillIcon } from "@/components/skills/SkillIcon";

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article
        aria-labelledby={`skill-${category.id}-title`}
        className="flex h-full flex-col rounded-lg border border-noir-700/70 bg-noir-900/40 p-5 shadow-subtle-card transition-colors duration-300 hover:border-noir-600 sm:p-6"
      >
        <header className="flex items-baseline justify-between gap-3 border-b border-noir-800 pb-4">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-terminal-green/80">
              // {String(index + 1).padStart(2, "0")}
            </p>
            <h3
              id={`skill-${category.id}-title`}
              className="mt-1.5 text-lg font-semibold tracking-tight text-noir-100"
            >
              {category.title}
            </h3>
          </div>
        </header>

        <p className="mt-4 text-sm leading-relaxed text-noir-400">{category.description}</p>

        {/* Skills grid with SVG icons */}
        <div className="mt-5 flex flex-1 flex-col gap-2.5">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-lg border border-noir-800/80 bg-noir-900/60 p-3 transition-all duration-200 hover:border-noir-600 hover:bg-noir-850/80"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-noir-700/60 bg-noir-850 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <SkillIcon name={skill.name} className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-sm font-medium text-noir-100 group-hover:text-terminal-green transition-colors">
                  {skill.name}
                </p>
                {skill.tags ? (
                  <p className="mt-0.5 truncate font-mono text-[11px] text-noir-400">
                    {skill.tags.join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function SkillsMatrix() {
  const { t } = useLanguage();
  const section = t.ui.skillsSection;
  const categories = t.skills;

  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker={section.kicker}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* Soft Skills + Credentials row */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Soft skills */}
          <Reveal delay={0.24}>
            <div className="flex h-full flex-col rounded-lg border border-noir-700/70 bg-noir-900/40 p-5 shadow-subtle-card sm:p-6">
              <div className="flex items-center gap-2 border-b border-noir-800 pb-3">
                <span aria-hidden className="font-mono text-xs text-terminal-green">✦</span>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-noir-200">
                  {section.softSkillsTitle}
                </h4>
              </div>
              <ul className="mt-4 space-y-2.5">
                {t.softSkills?.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-noir-300">
                    <span aria-hidden className="mt-0.5 font-mono text-[11px] text-terminal-green">
                      +
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Education & Certifications */}
          <Reveal delay={0.32}>
            <div className="flex h-full flex-col rounded-lg border border-noir-700/70 bg-noir-900/40 p-5 shadow-subtle-card sm:p-6">
              <div className="flex items-center gap-2 border-b border-noir-800 pb-3">
                <span aria-hidden className="font-mono text-xs text-terminal-cyan">◈</span>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-noir-200">
                  {section.credentialsTitle}
                </h4>
              </div>
              <div className="mt-4 space-y-4">
                {t.education?.map((edu, idx) => (
                  <div key={idx} className="border-b border-noir-800/60 pb-3.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <p className="font-mono text-xs font-semibold text-noir-100">{edu.institution}</p>
                      <span className="font-mono text-[10px] text-noir-500">{edu.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-terminal-cyan">{edu.degree}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-noir-500">{edu.location}</p>
                  </div>
                ))}
                {t.certifications?.map((cert, idx) => (
                  <div key={idx} className="pt-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-mono text-xs font-semibold text-noir-100">{cert.title}</p>
                      <span className="rounded border border-terminal-green/30 bg-terminal-green/10 px-1.5 py-0.5 font-mono text-[10px] text-terminal-green">
                        {cert.issuer}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {cert.modules.map((mod, midx) => (
                        <li key={mod} className="flex items-center gap-2 font-mono text-[11px] text-noir-400">
                          <span aria-hidden className="text-noir-600">↳</span>
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
