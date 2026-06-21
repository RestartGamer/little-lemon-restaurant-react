import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { AddToCartBtn } from "../../components"

const aspectRatio = 420 / 260

export function SlideShowItem({ item, title, price, src, children }) {
    return (
        <Stack sx={{
            position: "relative",
            "--max-width": "800px",
            "--width": "min(93vw, var(--max-width))",
            width: "var(--width)",
            maxWidth: "var(--max-width)",
            aspectRatio: aspectRatio,
            ml: "calc((100vw - var(--width)) / 2)",
        }}>
            <Stack sx={{
                position: "absolute",
                top: 0,
                left: 0,
                pl: convert(22),
                pr: convert(30),
                pt: convert(12),
                pb: convert(20),
                borderRadius: "11px",
                overflow: "clip",
                width: "100%",
                height: "100%",
            }}>
                <Box component="img" src={src} alt={`An image of a ${title}`} sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                }} />


                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: "auto",
                    marginRight: "auto",
                    zIndex: 1,
                }}>
                    <Typography variant="heroTitle" sx={(theme) => ({
                        textAlign: "start",
                        lineHeight: 1,
                        color: "text.secondary",
                        p: 0,
                        textShadow: `
                        -1px -1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        1px -1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        -1px  1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        1px  1px 0 #${theme.palette.custom.heroTitleTextBorder},
                        3px  3px 0 rgba(0, 0, 0, 0.65)
                        `,
                    })}>
                        {title}
                    </Typography>
                </Box>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "auto",
                    marginLeft: "auto",
                    zIndex: 1,
                }}>
                    <Stack sx={{
                        alignItems: "center"
                    }}>
                        <Typography variant="sectionTitle" sx={(theme) => ({
                            color: "text.secondary",
                            textShadow: `
                        3px  3px 0 rgba(0, 0, 0, 0.65)
                        `,

                        })}>
                            {price}
                        </Typography>
                        <AddToCartBtn item={item} />
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}