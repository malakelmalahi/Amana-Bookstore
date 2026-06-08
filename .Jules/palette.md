## 2025-06-08 - [Keyboard Accessibility: Skip Link Implementation]
 **Learning:** [Focus management for skip links requires setting `tabIndex={-1}` on the target `<main>` element to allow programmatic focus and ensure sequential keyboard navigation starts from the top of the content area.]
 **Action:** [Always include a skip link as the first focusable element in `layout.tsx` and ensure the target element is uniquely identified and focusable.]
