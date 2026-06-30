import { useEffect, useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { BackBtn, CheckoutFoodList, SectionTitle, PaymentMethod } from "../components";
import { HighlightReelSection, ContentSection } from "../sections";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../config/api";

const highlightKeyNames = ["herbCrustedWhiteFish", "slowCookedBeefBowl"];

export function CheckoutPage() {
    const { state } = useLocation();
    const cartItems = state?.cartItems ?? [];
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
                    throw new Error("Could not load recommended items.");
                }

                const data = await response.json();

                if (isActive) {
                    setFoodItems(data);
                }
            } catch (error) {
                if (isActive) {
                    setFoodItemsError(error.message || "Could not load recommended items.");
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

    const highlightList = useMemo(() => {
        return highlightKeyNames
            .map((highlightKeyName) => foodItems.find((foodItem) => foodItem.keyName === highlightKeyName))
            .filter(Boolean);
    }, [foodItems]);

    return (
        <>
            <BackBtn />
            <ContentSection>
                <SectionTitle title="Checkout" />
                {cartItems.length === 0 ? (
                    <Typography variant="bodyLarge">Your cart is empty.</Typography>
                ) : (
                    <>
                        <CheckoutFoodList cartItems={cartItems} />
                        {isLoadingFoodItems ? (
                            <Typography variant="bodyLarge">Loading recommendations...</Typography>
                        ) : foodItemsError ? (
                            <Typography variant="bodyLarge" sx={{ color: "error.main" }}>
                                {foodItemsError}
                            </Typography>
                        ) : highlightList.length > 0 ? (
                            <HighlightReelSection items={highlightList} />
                        ) : null}
                        <PaymentMethod cartItems={cartItems} />
                    </>
                )}
            </ContentSection>
        </>
    );
}
