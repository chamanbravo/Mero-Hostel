const { z } = require("zod");

const hostelSchema = z.object({
  hostelName: z
    .string({
      required_error: "Hostel name is required",
    })
    .trim()
    .min(3, {
      message: "Hostel name must be a valid",
    }),
  hostelType: z
    .string({
      required_error: "Hostel type is required",
    })
    .trim()
    .min(3, {
      message: "Hostel type must be a valid",
    }).max(255, {
        message:"Hostel type must be a atmost 255 characters"
    }),
  hostelLocation: z
    .string({
      required_error: "Hostel location is required",
    })
    .trim()
    .min(3, {
      message: "Hostel location must be a valid",
    }).max(255, {
        message: "Hostel location must be a atmost 255 characters",
        }),
  hostelPrice: z
    .string({
      required_error: "Hostel price is required",
    })
    .trim()
    ,
  hostelDescription: z
    .string({
      required_error: "Hostel description is required",
    })
    .trim()
    .min(3, {
      message: "Hostel description must be a valid",
    }).max(255,{
        message: "Hostel description must be a atmost 255 characters",
    }),
  hostelImage: z
    .string({
      required_error: "Hostel image is required",
    })
    .trim()
   ,
  hostelRating: z
    .string({
      required_error: "Hostel rating is required",
    })
    .trim()
    ,
  hostelContact: z
    .string({
      required_error: "Hostel contact is required",
    })
    .trim()
    .min(10, {
      message: "Hostel contact must be a valid",
    }).max(15,{
        message: "Hostel contact must be a valid",
    }),
});

module.exports = hostelSchema ;
