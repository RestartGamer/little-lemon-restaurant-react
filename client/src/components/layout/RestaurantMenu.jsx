import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { NavigationBtn } from "../../components"
import { useState, useEffect } from "react"

function MenuBook({ items, catState }) {
    const itemsFiltered = items?.filter((item) => item.category == catState)
    const categoryName = itemsFiltered[0]?.categoryName ?? "Meats";

    return (
        <Stack sx={{
            width: "70%",
            bgcolor: "custom.yellowSpecial",
            px: convert(21),
            py: convert(15),

        }}>
            <Stack sx={{
                width: "100%",
                gap: convert(17)
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",

                }}>
                    <Typography variant="sectionTitle" sx={{
                        color: "text.primary",
                        textAlign: "center",
                        fontFamily: `"Markazi Text, sans-serif`
                    }}>
                        {categoryName}
                    </Typography>
                </Box>

                {itemsFiltered.map(({ title, price }) => {
                    return (
                        <Stack direction="row" sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>
                                <Typography variant="bodyLarge" sx={{
                                    color: "text.primary",
                                    textAlign: "start"
                                }}>
                                    {title}
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>
                                <Typography variant="bodyLarge" sx={{
                                    color: "text.primary",
                                    textAlign: "start"
                                }}>
                                    ${price}
                                </Typography>
                            </Box>
                        </Stack>
                    )
                })}

            </Stack>


        </Stack>
    )
}

function MenuBookSelection({ setCatState }) {
    const menuOptions = ["fish", "vegan", "drink", "meat"];
    return (
        <Stack sx={{
            width: "30%",
            alignItems: "stretch",
        }}>
            {menuOptions.map((menuOption) => {
                return (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        px: convert(20),
                        py: convert(42),
                        border: "1px solid",
                        borderColor: "background.paper",
                    }}>
                        <ButtonBase
                            onClick={() => setCatState(menuOption)}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap: convert(15),
                                alignItems: "center",
                                width: "100%",
                            }}>
                            <Box>
                                <NavigationBtn orientation="right" />
                            </Box>
                            <Typography>
                                {menuOption.charAt(0).toUpperCase() + menuOption.slice(1)}
                            </Typography>
                        </ButtonBase>
                    </Box>
                )
            })}
        </Stack>
    )
}


export function RestaurantMenu({ items }) {
    const [catState, setCatState] = useState("meat");
    useEffect(() => {
        console.log(catState)
    }, [catState])

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            maxWidth: "500px",
            px: convert(30),

        }}>
            <Stack direction="row" sx={{
                alignItems: "stretch",
                justifyContent: "center",
                width: "100%",
            }}>
                <MenuBook catState={catState} items={items} />
                <MenuBookSelection setCatState={setCatState} />
            </Stack>
        </Box>
    )
}