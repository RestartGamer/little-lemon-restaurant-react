import { useRef } from "react"
import { Box, Stack } from "@mui/material";
import { SlideShowItem, NavigationBtn } from "../components";
import { foodItems } from "../../../server/data/foodItems";
import { convert } from "../utils/muiConverter"

export function SlideShowSection() {

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

    return (
        <Stack direction="row"
            className="SlideShowSection__Container SlideShowSection__Clipper"
            sx={{
                "--container-lateral-padding": {
                    xs: "17px",
                    md: "60px",
                    lg: "80px",
                    xl: "200px",
                },
                "--gap": "0px",
                "--visible-items": {
                    xs: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                },
                "--frame-width":
                    "calc((100vw - var(--container-lateral-padding) * 2 - (var(--gap) * (var(--visible-items) - 1))) / var(--visible-items))",

                width: "100%",
                overflow: "clip",
                px: "var(--container-lateral-padding)",
                boxSizing: "border-box",
                alignItems: "center",
                gap: "var(--gap)",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    left: "1.5%",
                    top: "50%",
                    transform: "translate(calc(50% - var(--container-lateral-margin) / 2), -50%)",
                    zIndex: 5,
                }}
            >
                <NavigationBtn
                    orientation="left"
                    size="30px"
                    onClick={() => handleScroll("left")}
                />
            </Box>
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
                    {foodItems.map((foodItem) => {
                        const { id, title, price, src } = foodItem;

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
                                    //outline: "1px solid red",
                                }}
                            >
                                <SlideShowItem
                                    item={foodItem}
                                    title={title}
                                    price={price}
                                    src={src}
                                />
                            </Box>
                        );
                    })}
                </Stack>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    right: "1.5%",
                    top: "50%",
                    transform: "translate(calc(50% + var(--container-lateral-margin) / 2), -50%)",
                    zIndex: 5,
                }}
            >
                <NavigationBtn
                    orientation="right"
                    size="30px"
                    onClick={() => handleScroll("right")}
                />
            </Box>

        </Stack>
    );
}