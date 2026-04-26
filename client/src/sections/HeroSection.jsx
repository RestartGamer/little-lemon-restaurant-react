import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { heroImage } from "../assets"
import { convert } from "../utils/muiConverter"
import {BigButton} from "../components"

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



export function HeroSection() {

    return (
        <Stack
            sx={{
                width:"100%",
                justifyContent: "flex-start",
                position: "relative",
                bgcolor: "grey",
                overflow: "clip",
            }}
        >
            <Box component="img" src={heroImage} alt={imageAlt} sx={{
                width:"max-content",
                maxHeight: "218px",


            }} />
            <TitleBlock />
            <BigButton text={reservationBtnText}/>

        </Stack>
    )
}