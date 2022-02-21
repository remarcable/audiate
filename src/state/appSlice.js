import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
