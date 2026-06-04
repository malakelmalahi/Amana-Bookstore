## 2025-05-14 - Inline Cart Feedback
**Learning:** Replacing immediate page redirection with inline asynchronous feedback (loading and success states) significantly improves the user's browsing flow and reduces friction. Using `aria-live="polite"` ensures that these visual state changes are correctly communicated to screen reader users.
**Action:** Always prefer inline feedback for secondary actions (like 'Add to Cart') to maintain context, and use appropriate ARIA attributes for status updates.
