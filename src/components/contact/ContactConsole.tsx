"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { runCommand, type OutputLine } from "@/lib/terminal";
import { cn } from "@/lib/cn";

const kindStyles: Record<OutputLine["kind"], string> = {
  input: "text-noir-200",
  output: "text-noir-300",
  error: "text-terminal-rose",
  success: "text-terminal-green",
  system: "text-terminal-cyan/80",
  meta: "text-noir-500",
};

const PROMPT = "outbox:gaelgrcb$" as const;

/**
 * Focused outbox console. Accepts any command from the shared engine but is
 * seeded to point at `send`. Keeps its own line history so it never collides
 * with the hero terminal.
 */
export function ContactConsole({ className }: { className?: string }) {
  const { language } = useLanguage();
  const [lines, setLines] = useState<OutputLine[]>([
    {
      id: "boot",
      kind: "system",
      text: language === "es"
        ? "bandeja online · canal: directo · latencia: nominal"
        : "outbox online · channel: direct · latency: nominal",
    },
    {
      id: "hint",
      kind: "meta",
      text: language === "es"
        ? 'ejecuta  send --to Gael --message "..."  para iniciar mensaje'
        : 'run  send --to Gael --message "..."  to open a thread',
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLines([
      {
        id: "boot",
        kind: "system",
        text: language === "es"
          ? "bandeja online · canal: directo · latencia: nominal"
          : "outbox online · channel: direct · latency: nominal",
      },
      {
        id: "hint",
        kind: "meta",
        text: language === "es"
          ? 'ejecuta  send --to Gael --message "..."  para iniciar mensaje'
          : 'run  send --to Gael --message "..."  to open a thread',
      },
    ]);
  }, [language]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const out = runCommand(cmd, language);
    const clear = out.some((l) => l.text === "__CLEAR__");
    if (clear) {
      setLines([{ id: "reboot", kind: "system", text: language === "es" ? "bandeja · canal: directo" : "outbox · channel: direct" }]);
    } else {
      setLines((prev) => [
        ...prev,
        { id: `in-${Date.now()}`, kind: "input" as const, text: cmd },
        ...out,
      ]);
    }
    setInput("");
  };

  return (
    <section
      aria-label="Contact console"
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-lg border border-noir-700/70 bg-noir-900/60 shadow-subtle-card",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-noir-800 bg-noir-850/80 px-4 py-2.5">
        <span className="font-mono text-[11px] tracking-wide text-noir-400">
          outbox — {PROMPT}
        </span>
        <span
          aria-hidden
          className="flex items-center gap-1.5 font-mono text-[11px] text-terminal-green"
        >
          <span className="size-1.5 rounded-full bg-terminal-green shadow-glow-green" />
          open
        </span>
      </div>

      <div
        ref={scrollRef}
        aria-live="polite"
        className="min-h-[220px] flex-1 overflow-y-auto px-4 py-3 font-mono text-[12.5px] leading-relaxed sm:text-[13px]"
      >
        {lines.filter((l): l is OutputLine => Boolean(l && l.kind)).map((l) => (
          <p key={l.id} className={cn("whitespace-pre-wrap break-words", kindStyles[l.kind] ?? "text-noir-300")}>
            {l.kind === "input" ? (
              <>
                <span className="text-terminal-green">{PROMPT}</span> {l.text}
              </>
            ) : (
              l.text
            )}
          </p>
        ))}
      </div>

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-noir-800 bg-noir-950/60 px-4 py-2.5"
      >
        <label htmlFor="outbox-input" className="sr-only">
          Message
        </label>
        <span aria-hidden className="shrink-0 font-mono text-[12.5px] text-terminal-green sm:text-[13px]">
          {PROMPT}
        </span>
        <input
          id="outbox-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder={language === "es" ? 'send --to Gael --message "hola"' : 'send --to Gael --message "hello"'}
          className="min-w-0 flex-1 bg-transparent font-mono text-[12.5px] text-noir-100 caret-terminal-green outline-none placeholder:text-noir-600 sm:text-[13px]"
        />
        <button
          type="submit"
          className="shrink-0 rounded border border-noir-700 bg-noir-850/60 px-2.5 py-1 font-mono text-[11px] text-noir-300 transition-colors hover:border-terminal-green/40 hover:text-terminal-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60"
        >
          run
        </button>
      </form>
    </section>
  );
}
