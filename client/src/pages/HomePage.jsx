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
            <SectionTitle title="Order Takeout" />
            <Stack sx={(theme) => ({
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",

                bgcolor: "background.default",

                pt: convert(40),
                pb: convert(70),

                borderColor: "black",
            })}>
                <InfoBanner />
                <SlideShowSection />
            </Stack>


            <CategorySelection />
            <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />
        </>
    )
}