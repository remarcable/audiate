export const getMinutesSeconds = (time: number) => ({
  minutes: getMinutes(time),
  seconds: getSeconds(time),
});

export const getMinutes = (time: number) => pad(Math.floor(time / 60));
export const getSeconds = (time: number) => pad(Math.floor(time % 60));

const pad = (number: number) => `${number}`.padStart(2, "0");
