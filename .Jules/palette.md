# Palette's UX Journal

This journal contains critical UX and accessibility learnings discovered during the development of Amana Bookstore.

## 2026-06-06 - Focus Management for Skip Links
**Learning:** Adding a "Skip to main content" link requires not just the link itself but also proper focus management on the target element. Setting `tabIndex={-1}` on the `<main>` element allows it to receive programmatic focus when the skip link is clicked, ensuring that subsequent Tab presses start from the beginning of the main content rather than staying in the navigation. Using `outline-none` on the target prevents a redundant visual outline when the skip link is used.
**Action:** Always pair skip links with a target that has `id="[target-id]"` and `tabIndex={-1}`.
