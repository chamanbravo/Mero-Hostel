import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Header,
  Footer,
  RegisterModal,
  HostForm,
  HostLocation,
  HostAmenitiesForm,
  HostImagesForm,
  PopupMessage,
} from "./components";
import {
  Homepage,
  SingleHostelPage,
  SearchResultPage,
  UserProfilePage,
  ErrorPage,
} from "./pages";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { popupModal } from "./features/popupModal";

function App() {
  const register = useSelector((state) => state.register.value);

  let modalContent = useSelector((state) => state.popupModal.value);
  let dispatch = useDispatch();

  useEffect(() => {
    if (modalContent.message) {
      const timer = setTimeout(() => {
        dispatch(popupModal({ message: "", cName: "" }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [modalContent]);

  return (
    <div className="App">
      <Router>
        <Header />
        {register.toggleState && <RegisterModal />}
        {modalContent.cName && <PopupMessage modalContent={modalContent} />}
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
