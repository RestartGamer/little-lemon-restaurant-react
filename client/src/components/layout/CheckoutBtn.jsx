import { ButtonBase, Box, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"


export function CheckoutBtn({ cartItems = [], setIsOpenMenu, setIsOpenCart }) {

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ButtonBase
                component={RouteLink}
                to="/checkout"
                state={{cartItems}}
                onClick={()=> {
                    setIsOpenMenu(false);
                    setIsOpenCart(false);
                }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: convert(14),
                    py: convert(5),
                    bgcolor: "custom.greenSpecial",
                }}>
                <Typography variant="bodyLarge" sx={{
                    color: "text.primary",
                    textAlign: "center",
                }}>
                    Go to checkout
                </Typography>
            </ButtonBase>
        </Box >
    )
}