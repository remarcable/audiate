import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: {
    name: null,
    path: null,
    objectUrl: null,
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFile: (state, action) => {
      const input = action.payload;
      state.file = {
        name: input.name,
        path: input.path,
        objectUrl: URL.createObjectURL(input),
      };
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
