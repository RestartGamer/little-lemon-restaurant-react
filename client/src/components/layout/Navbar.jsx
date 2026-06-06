import { useState, useEffect, useRef } from "react"
import { Box, Stack, ButtonBase, Typography } from "@mui/material"
import { CustomButton } from "../../components"
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

function CartFoodItem({ id, src, title, quantity, price, addToCart, removeFromCart, cartItem }) {
    return (
        <Stack direction="row" sx={{
            justifyContent: "flex-end",
            width: "100%",
            gap: convert(12),

        }}>
            <Box component="img" src={src} alt={`Image of ${title}`} sx={{
                height: "89px",
                width: "89px",
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
                    <Stack sx={{
                        "--button-size": "7px",
                        alignItems: "center",
                    }}>
                        <ButtonBase onClick={(event) => {
                            event.stopPropagation();
                            addToCart(cartItem)
                        }} sx={{
                            height: "var(--button-size)",
                            width: "var(--button-size)",
                            borderStyle: "solid",
                            borderWidth: "1px 0 0 1px",
                            borderColor: "black",
                            transform: "rotate(45deg)",
                        }} />

                        <Typography variant="cardTitle" sx={{
                            color: "text.primary",
                            textAlign: "left",
                        }}>
                            {quantity}
                        </Typography>

                        <ButtonBase onClick={(event) => {
                            event.stopPropagation();
                            removeFromCart(cartItem)
                        }} sx={{
                            height: "var(--button-size)",
                            width: "var(--button-size)",
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
                    ${price}
                </Typography>
            </Stack>
            <ButtonBase onClick={(event) => {
                event.stopPropagation();
                removeFromCart(cartItem, cartItem.quantity)
            }
            } sx={{
                width: "fit-content",
                height: "fit-content",
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box component="img" src={trashIcon} alt="Image of trash icon" sx={{
                    height: "40px",
                    aspectRatio: "1 / 1",
                    marginLeft: "auto",

                }} />
            </ButtonBase>
        </Stack>
    )
}

function TotalPrice({ cartItems }) { //inherited from the shopping cart
    return (
        <Stack sx={{
            "--line-width": "90%",
            width: "100%",
            alignItems: "center",
        }}>
            <Box sx={{
                width: "var(--line-width)",
                borderBottom: "1px solid",
                borderColor: "black",
            }} />
            <Typography>
                Total price: ${
                    cartItems != null
                        ? (
                            cartItems.reduce((total, cartItem) => {
                                return total + cartItem.price * cartItem.quantity
                            }, 0).toFixed(2)
                        ) : (
                            0
                        )
                }
            </Typography>
            <Box sx={{
                width: "var(--line-width)",
                borderBottom: "1px solid",
                borderColor: "black",
            }} />
        </Stack>
    )
}

function ShoppingCart({ cartItems, addToCart, removeFromCart, forwardRef }) {
    return (
        <Stack ref={forwardRef} sx={{
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
            alignItems: "flex-end"
        }}>
            <Stack sx={{  //item mask
                overflow: "hidden",
                width: "fit-content",
                height: "fit-content",
                maxHeight: "300px",
                mb: convert(30),
                borderBottom: cartItems && cartItems.length > 0 ? "0.5px solid" : "0px solid",
                borderColor: "black",
            }}>
                <Stack sx={{
                    overflow: "auto",
                    width: "fit-content",
                    height: "fit-content",
                    gap: convert(20),
                }}> {/*full item container*/}


                    {
                        cartItems && cartItems.length > 0
                            ? (
                                cartItems.map((cartItem) => {
                                    const { id, src, title, price, quantity } = cartItem
                                    return (
                                        <CartFoodItem key={id} cartItem={cartItem} addToCart={addToCart} removeFromCart={removeFromCart} id={id} src={src} title={title} price={price} quantity={quantity} />
                                    )
                                })
                            )
                            : (
                                <>Shopping cart is empty</>
                            )
                    }
                </Stack>
            </Stack>

            <Stack sx={{
                width: "100%",
                gap: convert(20),
                alignSelf: "center",
            }}>
                <TotalPrice cartItems={cartItems} />

                <CustomButton textVariant="bodyLarge" buttonSx={{
                    alignSelf: "center",
                    bgcolor: "custom.backgroundSpecial",
                    border: "1px solid",
                    borderColor: "black",
                    px: convert(14),
                    py: convert(5),
                }}
                    textSx={{
                        fontWeight: 500,
                    }}>
                    Go to checkout
                </CustomButton>
            </Stack>

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

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    useEffect(() => {
        function offClickHandler(e) {
            if (!hamButtonRef.current?.contains(e.target) &&
                !cartButtonRef.current?.contains(e.target) &&
                !hamDropdownRef.current?.contains(e.target) &&
                !cartDropdownRef.current?.contains(e.target)) {
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
                        <ShoppingCart forwardRef={cartDropdownRef} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
                    )
                }
            </Stack>

        </>
    )
}