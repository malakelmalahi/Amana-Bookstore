## 2025-06-12 - [Skip to Main Content Focus Management]
**Learning:** For a "Skip to main content" link to work effectively with keyboard navigation, the target container (e.g., `<main>`) must have `tabIndex={-1}`. This allows the element to receive programmatic focus when the skip link is activated, ensuring that the next "Tab" press starts from within the main content rather than returning to the top of the page.
**Action:** Always include `id="main-content"` and `tabIndex={-1}` on the primary content container when implementing skip links.
