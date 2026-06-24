import { useLayoutEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { heroImage2 } from "../assets";
import { ReserveTableBtnBlack } from "../components";

const imageAlt = "Image of a dish";

export function HeroSection() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useLayoutEffect(() => {
    function updateNavbarHeight() {
      const navbar = document.querySelector(".Navbar");
      const height = navbar?.getBoundingClientRect().height ?? 0;

      setNavbarHeight(height);
    }

    updateNavbarHeight();

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  console.log(navbarHeight);

  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "flex-start",
        position: "relative",
        bgcolor: "grey",
        overflow: "clip",
        maxHeight: {
          xs: "258px",
          md: `calc(100vh - ${navbarHeight}px)`,
        },
      }}
    >
      <Box
        component="img"
        src={heroImage2}
        alt={imageAlt}
        sx={{
          objectFit: "cover",
          transform: "scaleX(-1)",
          width: "100%",
          height: "100%",
          objectPosition: "30% 67%",
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 30,
        }}
      >
        <ReserveTableBtnBlack />
      </Box>
    </Stack>
  );
}