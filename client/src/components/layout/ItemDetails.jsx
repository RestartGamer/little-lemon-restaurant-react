import { Box, Stack, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"

const imageAspect = 244 / 265;
const yellowAspect = 196 / 265;
const maxHeight = "326px";

function Highlights({ highlights }) {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            px: convert(33),
            py: convert(9),
            bgcolor: "custom.heroTitleBg",
        }}>
            <Stack direction="row"
                sx={{
                    width: "100%",
                    maxWidth: "700px",
                    justifyContent: "space-between",
                }}>
                {highlights.map((highlight) => {
                    return (
                        <Typography key={highlight} variant="bodyMedium" sx={{
                            color: "text.secondary",
                        }}>
                            {highlight}
                        </Typography>
                    )
                })}
            </Stack>
        </Box>
    )
}

export function ItemDetails({ src, title, descriptionLong, highlights }) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100vw",
            minWidth: "392px",
            maxWidth: "800px"
        }}>
            <Stack direction="row" sx={{
                width: "100%",
                position: "relative",
                justifyContent: "center",
            }}>
                <Box component="img" src={src} alt={`An image of ${title}`} sx={{
                    width: "55%",
                    maxWidth: "436px",
                    maxHeight: maxHeight,
                    aspectRatio: imageAspect,
                    objectFit: "cover",
                }} />
                <Typography variant="sectionTitle" sx={{
                    "--outline-width": "0.5px",
                    "--outline-color": "white",
                    position: "absolute",
                    left: "50%",
                    top: "5%",
                    transform: "translateX(-50%)",
                    textAlign: "end",
                    color: "text.primary",
                    lineHeight: 1.3,
                    textShadow: `
                    var(--outline-width) var(--outline-width) 0 var(--outline-color),
                    calc(var(--outline-width) * -1) var(--outline-width) 0 var(--outline-color),
                    var(--outline-width) calc(var(--outline-width) * -1) 0 var(--outline-color),
                    calc(var(--outline-width) * -1) calc(var(--outline-width) * -1) 0 var(--outline-color),
                    0 var(--outline-width) 0 var(--outline-color),
                    0 calc(var(--outline-width) * -1) 0 var(--outline-color),
                    var(--outline-width) 0 0 var(--outline-color),
                    calc(var(--outline-width) * -1) 0 0 var(--outline-color)
                    `,
                }}>
                    {title}
                </Typography>

                <Stack sx={{
                    width: "45%",
                    maxHeight: maxHeight,
                    aspectRatio: yellowAspect,
                    bgcolor: "custom.yellowSpecial2",
                    px: convert(14),
                    pt: convert(110),
                    pb: convert(15),
                    alignItems: "flex-start",
                }}>

                    <Typography variant="bodyLarge" sx={{
                        maxWidth: "200px",
                        textAlign: "start",
                        lineHeight: 1.1,
                    }}>
                        {descriptionLong}
                    </Typography>
                </Stack>
            </Stack>
            <Highlights highlights={highlights} />
        </Box>
    )
}