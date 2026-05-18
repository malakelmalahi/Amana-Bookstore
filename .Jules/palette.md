## 2025-05-15 - Skip-to-content Link Implementation
**Learning:** Implementing a "Skip to main content" link significantly improves keyboard accessibility for screen reader and keyboard-only users by allowing them to bypass repetitive navigation. Using Tailwind's `sr-only focus:not-sr-only` classes is an effective way to keep the link hidden until it's needed.
**Action:** Always include a skip-to-content link in the root layout of applications with significant navigation menus. Ensure the target element has a corresponding ID and `tabIndex={-1}` for reliable programmatic focus.
