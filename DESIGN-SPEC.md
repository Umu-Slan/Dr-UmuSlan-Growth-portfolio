# Viral Template — Design Specification

Complete design system matching the original [Viral Framer template](https://viral-sma.framer.website/) by Hamza Ehsan.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|--------|
| Background | `#FAF7F2` | Primary page background (warm cream) |
| Background Alt | `#F5F2ED` | Section alternates, cards |
| Card/White | `#FFFFFF` | Card backgrounds |
| Text Primary | `#0D0D0D` | Headlines, primary text |
| Text Secondary | `#5C5C5C` | Body copy, subtitles |
| Text Muted | `#8C8C8C` | Labels, captions |
| Accent | `#E85D4C` | CTAs, links (coral) |
| Accent Hover | `#D94A3A` | Button hover state |
| Border | `#E8E5E0` | Dividers, card borders |
| Border Light | `#F0EDE8` | Soft borders |

---

## Typography

### Font Families
- **Display/Headlines**: `Syne` (Google Fonts)
  - Weights: 400, 500, 600, 700, 800
- **Body**: `DM Sans` (Google Fonts)
  - Weights: 100–1000 (variable)

### Type Scale
| Use | Size | Weight |
|-----|------|--------|
| Hero title | 3rem–5rem (clamped) | 700 |
| Section title | 2rem–3rem | 700 |
| Card title | 1.25rem–1.5rem | 600 |
| Body | 1rem | 400 |
| Small/caption | 0.875rem | 400 |
| Label | 0.75rem | 500 (uppercase) |

---

## Spacing

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Tight gaps |
| sm | 8px | Icon spacing |
| md | 16px | Inline spacing |
| lg | 24px | Card padding |
| xl | 32px | Section gaps |
| 2xl | 48px | Block spacing |
| 3xl | 64px | Section elements |
| 4xl | 96px | Major sections |
| 5xl | 128px | Hero/CTA padding |
| 6xl | 160px | Full section padding |

---

## Border Radius
- **Sm**: 8px
- **Md**: 12px
- **Lg**: 16px (cards, images)
- **Xl**: 24px (large cards)
- **Full**: 9999px (pill buttons)

---

## Layout
- **Container max**: 1280px
- **Container padding**: clamp(24px, 5vw, 48px)
- **Section vertical padding**: clamp(64px, 10vw, 112px)

---

## Components

### Buttons
- Primary: Black fill, white text, full border-radius
- Secondary: Transparent with 2px border
- Hover: Slight lift (translateY -1px)

### Cards
- White background, 1px border (#F0EDE8)
- 24px border-radius
- Hover: Soft shadow

### Marquee
- Syne font, semi-bold
- Muted gray color
- 30s linear infinite animation

---

## Sections (in order)
1. Header (fixed, blurred backdrop)
2. Hero
3. Marquee
4. Services (3 cards)
5. Mission
6. Client Results (2 case studies)
7. How We Work (3 steps)
8. Testimonial
9. The Difference (comparison table)
10. Team (3 members + careers CTA)
11. FAQ (accordion)
12. Get Started CTA
13. Footer
