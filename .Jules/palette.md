## 2025-05-15 - Accessible Navigation Labels
**Learning:** Per WCAG 2.5.3 (Label in Name), ARIA labels for navigation links like 'My Cart' must include the visible text. Including dynamic state (like item count) in the label provides essential context for screen reader users that sighted users get from visual badges.
**Action:** Always include visible text in ARIA labels for interactive elements, and use `aria-hidden="true"` on purely visual indicators (like badges) that are already described by the label to prevent redundant announcements.
