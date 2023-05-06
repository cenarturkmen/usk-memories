import { createTheme } from "@mui/material/styles";
import { enUS } from "@mui/material/locale";

export const themeOptions = createTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#121212"
      },
      secondary: {
        main: "#f50057",
      },
    },
  },
  enUS
);
