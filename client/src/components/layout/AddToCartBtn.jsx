import { ButtonBase, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { useCart } from "../../context/CartContext";

export function AddToCartBtn({buttonSx, typography="bigCardTitle", item}) {
    const { addToCart } = useCart();
    return (
        <ButtonBase 
        onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                addToCart(item)
            }}
            sx={{
            px: convert(18),
            py: convert(9),
            bgcolor: "rgba(0,0,0,0.80)",
            borderRadius: "4.5px",
            display: "block",
            ...buttonSx
        }}>
            <Typography variant={typography} component="span" sx={(theme) => ({
                color: "text.secondary",
                lineHeight: 1,
                fontWeight: 500,
                textShadow: `
                        -1px -1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        1px -1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        -1px  1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        1px  1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        `,

            })}>
                Add to cart
            </Typography>

        </ButtonBase >
    )
}