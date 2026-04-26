import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"

const label = "Limited seats: "
const value = "please order 1h in advance"

export function InfoBanner() {
    return (
        <Box sx={{
            display: "inline-flex",
            justifyContent: "flex-start",
            py: convert(7),
            pl: convert(27),
        }}>
            <Typography variant="bodyLarge" sx={{
                color: "text.primary",
            }}>
                {label}
                <Box component="span" sx={{ fontWeight: 700 }}>
                    {value}
                </Box>
            </Typography>

        </Box>
    )
}