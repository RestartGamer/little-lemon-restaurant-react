import { Navbar, InfoBanner, SelectionMenu } from "../components"
import { HeroSection, FoodItemSection } from "../sections"

import {foodItems} from "../data/food-items.js"


export function HomePage() {
    return (
        <>
            
            <HeroSection />
            <InfoBanner />
            <SelectionMenu />
            <FoodItemSection items={foodItems} />
        </>
    )
}