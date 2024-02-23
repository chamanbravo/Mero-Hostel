import { z } from "zod";
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, {
      message: " Email must be a valid",
    })
    .max(255, {
      message: "Email must be a atmost 255 characters",
    })
    .email({
      message: "Invalid email",
    }),

  password: z
    .string({
      message_error: "Password is required",
    })
    .trim()
    .min(10, {
      message: "Password must be at least 10 characters",
    })
    .max(255, {
      message: "Password must be atmost 255 characters",
    }),
});

const registerSchema = loginSchema.extend({
  firstname: z
    .string({ required_error: "Firstname is required" })
    .trim()
    .min(3, { message: "Firstname must be a valid" })
    .max(255, { message: "Firstname must be a atmost 255 characters" }),

  lastname: z
    .string({ required_error: "Lastname is required" })
    .trim()
    .min(3, { message: "Lastname must be a valid" })
    .max(255, { message: "Lastname must be a atmost 255 characters" }),
});

// module.exports = { loginSchema, registerSchema };

export  { loginSchema, registerSchema };
