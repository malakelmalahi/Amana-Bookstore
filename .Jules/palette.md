## 2025-05-15 - [Search UX] Adding a "Clear search" button
**Learning:** Providing a quick way to reset filters (like search) improves interaction efficiency, especially in catalog views. Explicitly setting `type="button"` on these auxiliary buttons is essential in Next.js to avoid any unexpected form behavior or accidental reloads.
**Action:** Always include a "Clear" option for search inputs and ensure all non-submit buttons have an explicit `type="button"` attribute.
