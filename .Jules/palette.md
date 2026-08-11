## 2025-02-14 - Accessible Search Input Enhancements
**Learning:** Standard text inputs used for search queries benefit greatly from both visual and non-visual contextual cues. Adding a decorative magnifying glass icon provides instant visual understanding, while an `sr-only` label provides essential non-visual context for screen reader users. Additionally, when implementing a "Clear Search" button inside the input element, it must:
1. Be absolute-positioned.
2. Ensure padding-right on the input is conditionally increased to prevent text overlap.
3. Be keyboard-accessible (with `focus-visible:ring-2`).
4. Set explicit `type="button"` to avoid form submissions.
5. Restore focus to the input element when clicked so keyboard navigation flow is not disrupted.
**Action:** Apply the standard accessible search pattern combining an `sr-only` label, decorative icon, keyboard-friendly clear button, and focus resetting to all search inputs.
