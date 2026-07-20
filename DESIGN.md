---
name: KritRaj Nexera
description: Boutique digital agency — custom websites and n8n automation
colors:
  primary: "#0F172A"
  primary-soft: "#1e293b"
  primary-container: "#131b2e"
  secondary: "#0051D5"
  secondary-hover: "#0042b3"
  secondary-container: "#dbe5ff"
  surface: "#f7f9fb"
  surface-dim: "#d8dadc"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  surface-container-high: "#e6e8ea"
  on-surface: "#191c1e"
  on-surface-variant: "#45464d"
  outline: "#76777d"
  outline-variant: "#c6c6cd"
  hairline: "#E2E8F0"
  success: "#10B981"
  error: "#EF4444"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.3
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
    textTransform: "uppercase"
  label-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  xs: "0.125rem"
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  full: "9999px"
spacing:
  stack-xs: "4px"
  stack-sm: "8px"
  stack-md: "16px"
  stack-lg: "24px"
  gutter: "24px"
  margin-mobile: "16px"
  section-gap-lg: "96px"
  section-gap-sm: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.primary-soft}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
    border: "1px solid {colors.secondary}"
  button-ghost-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
  flat-card:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.xl}"
    padding: "{spacing.stack-lg}"
    border: "1px solid {colors.hairline}"
  input:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    border: "1px solid {colors.hairline}"
    typography: "{typography.body}"
---

# Design System: KritRaj Nexera

## 1. Overview

**Creative North Star: "The Blueprint"**

Every surface reads like a technical drawing — precise, unadorned, intentional. The system rejects decoration in favor of structure: hairline borders define territory instead of shadows, typography carries hierarchy instead of color, and white space breathes instead of padding. The result is an interface that feels hand-drawn rather than templated — as if a senior engineer sketched the layout before writing a single line of CSS.

The design explicitly rejects the generic agency playbook: no glassmorphism, no gradient text, no numbered section eyebrows, no hero metrics with big numbers and small labels. What remains is typographic contrast (Space Grotesk for weight, Inter for readability), a restrained blue accent that never exceeds 10% of any surface, and tonal layers that separate content without relying on shadow drops.

**Key Characteristics:**
- Flat by default: depth comes from tonal layering and hairline borders, not shadows
- One accent: `#0051D5` blue appears sparingly — on CTAs, links, and interactive states only
- Typography-first hierarchy: size and weight do the work color would do in other systems
- Responsive tactile feedback: buttons and cards shift subtly on interaction (scale, color, border)
- Generous rhythm: section gaps at 96px keep breathing room between content blocks

## 2. Colors

A restrained palette built on cool slate neutrals with a single vivid-blue accent. The surface family spans seven tonal steps from white (`#ffffff`) to near-black (`#0F172A`), all within a narrow chroma band.

### Primary
- **Slate Ink** (`#0F172A`): The weight of the system. Used for body backgrounds on dark surfaces, primary buttons, and the CTA banner. Conveys substance without aggression.
- **Slate Soft** (`#1e293b`): Hover state for primary buttons. Also used as a secondary dark surface for alternating sections.
- **Slate Container** (`#131b2e`): Deepest surface — footer background, privacy policy area.

### Secondary
- **Signal Blue** (`#0051D5`): The only accent. Appears on secondary buttons, links, focus indicators, and the particle network. Never decorative — always interactive or wayfinding.
- **Signal Hover** (`#0042b3`): Button hover state.
- **Signal Tint** (`#dbe5ff`): Container tint for badges and selected states.

### Neutral
- **Page** (`#f7f9fb`): Main page background. Cool off-white.
- **Card** (`#ffffff`): Surface-container-lowest — cards, inputs, elevated containers.
- **Section Alt** (`#f2f4f6`): Alternating section background.
- **Surface Mid** (`#eceef0`, `#e6e8ea`, `#e0e3e5`): Intermediate container steps for tonal layering.
- **Ink** (`#191c1e`): Body text. Near-black with a cool cast.
- **Ink Muted** (`#45464d`): Secondary text, metadata.
- **Hairline** (`#E2E8F0`): Borders and dividers. Thin, never heavy.
- **Outline** (`#76777d`): Focused/tab stops.
- **Success** (`#10B981`): Form validation success, checkmarks.
- **Error** (`#EF4444`): Validation errors, required indicators.

### Named Rules

**The Blue Signal Rule.** `#0051D5` appears on ≤10% of any given viewport. Its rarity is the point — when blue appears, the eye knows it means something (a click, a link, an action). An interface where blue is everywhere is an interface where blue means nothing.

**The Hairline Rule.** Borders are exactly 1px. A 2px border is a stripe, not a separator — never use it as a colored accent on cards or list items.

**The Flat Surface Rule.** Depth is conveyed by tonal steps (`surface → surface-container-low → surface-container`), never by box-shadow. The only exceptions are the navbar's frosted-glass backdrop (a subtle blur) and the hero glow (a large-radius blur for atmosphere).

## 3. Typography

**Display Font:** Space Grotesk (600, 700) with system-ui fallback
**Body Font:** Inter (400, 500, 600, 700) with system-ui fallback

**Character:** A geometric sans-serif for display weight (Space Grotesk's squared curves feel engineered, not styled) paired with a highly readable humanist sans for body copy (Inter's open apertures and tall x-height keep long text comfortable at 16px). The pairing is a contrast of job, not of genre — both are sans-serifs, but one commands while the other serves.

### Hierarchy
- **Display** (Space Grotesk 600, `clamp(2.25rem, 5vw, 3rem)`, 1.15): Hero headlines and CTA banner headings. `text-wrap: balance` applied. Maximum one per page.
- **Headline** (Space Grotesk 600, `clamp(1.5rem, 3vw, 1.875rem)`, 1.3): Section headings. `text-wrap: balance`.
- **Title** (Inter 600, 1.25rem, 1.4): Card titles, process step names.
- **Body** (Inter 400, 1rem / 16px, 1.625): Paragraphs, descriptions. Line length capped at 70ch. `text-wrap: pretty`.
- **Body Large** (Inter 400, 1.125rem / 18px, 1.5): Hero subtitles, lead paragraphs.
- **Label (overline)** (Inter 500, 0.875rem, uppercase, 0.04em tracking): Eyebrows above section headings. Used sparingly — not as a default scaffold for every section.
- **Label Small** (Inter 600, 0.75rem, uppercase, 0.1em tracking): Meta text, tags, step markers.

### Named Rules
**The Single Display Rule.** Only one `display`-sized type element per page. If a second heading needs visual weight, use `headline` and let the hierarchy breathe.

**The No-Gradient-Text Rule.** Type is rendered in a single solid color. `background-clip: text` with gradients is prohibited — emphasis comes from weight, size, and spacing, not from decorative fill.

## 4. Elevation

The system is flat by default. Depth is conveyed through **tonal layering** — seven surface tokens from `#ffffff` to `#e0e3e5` — and **hairline borders** (`1px solid #E2E8F0`), not through box-shadows.

The only shadow-like effects in the system serve atmospheric or interactive purposes:
- **Navbar:** A `backdrop-filter: blur(20px)` on a translucent background creates a frosted-glass effect as the user scrolls. This is functional (keeps navigation readable over content) and explicitly not a box-shadow.
- **Hero glow:** A 800px `rgba(0, 81, 213, 0.05)` radial blur behind the hero headline. Atmospheric only — not a structural elevation.
- **Buttons:** No shadow at rest. On hover, `transform: scale(1.02)` with a color shift provides tactile feedback. On active (click), `scale(0.97)`.
- **Process steps:** No shadow at rest. On hover, a background color shift (`surface-container-low`) with a subtle `box-shadow` pulse on the step marker.

### Named Rules
**The Flat-By-Default Rule.** Elements are flat at rest. If it looks like a card with a shadow, the shadow is too strong. Tonal layering and hairline borders are the approved depth mechanisms.

## 5. Components

### Buttons

- **Shape:** Slightly squared corners (0.25rem / 4px). All buttons share the same radius regardless of size.
- **Primary (`btn-primary`):** Slate Ink (`#0F172A`) background, white text, 14px 28px padding. Hover shifts to Slate Soft (`#1e293b`) with `scale(1.02)`. Active `scale(0.97)`. Transition: 0.25s ease.
- **Secondary (`btn-secondary`):** Signal Blue (`#0051D5`) background, white text. Hover darkens to `#0042b3` with `scale(1.02)`.
- **Ghost (`btn-ghost`, `btn-ghost-light`):** Transparent background with Signal Blue border on dark variant, white border on light variant. Hover fills with the border color and flips text to white.
- **Large modifier (`btn-lg`):** Adds 18px 36px padding for hero and CTA contexts.
- **Block modifier (`btn-block`):** Full width for mobile or form contexts.
- **Link-arrow (`link-arrow`):** Text link with a `→` arrow. Arrow animates right on hover. Used for secondary CTAs — "Still deciding?" / "View all services".

### Cards / Containers

- **Style:** Two card patterns exist — `flat-card` and `process-step`. Both use `#ffffff` background, 0.75rem (12px) radius, and a 1px hairline border.
- **Flat Card (`flat-card`):** Used in the services grid. 24px internal padding. Hover applies a background color shift to Signal Tint (`#dbe5ff`) with a subtle `translateY(-2px)`.
- **Process Step (`process-step`):** Used in the homepage process grid. Same visual base but with a numbered marker (01–06). Marker has a Signal Blue background with a pulsing halo effect on scroll reveal.
- **Shadow:** None. Cards at rest are flat. Hover provides the only elevation cue through color shift and translation.

### Inputs / Fields

- **Style:** White background, 1px hairline border (`#E2E8F0`), 0.375rem (6px) radius, 12px 16px padding. Inter 16px text.
- **Focus:** Border shifts to Signal Blue (`#0051D5`) with a `box-shadow: 0 0 0 3px rgba(0, 81, 213, 0.15)` ring. Text color stays `#191c1e`.
- **Error:** Border shifts to Error Red (`#EF4444`) with a matching ring. Error message appears below in 0.75rem red text.
- **Success:** Border shifts to Success Green (`#10B981`) after validation.
- **Select (`form-select`):** Same base style. Chevron icon is a CSS `background-image` inline SVG, not a pseudo-element.
- **Placeholder:** `#76777d` (outline). Not light gray — must maintain 4.5:1 contrast against the white input background.

### Navigation

- **Style:** Fixed frosted-glass header (`rgba(247, 249, 251, 0.9)` with `backdrop-filter: blur(20px)`). Hairline bottom border appears on scroll via `.scrolled` class.
- **Typography:** Inter 14px, uppercase, 0.06em tracking. Default color `#191c1e`, hover shifts to Signal Blue.
- **Active state:** Underline-style indicator using a pseudo-element `::after` with 2px Signal Blue.
- **Mobile:** Hamburger toggle at ≤860px. Menu slides down with `max-height` animation. Full-height links with increased tap targets.
- **CTA link (`nav-cta`):** Pill-style primary button in the nav. Opens Calendly popup widget.

### The Particle Network (Background)

A canvas-based connecting-node animation rendered at `z-index: -1` behind all content. 120 nodes drift slowly, connecting within 200px of each other with Signal Blue lines at subtle opacity (maximum 0.5). Mouse proximity repels nodes. The animation:
- Is `aria-hidden="true"` and `pointer-events: none`
- Disables entirely when `prefers-reduced-motion: reduce` is active
- Uses `requestAnimationFrame` and clears the canvas each frame — no DOM manipulation beyond the single `<canvas>` element

### Calendly (Booking)

- **Popup widget:** Opens on any "Get a Quote" or "Book a Free Call" CTA. Triggered via `Calendly.initPopupWidget()` in HTML onclick attributes.
- **Inline widget:** Embedded on the contact page below the form. Wrapped in a container with hairline border and card-style background matching `flat-card`.

## 6. Do's and Don'ts

### Do:
- **Do** use tonal layering (surface → surface-container-low → surface-container) to separate content areas instead of shadows.
- **Do** keep Signal Blue to ≤10% of any viewport. Let its rarity signal interactivity.
- **Do** use `text-wrap: balance` on all h1–h3 elements for even line lengths.
- **Do** cap body text at 70 characters per line.
- **Do** make buttons feel responsive: `scale(1.02)` on hover, `scale(0.97)` on active, with a color shift.
- **Do** use `data-reveal` scroll animations with staggered delays — but ensure content is visible as a default (animations enhance, not gate).
- **Do** respect `prefers-reduced-motion`: disable all reveal animations and particle effects.
- **Do** maintain 4.5:1 contrast on body text and 3:1 on large text.

### Don't:
- **Don't** use box-shadows for depth. Use hairline borders and tonal surfaces instead.
- **Don't** use gradient text (`background-clip: text` with gradient). Single solid colors only.
- **Don't** use border-left or border-right >1px as a colored accent stripe on cards or list items.
- **Don't** ship numbered section eyebrows (01 / 02 / 03) above every section. They belong only on the Process page where the sequence carries information.
- **Don't** use glassmorphism decoratively. The navbar's frosted effect is functional, not ornamental.
- **Don't** repeat the same icon + heading + text card pattern more than three times on a page. Vary the layout.
- **Don't** use placeholder text below 4.5:1 contrast. `#76777d` or darker.
- **Don't** ship an `<h1>` that isn't using `text-wrap: balance`.
- **Don't** use "modern" as a design adjective. Be specific.
