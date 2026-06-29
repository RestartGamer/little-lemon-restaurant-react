import { backBtn } from "../../assets"
import { Stack, Box, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"
import { TitleBGPencilGreen } from "../../assets"

const imageAspect = 46 / 32;
export function SectionTitle({ title }) {

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pt: convert(20),
            pb: convert(28),
        }}>
            <Box sx={{
                bgcolor: "background.default",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                /*borderTop: "1px solid",
                borderBottom: "1px solid",
                borderColor: "black",*/
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "1px solid",
                    borderColor: "black",
                    px: convert(42),
                    /*backgroundImage: `url(${TitleBGPencilGreen})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "300px",
                    backgroundPositionX: "43%",
                    backgroundPositionY: "10%",*/
                    width: "fit-content",


                }}>
                    <Typography variant="headingTitle" sx={{
                        fontWeight: 500,
                        color: "text.primary",
                    }}>
                        {title}
                    </Typography>
                </Box>
            </Box >

        </Box>


    )
}
