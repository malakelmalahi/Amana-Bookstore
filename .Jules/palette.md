## 2025-05-14 - [Accessibility: Skip to Main Content Link]
**Learning:** Adding a 'Skip to main content' link is a fundamental micro-UX improvement that drastically improves navigation for keyboard and screen reader users. It requires both a visually hidden (but focusable) trigger at the top of the body and a corresponding target with a matching ID and `tabIndex={-1}` to handle programmatic focus correctly in some browsers.
**Action:** Always include a 'Skip to main content' link in the root layout of any new project to ensure basic accessibility compliance from the start.
