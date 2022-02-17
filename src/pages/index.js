import { useState } from "react";
import Head from "next/head";

import { Container, Snackbar, Button, Typography } from "@mui/material";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Audiate</title>
        <meta name="description" content="Annotate audio files" />
      </Head>
      <Container sx={{ marginTop: 2 }}>
        <Typography variant="h3" gutterBottom>
          Hello World
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Click Me
        </Button>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Button Clicked"
      />
    </>
  );
}
