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
      <AppHead />
      <Container sx={{ pt: isSmall ? 4 : 6, height: "100vh" }}>
        <Box>
          <Typography
            variant={isSmall ? "h4" : "h3"}
            component="h1"
            gutterBottom={!file.hasFile}
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

const AppHead = () => (
  <Head>
    <title>Audiate</title>
    <meta name="description" content="Annotate audio files with measures" />
    <base href="/audiate/" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/audiate/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/audiate/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/audiate/favicon-16x16.png"
    />
    <link rel="manifest" href="/audiate/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/audiate/safari-pinned-tab.svg"
      color="#5483cc"
    />
    <link rel="shortcut icon" href="/audiate/favicon.ico" />
  </Head>
);

export default Home;
