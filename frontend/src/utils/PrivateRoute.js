import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { RfqContext } from "../components/RfqContext";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [appState, setAppState] = useContext(RfqContext);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !appState.logged ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    </div>
  );
};
