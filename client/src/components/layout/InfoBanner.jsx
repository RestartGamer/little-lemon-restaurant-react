import { Box, Typography } from "@mui/material"
export function InfoBanner() {
  return (
    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, width: "100%", px: { xs: 2, md: 5 }, mb: 2 }}>
      <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 2, py: 1, borderRadius: 999,
        bgcolor: "rgba(255,249,234,.92)", border: "1px solid rgba(233,198,107,.45)" }}>
        <Typography sx={{ fontSize: 18 }}>◷</Typography>
        <Typography variant="bodyMedium">Est. delivery time <Box component="span" sx={{ fontWeight: 700 }}>20 minutes</Box></Typography>
      </Box>
    </Box>
  )
}
