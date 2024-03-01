import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstname: Yup.string()
    .min(3, "First Name must be at least 3 characters")
    .required("First Name is required")
    .max(15, "First Name must be at most 15 characters"),
  lastname: Yup.string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Last Name is required")
    .max(15, "Last Name must be at most 15 characters"),
  phone: Yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
