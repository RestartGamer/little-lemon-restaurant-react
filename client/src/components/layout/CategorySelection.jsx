import { Stack, Typography, ButtonBase } from "@mui/material"
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

function CategoryBtn({ children }) {
    return (
        <ButtonBase component="button" sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0,

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

export function CategorySelection() {
    return (
        <Stack sx={{
            width: "100%",
            overflow: "clip",
            px: convert(21),
            py: convert(21),
        }}>
            <Stack direction="row" sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                overflowX: "auto",
                scrollbarWidth: "none",
                
                gap: convert(35),
                borderLeft: "1px solid",
                borderRight: "1px solid",
                borderColor: "black",
                py: convert(11)
            }}>
                {options.map(({ id, name }) => {
                    return (
                        <CategoryBtn key={id}>
                            {name}
                        </CategoryBtn>
                    )
                })}

            </Stack>
        </Stack>
    )
}