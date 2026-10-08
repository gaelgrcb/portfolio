"use client";

import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";
import type { SocialLink } from "@/lib/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ContactConsole } from "@/components/contact/ContactConsole";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
};

export function ContactSection() {
  const { t } = useLanguage();
  const profile = t.profile;
  const section = t.ui.contactSection;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* left — channels */}
          <div>
            <SectionHeading
              kicker={section.kicker}
              title={section.title}
              description={section.description}
              className="mb-8"
            />

            <ul className="space-y-3">
              {profile.socials.map((social: SocialLink, i: number) => {
                const Icon = iconMap[social.icon] ?? Mail;
                return (
                  <Reveal key={social.handle} delay={i * 0.06}>
                    <li className="flex items-center gap-3 rounded-lg border border-noir-800 bg-noir-900/40 p-4 transition-colors hover:border-noir-600">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded border border-noir-700 bg-noir-850/60 text-noir-400">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-noir-500">
                          {social.label}
                        </p>
                        <a
                          href={social.href}
                          target={social.href.startsWith("mailto") || social.href.startsWith("tel") ? undefined : "_blank"}
                          rel="noreferrer"
                          className="block truncate font-mono text-sm text-noir-200 transition-colors hover:text-terminal-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
                        >
                          {social.handle}
                        </a>
                      </div>
                      <CopyButton value={social.handle} label={social.label} />
                    </li>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center gap-2 font-mono text-xs text-noir-500">
                <span aria-hidden className="text-terminal-green">●</span>
                {section.responseWindow} · {section.timezone}
              </p>
            </Reveal>
          </div>

          {/* right — console */}
          <Reveal delay={0.1} className="min-h-[360px]">
            <ContactConsole className="h-full min-h-[360px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
