"use client";

import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/hero/Terminal";

function StatusRow() {
  const { t } = useLanguage();
  const profile = t.profile;
  const s = profile.system;
  const ui = t.ui.hero;

  return (
    <dl className="grid gap-2 font-mono text-xs text-noir-400 sm:grid-cols-2">
      <div className="flex items-center gap-2">
        <dt className="sr-only">{ui.statusLabel}</dt>
        <dd className="flex items-center gap-2">
          <span
            aria-hidden
            className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terminal-green opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-terminal-green" />
          </span>
          <span className="text-terminal-green">● {s.statusText}</span>
        </dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="sr-only">{ui.locationLabel}</dt>
        <dd>
          <span aria-hidden className="text-noir-500">◈</span> {ui.locationLabel}:{" "}
          <span className="text-noir-300">{profile.location}</span>
        </dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="sr-only">{ui.uptimeLabel}</dt>
        <dd>
          <span aria-hidden className="text-noir-500">⏱</span> {ui.uptimeLabel}:{" "}
          <span className="text-noir-300">{s.uptime}</span>
        </dd>
      </div>
      <div className="flex items-center gap-2">
        <dt className="sr-only">{ui.headLabel}</dt>
        <dd>
          <span aria-hidden className="text-noir-500">⎇</span> {ui.headLabel}:{" "}
          <span className="text-terminal-cyan">{s.currentCommit}</span>
          <span className="text-noir-500"> {ui.cleanTree}</span>
        </dd>
      </div>
    </dl>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const profile = t.profile;
  const ui = t.ui.hero;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100vh-3.5rem)] items-center py-20 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        {/* left — typography */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-noir-400">
              <span className="text-terminal-green">$</span> {ui.initCmd} {profile.handle}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <StatusRow />
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-noir-100 sm:text-5xl lg:text-6xl">
              {profile.role}
              <span className="mt-2 block text-2xl font-normal tracking-tight text-noir-400 sm:text-3xl lg:text-4xl">
                {profile.roleSecondary}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-noir-400 sm:text-base">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.socials[0].href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded border border-terminal-green/40 bg-terminal-green/10 px-4 py-2.5 font-mono text-xs text-terminal-green transition-colors hover:bg-terminal-green/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
              >
                <Github className="size-4" aria-hidden />
                {ui.githubBtn}
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={profile.socials[1].href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded border border-noir-700 bg-noir-850/60 px-4 py-2.5 font-mono text-xs text-noir-300 transition-colors hover:border-terminal-cyan/40 hover:text-terminal-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-cyan/60"
              >
                <Linkedin className="size-4" aria-hidden />
                {ui.linkedinBtn}
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-2 rounded border border-noir-700 bg-noir-850/60 px-4 py-2.5 font-mono text-xs text-noir-300 transition-colors hover:border-noir-500 hover:text-noir-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
              >
                <FileText className="size-4" aria-hidden />
                {ui.cvBtn}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded border border-noir-700 bg-noir-850/60 px-4 py-2.5 font-mono text-xs text-noir-300 transition-colors hover:border-noir-500 hover:text-noir-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
              >
                {ui.contactBtn}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-2 border-t border-noir-800/70 pt-6">
              {ui.badges.map((b, idx) => (
                <Badge key={b} variant={idx === 0 ? "green" : idx === 1 ? "cyan" : "neutral"}>
                  {b}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right — terminal */}
        <Reveal delay={0.2} className="w-full flex items-center justify-center">
          <Terminal className="w-full" />
        </Reveal>
      </div>
    </section>
  );
}
