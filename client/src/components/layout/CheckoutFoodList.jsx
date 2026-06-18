import { Box, Stack, Typography } from "@mui/material"
import { HeaderExt, BackBtn } from "../../components"

export function CheckoutFoodList({ cartItems }) {
    console.log("cartItems:", cartItems ?? null)
    return (
        <Box sx={{
            width: "100%",
        }}>
            <Stack sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                bgcolor: "custom.yellowSpecial"
            }}>

                {cartItems?.map(({ id, title, price }) => {
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
                        }}>
                        <Typography>
                            {title}
                        </Typography>
                        <Typography>
                            {price}
                        </Typography>
                    </Stack>
                })}



            </Stack>
        </Box>
    )
}