import { Marker } from "state/playerSlice";

export type ExtendedMarker = Marker & { measure: number };

export const getMarkersWithMeasures = (markers: Marker[]) =>
  markers.reduce((akk, marker, i) => {
    const previousMeasure = akk[i - 1]?.measure ?? 0;
    const nextMeasure = marker.jumpToMeasure ?? previousMeasure + 1;
    return [...akk, { ...marker, measure: nextMeasure }];
  }, [] as ExtendedMarker[]);
