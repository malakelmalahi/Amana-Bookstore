## 2026-04-18 - [Accessibility Foundations]
**Learning:** For a bookstore application where keyboard navigation is a likely use case (e.g., users tabbing through a large grid of books), a 'Skip to main content' link is essential but often overlooked in initial development. Additionally, quantity adjusters in carts are often represented by '+' and '-' which are ambiguous to screen readers.
**Action:** Always verify the existence of a skip-to-content link in the root layout. Ensure all arithmetic/icon-only buttons in the cart have descriptive `aria-label` attributes.
