## 2026-05-30 - Skip to Main Content for Keyboard Accessibility
**Learning:** Users who navigate via keyboard or screen readers benefit from bypass blocks that allow skipping repetitive navigation sections. Implementing a skip link as the first focusable element is a core WCAG 2.4.1 requirement.
**Action:** Always include a skip link in the root layout, hidden by default with `sr-only` and visible on focus. Use `tabIndex={-1}` on the target element to allow programmatic focus without adding it to the natural tab order.
