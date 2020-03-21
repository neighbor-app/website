import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from "./components/Home";
import Helper from "./components/Helper";
import Needer from "./components/Needer";
import Search from "./components/Search";
import NewHelp from './components/NewHelp';
import Login from "./components/Login";

ReactDOM.render(
  <Router>
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{flexGrow: 1}}
      >
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/helper">
                  <Helper />
              </Route>
              <Route path="/needer">
                  <Needer />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/search">
                  <Search />
              </Route>
              <Route path="/new-help">
                  <NewHelp />
              </Route>
          </Switch>
      </Grid>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
