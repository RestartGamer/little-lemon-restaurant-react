import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { useState } from "react"

const categories = [
  ["meat", "Meats", "◆"], ["fish", "Fish", "◍"], ["vegan", "Vegan", "◒"], ["drink", "Drinks", "▯"]
]

export function MenuBook({ items = [] }) {
  const [catState, setCatState] = useState("meat")
  const itemsFiltered = items.filter(item => item.category === catState)
  const visibleItems = itemsFiltered.length ? itemsFiltered : items.slice(0, 6)

  return (
    <Box sx={{ width: "calc(100% - 32px)", maxWidth: 980, pb: 3 }}>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ borderRadius: 3, overflow: "hidden", border: "1px solid rgba(233,198,107,.35)", bgcolor: "rgba(255,255,255,.96)", boxShadow: "0 7px 22px rgba(30,45,38,.06)" }}>
        <Stack sx={{ width: { xs: "100%", md: 180 }, p: 2, gap: .7, borderRight: { md: "1px solid rgba(233,198,107,.3)" }, flexDirection: { xs: "row", md: "column" }, overflowX: "auto" }}>
          {categories.map(([value,label,icon]) => (
            <ButtonBase key={value} onClick={() => setCatState(value)} sx={{ minWidth: { xs: 110, md: "100%" }, justifyContent: "flex-start", gap: 1, px: 1.5, py: 1.2, borderRadius: 1.5, bgcolor: catState === value ? "#fff7d7" : "transparent", color: catState === value ? "custom.deepGreen" : "text.primary", boxShadow: catState === value ? "inset 3px 0 0 #F4C316" : "none" }}>
              <Typography>{icon}</Typography><Typography variant="bodyLarge" sx={{ fontWeight: 600 }}>{label}</Typography>
            </ButtonBase>
          ))}
        </Stack>
        <Stack sx={{ flex: 1, p: { xs: 2.2, md: 3 }, bgcolor: "#FFF9E9" }}>
          <Typography variant="sectionTitle" sx={{ color: "custom.deepGreen", mb: 1.5 }}>{categories.find(c => c[0] === catState)?.[1] || "Menu"}</Typography>
          {visibleItems.map((item, index) => (
            <Stack key={item.id ?? index} direction="row" sx={{ justifyContent: "space-between", alignItems: "center", py: 1.3, borderBottom: index === visibleItems.length - 1 ? 0 : "1px dashed rgba(125,115,90,.22)" }}>
              <Typography variant="bodyLarge">{item.title}</Typography>
              <Typography variant="bodyLarge" sx={{ fontWeight: 700 }}>${Number(item.price).toFixed(2)}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
