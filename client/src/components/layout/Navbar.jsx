import { useState, useEffect, useRef } from "react"
import { Box, Stack, ButtonBase, Typography, FormControl, InputLabel, TextField, FormHelperText } from "@mui/material"
import { CustomButton, ShoppingCart, LoginWindow, MainMenu } from "../../components"
import { logoNew, hamBtnIcon, infoIcon, cartIcon } from "../../assets"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";


const iconHeight = "57px"
let iconId = 0;
const icons = [
    { id: iconId++, type: "button", action: "menu", src: hamBtnIcon, height: "24px", sx: {} },
    { id: iconId++, type: "link", src: logoNew, height: "75px", sx: {  } },
    { id: iconId++, type: "button", action: "cart", src: cartIcon, height: "35px", sx: { aspectRatio: "1 / 1" } },
]

export function Navbar({ isOpenMenu, setIsOpenMenu, isOpenCart, setIsOpenCart }) {

    const buttonActions = {
        cart: () => {
            setIsOpenCart(prev => !prev)
            setIsOpenMenu(false)
        },
        menu: () => {
            setIsOpenMenu(prev => !prev)
            setIsOpenCart(false)
        },
    }
    const { cartItems, addToCart, removeFromCart } = useCart()

    const hamButtonRef = useRef(null)
    const cartButtonRef = useRef(null)
    const hamDropdownRef = useRef(null)
    const cartDropdownRef = useRef(null)
    const loginWindowRef = useRef(null)

    const { loginUser, logoutUser, registerUser, checkAuth, isAuthenticated } = useAuth();


    useEffect(() => {
        function offClickHandler(e) {
            if (!hamButtonRef.current?.contains(e.target) &&
                !cartButtonRef.current?.contains(e.target) &&
                !hamDropdownRef.current?.contains(e.target) &&
                !cartDropdownRef.current?.contains(e.target) &&
                !loginWindowRef.current?.contains(e.target)) {
                setIsOpenMenu(false);
                setIsOpenCart(false);
            }
        }

        document.addEventListener("click", offClickHandler);

        return () => (
            document.removeEventListener("click", offClickHandler)
        )
    }, [])

    return (
        <>
            <Stack component="nav" direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "fit-content",
                    bgcolor: "background.paper",
                    px: convert(20),
                    py: convert(1),
                    zIndex: 900,
                    borderBottom: "0.5px solid",
                    borderColor: "black",

                }}>
                {icons.map(({ id, type, action, src, height, sx, onClick }) => {
                    return (
                        type === "button" ? (
                            <ButtonBase ref={action === "menu" ? hamButtonRef : action === "cart" ? cartButtonRef : null} onClick={buttonActions[action]}>
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
                        <MainMenu
                            forwardRef={hamDropdownRef}
                            orientation="left"
                            logoutUser={logoutUser}
                            setIsOpenMenu={setIsOpenMenu}
                            setIsOpenCart={setIsOpenCart} />
                    )
                }

                {
                    isOpenCart && (
                        isAuthenticated
                            ? <ShoppingCart 
                            forwardRef={cartDropdownRef} 
                            cartItems={cartItems} 
                            addToCart={addToCart} 
                            removeFromCart={removeFromCart}
                            setIsOpenMenu={setIsOpenMenu}
                            setIsOpenCart={setIsOpenCart} />
                            : <LoginWindow loginWindowRef={loginWindowRef} />

                    )
                }
            </Stack>

        </>
    )
}