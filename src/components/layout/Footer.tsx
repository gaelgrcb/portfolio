"use client";

import type { SocialLink } from "@/lib/data/profile";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const profile = t.profile;

  return (
    <footer className="border-t border-noir-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-noir-500">
          <span aria-hidden className="text-terminal-green">$</span> {t.ui.footer.builtWith}
        </p>
        <nav aria-label="Footer" className="flex items-center gap-5 font-mono text-xs">
          {profile.socials.map((s: SocialLink) => (
            <a
              key={s.handle}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-noir-400 transition-colors hover:text-terminal-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
            >
              {s.handle}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
