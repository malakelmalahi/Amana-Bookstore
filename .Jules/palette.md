## 2025-05-15 - Improving Keyboard Accessibility for Icon Buttons
**Learning:** Overriding default browser focus outlines with `focus:outline-none` on interactive elements without providing a visible alternative (like `focus-visible:ring`) creates significant accessibility barriers for keyboard users who rely on visual indicators to know which element is currently active.
**Action:** Always implement a clear, high-contrast visual focus state (e.g., using Tailwind's `focus-visible:ring-2`) when custom styling buttons or other interactive components to ensure full keyboard accessibility.
