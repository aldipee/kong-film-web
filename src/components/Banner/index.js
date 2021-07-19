import React, { PureComponent } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    boxShadow: "0px 8px 15px rgba(79, 79, 79, 0.25)",
    borderRadius: "2px",
  },
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3, 0, 6),
    margin: theme.spacing(0, 0, 27),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  description: {
    // color: "#fff",
  },
  tagline: {
    // color: "#fbc02d",
  },
}));

export default function HeroBanner() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" mb={10}>
        <Typography
          className={classes.tagline}
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          IndoXXI Premiere
        </Typography>
        <Typography className={classes.tagline} component="h1" variant="h5" align="center" gutterBottom>
          Exclusive Download and Movies Streaming
        </Typography>
        <Typography className={classes.description} variant="body2" align="center" color="textSecondary" paragraph>
          IndoXXI Premiere adalah layanan berlangganan #1 untuk nonton Film dan TV Series dengan harga termurah Kami
          menyediakan film, serial, terupdate setiap harinya.
        </Typography>
        <div className={classes.heroButtons}>
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />

            <Divider className={classes.divider} orientation="vertical" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </Container>
    </div>
  );
}
