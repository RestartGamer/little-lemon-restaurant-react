import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import { convert } from "../../utils/muiConverter";
import { AddToCartBtn } from "../../components";
import { Link as RouteLink } from "react-router-dom"

const aspectRatio = 420 / 300;

function AddToCartSection({ price, item }) {
    return (
        <Box
            sx={{
                position: "absolute",
                bottom: "10%",
                right: "10%",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                mt: "auto",
                zIndex: 1,
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
    )
}


export function SlideShowItem({ items, item, id, description, descriptionLong, highlights, title, price, src }) {
    return (
        <Box sx={{
            width: "100%",
            position: "relative",
        }}>
            <ButtonBase
                className="SlideShowItem__Container"
                component={RouteLink}
                to="/details"
                state={{ items, id, src, title, description, descriptionLong, price, highlights }}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "400px",
                    aspectRatio: aspectRatio,
                    borderRadius: "11px",
                    overflow: "clip",
                    textDecoration: "none"
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
                </Stack>
            </ButtonBase>

            <AddToCartSection price={price} item={item}/>

        </Box>
    );
}