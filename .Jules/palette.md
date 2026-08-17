## 2025-08-17 - Accessible Search Inputs with In-Input Clear Controls
**Learning:** Search inputs relying solely on placeholder text lack screen reader labeling, and search inputs with absolute-positioned clear buttons require dynamic right-padding (`pr-10`) to prevent typed text from rendering under the clear button.
**Action:** Always provide an `<label className="sr-only">` linked via `htmlFor`, and dynamically toggle right padding when a clear button is rendered.
