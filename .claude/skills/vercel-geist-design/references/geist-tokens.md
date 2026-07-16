# Geist Token Reference

Use these values as the starting point for Vercel/Geist-inspired interfaces. Prefer mapping them into project-local CSS variables or Tailwind theme values instead of hardcoding them repeatedly.

## Theme Model

Use the same token names for Light and Dark themes. Theme switching should replace values, not component code.

Core surface/text tokens:

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `primary` | `#171717` | `#ededed` | Primary text and high-emphasis fills |
| `secondary` | `#4d4d4d` | `#a0a0a0` | Secondary text |
| `tertiary` | `#006bff` | `#006efe` | Links/focus accent |
| `neutral` | `#f2f2f2` | `#1a1a1a` | Neutral background/fill |
| `background-100` | `#ffffff` | `#000000` | Primary page/card surface |
| `background-200` | `#fafafa` | `#000000` | Subtle secondary surface only |

## Gray Scale

Use `gray-1000` for primary text/icons, `gray-900` for secondary text/icons, and `gray-700` for disabled text.

Light:

| Token | Value |
| --- | --- |
| `gray-100` | `#f2f2f2` |
| `gray-200` | `#ebebeb` |
| `gray-300` | `#e6e6e6` |
| `gray-400` | `#eaeaea` |
| `gray-500` | `#c9c9c9` |
| `gray-600` | `#a8a8a8` |
| `gray-700` | `#8f8f8f` |
| `gray-800` | `#7d7d7d` |
| `gray-900` | `#4d4d4d` |
| `gray-1000` | `#171717` |

Dark:

| Token | Value |
| --- | --- |
| `gray-100` | `#1a1a1a` |
| `gray-200` | `#1f1f1f` |
| `gray-300` | `#292929` |
| `gray-400` | `#2e2e2e` |
| `gray-500` | `#454545` |
| `gray-600` | `#878787` |
| `gray-700` | `#8f8f8f` |
| `gray-800` | `#7d7d7d` |
| `gray-900` | `#a0a0a0` |
| `gray-1000` | `#ededed` |

Alpha grays are for borders, dividers, overlays, and hover layers.

Light alpha:

| Token | Value |
| --- | --- |
| `gray-alpha-100` | `#0000000d` |
| `gray-alpha-200` | `#00000015` |
| `gray-alpha-300` | `#0000001a` |
| `gray-alpha-400` | `#00000014` |
| `gray-alpha-500` | `#00000036` |
| `gray-alpha-600` | `#0000003d` |
| `gray-alpha-700` | `#00000070` |
| `gray-alpha-800` | `#00000082` |
| `gray-alpha-900` | `#000000b3` |
| `gray-alpha-1000` | `#000000e8` |

Dark alpha:

| Token | Value |
| --- | --- |
| `gray-alpha-100` | `#ffffff12` |
| `gray-alpha-200` | `#ffffff17` |
| `gray-alpha-300` | `#ffffff21` |
| `gray-alpha-400` | `#ffffff24` |
| `gray-alpha-500` | `#ffffff3d` |
| `gray-alpha-600` | `#ffffff82` |
| `gray-alpha-700` | `#ffffff8a` |
| `gray-alpha-800` | `#ffffff78` |
| `gray-alpha-900` | `#ffffff9c` |
| `gray-alpha-1000` | `#ffffffeb` |

## Accent Intent

Use accent scales for meaning:

- `blue`: links, focus, success/action accent
- `red`: errors and destructive actions
- `amber`: warnings
- `green`, `teal`, `purple`, `pink`: secondary semantic accents when the product needs more categories

Step meanings:

| Step | Intent |
| --- | --- |
| `100` | default background |
| `200` | hover background |
| `300` | active background |
| `400` | default border |
| `500` | hover border |
| `600` | active border |
| `700` | solid fill, high contrast |
| `800` | solid fill hover |
| `900` | secondary text/icons |
| `1000` | primary text/icons |

Key accent values:

| Token | Light | Dark |
| --- | --- | --- |
| `blue-700` | `#006bff` | `#006efe` |
| `blue-900` | `#005ff2` | `#47a8ff` |
| `red-800` | `#ea001d` | `#e2162a` |
| `amber-700` | `#ffae00` | `#ffae00` |
| `green-700` | `#28a948` | `#00ac3a` |
| `teal-700` | `#00ac96` | `#00aa95` |
| `purple-700` | `#a000f8` | `#9440d5` |
| `pink-700` | `#f22782` | `#f12b82` |

## Typography

Use Geist Sans for UI/prose and Geist Mono for code/data. Use existing project fonts when Geist is unavailable.

Common tokens:

| Token | Font | Size | Weight | Line height | Use |
| --- | --- | --- | --- | --- | --- |
| `heading-72` | Geist Sans | 72px | 600 | 72px | Large page hero |
| `heading-48` | Geist Sans | 48px | 600 | 56px | Major sections |
| `heading-32` | Geist Sans | 32px | 600 | 40px | Page title |
| `heading-24` | Geist Sans | 24px | 600 | 32px | Section title |
| `heading-20` | Geist Sans | 20px | 600 | 26px | Panel title |
| `heading-16` | Geist Sans | 16px | 600 | 24px | Compact heading |
| `heading-14` | Geist Sans | 14px | 600 | 20px | Table/header label |
| `label-14` | Geist Sans | 14px | 400 | 20px | Default UI label |
| `label-13` | Geist Sans | 13px | 400 | 16px | Dense metadata |
| `label-12` | Geist Sans | 12px | 400 | 16px | Small metadata |
| `copy-16` | Geist Sans | 16px | 400 | 24px | Body copy |
| `copy-14` | Geist Sans | 14px | 400 | 20px | Default dense body |
| `copy-13` | Geist Sans | 13px | 400 | 18px | Dense body |
| `button-16` | Geist Sans | 16px | 500 | 20px | Large button |
| `button-14` | Geist Sans | 14px | 500 | 20px | Default button |
| `button-12` | Geist Sans | 12px | 500 | 16px | Small button |

Headings use tighter letter spacing as they grow. If implementing tokens exactly, use the original negative letter-spacing values for heading tokens; otherwise keep heading tracking visually tight and body tracking normal.

## Spacing, Radius, Components

Spacing scale:

| Token | Value |
| --- | --- |
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `6` | 24px |
| `8` | 32px |
| `10` | 40px |
| `16` | 64px |
| `24` | 96px |

Radius:

| Token | Value | Use |
| --- | --- | --- |
| `sm` | 6px | Controls and ordinary surfaces |
| `md` | 12px | Menus, popovers, dialogs |
| `lg` | 16px | Large/fullscreen surfaces |
| `full` | 9999px | Pills, avatars, circular controls |

Default component sizes:

| Component | Height | Radius | Padding |
| --- | --- | --- | --- |
| Button | 40px | 6px | `0 10px` |
| Small button | 32px | 6px | `0 6px` |
| Large button | 48px | 6px | `0 14px` |
| Input | 40px | 6px | `0 12px` |
| Small input | 32px | 6px | `0 12px` |
| Large input | 48px | 6px | `0 12px` |

Component intent:

- Primary button: `gray-1000`/`primary` solid fill with `background-100` text; use once for the main action.
- Secondary button: `background-100` fill, `primary` text, translucent border.
- Tertiary button: transparent fill, `gray-1000` text, alpha hover tint.
- Error button: `red-800` fill, white text.
- Input: `background-100` fill, primary text, translucent border.

Focus ring:

- Light: `0 0 0 2px #ffffff, 0 0 0 4px #006bff`
- Dark: `0 0 0 2px #000000, 0 0 0 4px #47a8ff`

