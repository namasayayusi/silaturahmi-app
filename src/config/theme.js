import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#005f80",
      light: "#4A3D94",
      dark: "#0E2754",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ef6c00",
      light: "#ef6c00",
      dark: "#ef6c00",
      contrastText: "#fff"
    },
    textColor: {
      gray: "#bbbbbb",
      gray2: "#7d7d7d"
    },
    success: {
      main: "#00ff00"
    },
    info: {
      main: "#30bcoc"
    },
    warning: {
      main: "#fdb31b"
    },
    danger: {
      main: "#ff0000"
    }
  }
});
