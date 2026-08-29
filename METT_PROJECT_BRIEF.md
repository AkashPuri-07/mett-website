# METT Website — Project Brief

One-page website for the **Maharashtra Education Think Tank** (M·E·T·T), an independent forum where academic and industry leaders meet to discuss higher education policy and practice.

Read `CLAUDE.md` first for working rules. This file is the content + design spec.

---

## 1. Design tokens (already approved — build to this exactly)

**Colors**
| Token | Hex | Use |
|---|---|---|
| Ink Navy | `#16213E` | headlines, nav, primary text |
| Convocation Maroon | `#7A2E3B` | secondary accent, eyebrows |
| Marigold | `#E2A33D` | primary accent, CTAs, the "×" motif |
| Paper (background) | `#FFFFFF` | **pure white — confirmed, no off-white/cream** |
| Ink Navy 60% | `rgba(22,33,62,0.62)` | muted body text |
| Hairline | `rgba(22,33,62,0.12)` | dividers/borders |

**Type**
- Display: `Fraunces` (serif, weight 300–600) — headlines
- Body: `Inter` — paragraphs, nav, buttons
- Labels/eyebrows: `IBM Plex Mono`, uppercase, letter-spaced — small caps-style tags like "Focus 01"

**Motion (TBI-institute style — energetic but not gimmicky)**
- Hero: the "×" in "Academia × Industry" does a slow one-time rotation on page load
- Scroll-reveal on every section (fade + rise, ~24px, intersection observer)
- Hover states: cards lift slightly, focus-area rows shift right and shift color to maroon
- Respect `prefers-reduced-motion` — disable the above for users who've set that.

**Signature element:** the brochure's own "Academia × Industry" mark, reused as a recurring divider/motif — not a generic icon set.

A working HTML/CSS preview of this system already exists (`mett-preview.html`) — match it, don't reinvent it.

---

## 2. Section-by-section content (final, approved copy — use exactly as written)

### Nav
`M·E·T·T` logo (with marigold "×" between letters) — links: Membership / What We Do / Focus / Get in Touch

### Hero
- Eyebrow: "An Independent Forum for Higher Education"
- H1: "Academia × Industry, at one table."
- Subtext: "Universities and industry rarely talk to each other directly — one from the classroom, the other from the workplace. M·E·T·T brings them together at the same table, so that higher education is shaped by both sides, not just one."
- Tag row: Convene — roundtables & conclaves · Disseminate — open publications · Advise — regulator recommendations
- Hero image: roundtable/conference photo (see Image Manifest, `hero.jpg`)

### Membership ("Academia × Industry, at One Table")
Two-column split with the "×" as a literal visual divider:
- **Academia** — "Vice Chancellors, Deans and academic leaders — the people who run our institutions."
- **Industry** — "Industry leaders, employers and practitioners — the people who hire what those institutions produce."

### What We Do (numbered sequence — i, ii, iii — this is a real process, keep the numbering)
i. **Convene** — "We bring academic and industry leaders together — through meetings, conferences, conclaves and roundtables — to talk honestly about the challenges facing higher education."
ii. **Disseminate** — "What comes out of these discussions doesn't stay private. We publish our findings openly, so any institution can read and use them."
iii. **Advise Regulators** — "When a discussion points to a real, useful idea, we share it with the regulators who can act on it."

### How We Work (3-card grid)
- **Convenings** — "Closed-door roundtables where senior leaders can speak freely, without an audience."
- **Publications** — "Each roundtable is written up as a plain, public record — free for any institution to read." *(this card carries the image — see manifest)*
- **Advisory** — "We share recommendations with regulators only when a discussion has produced something worth acting on."

### Areas of Focus (hover rows — kept as plain labels, clearer than prose here)
Focus 01 — Higher Education
Focus 02 — Best Education Practices
Focus 03 — Academic Initiatives

### Leadership
Abhijit Puri — Chief Member. "Supported by a growing group of academic and industry leaders from across Maharashtra."
(Use initials avatar "AP" — no stock photo here, this is a real named person and needs a real photo eventually, not a placeholder.)

### Get in Touch / Footer
- Eyebrow: "Get in Touch"
- H2: "Join the Conversation."
- Subtext: "Academic and industry leaders are welcome to join M·E·T·T's ongoing conversations, briefs and roundtables."
- Button: "Reach out to METT →"
- Footer line: M·E·T·T — Maharashtra Education Think Tank · Policy · Practice · Dialogue

---

## 4. Image manifest

Claude Code has no live internet access, so these are exact, pre-sourced, free-license (Unsplash) URLs. Download each, optimize (WebP), and save under `/public/images/` with the given filename.

| Section | Filename | Source URL | Notes |
|---|---|---|---|
| Hero | `hero.jpg` | `https://images.unsplash.com/photo-1561489396-888724a1543d?w=1600&auto=format&fit=crop&q=80` | Roundtable/conference scene |
| How We Work → Publications card | `publications.jpg` | `https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&auto=format&fit=crop&q=80` | People at table with laptop — reading/working feel |

If you want alternates for either slot, other free-license options from the same Unsplash search set:
- `https://images.unsplash.com/photo-1653669486884-48b9938fe446` (group around table — good for Membership section if we add imagery there later)
- `https://images.unsplash.com/photo-1631701731910-2c6c6c1545f2` (group at table by window)

Do not use any image of a real named, identifiable public figure. These are generic/stock scenes only.

---

## 5. Domain & deploy
- Domain: `mett.co.in` (purchased via Hostinger)
- Hosting: GitHub Pages, custom domain via `CNAME` file + DNS A/CNAME records at Hostinger (same pattern as akashpuri.in)
- Repo: static Vite build output

---

## 6. What to do first
1. Scaffold the Vite + React + Tailwind + Framer Motion project.
2. Set up the design tokens (Tailwind config / CSS variables) from Section 1.
3. Build the sections in Section 2, in order.
4. Wire in the SEO checklist from `CLAUDE.md`.
5. Add GA4 placeholder + note on Search Console verification.
6. Show me a local preview before any git commit.
