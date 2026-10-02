## 2025-05-15 - Accessible Search Input with Clear Button
**Learning:** Search inputs relying solely on `placeholder` attributes lack accessible labels for screen readers, and clear buttons without `type="button"` can cause unintended form behavior or lack visible keyboard focus rings.
**Action:** Always provide an `<label className="sr-only">`, a decorative search icon with `aria-hidden="true"`, dynamic input padding, and an explicit `type="button"` clear button with `aria-label` and `focus-visible:ring-2`.
