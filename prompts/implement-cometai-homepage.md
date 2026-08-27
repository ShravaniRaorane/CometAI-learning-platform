# Implement CometAI Home Page

## Goal
Replace the current design-system showcase at `/` with the attached CometAI learning-platform home page reference.

## Context and skills read
- `AGENTS.md`: requires an implementation prompt and user approval before code changes; the attached image is the visual source of truth; preserve responsive behavior and run project checks.
- Existing project is Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.
- Existing route is a static presentational page; no Sanity, Clerk, PostHog, or API integration exists yet.

## Inspected code
- `app/page.tsx`: currently renders the CometAI design-system reference sheet and owns all home-page markup.
- `app/globals.css`: currently contains the dark CometAI token set and dense design-system styles.
- `app/layout.tsx`: loads Geist fonts and CometAI metadata.
- `public/`: contains only default Next assets.
- `design/cometai_homepage.png`: newly added user-provided reference asset; do not modify it.
- Worktree has unrelated user changes in `AGENTS.md`; do not overwrite them.

## Implementation decisions
- Replace the `/` page with a static, responsive CometAI course-discovery landing page.
- Keep the page dependency-free and data-driven for the repeated course cards.
- Use CSS-generated cosmic atmosphere, comet trails, stars, and planet horizon unless the supplied reference asset is needed; do not require external assets.
- Use semantic navigation, headings, links, buttons, a search input, and accessible labels.
- Keep search and navigation presentational for now; no backend search or authentication is part of this slice.
- Preserve the CometAI dark navy, blue, purple, pink, cyan, and white visual language, but tune layout and spacing to the attached homepage rather than the previous design-system sheet.

## Reference requirements
- Full-page dark space background with a thin rounded outer frame.
- Header with CometAI logo, Courses, My Learning, notification indicator, and circular profile avatar.
- Centered hero with `INTELLIGENT LEARNING` badge.
- Large two-line headline: `Search your learning in plain English.` with blue/purple gradient emphasis on `English.`.
- Supporting copy explaining that CometAI finds exact lessons across courses.
- Glowing `Explore Courses` CTA with arrow.
- Wide search field with search icon, placeholder `Ask anything about your learning...`, and keyboard hint `⌘ K`.
- All Courses section with title, View all courses link, and three cards:
  - Next.js for Production
  - Docker Essentials
  - TypeScript Deep Dive
- Each card includes a visual course mark, description, level, duration, and module count.
- Bottom announcement band with star icon, `New courses and lessons added every week.`, decorative lines, stars, and glowing planet horizon.
- Responsive mobile layout: compact header, stacked cards, full-width search/CTA, no clipped text or overlapping content.

## Files expected to change
- `app/page.tsx`
- `app/globals.css`

## Security and scope
- No secrets, external APIs, persistence, authentication, analytics, or user-generated input handling.
- Do not modify unrelated user changes or add unrelated application features.

## Acceptance criteria
- `/` renders the homepage shown in the attached reference instead of the design-system page.
- Header, hero, search, course section, three course cards, and cosmic announcement footer are all present.
- Desktop composition matches the reference in hierarchy, spacing, palette, glow, and density.
- Mobile layout remains readable and usable without page-level horizontal overflow.
- Controls and navigation are semantic and have visible focus states.
- TypeScript diagnostics contain no errors.
- No external image or network dependency is required for the page to render.

## Checks
Run from the repository root:
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. Start `npm run dev` and inspect `/` at desktop and mobile widths.
