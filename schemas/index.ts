import * as z from 'zod';


export const SettingSchema = z.object({
  name: z.optional(z.string())
})


export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
      message: "Minimum of 6 character required!"
  }),
}) 



export const ResetSchema = z.object({
  email: z.string().email({
      message: "Email is required, try again!"
  }),
}) 


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid mail, try again!"
    }),
    password: z.string().min(1,{message: "Password is required"}),
    code: z.optional(z.string())
}) 


export const RoleEnum = z.enum(["USER", "ADMIN"]);


export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  password: z.string().min(1, { message: "Password is required" }),
  // role: RoleEnum,
});