import React, { FC, ReactElement } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { RouteConfiguration } from './index.d';
import routes from './routes';

const App: FC = (): ReactElement => (
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
);

render(<App />, document.getElementById("root"));
