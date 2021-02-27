import React from "react";
import googlebtn from "../img/googlebtn.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Typography from "@material-ui/core/Typography";
import { AuthInterfaces } from "../interfaces/AuthInterfaces";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "../styles/AuthStyles";

export const Register: React.FC = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const onPasswordChange = () => {
    console.log("password changed");
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={8} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Register</Typography>

            <form className={classes.form}>
              <TextField fullWidth label="User Name" />
              <TextField fullWidth label="Email" />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
              <TextField
                label=" Confirm Password"
                fullWidth
                variant="standard"
                type={showPassword ? "text" : "password"}
                onChange={onPasswordChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                color="primary"
                variant="contained"
                className={classes.btn}
              >
                Submit
              </Button>
            </form>
            <Typography variant="body1">
              Already Have Account?<Link to={"/login"}>Login</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
