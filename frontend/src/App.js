import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Dash from "./components/Dash";
import Login from "./components/Login";
import { PrivateRoute } from "./utils/PrivateRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/dash" component={Dash} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
