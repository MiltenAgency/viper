# Viper (Clivelle) — Designer Portfolio Template (Next.js rebuild)

## Register

Dark and editorial. Near-black ground, one enormous split-letter wordmark, and photography bled to the edges. Type is a single grotesk pushed to extremes — 260px at the top, 15px everywhere else.

## Users

Studios and founders vetting a freelance designer, arriving from a referral or a portfolio link. The site's job: land the name, show four projects and three written pieces, and keep the contact route one tap away.

## Product Purpose

Portfolio for an independent designer: a home page, an about page, a work index with four case studies, a blog with three posts, and a contact page. 12 routes.

## Brand Personality

Charcoal ground with paper-white type and a single accent. Section headings animate in letter by letter; project and blog cards are full-bleed photography with floating pill labels.

## Design Principles

- Headings are split per character and revealed letter by letter on scroll
- Type steps down hard below 810px: the wordmark 260 → 82, section headings 110/90 → 56, sub-headings 48 → 30
- Cards and imagery run edge to edge at a 20px gutter rather than in a centred column
- Marquee strips loop as two identical tracks offset by half
- Reduced motion turns off Lenis, the reveals, the letter animation and the marquees

## Accessibility & Inclusion

Semantic landmarks, alt text on project photography, split-letter headings exposed as a single string to assistive tech, decorative marks marked `aria-hidden`, and a full `prefers-reduced-motion` path.

## Fidelity

Measured against the original export running side by side at 1440px:

| Route | Original | Rebuild | Δ |
|---|---|---|---|
| `/` | 19628 | 19710 | +0.42% |
| `/about` | 9852 | 9774 | −0.79% |
| `/blog` | 3296 | 3290 | −0.18% |
| `/blog/[slug]` (3) | 7285–7333 | 7279–7327 | −0.08% |
| `/contact` | 3406 | 3416 | +0.29% |
| `/work` | 4018 | 4008 | −0.25% |
| `/work/[slug]` (4) | 8571–8632 | 8515–8576 | −0.65% |

Every route is within 0.79%. Mobile checked at 390px: no horizontal overflow on any route.

### Repaired during verification

- **Every route scrolled sideways on a phone.** Three separate causes, all the same shape — desktop type sizes left in place at mobile. The export steps `.t-hero` from 260px to 82px, `.t-h2`/`.t-h4` from 110/90px to 56px, and `.t-h3` from 48px to 30px below 810px. Without those steps the split-letter headings, which never wrap, pushed the page to 479px inside a 390px viewport. The nav also kept its "Get in touch" CTA at mobile, where the export shows only the logo and the menu button.
- **"More Works" listed the wrong projects.** The rebuild rotated through the list from the current project; the export always shows the first two entries that are not the current one. Verified against all four detail pages.
- **Two blog posts showed four hero tags instead of three.** The fourth was the first content block's label, which sits much further down the page — it had been folded into the tag array.
- **The experience list paired the dates with the wrong line.** The export puts the company on its own line and the period beside the job title below it; the rebuild had the period beside the company.
- **Three animations were missing or wrong**, found by driving both sites with
  Playwright and diffing what actually moves:
  - *Hero parallax.* The export does not pin the hero flat — the panel drifts up
    at 0.2x the scroll distance and the photo a further 0.1x inside it, so the
    picture tracks at 0.3x. The rebuild pinned it dead still. Driving this from
    `useScroll({ target })` does not work: while a section is stuck its viewport
    rect never changes, so progress stays at 0. It has to come from the window
    scroll measured against the section's document offset.
  - *Partner logos.* The export clips them to a 600px window and slides the
    track left at 51px/s on a 120px pitch. The rebuild had them as a static
    wrapped row.
  - *Home intro cards.* 440x370 in the export, built as 440x264 — and a 91px
    spacer had been added below them, which masked the error in the page total.
    Both corrected.
- **`ApproachStep` needed an explicit type** — only the first step carries a pill, so TypeScript inferred a union and the build failed on `step.tag`.

## Deviations from the original Framer template

- **The Framer promo chip is not reproduced.** The export renders a fixed "Use for Free" badge bottom-right of every page linking to `framer.com/projects/new?duplicate=…` with an affiliate parameter. It is Framer's marketing, not the template's design, and every other rebuild in this set drops it too.
- **Counters animate the number itself** rather than rolling a hidden `0` copy out of view, so the DOM carries one string where the export carries two. Settled values are identical (20+, 95+).
- **Three images ship as 0-byte files** in the export; each `src` points at the largest intact variant.

## Working with the export

`scripts/extract.mjs` mines the original export (`../viper-framer`): it decodes the HTML string literal out of each `route.ts` and dumps routes, text, images, colours, headings, sections, metadata and `@font-face` rules. Run it with no arguments for usage.

Note the non-standard folder naming: `viper-framer` / `viper-mine`, not `Viper - framer` / `Viper - mine`.
