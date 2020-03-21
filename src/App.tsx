import React, {CSSProperties} from 'react';
import { Helmet } from 'react-helmet';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Needer from './components/Needer';
import Helper from './components/Helper';

import Grid from "@material-ui/core/Grid";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import './App.css';

interface ComponentProps {}
interface ComponentState {}

class App extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
  }
  render() {

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{flexGrow: 1}}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>Neighbor App</title>
          </Helmet>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{flexGrow: 1}}>
                Neighbor App
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/helper">Helper</Link>
            </li>
            <li>
              <Link to="/needer">Needer</Link>
            </li>
          </ul>
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
          </Switch>
        </Grid>
    );
  }
}

export default App;
