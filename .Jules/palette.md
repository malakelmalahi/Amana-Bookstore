## 2026-05-02 - Skip to Main Content Link
**Learning:** A 'Skip to main content' link is a critical micro-UX/accessibility improvement for keyboard users in apps with top navigation. It must be the first focusable element and target an element with `tabIndex={-1}` and `outline-none` to ensure reliable programmatic focus without unintended visual artifacts.
**Action:** Always include a skip-to-content link in the root layout of web applications to enhance keyboard navigability.
