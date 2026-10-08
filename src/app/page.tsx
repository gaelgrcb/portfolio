import { Hero } from "@/components/hero/Hero";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Timeline } from "@/components/experience/Timeline";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsMatrix />
      <ProjectsGrid />
      <Timeline />
      <ContactSection />
    </>
  );
}
