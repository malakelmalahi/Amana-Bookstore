## 2025-05-14 - Skip Link and ARIA Label Patterns
**Learning:** Implementing a "Skip to main content" link significantly improves keyboard navigation by bypassing repetitive headers. Using dynamic ARIA labels (e.g., `aria-label={`My Cart, ${count} ${count === 1 ? 'item' : 'items'}`}`) provides essential context for screen reader users that might be lost in purely visual badges.
**Action:** Always include a skip link in the root layout and ensure interactive elements with dynamic states (like cart counts) have descriptive, correctly pluralized ARIA labels.
