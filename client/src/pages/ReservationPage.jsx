import { Navbar, PageTitle } from "../components"
import { Stack, InputLabel, TextField, Box, Typography } from "@mui/material"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Schema } from "../../../shared/config/schema"
import { convert } from "../utils/muiConverter"

const pageTitle = "Reservation Page"

function InputBox({ label, placeholder, zodId, register, error, textFieldProps = {} }) {
    return (
        <>
            <InputLabel
                htmlFor={zodId}
                sx={{
                    typography: "cardTitle",
                    color: "text.primary",
                }}
            >
                {label}
            </InputLabel>

            <TextField
                id={zodId}
                {...register(zodId)}
                placeholder={placeholder ?? ""}
                error={!!error}
                helperText={error?.message}
                {...textFieldProps}
            />
        </>
    )
}

function DateTimeField({ register, error }) {
    return (
        <Stack spacing={1}>
            <InputLabel htmlFor="dateTime">Date & Time</InputLabel>

            <TextField
                id="dateTime"
                type="datetime-local"
                size="small"
                {...register("dateTime")}
                error={!!error}
                helperText={error?.message}
                sx={{ width: "170px" }}
            />
        </Stack>
    )
}

export function ReservationPage() {
    const {
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(Schema),
        mode: "onChange",
    })

    return (
        <>
            <PageTitle title={pageTitle} route="/"/>
            <Stack sx={{
                justifyContent: "flex-start",
                alignItems: "space-between",
                px: convert(28),
                mt: convert(27),
            }}>

                

                <Stack component="form">
                    <InputBox
                        label="Full Name"
                        placeholder="Your Full Name"
                        zodId="name"
                        register={register}
                        error={errors.name}
                    />

                    <InputBox
                        label="Phone number"
                        placeholder="Your phone number"
                        zodId="phoneNumber"
                        register={register}
                        error={errors.phoneNumber}
                    />

                    <InputBox
                        label="Email"
                        placeholder="Your Email"
                        zodId="email"
                        register={register}
                        error={errors.email}
                    />

                    <DateTimeField register={register} error={errors.dateTime} />

                    <InputBox
                        label="Number of People"
                        zodId="numberOfPeople"
                        register={register}
                        error={errors.numberOfPeople}
                    />

                    <InputBox
                        label="Additional Notes"
                        zodId="message"
                        register={register}
                        error={errors.message}
                        textFieldProps={{
                            multiline: true,
                            rows: 4,
                            fullWidth: true,
                        }}
                    />
                    <Box sx={{
                        bgcolor: "custom.backgroundSpecial",
                        border: "2px solid",
                        borderColor: "custom.heroTitleBg",
                        borderRadius: "5px",
                        width: "100%",
                        alignSelf: "center",
                        py: convert(10),
                        mt: convert(30)

                    }}>
                        <Typography variant="cardTitle" sx={{
                            color: "text.primary"
                        }}>
                            Finish Booking
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}