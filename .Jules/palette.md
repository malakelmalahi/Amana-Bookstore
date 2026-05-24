## 2025-05-22 - Skip Link for Keyboard Accessibility
**Learning:** A "Skip to main content" link is essential for keyboard and screen reader users to bypass repetitive global navigation. It must be the first focusable element in the DOM and use `tabIndex={-1}` on the target to ensure consistent focus behavior across browsers.
**Action:** Always implement a hidden-until-focused skip link in the root layout for any application with complex navigation.
