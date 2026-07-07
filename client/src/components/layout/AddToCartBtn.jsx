import { ButtonBase, Typography } from "@mui/material"
import { useCart } from "../../context/CartContext"

export function AddToCartBtn({ buttonSx = {}, typography = "bodyLarge", item }) {
  const { addToCart } = useCart()
  return (
    <ButtonBase onClick={(event) => { event.preventDefault(); event.stopPropagation(); addToCart(item) }} sx={{
      px: 2.2, py: 1.05, bgcolor: "custom.deepGreen", borderRadius: 1.5, boxShadow: "0 4px 10px rgba(24,62,50,.18)",
      color: "white", transition: "all .2s ease", "&:hover": { bgcolor: "#245345", transform: "translateY(-1px)" }, ...buttonSx
    }}>
      <Typography variant={typography} component="span" sx={{ color: "white", lineHeight: 1, fontWeight: 600 }}>Add to cart</Typography>
    </ButtonBase>
  )
}
