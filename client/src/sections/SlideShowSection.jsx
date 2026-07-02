import { useRef } from "react";
import { Box, ButtonBase, Stack, useMediaQuery, useTheme } from "@mui/material";
import { SlideShowItem, NavBtnLayout } from "../components";

export function SlideShowSection({ items = [] }) {
    const scrollerRef = useRef(null);

    function handleScroll(direction) {
        const scroller = scrollerRef.current;

        if (!scroller) return;

        const scrollAmount = scroller.clientWidth;

        scroller.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    }

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Stack direction="row"
            className="SlideShowSection__Container SlideShowSection__Clipper"
            sx={{
                "--container-lateral-padding": {
                    xs: "17px",
                    md: "150px",
                    lg: "220px",
                    xl: "300px",
                },
                "--gap": "20px",
                "--visible-items": {
                    xs: 1,
                    md: 2,
                    lg: 2,
                    xl: 3,
                },
                "--frame-width":
                    "calc((100vw - var(--container-lateral-padding) * 2 - (var(--gap) * (var(--visible-items) - 1))) / var(--visible-items))",

                width: "100vw",
                overflow: "clip",
                px: "var(--container-lateral-padding)",
                boxSizing: "border-box",
                alignItems: "center",
                gap: "var(--gap)",
                position: "relative",
            }}
        >
            {
                isMdUp &&
                <ButtonBase
                    onClick={() => handleScroll("left")}
                    sx={{
                        position: "absolute",
                        left: "1.5%",
                        top: "50%",
                        transform: "translate(calc(50% - var(--container-lateral-margin) / 2), -50%)",
                        zIndex: 0,
                    }}
                >
                    <NavBtnLayout
                        orientation="left"
                        size="30px"
                    />
                </ButtonBase>
            }

            <Box
                ref={scrollerRef}
                className="SlideShowSection__Content SlideShowSection__Scroller"
                sx={{
                    width: "100%",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                }}
            >
                <Stack
                    className="SlideShowSection__ScrollContent"
                    direction="row"
                    sx={{
                        width: "max-content",
                        height: "fit-content",
                        alignItems: "center",
                        gap: "var(--gap)",
                    }}
                >
                    {items.map((foodItem) => {
                        const { id, title, price, src, description, highlights, descriptionLong } = foodItem;

                        return (
                            <Box
                                key={id}
                                className="SlideShowSection__ItemFrame"
                                sx={{
                                    flex: "0 0 var(--frame-width)",
                                    width: "var(--frame-width)",
                                    scrollSnapAlign: "start",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <SlideShowItem
                                    items={items}
                                    id={id}
                                    item={foodItem}
                                    title={title}
                                    price={price}
                                    src={src}
                                    description={description}
                                    descriptionLong={descriptionLong}
                                    highlights={highlights}
                                />
                            </Box>
                        );
                    })}
                </Stack>
            </Box>

            {
                isMdUp &&
                <ButtonBase
                    onClick={() => handleScroll("right")}
                    sx={{
                        position: "absolute",
                        right: "1.5%",
                        top: "50%",
                        transform: "translate(calc(50% + var(--container-lateral-margin) / 2), -50%)",
                        zIndex: 5,
                    }}
                >
                    <NavBtnLayout
                        orientation="right"
                        size="30px"
                    />
                </ButtonBase>
            }
        </Stack>
    );
}
