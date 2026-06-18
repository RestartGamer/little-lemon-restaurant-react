import { Box, Stack, Typography } from "@mui/material"
import { HeaderExt, BackBtn, CheckoutFoodList, SectionTitle } from "../components"
import { useLocation } from "react-router-dom"

export function CheckoutPage() {
    const { state } = useLocation();
    const { cartItems } = state;
    return (
        <>
            <HeaderExt>
                <BackBtn />
            </HeaderExt>
            <SectionTitle title="Checkout" />
            <CheckoutFoodList cartItems={cartItems} />
        </>
    )
}