import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"

export function ReserveTableBtnBlack() {

    return (
        <ButtonBase
            component={RouteLink}
            to="/reservation"
            sx={(theme) => ({
                bgcolor: alpha(theme.palette.custom.buttonSpecial2, 0.92),
                px: convert(17),
                py: convert(12),
                borderRadius: "7px",
                border: "1.5px solid",
                borderColor: "custom.borderGrey1",

                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                    textDecoration: "none",
                },
                "&:visited": {
                    color: "inherit",
                },
            })}
            onClick={(event) => {
                event.preventDefault();
                window.scrollTo(0, 0)
            }}>
            <Typography variant="sectionTitle" component="span" sx={{
                lineHeight: 1,
                color: "text.secondary",
                fontWeight: 500,
                letterSpacing: "2px",
            }}>
                Reserve a table
            </Typography>
        </ButtonBase>
    )
}