import { Typography, ButtonBase } from "@mui/material"
import { Link as RouteLink } from "react-router-dom"

export function ReserveTableBtnBlack() {
  return (
    <ButtonBase component={RouteLink} to="/reservation" onClick={() => window.scrollTo(0,0)} sx={{
      bgcolor: "custom.deepGreen", px: { xs: 3, md: 4 }, py: { xs: 1.4, md: 1.7 }, borderRadius: 2,
      border: "2px solid rgba(255,255,255,.9)", boxShadow: "0 8px 24px rgba(0,0,0,.22)", color: "white",
      transition: "transform .2s ease", "&:hover": { transform: "translateY(-2px)", bgcolor: "#214d40" }
    }}>
      <Typography sx={{ mr: 1.3, fontSize: 21 }}>▣</Typography>
      <Typography variant="bigButtonTitle" sx={{ color: "white", letterSpacing: ".2px" }}>Reserve a table</Typography>
    </ButtonBase>
  )
}
