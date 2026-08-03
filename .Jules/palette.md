# Palette's Journal - Critical Learnings

## 2025-08-03 - [Accessible Search Inputs with Clear Action]
**Learning:** Adding a "Clear search" icon-button inside a text input improves accessibility and user delight, but it requires wrapping with proper interactive characteristics. A decorative start icon should use `aria-hidden="true"` so screen readers bypass it, while the clear button must feature an explicit `aria-label`, have keyboard-accessible focus states, and the input itself must have conditional right padding (`pr-10` vs `pr-4`) to ensure typed text never overlaps with the action button.
**Action:** When creating or refining search boxes in Tailwind projects, implement screen-reader-only labels (`sr-only`), set `type="button"` on the clear action, style it with focus-visible indicators, and apply conditional right padding on the `<input>` element.
