## 2025-05-15 - Enhancing Navigation Accessibility with ARIA Labels and Skip Links

**Learning:** When a navigation link contains a dynamic badge (like a cart count), providing a descriptive `aria-label` that includes the visible text and the badge value ensures screen reader users have the full context. Additionally, hiding the visual badge from screen readers using `aria-hidden="true"` prevents redundant announcements.

**Action:** Always use `aria-label` on interactive elements that contain visual-only indicators or badges, and ensure the label provides a clear, localized description of the element's state. Implement "Skip to main content" links as a standard practice for all multi-page applications to improve keyboard navigation efficiency.
