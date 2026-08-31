## 2025-08-31 - Avoid Nested Interactive Elements in Next.js Link Components
**Learning:** Nesting interactive `<button>` elements inside Next.js `<Link>` components (which render `<a>` tags) produces invalid HTML, creates redundant keyboard stops, and confuses screen readers.
**Action:** Style the `<Link>` directly as a button-like element with `focus-visible` ring utilities rather than wrapping an inner `<button>`.
