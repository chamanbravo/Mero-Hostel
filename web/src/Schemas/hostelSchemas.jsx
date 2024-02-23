import * as Yup from "yup";

export const hostelSchema = Yup.object({
  hostelName: Yup.string()
    .min(3, "Hostel Name must be at least 3 characters")
    .required("Hostel Name is required")
    .max(15, "Hostel Name must be at most 15 characters"),
  hostelLocation: Yup.string()
    .min(3, "Hostel Location must be at least 3 characters")
    .required("Hostel Location is required")
    .max(15, "Hostel Location must be at most 15 characters"),
  hostelPrice: Yup.string()
    .min(0, "Hostel Price must be at least 3 characters")
    .required("Hostel Price is required")
    .max(10, "Hostel Price must be at most 15 characters"),
  hostelDescription: Yup.string()
    .min(15, "Hostel Description must be at least 3 characters")
    .required("Hostel Description is required")
    .max(255, "Hostel Description must be at most 15 characters"),
  hostelImage: Yup.string()
    .min(10, "Hostel Image must be at least 3 characters")
    .required("Hostel Image is required")
    .max(255, "Hostel Image must be at most 15 characters"),
  hostelRating: Yup.string()
    .min(0, "Hostel Rating must be at least 3 characters")
    .required("Hostel Rating is required")
    .max(3, "Hostel Rating must be at most 15 characters"),
  hostelContact: Yup.string()
    .min(10, "Hostel Contact must be at least 3 characters")
    .required("Hostel Contact is required")
    .max(15, "Hostel Contact must be at most 15 characters"),
});
