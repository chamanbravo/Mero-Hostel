import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toggle } from "../features/register";
import { useDispatch, useSelector } from "react-redux";

function ProtectedRoutes({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const toggleMenuStateIn = () => {
    dispatch(toggle({ toggleState: true, sign: "in" }));
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.userName) {
          return <Component />;
        } else {
          toggleMenuStateIn();
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoutes;
