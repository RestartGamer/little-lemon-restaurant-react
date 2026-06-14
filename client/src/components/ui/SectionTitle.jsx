import { backBtn } from "../../assets"
import { Stack, Box, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

const imageAspect = 46 / 32;
export function SectionTitle({ title }) {

    return (
        <Box sx={{
            width: "100%",
            display:"flex",
            justifyContent:"center",
            pt: convert(20),
            pb: convert(28),
        }}>
            <Box sx={{
                display:"flex",
                justifyContent: "center",
                borderBottom: "1px solid",
                borderColor: "black",
                px: convert(42),
            }}>
                <Typography variant="headingTitle" sx={{
                    fontWeight: 500,
                    color: "text.primary",
                }}>
                    {title}
                </Typography>
            </Box>
        </Box>

    )
}