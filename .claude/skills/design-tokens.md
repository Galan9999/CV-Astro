# Skill: design-tokens
# Trigger: /skill design-tokens
# Purpose: enforce CSS custom property usage across all components

## What This Skill Does

When invoked, audit all components for hardcoded visual values
and ensure every property maps to a token in src/styles/tokens.css.

## The Contract

Every color, shadow, border, and radius in a component file
must reference a CSS custom property. No exceptions.

## Audit Commands

```bash
# hardcoded hex colors
grep -r "#[0-9a-fA-F]\{3,6\}" src/components/ --include="*.astro"

# hardcoded box-shadow
grep -r "box-shadow:" src/components/ --include="*.astro" \
  | grep -v "var(--"

# hardcoded border-radius
grep -r "border-radius:" src/components/ --include="*.astro" \
  | grep -v "var(--"
```

Any output from these commands is a violation.

## Token Inventory

```
--bg-base / --bg-surface / --bg-elevated
--border / --border-hover / --border-width
--text-primary / --text-secondary / --text-mono
--accent-from / --accent-to
--shadow / --shadow-hover / --radius
--focus-ring / --focus-offset
--font-display / --font-mono
```

## Fix Pattern

If a theme-specific override is needed:
1. Add a new token to src/styles/tokens.css scoped to [data-theme]
2. Use the token in the component
3. Never patch the value directly inside the component

## Reporting Format

```
[TOKEN] hardcoded value found
  file: src/components/ExperienceCard.astro:42
  value: border-radius: 12px
  fix: replace with border-radius: var(--radius)
```
