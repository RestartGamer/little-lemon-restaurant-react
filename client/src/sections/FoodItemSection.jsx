import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../utils/muiConverter"
import { FoodItem } from "../components"



export function FoodItemSection({ items, isOpenMenu, isOpenCart }) {
    return (
        <Stack sx={{
            justifyContent: "space-between",
            gap: convert(7),
            pt: convert(15),
            pb: convert(35),
            bgcolor: "background.default"
        }}>
            {
                items.map(({ id, type, src, title, description, descriptionLong, price, highlights = [] }) => {
                    return (
                        type === "foodItem" ? (
                            <FoodItem 
                            key={id} 
                            isOpenMenu={isOpenMenu} 
                            isOpenCart={isOpenCart} 
                            id={id} src={src} 
                            items={items}
                            title={title} 
                            description={description} 
                            descriptionLong={descriptionLong}
                            price={price} 
                            highlights={highlights} />
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