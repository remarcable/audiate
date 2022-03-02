import { nanoid } from "@reduxjs/toolkit";
import type { WritableDraft } from "immer/dist/internal";
import type { PlayerState, Marker } from "./playerSlice";

export const addMarker = (
  state: WritableDraft<PlayerState>,
  marker: Pick<Marker, "type" | "jumpToMeasure">
) => {
  const { markers, time } = state;

  if (markers.find((m) => m.time === time)) return;

  markers.push({ ...marker, time, id: nanoid() });
  markers.sort((a, b) => a.time - b.time);
};
