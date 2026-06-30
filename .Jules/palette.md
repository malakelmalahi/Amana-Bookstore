## 2025-05-15 - Improving Accessibility for Dynamic Cart Values
**Learning:** When updating dynamic text values like item quantities or price totals in the UI, wrapping the element in `aria-live="polite"` and `aria-atomic="true"` ensures assistive technologies announce the new values immediately. Additionally, using `sr-only` labels provides necessary textual context for screen reader users that might be visually obvious but structurally hidden.
**Action:** Always include ARIA live regions for interactive quantity/total updates and use `sr-only` labels to provide context for numeric values.
