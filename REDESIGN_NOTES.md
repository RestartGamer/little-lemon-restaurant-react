# Little Lemon redesign notes

The redesign keeps the existing React routes, data loading, cart context, authentication context, order submission, reservation form validation, and component exports intact. The work is concentrated in the MUI theme and the existing visual components.

## Shared visual system

- `client/src/App.jsx` defines the cream, deep-green, lemon-yellow, soft-gold, and sage palette.
- `Markazi Text` remains the display serif; `Karla` remains the interface/body font.
- The page-wide lemon pattern is a low-opacity fixed pseudo-element on `.PageFull`.
- Cards use white/cream surfaces, thin gold borders, restrained shadows, and rounded corners.

## Main components changed

- Navigation: `Navbar.jsx`, `BackBtn.jsx`, `InfoBanner.jsx`
- Shared page structure: `ContentSection.jsx`, `SectionTitle.jsx`, `BottomInfo.jsx`, `Footer.jsx`
- Home: `HeroSection.jsx`, `SlideShowSection.jsx`, `SlideShowItem.jsx`, `CategorySelection.jsx`, `FoodItemSection.jsx`, `FoodItem.jsx`
- Food detail: `ItemDetails.jsx`, `AddOrReserveSection.jsx`, `MenuBook.jsx`
- Checkout: `CheckoutFoodList.jsx`, `HighlightReelSection.jsx`, `PaymentMethod.jsx`, `CheckoutPage.jsx`
- Reservation: `ReservationPage.jsx`
- Shared CTAs: `AddToCartBtn.jsx`, `ReserveTableBtnGreen.jsx`, `ReserveTableBtnWhite.jsx`, `ReserveTableBtnYellow.jsx`

## Editing guide

- Change brand colors in `themeSettings.palette.custom` inside `client/src/App.jsx`.
- Change page pattern scale/opacity in the `.PageFull &::before` block in `App.jsx`.
- Change desktop content width in `ContentSection.jsx`.
- Change card spacing/radius/shadows in the individual components; the values are deliberately local so each visual block is easy to study.
- Existing image imports and API image URLs were retained.

## Verification

`npm run build` completes successfully in `client/`.
