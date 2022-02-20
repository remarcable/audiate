const pad = (number) => `${number}`.padStart(2, "0");
export const getMinutesSeconds = (time) => ({
  minutes: pad(Math.floor(time / 60)),
  seconds: pad(Math.floor(time % 60)),
});
