import { Stack } from "@mui/material";
import { FoodItem } from "../components";

export function FoodItemSection({
  items,
  selectedCategory,
  isOpenMenu,
  isOpenCart,
}) {
  const visibleItems = items.filter(
    (item) =>
      item.type === "foodItem" &&
      item.category.value === selectedCategory
  );

  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1.4,
        minWidth: 0,
        minHeight: "500px"
      }}
    >
      {visibleItems.map((item) => (
        <FoodItem
          key={item.id}
          items={items}
          {...item}
          isOpenMenu={isOpenMenu}
          isOpenCart={isOpenCart}
        />
      ))}
    </Stack>
  );
}
