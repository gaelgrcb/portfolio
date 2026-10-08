"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsGrid() {
  const { t } = useLanguage();
  const section = t.ui.projectsSection;
  const projectsList = t.projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker={section.kicker}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projectsList.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
