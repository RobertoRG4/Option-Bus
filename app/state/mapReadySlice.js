import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const mapReadySlice = createSlice({
  name: "mapReady",
  initialState,
  reducers: {
    setMapReady: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMapReady } = mapReadySlice.actions;
export default mapReadySlice.reducer;
