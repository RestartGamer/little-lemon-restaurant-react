import { Box, Stack, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { AddToCartBtn } from "../../components";


const imageRatio = 194 / 147;

export function FoodItem({
  items,
  id,
  src,
  title,
  description,
  descriptionLong,
  price,
  highlights = [],
  isOpenMenu,
  isOpenCart,
}) {
  const item = {
    id,
    src,
    title,
    description,
    price,
    highlights,
  };

  function handleClick(event) {
    if (isOpenMenu || isOpenCart) {
      event.preventDefault();
      return;
    }

    window.scrollTo(0, 0);
  }

  return (
    <Stack
      component={RouteLink}
      to="/details"
      state={{
        items,
        id,
        src,
        title,
        description,
        descriptionLong,
        price,
        highlights,
      }}
      direction="row"
      onClick={handleClick}
      sx={{
        width: "100%",
        minHeight: {
          xs: 130,
          md: 145,
        },
        textDecoration: "none",
        bgcolor: "rgba(255, 255, 255, 0.96)",
        border: "1px solid rgba(233, 198, 107, 0.35)",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 5px 16px rgba(27, 42, 35, 0.06)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 22px rgba(27, 42, 35, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: {
            xs: 135,
            md: 180,
          },
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={src}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            aspectRatio: imageRatio,
          }}
        />

        {id === 0 && (
          <Typography
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              px: 1,
              py: 0.45,
              bgcolor: "custom.yellowSpecial3",
              color: "white",
              borderRadius: 1,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            TODAY&apos;S SPECIAL
          </Typography>
        )}
      </Box>

      <Stack
        sx={{
          flex: 1,
          p: {
            xs: 1.4,
            md: 2,
          },
          gap: 0.6,
          minWidth: 0,
        }}
      >
        <Typography
          variant="bigCardTitle"
          sx={{
            lineHeight: 1.05,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="bodyMedium"
          sx={{
            lineHeight: 1.25,
            color: "#4b514e",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Stack
          direction="row"
          sx={{
            mt: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            variant="bodyLarge"
            sx={{
              fontWeight: 700,
            }}
          >
            ${Number(price).toFixed(2)}
          </Typography>

          <AddToCartBtn
            item={item}
            typography="bodyMedium"
            buttonSx={{
              px: {
                xs: 1.4,
                md: 2.3,
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}