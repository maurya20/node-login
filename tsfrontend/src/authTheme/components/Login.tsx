import React, { useState } from "react";
import { useDispatch } from "react-redux";
import googlebtn from "../img/googlebtn.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Typography from "@material-ui/core/Typography";
import { getToken } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "../styles/AuthStyles";
import axios from "axios";

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handle_login = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email: email, password: password };
    console.log("chalakya");
    axios
      .post("http://localhost:4200/api/login/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      // body: JSON.stringify(data),
      .then((res) => {
        // console.log(res)
        localStorage.setItem("authtoken", res.data.token);
        dispatch(getToken(localStorage.getItem("authtoken")));
      })
      .catch(function (error) {
        if (error) {
          setMessage("Invalid Credentials ❌");
          setTimeout(() => {
            setMessage("");
          }, 4000);
        }
      });
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={8} md={4}>
          <Paper className={classes.paper}>
            <h3 style={{ color: "white", backgroundColor: "red" }}>
              {message}
            </h3>
            <Typography variant="h3">Login</Typography>

            <form className={classes.form} onSubmit={handle_login}>
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={onEmailChange}
              />
              <TextField
                value={password}
                onChange={onPasswordChange}
                label="Password"
                fullWidth
                variant="standard"
                type={showPassword ? "text" : "password"}
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
                type="submit"
                color="primary"
                variant="contained"
                className={classes.btn}
              >
                Submit
              </Button>
            </form>
            <Typography variant="body1">
              New user?<Link to={"/register"}>Register</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
