## 2025-05-15 - Accessibility and Navigation Polish
**Learning:** Adding a "Skip to main content" link and proper ARIA labels for dynamic elements (like cart counts and quantity controls) significantly improves the experience for keyboard and screen reader users without impacting the visual design for others. Using `aria-current="page"` provides essential context for current navigation state.
**Action:** Always include a skip-to-content link in the root layout and ensure interactive elements have descriptive ARIA labels, especially when they represent state or lack textual description.
