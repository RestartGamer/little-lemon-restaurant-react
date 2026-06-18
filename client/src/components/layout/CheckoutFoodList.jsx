import { Box, Stack, Typography } from "@mui/material"
import { HeaderExt, BackBtn } from "../../components"
import { convert } from "../../utils/muiConverter"


const textStyle = {
    variant:"bodyLarge",
    sx:{
        color: "text.primary"
    }
}

export function CheckoutFoodList({ cartItems }) {
    console.log("cartItems:", cartItems ?? null)
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
        }}>
            <Stack sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                bgcolor: "custom.yellowSpecial",
                width: "100%",
                px: convert(45),
                py: convert(28),
                gap: convert(6),
            }}>

                {cartItems?.map(({ id, title, price, quantity }) => {
                    return (
                        <Stack
                            key={id}
                            direction="row"
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "1px solid",
                                borderColor: "black",
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                width: "100%",
                                borderRadius: "9px",
                                px: convert(6),
                                py: convert(4),
                                bgcolor: "background.default",
                            }}>
                            <Typography {...textStyle}>
                                {title}
                            </Typography>
                            <Typography {...textStyle}>
                                Qt: {quantity} x {price}
                            </Typography>
                            <Typography {...textStyle} sx={{
                                fontWeight: 500,
                            }}>
                                total: {price * quantity}
                            </Typography>
                        </Stack>
                    )
                })}



            </Stack>
        </Box>
    )
}