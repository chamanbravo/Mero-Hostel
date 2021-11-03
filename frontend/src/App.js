import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Homepage, SingleHostelPage, SearchResultPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
