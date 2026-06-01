## 2026-06-01 - [Skip to Main Content Link]
**Learning:** A "Skip to main content" link is a critical micro-UX for keyboard accessibility. It must be the first focusable element in the DOM and requires a valid focus target (like `<main id="main-content" tabIndex={-1}>`) to bypass navigation.
**Action:** Always include a skip link in root layouts for multi-page apps with persistent navigation.
