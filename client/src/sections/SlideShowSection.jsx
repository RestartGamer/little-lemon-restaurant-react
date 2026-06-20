import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { SlideShowItem } from "../components"
import { foodItems } from "../../../server/data/foodItems"


export function SlideShowSection() {
    return (
        <Box sx={{
            width: "100%",
            overflow: "clip",
        }}>
            <Box sx={{
                overflowX: "auto"
            }}>
                <Stack direction="row" sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "fit-content",
                    height: "fit-content",
                }}>
                    {foodItems.map(({ id, title, price, src }) => {
                        return (
                            <SlideShowItem key={id} title={title} price={price} src={src}>
                                <ButtonBase>
                                    <Typography>
                                        Add to cart
                                    </Typography>
                                </ButtonBase>
                            </SlideShowItem>
                        )
                    })}
                </Stack>
            </Box>

        </Box>
    )
}