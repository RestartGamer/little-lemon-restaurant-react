import { Typography, ButtonBase } from "@mui/material"
import { Link as RouteLink } from "react-router-dom"

export function ReserveTableBtnYellow() {
  return (
    <ButtonBase
      component={RouteLink}
      to="/reservation"
      onClick={() => window.scrollTo(0, 0)}
      sx={{
        bgcolor: "custom.yellowSpecial3",

        px: {
          xs: 3,
          md: 4,
        },

        py: {
          xs: 1.4,
          md: 1.7,
        },

        borderRadius: "9px",

        transition: "transform .2s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          bgcolor: "#214d40",
        },
      }}
    >
      <Typography
        sx={{
          mr: 1.3,
          fontSize: 21,
        }}
      >
        ▣
      </Typography>

      <Typography
        variant="bigButtonTitle"
        sx={{
          color: "text.primary",
          letterSpacing: ".2px",
          whiteSpace: "nowrap"
        }}
      >
        Reserve a table
      </Typography>
    </ButtonBase>
  )
}