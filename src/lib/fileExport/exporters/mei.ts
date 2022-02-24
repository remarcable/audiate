import type { FileExporter } from "..";

export const meiExporter: FileExporter = {
  fileType: "mei",
  mimeType: "text/xml",
  name: "MEI",
  stateToFile: async () => {
    return "MEI";
  },
};
