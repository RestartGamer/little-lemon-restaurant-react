import { Box, Stack, Typography, Radio } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { useState } from "react"

const paymentOptions = ["Mastercard/Debit:", "Sepa:", "Paypal:"]

export function PaymentMethod({ cartItems }) {
    const [paymentMethod, setPaymentMethod] = useState("mastercard");


    const totalPrice = (cartItems ?? []).reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0);

    return (
        <Box sx={{
            width: "100%",
            height: "331px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: convert(10),
        }}>
            <Stack direction="row" sx={{
                width: "100%",
                maxWidth: "370px",
                height: "100%",
                justifyContent: "space-between",
                border: "1px solid",
                borderColor: "custom.borderGrey1",
                borderRadius: "9px"
            }}>
                <Box sx={{
                    flex: "0 0 76px",
                    height: "100%",
                    bgcolor: "custom.greenSpecial",
                }} />
                <Box sx={{
                    width: "100%",
                    maxWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
                                )
                            })}

                            <Typography variant="cardTitle" sx={{
                                fontWeight: 600,
                                overflowWrap: "break-word",
                            }}>
                                Total: {totalPrice}
                            </Typography>
                        </Stack>

                    </Stack>
                </Box>

            </Stack>

        </Box>
    )

}