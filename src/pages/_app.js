import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useImmerReducer } from "use-immer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "lib/theme";
import { reducer, initReducer } from "lib/reducer";
import { AppStateContext, DispatchContext } from "lib/reducerContext";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useImmerReducer(reducer, null, initReducer);

  return (
    <DispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default MyApp;
