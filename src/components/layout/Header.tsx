"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageCombobox } from "@/components/ui/LanguageCombobox";
import { cn } from "@/lib/cn";

/**
 * Fixed, hairline-top header. A single IntersectionObserver tracks the active
 * section so the current nav item gets a green tick — no scroll listeners,
 * no layout thrash.
 */
export function Header() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: t.ui.nav.overview },
    { id: "stack", label: t.ui.nav.stack },
    { id: "projects", label: t.ui.nav.projects },
    { id: "log", label: t.ui.nav.log },
    { id: "contact", label: t.ui.nav.contact },
  ] as const;

  useEffect(() => {
    const sections = ["hero", "stack", "projects", "log", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-noir-800/80 bg-noir-950/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm text-noir-200 transition-colors hover:text-noir-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terminal-green/60"
        >
          <span className="flex items-center gap-1.5">
            <span aria-hidden className="inline-block size-2 rounded-full bg-terminal-green shadow-glow-green" />
            <span className="text-noir-100">Gael García</span>
            <span className="text-noir-500">--</span>
            <span className="text-noir-500">portfolio</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "page" : undefined}
              className={cn(
                "rounded px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60",
                active === item.id
                  ? "text-terminal-green"
                  : "text-noir-400 hover:text-noir-200",
              )}
            >
              <span aria-hidden className="mr-1 opacity-70">
                {active === item.id ? ">" : "."}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageCombobox />

          <a
            href="#contact"
            className="rounded border border-terminal-green/30 bg-terminal-green/10 px-3 py-1.5 font-mono text-xs text-terminal-green transition-colors hover:bg-terminal-green/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
          >
            {t.ui.hireBtn}
          </a>
        </div>
      </div>
    </header>
  );
}
