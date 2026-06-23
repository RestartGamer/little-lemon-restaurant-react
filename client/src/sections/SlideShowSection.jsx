import { Box, Stack } from "@mui/material";
import { SlideShowItem } from "../components";
import { foodItems } from "../../../server/data/foodItems";

export function SlideShowSection() {
    return (
        <Box
            className="SlideShowSection__Container SlideShowSection__Clipper"
            sx={{
                "--container-lateral-padding": {
                    xs: "30px",
                    md: "60px",
                    lg: "80px",
                    xl: "300px",
                },
                "--gap": "10px",
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
            }}
        >
            <Box
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
        </Box>
    );
}