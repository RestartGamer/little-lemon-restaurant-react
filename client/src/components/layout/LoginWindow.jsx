import { useState, useEffect, useRef } from "react"
import { Box, Stack, Typography, ButtonBase, FormControl, TextField, FormHelperText, InputLabel } from "@mui/material"
import { convert } from "../../utils/muiConverter"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "../../../../shared/config/schema"

import { useLoading, useAuth } from "../../context";

export function LoginWindow({ loginWindowRef, setIsOpenCart }) {
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

    const {
        isPageLoading,
        loadingMessage,
        startLoading,
        stopLoading,
    } = useLoading();

    const { loginUser, registerUser, checkAuth } = useAuth();
    const [serverError, setServerError] = useState("")

    async function handleLogin(data) {
        try {
            setServerError("")
            startLoading();
            await loginUser(data.email, data.password);
            setIsOpenCart(false)
            checkAuth()
        } catch (error) {
            setServerError(error.message)
            checkAuth();
        }

    }

    async function handleRegister(data) {
        try {
            setServerError("")
            startLoading();
            await registerUser(data.email, data.password);
            setIsOpenCart(false)
            checkAuth();
        } catch (error) {
            setServerError(error.message)
            checkAuth();
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