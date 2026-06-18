import { Box, Stack, Typography } from "@mui/material"
import { AddToCartBtn, ReserveTableBtnWhite } from "../components"
import { convert } from "../utils/muiConverter"

const containerBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
}

export function AddOrReserveSection({ id, src, title, description, price, highlights }) {
    const item = {
        id,
        src,
        title,
        description,
        price,
        highlights,
    };
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
        }}>
            <Stack sx={{
                alignItems: "center",
                justifyContent: "flex-start",
                mt: convert(34),
                mb: convert(45),
            }}>
                <Box sx={{
                    ...containerBox
                }}>
                    <AddToCartBtn
                        item={item}
                        typography="bigButtonTitle"
                        buttonSx={{
                            px: convert(31),
                            py: convert(12),
                        }} />
                </Box>
                <Box sx={{
                    ...containerBox
                }}>
                    <Typography variant="sectionTitle" sx={{
                        color: "text.primary",
                    }}>
                        or
                    </Typography>
                </Box>
                <Box sx={{
                    ...containerBox,
                }}>
                    <ReserveTableBtnWhite />
                </Box>
            </Stack>

        </Box>
    )
}