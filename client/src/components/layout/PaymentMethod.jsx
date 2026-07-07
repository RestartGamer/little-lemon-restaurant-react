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
        <Stack sx={{ width: "calc(100% - 32px)", maxWidth: "760px", mt: 3, mb: 2, alignItems: "center" }}>
            <Stack direction={{ xs: "column", sm: "row" }} sx={{ width: "100%", minHeight: 300, border: "1px solid rgba(24,62,50,.25)", borderRadius: 3, overflow: "hidden", bgcolor: "rgba(255,255,255,.97)", boxShadow: "0 8px 26px rgba(32,45,38,.08)" }}>
                <Box sx={{ width: { xs: "100%", sm: 140 }, minHeight: { xs: 70, sm: "100%" }, bgcolor: "custom.greenSpecial", display: "grid", placeItems: "center", color: "custom.deepGreen", fontSize: 42 }}>▣</Box>
                <Stack sx={{ flex: 1, p: { xs: 3, md: 4 }, alignItems: "center" }}>
                    <Typography variant="sectionTitle" sx={{ color: "custom.deepGreen" }}>Payment Method</Typography>
                    <Box sx={{ width: 170, height: 1, bgcolor: "custom.softGold", my: 1.5 }} />
                    <Stack sx={{ width: "100%", maxWidth: 390, gap: 1.2, mt: 1 }}>
                        {paymentOptions.map((paymentOption) => (
                            <Stack key={paymentOption} direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="bodyLarge">{paymentOption.replace(":", "")}</Typography>
                                <Radio checked={paymentMethod === paymentOption} onChange={() => setPaymentMethod(paymentOption)} size="small" sx={{ color: "custom.deepGreen", "&.Mui-checked": { color: "custom.deepGreen" } }} />
                            </Stack>
                        ))}
                    </Stack>
                    <Box sx={{ width: "100%", borderTop: "1px solid rgba(233,198,107,.5)", mt: 2.5, pt: 2.5, textAlign: "center" }}>
                        <Typography variant="sectionTitle">Total: ${totalPrice.toFixed(2)}</Typography>
                    </Box>
                </Stack>
            </Stack>
            <ButtonBase onClick={handleSubmitOrder} disabled={isSubmittingOrder || cartItems.length === 0} sx={{ width: "100%", mt: 3, py: 1.8, borderRadius: 2, bgcolor: "custom.yellowSpecial3", boxShadow: "0 7px 18px rgba(244,195,22,.25)", opacity: isSubmittingOrder || cartItems.length === 0 ? .55 : 1 }}>
                <Typography sx={{ mr: 1.2, fontSize: 21 }}>▢</Typography>
                <Typography variant="bigButtonTitle" sx={{ color: "custom.deepGreen" }}>{isSubmittingOrder ? "Placing order..." : "Confirm Order"}</Typography>
            </ButtonBase>
            {orderError ? <Typography variant="bodyMedium" sx={{ color: "error.main", mt: 1.5 }}>{orderError}</Typography> : null}
            {orderSuccess ? <Typography variant="bodyMedium" sx={{ color: "success.main", mt: 1.5 }}>{orderSuccess}</Typography> : null}
        </Stack>
    );
}
