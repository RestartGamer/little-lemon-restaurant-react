import { Stack, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"
import { useLoading, useAuth } from "../../context"

let optionId = 0;
const mainMenuOptions = [
    { id: optionId++, name: "Homepage", route: "/" },
    { id: optionId++, name: "About us", route: "/" },
    { id: optionId++, name: "Reserve a table", route: "/reservation" },
    { id: optionId++, name: "Logout", action: "logout" },
]

export function MainMenu({ orientation, forwardRef, logoutUser, setIsOpenMenu, setIsOpenCart, isOpenMenu }) {

    const { startLoading } = useLoading();

    const {
        checkAuth,
        isAuthenticated,
    } = useAuth();

    return (
        <Stack ref={forwardRef} sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "absolute",
            top: "100%",
            ...(orientation === "left" && { left: 0, alignItems: "flex-start" }),
            ...(orientation === "right" && { right: 0, alignItems: "flex-end" }),
            px: convert(30),
            py: convert(30),
            bgcolor: "background.paper",
            gap: convert(10),
            borderTop: "0.5px solid",
            borderLeft: "2px solid",
            borderRight: "2px solid",
            borderBottom: "2px solid",
            borderColor: "custom.borderNormal",
            borderRadius: "0 0 30px 0",

            ...(orientation === "left" && {
                left: 0,
                alignItems: "flex-start",
                transform: isOpenMenu ? "translateX(0)" : "translateX(-100%)",
            }),

            ...(orientation === "right" && {
                right: 0,
                alignItems: "flex-end",
                transform: isOpenMenu ? "translateX(0)" : "translateX(100%)",
            }),
            opacity: isOpenMenu ? 1 : 0.5,
            pointerEvents: isOpenMenu ? "auto" : "none",
            transition: "transform 300ms ease-out, opacity 300ms ease-out",

        }}>
            {mainMenuOptions.map(({ id, name, route, action = null }) => {
                return action === null ? (

                    <ButtonBase
                        key={id}
                        component={RouteLink}
                        to={route}
                        onClick={() => {
                            setIsOpenMenu(false);
                            setIsOpenCart(false);
                        }}
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
                    : action === "logout" && isAuthenticated ? (
                        <ButtonBase key={id}
                            component={RouteLink}
                            to="/"
                            onClick={() => {
                                logoutUser();
                                setIsOpenMenu(false);
                                setIsOpenCart(false);
                                startLoading();
                                checkAuth();
                            }}
                            sx={{
                                bgcolor: "red",
                                px: convert(7),
                                py: convert(5),
                                border: "1px solid",
                                borderColor: "custom.borderNormal",
                                borderRadius: "6px"
                            }}>
                            {name}
                        </ButtonBase>
                    ) : null

            })}

        </Stack>
    )
}