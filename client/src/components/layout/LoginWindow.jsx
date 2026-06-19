import { useState, useEffect, useRef } from "react"
import { Box, Stack, Typography, ButtonBase, FormControl, TextField, FormHelperText, InputLabel } from "@mui/material"
import { convert } from "../../utils/muiConverter"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "../../../../shared/config/schema"

import { useAuth } from "../../context/AuthContext";

export function LoginWindow({ loginWindowRef }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(AuthSchema),
        mode: "onChange",
        defaultValues: {
            name: "dummy",
            email: "dummy@dummy.com",
            password: "dummypass",
        },
    });

    const { loginUser, registerUser } = useAuth();
    const [serverError, setServerError] = useState("")

    async function handleLogin(data) {
        try {
            setServerError("")
            await loginUser(data.email, data.password);
        } catch (error) {
            setServerError(error.message)
        }

    }

    async function handleRegister(data) {
        try {
            setServerError("")
            await registerUser(data.email, data.password);
        } catch (error) {
            setServerError(error.message)
        }
    }

    return (
        <Stack
            component="form"
            ref={loginWindowRef}
            onClick={(event) => event.stopPropagation()}
            sx={{
                position: "fixed",
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "background.paper",
            }}
        >
            <Typography variant="bigButtonTitle">
                Enter here
            </Typography>

            <FormControl error={Boolean(errors.email)}>
                <TextField
                    label="Email"
                    {...register("email")}
                    error={Boolean(errors.email)}
                />
                <FormHelperText>
                    {errors.email?.message}
                </FormHelperText>
            </FormControl>

            <FormControl error={Boolean(errors.password)}>
                <TextField
                    label="Password"
                    type="password"
                    {...register("password")}
                    error={Boolean(errors.password)}
                />
                <FormHelperText>
                    {errors.password?.message}
                </FormHelperText>
            </FormControl>

            <Stack>
                <ButtonBase onClick={handleSubmit(handleLogin)}>
                    Login
                </ButtonBase>

                <Typography variant="bodyLarge">
                    or
                </Typography>

                <ButtonBase onClick={handleSubmit(handleRegister)}>
                    Register
                </ButtonBase>
                {
                    serverError && (
                        <Typography sx={{ color: "error.main" }}>
                            {serverError}
                        </Typography>
                    )

                }
            </Stack>
        </Stack>
    );
}