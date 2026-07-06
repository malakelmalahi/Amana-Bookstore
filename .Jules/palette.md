## 2025-05-22 - Enhanced Search Accessibility and Interaction

**Learning:** When updating dynamic text (like "Showing X books") via client-side filtering, using `aria-live="polite"` with `aria-atomic="true"` ensures the entire updated string is announced by screen readers, providing clear context of the current state. Additionally, adding a "Clear search" button improves efficiency for resetting filters.

**Action:** Wrap result counts in live regions with `aria-atomic="true"` and provide an accessible "Clear" mechanism for search/filter inputs, ensuring inputs have conditional padding to avoid text overlap with clear buttons.
