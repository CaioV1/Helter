import React from "react";
import { render } from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./pages/App/App";
import History from "./pages/History/History";
import Library from "./pages/Library/Library";
import RecordSongs from "./pages/RecordSongs/RecordSongs";

render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/history" component={History}/>
      <Route path="/library" component={Library}/>
      <Route path="/record_songs/:record_id" component={RecordSongs}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
