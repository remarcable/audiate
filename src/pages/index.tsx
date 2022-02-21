import { useSelector, useDispatch } from "react-redux";

import type { NextPage } from "next";
import Head from "next/head";

import { Box, Container, Typography } from "@mui/material";

import Player from "components/Player";
import Dropzone from "components/Dropzone";

import { RootState } from "state/store";
import { appActions } from "state/appSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const setFile = (file) => dispatch(appActions.setFile(file));
  const file = useSelector((state: RootState) => state.app.file);

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
};

export default Home;
