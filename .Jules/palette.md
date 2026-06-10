## 2025-06-10 - Skip Link Focus Management
**Learning:** Implementing a "Skip to main content" link requires more than just an anchor tag; the target element (usually `<main>`) must have `tabIndex={-1}` to become programmatically focusable. Without this, some browsers may not move the actual keyboard focus point, causing the next "Tab" press to jump back to the top of the page instead of into the main content.
**Action:** When adding skip links, always ensure the target container has a unique `id`, `tabIndex={-1}`, and `outline-none` to provide a seamless transition for keyboard users.
