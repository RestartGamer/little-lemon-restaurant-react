import { Stack } from "@mui/material"
import { FoodItem } from "../components"

export function FoodItemSection({ items, isOpenMenu, isOpenCart }) {
  return (
    <Stack sx={{ flex: 1, gap: 1.4, minWidth: 0 }}>
      {items.filter(item => item.type === "foodItem").slice(0, 5).map((item) => (
        <FoodItem key={item.id} items={items} {...item} isOpenMenu={isOpenMenu} isOpenCart={isOpenCart} />
      ))}
    </Stack>
  )
}
