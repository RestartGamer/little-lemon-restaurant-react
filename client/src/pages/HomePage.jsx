import { Navbar, InfoBanner, SelectionMenu, SectionTitle } from "../components"
import { HeroSection, FoodItemSection, SlideShowSection } from "../sections"

import { foodItems } from "../../../server/data/foodItems.js"


export function HomePage({isOpenMenu, isOpenCart}) {
    

    return (
        <>
            <HeroSection />
            <SectionTitle title="Order Takeout"/>
            <InfoBanner />
            <SlideShowSection />
            <SelectionMenu />
            <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />
        </>
    )
}