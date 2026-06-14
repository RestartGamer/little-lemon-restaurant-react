import { ButtonBase, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"

export function AddToCartBtn() {
    return (
        <ButtonBase sx={{
            px: convert(18),
            py: convert(9),
            bgcolor: "rgba(0,0,0,0.80)",
            borderRadius: "4.5px",
            display:"block",
            
        }}>
            <Typography variant="cardTitle" component="span" sx={{
                color: "text.secondary",
                lineHeight: 1,
            }}>
                Add to cart
            </Typography>

        </ButtonBase>
    )
}