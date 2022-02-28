import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addMarker } from "./helpers";
import type { AppDispatch, RootState } from "./store";
import { type ExportFileType, exportFile } from "lib/fileExport";
import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";

export interface PlayerState {
  playing: boolean;
  time: number;
  duration: number;
  speed: SpeedOption;
  wasPlayingBeforeJumpToMeasureDialogWasOpen: boolean;
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
  wasPlayingBeforeJumpToMeasureDialogWasOpen: false,
  time: 0,
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
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setProgress: (state, action) => {
      state.time = action.payload * state.duration;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    openJumpToMeasureDialog: (state) => {
      const { time } = state;
      if (state.markers.find((marker) => marker.time === time)) {
        return;
      }

      state.wasPlayingBeforeJumpToMeasureDialogWasOpen = state.playing;
      state.playing = false;
      state.jumpToMeasureDialogIsOpen = true;
    },
    addMeasureMarker: (state) => {
      addMarker(state, { type: MarkerType.Measure });
    },
    handleJumpMarkerDialogClose: (state, action) => {
      state.playing = state.wasPlayingBeforeJumpToMeasureDialogWasOpen;
      state.jumpToMeasureDialogIsOpen = false;

      const jumpToMeasure: number | null = action.payload;
      if (jumpToMeasure) {
        addMarker(state, { type: MarkerType.Jump, jumpToMeasure });
      }
    },
    updateMarkerTime: (state, action) => {
      const { markers } = state;
      const extendedMarkers = getMarkersWithMeasures(markers);
      const oldMarkerTime = extendedMarkers.find(
        (marker) => marker.measure === action.payload.oldMeasure
      )?.time;
      const marker = markers.find((m) => m.time === oldMarkerTime) ?? {};
      marker.time = action.payload.newMarkerTime;

      // TODO: optimize
      markers.sort((a, b) => a.time - b.time);
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
    builder.addCase(exportAsFile.rejected, (_, payload) => {
      console.error(payload.error);
    });
  },
});

const exportAsFile = createAsyncThunk<
  void,
  ExportFileType,
  { dispatch: AppDispatch; state: RootState }
>("player/exportAsFile", async (fileType, thunkAPI) => {
  const state = thunkAPI.getState();
  await exportFile({ fileType, state });
});

export const playerActions = { ...playerSlice.actions, exportAsFile };
export default playerSlice.reducer;
