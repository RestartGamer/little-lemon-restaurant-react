import { backBtn } from "../../assets"
import { Stack, Box, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

const imageAspect = 46 / 32;
export function PageTitle({ title, route }) {

    return (
        <Stack direction="row" sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: convert(10),
            mt: convert(22),
        }}>
            <ButtonBase component={RouteLink} to={route}>
                <Box component="img" src={backBtn} alt="A left pointed arrow button" ariaLabel="A button to return to the previous page"
                    sx={{
                        width: "60px",
                        aspectRatio: imageAspect,

                    }} />
            </ButtonBase>
            <Box sx={{
                minWidth: "344px",
                bgcolor: "custom.backgroundSpecial",
                px: convert(16),
                py: convert(6),
                borderRadius: "6px",
            }}>
                <Typography variant="sectionTitle" sx={{
                    color: "text.primary",
                }}>
                    {title}
                </Typography>
            </Box>
        </Stack>
    )
}