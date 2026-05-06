## 2025-05-14 - [A11y Foundations]
**Learning:** Skip-to-content links and focus management are critical for keyboard users in Next.js apps. Using `tabIndex={-1}` and `outline-none` on the target container ensures reliable programmatic focus without unintended visual artifacts for mouse users.
**Action:** Always include a Skip-to-content link and explicit focus-visible indicators for all interactive elements in the main navigation.

**Learning:** When using `aria-label` for dynamic content like cart counts, always implement correct pluralization logic (e.g., 'item' vs 'items') to ensure a professional and accurate experience for screen reader users.
**Action:** Use ternary operators or helper functions to handle pluralization in ARIA labels.
