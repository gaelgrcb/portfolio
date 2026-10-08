"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

interface CopyButtonProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Copies `value` to the clipboard and shows an inline check for ~1.6s.
 * Falls back gracefully when the Clipboard API is unavailable (non-secure
 * contexts) by selecting text via a temporary textarea instead.
 */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — remain silent, no alert noise */
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      title={`Copy ${label}`}
      className={cn(
        "group inline-flex items-center gap-2 rounded border border-noir-700 bg-noir-850/60 px-3 py-2 font-mono text-xs text-noir-300 transition-colors",
        "hover:border-terminal-green/40 hover:text-terminal-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green/60",
        copied && "border-terminal-green/50 text-terminal-green hover:border-terminal-green/50 hover:text-terminal-green",
        className,
      )}
    >
      {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
      <span className="whitespace-nowrap">{copied ? "copied" : label}</span>
    </button>
  );
}
