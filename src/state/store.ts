import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import playerReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
