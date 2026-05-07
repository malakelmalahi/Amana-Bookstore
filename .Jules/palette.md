## 2025-05-14 - Inline Cart Feedback
**Learning:** Asynchronous inline feedback (loading and success states) is the preferred standard for cart actions in this app to avoid disruptive page redirects and maintain browsing context.
**Action:** Always implement `isAddingToCart` and `showSuccess` states for cart interactions instead of immediate redirects.
