import { Stack } from "@mui/material"

export function ContentSection({ children }) {
  return (
    <Stack className="ContentSection" sx={{
      width: { xs: "100%", md: "min(1420px, 86%)" },
      alignItems: "center",
      justifyContent: "flex-start",
      bgcolor: "rgba(255,253,248,0.94)",
      borderLeft: { md: "1px solid rgba(233,198,107,.35)" },
      borderRight: { md: "1px solid rgba(233,198,107,.35)" },
      pb: { xs: 4, md: 7 },
      minHeight: "60vh",
    }}>
      {children}
    </Stack>
  )
}
