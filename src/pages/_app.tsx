import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";

import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import useMaterialUITheme from "hooks/useMaterialUITheme";
import { store } from "state/store";

import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMaterialUITheme();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
