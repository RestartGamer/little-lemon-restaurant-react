import { Typography, ButtonBase } from "@mui/material"
import { Link as RouteLink } from "react-router-dom"

export function ReserveTableBtnWhite() {
  return (
    <ButtonBase component={RouteLink} to="/reservation" onClick={() => window.scrollTo(0,0)} sx={{
      flex: 1, width: "100%", px: 4, py: 2, border: "1px solid rgba(24,62,50,.55)", borderRadius: 2,
      bgcolor: "rgba(255,255,255,.92)", boxShadow: "0 5px 16px rgba(30,45,38,.05)"
    }}>
      <Typography sx={{ mr: 1.2, fontSize: 20 }}>▣</Typography>
      <Typography variant="bigButtonTitle">Reserve a table</Typography>
    </ButtonBase>
  )
}
