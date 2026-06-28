import { useState, useEffect, useLayoutEffect } from "react"
import { Box, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { Link as RouteLink } from "react-router-dom"

export function BackBtn({ orientationSx = {} }) {
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
                                px: convert(2),
                                py: convert(2),
                                transform: "rotate(-45deg)",
                                ...orientationSx,

                            }}>
                            <Box sx={{
                                "--size": "15px",
                                width: "var(--size)",
                                height: "var(--size)",
                                bgcolor: "custom.yellowSpecial3",
                                borderTop: "4px solid",
                                borderLeft: "4px solid",
                                borderColor: "custom.borderGrey",
                            }} />
                        </ButtonBase>
                    </Box>
                ) : (
                    <Box sx={{

                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        height: "49px",
                        bgcolor: "background.paper",
                        borderBottom: "0.5px solid",
                        borderColor: "black",
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
                                px: convert(2),
                                py: convert(2),
                                transform: "rotate(-45deg)",
                                ...orientationSx,

                            }}>
                            <Box sx={{
                                "--size": "15px",
                                width: "var(--size)",
                                height: "var(--size)",
                                bgcolor: "custom.yellowSpecial3",
                                borderTop: "4px solid",
                                borderLeft: "4px solid",
                                borderColor: "custom.borderGrey",
                            }} />
                        </ButtonBase>
                    </Box>
                )
            }

        </>
    )
}
