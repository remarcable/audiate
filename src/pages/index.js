import { useState, useCallback } from "react";
import Head from "next/head";
import { useDropzone } from "react-dropzone";

import { Container, Button, Typography, Paper } from "@mui/material";

export default function Home() {
  const onDrop = useCallback(([audioFile]) => {
    if (!audioFile) return;

    setFile(audioFile);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "audio/*",
    });

  const [file, setFile] = useState(null);

  return (
    <>
      <Head>
        <title>Audiate</title>
        <meta name="description" content="Annotate audio files" />
      </Head>

      <Container sx={{ mt: 2 }}>
        <Paper
          {...getRootProps()}
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "text.secondary",
            cursor: "pointer",
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
        {file && (
          <Typography variant="h3" gutterBottom>
            {file.name}
          </Typography>
        )}
      </Container>
    </>
  );
}
