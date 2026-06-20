## 2025-05-15 - [Accessible Cart Updates]
**Learning:** In highly interactive components like a shopping cart, simply updating the UI visually is insufficient for accessibility. Using `aria-live="polite"` combined with `aria-atomic="true"` on dynamic text elements (like quantity and subtotal) ensures that assistive technologies announce updates automatically as they occur, without interrupting the user's current task.

**Action:** When implementing any client-side dynamic content updates, evaluate if the change is significant enough to warrant an `aria-live` region, and ensure all interactive triggers (buttons) have context-rich `aria-label` attributes that include the item name.
