import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import userLocationSlice from "./userLocationSlice";
import mapReadySlice from "./mapReadySlice";
import mapUseSlice from "./mapUseSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
    userLocation: userLocationSlice,
    mapReady: mapReadySlice,
    mapId: mapUseSlice,
  },
});
