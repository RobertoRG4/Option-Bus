import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const mapUseSlice = createSlice({
  name: "mapId",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setValue } = mapUseSlice.actions;
export default mapUseSlice.reducer;
