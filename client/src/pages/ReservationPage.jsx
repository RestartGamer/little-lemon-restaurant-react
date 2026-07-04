/* eslint-disable react-refresh/only-export-components */
import { SectionTitle as PageTitle, BackBtn } from "../components"
import { ContentSection } from "../sections"
import { Stack, InputLabel, TextField, Box, Typography, MenuItem } from "@mui/material"
import { useReducer } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Schema } from "../config/schema"

export function initializeTimes() { return window.fetchAPI ? window.fetchAPI(new Date()) : [] }
export function updateTimes(state, action) { return window.fetchAPI ? window.fetchAPI(new Date(action.date)) : [] }

function Field({ label, children }) {
  return <Stack spacing={1}><InputLabel sx={{ color: "text.primary", fontWeight: 600, fontSize: 16 }}>{label}</InputLabel>{children}</Stack>
}

export function ReservationPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(Schema), mode: "onChange" })
  function onSubmit(data) { return window.submitAPI ? window.submitAPI(data) : false }
  const common = { fullWidth: true, error: false }

  return (
    <><BackBtn /><ContentSection><PageTitle title="Reservation Page" />
      <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: "calc(100% - 32px)", maxWidth: 760, p: { xs: 2.5, md: 5 }, gap: 3,
        bgcolor: "rgba(255,249,234,.93)", border: "1px solid rgba(233,198,107,.5)", borderRadius: 3, boxShadow: "0 10px 30px rgba(36,46,40,.08)" }}>
        <Field label="Full Name"><TextField {...common} placeholder="Enter your full name" {...register("name")} error={!!errors.name} helperText={errors.name?.message} /></Field>
        <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
          <Box sx={{ flex: 1 }}><Field label="Phone Number"><TextField {...common} placeholder="Enter your phone number" {...register("phoneNumber")} error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message} /></Field></Box>
          <Box sx={{ flex: 1 }}><Field label="Email"><TextField {...common} placeholder="Enter your email address" {...register("email")} error={!!errors.email} helperText={errors.email?.message} /></Field></Box>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
          <Box sx={{ flex: 1 }}><Field label="Date"><TextField {...common} type="date" {...register("date")} error={!!errors.date} helperText={errors.date?.message} onChange={(e) => { register("date").onChange(e); dispatch({ date: e.target.value }) }} /></Field></Box>
          <Box sx={{ flex: 1 }}><Field label="Time"><TextField {...common} select defaultValue="" {...register("time")} error={!!errors.time} helperText={errors.time?.message}>{availableTimes.map(time => <MenuItem key={time} value={time}>{time}</MenuItem>)}</TextField></Field></Box>
        </Stack>
        <Field label="Number of People"><TextField {...common} placeholder="Select number of guests" {...register("numberOfPeople")} error={!!errors.numberOfPeople} helperText={errors.numberOfPeople?.message} /></Field>
        <Field label="Additional Notes"><TextField {...common} multiline rows={4} placeholder="Any special requests or notes?" {...register("message")} error={!!errors.message} helperText={errors.message?.message} /></Field>
        <Box component="button" type="submit" sx={{ border: 0, width: "100%", py: 1.8, mt: 1, bgcolor: "custom.yellowSpecial3", borderRadius: 2,
          cursor: "pointer", boxShadow: "0 7px 18px rgba(244,195,22,.25)", color: "custom.deepGreen" }}>
          <Typography variant="bigButtonTitle">▣ &nbsp; Submit Booking</Typography>
        </Box>
      </Stack>
    </ContentSection></>
  )
}
