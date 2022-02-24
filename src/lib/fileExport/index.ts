import { RootState } from "state/store";
import FileSaver from "file-saver";

import { textExporter } from "./exporters/text";
import { meiExporter } from "./exporters/mei";
import { csvExporter } from "./exporters/csv";
import { jsonExporter } from "./exporters/json";

export interface FileExporter {
  fileType: string;
  mimeType: string;
  name: string;
  stateToFile: (state: RootState) => Promise<string>;
}
export const fileExporters: readonly FileExporter[] = [
  textExporter,
  csvExporter,
  jsonExporter,
  // meiExporter,
] as const;

export const exportOptions = fileExporters.map((exporter) => exporter.fileType);
export const exportNames = Object.fromEntries(
  fileExporters.map((exporter) => [exporter.fileType, exporter.name])
);
export type ExportFileType = typeof exportOptions[number];

export const exportFile = async ({
  fileType,
  state,
}: {
  fileType: ExportFileType;
  state: RootState;
}) => {
  const fileName = `${state.app.file.path}.measures.${fileType}`;
  const exporter = fileExporters.find(
    (exporter) => exporter.fileType === fileType
  );

  if (!exporter) {
    return;
  }

  const fileContent = await exporter.stateToFile(state);

  const file = new File([fileContent], fileName, {
    type: `${exporter.mimeType};charset=utf-8`,
  });

  FileSaver.saveAs(file);
};
