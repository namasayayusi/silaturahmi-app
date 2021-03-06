import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Artikel from "../../images/article-white2.png";
import Event from "../../images/event-white2.png";
import Donasi from "../../images/donasi-white2.png";
import Jualan from "../../images/jualan-white2.png";


import useStyles from "./styles";

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.body}>
        <Container maxWidth="xs">
        <div className={classes.bungkusUtama}>
          <Typography className={classes.textHallo}>Hallo!</Typography>
          <Typography className={classes.textSelamatDatang}>
            Selamat Datang di dalam Aplikasi Silaturahmi Kami
          </Typography>

          <div className={classes.bungkusMenuSatu}>
            <div className={classes.menuSatu}>
              {/* ------ menu Artikel ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/silaturahmi-app/artikel"
              > */}
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Artikel} alt="Artikel" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Artikel
                  </Typography>
                </div>
              {/* </a> */}
            </div>
            <div className={classes.menuSatu}>
              {/* ------ menu Event ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/silaturahmi-app/event"
              > */}
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Event} alt="Event" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Event
                  </Typography>
                </div>
              {/* </a> */}
            </div>
          </div>

          <div className={classes.bungkusMenuDua}>
          <div className={classes.menuSatu}>
              {/* ------ menu Donasi ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/silaturahmi-app/donasi"
              > */}
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Donasi} alt="Donasi" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Donasi
                  </Typography>
                </div>
              {/* </a> */}
            </div>
            <div className={classes.menuDua}>
              {/* ------ menu Jualan ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/aplikasi-marketing-syariah/artikel"
              > */}
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Jualan} alt="Jualan" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Jualan
                  </Typography>
                </div>
              {/* </a> */}
            </div>
          </div>
        </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
