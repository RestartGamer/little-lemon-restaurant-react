import {
  useEffect,
  useRef,
  useState,
} from "react"

import {
  Box,
  ButtonBase,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material"

import { SlideShowItem } from "../components"

const visibleItemsByBreakpoint = {
  xs: 1,
  md: 2,
  lg: 3,
}

export function SlideShowSection({ items = [] }) {
  const [selectedStackIndex, setSelectedStackIndex] = useState(0)

  const scrollerRef = useRef(null)

  const theme = useTheme()

  const isAboveLG = useMediaQuery(theme.breakpoints.up("lg"))
  const isAboveMD = useMediaQuery(theme.breakpoints.up("md"))

  const visibleItems = isAboveLG
    ? visibleItemsByBreakpoint.lg
    : isAboveMD
      ? visibleItemsByBreakpoint.md
      : visibleItemsByBreakpoint.xs

  const itemStacks = []

  for (
    let index = 0;
    index < items.length;
    index += visibleItems
  ) {
    itemStacks.push(
      items.slice(index, index + visibleItems)
    )
  }

  useEffect(() => {
    setSelectedStackIndex(0)

    scrollerRef.current?.scrollTo({
      left: 0,
    })
  }, [visibleItems])

  function handleScroll(direction) {
    const scroller = scrollerRef.current

    if (!scroller) return

    const lastStackIndex = itemStacks.length - 1

    const nextStackIndex =
      direction === "right"
        ? Math.min(
          selectedStackIndex + 1,
          lastStackIndex
        )
        : Math.max(
          selectedStackIndex - 1,
          0
        )

    setSelectedStackIndex(nextStackIndex)

    scroller.scrollTo({
      left: scroller.clientWidth * nextStackIndex,
      behavior: "smooth",
    })
  }

  return (
    <Box
      className="SlideShowSection__Container SlideShowSection__Clipper"
      sx={{
        "--carousel-padding": {
          xs: "22px",
          md: "40px",
        },

        "--carousel-gap": "18px",

        "--visible-items": {
          xs: visibleItemsByBreakpoint.xs,
          md: visibleItemsByBreakpoint.md,
          lg: visibleItemsByBreakpoint.lg,
        },

        "--frame-width": `calc(
          (
            100%
            - var(--carousel-gap) * (var(--visible-items) - 1)
          )
          / var(--visible-items)
        )`,

        width: "100%",
        position: "relative",
        px: "var(--carousel-padding)",
        pb: 3,
        boxSizing: "border-box",
      }}
    >
      <ButtonBase
        className="SlideShowSection__NavigationButton SlideShowSection__NavigationButton--Left"
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
        className="SlideShowSection__Content SlideShowSection__Scroller"
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
          className="SlideShowSection__ScrollContent"
          direction="row"
          sx={{
            width: "100%",
            minWidth: "100%",
            gap: "var(--carousel-gap)",
          }}
        >
          {items.map((foodItem) => (
            <Box
              key={foodItem.id}
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
                item={foodItem}
                {...foodItem}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      <ButtonBase
        className="SlideShowSection__NavigationButton SlideShowSection__NavigationButton--Right"
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
        className="SlideShowSection__Pagination"
        direction="row"
        sx={{
          justifyContent: "center",
          gap: 1,
          mt: 2,
        }}
      >
        {itemStacks.map((itemStack, index) => {
          const isSelected =
            index === selectedStackIndex

          return (
            <Box
              key={itemStack[0]?.id ?? index}
              className={`SlideShowSection__PaginationDot ${isSelected
                  ? "SlideShowSection__PaginationDot--Active"
                  : ""
                }`}
              sx={{
                width: isSelected ? 18 : 9,
                height: 9,
                borderRadius: 9,

                bgcolor: isSelected
                  ? "custom.yellowSpecial3"
                  : "#d9d5cc",
              }}
            />
          )
        })}
      </Stack>
    </Box>
  )
}