# Mythos — Style Guide

## Palette

| Token | Hex | Usage |
|-------|-----|-------|
| cream | #F2EFE8 | Background |
| cream-light | #FAF8F5 | Lighter accent |
| cream-dark | #E8E4D8 | Scrollbar, borders |
| ink | #2C2A28 | Primary text, logo, buttons |
| ink-light | #5B5854 | Italic sub-lines, secondary text |
| ink-dark | #1A1817 | Deepest accent (unused currently) |

## Typography

| Role | Family | Weight | Style |
|------|--------|--------|-------|
| Headings (primary) | Cormorant Garamond | 300 (Light) | Normal |
| Headings (sub-lines) | Cormorant Garamond | 300 (Light) | Italic, ink-light color |
| UI text (hints, buttons, footer) | Inter | 300-400 | Uppercase, wide tracking |

### Heading Scale
- Desktop: `clamp(2.8rem, 7vw, 7.5rem)`
- Line height: 1.1
- Letter spacing: -0.01em

### Small Text
- Hero hint: 0.65rem, uppercase, 0.3em tracking
- Footer: 0.6rem, uppercase, 0.4em tracking
- Button: 0.65rem, uppercase, 0.25em tracking

## Layout Pattern

Sections alternate alignment in a deliberate rhythm:
1. Left-aligned — declaration
2. Right-aligned — counterpoint or continuation
3. Center-aligned — breathers, pivots, emotional beats

Sub-lines (the italic second line) indent:
- Left-aligned sections: sub-line indents right (margin-left: 3rem / 6rem)
- Right-aligned sections: sub-line indents left (margin-right: 3rem / 6rem)
- Center-aligned sections: sub-line stays centered

### Section Heights
| Class | Height | Usage |
|-------|--------|-------|
| tall | 120vh | Major statements, key concepts |
| medium | 100vh | Standard scroll sections |
| short | 80vh | Punchy single lines ("We stopped.") |
| breath | 70vh | Rapid-fire parallel sections |

## Animation

### Scroll Reveal
- Initial: opacity 0, translateY(50px), blur(8px)
- Visible: opacity 1, translateY(0), blur(0)
- Duration: 1.6s
- Easing: cubic-bezier(0.2, 0.8, 0.2, 1)
- Trigger: IntersectionObserver at 20% threshold
- Elements un-reveal when fully scrolled past (both directions)

### Delay Classes
- d1: 100ms
- d3: 300ms
- d5: 500ms
- d7: 700ms

### Vertical Line (Hero)
- 1px wide, ink at 15% opacity
- Grows from top via scaleY animation, 2s

## Texture

### Noise Overlay
- Fixed position, full viewport
- SVG fractalNoise filter (baseFrequency 0.8, 3 octaves)
- Opacity: 0.04

### Vignette
- Fixed radial gradient
- Transparent center → ink at 4% opacity at edges

## Logo Usage
- Watermark (hero): 70vw wide, 4% opacity, centered behind content
- Breather (mid-page): clamp(120px, 20vw, 280px), 30% opacity
- Finale (bottom): clamp(220px, 50vw, 700px), full opacity
- Fill color always matches ink (#2C2A28)

## Copy Rules
- Jack Butcher voice: declarative, compressed, no hedging
- One thought per section maximum
- Line breaks do the work, not punctuation
- Sub-lines are softer restatements or completions, never new ideas
- No exclamation marks. No questions. Statements only.
- Standalone italic sections ("We stopped.") mark emotional turns

## Form Styling
- No visible borders except bottom line (1px, ink at 25% opacity)
- Focus state: bottom border goes full ink
- Placeholder: italic, ink at 35% opacity
- Button: ink background, cream text, uppercase Inter, wide tracking
- Hover: background transitions to ink-light over 0.5s

## Selection
- Background: ink
- Text: cream
