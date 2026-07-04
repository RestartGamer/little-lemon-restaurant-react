import { Box, Stack, Typography } from "@mui/material"

export function CheckoutFoodList({ cartItems = [] }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <Box sx={{ width: "calc(100% - 32px)", maxWidth: 760, px: { xs: 2, md: 3 }, py: 2.5, borderRadius: 2.5,
      bgcolor: "rgba(255,248,220,.92)", border: "1px solid rgba(233,198,107,.55)", boxShadow: "0 8px 24px rgba(38,43,35,.07)" }}>
      <Stack gap={0}>
        {cartItems.map(({ id, title, price, quantity }) => (
          <Stack key={id} direction="row" sx={{ justifyContent: "space-between", alignItems: "center", gap: 2, py: 1.4, borderBottom: "1px solid rgba(188,158,76,.35)" }}>
            <Typography variant="bodyLarge" sx={{ flex: 1 }}>{title}{quantity > 1 ? ` × ${quantity}` : ""}</Typography>
            <Typography variant="bodyLarge" sx={{ fontWeight: 600 }}>${(price * quantity).toFixed(2)}</Typography>
          </Stack>
        ))}
        <Stack direction="row" sx={{ justifyContent: "space-between", pt: 2 }}>
          <Typography variant="bigCardTitle">Total</Typography>
          <Typography variant="bigCardTitle">${total.toFixed(2)}</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
