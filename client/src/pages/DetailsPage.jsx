import { Navbar, ItemDetails, CustomButton, SectionTitle, HeaderExt, BackBtn } from "../components"
import { FoodItemSection, AddOrReserveSection } from "../sections"
import { grilledLemonChicken, slowCookedBeefBowl, herbCrustedWhiteFish, lemonVeggiePlate, greenPowerBowl } from "../assets"
import { useLocation } from "react-router-dom"


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

    const { src, title, description, descriptionLong, price, highlights } = state;

    return (
        <>
            <HeaderExt>
                <BackBtn orientationSx={{
                    transform: "rotate(-45deg)",
                }} />
            </HeaderExt>
            <ItemDetails src={src} title={title} description={description} descriptionLong={descriptionLong} price={price} highlights={highlights} />
            <AddOrReserveSection />
            <SectionTitle title="Menu"/>

        </>
    )
}