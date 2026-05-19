## 2025-05-15 - [Accessibility & Keyboard Navigation]
**Learning:** Implementing a "Skip to main content" link as the very first focusable element significantly improves the browsing experience for keyboard and screen reader users by allowing them to bypass repetitive navigation links.
**Action:** Always include a skip-to-content link in the root layout and ensure it's visually hidden until focused using Tailwind's `sr-only focus:not-sr-only` classes.

## 2025-05-15 - [Label in Name and Descriptive ARIA Labels]
**Learning:** Per WCAG 2.5.3 (Label in Name), ARIA labels for navigation links should include the visible text. Additionally, icon-only buttons or buttons in repetitive lists (like cart items) require descriptive labels (e.g., "Decrease quantity of [Title]") to provide essential context for screen reader users.
**Action:** Use template literals to provide dynamic, descriptive ARIA labels for buttons in lists and ensure visible text is part of any `aria-label` applied to links.
