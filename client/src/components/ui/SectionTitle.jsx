import { Box, Typography } from "@mui/material"

export function SectionTitle({ title, id }) {
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: {
          xs: 3,
          md: 4,
        },
        scrollMarginTop: "110px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "min(620px, 88%)",
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: "custom.softGold",
          }}
        />

        <Typography
          variant="headingTitle"
          sx={{
            color: "custom.deepGreen",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: 24,
            height: 24,
            color: "custom.yellowSpecial3",
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          ❧
        </Box>

        <Box
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: "custom.softGold",
          }}
        />
      </Box>
    </Box>
  )
}
