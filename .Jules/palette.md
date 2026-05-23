## 2025-05-15 - [Skip to Main Content Link]
**Learning:** For Next.js applications with fixed headers, a "Skip to main content" link is essential for keyboard and screen reader accessibility to bypass repeated navigation. It must target a main element with `tabIndex={-1}` to ensure focus is actually moved.
**Action:** Always include a skip-to-content link as the first focusable element in `layout.tsx` when a complex or fixed navigation is present.
