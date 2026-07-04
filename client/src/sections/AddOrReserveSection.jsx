import { Stack } from "@mui/material"
import { AddToCartBtn, ReserveTableBtnWhite } from "../components"

export function AddOrReserveSection({ id, src, title, description, price, highlights }) {
  const item = { id, src, title, description, price, highlights }
  return (
    <Stack direction={{ xs: "column", sm: "row" }} sx={{ width: "calc(100% - 32px)", maxWidth: 820, gap: 2, mt: 3, mb: 1 }}>
      <AddToCartBtn item={item} typography="bigButtonTitle" buttonSx={{ flex: 1, py: 2, width: "100%" }} />
      <ReserveTableBtnWhite />
    </Stack>
  )
}
