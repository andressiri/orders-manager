import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 60, 60, 1)",
      light: "rgba(255, 164, 144, 1)",
      dark: "rgba(180, 0, 9, 1)",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "rgba(84, 97, 146, 1)",
      light: "rgba(158, 168, 223, 1)",
      dark: "rgba(9, 34, 76, 1)",
      contrastText: "rgba(0, 9, 41, 1)",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  custom: {
    buttons: {
      maxWidth: "352px",
      height: "48px",
      disabledBackground: "rgba(130, 130, 130, 1)",
      disabledColor: "rgba(0, 0, 0, 0.26)",
      fontSizeMd: "16px",
    },
    radius: {
      medium: "8px",
    },
    header: {
      smallHeight: "72px",
      height: "96px",
    },
  },
});
