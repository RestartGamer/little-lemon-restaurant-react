import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../utils/muiConverter"
import { FoodItem } from "../components"



export function FoodItemSection({ items }) {
    return (
        <Stack sx={{
            justifyContent: "space-between",
            gap: convert(7),
            pt: convert(15),
        }}>
            {
                items.map(({ id, type, src, title, description, price, highlights = [] }) => {
                    return (
                        type === "foodItem" ? (
                            <FoodItem key={id} id={id} src={src} title={title} description={description} price={price} highlights={highlights} />
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
    )

}