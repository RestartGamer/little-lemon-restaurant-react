import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"

export function NavBtnLayout({ orientation = "right", size = "15px" }) {
    return (
        <Box className="NavBtn__Container" sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            transform: `rotate(
                ${orientation === "right" ? 135 :
                    orientation === "down" ? -135 :
                        orientation === "left" ? -45 :
                            orientation === "up" ? 45 : 0
                }deg 
                ) `,
            left: orientation === "left" ? 30 : null,
            right: orientation === "right" ? 30 : null,
            mr: "auto",
        }}>

            <Box sx={{
                borderTop: "4px solid",
                borderLeft: "4px solid",
                borderColor: "custom.buttonSpecial2",
            }}>
                <Box sx={{
                    "--size": size,
                    width: "var(--size)",
                    height: "var(--size)",
                    bgcolor: "custom.yellowSpecial3",
                    borderTop: "4px solid",
                    borderLeft: "4px solid",
                    borderColor: "custom.borderGrey",
                }} />
            </Box>
        </Box>
    )
}
