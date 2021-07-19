import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBox from '../Search';
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3, 0, 6),
    margin: theme.spacing(0, 0, 27),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
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
      <Container maxWidth='sm' mb={10}>
        <Typography
          className={classes.tagline}
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          IndoXXI Premiere
        </Typography>
        <Typography className={classes.tagline} component='h1' variant='h5' align='center' gutterBottom>
          Exclusive Download and Movies Streaming
        </Typography>
        <Typography className={classes.description} variant='body2' align='center' color='textSecondary' paragraph>
          IndoXXI Premiere adalah layanan berlangganan #1 untuk nonton Film dan TV Series dengan harga termurah Kami
          menyediakan film, serial, terupdate setiap harinya.
        </Typography>
        <SearchBox />
      </Container>
    </div>
  );
}
