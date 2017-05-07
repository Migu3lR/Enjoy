import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Enjoy';
import Login from './Login';
import RegisterEmail from './RegisterEmail';
import Error404 from '../../../pages/containers/Error404';

function requireUnAuth(nextState, replace) {
  console.log(nextState, replace);
}

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
        onEnter={requireUnAuth}
      />

      <Route
        path="/enjoy/register/email"
        exact
        component={RegisterEmail}
        onEnter={requireUnAuth}
      />

      <Route component={Error404} />
    </Switch>
  );
}

export default Pages;
