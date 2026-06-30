import { Box, ButtonBase, Stack, Typography, Radio } from "@mui/material";
import { convert } from "../../utils/muiConverter";
import { useState } from "react";
import { API_BASE_URL, getAuthHeaders } from "../../config/api";
import { useCart } from "../../context";

const paymentOptions = ["Mastercard/Debit:", "Sepa:", "Paypal:"];

export function PaymentMethod({ cartItems = [] }) {
    const [paymentMethod, setPaymentMethod] = useState(paymentOptions[0]);
    const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
    const [orderError, setOrderError] = useState("");
    const [orderSuccess, setOrderSuccess] = useState("");
    const { clearCart } = useCart();

    const totalPrice = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0);

    async function handleSubmitOrder() {
        if (cartItems.length === 0) {
            setOrderError("Your cart is empty.");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            setOrderError("Please log in before placing your order.");
            return;
        }

        try {
            setIsSubmittingOrder(true);
            setOrderError("");
            setOrderSuccess("");

            const response = await fetch(`${API_BASE_URL}/api/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...getAuthHeaders(),
                },
                body: JSON.stringify({
                    items: cartItems,
                    totalPrice: Number(totalPrice.toFixed(2)),
                    paymentMethod,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Could not place order.");
            }

            clearCart();
            setOrderSuccess(`Order #${data.order.id} placed successfully.`);
        } catch (error) {
            setOrderError(error.message || "Could not place order.");
        } finally {
            setIsSubmittingOrder(false);
        }
    }

    return (
        <Box sx={{
            width: "100%",
            minHeight: "331px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: convert(10),
        }}>
            <Stack direction="row" sx={{
                width: "100%",
                maxWidth: "370px",
                minHeight: "331px",
                justifyContent: "space-between",
                border: "1px solid",
                borderColor: "custom.borderGrey1",
                borderRadius: "9px"
            }}>
                <Box sx={{
                    flex: "0 0 76px",
                    minHeight: "100%",
                    bgcolor: "custom.greenSpecial",
                }} />
                <Box sx={{
                    width: "100%",
                    maxWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: convert(8),
                }}>
                    <Stack sx={{
                        width: "55%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: convert(5),
                    }}>
                        <Typography variant="bigCardTitle"
                            sx={{
                                fontWeight: 600,
                                textDecoration: "underline",
                                overflowWrap: "break-word",
                            }}>
                            Payment Method
                        </Typography>
                        <Stack sx={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: convert(6),
                        }}>
                            {paymentOptions.map((paymentOption) => {
                                return (
                                    <Stack key={paymentOption} direction="row" sx={{
                                        width: "100%",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}>
                                        <Typography>
                                            {paymentOption}
                                        </Typography>
                                        <Radio
                                            checked={paymentMethod === paymentOption}
                                            onChange={() => setPaymentMethod(paymentOption)}
                                            icon={
                                                <Box
                                                    sx={{
                                                        width: "var(--size)",
                                                        height: "var(--size)",
                                                        borderRadius: "50%",
                                                        bgcolor: "custom.borderGrey",
                                                        border: "1px solid",
                                                        borderColor: "text.primary",
                                                        boxSizing: "border-box",
                                                    }}
                                                />
                                            }
                                            checkedIcon={
                                                <Box
                                                    sx={{
                                                        width: "var(--size)",
                                                        height: "var(--size)",
                                                        borderRadius: "50%",
                                                        bgcolor: "custom.borderGrey1",
                                                        border: "1px solid",
                                                        borderColor: "text.primary",
                                                        boxSizing: "border-box",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: "7px",
                                                            height: "7px",
                                                            borderRadius: "50%",
                                                            bgcolor: "custom.greenSpecial",
                                                        }}
                                                    />
                                                </Box>
                                            }
                                            sx={{
                                                "--size": "15px",
                                                p: 0,

                                                "&.Mui-disabled": {
                                                    opacity: 0.4,
                                                },
                                            }}
                                        />
                                    </Stack>
                                );
                            })}

                            <Typography variant="cardTitle" sx={{
                                fontWeight: 600,
                                overflowWrap: "break-word",
                            }}>
                                Total: ${totalPrice.toFixed(2)}
                            </Typography>

                            <ButtonBase
                                onClick={handleSubmitOrder}
                                disabled={isSubmittingOrder || cartItems.length === 0}
                                sx={{
                                    px: convert(6),
                                    py: convert(3),
                                    bgcolor: "custom.greenSpecial",
                                    borderRadius: "4px",
                                    opacity: isSubmittingOrder || cartItems.length === 0 ? 0.5 : 1,
                                }}
                            >
                                <Typography variant="bodyLarge">
                                    {isSubmittingOrder ? "Placing order..." : "Place order"}
                                </Typography>
                            </ButtonBase>

                            {orderError ? (
                                <Typography variant="bodyMedium" sx={{ color: "error.main", textAlign: "center" }}>
                                    {orderError}
                                </Typography>
                            ) : null}

                            {orderSuccess ? (
                                <Typography variant="bodyMedium" sx={{ color: "success.main", textAlign: "center" }}>
                                    {orderSuccess}
                                </Typography>
                            ) : null}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
