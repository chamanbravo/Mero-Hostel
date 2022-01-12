import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Header,
  Footer,
  RegisterModal,
  HostForm,
  HostLocation,
  HostAmenitiesForm,
  HostImagesForm,
} from "./components";
import {
  Homepage,
  SingleHostelPage,
  SearchResultPage,
  UserProfilePage,
  ErrorPage,
} from "./pages";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const register = useSelector((state) => state.register.value);
  return (
    <div className="App">
      <Router>
        <Header />
        {register.toggleState && <RegisterModal />}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/hostel/:id">
            <SingleHostelPage />
          </Route>
          <Route exact path="/hostel">
            <SearchResultPage />
          </Route>
          <ProtectedRoutes exact path="/profile" component={UserProfilePage} />
          <ProtectedRoutes exact path="/host" component={HostForm} />
          <ProtectedRoutes
            exact
            path="/amenities"
            component={HostAmenitiesForm}
          />
          <ProtectedRoutes exact path="/location" component={HostLocation} />
          <ProtectedRoutes
            exact
            path="/hostelimages"
            component={HostImagesForm}
          />
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
