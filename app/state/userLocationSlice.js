import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
