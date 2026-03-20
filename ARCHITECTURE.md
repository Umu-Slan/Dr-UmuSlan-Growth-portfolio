# Portfolio Architecture & Funnel

**Target**: Multi-disciplinary professional portfolio (Digital Marketing, Copywriting, SEO, Shopify, CRO, Social Media Design, SaaS Development)

---

## 1. Information Architecture

```
Home (Single-page scroll)
├── Hero
├── Marquee (expertise tags)
├── About
├── Expertise (7 service areas)
├── Achievements
├── Case Studies (with evidence)
├── Testimonials
├── Process
├── Contact / CTA
└── Footer
```

---

## 2. Conversion Funnel

```
AWARENESS          INTEREST              EVALUATION         CONVERSION
    │                   │                      │                   │
    ▼                   ▼                      ▼                   ▼
 Hero + Marquee  →  About + Expertise  →  Case Studies  →  Book a call
 (Who are you?)    (What can you do?)   (Proof?)         (CTA)
                         │
                         └── Achievements (credibility boost)
                         └── Testimonials (social proof)
                         └── Process (trust / methodology)
```

**Funnel goals**:
1. **Hero**: Stop scroll, communicate value in 3 seconds
2. **About + Expertise**: Build relevance (“this person does what I need”)
3. **Achievements**: Add authority
4. **Case Studies**: Prove results with evidence (screenshots, dashboards)
5. **Testimonials + Process**: Reduce risk
6. **CTA**: Clear next step (call, hire, project inquiry)

---

## 3. Section Specs

### Hero
- **Headline**: Multi-role positioning (e.g. “Growth at the intersection of marketing, design & tech”)
- **Subhead**: One-line value prop
- **CTA**: Book a call / View work / Get in touch
- **Visual**: Optional hero image or gradient

### Marquee
- **Content**: Scrolling expertise tags (Digital Marketing • Copywriting • SEO • Shopify • CRO • Social Media • SaaS)
- **Purpose**: Quick scan of capabilities

### About
- **Photo placeholder**: 1:1 or 4:5 aspect
- **Bio**: 2–3 short paragraphs
- **Optional**: Location, availability, “Currently…” line

### Expertise (7 Cards)
| # | Area              | Icon/Visual      | Description placeholder     |
|---|-------------------|------------------|-----------------------------|
| 1 | Digital Marketing | —                | Paid, organic, campaigns   |
| 2 | Copywriting       | —                | Ads, landing pages, emails |
| 3 | SEO Specialist    | —                | Technical + content SEO     |
| 4 | Shopify Developer | —                | Stores, themes, apps       |
| 5 | CRO Specialist    | —                | Funnels, A/B, conversion   |
| 6 | Social Media Design| —               | Graphics, carousels, reels  |
| 7 | SaaS Developer    | —                | Apps, dashboards, APIs      |

### Achievements
- **Stats row**: 4 metrics (Projects, Clients, Years, etc.)
- **Certifications**: Badge/logo placeholders
- **Awards/Recognition**: List placeholders

### Case Studies (Evidence-based)

**Card view (listing)**:
- Hero image (16:9)
- Client/Project name
- Category tag (e.g. SEO, Shopify, CRO)
- Short excerpt
- Key metric (e.g. +150% conversions)
- "View case study" link

**Detail view (expandable or modal)**:
- Project title
- Client + industry
- Challenge
- Solution
- Results (metrics)
- **Evidence gallery**:
  - Screenshot 1: Analytics/Dashboard
  - Screenshot 2: Before/After design
  - Screenshot 3: Ads/campaign
  - Screenshot 4: Website/store
  - (Flexible grid, 2–6 placeholders)

**Placeholder labels**:
- `[Dashboard Screenshot – Analytics]`
- `[Design Mockup – Social]`
- `[Ad Creative]`
- `[Website Screenshot]`
- `[Conversion Funnel]`
- `[Shopify Store]`

### Testimonials
- Quote
- Name, role, company
- Optional photo
- 2–3 slots

### Process
- 3–4 steps: Discovery → Strategy → Execute → Optimize (or similar)
- Short description per step

### Contact
- Headline
- Subtext
- Primary CTA: Book a call
- Secondary: Email, Calendly link placeholder

---

## 4. Image Placeholder Types

| Type            | Aspect   | Use                        |
|-----------------|----------|----------------------------|
| Hero/Project    | 16:9     | Case study cover           |
| Profile         | 1:1, 4:5| About section              |
| Dashboard       | 16:9, 3:2| Analytics, SaaS screenshots|
| Design          | 1:1, 4:5| Social posts, mockups     |
| Before/After    | 16:9     | Comparison shots           |
| Ad creative     | 9:16, 1:1| Social ads, reels         |

---

## 5. Content Fill Order (for user)

1. **Hero**: Name, headline, subhead, CTA
2. **About**: Bio, photo
3. **Expertise**: Adjust titles/descriptions per role
4. **Achievements**: Real numbers, cert names, logos
5. **Case Studies**: One at a time (copy + images)
6. **Testimonials**: Quotes, names, companies
7. **Process**: Steps and copy
8. **Contact**: Calendly/email links

---

## 6. Technical Notes

- **Single-page**: All sections in one HTML file, anchor links
- **Case study expand**: JavaScript toggle or CSS `details` for expand/collapse
- **Placeholders**: Semantic `figure` with `placeholder` class + label text
- **Responsive**: Mobile-first, grid fallbacks
