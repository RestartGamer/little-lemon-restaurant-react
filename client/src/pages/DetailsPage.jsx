import { Navbar, ItemDetails, CustomButton, SectionTitle, HeaderExt, BackBtn, RestaurantMenu } from "../components"
import { FoodItemSection, AddOrReserveSection } from "../sections"
import { grilledLemonChicken, slowCookedBeefBowl, herbCrustedWhiteFish, lemonVeggiePlate, greenPowerBowl } from "../assets"
import { useLocation } from "react-router-dom"
import { Stack } from "@mui/material"


const reservationBtnText = "Reserve a table"


export function DetailsPage() {
    const { state } = useLocation();
    if (!state) {
        return (
            <>
                <p>No item selected.</p>
            </>
        );
    }

    const { items, src, title, description, descriptionLong, price, highlights } = state;

    return (
        <Stack sx={{
            position: "relative",
        }}>
            <BackBtn />
            <HeaderExt />

            <ItemDetails src={src} title={title} description={description} descriptionLong={descriptionLong} price={price} highlights={highlights} />
            <AddOrReserveSection src={src} title={title} description={description} price={price} highlights={highlights} />
            <SectionTitle title="Menu" />
            <RestaurantMenu items={items} />

        </Stack>

    )
}