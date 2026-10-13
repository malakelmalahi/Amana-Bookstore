## 2025-05-18 - Avoid Nested Buttons inside Next.js Link Components
**Learning:** Nesting a `<button>` inside a Next.js `<Link>` component generates invalid HTML (`<a><button>...</button></a>`), causes React hydration warnings, and confuses screen readers by creating duplicate or conflicting interactive target announcements in the accessibility tree.
**Action:** Style the Next.js `<Link>` component directly with button utility classes rather than wrapping a `<button>` element inside it.
