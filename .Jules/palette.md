## 2025-05-15 - [Skip to main content accessibility]
**Learning:** Adding a "Skip to main content" link is a high-impact, low-effort accessibility win for keyboard users, especially in apps with sticky navigation. Using `tabIndex={-1}` and `outline-none` on the target element ensures reliable programmatic focus without disruptive visual rings for mouse users.
**Action:** Always include a skip-link in the root layout as the first focusable element, following the `sr-only focus:not-sr-only` pattern.
