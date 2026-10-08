/**
 * Pure-CSS background: a faint dot grid, a vertical scanline sweep, and a
 * radial glow anchored top-center. Rendered once, absolutely positioned,
 * pointer-events: none, aria-hidden. No JS, no rAF — zero runtime cost.
 */
export function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(122,132,153,0.55) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* top-center radial glow */}
      <div
        className="absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.10), rgba(6,182,212,0.05) 55%, transparent 75%)",
        }}
      />

      {/* single horizontal scanline */}
      <div
        className="absolute inset-x-0 top-1/3 h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.45), transparent)",
        }}
      />

      {/* bottom fade to anchor the footer */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, #060709, transparent)" }}
      />
    </div>
  );
}
