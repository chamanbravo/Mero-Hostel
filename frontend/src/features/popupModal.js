import { createSlice } from "@reduxjs/toolkit";

const message = createSlice({
  name: "message",
  initialState: {
    value: {
      message: "",
      cName: "",
    },
  },
  reducers: {
    popupModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { popupModal } = message.actions;
export default message.reducer;
