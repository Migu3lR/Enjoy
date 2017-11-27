import React, { Component, PropTypes } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Pagos from './Pagos';
import Curso from './Curso';
import Cursos from './Cursos';
import InitCustomer from './InitCustomer';
import Error404 from '../../../pages/containers/Error404';

import api from '../../../api';

class Portal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLogin: false,
      loading: true,
    };
  }

  componentDidMount() {
    api.base.fetch(`/usuarios/${this.props.user.uid}/firstLogin`, {
      then: (first) => {
        this.setState({
          firstLogin: first,
          loading: false,
        });
      },
    });
  }

  render() {
    if (this.state.firstLogin) {
      return (
        <Route
          render={props => (
            <InitCustomer {...props} user={this.props.user} />
          )}
        />
      );
    }
    return (
      !this.state.loading && (
        <Switch>
          <Route
            path="/enjoy/portal/cursos"
            exact
            component={Cursos}
          />

          <Route
            path="/enjoy/portal/linea/:lid/curso/:cid"
            exact
            component={Curso}
          />

          <Route
            path="/enjoy/portal/pagos"
            exact
            component={Pagos}
          />

          <Redirect from="/enjoy/portal" to="/enjoy/portal/cursos" />

          <Route component={Error404} />
        </Switch>
      )
    );
  }
}

Portal.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Portal.defaultProps = {
  user: null,
};

export default Portal;
