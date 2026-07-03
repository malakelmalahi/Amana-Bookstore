## 2025-05-22 - Shopping Cart Accessibility
**Learning:** Icon-only buttons and buttons with simple text like "+" or "-" in the cart require descriptive ARIA labels that include the item context (e.g., book title) to be fully accessible. Dynamic updates to quantity values should use `aria-live="polite"` to ensure screen readers announce the changes.
**Action:** Use `aria-label` with dynamic context and `aria-live` for numeric updates in cart-like interfaces.
