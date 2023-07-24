import { Theme, ThemeOptions } from "@mui/material/styles"; // eslint-disable-line @typescript-eslint/no-unused-vars

interface custom {
  buttons: {
    maxWidth: string;
    height: string;
    disabledBackground: string;
    disabledColor: string;
    fontSizeMd: string;
  };
  radius: {
    medium: string;
  };
  header: {
    smallHeight: string;
    height: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme {
    custom: custom;
  }

  interface ThemeOptions {
    custom: custom;
  }

  export function createTheme(options?: ThemeOptions): Theme;
}
