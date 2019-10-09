import React, { FC, ReactElement } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import injectSheet, { ThemeProvider } from "react-jss";
import normalize from "normalize-jss";
import "circular-std";

import { RouteConfiguration } from './index.d';
import routes from './routes';
import theme from './utils/theme';

const App: FC = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {routes.map((route: RouteConfiguration) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            render={() => <route.Component />}
          />
        ))}
      </Switch>
    </Router>
  </ThemeProvider>
);
const ComposedApp = injectSheet(normalize)(App);

render(<ComposedApp />, document.getElementById("root"));
