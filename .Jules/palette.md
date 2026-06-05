## 2026-06-05 - Improving Site Accessibility with Skip Links
**Learning:** A fixed navbar with a high z-index can obscure the "Skip to main content" link if it doesn't have an even higher z-index (e.g., focus:z-50). Ensuring the target main element has tabIndex={-1} and id="main-content" is crucial for programmatic focus when the skip link is activated.
**Action:** Always check the z-index of fixed navigation elements when implementing skip links and ensure the target element is properly identified and focusable.
