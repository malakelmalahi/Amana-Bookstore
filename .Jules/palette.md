## 2025-05-15 - Accessible Dynamic Values in Cart
**Learning:** Using `aria-live="polite"` and `aria-atomic="true"` on containers for dynamic text (like quantities and subtotals) ensures screen readers announce updates immediately. Combining this with `sr-only` labels (e.g., "Quantity: ") provides necessary context for these values without affecting the visual design.
**Action:** Always wrap dynamic numerical values in live regions and provide hidden labels if the visual context is purely positional or icon-based.
