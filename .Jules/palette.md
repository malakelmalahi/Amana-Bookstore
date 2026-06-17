## 2025-06-17 - Skip to main content link for keyboard accessibility
**Learning:** Adding a "Skip to main content" link as the first focusable child of the `<body>` is essential for keyboard and screen reader users to bypass repetitive navigation. Focus management must be handled by setting `tabIndex={-1}` on the target `<main>` element to allow programmatic focus and ensure sequential navigation starts from the top of the content.
**Action:** Always include a skip link in the root layout and ensure the target main element has a unique ID and `tabIndex={-1}`.
