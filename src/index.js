import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./components/App/App";
import Favorites from "./components/Favorites/Favorites";
import Library from "./components/Library/Library";
import RecordSongs from "./components/RecordSongs/RecordSongs";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}></Route>
      <Route path="/favorites" component={Favorites}></Route>
      <Route path="/library" component={Library}></Route>
      <Route path="/record_songs/:record_id" component={RecordSongs}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
