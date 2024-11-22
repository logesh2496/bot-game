import { createTheme, responsiveFontSizes } from "@mui/material";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Audiowide", "Roboto", "Space Grotesk"],
  },
});
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    customPaper: { main: string; border: string };
  }

  interface PaletteOptions {
    customPaper?: { main: string; border: string };
  }
}
const themeSettings = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#563FC8",
      light: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#8973F8",
    },
    warning: {
      main: "#FFA500",
    },
    customPaper: {
      main: "#141414",
      border: "#272727",
    },
    background: { paper: "#000" },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
    fontFamily: `Audiowide, sans-serif`,
  },
});
const theme = responsiveFontSizes(themeSettings);

export default theme;