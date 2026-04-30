## 2025-05-15 - Accessible Navigation with Skip Links
**Learning:** Keyboard users often face "tab fatigue" when navigating sites with fixed or large headers. A "Skip to main content" link is a low-effort, high-impact accessibility win that significantly improves the experience for power users and those using assistive technologies.
**Action:** Implement a skip link as the first focusable element in the root layout for every project. Use Tailwind's `sr-only focus:not-sr-only` utility and target the main content area with a unique ID.
