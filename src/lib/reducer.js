import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FILE:
      state.file = action.file;
      break;
    case actions.SET_PLAYING:
      state.player.playing = action.playing;
      break;
    case actions.SET_PROGRESS:
      state.player.progress = action.progress;
      break;
    case actions.SET_DURATION:
      state.player.duration = action.duration;
      break;
    case actions.SET_SPEED:
      state.player.speed = action.speed;
      break;
    case actions.ADD_MARKER: {
      const { markers } = state.player;
      const markerId = state.player.progress;

      if (markers.includes(markerId)) return;

      const index = markers.findIndex((m) => m < markerId);
      markers.splice(index, 0, markerId);
      break;
    }
    case actions.REMOVE_MARKER: {
      const { markers } = state.player;
      const index = markers.findIndex((m) => m === action.markerId);

      if (index !== -1) {
        markers.splice(index, 1);
      }

      break;
    }
    default:
      break;
  }
};

export const initReducer = () => ({
  file: null,
  player: {
    playing: false,
    progress: 0,
    duration: 0,
    speed: 1,
    markers: [],
  },
});
