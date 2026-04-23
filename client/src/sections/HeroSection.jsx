import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { heroImage } from "../assets"
import { convert } from "../utils/muiConverter"

const title = "Little Lemon"
const subTitle = "Chicago"
const imageAlt = "Image of a dish"

const titleBgAspect = 316 / 134;

const reservationBtnText = "Reserve a table"

function TitleBlock() {
    return (
        <Stack
            sx={{
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.custom.heroTitleBg, 0.88),
                borderRadius: "0 0 130px 0",
                textAlign: "start",
                minWidth: "316px",
                minHeight: "134px",
                maxWidth: "350px",
                width: "59.77%",
                aspectRatio: titleBgAspect,

                pt: convert(11),
                pl: convert(14),
                pr: convert(35),
                pb: convert(26),
            }}>
            <Typography variant="heroTitle" sx={{
                color: "custom.textSpecial",
                lineHeight: "100%"
            }}>{title}</Typography>
            <Typography variant="sectionTitle" sx={{
                color: "text.secondary"
            }}>{subTitle}</Typography>
        </Stack>
    )
}

function ReservationBtn() {
    return (
        <ButtonBase component="RouteLink"
            sx={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                right: 0,
                mr: convert(18),
                mb: convert(22),
                px: convert(9),
                py: convert(6),

                border: "1px solid",
                borderColor: "custom.borderSpecial2",
                borderRadius: "4.54px",
                bgcolor: "custom.heroTitleBg"
            }}>
            <Typography variant="cardTitle" sx={{
                color: "text.secondary",
            }}>
                {reservationBtnText}
            </Typography>

        </ButtonBase>
    )
}



export function HeroSection() {

    return (
        <Stack
            sx={{
                justifyContent: "flex-start",
                position: "relative",
            }}
        >
            <Box component="img" src={heroImage} alt={imageAlt} sx={{
                width: "100%",
                maxHeight: "500px",


            }} />
            <TitleBlock />
            <ReservationBtn />

        </Stack>
    )
}