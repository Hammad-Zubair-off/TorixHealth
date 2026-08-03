# Component Map

Structure source of truth for the Torix site. Update this file when adding, renaming, or moving components, content modules, or routes.

## Architecture notes

- **Modular:** Pages compose prop-driven section components; copy lives in `content/*`; nav in `lib/nav.ts`; tokens in `app/globals.css`.
- **Maintainable:** Shared primitives (`Button`, `Container`/`Section`/`Kicker`, `Icon`, `card-lift` utilities) — change once, reuse everywhere.
- **Responsive (mobile-first):** `auto-fit` / `minmax` grids stack on small screens; Navbar collapses to menu; ProcessTimeline goes number-left / content-right on mobile; side padding `clamp(24px, 4vw, 44px)`; container max `1280px`.
- **Scalable:** New pages reuse the same sections + content modules; do not fork page-specific markup for shared patterns.

## Design tokens

| Concern | Path |
|---------|------|
| CSS tokens / Tailwind theme / motion utilities | [`app/globals.css`](../app/globals.css) |
| Design system reference | [`docs/DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) |
| Homepage visual plan | [`docs/HOMEPAGE_DESIGN_PLAN.md`](HOMEPAGE_DESIGN_PLAN.md) |
| Fonts | Sora (headings) + Plus Jakarta Sans (body) via [`app/layout.tsx`](../app/layout.tsx) |

## Shared chrome & primitives

| Component | Path |
|-----------|------|
| Navbar | [`components/Navbar.tsx`](../components/Navbar.tsx) |
| Footer | [`components/Footer.tsx`](../components/Footer.tsx) |
| Button | [`components/Button.tsx`](../components/Button.tsx) | primary filled accent; secondary / outline / ghost + lift hover |
| Container / Section / Kicker | [`components/Container.tsx`](../components/Container.tsx) |
| Icons | [`components/icons.tsx`](../components/icons.tsx) |
| Nav config | [`lib/nav.ts`](../lib/nav.ts) |
| `cn` util | [`lib/utils.ts`](../lib/utils.ts) |
| Card motion | `.card-lift` / `.card-lift-light` / `.card-lift-deep` in globals |

## Section components

| Component | Path | Notes |
|-----------|------|-------|
| Hero | [`components/Hero.tsx`](../components/Hero.tsx) | Soft wash band; filled primary CTA |
| TrustBar | [`components/TrustBar.tsx`](../components/TrustBar.tsx) | Quiet strip with hover chips; no stats |
| IconFeatureGrid | [`components/IconFeatureGrid.tsx`](../components/IconFeatureGrid.tsx) | Feature / denial grids; light/deep/open |
| SplitOfferings | [`components/SplitOfferings.tsx`](../components/SplitOfferings.tsx) | Services vs Solutions framing |
| ServicesOverview | [`components/ServicesOverview.tsx`](../components/ServicesOverview.tsx) | Services (light) + Solutions (deep) |
| AccountTeam | [`components/AccountTeam.tsx`](../components/AccountTeam.tsx) | Named-contact / pending photos |
| BenefitCards | [`components/BenefitCards.tsx`](../components/BenefitCards.tsx) | Reusable differentiator blocks |
| PlatformSpotlight | [`components/PlatformSpotlight.tsx`](../components/PlatformSpotlight.tsx) | Available; not on current Home |
| ProcessTimeline | [`components/ProcessTimeline.tsx`](../components/ProcessTimeline.tsx) | Numbered steps; stacks on mobile |
| FAQAccordion | [`components/FAQAccordion.tsx`](../components/FAQAccordion.tsx) | Native details/summary |
| CTABanner | [`components/CTABanner.tsx`](../components/CTABanner.tsx) | Closing deep band |
| TeamMemberCard | [`components/TeamMemberCard.tsx`](../components/TeamMemberCard.tsx) | About Us / AccountTeam |

## Content modules

| Module | Path |
|--------|------|
| Homepage copy | [`content/home.ts`](../content/home.ts) |

## Homepage section order

1. Navbar  
2. Hero  
3. TrustBar (named rep / BAA / in-house software / US-based)  
4. SplitOfferings (“Two things we do…”)  
5. ServicesOverview (Healthcare services + Software we wrote…)  
6. IconFeatureGrid (denials)  
7. ProcessTimeline (How onboarding runs)  
8. AccountTeam  
9. FAQAccordion  
10. CTABanner  
11. Footer  

**Copy source:** [`content/home.ts`](../content/home.ts) from Nocturne Light reference (em-dash phrasing cleaned).

**Intentionally omitted:** Testimonials; Healthcare SEO in nav/footer; invented stats.

## Routes (live)

| Route | Status |
|-------|--------|
| `/` | Homepage built |
| Other service/solution/supporting pages | Not built yet |
| `/services/healthcare-seo` | Stub only when added — not in nav |
