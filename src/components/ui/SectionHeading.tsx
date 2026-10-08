import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Monospace reference, e.g. "02 // ARCHITECTURE" */
  kicker: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Consistent section header: a monospace index + a large sans title.
 * Reused across every section so the page reads like a numbered spec sheet.
 */
export function SectionHeading({ kicker, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12", className)}>
      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-terminal-green/80">
          {kicker}
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-noir-100 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-noir-400">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
