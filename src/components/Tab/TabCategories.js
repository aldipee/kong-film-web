import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography } from "@material-ui/core";
import clsx from "clsx";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingBottom: 0,
    "& > span": {
      maxWidth: "70%",

      width: "100%",
      backgroundColor: "gold",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    paddingBottom: 10,
    minWidth: theme.typography.pxToRem(90),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 999,
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: "#121212",
  },
}));

export default function TabCategories({ list = [] }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={clsx(classes.root, classes.demo2)}>
      <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
        {list.length && list.map((genre) => <StyledTab label={genre.name} key={genre.name} />)}
      </StyledTabs>
    </div>
  );
}
