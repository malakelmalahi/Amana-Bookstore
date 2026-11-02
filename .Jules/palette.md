## 2025-05-18 - Search Input Accessibility and Result Announcer Pattern
**Learning:** Catalog search inputs relying only on placeholders lack screen reader discoverability; pairing a visually hidden label (`sr-only`), a clear button with `aria-label`, and `aria-live="polite"` on result counters provides immediate feedback for both visual and assistive technology users.
**Action:** When designing or refactoring catalog search inputs, always pair an `sr-only` label, an accessible clear button with `type="button"`, and a live region with conditional singular/plural grammar on the results count.
