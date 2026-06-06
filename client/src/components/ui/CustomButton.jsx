import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"


export function CustomButton({ children, onClick = undefined, to = "/", text, buttonSx = {}, textVariant = "bodyLarge", textSx = {} }) {
    return (
        <ButtonBase onClick={onClick}
            sx={{
                border: "1px solid",
                borderColor: "custom.borderNormal",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
                px: convert(5),
                py: convert(2),
                lineHeight: 1,
                ...buttonSx,
            }}>
            <Typography variant={textVariant} sx={{
                fontWeight: 500,
                color: "text.primary",
                ...textSx,
            }}>
                {children}
            </Typography>
        </ButtonBase>

    )
}