import { createSlice } from "@reduxjs/toolkit";

const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    value: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      doj: "",
      profilePic: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = loggedUser.actions;
export default loggedUser.reducer;
