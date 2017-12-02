import React, { Component, PropTypes } from 'react';
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

class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isAuthenticated: !!nextProps.user,
    });
  }

  render() {
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
          render={props => (
            !this.state.isAuthenticated ? (
              <Login {...props} />
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
          render={props => (
            !this.state.isAuthenticated ? (
              <Register {...props} />
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
          render={props => (
            this.state.isAuthenticated ? (
              <Portal user={this.props.user} {...props} />
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
