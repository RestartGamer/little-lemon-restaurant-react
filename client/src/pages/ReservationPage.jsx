import { SectionTitle as PageTitle, BackBtn, HeaderExt } from "../components"
import {
  Stack,
  InputLabel,
  TextField,
  Box,
  Typography,
  MenuItem,
} from "@mui/material"

import { useReducer } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Schema } from "../../../shared/config/schema"
import { convert } from "../utils/muiConverter"

const pageTitle = "Reservation Page"

export function initializeTimes() {
  return window.fetchAPI ? window.fetchAPI(new Date()) : []
}

export function updateTimes(state, action) {
  return window.fetchAPI ? window.fetchAPI(new Date(action.date)) : []
}

function InputBox({ label, placeholder, zodId, register, error, textFieldProps = {} }) {
  return (
    <>
      <InputLabel htmlFor={zodId} sx={{ typography: "cardTitle", color: "text.primary" }}>
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

function DateField({ register, error, dispatch }) {
  const dateRegister = register("date")

  return (
    <Stack spacing={1}>
      <InputLabel htmlFor="date">Date</InputLabel>

      <TextField
        id="date"
        type="date"
        size="small"
        error={!!error}
        helperText={error?.message}
        {...dateRegister}
        onChange={(e) => {
          dateRegister.onChange(e)
          dispatch({ date: e.target.value })
        }}
        sx={{ width: "170px" }}
      />
    </Stack>
  )
}

function TimeField({ register, error, availableTimes }) {
  return (
    <Stack spacing={1}>
      <InputLabel htmlFor="time">Time</InputLabel>

      <TextField
        id="time"
        select
        size="small"
        defaultValue=""
        error={!!error}
        helperText={error?.message}
        {...register("time")}
        sx={{ width: "170px" }}
      >
        {availableTimes.map((time) => (
          <MenuItem key={time} value={time}>
            {time}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  )
}

export function ReservationPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
    mode: "onChange",
  })

  function onSubmit(data) {
    const success = window.submitAPI ? window.submitAPI(data) : false

    if (success) {
      console.log("Booking submitted:", data)
    }
  }

  return (
    <>
      <HeaderExt>
                      <BackBtn />
                  </HeaderExt>
      <PageTitle title={pageTitle} route="/" />

      <Stack sx={{ justifyContent: "flex-start", px: convert(28), mt: convert(27) }}>
        <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
          <InputBox label="Full Name" placeholder="Your Full Name" zodId="name" register={register} error={errors.name} />
          <InputBox label="Phone number" placeholder="Your phone number" zodId="phoneNumber" register={register} error={errors.phoneNumber} />
          <InputBox label="Email" placeholder="Your Email" zodId="email" register={register} error={errors.email} />

          <DateField register={register} error={errors.date} dispatch={dispatch} />

          <TimeField register={register} error={errors.time} availableTimes={availableTimes} />

          <InputBox label="Number of People" zodId="numberOfPeople" register={register} error={errors.numberOfPeople} />

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

          <Box
            component="button"
            type="submit"
            sx={{
              bgcolor: "custom.backgroundSpecial",
              border: "2px solid",
              borderColor: "custom.heroTitleBg",
              borderRadius: "5px",
              width: "100%",
              alignSelf: "center",
              py: convert(10),
              mt: convert(30),
              cursor: "pointer",
            }}
          >
            <Typography variant="cardTitle" sx={{ color: "text.primary" }}>
              Finish Booking
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}