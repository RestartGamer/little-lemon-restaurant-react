import { useState, useEffect, useRef } from "react"
import { Box, Stack, Typography, ButtonBase, FormControl, TextField, FormHelperText, InputLabel } from "@mui/material"
import { convert } from "../../utils/muiConverter"

export function LoginWindow({ error = false, login, register, email, password, loginWindowRef }) {

    return (
        <Stack ref={loginWindowRef} 
        onClick={(event) => event.stopPropagation()}
        sx={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "background.paper"
        }}>

            <Typography variant="bigButtonTitle" sx={{
                color: "text.primary",
            }}>
                Enter here
            </Typography>


            <Stack>
                <Stack>
                    <FormControl>
                        <InputLabel>
                            Email
                        </InputLabel>
                        <TextField>
                            {
                                error &&
                                <FormHelperText>

                                </FormHelperText>
                            }
                        </TextField>
                    </FormControl>
                </Stack>
                <Stack>
                    <FormControl>
                        <InputLabel>
                            Password
                        </InputLabel>
                        <TextField>
                            {
                                error &&
                                <FormHelperText>

                                </FormHelperText>
                            }
                        </TextField>
                    </FormControl>
                </Stack>
            </Stack>

            <Stack> {/*button section*/}
                <ButtonBase onClick={() => login(email, password)}>
                    Login
                </ButtonBase>
                <Typography variant="bodyLarge">
                    or
                </Typography>
                <ButtonBase onClick={() => register(email, password)}>
                    Register
                </ButtonBase>
            </Stack>

        </Stack>
    )
}