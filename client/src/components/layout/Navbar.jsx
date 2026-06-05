import { useState, useEffect, useRef } from "react"
import { Box, Stack, ButtonBase, Typography, FormControl, InputLabel, TextField, FormHelperText } from "@mui/material"
import { CustomButton, ShoppingCart, LoginWindow } from "../../components"
import { logo, hamBtnIcon, infoIcon, cartIcon } from "../../assets"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "../../../../shared/config/schema"




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

function DropDown({ orientation, dropdownOptions, forwardRef }) {
    return (
        <Stack ref={forwardRef} sx={{
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

    const { login, logout, register: registerUser, checkAuth, isAuthenticated } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            name: "dummy",
            email: "dummy@dummy.com",
            password: "dummypass",
        },
    });

    async function handleLogin(data) {
        await login(data.email, data.password);
    }

    async function handleRegister(data) {
        await registerUser(data.name, data.email, data.password);
    }


    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

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
                        <DropDown forwardRef={hamDropdownRef} orientation="left" dropdownOptions={dropdownOptionsMenu} />
                    )
                }

                {
                    isOpenCart && (
                        isAuthenticated
                            ? <ShoppingCart forwardRef={cartDropdownRef} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
                            : <LoginWindow loginWindowRef={loginWindowRef} login={login} register={register} />

                    )
                }
            </Stack>

        </>
    )
}