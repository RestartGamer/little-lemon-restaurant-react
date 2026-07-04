import { useRef } from "react";
import { Box, ButtonBase, Stack } from "@mui/material";
import { SlideShowItem } from "../components";

export function SlideShowSection({ items = [] }) {
  const scrollerRef = useRef(null);

  function handleScroll(direction) {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    const scrollAmount = scroller.clientWidth * 0.85;

    scroller.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <Box
      sx={{
        "--carousel-padding": {
          xs: "22px",
          md: "40px",
        },
        "--carousel-gap": "18px",
        "--visible-items": {
          xs: 1,
          md: 2,
          lg: 3,
          xl: 4,
        },
        "--frame-width": `
          calc(
            (
              100vw
              - var(--carousel-padding) * 2
              - var(--carousel-gap) * (var(--visible-items) - 1)
            )
            / var(--visible-items)
          )
        `,

        width: "100%",
        position: "relative",
        px: "var(--carousel-padding)",
        pb: 3,
        boxSizing: "border-box",
      }}
    >
      <ButtonBase
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          left: {
            xs: 5,
            md: 20,
          },
          top: "44%",
          transform: "translateY(-50%)",
          zIndex: 5,
          width: 42,
          height: 42,
          borderRadius: "50%",
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
          fontSize: 30,
        }}
      >
        ‹
      </ButtonBase>

      <Box
        ref={scrollerRef}
        sx={{
          width: "100%",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "max-content",
            gap: "var(--carousel-gap)",
          }}
        >
          {items.map((foodItem) => (
            <Box
              key={foodItem.id}
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
                item={foodItem}
                {...foodItem}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      <ButtonBase
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          right: {
            xs: 5,
            md: 20,
          },
          top: "44%",
          transform: "translateY(-50%)",
          zIndex: 5,
          width: 42,
          height: 42,
          borderRadius: "50%",
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
          fontSize: 30,
        }}
      >
        ›
      </ButtonBase>

      <Stack
        direction="row"
        justifyContent="center"
        gap={1}
        mt={2}
      >
        {[0, 1, 2, 3].map((index) => (
          <Box
            key={index}
            sx={{
              width: index === 0 ? 18 : 9,
              height: 9,
              borderRadius: 9,
              bgcolor:
                index === 0
                  ? "custom.yellowSpecial3"
                  : "#d9d5cc",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}