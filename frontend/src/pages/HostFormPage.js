import React from "react";
import { HostForm, Hero } from "../components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

function HostFormPage() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`${path}`}>
            <HostForm />
          </Route>
          <Route exact path={`${url}/location`}>
            <Hero />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default HostFormPage;
