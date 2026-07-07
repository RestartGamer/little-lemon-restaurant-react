import { Stack, Typography } from "@mui/material"

export function BottomInfo() {
  return (
    <Stack direction="row" sx={{ width: "100%", justifyContent: "center", alignItems: "center", gap: 4,
      py: 3, bgcolor: "custom.bottomInfoBg", borderTop: "1px solid rgba(24,62,50,.08)" }}>
      <Typography variant="bodyLarge">Legal</Typography>
      <Typography sx={{ color: "custom.borderGrey1" }}>|</Typography>
      <Typography variant="bodyLarge">Contact</Typography>
    </Stack>
  )
}
