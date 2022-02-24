import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";

import type { FileExporter } from "..";

export const csvExporter: FileExporter = {
  fileType: "csv",
  mimeType: "text/csv",
  name: "CSV",
  stateToFile: async (state) => {
    const Papa = await import("papaparse");

    const { markers } = state.player;
    const extendedMarkers = getMarkersWithMeasures(markers).map(
      ({ measure, time }) => ({
        Measure: measure,
        Time: time,
      })
    );

    return Papa.unparse(extendedMarkers);
  },
};
