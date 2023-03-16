import { createSlice } from "@reduxjs/toolkit";

const message = createSlice({
  name: "message",
  initialState: {
    message: "",
    cName: "",
  },
  reducers: {
    popupModal: (state, action) => {
      state = action.payload;
    },
  },
});

export const { popupModal } = message.actions;
export default message.reducer;
