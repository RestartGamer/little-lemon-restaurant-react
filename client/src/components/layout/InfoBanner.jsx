import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"

const label = "Est. delivery time: "
const value = "20 minutes"

export function InfoBanner() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            bgcolor: "custom.yellowSpecial",
            mb: convert(14),
        }}>


            <Box sx={{
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
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
        </Box>
    )
}