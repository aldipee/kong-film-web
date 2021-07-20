import React, { PureComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)",
    borderRadius: "2px",
    background: "#333333",
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#b5b5b5",
  },
  iconButton: {
    padding: 10,
    color: "#b5b5b5",
  },
  divider: {
    height: 28,
    margin: 4,
    backgroundColor: "#b5b5b5",
  },
}));

export default function HeroBanner() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Cari judul film"
          inputProps={{ "aria-label": "search google maps" }}
        />

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
