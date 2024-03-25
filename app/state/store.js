import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import userLocationSlice from "./userLocationSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
    userLocation: userLocationSlice,
  },
});
