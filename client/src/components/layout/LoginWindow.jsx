import { useState, useEffect, useRef } from "react"
import { Box, Stack, Typography, ButtonBase, FormControl, TextField, FormHelperText, InputLabel } from "@mui/material"
import { convert } from "../../utils/muiConverter"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "../../../../shared/config/schema"

import { useLoading, useAuth } from "../../context";

function CustomInput({ children, errors, register }) {
    const subject = children.toLowerCase()
    return (
        <FormControl error={Boolean(errors[subject])}>
            <Typography variant="bodyMedium" sx={{
                color: "text.primary",
                textAlign: "start"
            }}>
                {children}
            </Typography>
            <TextField
                {...register(subject)}
                error={Boolean(errors[subject])}
            />
            <FormHelperText>
                {errors[subject]?.message}
            </FormHelperText>
        </FormControl>
    )
}

function CustomBtn({ children, onClick }) {

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                px: convert(30),
                py: convert(7),
                border: "1px solid",
                borderColor: "black",
                borderRadius: "4px",
                width: "50%",
                maxWidth: "300px"
            }}>
            <Typography variant="cardTitle" sx={{
                color: "text.primary",
            }}>
                {children}
            </Typography>

        </ButtonBase>
    )
}



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
                width: "374px",
                gap: convert(30),
                px: convert(45),
                pt: convert(48),
                pb: convert(76),
                border: "1px solid",
                borderColor: "black",
                borderRadius: "7px",
            }}
        >
            <Typography variant="bigButtonTitle">
                Enter here
            </Typography>
            <Stack
                sx={{
                    gap: convert(20),
                }}>
                <CustomInput errors={errors} register={register}>
                    Email
                </CustomInput>

                <CustomInput errors={errors} register={register}>
                    Password
                </CustomInput>
            </Stack>


            <Stack sx={{
                alignItems: "center",

            }}>
                <CustomBtn onClick={handleSubmit(handleLogin)}>
                    Login
                </CustomBtn>
                <Typography variant="bodyLarge">
                    or
                </Typography>
                <CustomBtn onClick={handleSubmit(handleRegister)}>
                    Register
                </CustomBtn>

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