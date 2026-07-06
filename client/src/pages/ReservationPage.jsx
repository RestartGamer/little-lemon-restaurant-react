/* eslint-disable react-refresh/only-export-components */

import { useReducer } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Box,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

import {
  BackBtn,
  SectionTitle as PageTitle,
} from "../components"

import { ContentSection } from "../sections"
import { Schema } from "../config/schema"

export function initializeTimes() {
  return window.fetchAPI
    ? window.fetchAPI(new Date())
    : []
}

export function updateTimes(_state, action) {
  return window.fetchAPI
    ? window.fetchAPI(new Date(action.date))
    : []
}

function FieldContainer({ label, children }) {
  return (
    <Stack
      className="ReservationField"
      spacing={1}
      sx={{
        width: "100%",
      }}
    >
      <InputLabel
        className="ReservationFieldLabel"
        sx={{
          color: "text.primary",
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {label}
      </InputLabel>

      {children}
    </Stack>
  )
}

function FormRow({ children }) {
  return (
    <Stack
      className="ReservationFormRow"
      direction={{
        xs: "column",
        sm: "row",
      }}
      sx={{
        gap: 2,
      }}
    >
      {children}
    </Stack>
  )
}

function FormColumn({ children }) {
  return (
    <Box
      className="ReservationFormColumn"
      sx={{
        flex: 1,
      }}
    >
      {children}
    </Box>
  )
}

function FormTextField({
  name,
  label,
  register,
  errors,
  onValueChange,
  children,
  ...textFieldProps
}) {
  const registration = register(name)
  const fieldError = errors[name]

  function handleChange(event) {
    registration.onChange(event)

    if (onValueChange) {
      onValueChange(event.target.value)
    }
  }

  return (
    <FieldContainer label={label}>
      <TextField
        className="ReservationTextField"
        fullWidth
        {...textFieldProps}
        {...registration}
        onChange={handleChange}
        error={Boolean(fieldError)}
        helperText={fieldError?.message}
      >
        {children}
      </TextField>
    </FieldContainer>
  )
}

function SubmitButton() {
  return (
    <Box
      className="ReservationSubmitButton"
      component="button"
      type="submit"
      sx={{
        width: "100%",
        py: 1.8,
        mt: 1,

        border: 0,
        borderRadius: 2,

        bgcolor: "custom.yellowSpecial3",
        color: "custom.deepGreen",

        cursor: "pointer",
        boxShadow: "0 7px 18px rgba(244,195,22,.25)",

        transition: "transform 0.2s ease, box-shadow 0.2s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 9px 22px rgba(244,195,22,.32)",
        },
      }}
    >
      <Typography
        className="ReservationSubmitButtonText"
        variant="bigButtonTitle"
      >
        ▣ &nbsp; Submit Booking
      </Typography>
    </Box>
  )
}

export function ReservationPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm({
    resolver: zodResolver(Schema),
    mode: "onChange",
  })

  function onSubmit(data) {
    return window.submitAPI
      ? window.submitAPI(data)
      : false
  }

  function handleDateChange(date) {
    dispatch({ date })
  }

  return (
    <>
      <BackBtn />

      <ContentSection>
        <PageTitle title="Reservation Page" />

        <Stack
          className="ReservationForm"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "calc(100% - 32px)",
            maxWidth: 760,

            p: {
              xs: 2.5,
              md: 5,
            },

            gap: 3,
            bgcolor: "rgba(255,249,234,.93)",
            border: "1px solid rgba(233,198,107,.5)",
            borderRadius: 3,
            boxShadow: "0 10px 30px rgba(36,46,40,.08)",
          }}
        >
          <FormTextField
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            register={register}
            errors={errors}
          />

          <FormRow>
            <FormColumn>
              <FormTextField
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                register={register}
                errors={errors}
              />
            </FormColumn>

            <FormColumn>
              <FormTextField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email address"
                register={register}
                errors={errors}
              />
            </FormColumn>
          </FormRow>

          <FormRow>
            <FormColumn>
              <FormTextField
                name="date"
                label="Date"
                type="date"
                register={register}
                errors={errors}
                onValueChange={handleDateChange}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </FormColumn>

            <FormColumn>
              <FormTextField
                name="time"
                label="Time"
                select
                defaultValue=""
                register={register}
                errors={errors}
              >
                {availableTimes.map((time) => (
                  <MenuItem
                    className="ReservationTimeOption"
                    key={time}
                    value={time}
                  >
                    {time}
                  </MenuItem>
                ))}
              </FormTextField>
            </FormColumn>
          </FormRow>

          <FormTextField
            name="numberOfPeople"
            label="Number of People"
            type="number"
            placeholder="Enter number of guests"
            register={register}
            errors={errors}
            slotProps={{
              htmlInput: {
                min: 1,
              },
            }}
          />

          <FormTextField
            name="message"
            label="Additional Notes"
            multiline
            rows={4}
            placeholder="Any special requests or notes?"
            register={register}
            errors={errors}
          />

          <SubmitButton />
        </Stack>
      </ContentSection>
    </>
  )
}