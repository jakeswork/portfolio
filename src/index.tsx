import React, { FC, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import injectSheet, { ThemeProvider } from "react-jss";
import normalize from "normalize-jss";
import "circular-std";

import { RouteConfiguration } from "./index.d";
import routes from "./routes";
import theme from "./utils/theme";

const App: FC = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {routes.map(({ path, Component }: RouteConfiguration) => (
          <Route
            key={path}
            path={path}
            exact
            render={() => <Component />}
          />
        ))}
      </Switch>
    </Router>
  </ThemeProvider>
);
const ComposedApp = injectSheet(normalize)(App);

render(<ComposedApp />, document.getElementById("root"));
