import { Box, Stack, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"

export function NavigationBtn({ orientationSx = {} }) {
    return (
        <Box sx={{
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
        </Box>
    )
}
