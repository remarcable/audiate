import { useMemo } from "react";
import { grey } from "@mui/material/colors";

import { useMediaQuery, createTheme } from "@mui/material";

export default function useMaterialUITheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          ...(!prefersDarkMode
            ? {
                background: {
                  default: grey[100],
                },
              }
            : {}),
        },
      }),
    [prefersDarkMode]
  );

  return theme;
}
