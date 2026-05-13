# Meta-CV

A living CV built with **Astro 4**, **TypeScript**, and **Tailwind CSS**.

## Philosophy

- **Single source of truth**: all CV data lives in `src/data/cv.json` ([JSON Resume](https://jsonresume.org/) spec).
- **Zero client JS by default**: static HTML + CSS; islands only where interaction is genuinely needed.
- **Print-first**: `/print` route produces a clean PDF-ready layout.
- **Performance budget**: LCP ≤ 2.5 s · TBT = 0 · CLS = 0.
- **WCAG 2.1 AA** accessible out of the box.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 4 (SSG) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Content | Astro Content Collections |
| Deploy | (TBD — Vercel / Cloudflare Pages) |

## Getting Started

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # production build → dist/
pnpm preview      # preview production build
```

## Project Structure

```
src/
  data/cv.json          ← edit your CV here
  content/              ← blog, projects, case-studies (Content Collections)
  components/           ← presentational Astro components
  layouts/              ← page shells
  pages/                ← file-based routes
  styles/               ← global CSS
public/                 ← static assets (fonts, images, og)
```

## AI Tooling

This repo ships with a full intelligence layer:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Shared rules for all AI agents |
| `CLAUDE.md` | Claude CLI project instructions |
| `.claude/skills/` | Invokable Claude skills (`/skill performance`, `/skill a11y`, `/skill tokens`) |
| `.cursor/rules/` | Cursor MDC rules (auto-attached by glob or always-on) |

## Commit Convention

Conventional Commits — see `.cursor/rules/commits.mdc` for the full spec.

```
feat(cv): add publications section
fix(print): prevent page break inside entries
perf(images): convert hero to WebP
```

## License

Private — all rights reserved.
