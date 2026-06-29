import { Stack } from "@mui/material"
import { Navbar, InfoBanner, CategorySelection, SectionTitle } from "../components"
import { HeroSection, FoodItemSection, SlideShowSection } from "../sections"

import { foodItems } from "../../../server/data/foodItems.js"
import { convert } from "../utils/muiConverter.js"
import { alpha } from "@mui/material/styles"


export function HomePage({ isOpenMenu, isOpenCart }) {

    return (
        <>
            <HeroSection />
            <Stack sx={{
                width:"80%",
                alignItems: "center",
                justifyContent: "flex-start",
                bgcolor: "background.default",
                borderRight: "1px solid",
                borderLeft: "1px solid",
                borderColor: "black",
            }}>
                <SectionTitle title="Order Takeout" />


                <InfoBanner />
                <SlideShowSection />
                <CategorySelection />
                <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />

            </Stack>

        </>
    )
}