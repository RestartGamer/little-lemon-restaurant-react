import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"

const imageAspect = 113 / 73;

function TitleBox({ title, description }) {
    return (
        <Stack sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "42%",
            maxWidth: "1080px",

        }}>
            <Typography variant="cardTitle" sx={{
                color: "text.primary",
                textAlign: "start",
            }}>
                {title}
            </Typography>
            <Typography variant="bodyLarge" sx={{
                color: "text.primary",
                textAlign: "start",
            }}>
                {description}
            </Typography>
        </Stack>
    )
}

function DetailsBox({ price }) {
    return (
        <Stack sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: convert(9),
        }}>
            <Typography variant="bodyLarge" sx={{
                color: "text.primary",
                
            }}>
                {price}
            </Typography>
            <Box sx={{
                border: "1px solid",
                borderColor: "custom.borderNormal",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography variant="bodyLarge" sx={{
                    fontWeight: 600,
                    color: "text.primary",
                }}>
                    More Details
                </Typography>
            </Box>
        </Stack>
    )
}

export function FoodItem({ id, src, title, description, price }) {

    return (
        <Stack direction="row" sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: convert(10),
            py: convert(5),
        }}>
            <Box component="img" src={src} alt={`An image of ${title}`} sx={{
                minWidth: "113px",
                maxWidth: "120px",
                width: "25.68%",
                aspectRatio: imageAspect,
                objectFit: "cover",
            }}/>
            <TitleBox title={title} description={description} />
            <DetailsBox price={price} />
        </Stack>
    )
}