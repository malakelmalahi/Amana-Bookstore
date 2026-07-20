## 2025-07-20 - WCAG 2.5.3 (Label in Name) on Dynamic Badge Counters
**Learning:** For dynamic link items like shopping carts that contain badge counters, screen readers can lose the exact count context or visible text correlation. Applying `aria-label` incorrectly can violate WCAG 2.5.3 (Label in Name) if it replaces the visible text entirely.
**Action:** Always include the complete visible text in the dynamic programmatic label (e.g., `My Cart, ${count} items`) when adding an `aria-label` to interactive links.
