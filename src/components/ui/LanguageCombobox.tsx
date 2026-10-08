"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";
import type { Language } from "@/lib/i18n/translations";

const LANGUAGES: { code: Language; label: string; short: string; flag: string }[] = [
  { code: "en", label: "English", short: "EN", flag: "🇺🇸" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
];

export function LanguageCombobox({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const currentOption = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      setHighlightedIndex((prev) =>
        e.key === "ArrowDown"
          ? (prev + 1) % LANGUAGES.length
          : (prev - 1 + LANGUAGES.length) % LANGUAGES.length,
      );
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isOpen) {
        handleSelect(LANGUAGES[highlightedIndex].code);
      } else {
        setIsOpen(true);
      }
    }
  };

  return (
    <div ref={containerRef} className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.ui.langSwitcher.label}
        className={cn(
          "group flex items-center gap-1.5 rounded border px-2.5 py-1.5 font-mono text-xs transition-all duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60",
          isOpen
            ? "border-terminal-green/50 bg-noir-850 text-terminal-green shadow-glow-green"
            : "border-noir-700/80 bg-noir-900/60 text-noir-300 hover:border-noir-600 hover:text-noir-100",
        )}
      >
        <Globe className="size-3.5 opacity-70 transition-colors group-hover:text-terminal-green group-hover:opacity-100" />
        <span className="font-semibold">{currentOption.short}</span>
        <ChevronDown
          className={cn(
            "size-3 opacity-60 transition-transform duration-200",
            isOpen && "rotate-180 text-terminal-green opacity-100",
          )}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t.ui.langSwitcher.label}
          className="absolute right-0 z-50 mt-1.5 min-w-[130px] rounded-md border border-noir-700 bg-noir-900/95 p-1 font-mono text-xs shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-noir-500">
            {t.ui.langSwitcher.label}
          </div>
          {LANGUAGES.map((lang, index) => {
            const isSelected = lang.code === language;
            const isHighlighted = highlightedIndex === index;

            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(lang.code)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded px-2.5 py-1.5 text-left transition-colors",
                  isSelected
                    ? "bg-terminal-green/15 text-terminal-green"
                    : isHighlighted
                      ? "bg-noir-800 text-noir-100"
                      : "text-noir-300 hover:bg-noir-800 hover:text-noir-100",
                )}
              >
                <span className="flex items-center gap-1.5">
                  <span aria-hidden className="text-xs">{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
                {isSelected && <Check className="size-3.5 text-terminal-green" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
