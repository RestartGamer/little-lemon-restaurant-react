import { useState } from "react"
import { Box, Stack, ButtonBase } from "@mui/material"
import { logo, hamBtnIcon, infoIcon } from "../../assets"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

const iconHeight = "57px"
let iconId = 0;
const icons = [
    { id: iconId++, type: "button", action: "info", src: infoIcon, height: "57px", sx: { aspectRatio: "1 / 1" } },
    { id: iconId++, type: "link", src: logo, height: "57px", sx: { aspectRatio: "1 / 1" } },
    { id: iconId++, type: "button", action: "menu", src: hamBtnIcon, height: "40px", sx: {} }
]

let optionId = 0;
const dropdownOptions = [
    { id: optionId++, name: "Homepage", route: "/" },
    { id: optionId++, name: "About us", route: "/somewhere" },
    { id: optionId++, name: "Reserve a table", route: "/somewhere" },
]

function DropDown() {
    return (
        <Stack sx={{
            alignItems: "flex-end",
            justifyContent: "flex-start",
            position: "absolute",
            top:"100%",
            right: 0,
            px: convert(30),
            py: convert(30),
            bgcolor: "background.paper"
        }}>
            {dropdownOptions.map(({ id, name, route }) => {
                return (
                    <ButtonBase key={id} component={RouteLink} to={route}
                        sx={{
                            bgcolor: "background.paper",
                            px: convert(7),
                            py: convert(5),
                        }}>
                        {name}
                    </ButtonBase>
                )
            })}

        </Stack>
    )
}


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonActions = {
        info: () => setIsOpen(true),
        menu: () => setIsOpen(prev => !prev),
    }
    return (
        <Stack component="nav" direction="row"
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                top: 0,
                width: "100%",
                bgcolor: "background.paper",
                px: convert(20),
                py: convert(19),
                zIndex: 9999,

            }}>
            {icons.map(({ id, type, action, src, height, sx, onClick }) => {
                return (
                    type === "button" ? (
                        <ButtonBase onClick={buttonActions[action]}>
                            <Box component="img" key={id} src={src} height={height} sx={{ ...sx }} />
                        </ButtonBase>
                    ) : type === "link" && (
                        <Box component="RouteLink">
                            <Box component="img" key={id} src={src} height={height} sx={{ ...sx }} />
                        </Box>
                    )
                )
            })}
            {
                isOpen && (
                    <DropDown />
                )
            }


        </Stack>
    )
}