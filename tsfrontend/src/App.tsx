import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Register } from "./authTheme/components/Register";
import { Login } from "./authTheme/components/Login";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "gray", height: "100vh" }}
      >
        <Switch>
          <Route path={"/register"}>
            <Register />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
