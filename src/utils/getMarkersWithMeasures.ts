import { Marker } from "state/playerSlice";

type ExtendedMarker = Marker & { measure: number };

export const getMarkersWithMeasures = (markers: Marker[]) =>
  markers.reduce((akk, marker, i) => {
    const previousMarker = i > 0 ? akk[i - 1] : { measure: 0 };

    return [
      ...akk,
      {
        ...marker,
        measure: marker.jumpToMeasure ?? previousMarker.measure + 1,
      },
    ];
  }, [] as ExtendedMarker[]);
