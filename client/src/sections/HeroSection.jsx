import { Box, Stack, Typography, ButtonBase } from "@mui/material"

import { Link as RouteLink } from "react-router-dom"
import { heroImage2 } from "../assets"
import { convert } from "../utils/muiConverter"
import { CustomButton, ReserveTableBtnBlack } from "../components"

const title = "Little Lemon"
const subTitle = "Chicago"
const imageAlt = "Image of a dish"

const titleBgAspect = 316 / 134;

const reservationBtnText = "Reserve a table"





export function HeroSection() {

    return (
        <Stack
            sx={{
                width: "100%",
                justifyContent: "flex-start",
                position: "relative",
                bgcolor: "grey",
                overflow: "clip",
                maxHeight: "218px",
            }}
        >
            <Box component="img" src={heroImage2} alt={imageAlt} sx={{

                objectFit: "cover",
                transform: "scaleX(-1)",
                width: "100%",
                height: "100%",
                objectPosition: "30% 67%",


            }} />
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: 30,
            }}>
                <ReserveTableBtnBlack />
            </Box>

        </Stack>
    )
}