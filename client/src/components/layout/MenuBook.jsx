import { useState } from "react";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";

export function MenuBook({ items = [] }) {
  const [catState, setCatState] = useState("meat");

  const categories = [
    ...new Map(
      items.map((item) => [
        item.category.value,
        item.category,
      ])
    ).values(),
  ];

  const itemsFiltered = items.filter(
    (item) => item.category.value === catState
  );

  const visibleItems = itemsFiltered.length
    ? itemsFiltered
    : items;

  const activeCategory =
    itemsFiltered[0]?.category.name || "Menu";

  return (
    <Box
      sx={{
        width: "calc(100% - 32px)",
        maxWidth: 980,
        pb: 3,
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid rgba(233, 198, 107, 0.35)",
          bgcolor: "rgba(255, 255, 255, 0.96)",
          boxShadow: "0 7px 22px rgba(30, 45, 38, 0.06)",
        }}
      >
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: 180,
            },
            p: 2,
            gap: 0.7,
            borderRight: {
              md: "1px solid rgba(233, 198, 107, 0.3)",
            },
            flexDirection: {
              xs: "row",
              md: "column",
            },
            overflowX: "auto",
          }}
        >
          {categories.map(({ value, name, icon }) => {
            const isSelected = catState === value;

            return (
              <ButtonBase
                key={value}
                onClick={() => setCatState(value)}
                sx={{
                  minWidth: {
                    xs: 110,
                    md: "100%",
                  },
                  justifyContent: "flex-start",
                  gap: 1,
                  px: 1.5,
                  py: 1.2,
                  borderRadius: 1.5,
                  bgcolor: isSelected
                    ? "#fff7d7"
                    : "transparent",
                  color: isSelected
                    ? "custom.deepGreen"
                    : "text.primary",
                  boxShadow: isSelected
                    ? "inset 3px 0 0 #F4C316"
                    : "none",
                }}
              >
                <Typography>
                  {icon}
                </Typography>

                <Typography
                  variant="bodyLarge"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {name}
                </Typography>
              </ButtonBase>
            );
          })}
        </Stack>

        <Stack
          sx={{
            flex: 1,
            p: {
              xs: 2.2,
              md: 3,
            },
            bgcolor: "#FFF9E9",
          }}
        >
          <Typography
            variant="sectionTitle"
            sx={{
              color: "custom.deepGreen",
              mb: 1.5,
            }}
          >
            {activeCategory}
          </Typography>

          {visibleItems.map((item, index) => {
            const isLastItem =
              index === visibleItems.length - 1;

            return (
              <Stack
                key={item.id ?? index}
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1.3,
                  borderBottom: isLastItem
                    ? 0
                    : "1px dashed rgba(125, 115, 90, 0.22)",
                }}
              >
                <Typography variant="bodyLarge">
                  {item.title}
                </Typography>

                <Typography
                  variant="bodyLarge"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  ${Number(item.price).toFixed(2)}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}