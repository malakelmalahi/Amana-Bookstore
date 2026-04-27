## 2025-05-14 - Consistent Cart Feedback Pattern
**Learning:** Asynchronous inline feedback (loading and success states) is the preferred standard for cart actions in this app to avoid disruptive page redirects and maintain browsing context.
**Action:** Always implement `isAddingToCart` and `showSuccess` states for cart-related actions instead of using `router.push('/cart')` for a smoother user experience.
