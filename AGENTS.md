# AGENTS.md — Meta-CV Intelligence Layer
# Shared by Claude CLI, Cursor, and any future AI agent

## Project Identity

**Meta-CV** — a living CV built with Astro 4, TypeScript, and Tailwind.
The single source of truth is `src/data/cv.json` (JSON Resume spec).
Components consume that data; nothing is hardcoded in `.astro` files.

## Architecture at a Glance

```
src/
  data/cv.json          ← source of truth (JSON Resume)
  content/              ← Content Collections (blog, projects, case-studies)
  components/           ← pure presentational Astro components
  layouts/              ← page shells
  pages/                ← file-based routes
  styles/               ← global CSS + Tailwind config
public/                 ← static assets (fonts, images, og)
```

## Non-negotiable Rules (every agent must follow)

1. **cv.json is the only data source.** Never hardcode personal data in components.
2. **No client JS by default.** Use `client:*` directives only when interaction requires it.
3. **Semantic HTML first.** Every section needs a proper landmark; headings must be ordered.
4. **Performance budget**: LCP ≤ 2.5 s, TBT = 0, CLS = 0. Reject PRs that regress these.
5. **Accessibility**: WCAG 2.1 AA minimum. All images need `alt`; icons need `aria-label`.
6. **Commits** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `perf:`).
7. **Token purity**: Every color, shadow, border-radius, and font-family in a component must reference a CSS custom property from `src/styles/tokens.css`. No hardcoded hex values, rgba literals, or font-family strings in `.astro` files. If a theme-specific value is needed, add a token to `tokens.css` scoped to `[data-theme]` — never patch the value inside the component.
8. **No code comments**: Naming is the documentation. Do not add HTML comments (`<!-- -->`), JS/TS inline comments (`//`), or CSS block comments (`/* */`) inside `.astro` files. The only acceptable exceptions are: (a) license headers, (b) `@media` / `@keyframes` at-rule markers. If a name needs a comment to be understood, rename it instead.

## Shared Glossary

| Term | Meaning |
|------|---------|
| Meta-CV | The project itself |
| Island | An Astro component with a `client:*` directive |
| Section | A top-level CV block (experience, education, skills…) |
| Print view | `/print` route, optimised for PDF export |

## What Agents Should NOT Do

- Modify `cv.json` structure without confirming with the user first.
- Add npm packages without checking bundle impact.
- Create `.cursor/rules/name/RULE.md` folder structures (broken in Cursor).
- Create `.cursorrules` (deprecated).
- Touch any `.astro`, `.ts`, or `.css` file when the task is documentation only.
