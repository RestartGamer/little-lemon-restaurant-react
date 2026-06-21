import { Box, Stack, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"


export function HeaderExt({ children }) {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            px: convert(11),
            py: convert(12),
            width: "100%",
            height: "fit-content",
            bgcolor: "background.paper",
            borderBottom: "0.5px solid",
            borderColor: "black",
        }} />
    )

}