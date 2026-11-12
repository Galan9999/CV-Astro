# Meta-CV

A living CV built with **Astro 4**, **TypeScript**, and **Tailwind CSS**.

## Philosophy

- **Single source of truth**: all CV data lives in `src/data/cv.json` ([JSON Resume](https://jsonresume.org/) spec).
- **Zero client JS by default**: static HTML + CSS; islands only where interaction is genuinely needed.
- **Print-first**: `/<lang>/cv-print` produces a clean PDF-ready layout.
- **Performance budget**: LCP ≤ 2.5 s · TBT = 0 · CLS = 0.
- **WCAG 2.1 AA** accessible out of the box.
- **Four languages**: `es` (default), `en`, `fr`, `ca` — every string lives in `src/i18n/ui.ts`.

## What's on the page

| Section | Source |
|---------|--------|
| Hero, stack, skills radar | `src/data/cv.json` |
| Experience | `src/content/experience/<lang>/*.json` |
| Agentic SDD process (Mermaid diagram) | `src/components/AIDesignProcess.astro` |
| Audits with Claude + artifacts (Mermaid diagram) | `src/components/ClaudeAudits.astro` |
| Projects | `personal_projects` in `cv.json` + `projects.<id>.desc` in `ui.ts` |
| Research, community, contact | `src/i18n/ui.ts`, `ContactForm.astro` |

## Featured projects

| Project | What it is | Repo |
|---------|------------|------|
| claude-config-panel | One screen for all of Claude Code's configuration, permissions explained in plain words | [public](https://github.com/Galan9999/claude-config-panel) |
| mcp-gmail-personal | My own MCP server (TypeScript, stdio) for a second Gmail account, with a three-layer send guard | [public](https://github.com/Galan9999/mcp-gmail-personal) |
| mcp-tool-template | Template for MCP servers with a light SDD flow, extracted from the one above | [public](https://github.com/Galan9999/mcp-tool-template) |
| barbershop-booking | Booking app in production, Next.js 15 + Supabase, zero infrastructure cost | [public](https://github.com/Galan9999/barbershop-booking) |
| TameFlow | Beta experiment applying Levin's TAME framework to software | private, on request |
| Sentio | Modular full-stack ecosystem | [front](https://github.com/Galan9999/Sentio-front) · [back](https://github.com/Galan9999/Sentio-back) |

### Adding a project

1. Add an entry to `personal_projects` in `src/data/cv.json` (`id`, `name`, `stack`, `links`; `beta` optional). Link `kind` is `repo` or `access` (points to the contact form).
2. Add `projects.<id>.desc` to each of the four languages in `src/i18n/ui.ts`.

## Audits with Claude — the pattern

The audits section documents a method, not data: a local routine (`launchd` + `claude -p`) runs a
read-only audit prompt that writes a fixed-shape JSON; an HTML page renders it, a person reviews it
and publishes it by hand as a private Claude artifact. Nothing from those audits — data, dashboards,
artifact links — belongs in this public repo.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 4 (SSG) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Content | Astro Content Collections |
| Deploy | Netlify (`netlify.toml`: `npm run build` → `dist/`) |

## Getting Started

```bash
npm install       # runs `astro sync` on postinstall
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
npm run check     # astro check (types)
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
