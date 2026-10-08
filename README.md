# Gael GarcÃ­a Â· tech-noir portfolio

Ultra-minimal "cyber-minimalism / tech-noir" personal portfolio. Next.js (App
Router) + Tailwind + Framer Motion + strict TypeScript. No CSS-in-JS, no icon
spray, no third-party UI kits â just tokens, components, and one pure
terminal engine.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

> `public/cv/cv-Gael GarcÃ­a.pdf` is a valid placeholder. Replace it with your real CV
> (same path) so the Hero "cv.pdf" button keeps working.
> The generator that created it lives in `tools/make-cv-pdf.mjs`.

## Folder structure

```
src/
âââ app/                      # App Router shell
â   âââ layout.tsx            # Root layout: fonts (Inter, JetBrains Mono),
â   â                         #   metadata/OG, security skip-link, Header/Footer
â   âââ page.tsx              # Page composition (5 sections, in order)
â   âââ globals.css           # Tailwind layers + scrollbar/selection theme
â   âââ robots.ts             # robots.txt (auto-rendered by Next)
â   âââ sitemap.ts            # sitemap.xml (auto-rendered by Next)
â
âââ components/
â   âââ layout/
â   â   âââ Header.tsx        # Fixed hairline nav; IntersectionObserver active state
â   â   âââ Footer.tsx        # EOF footer + social links
â   â   âââ BackgroundGrid.tsx# Pure-CSS dot grid + glow + scanline (no JS)
â   âââ hero/
â   â   âââ Hero.tsx          # Typographic intro, live status, quick actions
â   â   âââ Terminal.tsx      # Interactive console (boot sequence + shell)
â   âââ skills/
â   â   âââ SkillsMatrix.tsx  # 3 domain cards with level glyphs + invariants
â   âââ projects/
â   â   âââ ProjectsGrid.tsx  # Card grid
â   â   âââ ProjectCard.tsx   # Badges, problemâsolution (<details>), metrics
â   âââ experience/
â   â   âââ Timeline.tsx      # Vertical "git log" commit timeline
â   âââ contact/
â   â   âââ ContactSection.tsx# Channels + copy-to-clipboard + outbox
â   â   âââ ContactConsole.tsx# Focused "send --to Gael GarcÃ­a" console
â   âââ ui/
â       âââ Reveal.tsx        # Scroll-in animation (respects reduced motion)
â       âââ SectionHeading.tsx# Consistent numbered section headers
â       âââ Badge.tsx         # Monospace tech/status tags
â       âââ CopyButton.tsx    # Clipboard copy with inline â feedback
â
âââ lib/
â   âââ cn.ts                 # clsx + tailwind-merge helper
â   âââ terminal.ts           # PURE command engine: parse â OutputLine[]
â   âââ data/
â       âââ profile.ts        # Identity, socials, system telemetry
â       âââ skills.ts         # Skill domains + levels
â       âââ projects.ts       # Projects: challenge/solution/metrics
â       âââ experience.ts     # Career commits
â
âââ types/
    âââ portfolio.ts          # Shared interfaces (strict TS throughout)
```

## Architecture decisions

### 1. The terminal is a pure function
`lib/terminal.ts` exports `runCommand(input: string): OutputLine[]` with **no
React, no DOM, no timers**. Components (`Terminal`, `ContactConsole`) only
render and handle typing simulation. This keeps the shell logic unit-testable
and lets both the Hero console and the Contact outbox share one engine.

Commands: `whoami`, `stack [--top n]`, `projects [query]`, `log`, `contact`,
`send --to <handle> --message "..."`, `copy <github|linkedin|email>`,
`clear`, `help`, `exit`.

### 2. Data is typed and co-located
All content lives in `src/lib/data/*.ts` behind the interfaces in
`src/types/portfolio.ts`. Editing the portfolio = editing one data file.
Adding a project/skill/commit is an append, never a component change.

### 3. Performance budget
- **Fonts**: `next/font` (swap, preloaded, subset latin).
- **Background**: pure CSS (grid, glow, scanline) â zero runtime JS.
- **Animations**: Framer Motion only for scroll-reveal + hover; everything
  honors `prefers-reduced-motion`.
- **No images** on the critical path; `images.unoptimized` is set because
  there are no raster assets to optimize.
- **Security headers** (nosniff, frame-deny, referrer, permissions policy)
  are emitted globally from `next.config.mjs`.

### 4. Accessibility
- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`,
  `footer`, `dl` for telemetry/metrics, `ol` for the timeline.
- Keyboard: visible `:focus-visible` rings everywhere, arrow-key command
  history in the terminals, skip-to-content link, labelled inputs.
- `aria-live="polite"` on terminal output so screen readers follow the shell.

## Theming

Tokens live in `tailwind.config.ts`:

| Token            | Value        | Use                              |
| ---------------- | ------------ | -------------------------------- |
| `noir-950`      | `#060709`    | Page background                  |
| `noir-900`      | `#0A0B10`    | Panels/cards                     |
| `noir-850`      | `#0F1117`    | Nested surfaces                  |
| `terminal-green`| `#10B981`    | Primary accent / success         |
| `terminal-cyan` | `#06B6D4`    | Secondary accent / metadata      |
| `noir-100â¦500`  | â            | Platinum type scale              |

Fonts: `--font-geist-sans` (Inter) for headings/body, `--font-jetbrains`
(JetBrains Mono) for code, prompts, and metadata.

## Deploy

- **Vercel**: import â deploy (no config).
- **Cloudflare Pages**: build `npm run build`, output `.next` via `next start`
  or switch `next.config` to static export for a pure static build.
