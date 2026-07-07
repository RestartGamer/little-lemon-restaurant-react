import {
  Box,
  Stack,
  Typography,
} from "@mui/material"

import { AddToCartBtn } from "../components"

export function HighlightReelSection({
  items = [],
}) {
  if (!items.length) {
    return null
  }

  const item = items[0]

  return (
    <Stack
      direction="row"
      sx={{
        width: "calc(100% - 32px)",
        maxWidth: 760,
        minHeight: 125,
        mt: 3,

        overflow: "hidden",

        borderRadius: 2.5,
        border: "1px solid rgba(233,198,107,.4)",

        bgcolor: "rgba(255,255,255,.96)",
        boxShadow: "0 6px 20px rgba(38,43,35,.06)",
      }}
    >
      <Box
        component="img"
        src={item.src}
        alt={item.title}
        sx={{
          width: {
            xs: 135,
            md: 190,
          },

          objectFit: "cover",
        }}
      />

      <Stack
        sx={{
          flex: 1,
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="bigCardTitle"
          sx={{
            color: "custom.deepGreen",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="bodyMedium"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          {item.description}
        </Typography>

        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center"
          }}

        >
          <Typography
            variant="bodyLarge"
            sx={{
              fontWeight: 700,
            }}
          >
            ${Number(item.price).toFixed(2)}
          </Typography>

          <AddToCartBtn
            item={item}
            typography="bodyMedium"
          />
        </Stack>
      </Stack>
    </Stack>
  )
}