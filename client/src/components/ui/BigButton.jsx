import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"


export function BigButton({ to = "/", text, position = { left: "50%", transform: "translateX(-50%)", bottom: "0%"}}) {
    return (
        <ButtonBase component={RouteLink}
            to={to}
            sx={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",

                mb: convert(15),
                px: convert(16),
                py: convert(11),


                border: "1px solid",
                borderColor: "custom.bugButtonBorder",
                borderRadius: "4.54px",
                bgcolor: "custom.bigButtonBg",
                ...position,
            }}>
            <Typography variant="bigButtonTitle" sx={{
                color: "text.secondary",
            }}>
                {text}
            </Typography>

        </ButtonBase>
    )
}