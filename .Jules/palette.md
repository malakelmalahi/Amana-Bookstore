## 2025-05-14 - Skip to Main Content Link
**Learning:** Keyboard accessibility is often overlooked in SPA navigation. A skip link is essential for bypassing repetitive navigation menus, especially in fixed-header layouts. Focus management is critical; the target element needs `tabIndex={-1}` to reliably receive focus programmatically.
**Action:** Always include a skip link as the first focusable element in `layout.tsx` and ensure it targets a `<main>` element with a corresponding ID and `tabIndex={-1}`.
