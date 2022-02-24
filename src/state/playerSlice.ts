import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addMarker } from "./helpers";
import type { AppDispatch, RootState } from "./store";
import { type ExportFileType, exportFile } from "lib/fileExport";

export interface PlayerState {
  playing: boolean;
  progress: number;
  duration: number;
  speed: SpeedOption;
  jumpToMeasureDialogIsOpen: boolean;
  markers: Marker[];
}

export enum MarkerType {
  Jump = "JUMP",
  Measure = "MEASURE",
}
export interface Marker {
  type: MarkerType;
  time: number;
  jumpToMeasure?: number;
}

export const SPEED_OPTIONS = [0.5, 1, 1.5, 2] as const;
export type SpeedOption = typeof SPEED_OPTIONS[number];

const initialState: PlayerState = {
  playing: false,
  progress: 0,
  duration: 0,
  speed: 1,
  jumpToMeasureDialogIsOpen: false,
  markers: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    togglePlaying: (state) => {
      state.playing = !state.playing;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    openJumpToMeasureDialog: (state) => {
      state.playing = false;
      state.jumpToMeasureDialogIsOpen = true;
    },
    addMeasureMarker: (state) => {
      addMarker(state, { type: MarkerType.Measure });
    },
    handleJumpMarkerDialogClose: (state, action) => {
      state.playing = true;
      state.jumpToMeasureDialogIsOpen = false;

      const jumpToMeasure: number | null = action.payload;
      if (jumpToMeasure) {
        addMarker(state, { type: MarkerType.Jump, jumpToMeasure });
      }
    },
    removeMarker: (state, action) => {
      const { markers } = state;
      const index = markers.findIndex((m) => m.time === action.payload);

      if (index !== -1) {
        markers.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(exportAsFile.fulfilled, () => {
      return;
    });
  },
});

const exportAsFile = createAsyncThunk<
  void,
  ExportFileType,
  { dispatch: AppDispatch; state: RootState }
>("player/exportAsFile", (fileType, thunkAPI) => {
  const state = thunkAPI.getState();
  exportFile({ fileType, state });
});

export const playerActions = { ...playerSlice.actions, exportAsFile };
export default playerSlice.reducer;
