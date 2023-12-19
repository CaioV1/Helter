import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./pages/App/App";
import History from "./pages/History/History";
import Library from "./pages/Library/Library";
import RecordSongs from "./pages/RecordSongs/RecordSongs";

ReactDOM.createRoot(document.getElementById('root')!).render(
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
