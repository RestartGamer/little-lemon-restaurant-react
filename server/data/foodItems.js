const imageBaseUrl =
  process.env.IMAGE_BASE_URL || "http://localhost:5000/images";

export const foodItems = [
  {
    id: 0,
    keyName: "grilledLemonChicken",
    type: "foodItem",

    category: {
      value: "meat",
      name: "Meats",
      icon: "◆",
    },

    src: `${imageBaseUrl}/grilledLemonChicken.jpg`,
    title: "Grilled Lemon Chicken",
    description:
      "Juicy grilled chicken with lemon, herbs, and a light garlic sauce.",
    descriptionLong:
      "A flavorful grilled chicken dish prepared with lemon, herbs, and a gentle garlic sauce. The chicken is tender and juicy, with a fresh citrus finish that pairs perfectly with the light Mediterranean seasoning.",
    price: 12.99,
    highlights: [
      "🌿 Gluten-free",
      "🥗 High protein",
      "🍋 Fresh & light flavor",
    ],
  },
  {
    id: 1,
    keyName: "slowCookedBeefBowl",
    type: "foodItem",

    category: {
      value: "meat",
      name: "Meats",
      icon: "◆",
    },

    src: `${imageBaseUrl}/slowCookedBeefBowl.jpg`,
    title: "Slow-Cooked Beef Bowl",
    description:
      "Tender beef with roasted vegetables and savory house sauce.",
    descriptionLong:
      "A hearty slow-cooked beef bowl prepared with tender beef, roasted vegetables, and a rich house sauce. The beef is cooked until soft and flavorful, creating a warm, savory dish with deep comfort-food character.",
    price: 14.99,
    highlights: [
      "🔥 Slow-cooked for 8+ hours",
      "🥩 Rich, tender beef",
      "🍲 Comfort food classic",
    ],
  },
  {
    id: 2,
    keyName: "herbCrustedWhiteFish",
    type: "foodItem",

    category: {
      value: "fish",
      name: "Fish",
      icon: "◍",
    },

    src: `${imageBaseUrl}/herbCrustedWhiteFish.jpg`,
    title: "Herb-Crusted White Fish",
    description:
      "Fresh white fish baked with herbs and a hint of citrus.",
    descriptionLong:
      "A delicate white fish fillet baked with a crisp herb crust and finished with a light citrus touch. The dish is fresh, clean, and aromatic, with tender fish balanced by bright herbs and a gentle Mediterranean flavor.",
    price: 17.99,
    highlights: [
      "🐟 Fresh daily catch",
      "🌿 Herb-crusted & baked",
      "🍋 Light citrus finish",
    ],
  },
  {
    id: 3,
    keyName: "lemonVeggiePlate",
    type: "foodItem",

    category: {
      value: "vegan",
      name: "Vegan",
      icon: "◒",
    },

    src: `${imageBaseUrl}/lemonVeggiePlate.jpg`,
    title: "Lemon Veggie Plate",
    description:
      "Roasted seasonal vegetables, chickpeas, and tahini drizzle.",
    descriptionLong:
      "A colorful plant-based plate made with roasted seasonal vegetables, chickpeas, and a smooth tahini drizzle. The vegetables are lightly seasoned and paired with lemon for a fresh, satisfying dish with warm and earthy flavors.",
    price: 13.99,
    highlights: [
      "🌱 100% plant-based",
      "🥕 Roasted seasonal vegetables",
      "🥙 Served with tahini drizzle",
    ],
  },
  {
    id: 4,
    keyName: "greenPowerBowl",
    type: "foodItem",

    category: {
      value: "meat",
      name: "Meats",
      icon: "◆",
    },

    src: `${imageBaseUrl}/greenPowerBowl.jpg`,
    title: "Green Power Bowl",
    description:
      "Quinoa, mixed greens, grilled vegetables, and lemon dressing.",
    descriptionLong:
      "A balanced green bowl prepared with quinoa, mixed greens, grilled vegetables, and a light lemon dressing. It is fresh, nourishing, and energizing, combining soft grains, crisp greens, and bright citrus flavor in every bite.",
    price: 13.99,
    highlights: [
      "💪 Nutrient-dense",
      "🌾 Quinoa & mixed greens",
      "🥗 Balanced & energizing",
    ],
  },
  {
    id: 5,
    keyName: "greekSalad",
    type: "foodItem",

    category: {
      value: "meat",
      name: "Meats",
      icon: "◆",
    },

    src: `${imageBaseUrl}/greekSalad.jpg`,
    title: "Greek Salad",
    description: "A deliciously seasoned Greek Salad",
    descriptionLong:
      "A refreshing Greek salad made with crisp vegetables, Mediterranean seasoning, and a light, balanced finish. It is simple, fresh, and colorful, offering a clean side dish or light meal with classic Greek-inspired flavor.",
    price: 7.99,
    highlights: [
      "💪 Nutrient-dense",
      "🌾 Lightly seasoned",
      "🥗 Balanced & energizing",
    ],
  },
  {
    id: 6,
    keyName: "springRolls",
    type: "foodItem",

    category: {
      value: "meat",
      name: "Meats",
      icon: "◆",
    },

    src: `${imageBaseUrl}/springRolls.jpg`,
    title: "Spring Rolls",
    description: "Carefully prepared Spring Rolls",
    descriptionLong:
      "Crispy spring rolls carefully prepared with a light filling and a crunchy golden exterior. They are easy to share, satisfying as a starter, and bring a pleasant contrast of crisp texture and fresh, savory flavor.",
    price: 6.99,
    highlights: [
      "💪 Nutrient-dense",
      "🌾 Crunchy",
      "🥗 Balanced & energizing",
    ],
  },
  {
    id: 7,
    keyName: "water500ml",
    type: "foodItem",

    category: {
      value: "drink",
      name: "Drinks",
      icon: "▯",
    },

    src: `${imageBaseUrl}/waterBottle.jpg`,
    title: "Water 500ml",
    description: "",
    descriptionLong:
      "A refreshing 500ml bottle of water, ideal for pairing with any meal. Simple, clean, and hydrating, it is a practical choice when you want something light and neutral alongside your food.",
    price: 3.99,
    highlights: ["Refreshing"],
  },
];