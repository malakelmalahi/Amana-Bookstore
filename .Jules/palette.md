## 2025-05-14 - Catalog Accessibility and Functional Polish
**Learning:** Hardcoded pagination state (like `itemsPerPage`) can lead to 'dead' UI controls that look functional but do nothing. Additionally, standard search inputs often lack semantic labels in favor of placeholders, which hinders screen reader accessibility.
**Action:** Always verify that 'Items per page' selectors are wired to state and provide clear semantic feedback for search results using `aria-live="polite"`.
