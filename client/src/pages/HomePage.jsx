import { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";
import { InfoBanner, CategorySelection, SectionTitle } from "../components";
import { HeroSection, FoodItemSection, SlideShowSection, ContentSection } from "../sections";
import { API_BASE_URL } from "../config/api";

export function HomePage({ isOpenMenu, isOpenCart }) {
    const [foodItems, setFoodItems] = useState([]);
    const [isLoadingFoodItems, setIsLoadingFoodItems] = useState(true);
    const [foodItemsError, setFoodItemsError] = useState("");

    useEffect(() => {
        let isActive = true;

        async function loadFoodItems() {
            try {
                setIsLoadingFoodItems(true);
                setFoodItemsError("");

                const response = await fetch(`${API_BASE_URL}/api/food-items`);

                if (!response.ok) {
                    throw new Error("Could not load menu items.");
                }

                const data = await response.json();

                if (isActive) {
                    setFoodItems(data);
                }
            } catch (error) {
                if (isActive) {
                    setFoodItemsError(error.message || "Could not load menu items.");
                }
            } finally {
                if (isActive) {
                    setIsLoadingFoodItems(false);
                }
            }
        }

        loadFoodItems();

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <>
            <HeroSection />
            <ContentSection>
                <SectionTitle title="Order Takeout" />
                <InfoBanner />
                {isLoadingFoodItems ? (
                    <Typography variant="bodyLarge">Loading menu...</Typography>
                ) : foodItemsError ? (
                    <Typography variant="bodyLarge" sx={{ color: "error.main" }}>
                        {foodItemsError}
                    </Typography>
                ) : foodItems.length === 0 ? (
                    <Typography variant="bodyLarge">No menu items are available right now.</Typography>
                ) : (
                    <>
                        <SlideShowSection items={foodItems} />
                        <Stack sx={{
                            width: { md: "auto", xs: "100%" },
                            flexDirection: { md: "row", xs: "column" },
                        }}>
                            <CategorySelection />
                            <FoodItemSection items={foodItems} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />
                        </Stack>

                    </>
                )}
            </ContentSection>
        </>
    );
}
