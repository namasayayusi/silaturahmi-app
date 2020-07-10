import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  daftarBlock: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#003399"
  },
  selamatdatang: {
      textAlign: "center",
      padding: "20px",
      fontWeight: "600"
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "20%",
    width: "40%",
    paddingBottom: "20px"
  },
  daftarBox: {
    position: "relative",
    height: "100%",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    flexFlow: "column nowrap"
  },
  logoBox: {
    width: 282,
    height: 69,
    margin: "30px auto 20px"
  },
  bungkusTombol: {
    padding: "50%",
    margin: "50%",
  },
  pembatas: {
    padding: '6px'
  },
  tombol: {
      margin: "20px",
      padding: "20px",
      width: "100%",
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
