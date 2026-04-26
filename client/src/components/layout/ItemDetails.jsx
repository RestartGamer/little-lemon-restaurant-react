import { Box, Typography, Stack } from "@mui/material"
import { convert } from "../../utils/muiConverter"

function ItemDescription({ description }) {

    return (
        <Typography component="p" variant="cardTitle" sx={{
            fontWeight: 400,
            color: "text.primary",
            textAlign: "start",
        }}>
            {description}
        </Typography>
    )
}

function Divider({ width = "80%", sx={} }) {

    return (
        <Box sx={{
            width: width,
            height: "fit-content",
            display: "inline-flex",
            ...sx,
        }}>
            <Box
                component="hr"
                sx={{
                    width: "100%",
                    maxWidth: "1080px",
                    maxHeight:"2px",
                    border: "none",
                    borderBottom: "1px solid",
                    borderColor: "custom.borderNormal",
                    
                }} />
        </Box>
    )
}

function PriceBox({ price }) {

    return (
        <Box sx={{
            display: "inline-flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
            <Typography component="span" variant="cardTitle" sx={{
                color: "text.primary",
                fontWeight: 600,
            }}>
                {price}
            </Typography>
        </Box>
    )
}

function HighlightBox({ highlights }) {

    return (
        <Stack 
        sx={{
            width: "100%",
            maxWidth: "300px",
            justifyContent: "start",
            alignItems: "start",
            bgcolor: "custom.heroTitleBg",
            border: "2px solid",
            borderColor: "custom.borderSpecial2",
            px: convert(9),
            py: convert(3),
        }}>
            {highlights.map(highlight => {
                return (
                    <Typography component="span" variant="bodyMedium" sx={{
                        color: "text.secondary",
                        textAlign: "start",
                    }}>
                        {highlight}
                    </Typography>
                )
            })

            }
        </Stack>

    )
}


export function ItemDetails({ src, title, description, price, highlights }) {

    return (
        <Stack sx={{
            justifyContent: "start",
            alignItems: "center",
            pt: convert(20),
            pb: convert(10),
            gap: convert(20)
        }}>


            <Stack direction="row" sx={{
                width: "100%",
                height: "max-content",
                minHeight: "180px",
                justifyContent: "space-between",
                alignItems: "center",
                px: convert(18),
                
            }}>

                <Box component="img" src={src} alt={`An image of ${title}`} sx={{
                    minWidth: "186px",
                    width: "34%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                }} />

                <Stack sx={{
                    minWidth: "199px",
                    maxWidth: "40%",
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "end",
                }}>


                    <ItemDescription description={description} />
                    <Divider width="80%" sx={{
                        py: convert(8)
                    }}/>
                    <PriceBox price={price} />
                    <HighlightBox highlights={highlights} />


                </Stack>

            </Stack>
            <Divider width="80%" />
        </Stack>
    )
}