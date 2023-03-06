import { createSlice } from "@reduxjs/toolkit";

const hostHostel = createSlice({
  name: "hostHostel",
  initialState: {
    value: {
      // hostelName: "",
      // hostelOwnerName: "",
      // hostelOwnerNumber: "",
      // hostelContactNumber: "",
      // hostelType: "",
      // nehaRegister: "",
      // street: "",
      // city: "",
      // state: "",
      // hostelCapacity: "",
      // hostelRooms: "",
      // hostelPrice: "",
      // hostelAdmissionFee: "",
      // hostelSecurityCharges: "",
      // hostelAmenities: [],
      // hostelThumbnail: "",
      // hostelGallery: [],
    },
  },
  reducers: {
    setHostel: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHostel } = hostHostel.actions;
export default hostHostel.reducer;
