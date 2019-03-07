import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from 'components/shared/nav-bar';
import Home from 'components/home';
import { muiTheme } from 'config';
import pages from './pages';

const Root = () => (
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          {pages.map(({ route, component }) => (
            <Route key={route} exact path={route} component={component} />
          ))}
          <Redirect to="/home" />
        </Switch>
      </>
    </Router>
  </MuiThemeProvider>
);

export default Root;
