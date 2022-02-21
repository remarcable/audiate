import Head from "next/head";

import { Box, Container, Typography } from "@mui/material";

import Player from "components/Player";
import Dropzone from "components/Dropzone";

import { actionCreators } from "lib/actions";
import { useAppState, useDispatch } from "lib/reducerContext";

export default function App() {
  const { file } = useAppState();
  const setFile = useDispatch(actionCreators.setFile);

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
