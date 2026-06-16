import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"

export function ReserveTableBtn(){

    return (
        <ButtonBase sx={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            px: convert(99),
            py: convert(12),
            border: "1px solid",
            borderColor: "black",
            borderRadius: "7px",
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