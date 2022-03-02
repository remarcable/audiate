const padStart = (number: number) => `${number}`.padStart(2, "0");
const padEnd = (number: number) => `${number}`.padEnd(3, "0");

export const formatSeconds = (seconds: number) => {
  // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
  const date = new Date(0, 0, 0, 0, 0, 0, seconds * 1000);
  const mm = padStart(date.getMinutes());
  const s = padStart(date.getSeconds());
  const ms = padEnd(date.getMilliseconds());

  return `${mm}:${s}:${ms}`;
};
