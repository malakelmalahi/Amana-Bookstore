# Palette's Journal

## 2025-08-05 - [Accessible Search & Live Updates]
**Learning:** Adding a decorative search icon, a clear query button inside the text input, and wrapping dynamic result counts in `aria-live="polite"` + `aria-atomic="true"` with correct pluralization ensures screen reader users are kept fully aware of catalog updates and state transitions.
**Action:** Always combine search fields with a hidden `<label>` for accessibility, conditional horizontal padding (e.g., `pr-10`) to prevent input overlap with absolute-positioned clear buttons, and an interactive `aria-live` element for dynamic feedback.
