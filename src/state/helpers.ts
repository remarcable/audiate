import { WritableDraft } from "immer/dist/internal";
import type { PlayerState, Marker } from "./playerSlice";

export const addMarker = (
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
