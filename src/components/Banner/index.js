import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FolderSpecialOutlinedIcon from "@material-ui/icons/FolderSpecialOutlined";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import SearchBox from "../Search";
import MenuItemBox from "../MenuItemBox";

const menuItems = [
  {
    title: "Featured",
    icon: <PlayCircleOutlineIcon style={{ fontSize: 30, color: "gold" }} />,
  },
  {
    title: "Popular",
    icon: <StarBorderIcon style={{ fontSize: 30, color: "gold" }} />,
  },
  {
    title: "Terbaru",
    icon: <TheatersOutlinedIcon style={{ fontSize: 30, color: "gold" }} />,
  },
  {
    title: "Terbaik",
    icon: <FolderSpecialOutlinedIcon style={{ fontSize: 30, color: "gold" }} />,
  },
  {
    title: "Series",
    icon: <VideoLibraryOutlinedIcon style={{ fontSize: 30, color: "gold" }} />,
  },
];

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(3, 0, 6),
    margin: theme.spacing(0, 0, 0),
    height: theme.spacing(60),
    zIndex: 333,
    position: "relative",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  description: {
    color: "#e0e0e0",
  },
  tagline: {
    fontWeight: "bold",
    color: "gold",
    // color: "#fbc02d",
  },
  menuItemContainer: {
    marginTop: 20,
  },
}));

export default function HeroBanner() {
  const classes = useStyles();
  return (
    <>
      <div className={[classes.heroContent]}>
        <Container maxWidth="sm" my={10}>
          <Typography className={classes.tagline} component="h1" variant="h2" align="center" gutterBottom>
            KONG FILM
          </Typography>
          <Typography className={classes.tagline} component="h1" variant="h5" align="center" gutterBottom>
            Exclusive Download and Movies Streaming
          </Typography>
          <Typography className={classes.description} variant="body2" align="center" color="textSecondary" paragraph>
            IndoXXI Premiere adalah layanan berlangganan #1 untuk nonton Film dan TV Series dengan harga termurah Kami
            menyediakan film, serial, terupdate setiap harinya.
          </Typography>
          <SearchBox />
          {/* <MenuBox /> */}
        </Container>
        <Grid container spacing={2} className={classes.menuItemContainer} justifyContent="center">
          {menuItems.length &&
            menuItems.map((item) => <MenuItemBox key={item.title} title={item.title} iconComponent={item.icon} />)}
        </Grid>
      </div>
    </>
  );
}
