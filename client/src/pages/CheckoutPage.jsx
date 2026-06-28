import { Box, Stack, Typography } from "@mui/material"
import { BackBtn, CheckoutFoodList, SectionTitle, PaymentMethod } from "../components"
import { HighlightReelSection } from "../sections"
import { useLocation } from "react-router-dom"
import { foodItems } from "../../../server/data/foodItems"


export function CheckoutPage() {
    const { state } = useLocation();

    const cartItems = state?.cartItems ?? [];

    const highlightKeyNames = ["herbCrustedWhiteFish", "slowCookedBeefBowl"]

    let highlightList = [];

    highlightKeyNames.forEach((highlightKeyName) => {
        const foundItem = foodItems.find((foodItem) => foodItem.keyName === highlightKeyName)
        foundItem ? highlightList.push(foundItem) : null
    })

    return (
        <>
                <BackBtn />
            <SectionTitle title="Checkout" />
            <CheckoutFoodList cartItems={cartItems} />
            <HighlightReelSection items={highlightList} />
            <PaymentMethod cartItems={cartItems}/>
        </>
    )
}