import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { addMarker } from "./helpers";
import type { AppDispatch, RootState } from "./store";
import { type ExportFileType, exportFile } from "lib/fileExport";
import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";

export interface PlayerState {
  playing: boolean;
  time: number;
  duration: number;
  speed: SpeedOption;
  wasPlayingBeforeDialogWasOpen: boolean;
  dialogOpen: DialogType | null;
  markers: Marker[];
}

export enum DialogType {
  Help = "HELP",
  JumpToMeasure = "JUMP_TO_MEASURE",
}

export enum MarkerType {
  Jump = "JUMP",
  Measure = "MEASURE",
}
export interface Marker {
  type: MarkerType;
  time: number;
  jumpToMeasure?: number;
  id: string;
}

export const SPEED_OPTIONS = [0.5, 1, 1.5, 2] as const;
export type SpeedOption = typeof SPEED_OPTIONS[number];

const initialState: PlayerState = {
  playing: false,
  wasPlayingBeforeDialogWasOpen: false,
  time: 0,
  duration: 0,
  speed: 1,
  dialogOpen: null,
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
    openJumpMarkerDialog: (state) => {
      const { time } = state;
      if (state.markers.find((marker) => marker.time === time)) {
        return;
      }

      state.wasPlayingBeforeDialogWasOpen = state.playing;
      state.playing = false;
      state.dialogOpen = DialogType.JumpToMeasure;
    },
    handleJumpMarkerDialogClose: (state, action) => {
      state.playing = state.wasPlayingBeforeDialogWasOpen;
      state.dialogOpen = null;

      const jumpToMeasure: number | null = action.payload;
      if (jumpToMeasure) {
        addMarker(state, { type: MarkerType.Jump, jumpToMeasure });
      }
    },
    openHelpDialog: (state) => {
      state.wasPlayingBeforeDialogWasOpen = state.playing;
      state.playing = false;
      state.dialogOpen = DialogType.Help;
    },
    closeHelpDialog: (state) => {
      state.playing = state.wasPlayingBeforeDialogWasOpen;
      state.dialogOpen = null;
    },
    addMeasureMarker: (state) => {
      addMarker(state, { type: MarkerType.Measure });
    },
    updateMarkerTime: (state, action) => {
      const { markers } = state;
      const marker = markers.find((m) => m.id === action.payload.markerId);

      if (marker) {
        marker.time = action.payload.newMarkerTime;
        markers.sort((a, b) => a.time - b.time);
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

export const selectMarkersWithMeasures = createSelector(
  (state: RootState) => state.player.markers,
  (markers) => getMarkersWithMeasures(markers).reverse()
);

export const playerActions = { ...playerSlice.actions, exportAsFile };
export default playerSlice.reducer;
