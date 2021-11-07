import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: { value: { toggleState: false } },
  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = registerSlice.actions;
export default registerSlice.reducer;
