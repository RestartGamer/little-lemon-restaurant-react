import { Box, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

export function BackBtn({ orientationSx = {} }) {
    return (
        <ButtonBase 
        component={RouteLink}
        to="/"
        sx={{
            position: "sticky",
            top: 0,
            left: 0,
            "--border-width": "4px",
            display: "flex",
            justifyContent: "center",
            width: "fit-content",
            height: "fit-content",
            bgcolor: "white",
            borderTop: "var(--border-width) solid",
            borderLeft: "var(--border-width) solid",
            borderColor: "black",
            px: convert(2),
            py: convert(2),
            transform: "rotate(-45deg)",
            ...orientationSx,
        }}>
            <Box sx={{
                "--size": "15px",
                width: "var(--size)",
                height: "var(--size)",
                bgcolor: "custom.yellowSpecial3",
                borderTop: "4px solid",
                borderLeft: "4px solid",
                borderColor: "custom.borderGrey",
            }} />
        </ButtonBase>
    )
}
