import { RootState } from "state/store";
import FileSaver from "file-saver";

export const fileExporters = [
  {
    fileType: "txt",
    name: "Text",
    stateToFile: (state: RootState): string => {
      return "Text";
    },
  },
  {
    fileType: "csv",
    name: "CSV",
    stateToFile: (state: RootState): string => {
      return "CSV";
    },
  },
  {
    fileType: "mei",
    name: "MEI",
    stateToFile: (state: RootState): string => {
      return "MEI";
    },
  },
] as const;

export const exportFile = ({
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
  const fileContent = exporter?.stateToFile(state) as string;

  const file = new File([fileContent], fileName, {
    type: "text/plain;charset=utf-8",
  });

  FileSaver.saveAs(file);
};

export const exportOptions = fileExporters.map((option) => option.fileType);
export type ExportFileType = typeof exportOptions[number];
