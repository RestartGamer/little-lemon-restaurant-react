import {
  Box,
  ButtonBase,
  Stack,
  Typography,
} from "@mui/material";

export function CategorySelection({
  items = [],
  selectedCategory,
  onSelectCategory,
}) {

  const options = [
    ...new Map(
      items.map((item) => [
        item.category.value,
        item.category,
      ])
    ).values(),
  ];

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: 210,
        },
        flexShrink: 0,
        p: {
          xs: 2,
          md: 0,
        },
      }}
    >
      <Stack
        direction={{
          xs: "row",
          md: "column",
        }}
        sx={{
          gap: 1.2,
          overflowX: {
            xs: "auto",
            md: "visible",
          },
          scrollbarWidth: "none",
        }}
      >
        {options.map(({ value, icon, name }) => {
          const isSelected = selectedCategory === value;

          return (
            <ButtonBase
              key={value}
              onClick={() => onSelectCategory(value)}
              sx={{
                minWidth: {
                  xs: 145,
                  md: "100%",
                },
                justifyContent: "flex-start",
                gap: 1.2,
                px: 2,
                py: 1.35,
                border:
                  "1px solid rgba(233, 198, 107, 0.45)",
                borderRadius: 1.5,
                bgcolor: isSelected
                  ? "#fff8de"
                  : "rgba(255, 255, 255, 0.9)",
                color: isSelected
                  ? "custom.deepGreen"
                  : "text.primary",
                boxShadow: isSelected
                  ? "inset 3px 0 0 #F4C316"
                  : "none",
              }}
            >
              <Typography
                sx={{
                  color: isSelected
                    ? "custom.yellowSpecial3"
                    : "custom.deepGreen",
                  fontSize: 17,
                }}
              >
                {icon}
              </Typography>

              <Typography
                variant="bodyLarge"
                sx={{
                  fontWeight: isSelected ? 700 : 500,
                }}
              >
                {name}
              </Typography>
            </ButtonBase>
          );
        })}
      </Stack>
    </Box>
  );
}