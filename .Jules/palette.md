## 2025-05-22 - [Accessibility] Skip Link and Navigation State
**Learning:** Adding a "Skip to main content" link and `aria-current="page"` significantly improves keyboard and screen reader navigation in Next.js apps with persistent layouts. Target the `<main>` element with `id="main-content"` and `tabIndex={-1}` to ensure reliable programmatic focus without visual clutter for mouse users.
**Action:** Always include a skip link in `layout.tsx` and sync `aria-current` with the active route in `Navbar.tsx` for all future projects in this design system.
