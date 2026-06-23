import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { SlideShowItem } from "../components"
import { foodItems } from "../../../server/data/foodItems"


export function SlideShowSection() {
  return (
    <Box
      className="SlideShowSection"
      sx={{
        width: "100%",
        overflow: "clip",
      }}
    >
      <Box
        className="SlideShowSection__scrollBox"
        sx={{
          overflowX: "auto",
          width: "100%",
          scrollSnapType: "x mandatory",
        }}
      >
        <Stack
          className="SlideShowSection__track"
          direction="row"
          sx={{
            width: "fit-content",
            height: "fit-content",
          }}
        >
          {foodItems.map((foodItem) => {
            const { id, title, price, src } = foodItem;

            return (
              <Box
                key={id}
                className="SlideShowSection__slide"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  scrollSnapAlign: "center",
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