import { foodItems } from "../data/foodItems.js";

export function getFoodItems(req, res) {
  res.json(foodItems);
}

export function getFoodItemById(req, res) {
  const id = Number(req.params.id);
  const foodItem = foodItems.find((item) => item.id === id);

  if (!foodItem) {
    return res.status(404).json({ message: "Food item not found" });
  }

  res.json(foodItem);
}
