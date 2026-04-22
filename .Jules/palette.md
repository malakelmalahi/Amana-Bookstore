## 2025-10-27 - [Accessibility Foundation and Semantic Fixes]
**Learning:** Found a common anti-pattern where `<button>` elements were nested inside `<Link>` components, causing invalid HTML and poor screen reader experience. Also identified a lack of "Skip to content" link and visible focus indicators, which are fundamental for keyboard accessibility in this app's layout.
**Action:** Always verify semantic HTML structure (no nested interactive elements) and ensure foundational accessibility (skip links, focus rings) are present when starting a UX audit.
