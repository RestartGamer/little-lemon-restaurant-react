import { Fragment } from "react"
import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { alpha } from "@mui/material/styles"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"
import { useCart } from "../../context/CartContext";
import { AddToCartBtn } from "../../components"

const imageAspect = 194 / 113;
const routePath = "/details";

function TitleAndDescription({ title, description }) {
    return (
        <Stack sx={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: "1080px",
            gap: "6px",
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
                lineHeight: 1
            }}>
                {description}
            </Typography>
        </Stack>
    )
}

function PriceAndCTA({ addToCart = undefined, id, src, title, description, price, highlights }) {
    const item = {
        id,
        src,
        title,
        description,
        price,
        highlights,
    };

    return (
        <Stack direction="row" sx={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: convert(9),
        }}>
            <Typography variant="bigCardTitle" sx={{
                color: "text.primary",

            }}>
                ${price}
            </Typography>
            <AddToCartBtn 
            item={item}
            buttonSx={{
                px:convert(8),
                py:convert(5),
            }}
            typography="cardTitle">
                Add to cart
            </AddToCartBtn>
        </Stack>
    )
}

export function FoodItem({ id, src, title, description, descriptionLong, price, highlights = [], isOpenMenu, isOpenCart }) {
    const { addToCart } = useCart();

    return (
        <Stack sx={{
            width:"100%",
            alignItems: "center"
        }}>
            <Stack
                component={RouteLink}
                to={routePath}
                state={{ id, src, title, description, descriptionLong, price, highlights }}
                direction="row" 
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: convert(10),
                    py: convert(5),
                    textDecoration: "none",
                    width:"fit-content"
                }}
                onClick={(event) => {
                    if (isOpenMenu || isOpenCart) {
                        event.preventDefault(); //prevents the RouteLink from functioning
                    }
                }}>
                <Box component="img" src={src} alt={`An image of ${title}`} sx={{
                    minWidth: "113px",
                    maxWidth: "200px",
                    width: "194px",
                    aspectRatio: imageAspect,
                    objectFit: "cover",
                    borderRadius: "6px"
                }} />
                <Stack sx={{
                    width:"180px",
                    gap: "10px",
                }}>
                    <TitleAndDescription title={title} description={description} />
                    <PriceAndCTA addToCart={addToCart} id={id} src={src} title={title} description={description} price={price} highlights={highlights} />
                </Stack>
            </Stack>
        </Stack>
    )
}