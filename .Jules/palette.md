## 2025-05-15 - [Search Input UX Enhancement]
**Learning:** For inputs with internal action buttons (like a "Clear" button), conditional padding is essential to prevent text overlap. Additionally, search inputs relying on placeholders must have a screen-reader-only label for WCAG 3.3.2 compliance.
**Action:** Always wrap decorated inputs in a relative container and apply dynamic padding-right when internal action buttons are visible. Include an `sr-only` label for every input.
