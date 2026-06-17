import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { NavigationBtn } from "../../components"
import { useState, useEffect } from "react"

function MenuBook({ items, catState }) {
    const itemsFiltered = items.filter((item) => item.category == catState)
    const categoryName = itemsFiltered[0]?.categoryName ?? "Meats";

    return (
        <Stack sx={{
            width: "50%",
        }}>
            <Stack sx={{
                width: "100%",
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",

                }}>
                    <Typography variant="sectionTitle" sx={{
                        color: "text.primary",
                        textAlign: "center",
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
                                    {price}
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
            width: "50%"
        }}>
            {menuOptions.map((menuOption) => {
                return (
                    <Box>
                        <ButtonBase
                            onClick={() => setCatState(menuOption)}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Box>
                                <NavigationBtn orientationSx={{
                                    transform: "translate(45deg)",
                                }} />
                            </Box>
                            <Typography>
                                {menuOption}
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
            width: "100%",
            px: convert(30),

        }}>
            <Stack direction="row" sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",

            }}>
                <MenuBook catState={catState} items={items} />
                <MenuBookSelection setCatState={setCatState} />
            </Stack>
        </Box>
    )
}