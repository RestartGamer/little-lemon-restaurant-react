import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { SlideShowItem } from "../components"
import { foodItems } from "../../../server/data/foodItems"
import { convert } from "../utils/muiConverter"


export function SlideShowSection() {
    return (
        <Box className="SlideShowSection__Container SlideShowSection__Clipper" sx={{
            width: "100%",
            overflow: "clip",
            "--precalculated-width": { md: "500px", xs: "400px" },
            "--item-width": { md: "500px", xs: "400px" },
            marginInline: "var(--lateral-margin)",
            display: "flex",
            justifyContent: "center",
        }}>
            <Box className="SlideShowSection__Content SlideShowSection__Scroller" sx={{
                overflowX: "auto",
                width: "fit-content",
            }}>
                <Stack className="SlideShowSection__ScrollContent" direction="row" sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "fit-content",
                    height: "fit-content",
                    gap: "calc((100vw - var(--lateral-margin)) - var(--item-width))"
                }}>
                    {foodItems.map((foodItem) => {
                        const { id, title, price, src } = foodItem;

                        return (
                            <SlideShowItem
                                key={id}
                                item={foodItem}
                                title={title}
                                price={price}
                                src={src}
                            >
                                <ButtonBase>
                                    <Typography>
                                        Add to cart
                                    </Typography>
                                </ButtonBase>
                            </SlideShowItem>
                        );
                    })}
                </Stack>
            </Box>

        </Box>
    )
}