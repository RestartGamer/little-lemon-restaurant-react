import { Box, Stack } from "@mui/material";
import { logoNew } from "../../assets";

export function Footer() {
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        py: {
          xs: 3.5,
          md: 4.5,
        },
        background:
          "linear-gradient(90deg, #fff4c9, #fff9e8, #fff4c9)",
        borderTop: "1px solid rgba(233, 198, 107, 0.45)",
      }}
    >
      <Box
        component="img"
        src={logoNew}
        sx={{
          width: {
            xs: 180,
            md: 220,
          },
          objectFit: "contain",
        }}
      />
    </Stack>
  );
}