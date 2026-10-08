"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useLanguage } from "@/context/LanguageContext";
import { bootSequence, runCommand, type OutputLine } from "@/lib/terminal";
import { cn } from "@/lib/cn";

const PROMPT = "~/portfolio" as const;

const kindStyles: Record<OutputLine["kind"], string> = {
  input: "text-noir-200",
  output: "text-noir-300",
  error: "text-terminal-rose",
  success: "text-terminal-green",
  system: "text-terminal-cyan/80",
  meta: "text-noir-500",
};

/**
 * Interactive console with fixed height and internal scrolling.
 * Starts with a clean help prompt and never expands the page layout.
 */
export function Terminal({ className }: { className?: string }) {
  const { language } = useLanguage();
  const [lines, setLines] = useState<OutputLine[]>([]);
  const [bootDone, setBootDone] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIndex, setHistIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Instant clean boot sequence
  useEffect(() => {
    const boot = bootSequence(language);
    setLines(boot);
    setBootDone(true);
  }, [language]);

  // Keep the newest line in view within the terminal's internal scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  // Focus the input once boot finishes, and when the user clicks the window.
  useEffect(() => {
    if (bootDone) inputRef.current?.focus();
  }, [bootDone]);

  const append = useCallback((batch: OutputLine[]) => {
    setLines((prev) => {
      const valid = batch.filter(Boolean);
      const next = [...prev, ...valid];
      // Cap very long sessions so memory stays small.
      return next.length > 400 ? next.slice(next.length - 400) : next;
    });
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const cmd = input.trim();
      if (!cmd) return;

      const out = runCommand(cmd, language);
      const clear = out.some((l) => l.text === "__CLEAR__");
      if (clear) {
        setLines([]);
      } else {
        append([{ id: `in-${Date.now()}`, kind: "input", text: cmd }, ...out]);
      }
      setHistory((prev) => [cmd, ...prev.slice(0, 20)]);
      setHistIndex(0);
      setInput("");
    },
    [append, input, language],
  );

  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const next = Math.min(histIndex + 1, history.length - 1);
        if (history[next]) {
          setHistIndex(next);
          setInput(history[next]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.max(histIndex - 1, -1);
        setHistIndex(next);
        setInput(next === -1 ? "" : history[next]);
      }
    },
    [history, histIndex],
  );

  const prompt = useMemo(() => `guest@portfolio:~$`, []);

  return (
    <section
      aria-label="Interactive terminal"
      className={cn(
        "flex h-[420px] max-h-[420px] flex-col overflow-hidden rounded-lg border border-noir-700/70 bg-noir-900/80 shadow-subtle-card backdrop-blur-sm",
        className,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* title bar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-noir-800 bg-noir-850/80 px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-noir-600" />
          <span className="size-2.5 rounded-full bg-noir-600" />
          <span className="size-2.5 rounded-full bg-terminal-green/70" />
        </span>
        <span className="ml-2 truncate font-mono text-[11px] tracking-wide text-noir-400">
          {PROMPT} — zsh · 80×24
        </span>
      </div>

      {/* output: bounded, isolated internal scroll */}
      <div
        ref={scrollRef}
        aria-live="polite"
        className="min-h-0 flex-1 overflow-y-auto px-4 py-3 font-mono text-[12.5px] leading-relaxed sm:text-[13px]"
      >
        {lines.filter((l): l is OutputLine => Boolean(l && l.kind)).map((l) => (
          <p
            key={l.id}
            className={cn("whitespace-pre-wrap break-words", kindStyles[l.kind] ?? "text-noir-300")}
          >
            {l.kind === "input" ? (
              <>
                <span className="text-terminal-green">{prompt}</span>{" "}
                {l.text}
              </>
            ) : (
              l.text
            )}
          </p>
        ))}
      </div>

      {/* input: fixed footer */}
      <form
        onSubmit={onSubmit}
        className="flex shrink-0 items-center gap-2 border-t border-noir-800 bg-noir-950/80 px-4 py-2.5"
      >
        <label htmlFor="term-input" className="sr-only">
          Terminal input
        </label>
        <span aria-hidden className="shrink-0 font-mono text-[12.5px] text-terminal-green sm:text-[13px]">
          {prompt}
        </span>
        <input
          id="term-input"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={!bootDone}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className={cn(
            "min-w-0 flex-1 bg-transparent font-mono text-[12.5px] text-noir-100 caret-terminal-green outline-none sm:text-[13px]",
            !bootDone && "invisible",
          )}
        />
        <span
          aria-hidden
          className="size-4 shrink-0 animate-terminal-cursor bg-noir-500/60"
        />
      </form>
    </section>
  );
}
