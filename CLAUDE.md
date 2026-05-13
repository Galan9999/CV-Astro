# CLAUDE.md — Claude CLI Project Instructions

> AGENTS.md is the canonical shared spec. This file adds Claude-specific
> behaviour on top of it. Always read AGENTS.md first.

## Context Loading Order

1. `AGENTS.md` — shared rules (authoritative)
2. This file — Claude CLI overrides and skill pointers
3. `.claude/skills/*.md` — invoked explicitly with `/skill`

## Skills Available

| Skill | Trigger | Purpose |
|-------|---------|---------|
| performance | `/skill performance` | Audit Lighthouse / Core Web Vitals |
| a11y | `/skill a11y` | Audit WCAG 2.1 AA compliance |
| context-efficiency | `/skill context-efficiency` | Reduce token consumption in this session |
| design-tokens | `/skill design-tokens` | Audit CSS custom property usage in components |

## Workflow Preferences

- **Read before write**: always inspect the relevant file(s) before editing.
- **One concern per commit**: don't bundle unrelated changes.
- **Prefer Edit over Write** for existing files — smaller diffs, easier review.
- **No speculative abstractions**: implement exactly what the task requires.

## Project-Specific Behaviour

- `cv.json` changes require user confirmation before proceeding.
- When adding a new Astro component, check if a simpler HTML element suffices.
- Prefer targeted file reads — use offset + limit params when reading large files. Read only what the task requires.

## Paths Claude Should Know

```
src/data/cv.json        ← edit to update CV content
src/content/            ← Content Collections (schema in src/content/config.ts)
astro.config.mjs        ← Astro config (integrations, output mode)
tailwind.config.mjs     ← design tokens
```
