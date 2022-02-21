const actionNames = [
  "SET_FILE",
  "SET_PLAYING",
  "SET_PROGRESS",
  "SET_DURATION",
  "SET_SPEED",
  "ADD_MARKER",
  "REMOVE_MARKER",
];

export const actions = Object.fromEntries(
  actionNames.map((action) => [action, action])
);

export const actionCreators = {
  setFile: (file) => ({ type: actions.SET_FILE, file }),
  setPlaying: (playing) => ({ type: actions.SET_PLAYING, playing }),
  setProgress: (progress) => ({ type: actions.SET_PROGRESS, progress }),
  setDuration: (duration) => ({ type: actions.SET_DURATION, duration }),
  setSpeed: (speed) => ({ type: actions.SET_SPEED, speed }),
  addMarker: () => ({ type: actions.ADD_MARKER }),
  removeMarker: (markerId) => ({ type: actions.REMOVE_MARKER, markerId }),
};
