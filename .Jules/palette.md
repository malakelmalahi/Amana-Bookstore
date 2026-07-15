## 2025-05-14 - The "Clear Search" Utility Pattern
**Learning:** In applications with long, filterable lists, providing a quick way to reset the search state significantly reduces interaction cost. For screen reader users, an explicit clear button is more discoverable than manually deleting the search string.
**Action:** Always include a decorative or functional "Clear" button in search inputs that contain state, ensuring it has a descriptive ARIA label and doesn't overlap with user text via conditional padding.
