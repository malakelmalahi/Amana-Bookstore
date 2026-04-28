# Palette's Journal - Critical UX Learnings

## 2025-05-15 - Skip to main content accessibility pattern
**Learning:** For keyboard and screen-reader users, navigating through a long list of header/nav links on every page is tedious. A "Skip to main content" link at the very top of the DOM is a standard and vital accessibility feature.
**Action:** Always implement a "Skip to main content" link in the root layout, hidden by default (`sr-only`) but visible on focus (`focus:not-sr-only`), targeting the main content container via an ID.
