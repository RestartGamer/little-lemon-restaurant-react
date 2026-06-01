import { useState, useEffect } from "react"
import { Box, Stack, ButtonBase, Typography } from "@mui/material"
import { logo, hamBtnIcon, infoIcon, cartIcon } from "../../assets"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"
import { trashIcon } from "../../assets"
import { foodItems } from "../../data/food-items"
import { useCart } from "../../context/CartContext";



const iconHeight = "57px"
let iconId = 0;
const icons = [
    { id: iconId++, type: "button", action: "menu", src: hamBtnIcon, height: "37px", sx: {} },
    { id: iconId++, type: "link", src: logo, height: "57px", sx: { aspectRatio: "1 / 1" } },
    { id: iconId++, type: "button", action: "cart", src: cartIcon, height: "50px", sx: { aspectRatio: "1 / 1" } },
]

let optionId = 0;
const dropdownOptionsMenu = [
    { id: optionId++, name: "Homepage", route: "/" },
    { id: optionId++, name: "About us", route: "/" },
    { id: optionId++, name: "Reserve a table", route: "/reservation" },
]

function DropDown({ orientation, dropdownOptions }) {
    return (
        <Stack sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "absolute",
            top: "100%",
            ...(orientation === "left" && { left: 0, alignItems: "flex-start" }),
            ...(orientation === "right" && { right: 0, alignItems: "flex-end" }),
            px: convert(30),
            py: convert(30),
            bgcolor: "background.paper",
            gap: convert(10),
            borderTop: "0.5px solid",
            borderLeft: "2px solid",
            borderRight: "2px solid",
            borderBottom: "2px solid",
            borderColor: "custom.borderNormal",
        }}>
            {dropdownOptions.map(({ id, name, route }) => {
                return (
                    <ButtonBase key={id} component={RouteLink} to={route}
                        sx={{
                            bgcolor: "background.paper",
                            px: convert(7),
                            py: convert(5),
                            border: "1px solid",
                            borderColor: "custom.borderNormal",
                            borderRadius: "6px"
                        }}>
                        {name}
                    </ButtonBase>
                )
            })}

        </Stack>
    )
}

function CartFoodItem({ id, src, title, quantity, price }) {
    return (
        <Stack direction="row" sx={{
            justifyContent: "flex-end",
            width: "100%",
            gap: convert(12),

        }}>
            <Box component="img" src={src} alt={`Image of ${title}`} sx={{
                height: "76px",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "5px",
                border: "0.5px solid",
                borderColor: "black",
            }} />
            <Stack sx={{
                width: "max-content",
                maxWidth: "280px",
                marginRight: "auto",
            }}>
                <Typography variant="cardTitle" sx={{
                    color: "text.primary",
                    textAlign: "left",
                }}>
                    {title}
                </Typography>
                <Stack direction="row" sx={{
                    alignItems: "center",
                    gap: convert(2),
                }}>
                    <Typography variant="bodyLarge" sx={{
                        color: "text.primary",
                        textAlign: "left",
                    }}>
                        Qty:
                    </Typography>
                    <Stack>
                        <Box sx={{
                            height: "6px",
                            aspectRatio: "1 / 1",
                            borderStyle: "solid",
                            borderWidth: "1px 0 0 1px",
                            borderColor: "black",
                            transform: "rotate(45deg)",
                        }} />
                        <Typography variant="bodyLarge" sx={{
                            color: "text.primary",
                            textAlign: "left",
                        }}>
                            {quantity}
                        </Typography>
                        <Box sx={{
                            height: "6px",
                            aspectRatio: "1 / 1",
                            borderStyle: "solid",
                            borderWidth: "0 1px 1px 0",
                            borderColor: "black",
                            transform: "rotate(45deg)"
                        }} />
                    </Stack>
                </Stack>
                <Typography sx={{
                    color: "text.primary",
                    textAlign: "left",
                }}>
                    {price}
                </Typography>
            </Stack>
            <Box component="img" src={trashIcon} alt="Image of trash icon" sx={{
                height: "40px",
                aspectRatio: "1 / 1",
                marginLeft: "auto"
            }} />
        </Stack>
    )
}

function ShoppingCart({ cartItems }) {
    return (
        <Stack spacing={convert(18)} sx={{
            position: "absolute",
            top: "100%",
            right: 0,
            bgcolor: "custom.backgroundSecondary",
            width: "fit-content",
            maxWidth: "100%",
            height: "fit-content",
            borderStyle: "solid",
            borderWidth: "0.5px 1px 1px 1px",
            borderColor: "black",
            borderRadius: "0px 0px 0px 26px",
            px: convert(30),
            py: convert(29),
            alignItems: "flex-start"
        }}>
            {cartItems.map(({ id, src, title, price, quantity }) => {
                return (
                    <CartFoodItem key={id} id={id} src={src} title={title} price={price} quantity={quantity} />
                )
            })}
        </Stack>
    )
}




export function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const buttonActions = {
        cart: () => setIsOpenCart(prev => !prev),
        menu: () => setIsOpenMenu(prev => !prev),
    }
    const { cartItems } = useCart()
    useEffect(()=> {
        console.log(cartItems);
    }, [cartItems])

    return (
        <>
            <Stack component="nav" direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    bgcolor: "background.paper",
                    px: convert(20),
                    py: convert(19),
                    zIndex: 9999,
                    borderBottom: "1px solid",
                    borderColor: "black",

                }}>
                {icons.map(({ id, type, action, src, height, sx, onClick }) => {
                    return (
                        type === "button" ? (
                            <ButtonBase onClick={buttonActions[action]}>
                                <Box component="img" key={id} src={src} height={height} sx={{ ...sx }} />
                            </ButtonBase>
                        ) : type === "link" && (
                            <Box component="RouteLink">
                                <Box component="img" key={id} src={src} height={height} sx={{ ...sx }} />
                            </Box>
                        )
                    )
                })}
                {
                    isOpenMenu && (
                        <DropDown orientation="left" dropdownOptions={dropdownOptionsMenu} />
                    )
                }

                {
                    isOpenCart && (
                        <ShoppingCart cartItems={cartItems}/>
                    )
                }
            </Stack>

        </>
    )
}