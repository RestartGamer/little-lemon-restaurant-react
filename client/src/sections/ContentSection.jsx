import { Stack } from "@mui/material"
import { convert } from "../utils/muiConverter"



export function ContentSection({ children }) {

    return (
        <Stack className="ContentSection" sx={{
            "--border": {
                xs: "0", md: "1px"
            },
            width: "80%",
            alignItems: "center",
            justifyContent: "flex-start",
            bgcolor: "background.default",
            borderRight: "var(--border) solid",
            borderLeft: "var(--border) solid",
            borderColor: "black",
            pb: convert(50),
        }}>
            {children}
        </Stack>
    )
}