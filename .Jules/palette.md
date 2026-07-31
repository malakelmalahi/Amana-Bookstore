# Palette's Journal

## 2025-06-25 - Search Accessibility and Usability Polish
**Learning:** Adding screen-reader-only labels (`sr-only`) and decorative icons with `aria-hidden="true"` to search inputs dramatically improves screen reader compatibility without altering the visual hierarchy. Also, incorporating an absolute-positioned 'Clear' button inside the text input requires dynamic padding adjustments (e.g., `pr-10` vs `pr-4`) to prevent visual text overlap when a query is present. Keyboard focus states must be explicitly customized (`focus-visible:ring-2`) to ensure focus outlines do not render clipped/clumsy in complex UI environments.
**Action:** When creating or refining search inputs, wrap them in relative containers, add a matching `<label htmlFor="...">` with `sr-only`, embed a decorative leading icon (`aria-hidden="true"`), and expose a semantic `<button type="button" aria-label="Clear search">` with focus indicators and custom interactive padding.
