import { Stack } from "@mui/material"




export function ContentSection({ children }) {

    return (
        <Stack sx={{
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
        }}>
            {children}
        </Stack>
    )
}