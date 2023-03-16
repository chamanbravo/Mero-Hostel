import { createSlice } from "@reduxjs/toolkit";

const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    doj: "",
    profilePic: "",
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = loggedUser.actions;
export default loggedUser.reducer;
