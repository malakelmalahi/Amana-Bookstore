## 2025-05-14 - Accessible Shopping Cart Updates
**Learning:** When updating dynamic text values like item quantities or price totals in the UI, wrapping the element in `aria-live="polite"` and `aria-atomic="true"` ensures assistive technologies announce the new values immediately. Additionally, providing a hidden label with `sr-only` for currency values helps screen readers provide better context.
**Action:** Always use `aria-live` for dynamic UI updates and `sr-only` labels for numeric values that lack explicit textual context.
