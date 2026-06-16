## 2025-05-22 - [Accessibility: Skip to Main Content]
**Learning:** A "Skip to Main Content" link is a critical accessibility feature for keyboard-only and screen-reader users, allowing them to bypass repetitive navigation links. It should be the first focusable element in the DOM, hidden by default with `sr-only`, and made visible on focus.
**Action:** Always check for the presence of a skip link in the root layout of any new project and implement it if missing, ensuring it targets a `<main>` element with a corresponding `id` and `tabIndex={-1}`.
