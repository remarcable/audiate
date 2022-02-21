import type { NextPage } from "next";
import Head from "next/head";

import { Box, Container, Typography } from "@mui/material";

import Player from "components/Player";
import Dropzone from "components/Dropzone";

import { useAppDispatch, useAppSelector } from "state/hooks";
import { appActions } from "state/appSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const setFile = (file: File) => dispatch(appActions.setFile(file));
  const file = useAppSelector((state) => state.app.file);

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
          {!file.hasFile && <Dropzone setFile={setFile} />}
          {file.hasFile && <Player file={file} />}
        </Box>
      </Container>
    </>
  );
};

export default Home;
