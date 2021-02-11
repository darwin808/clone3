import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Page/Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
