import type { NextPage } from "next";
import Head from "next/head";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Player from "components/Player";
import Dropzone from "components/Dropzone";

import { useAppDispatch, useAppSelector } from "state/hooks";
import { appActions } from "state/appSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const setFile = (file: { name: string; path: string; url: string }) =>
    dispatch(appActions.setFile(file));
  const file = useAppSelector((state) => state.app.file);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>Audiate</title>
        <meta name="description" content="Annotate audio files" />
        <base href="/audiate/" />
      </Head>

      <Container sx={{ pt: isSmall ? 4 : 10, height: "100vh" }}>
        <Box>
          <Typography
            variant={isSmall ? "h4" : "h3"}
            component="h1"
            gutterBottom
          >
            Audiate
          </Typography>
          {!file.hasFile && <Dropzone setFile={setFile} />}
          {file.hasFile && <Player />}
        </Box>
      </Container>
    </>
  );
};

export default Home;
