import { Box, Stack, Typography } from "@mui/material"
import { heroImage } from "../assets"
import { convert } from "../utils/muiConverter"

const title = "Little Lemon"
const subTitle = "Chicago"
const imageAlt = "Image of a dish"

export function HeroSection() {

    return (
        <Stack
            sx={{ justifyContent: "flex-start" }}
        >
            <Box component="img" src={heroImage} alt={imageAlt} sx={{
                width: "100%",
                maxHeight: "500px",

            }} />
            <Stack
                sx={{
                    position: "absolute",
                    bgcolor: "custom.heroTitleBg",
                    opacity: 0.88,
                    borderRadius: "0 0 130px 0",
                    display:"flex",
                    flexDirection: "column",
                    textAlign:"start",
                    pt: convert(11),
                    pl: convert(14),
                    pr: convert(35),
                    pb: convert(26)
                }}>
                <Typography variant="heroTitle" sx={{
                    color:"custom.textSpecial"
                }}>{title}</Typography>
                <Typography variant="sectionTitle" sx={{
                    color:"text.secondary"
                }}>{subTitle}</Typography>
            </Stack>
        </Stack>
    )
}