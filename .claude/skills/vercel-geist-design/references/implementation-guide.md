# Geist Implementation Guide

## Token Strategy

Create semantic variables once, then consume them from components.

Recommended CSS variable shape:

```css
:root {
  --geist-background-100: #ffffff;
  --geist-background-200: #fafafa;
  --geist-gray-1000: #171717;
  --geist-gray-900: #4d4d4d;
  --geist-gray-alpha-400: #00000014;
  --geist-blue-700: #006bff;
  --geist-focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px #006bff;
}

[data-theme="dark"] {
  --geist-background-100: #000000;
  --geist-background-200: #000000;
  --geist-gray-1000: #ededed;
  --geist-gray-900: #a0a0a0;
  --geist-gray-alpha-400: #ffffff24;
  --geist-blue-700: #006efe;
  --geist-focus-ring: 0 0 0 2px #000000, 0 0 0 4px #47a8ff;
}
```

Prefer project naming conventions if they already exist. Map Geist values into the existing token model rather than adding a parallel system.

## CSS Defaults

Use this as a minimal baseline when no design system exists:

```css
body {
  background: var(--geist-background-100);
  color: var(--geist-gray-1000);
  font-family: "Geist Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

code,
kbd,
pre,
.mono {
  font-family: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

:focus-visible {
  outline: none;
  box-shadow: var(--geist-focus-ring);
}
```

## Layout Patterns

- Center content in a max-width column around 1200px for docs, product pages, and dashboards.
- Use full-width bands or unframed sections instead of nested cards.
- Use cards for repeated items, modals, popovers, and genuinely framed tools.
- Keep operational interfaces compact and scannable.
- Avoid oversized hero treatment inside dashboards, settings screens, data tools, and admin surfaces.

## Component Patterns

Buttons:

- Default height: 40px.
- Small height: 32px for tables, toolbars, and dense panels.
- Large height: 48px for onboarding and major actions.
- Use exactly one primary action per view or modal when possible.
- Provide hover, active, disabled, and focus-visible states.

Inputs:

- Default height: 40px.
- Use 6px radius, 12px horizontal padding, and alpha borders.
- Keep helper/error text close to the field with 12-14px text.
- Do not rely on placeholder text as the only label.

Tables and metrics:

- Use 13-14px labels for dense rows.
- Use mono/tabular figures for IDs, timestamps, versions, logs, hashes, and aligned numbers.
- Use gray hierarchy before accent color.

Navigation:

- Keep labels short and Title Case.
- Use clear selected, hover, focus, and disabled states.
- Use icons only when they improve recognition; keep text for ambiguous product concepts.

## Motion

- Prefer instant transitions for simple hover/pressed states.
- Use roughly 150ms for state changes, 200ms for popovers/tooltips, and 300ms for overlays/modals when motion clarifies the change.
- Use `cubic-bezier(0.175, 0.885, 0.32, 1.1)` for short physical reveals.
- Disable nonessential animation under `prefers-reduced-motion`.

## Copy

Use precise product language:

- Button: `Deploy Project`, `Delete Member`, `Create Token`
- Error: `Build failed. Bundle exceeds 50 MB. Reduce it or raise the limit.`
- Toast: `Project deleted`
- Empty state: `No deployments yet. Push to your Git repository to create one.`
- Loading: `Deploying...`, `Saving...`

Avoid `OK`, `Confirm`, `Submit`, `Successfully deleted`, and filler adjectives.

## Adaptation Notes

For Next.js/Vercel-like marketing pages, use the same tokens but allow more page-level whitespace and strong typography. For dashboards and app UIs, prioritize dense organization, restrained panels, and repeatable controls over hero composition.

For native iOS/macOS work, use Geist as an art direction only: preserve platform-native controls, navigation, safe areas, typography behavior, accessibility expectations, and system materials.

