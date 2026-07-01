import { useState, useEffect, useLayoutEffect } from "react"
import { Box, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"


const buttonBGSx = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "69px",
    bgcolor: "background.paper",
    borderBottom: "0.5px solid",
    borderColor: "black",
    pl: convert(10),
    zIndex: 1,
}
const buttonInnerSize = "25px";
const buttonOuterSize = 4;


export function BackBtn() {
    const [scrollY, setScrollY] = useState(null)

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => (
            window.removeEventListener("scroll", handleScroll)
        )

    }, [])

    const hasScrolledDown = scrollY > 100;


    const [navbarHeight, setNavbarHeight] = useState(0);

    useLayoutEffect(() => {
        function updateNavbarHeight() {
            const navbar = document.querySelector(".Navbar");
            const height = navbar?.getBoundingClientRect().height ?? 0;

            setNavbarHeight(height);
        }

        updateNavbarHeight();

        window.addEventListener("resize", updateNavbarHeight);

        return () => {
            window.removeEventListener("resize", updateNavbarHeight);
        };
    }, []);


    return (
        <>
            {
                hasScrolledDown ? (
                    <>
                        <Box sx={{

                            ...buttonBGSx,
                        }} />
                        <Box sx={{
                            position: "fixed",
                            top: navbarHeight,
                            left: 0,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                            height: "49px",
                            pl: convert(10),
                            zIndex: 1,
                        }}>
                            <ButtonBase
                                component={RouteLink}
                                to="/"
                                sx={{
                                    "--border-width": "4px",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "fit-content",
                                    height: "fit-content",
                                    bgcolor: "white",
                                    borderTop: "var(--border-width) solid",
                                    borderLeft: "var(--border-width) solid",
                                    borderColor: "black",
                                    px: convert(buttonOuterSize),
                                    py: convert(buttonOuterSize),
                                    transform: "rotate(-45deg)",

                                }}>
                                <Box sx={{
                                    "--size": buttonInnerSize,
                                    width: "var(--size)",
                                    height: "var(--size)",
                                    bgcolor: "custom.yellowSpecial3",
                                    borderTop: "4px solid",
                                    borderLeft: "4px solid",
                                    borderColor: "custom.borderGrey",
                                }} />
                            </ButtonBase>
                        </Box>
                    </>
                ) : (
                    <Box sx={{

                        ...buttonBGSx
                    }}>
                        <ButtonBase
                            component={RouteLink}
                            to="/"
                            sx={{
                                "--border-width": "4px",
                                display: "flex",
                                justifyContent: "center",
                                width: "fit-content",
                                height: "fit-content",
                                borderTop: "var(--border-width) solid",
                                borderLeft: "var(--border-width) solid",
                                borderColor: "black",
                                px: convert(buttonOuterSize),
                                py: convert(buttonOuterSize),
                                transform: "rotate(-45deg)",

                            }}>
                            <Box sx={{
                                "--size": buttonInnerSize,
                                width: "var(--size)",
                                height: "var(--size)",
                                bgcolor: "custom.yellowSpecial3",
                                border: "2px solid",
                                borderLeft: "2px solid",
                                borderColor: "black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Box sx={{
                                    "--sub-size": "calc(var(--size) / 3)",
                                    width: "var(--sub-size)",
                                    height: "var(--sub-size)",
                                    bgcolor: "white"
                                }}>

                                </Box>
                            </Box>
                        </ButtonBase>
                    </Box>
                )
            }

        </>
    )
}
