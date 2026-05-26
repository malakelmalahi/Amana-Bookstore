## 2025-05-14 - Accessible Navigation with Dynamic Badges

**Learning:** When a navigation link contains a dynamic badge (like a cart count), providing a descriptive `aria-label` that includes both the visible text and the badge value ensures screen reader users have full context. It also satisfies WCAG 2.5.3 (Label in Name) by ensuring the visible text "My Cart" is part of the accessible name.

**Action:** Always wrap navigation links that have badges or icons with a comprehensive `aria-label` and mark the decorative badge/icon as `aria-hidden="true"` to prevent redundant announcements.
