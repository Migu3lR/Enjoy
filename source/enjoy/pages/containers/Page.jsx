import React, { PropTypes } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './Enjoy';
import Login from './Login';
import Planes from './Planes';
import Register from './Register';
import Portal from './Portal';
import Error404 from '../../../pages/containers/Error404';

function Pages(props) {
  return (
    <Switch>
      <Route
        path="/enjoy"
        exact
        component={Home}
      />

      <Route
        path="/enjoy/planes"
        exact
        component={Planes}
      />

      <Route
        path="/enjoy/login"
        exact
        render={prop => (
          !props.user ? (
            <Login {...prop} />
          ) : (
            <Redirect
              to={{
                pathname: '/enjoy/portal',
              }}
            />
          )
        )}
      />

      <Route
        path="/enjoy/register"
        exact
        render={prop => (
          !props.user ? (
            <Register {...prop} />
          ) : (
            <Redirect
              to={{
                pathname: '/enjoy/portal',
              }}
            />
          )
        )}
      />

      <Route
        path="/enjoy/portal"
        render={prop => (
          props.user ? (
            <Portal user={props.user} {...prop} />
          ) : (
            <Redirect
              to={{
                pathname: '/enjoy/login',
              }}
            />
          )
        )}
      />

      <Route component={Error404} />
    </Switch>
  );
}

Pages.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Pages.defaultProps = {
  user: null,
};

export default Pages;
