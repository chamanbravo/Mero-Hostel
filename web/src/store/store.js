import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "../features/UserDetailSlice.jsx";

export const store = configureStore({
    reducer: {
        userDetail: userDetailSlice.reducer
    }
});
