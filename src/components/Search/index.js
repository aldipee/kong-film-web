import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
    boxShadow: '0px 8px 15px rgba(79, 79, 79, 0.25)',
    borderRadius: '2px',
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
}));

export default function HeroBanner() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Search Google Maps'
          inputProps={{ 'aria-label': 'search google maps' }}
        />

        <Divider className={classes.divider} orientation='vertical' />
        <IconButton type='submit' className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
