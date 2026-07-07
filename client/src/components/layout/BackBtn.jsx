import { Box, ButtonBase, Typography } from "@mui/material"
import { Link as RouteLink, useLocation } from "react-router-dom"

export function BackBtn() {
  const { pathname } = useLocation()
  const label = pathname === "/reservation" ? "Back to Home" : "Back to Menu"
  return (
    <Box sx={{ width: "100%", minHeight: 62, bgcolor: "rgba(243,240,234,.96)", borderBottom: "1px solid rgba(24,62,50,.12)", display: "flex", alignItems: "center", px: { xs: 2.5, md: 5 } }}>
      <ButtonBase component={RouteLink} to="/" onClick={() => window.scrollTo(0,0)} sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 1, py: 1 }}>
        <Typography sx={{ fontSize: 36, lineHeight: 1, fontWeight: 300 }}>‹</Typography>
        <Typography variant="bodyLarge" sx={{ fontWeight: 500 }}>{label}</Typography>
      </ButtonBase>
    </Box>
  )
}
