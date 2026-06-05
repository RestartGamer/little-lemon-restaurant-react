import { Box, Stack, Typography, ButtonBase, Button } from "@mui/material"
import { Link as RouteLink } from "react-router-dom"
import { convert } from "../../utils/muiConverter"

let optionsId = 0;
const options = [
    { id: optionsId++, name: "Chicken", filter: "chicken" },
    { id: optionsId++, name: "Beef", filter: "beef" },
    { id: optionsId++, name: "Fish", filter: "fish" },
    { id: optionsId++, name: "Entrées", filter: "appetizer" },
    { id: optionsId++, name: "Vegan", filter: "vegan" },
    { id: optionsId++, name: "Salad", filter: "salad" },
    { id: optionsId++, name: "Dessert", filter: "dessert" },
    { id: optionsId++, name: "Beverages", filter: "beverage" },
]

function SelectionBtn({ children }) {
    return (
        <ButtonBase component="button" sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            p:0,
            
            bgcolor: "custom.buttonSpecial",
            px: convert(4),

            boxSizing: "content-box",
            border: "1px solid",
            borderColor: "custom.borderNormal",
            borderRadius: "3px",

        }}>
            <Typography variant="cardTitle" sx={{
                color: "text.primary",
            }}>
                {children}
            </Typography>
        </ButtonBase>
    )
}

export function SelectionMenu() {
    return (
        <Stack direction="row" sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            overflowX: "auto",
            scrollbarWidth: "none",
            pl: convert(21),
            py: convert(21),
            gap: convert(35),

            borderBlock: "1px solid",
            bordercolor: "custom.borderNormal"
        }}>
            {options.map(({ id, name, filter }) => {
                return (
                    <SelectionBtn key={id}>
                        {name}
                    </SelectionBtn>
                )
            })}

        </Stack>
    )
}