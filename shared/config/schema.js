import { z } from "zod";

export const Schema = z.object({
  name: z.string().min(3, "3 characters minimum"),

  phoneNumber: z
    .string()
    .min(9, "Please insert a valid phone number"),

  email: z
    .email("Please insert a valid email address"),

  date: z
    .string()
    .min(1, "Please choose a date"),

  time: z
    .string()
    .min(1, "Please choose a time"),

  numberOfPeople: z
    .coerce
    .number()
    .min(1, "Please state a number"),

  message: z
    .string()
    .min(10, "10 characters minimum"),
});

export const AuthSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})