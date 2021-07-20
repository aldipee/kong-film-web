import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => {
  console.log(theme.palette, 'this is theme');
  return {
    appbar: {
      backgroundColor: theme.overrides.themeColor,
      boxShadow: 'none',
      transition: '15s all',
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      color: '#fff',
      padding: theme.spacing(1),
      flexShrink: 0,
      color: theme.palette.text.primary,
    },
  };
});

export default function Header(props) {
  const classes = useStyles();
  const { sections, title, onClickSearch, position = 'static' } = props;

  return (
    <AppBar className={classes.appbar} position={position}>
      <Toolbar className={classes.toolbar}>
        <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Button className={classes.toolbarLink} color='primary' key={section.title} variant='outlined' size='small'>
              {section.title}
            </Button>
          ))}
        </Toolbar>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        ></Typography>
        <IconButton onClick={onClickSearch}>
          <SearchIcon />
        </IconButton>
        <Button variant='outlined' size='small'>
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
