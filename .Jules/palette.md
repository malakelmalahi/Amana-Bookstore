## 2025-07-07 - Enhanced Search Input
**Learning:** Adding absolute-positioned icons and buttons within a text input requires careful management of internal padding (e.g., `pl-10`, `pr-10`) to prevent text overlap, while also ensuring accessibility with `sr-only` labels and `aria-label` for icon buttons.
**Action:** Always use conditional padding on inputs when buttons (like "Clear") appear dynamically, and never rely solely on placeholders for input labeling.
