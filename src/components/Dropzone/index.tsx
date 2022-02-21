import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Typography, Paper } from "@mui/material";

interface DropzoneProps {
  setFile: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ setFile }) => {
  const onDrop = useCallback(
    ([audioFile]) => {
      if (!audioFile) return;
      setFile(audioFile);
    },
    [setFile]
  );
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "audio/*",
    });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        minHeight: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "text.secondary",
        cursor: "pointer",
        p: 2,
        height: (theme) => theme.spacing(25),
      }}
      variant="outlined"
    >
      <input {...getInputProps()} />
      {isDragActive && isDragAccept ? (
        <Typography variant="body1">Drop the file here ...</Typography>
      ) : (
        <Typography variant="body1">
          Drag and drop an audio file here, or click to select one
        </Typography>
      )}
    </Paper>
  );
};

export default Dropzone;
