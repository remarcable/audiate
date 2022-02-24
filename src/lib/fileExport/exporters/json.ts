import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";
import type { FileExporter } from "..";

export const jsonExporter: FileExporter = {
  fileType: "JSON",
  mimeType: "text/json",
  name: "JSON",
  stateToFile: async (state) => {
    const { markers } = state.player;
    return JSON.stringify(getMarkersWithMeasures(markers), null, 4);
  },
};
