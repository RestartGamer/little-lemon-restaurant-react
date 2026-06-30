import { Box, Stack, Typography, ButtonBase } from "@mui/material"
import { convert } from "../../utils/muiConverter"
import { NavBtnLayout } from ".."
import { useState, useEffect } from "react"

function MenuBookContent({ items, catState }) {
    const itemsFiltered = items?.filter((item) => item.category == catState)
    const categoryName = itemsFiltered[0]?.categoryName ?? "Meats";

    return (
        <Stack sx={{
            width: "70%",
            minWidth: "251px",
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
        <Box className="MenuBook__SelectionContent" sx={{
            width: "30%",
        }}>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                }}>
                {menuOptions.map((menuOption) => {
                    return (
                        <Box lassName="MenuBook__SelectionBtnContainer" sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            py: convert(42),
                            border: "1px solid",
                            borderColor: "background.paper",
                            width: "100%",
                            minWidth: "113px",
                        }}>
                            <ButtonBase className="MenuBook__SelectionBtnContent"
                                onClick={() => setCatState(menuOption)}
                                sx={{
                                    display: "flex",
                                    width: "60%",
                                    minWidth: "70px",
                                    maxWidth: "100px",
                                    justifyContent: "stretch",
                                    alignItems: "center",

                                }}>

                                <NavBtnLayout orientation="right" />

                                <Typography className="MenuBook__SelectionBtnText"
                                    sx={{
                                        ml: "auto",
                                    }}>
                                    {menuOption.charAt(0).toUpperCase() + menuOption.slice(1)}
                                </Typography>
                            </ButtonBase>
                        </Box>
                    )
                })}
            </Stack>
        </Box>
    )
}


export function MenuBook({ items }) {
    const [catState, setCatState] = useState("meat");
    useEffect(() => {
    }, [catState])

    return (
        <Box className="MenuBook__Container" sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            maxWidth: "500px",
            px: convert(30),
            pb: convert(50)

        }}>
            <Stack className="MenuBook__Content" direction="row" sx={{
                justifyContent: "center",
                width: "100%",
            }}>
                <MenuBookContent catState={catState} items={items} />
                <MenuBookSelection setCatState={setCatState} />
            </Stack>
        </Box>
    )
}