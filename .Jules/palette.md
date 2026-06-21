## 2025-05-15 - Accessibility in Cart Controls

**Learning:** Quantity adjustment buttons (like + and -) and removal buttons in a cart are often icon-only or text-only without sufficient context. For screen reader users, these need descriptive labels. Additionally, dynamic updates to quantities should be announced using `aria-live`.

**Action:** Add descriptive `aria-label` to quantity and removal buttons (e.g., "Increase quantity of [Title]"). Wrap quantity text in an `aria-live="polite"` container with `aria-atomic="true"`.
