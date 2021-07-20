import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "rgba(69, 69, 69,0.2)",
    padding: 8,
    width: 80,
    cursor: "pointer",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "#b3b3b3",
    marginTop: 8,
  },
});
function MenuBox({ title = null, iconComponent }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={clsx(classes.root, "menu-box-item")} variant="outlined">
        {iconComponent}
        <Typography variant="body2" className={clsx(classes.title, "menu-box-title")}>
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default MenuBox;
