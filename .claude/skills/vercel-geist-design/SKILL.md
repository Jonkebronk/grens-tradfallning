---
name: "vercel-geist-design"
description: "Apply Vercel's Geist design system to frontend and app UI work. Use when designing, building, refactoring, or reviewing web apps, Next.js pages, dashboards, developer tools, docs sites, product surfaces, and agent-generated UI that should feel Vercel-like: minimal, high-contrast, restrained, token-driven, accessible, and developer-focused."
---

# Vercel Geist Design

## Core Direction

Design with the Geist/Vercel product language: minimal, high-contrast, developer-focused interfaces with strong information hierarchy, restrained color, crisp spacing, and accessible interactive states.

Use this skill for web UI, dashboards, admin surfaces, docs/product pages, and developer tools. For native mobile or desktop apps, adapt the Geist principles to the platform conventions instead of forcing web-specific controls.

## Workflow

1. Inspect the existing app before changing visuals. Preserve established component APIs, routing, state management, and design-system patterns when they exist.
2. Decide whether the target should use Light, Dark, or themeable tokens.
3. Prefer project-local tokens if present. If none exist, introduce CSS variables, Tailwind theme values, or a small token module before scattering raw colors and sizes.
4. Preserve the user's business domain and nouns. Apply Geist as visual language only; do not turn non-developer products into deployment platforms, project dashboards, repositories, commits, or Vercel-like business concepts unless the user asks for that domain.
5. Build the real functional surface first. Avoid landing-page filler unless the user explicitly asks for marketing content.
6. Verify responsive layout, text fit, focus states, hover/active/disabled states, and contrast.

## Geist Principles

- Use neutral surfaces, strong text contrast, and restrained accent color.
- Use color for hierarchy, links, focus, and state. Do not use accent color as decoration.
- Keep layouts calm and scannable: 8px inside groups, 16px between groups, 32-40px between sections.
- Use tight radii: 6px for controls and ordinary surfaces, 12px for menus/dialogs, 16px only for large or fullscreen surfaces.
- Use subtle elevation. Prefer borders, tonal surfaces, and spacing before shadows.
- Use direct, specific copy. Buttons should name actions with a verb and noun.
- Keep motion short and purposeful. Honor reduced-motion preferences.
- Keep developer-tool density when useful: compact rows, aligned numbers, clear metadata, predictable navigation.

## Reference Files

Load these only when needed:

- `references/geist-tokens.md`: canonical light/dark token values and component defaults.
- `references/implementation-guide.md`: practical CSS/Tailwind/React implementation guidance.
- `references/review-checklist.md`: checks to run before declaring a Geist-styled UI complete.

## Implementation Rules

- Use Geist Sans for UI/prose and Geist Mono for code, IDs, metrics, logs, and tabular data when available. If the font is not installed or bundled, use the closest existing project font and keep metrics consistent.
- Use `copy-14` and `label-14` as the default text choices for dense product UI.
- Use the same semantic token names for Light and Dark themes so theme switching only changes values.
- Use `background-*` for page/card surfaces and `gray-*` for text/opaque fills. Do not swap those scales.
- Use `gray-alpha-*` for borders, dividers, overlays, and hover layers that must work on varied backgrounds.
- Preserve focus visibility with a two-layer ring: surface-colored gap plus blue ring.
- Pair state color with labels or icons; never signal state with color alone.
- Keep cards and panels at 8px radius or less unless implementing menus, dialogs, or an existing design system requires more.
- Do not mix many font weights; use two weights for most views.

## Content Rules

- Use Title Case for labels, buttons, titles, and tabs.
- Use sentence case for body copy, helper text, and toasts.
- Write button labels as `Verb Noun`, such as `Deploy Project` or `Delete Member`.
- Avoid vague actions such as `OK`, `Confirm`, or a bare verb.
- Write errors as what happened plus what to do next.
- Write toasts without trailing periods and without `successfully`.
- Write empty states with the first next action.

## Avoid

- Decorative gradients, blobs, excessive illustration, and one-note color palettes.
- Large rounded card stacks for operational tools.
- Custom font sizes, line heights, and colors when a token should be used.
- Removing outlines without a visible replacement.
- Marketing-style hero composition for tools, dashboards, and admin surfaces.
- Replacing the user's original business domain with Vercel/deployment terminology.
- Long looping animations or motion that does not explain a state change.
