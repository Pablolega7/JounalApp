import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary   : {
      main: "#13A697",
    },
    secondary : {
      main: "#13A697",
    },
    error     : {
      main: red.A400,
    },
  },
});
