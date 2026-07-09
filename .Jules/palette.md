## 2025-07-09 - Accessible Cart Item Controls

**Learning:** When updating dynamic text values like item quantities or price totals in the UI (e.g., `CartItem.tsx`), wrapping the element in `aria-live="polite"` and `aria-atomic="true"` ensures assistive technologies announce the new values immediately. Additionally, using `sr-only` labels for currency values provides necessary context (e.g., "Price: $10.00" instead of just "$10.00").

**Action:** Always include `aria-live` and `sr-only` context labels for dynamic financial or quantitative data in the cart.
