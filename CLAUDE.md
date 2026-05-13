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
| tokens | `/skill tokens` | Optimise token usage in this session |

## Workflow Preferences

- **Read before write**: always inspect the relevant file(s) before editing.
- **One concern per commit**: don't bundle unrelated changes.
- **Prefer Edit over Write** for existing files — smaller diffs, easier review.
- **No speculative abstractions**: implement exactly what the task requires.

## Project-Specific Behaviour

- `cv.json` changes require user confirmation before proceeding.
- When adding a new Astro component, check if a simpler HTML element suffices.
- Use `rtk` prefix for shell commands to reduce token consumption (see global CLAUDE.md).

## Paths Claude Should Know

```
src/data/cv.json        ← edit to update CV content
src/content/            ← Content Collections (schema in src/content/config.ts)
astro.config.mjs        ← Astro config (integrations, output mode)
tailwind.config.mjs     ← design tokens
```
