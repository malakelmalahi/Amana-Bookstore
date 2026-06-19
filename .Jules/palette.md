# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-06-19 - Accessible Dynamic UI Feedback
**Learning:** For interactive list items that modify state (like cart quantities), providing descriptive `aria-label` attributes on icon-only buttons is crucial for screen reader context. Furthermore, wrapping dynamic values in `aria-live="polite"` ensures that changes are announced immediately without interrupting the user's flow.
**Action:** Always include descriptive ARIA labels for symbol-based controls and use `aria-live` regions for any text that updates based on user interaction to provide immediate accessible feedback.
