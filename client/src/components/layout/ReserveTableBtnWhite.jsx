import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

export function ReserveTableBtnWhite() {

    return (
        <ButtonBase
            component={RouteLink}
            to="/reservation"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: convert(99),
                py: convert(12),
                border: "1px solid",
                borderColor: "black",
                borderRadius: "7px",
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                    textDecoration: "none",
                },
                "&:visited": {
                    color: "inherit",
                },
            }}
            onClick={(event)=> {
                window.scrollTo(0, 0)
            }}>
            <Typography variant="bigButtonTitle" sx={{
                color: "text.primary",
                lineHeight: 1.2,
            }}>
                Reserve a table
            </Typography>
        </ButtonBase>
    )
}