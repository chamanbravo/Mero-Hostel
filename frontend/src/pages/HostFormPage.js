import React from "react";
import {
  HostForm,
  HostLocation,
  HostAmenitiesForm,
  HostImagesForm,
} from "../components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  withRouter,
} from "react-router-dom";

function HostFormPage() {
  let { url } = useRouteMatch();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`${url}`}>
            <HostForm />
          </Route>
          <Route exact path={`${url}/location`}>
            <HostLocation />
          </Route>
          <Route exact path={`${url}/amenities`}>
            <HostAmenitiesForm />
          </Route>
          <Route exact path={`${url}/hostelImages`}>
            <HostImagesForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(HostFormPage);
