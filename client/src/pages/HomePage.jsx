import { Stack } from "@mui/material"
import { Navbar, InfoBanner, CategorySelection, SectionTitle } from "../components"
import { HeroSection, FoodItemSection, SlideShowSection, ContentSection } from "../sections"

import { foodItems } from "../../../server/data/foodItems.js"
import { convert } from "../utils/muiConverter.js"
import { alpha } from "@mui/material/styles"


export function HomePage({ isOpenMenu, isOpenCart }) {

    return (
        <>
            <HeroSection />
            <ContentSection>
                <SectionTitle title="Order Takeout" />


                <InfoBanner />
                <SlideShowSection />
                <CategorySelection />
                <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />

            </ContentSection>

        </>
    )
}