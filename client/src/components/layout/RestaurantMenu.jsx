import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"

function MenuBook({ title, price, categoryName, category }) {

    return ( //connect with the food mock db in backend, pulling dish name and prices
        <Stack>
            <Typography variant="sectionTitle" sx={{
                color: "text.primary",
            }}>
                {categoryName}
            </Typography>
            {/*NEED TO ADD THE MAP FUNCTION HERE WITH THE FILTERED LIST OF FOOD ITEMS*/}
            <Stack direction="row" sx={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}>
                <Typography variant="bodyLarge" sx={{
                    color: "text.primary",
                }}>
                    {title}
                </Typography>
                <Typography variant="bodyLarge" sx={{
                    color: "text.primary",
                }}>
                    {price}
                </Typography>
            </Stack>
        </Stack>
    )
}


export function RestaurantMenu({ title, price, categoryName, category }) {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            px: convert(30),

        }}>
            <Stack direction="row" sx={{
                alignItems: "center",
                justifyContent: "center",

            }}>
                <MenuBook title={title} price={price} />

            </Stack>
        </Box>
    )
}