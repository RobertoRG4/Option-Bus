import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.value = action.payload;
    },
    toogleLocation(state) {
      state.value = state.value;
    },
  },
});

export const { setLocation, toogleLocation } = locationSlice.actions;
export default locationSlice.reducer;
