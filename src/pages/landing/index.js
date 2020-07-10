import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import useStyles from "./styles";
import Logo from "../../images/logo2.png";

import Button from "@material-ui/core/Button";

import { Link, Redirect } from "react-router-dom";

export default function Landing() {
  const classes = useStyles();
  return <>
  <CssBaseline />
  <div className={classes.daftarBlock}>
    <div className={classes.daftarBox}>
      <Container maxWidth="xs">
      <img className={classes.logo} src={Logo} alt="Logo" />
        <Paper className={classes.paper}>
          <Typography className={classes.selamatdatang}>Selamat Datang di Aplikasi Kami</Typography>
          <div className={classes.bungkustombol}>
            <Button
              className={classes.tombol}
              component={Link}
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              to="/login"
              >
              Login
            </Button>
          </div>
          <div className={classes.pembatas}></div>
          <div className={classes.bungkustombol}>
            <Button
              className={classes.tombol}
              component={Link}
              variant="contained"
              size="large"
              to="/registrasi"
            >
              Daftar
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  </div>
</>
}
