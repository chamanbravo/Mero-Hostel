import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loggedUser from "./user";
import registerSlice from "./register";
import hostHostel from "./hostHostel";
import popupModal from "./popupModal";

const store = configureStore({
  reducer: {
    register: registerSlice,
    user: loggedUser,
    hostHostel: hostHostel,
    popupModal: popupModal,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
