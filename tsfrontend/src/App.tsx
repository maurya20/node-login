import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Register } from "./authTheme/components/Register";
import { Login } from "./authTheme/components/Login";
import { Container } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container
        maxWidth="lg"
        style={{ backgroundColor: "gray", height: "100vh" }}
      >
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
      </Container>
    </BrowserRouter>
  );
}

export default App;
