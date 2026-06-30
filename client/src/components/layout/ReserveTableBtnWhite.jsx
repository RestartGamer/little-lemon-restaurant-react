import { Typography, ButtonBase } from "@mui/material"
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
                px: convert(50),
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
                maxWidth: "90vw",
                minWidth: "200px"
            }}
            onClick={() => {
                window.scrollTo(0, 0)
            }}>
            <Typography variant="bigButtonTitle" component="span" sx={{
                color: "text.primary",
                lineHeight: 1.2,
                whiteSpace: "nowrap"
            }}>
                Reserve a table
            </Typography>
        </ButtonBase>
    )
}