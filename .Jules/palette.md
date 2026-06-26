## 2025-05-14 - Accessibility Pattern for Dynamic Cart Updates
**Learning:** When updating dynamic text values like item quantities or price totals in the UI (e.g., `CartItem.tsx`), wrapping the element in `aria-live="polite"` and `aria-atomic="true"` ensures assistive technologies announce the new values immediately, improving the experience for screen reader users.
**Action:** Always use ARIA live regions for elements that update dynamically in response to user actions without a page reload.
