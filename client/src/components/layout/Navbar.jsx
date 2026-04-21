import { Box, Stack } from "@mui/material"
import { logo, hamBtnIcon, infoIcon } from "../../assets"
import { convert } from "../../utils/muiConverter"

const iconHeight = "57px"

const icons = [
    {id:1, src: infoIcon, height: "57px", sx:{aspectRatio: "1 / 1"} },
    {id:2, src: logo, height: "57px", sx:{aspectRatio: "1 / 1"} },
    {id:3, src: hamBtnIcon, height: "57px", sx:{aspectRatio: "1 / 1"} }
]


export function Navbar() {

    return (
        <Stack component="nav" direction="row"
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                px: convert(20),
                py: convert(19),
                justifyContent: "space-between",
            }}>
                {icons.map(({id, src, height, sx})=> {
                    return (
                        <Box component="img" key={id} src={src} height={height} sx={{...sx}} />
                    )
                })}
            

        </Stack>
    )
}