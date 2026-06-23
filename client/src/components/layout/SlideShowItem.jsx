import { Box, Stack, Typography } from "@mui/material";
import { convert } from "../../utils/muiConverter";
import { AddToCartBtn } from "../../components";

const aspectRatio = 420 / 300;

export function SlideShowItem({ item, title, price, src }) {
    return (
        <Stack
            className="SlideShowItem__Container"
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: aspectRatio,
                borderRadius: "11px",
                overflow: "clip",
                //outline: "2px solid blue",
            }}
        >
            <Box
                component="img"
                src={src}
                alt={`An image of a ${title}`}
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                }}
            />

            <Stack
                className="SlideShowItem__Content"
                sx={{
                    position: "relative",
                    zIndex: 2,

                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",

                    pl: convert(22),
                    pr: convert(30),
                    pt: convert(12),
                    pb: convert(20),
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        mb: "auto",
                    }}
                >
                    <Typography
                        variant="heroTitle"
                        sx={(theme) => ({
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
                        })}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "auto",
                    }}
                >
                    <Stack
                        sx={{
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="sectionTitle"
                            sx={{
                                color: "text.secondary",
                                textShadow: "3px 3px 0 rgba(0, 0, 0, 0.65)",
                            }}
                        >
                            {price}
                        </Typography>

                        <AddToCartBtn item={item} />

                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
}