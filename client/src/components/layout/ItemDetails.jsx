import { Box, Stack, Typography } from "@mui/material"

function Highlights({ highlights = [] }) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} sx={{ width: "100%", justifyContent: "center", gap: 1.5, mt: 2.5 }}>
      {highlights.map((highlight) => (
        <Box key={highlight} sx={{ px: 2.2, py: 1.1, borderRadius: 999, bgcolor: "#F0F2DA", border: "1px solid rgba(120,137,75,.16)" }}>
          <Typography variant="bodyMedium" sx={{ color: "#34422f", fontWeight: 600 }}>{highlight}</Typography>
        </Box>
      ))}
    </Stack>
  )
}

export function ItemDetails({ src, title, descriptionLong, price, highlights }) {
  return (
    <Stack sx={{ width: "calc(100% - 32px)", maxWidth: 980, mt: { xs: 2, md: 4 }, p: { xs: 2, md: 3 }, borderRadius: 3,
      bgcolor: "rgba(255,255,255,.96)", boxShadow: "0 10px 30px rgba(28,45,37,.09)", border: "1px solid rgba(233,198,107,.28)" }}>
      <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 2.5, md: 4 }}>
        <Box component="img" src={src} alt={title} sx={{ width: { xs: "100%", md: "48%" }, aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 2.5 }} />
        <Stack sx={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
          <Typography variant="headingTitle" sx={{ color: "text.primary", lineHeight: 1 }}>{title}</Typography>
          <Typography sx={{ fontFamily: `"Markazi Text", serif`, fontSize: 34, mt: 1 }}>${Number(price || 0).toFixed(2)}</Typography>
          <Typography variant="bodyLarge" sx={{ mt: 1.5, lineHeight: 1.45, color: "#404743" }}>{descriptionLong}</Typography>
        </Stack>
      </Stack>
      <Highlights highlights={highlights} />
    </Stack>
  )
}
