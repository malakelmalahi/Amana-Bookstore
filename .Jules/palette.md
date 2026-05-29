## 2025-05-14 - [Initial Observation]
**Learning:** The Amana Bookstore uses inconsistent "Add to Cart" patterns. BookCard and BookListItem provide non-disruptive inline feedback (loading/success states), while the BookDetailPage performs a disruptive redirect to the cart page.
**Action:** Standardize the "Add to Cart" experience by implementing inline feedback on the BookDetailPage, improving both delight and browsing continuity.
