import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  file: {
    hasFile: boolean;
    name: string;
    path: string;
    objectUrl: ReturnType<typeof URL.createObjectURL>;
  };
}

const initialState: AppState = {
  file: {
    hasFile: false,
    name: "",
    path: "",
    objectUrl: "",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFile: (state, action) => {
      const input = action.payload;
      state.file = {
        hasFile: true,
        name: input.name,
        path: input.path,
        objectUrl: URL.createObjectURL(input),
      };
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
