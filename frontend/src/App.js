import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Homepage, SingleHostelPage, SearchResult } from "./pages";

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
            <SearchResult />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
