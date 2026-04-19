## 2025-05-14 - [Inline Async Feedback Pattern]
**Learning:** For actions that update local or remote state (like "Add to Cart"), providing inline visual feedback (loading spinners, success checkmarks) is superior to page redirects as it maintains the user's browsing context and reduces perceived friction.
**Action:** Prefer implementing `isAdding` and `showSuccess` states for action buttons in this app instead of using `router.push`.
