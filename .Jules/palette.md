## 2025-05-15 - [Skip to Main Content Link]
**Learning:** Adding a "Skip to main content" link is a critical accessibility feature for keyboard-only and screen reader users to bypass repetitive navigation. It must be at the very top of the DOM and become visible on focus.
**Action:** Always include a skip link in the root layout when building multi-page apps with a persistent navigation bar. Use Tailwind's `sr-only focus:not-sr-only` classes for clean implementation.
