import { Box, Stack } from "@mui/material"
import { heroImage2 } from "../assets"
import { ReserveTableBtnBlack } from "../components"

export function HeroSection() {
  return (
    <Stack sx={{ width: "100%", position: "relative", overflow: "hidden", height: { xs: 310, md: "min(50vw, 470px)" }, bgcolor: "#d9c3a1" }}>
      <Box component="img" src={heroImage2} alt="Restaurant table ready for guests" sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: { xs: "50% 60%", md: "50% 58%" } }} />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.08),transparent 55%,rgba(0,0,0,.18))" }} />
      <Box sx={{ position: "absolute", left: "50%", bottom: { xs: 20, md: 28 }, transform: "translateX(-50%)" }}>
        <ReserveTableBtnBlack />
      </Box>
    </Stack>
  )
}
