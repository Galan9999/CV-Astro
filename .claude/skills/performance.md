# Skill: performance
# Trigger: /skill performance
# Purpose: audit and improve Core Web Vitals for Meta-CV

## What This Skill Does

When invoked, audit the project against the performance budget defined in AGENTS.md
(LCP ≤ 2.5 s, TBT = 0, CLS = 0) and propose concrete fixes.

## Checklist

### Images
- [ ] All `<img>` use `width` + `height` attributes (prevents CLS)
- [ ] Hero/above-fold images have `loading="eager"` and are preloaded
- [ ] Below-fold images have `loading="lazy"`
- [ ] Use `<Picture>` from `@astrojs/image` or native `<img>` with `srcset`
- [ ] No images served larger than their display size

### Fonts
- [ ] Fonts loaded with `font-display: swap`
- [ ] Only required weights/subsets included
- [ ] Font files are self-hosted in `public/fonts/`

### JavaScript
- [ ] Zero JS on initial load (verify with `astro build && astro preview`)
- [ ] Islands use the most conservative `client:*` directive that works
- [ ] No large libraries imported globally

### CSS
- [ ] Tailwind purge is active (no unused classes in prod bundle)
- [ ] Critical CSS is inlined (Astro does this automatically for SSG)

### Build
- [ ] `astro build` produces 0 warnings
- [ ] Total HTML per page < 50 KB uncompressed
- [ ] No render-blocking resources

## How to Run a Quick Audit

```bash
rtk pnpm build
rtk pnpm preview
# then open DevTools → Lighthouse → Mobile
```

## Reporting Format

List each failing item as:
```
[PERF] <metric>: <current value> → target <target value>
  fix: <one-line description>
  file: <path>:<line>
```
