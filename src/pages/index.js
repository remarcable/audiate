import { useSelector, useDispatch } from "react-redux";

import Head from "next/head";

import { Box, Container, Typography } from "@mui/material";

import Player from "components/Player";
import Dropzone from "components/Dropzone";

import { appActions } from "state/appSlice";

export default function App() {
  const dispatch = useDispatch();
  const setFile = (file) => dispatch(appActions.setFile(file));
  const file = useSelector((state) => state.app.file);

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
          {!file.objectUrl && <Dropzone setFile={setFile} />}
          {file.objectUrl && <Player file={file} />}
        </Box>
      </Container>
    </>
  );
}
