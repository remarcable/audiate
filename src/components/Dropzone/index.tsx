import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Typography, Paper, Button, Box } from "@mui/material";

interface DropzoneProps {
  setFile: (file: { name: string; path: string; url: string }) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ setFile }) => {
  const onDrop = useCallback(
    ([audioFile]) => {
      if (!audioFile) return;

      const { name, path } = audioFile;
      const url = URL.createObjectURL(audioFile);
      setFile({ name, path, url });
    },
    [setFile]
  );
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "audio/*",
    });

  const handleClick = useCallback(async () => {
    const fileName = "Mazurka in A minor, Op. 7 no. 2";
    const EXAMPLE_FILE_PATH = "examples/chopin-mazurka-opus-7-2.mp3";

    setFile({
      name: fileName,
      path: EXAMPLE_FILE_PATH,
      url: EXAMPLE_FILE_PATH,
    });
  }, [setFile]);

  return (
    <>
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
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          size="small"
          color="secondary"
          onClick={() => handleClick()}
        >
          Use Chopin as an example
        </Button>
      </Box>
    </>
  );
};

export default Dropzone;
