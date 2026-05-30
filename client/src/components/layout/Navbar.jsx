import { useState } from "react"
import { Box, Stack, ButtonBase } from "@mui/material"
import { logo, hamBtnIcon, infoIcon, cartIcon } from "../../assets"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

const iconHeight = "57px"
let iconId = 0;
const icons = [
    { id: iconId++, type: "button", action: "menu", src: hamBtnIcon, height: "40px", sx: {} },
    { id: iconId++, type: "link", src: logo, height: "57px", sx: { aspectRatio: "1 / 1" } },
    { id: iconId++, type: "button", action: "cart", src: cartIcon, height: "50px", sx: { aspectRatio: "1 / 1" } },


]

let optionId = 0;
const dropdownOptionsMenu = [
    { id: optionId++, name: "Homepage", route: "/" },
    { id: optionId++, name: "About us", route: "/" },
    { id: optionId++, name: "Reserve a table", route: "/reservation" },
]

function DropDown({ orientation, dropdownOptions }) {
    return (
        <Stack sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "absolute",
            top: "100%",
            ...(orientation === "left" && { left: 0, alignItems: "flex-start" }),
            ...(orientation === "right" && { right: 0, alignItems: "flex-end"}),
            px: convert(30),
            py: convert(30),
            bgcolor: "background.paper",
            gap: convert(10),
            borderTop: "0.5px solid",
            borderLeft: "2px solid",
            borderRight: "2px solid",
            borderBottom: "2px solid",
            borderColor: "custom.borderNormal",
        }}>
            {dropdownOptions.map(({ id, name, route }) => {
                return (
                    <ButtonBase key={id} component={RouteLink} to={route}
                        sx={{
                            bgcolor: "background.paper",
                            px: convert(7),
                            py: convert(5),
                            border: "1px solid",
                            borderColor: "custom.borderNormal",
                            borderRadius: "6px"
                        }}>
                        {name}
                    </ButtonBase>
                )
            })}

        </Stack>
    )
}



export function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const buttonActions = {
        cart: () => setIsOpenCart(prev => !prev),
        menu: () => setIsOpenMenu(prev => !prev),
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
                borderBottom: "5px solid",
                borderColor: "custom.bigButtonBg",

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
                isOpenMenu && (
                    <DropDown orientation="left" dropdownOptions={dropdownOptionsMenu} />
                )
            }

            {
                isOpenCart && (
                    <DropDown orientation="right" dropdownOptions={dropdownOptionsMenu} />
                )
            }
        </Stack>
    )
}