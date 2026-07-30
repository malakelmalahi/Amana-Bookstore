## 2025-05-15 - [Search Input Accessibility and UX Polishing]
**Learning:** Screen reader users need explicit labels and real-time status updates on input fields, while keyboard users benefit from precise clear buttons and focus indicators.
**Action:** Always provide screen-reader-only labels (`sr-only`) for placeholder-only inputs, include a magnifying glass icon for context, add right-padding when adding an absolute 'clear' button inside inputs to prevent overlap, and avoid redundant visual helpers like `cursor-pointer` on buttons or redundant `aria-label`s on passive elements.
