import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import { convert } from "../../utils/muiConverter"
import { logoNew } from "../../assets"

let optionsId = 0;

const options = [
    { id: optionsId++, name: "Designed by Can Korkmaz", route: "/" },


]
const imageAspect = 214 / 74;

export function Footer() {
    return (
        <Box sx={{
            bgcolor: "custom.yellowSpecial"
        }}>
            <Stack sx={{
                alignItems: "center",
                justifyContent: "flex-start",
                py: convert(32),
                gap: convert(19),
            }}>

                {options.map(({ id, name, route }) => {
                    return (
                        <Stack direction="row" sx={{
                            gap: convert(10)
                        }}>
                            <Typography key={id} variant="bigButtonTitle" sx={{
                                lineHeight: 1,
                                color: "text.primary",
                            }}>
                                {name}
                            </Typography>
                        </Stack>
                    )
                })}
                <Stack sx={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}>
                    <Box component="img" src={logoNew} sx={{
                        width: "150px",
                        aspectRatio: imageAspect,
                    }} />
                    <Box sx={{
                        width: "60%",
                        borderBottom: "2px solid",
                        borderColor: "black",
                    }} />
                </Stack>
            </Stack>
        </Box>
    );
}