# Implement CometAI Design System

## Goal
Replace the default Next.js starter page with a responsive CometAI design-system showcase matching the provided reference image. The page should feel like a polished internal design-system sheet for the CometAI learning platform.

## Context and skills read
- `AGENTS.md`: requires an implementation prompt and approval before code changes; the supplied reference image is the visual source of truth; keep the page responsive; reuse existing Tailwind patterns where practical; run typecheck, lint, build, and dev-server checks.
- `sanity-best-practices`: not directly applicable to this presentational-only page.
- Current app uses Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Inspected code
- `app/page.tsx`: untouched create-next-app starter page.
- `app/globals.css`: Tailwind import plus default light/dark variables and system font fallback.
- `app/layout.tsx`: Geist font setup and default Next metadata.
- `package.json`: scripts are `dev`, `build`, and `lint`; no icon package is installed.

## Implementation decisions
- Build the design-system reference as the home page in `app/page.tsx`.
- Keep the page self-contained and data-driven where repeated tokens or component examples make that clearer.
- Use CSS variables in `app/globals.css` for CometAI colors, spacing, borders, glow, and typography.
- Use the existing Geist fonts unless a dependency-free local alternative is required; retain the current font loading approach.
- Use CSS shapes, gradients, and text for the CometAI mark and space background so no external image asset is required.
- Use familiar Unicode symbols only where they improve the specimen examples; do not add a new icon dependency for a static showcase.
- Keep the page accessible: semantic headings, labels, buttons/links for controls, visible focus states, and sufficient color contrast.
- The reference is a dense desktop sheet. On narrow screens, preserve the same visual hierarchy while stacking sections and allowing tables/specimens to scroll or reflow without overlap.

## Required visual sections
Implement the reference sections and approximate their content:
1. CometAI cover/introduction panel with version/date.
2. Primary and neutral color swatches with names and hex values.
3. Typography specimens for Space Grotesk and Inter styles.
4. Type scale table.
5. Spacing system from 4px through 64px.
6. Radius and shadow examples.
7. Outline and filled icon examples.
8. Button states and variants.
9. Input and select examples.
10. Badge/tag variants.
11. Status indicators.
12. Progress bar.
13. Course, lesson, and resource card examples.
14. Navigation, breadcrumbs, and pagination examples.
15. Principles footer: clarity first, consistency, focus and calm, accessible.

## Visual requirements
- Near-black navy background with subtle star-field/space atmosphere.
- Thin blue-gray section borders and compact rounded panels.
- CometAI blue, purple, pink, cyan, and white accents with restrained neon glows.
- Strong white headings, muted gray supporting text, and compact uppercase section labels.
- Match the reference's dense grid, small radius, tight spacing, and luminous accent details.
- Avoid generic marketing hero treatment: this is a design-system documentation sheet.

## Files expected to change
- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## Security and scope
- No authentication, Sanity, API routes, analytics, persistence, or user-provided input is needed.
- Do not add unrelated application functionality or dependencies.

## Acceptance criteria
- The home route renders the complete CometAI design-system showcase instead of starter content.
- All 15 reference areas are represented with usable specimen examples.
- Desktop layout resembles the supplied reference in density, palette, typography, and section ordering.
- Layout remains usable at mobile widths without clipped text or overlapping controls.
- Interactive-looking controls have appropriate semantic HTML and focus/hover/disabled states.
- No TypeScript, lint, or production build errors.
- No external network assets are required for the page to render.

## Checks
Run from the repository root:
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. `npm run dev` and open the displayed local URL.

## Manual test steps
1. Open the home route on a desktop viewport and compare section order, density, colors, and typography against the supplied image.
2. Resize to a narrow mobile viewport and confirm every label, card, table row, and control remains readable without horizontal page overflow.
3. Tab through buttons, links, inputs, and select controls to confirm visible focus states.
4. Confirm the page loads without external image or font failures and that the browser console has no application errors.
