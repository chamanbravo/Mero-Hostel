import { z } from "zod";

const hostelSchema = z.object({
  hostelName: z
    .string({
      required_error: "Hostel name is required",
    })
    .trim()
    .min(3, {
      message: "Hostel name must be a valid",
    }),
  hostelLocation: z
    .string({
      required_error: "Hostel location is required",
    })
    .trim()
    .min(3, {
      message: "Hostel location must be a valid",
    })
    .max(255, {
      message: "Hostel location must be a atmost 255 characters",
    }),
  hostelPrice: z.number({
    required_error: "Hostel price is required",
  }),

  hostelDescription: z
    .string({
      required_error: "Hostel description is required",
    })
    .trim()
    .min(3, {
      message: "Hostel description must be a valid",
    })
    .max(255, {
      message: "Hostel description must be a atmost 255 characters",
    }),
  hostelImage: z
    .string({
      required_error: "Hostel image is required",
    })
    .trim(),
  hostelRating: z.number({
    required_error: "Hostel rating is required",
  }),
  hostelContact: z
    .string({
      required_error: "Hostel contact is required",
    })
    .trim()
    .min(10, {
      message: "Hostel contact must be a valid",
    })
    .max(15, {
      message: "Hostel contact must be a valid",
    }),
});

export default hostelSchema;
