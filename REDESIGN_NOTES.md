# Little Lemon redesign notes

The redesign keeps the original restaurant flow while applying a consistent premium visual system across the existing React components.

## Visual system

- Cream, deep-green, lemon-yellow, soft-gold, and sage palette
- `Markazi Text` for display typography and `Karla` for interface text
- Low-opacity repeating lemon pattern behind the page
- White and cream surfaces with restrained shadows and thin gold borders
- Responsive desktop and mobile navigation

## Main areas

- Navigation and account/cart menus
- Hero and information banner
- Recommendation carousel
- Category selection and food list
- Product details and related menu
- Reservation form
- Checkout and payment section
- Footer and supporting calls to action

## Editing guide

- Brand colors and typography: `client/src/App.jsx`
- Page background pattern: `.PageFull` styles in `client/src/App.jsx`
- Shared content width: `client/src/sections/ContentSection.jsx`
- Individual card spacing, borders, and shadows: local component `sx` objects

## Verification

From the repository root, run:

```bash
npm run check
```

This executes ESLint, the API integration tests, and the production frontend build.
