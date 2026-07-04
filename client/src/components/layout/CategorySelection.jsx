import { Stack, Typography, ButtonBase, Box } from "@mui/material"

const options = [
  ["★", "Today's Special"], ["◉", "Chicken"], ["◌", "Beef"], ["◍", "Fish"],
  ["◫", "Entrées"], ["◒", "Vegan"], ["◐", "Salad"], ["▰", "Dessert"], ["▯", "Beverages"],
]

export function CategorySelection() {
  return (
    <Box sx={{ width: { xs: "100%", md: 210 }, flexShrink: 0, p: { xs: 2, md: 0 } }}>
      <Stack direction={{ xs: "row", md: "column" }} sx={{ gap: 1.2, overflowX: { xs: "auto", md: "visible" }, scrollbarWidth: "none" }}>
        {options.map(([icon, name], index) => (
          <ButtonBase key={name} sx={{ minWidth: { xs: 145, md: "100%" }, justifyContent: "flex-start", gap: 1.2, px: 2, py: 1.35,
            border: "1px solid rgba(233,198,107,.45)", borderRadius: 1.5, bgcolor: index === 0 ? "#fff8de" : "rgba(255,255,255,.9)",
            color: index === 0 ? "custom.deepGreen" : "text.primary", boxShadow: index === 0 ? "inset 3px 0 0 #F4C316" : "none" }}>
            <Typography sx={{ color: index === 0 ? "custom.yellowSpecial3" : "custom.deepGreen", fontSize: 17 }}>{icon}</Typography>
            <Typography variant="bodyLarge" sx={{ fontWeight: index === 0 ? 700 : 500 }}>{name}</Typography>
          </ButtonBase>
        ))}
      </Stack>
    </Box>
  )
}
