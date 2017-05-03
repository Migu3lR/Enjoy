import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Enjoy';
import Error404 from '../../../pages/containers/Error404';

function Pages() {
  return (
    <Switch>
      <Route
        path="/enjoy"
        exact
        component={Home}
      />

      <Route component={Error404} />
    </Switch>
  );
}

export default Pages;
