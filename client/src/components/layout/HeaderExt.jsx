import { Box, Stack, Typography } from "@mui/material"
import { convert } from "../../utils/muiConverter"


export function HeaderExt() {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            height: "49px",
            bgcolor: "background.paper",
            borderBottom: "0.5px solid",
            borderColor: "black",
        }} />
    )

}