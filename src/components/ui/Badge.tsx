import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "green" | "cyan" | "solid";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  neutral: "border-noir-600/60 bg-noir-800/40 text-noir-300",
  green: "border-terminal-green/30 bg-terminal-green/10 text-terminal-green",
  cyan: "border-terminal-cyan/30 bg-terminal-cyan/10 text-terminal-cyan",
  solid: "border-transparent bg-terminal-green/90 text-noir-950",
};

/**
 * Small monospace tag used for technologies, statuses, and commit metadata.
 * Border-only styling keeps the card grid quiet and scannable.
 */
export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[11px] leading-5 tracking-tight",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
