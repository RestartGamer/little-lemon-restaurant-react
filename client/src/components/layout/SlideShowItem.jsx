import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { AddToCartBtn } from "../../components";

const imageRatio = 169 / 190;

export function SlideShowItem({
  items,
  item,
  id,
  description,
  descriptionLong,
  highlights,
  title,
  price,
  src,
}) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <Stack
      className="SlideShowItem__Container"
      direction="row"
      sx={{
        width: "100%",
        minHeight: 190,
        bgcolor: "rgba(255, 255, 255, 0.96)",
        border: "1px solid rgba(233, 198, 107, 0.45)",
        borderRadius: 2.5,
        overflow: "hidden",
        boxShadow: "0 7px 20px rgba(35, 45, 40, 0.08)",
      }}
    >
      <ButtonBase
        className="SlideShowItem__ImageLink"
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
        onClick={handleClick}
        sx={{
          width: "48%",
          minWidth: 130,
          alignSelf: "stretch",
        }}
      >
        <Box
          className="SlideShowItem__Image"
          component="img"
          src={src}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            minHeight: 190,
            objectFit: "cover",
            aspectRatio: imageRatio,
          }}
        />
      </ButtonBase>

      <Stack
        className="SlideShowItem__Content"
        sx={{
          width: "52%",
          p: 2,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className="SlideShowItem__Title"
          variant="bigCardTitle"
          sx={{
            lineHeight: 1.02,
            color: "text.primary",
          }}
        >
          {title}
        </Typography>

        <Typography
          className="SlideShowItem__Price"
          variant="bodyLarge"
          sx={{
            fontWeight: 600,
          }}
        >
          ${Number(price).toFixed(2)}
        </Typography>

        <Box className="SlideShowItem__AddToCart">
          <AddToCartBtn
            item={item}
            typography="bodyMedium"
            buttonSx={{
              width: "100%",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}