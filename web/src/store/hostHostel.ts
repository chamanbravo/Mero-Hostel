import { createSlice } from "@reduxjs/toolkit";

const hostHostel = createSlice({
  name: "hostHostel",
  initialState: {
    hostelName: "",
    hostelOwnerName: "",
    hostelOwnerNumber: "",
    hostelContactNumber: "",
    hostelType: "",
    nehaRegister: "",
    street: "",
    city: "",
    countryState: "",
    hostelCapacity: "",
    hostelRooms: "",
    hostelPrice: "",
    hostelAdmissionFee: "",
    hostelSecurityCharges: "",
    hostelAmenities: [],
    hostelThumbnail: "",
    hostelGallery: [],
    amenities: "",
    locationDesc: "",
    hostelRules: "",
    latitude: "",
    longitude: "",
  },
  reducers: {
    setHostel: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setHostel } = hostHostel.actions;
export default hostHostel.reducer;
