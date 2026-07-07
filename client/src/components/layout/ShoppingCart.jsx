import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { CustomButton, CheckoutBtn } from "../../components"
import { convert } from "../../utils/muiConverter"
import { trashIcon } from "../../assets"


function CartFoodItem({ src, title, quantity, price, addToCart, removeFromCart, cartItem }) {
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

function TotalPrice({ cartItems }) {
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

export function ShoppingCart({ cartItems, addToCart, removeFromCart, forwardRef, setIsOpenMenu, setIsOpenCart, isOpenCart }) {
    return (
        <Box sx={{
            position: "absolute",
            top: "100%",
            right: 0,
            overflow: "clip",
            pointerEvents: isOpenCart ? "auto" : "none"
        }}>
            <Stack ref={forwardRef} sx={{

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
                alignItems: "flex-end",

                transform: isOpenCart ? "translateY(0)" : "translateY(-100%)",

                opacity: isOpenCart ? 1 : 0.5,
                pointerEvents: isOpenCart ? "auto" : "none",
                transition: "transform 300ms ease-out, opacity 300ms ease-out",



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
                                            <CartFoodItem
                                                key={id}
                                                cartItem={cartItem}
                                                addToCart={addToCart}
                                                removeFromCart={removeFromCart}
                                                src={src}
                                                title={title}
                                                price={price}
                                                quantity={quantity}
                                            />
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
                    {
                        cartItems.length > 0
                            ? <CheckoutBtn cartItems={cartItems} setIsOpenMenu={setIsOpenMenu} setIsOpenCart={setIsOpenCart} />
                            : null
                    }

                </Stack>

            </Stack>

        </Box>

    )
}