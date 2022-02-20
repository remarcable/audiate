import { useState } from "react";
import Head from "next/head";

import { Box, Container, Typography } from "@mui/material";

import Player from "components/Player";
import Dropzone from "components/Dropzone";

export default function App() {
  const [file, setFile] = useState(null);

  return (
    <>
      <Head>
        <title>Audiate</title>
        <meta name="description" content="Annotate audio files" />
      </Head>

      <Container
        sx={{
          pt: 10,
          height: "100vh",
        }}
      >
        <Box>
          <Typography variant="h3" gutterBottom>
            Audiate
          </Typography>
          {!file && <Dropzone setFile={setFile} />}
          {file && <Player file={file} />}
        </Box>
      </Container>
    </>
  );
}
