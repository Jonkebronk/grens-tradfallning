# Geist UI Review Checklist

Use this before claiming that a Vercel/Geist-styled UI is complete.

## Visual System

- The UI uses neutral surfaces and strong text contrast.
- Accent colors have semantic purpose: links, focus, state, or the single main action.
- Text hierarchy uses gray scale before color.
- Components use tokenized colors, spacing, radius, and type instead of one-off values.
- Light and Dark themes use the same token names when both are supported.
- The original business domain remains intact; Geist changed the visual system, not the product category.

## Layout

- Spacing follows the 4px scale.
- Groups use roughly 8px internal spacing, 16px between groups, and 32-40px between sections.
- Cards are used only for repeated items, modals, popovers, or framed tools.
- Operational screens avoid marketing hero layout.
- Mobile and desktop layouts both fit without text overlap or awkward truncation.

## Typography

- Default dense UI text uses 13-14px with appropriate line height.
- Headings are not oversized inside compact panels.
- Mono text is used for code, IDs, logs, versions, hashes, and aligned numbers.
- The view uses no more than two or three font weights unless the local design system already does.

## Components

- Buttons have hover, active, disabled, and focus-visible states.
- There is no more than one primary action in the same decision area.
- Destructive actions use red and explicit action labels.
- Inputs have visible labels or accessible names.
- Focus rings are visible and not suppressed.

## Accessibility

- Body text meets WCAG AA contrast.
- State is not communicated by color alone.
- Interactive targets are large enough for the context.
- Keyboard navigation is possible.
- Reduced motion is respected for nonessential animation.

## Content

- Button labels use a verb and noun.
- Toasts name the specific thing that changed and avoid `successfully`.
- Errors state what happened and what to do next.
- Empty states point to the first useful action.
- In-progress states use direct present-participle language.

## Red Flags

- Decorative gradients or blobs are carrying the design.
- Many custom colors appear outside the token system.
- Rounded corners are inconsistent across a single view.
- Cards are nested inside cards.
- Focus outlines were removed without replacement.
- The UI looks like a landing page when the task is a product tool.
- A non-developer business was accidentally turned into a deployment/project/repository dashboard.
