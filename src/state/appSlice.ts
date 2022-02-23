import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  file: {
    hasFile: boolean;
    name: string;
    path: string;
    url: string;
  };
}

const initialState: AppState = {
  file: {
    hasFile: false,
    name: "",
    path: "",
    url: "",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFile: (state, action) => {
      const { name, path, url } = action.payload;
      state.file = { hasFile: true, name, path, url };
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
