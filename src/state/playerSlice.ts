import { createSlice } from "@reduxjs/toolkit";

export interface PlayerState {
  playing: boolean;
  progress: number;
  duration: number;
  speed: number;
  markers: number[];
}

const initialState: PlayerState = {
  playing: false,
  progress: 0,
  duration: 0,
  speed: 1,
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
    addMarker: (state) => {
      const { markers, progress: markerId } = state;
      if (markers.includes(markerId)) return;

      // TODO: optimize
      markers.push(markerId);
      markers.sort().reverse();
    },
    removeMarker: (state, action) => {
      const { markers } = state;
      const index = markers.findIndex((m) => m === action.payload);

      if (index !== -1) {
        markers.splice(index, 1);
      }
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
