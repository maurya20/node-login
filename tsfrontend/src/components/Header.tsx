import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "25px",
      padding: "0 10px 0 10px",
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            LOGO
          </Typography>
          <Link className={classes.navLink} to="/login">
            Login
          </Link>

          <Link className={classes.navLink} to="/register">
            Register
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
