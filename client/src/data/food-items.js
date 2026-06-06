import {
    grilledLemonChicken,
    slowCookedBeefBowl,
    herbCrustedWhiteFish,
    lemonVeggiePlate,
    greenPowerBowl,
    greekSalad,
    springRolls,
    waterBottle
} from "../assets"


let itemId = 0;

export const foodItems = [
    {
        id: itemId++,
        type: "foodItem",
        category: "chicken",
        src: grilledLemonChicken,
        title: "Grilled Lemon Chicken",
        description: "Juicy grilled chicken with lemon, herbs, and a light garlic sauce.",
        price: 12.99,
        highlights: [
            "🌿 Gluten-free",
            "🥗 High protein",
            "🍋 Fresh & light flavor",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "beef", //cow
        src: slowCookedBeefBowl,
        title: "Slow-Cooked Beef Bowl",
        description: "Tender beef with roasted vegetables and savory house sauce.",
        price: 14.99,
        highlights: [
            "🔥 Slow-cooked for 8+ hours",
            "🥩 Rich, tender beef",
            "🍲 Comfort food classic",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "fish",
        src: herbCrustedWhiteFish,
        title: "Herb-Crusted White Fish",
        description: "Fresh white fish baked with herbs and a hint of citrus.",
        price: 17.99,
        highlights: [
            "🐟 Fresh daily catch",
            "🌿 Herb-crusted & baked",
            "🍋 Light citrus finish",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "vegan",
        src: lemonVeggiePlate,
        title: "Lemon Veggie Plate",
        description: "Roasted seasonal vegetables, chickpeas, and tahini drizzle.",
        price: 13.99,
        highlights: [
            "🌱 100% plant-based",
            "🥕 Roasted seasonal vegetables",
            "🥙 Served with tahini drizzle",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "vegan",
        src: greenPowerBowl,
        title: "Green Power Bowl",
        description: "Quinoa, mixed greens, grilled vegetables, and lemon dressing.",
        price: 13.99,
        highlights: [
            "💪 Nutrient-dense",
            "🌾 Quinoa & mixed greens",
            "🥗 Balanced & energizing",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "salad",
        src: greekSalad,
        title: "Greek Salad",
        description: "A deliciously seasoned Greek Salad",
        price: 7.99,
        highlights: [
            "💪 Nutrient-dense",
            "🌾 Lightly seasoned",
            "🥗 Balanced & energizing",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "appetizer",
        src: springRolls,
        title: "Spring Rolls",
        description: "Carefully prepared Spring Rolls",
        price: 6.99,
        highlights: [
            "💪 Nutrient-dense",
            "🌾 Crunchy",
            "🥗 Balanced & energizing",
        ],
    },
    {
        id: itemId++,
        type: "foodItem",
        category: "beverage",
        src: waterBottle,
        title: "Water 500ml",
        description: "",
        price: 3.99,
        highlights: [
            "Refreshing",
        ],
    },
];