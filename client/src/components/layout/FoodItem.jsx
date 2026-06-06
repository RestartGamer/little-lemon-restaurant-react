import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"
import { CustomButton } from "../../components"
import { useCart } from "../../context/CartContext";

const imageAspect = 113 / 73;
const routePath = "/details";

function TitleBox({ title, description }) {
    return (
        <Stack sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "42%",
            maxWidth: "1080px",

        }}>
            <Typography variant="cardTitle" sx={{
                color: "text.primary",
                textAlign: "start",
            }}>
                {title}
            </Typography>
            <Typography variant="bodyLarge" sx={{
                color: "text.primary",
                textAlign: "start",
            }}>
                {description}
            </Typography>
        </Stack>
    )
}

function DetailsBox({ addToCart = undefined, id, src, title, description, price, highlights }) {
    const item = {
        id,
        src,
        title,
        description,
        price,
        highlights,
    };
    return (
        <Stack sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: convert(9),
        }}>
            <Typography variant="bodyLarge" sx={{
                color: "text.primary",

            }}>
                ${price}
            </Typography>
            <CustomButton onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                addToCart(item)
            }}>
                Add to cart
            </CustomButton>
        </Stack>
    )
}

export function FoodItem({ id, src, title, description, price, highlights = [], isOpenMenu, isOpenCart }) {
    const { addToCart } = useCart();

    return (
        <Stack
            component={RouteLink}
            to={routePath}
            state={{ id, src, title, description, price, highlights }}
            direction="row" sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: convert(10),
                py: convert(5),
                textDecoration: "none"
            }}
            onClick={(event) => {
                if (isOpenMenu || isOpenCart ) {
                    event.preventDefault(); //prevents the RouteLink from functioning
                }
            }}>
            <Box component="img" src={src} alt={`An image of ${title}`} sx={{
                minWidth: "113px",
                maxWidth: "120px",
                width: "25.68%",
                aspectRatio: imageAspect,
                objectFit: "cover",
            }} />

            <TitleBox title={title} description={description} />
            <DetailsBox addToCart={addToCart} id={id} src={src} title={title} description={description} price={price} highlights={highlights} />
        
        </Stack>
    )
}