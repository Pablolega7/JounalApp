import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary   : {
      main: "#543884",
    },
    secondary : {
      main: "#543884",
    },
    error     : {
      main: red.A400,
    },
  },
});
