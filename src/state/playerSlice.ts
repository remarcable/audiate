import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

export interface PlayerState {
  playing: boolean;
  progress: number;
  duration: number;
  speed: number;
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
});

const addMarker = (
  state: WritableDraft<PlayerState>,
  marker: Pick<Marker, "type" | "jumpToMeasure">
) => {
  const { markers, progress, duration } = state;
  const time = progress * duration;

  if (markers.find((m) => m.time === time)) return;

  // TODO: optimize
  markers.push({ ...marker, time });
  markers.sort((a, b) => a.time - b.time);
};

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
