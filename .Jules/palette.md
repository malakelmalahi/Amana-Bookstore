# Palette's UX Journal

Critical UX/accessibility learnings for the Amana Bookstore project.

format:
## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]

## 2025-05-14 - Implementing Skip Links with Tailwind CSS
**Learning:** A "Skip to main content" link is essential for keyboard navigation. Using Tailwind's `sr-only` for initial state and `focus:not-sr-only` combined with absolute/fixed positioning and high z-index ensures the link is hidden for sighted users until it's actually needed. Pairing this with `tabIndex={-1}` and `outline-none` on the target container ensures reliable focus management without unwanted visual rings for mouse users.
**Action:** Always include a skip-to-content link as the first element in the root layout, targeting the main content container with a descriptive ID like `#main-content`.

## 2025-05-14 - Accessible Cart Status in Navigation
**Learning:** For navigation items that contain dynamic status (like a cart count badge), using a descriptive `aria-label` on the parent link that includes both the destination and the current state (e.g., "Shopping cart, 3 items") provides better context than just labeling the badge. Applying `aria-hidden="true"` to the visual badge prevents redundant announcements.
**Action:** Use template literals to provide dynamic, pluralization-aware ARIA labels for status-bearing navigation elements.
