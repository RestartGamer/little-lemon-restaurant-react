import { Box, Stack, Typography } from "@mui/material"
import { heroImage } from "../assets"
import { convert } from "../utils/muiConverter"

const title="Little Lemon"
const subTitle="Chicago"

export function HeroSection(){

    return (
        <Stack justifyContent="flex-start">
            <Typography variant="heroTitle" color="custom.textSpecial"></Typography>
            <Typography variant="sectionTitle" color="text.secondary"></Typography>
        </Stack>
    )
}