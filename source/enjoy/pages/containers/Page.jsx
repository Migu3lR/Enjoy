import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Enjoy';
import Login from './Login';
import RegisterEmail from './RegisterEmail';
import Portal from './Portal';
import Error404 from '../../../pages/containers/Error404';

function Pages() {
  return (
    <Switch>
      <Route
        path="/enjoy"
        exact
        component={Home}
      />

      <Route
        path="/enjoy/login"
        exact
        component={Login}
      />

      <Route
        path="/enjoy/register/email"
        exact
        component={RegisterEmail}
      />

      <Route
        path="/enjoy/portal"
        exact
        component={Portal}
      />

      <Route component={Error404} />
    </Switch>
  );
}

export default Pages;
