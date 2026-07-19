# Palette's Journal

## 2025-02-14 - [Screen Reader Context in Cart Lists]
**Learning:** For dynamic numeric values like item quantity and subtotals, adding `aria-live="polite"` and `aria-atomic="true"` ensures assistive technologies announce updates in real-time. Additionally, using a helper with `sr-only` prefix (e.g. `Subtotal: `) gives essential contextual meaning to naked numeric values.
**Action:** Always wrap dynamically updated quantity/subtotal displays in polite aria-live containers and pair them with screen-reader-only labels so screen readers get context on what the numbers mean when updated.
