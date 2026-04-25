import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../utils/muiConverter"
import { grilledLemonChicken, slowCookedBeefBowl, herbCrustedWhiteFish, lemonVeggiePlate, greenPowerBowl } from "../assets"
import { FoodItem } from "../components"

let itemId = 0;
const items = [
    {
        id: itemId++,
        type: "foodItem",
        src: grilledLemonChicken,
        title: "Grilled Lemon Chicken",
        description: "Juicy grilled chicken with lemon, herbs, and a light garlic sauce.",
        price: "$12.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: slowCookedBeefBowl,
        title: "Slow-Cooked Beef Bowl",
        description: "Tender beef with roasted vegetables and savory house sauce.",
        price: "$14.99"
    },
    {
        id: itemId++,
        type: "promoItem",
        title: "Chicken Wings 50% Discount",
    },
    {
        id: itemId++,
        type: "foodItem",
        src: herbCrustedWhiteFish,
        title: "Herb-Crusted White Fish",
        description: "Fresh white fish baked with herbs and a hint of citrus.",
        price: "$17.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: lemonVeggiePlate,
        title: "Lemon Veggie Plate",
        description: "Roasted seasonal vegetables, chickpeas, and tahini drizzle.",
        price: "$13.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: greenPowerBowl,
        title: "Green Power Bowl",
        description: "Quinoa, mixed greens, grilled vegetables, and lemon dressing.",
        price: "$13.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: grilledLemonChicken,
        title: "Grilled Lemon Chicken",
        description: "Juicy grilled chicken with lemon, herbs, and a light garlic sauce.",
        price: "$12.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: slowCookedBeefBowl,
        title: "Slow-Cooked Beef Bowl",
        description: "Tender beef with roasted vegetables and savory house sauce.",
        price: "$14.99"
    },
    {
        id: itemId++,
        type: "promoItem",
        title: "Chicken Wings 50% Discount",
    },
    {
        id: itemId++,
        type: "foodItem",
        src: herbCrustedWhiteFish,
        title: "Herb-Crusted White Fish",
        description: "Fresh white fish baked with herbs and a hint of citrus.",
        price: "$17.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: lemonVeggiePlate,
        title: "Lemon Veggie Plate",
        description: "Roasted seasonal vegetables, chickpeas, and tahini drizzle.",
        price: "$13.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: greenPowerBowl,
        title: "Green Power Bowl",
        description: "Quinoa, mixed greens, grilled vegetables, and lemon dressing.",
        price: "$13.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: grilledLemonChicken,
        title: "Grilled Lemon Chicken",
        description: "Juicy grilled chicken with lemon, herbs, and a light garlic sauce.",
        price: "$12.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: slowCookedBeefBowl,
        title: "Slow-Cooked Beef Bowl",
        description: "Tender beef with roasted vegetables and savory house sauce.",
        price: "$14.99"
    },
    {
        id: itemId++,
        type: "promoItem",
        title: "Chicken Wings 50% Discount",
    },
    {
        id: itemId++,
        type: "foodItem",
        src: herbCrustedWhiteFish,
        title: "Herb-Crusted White Fish",
        description: "Fresh white fish baked with herbs and a hint of citrus.",
        price: "$17.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: lemonVeggiePlate,
        title: "Lemon Veggie Plate",
        description: "Roasted seasonal vegetables, chickpeas, and tahini drizzle.",
        price: "$13.99"
    },
    {
        id: itemId++,
        type: "foodItem",
        src: greenPowerBowl,
        title: "Green Power Bowl",
        description: "Quinoa, mixed greens, grilled vegetables, and lemon dressing.",
        price: "$13.99"
    },
];



export function FoodItemSection() {
    return (
        <Stack sx={{
            justifyContent: "space-between",
            gap: convert(7),
            pt: convert(15),
        }}>
            {
                items.map(({ id, type, src, title, description, price }) => {
                    return (
                        type === "foodItem" ? (
                            <FoodItem key={id} src={src} title={title} description={description} price={price} />
                        ) : 
                        type === "promoItem" && (
                            <Box sx={{
                                width: "100%",
                                bgcolor: "custom.backgroundSpecial",
                                border: "4px solid",
                                borderColor: "custom.borderSpecial",
                                py: convert(12)
                            }}>
                                <Typography variant="cardTitle" sx={{
                                    color: "text.primary",
                                    fontWeight: 700,
                                }}>
                                    {title}
                                </Typography>

                            </Box>
                        )

                    )

                })
            }
        </Stack>
    )

}