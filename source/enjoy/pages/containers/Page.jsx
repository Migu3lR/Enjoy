import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Enjoy';
import Login from './Login';
import Planes from './Planes';
import RegisterEmail from './RegisterEmail';
import Portal from './Portal';
import Pagos from './Pagos';
import Curso from './Curso';
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
        path="/enjoy/planes"
        exact
        component={Planes}
      />

      <Route
        path="/enjoy/register/email"
        exact
        component={RegisterEmail}
      />

      <Route
        path="/enjoy/portal/pagos"
        exact
        component={Pagos}
      />

      <Route
        path="/enjoy/portal"
        exact
        component={Portal}
      />

      <Route
        path="/enjoy/portal/linea/:lid/curso/:cid"
        exact
        component={Curso}
      />

      <Route component={Error404} />
    </Switch>
  );
}

export default Pages;
