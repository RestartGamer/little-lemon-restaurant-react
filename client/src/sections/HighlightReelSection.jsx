import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../utils/muiConverter"
import { FoodItem } from "../components"


export function HighlightReelSection({ items, isOpenMenu, isOpenCart }) {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "fit-content",
        }}>
            <Box sx={{
                width: "100%",
                overflow: "clip",
            }}>
                <Box sx={{
                    width: "100%",
                    overflow: "auto",
                }}>
                    <Stack direction="row" sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                        {
                            items.map(({ id, type, src, title, description, descriptionLong, price, highlights = [] }) => {
                                return (
                                    type === "foodItem" ? (
                                        <Box key={id} sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                            flex: "0 0 100vw"
                                        }}>
                                            <FoodItem
                                                
                                                isOpenMenu={isOpenMenu}
                                                isOpenCart={isOpenCart}
                                                id={id} src={src}
                                                items={items}
                                                title={title}
                                                description={description}
                                                descriptionLong={descriptionLong}
                                                price={price}
                                                highlights={highlights} />
                                        </Box>
                                    ) :
                                        type === "promoItem" && (
                                            <Box sx={{
                                                width: "100%",
                                                bgcolor: "custom.backgroundSpecial",
                                                border: "4px solid",
                                                borderColor: "custom.borderSpecial",
                                                py: convert(12)
                                            }}>
                                                <Typography variant="cardTitle" sx={{
                                                    color: "text.primary",
                                                    fontWeight: 700,
                                                }}>
                                                    {title}
                                                </Typography>

                                            </Box>
                                        )

                                )

                            })
                        }
                    </Stack>
                </Box>
            </Box>
        </Box>
    )

}