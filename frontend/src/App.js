import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, RegisterModal } from "./components";
import { Homepage, SingleHostelPage, SearchResultPage } from "./pages";
import { useSelector } from "react-redux";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
