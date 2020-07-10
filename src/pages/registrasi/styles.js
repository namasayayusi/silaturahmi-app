import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  daftarBlock: {
    width: "100%",
    height: "100%",
    backgroundColor: "#005f80",
    padding: '20px',
  },
  daftarBox: {
    position: "relative",
    height: "100%",
    alignItems: "center",
  },
  logoBox: {
    width: 282,
    height: 69,
    margin: "30px auto 20px"
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none"
  }
}));
