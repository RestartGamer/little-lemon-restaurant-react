import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import { convert } from "../../utils/muiConverter"

let optionsId = 0;

const options = [
    { id: optionsId++, name: "Legal", route: "/" },
    { id: optionsId++, name: "Contacto", route: "/" },
]

export function BottomInfo() {
    return (
        <Box sx={{
            bgcolor: "custom.bottomInfoBg"
        }}>
            <Stack sx={{
                alignItems: "center",
                justifyContent: "flex-start",
                py: convert(32),
                gap: convert(19),
            }}>

                {options.map(({ id, name }) => {
                    return (
                        <Stack key={id} direction="row" sx={{
                            gap: convert(10)
                        }}>
                            <Typography variant="bigButtonTitle" sx={{
                                lineHeight: 1,
                                color: "text.primary",
                            }}>
                                {name}
                            </Typography>
                            <Box sx={{
                                display:"flex"
                            }}>
                                <ButtonBase sx={{
                                    "--button-size": "14px",
                                    "--border-size": "2px",
                                    width: "var(--button-size)",
                                    height: "var(--button-size)",
                                    borderBottom: "var(--border-size) solid",
                                    borderRight: "var(--border-size) solid",
                                    borderColor: "black",
                                    transform: "rotate(45deg)",
                                }} />
                            </Box>
                        </Stack>
                    )
                })}
            </Stack>
        </Box>
    );
}