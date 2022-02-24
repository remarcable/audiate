import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";
import type { FileExporter } from "..";

export const textExporter: FileExporter = {
  fileType: "txt",
  mimeType: "text/plain",
  name: "Text",
  stateToFile: async (state) => {
    const { markers } = state.player;
    return (
      getMarkersWithMeasures(markers)
        .map(({ measure, time }) => `${measure} ${time}`)
        .join("\n") + "\n"
    );
  },
};
