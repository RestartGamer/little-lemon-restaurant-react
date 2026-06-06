import { Navbar, InfoBanner, SelectionMenu } from "../components"
import { HeroSection, FoodItemSection } from "../sections"

import { foodItems } from "../data/food-items.js"


export function HomePage({isOpenMenu, isOpenCart}) {
    

    return (
        <>
            <HeroSection />
            <InfoBanner />
            <SelectionMenu />
            <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />
        </>
    )
}