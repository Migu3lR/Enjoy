import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { notify } from 'react-notify-toast';

import Auth from '../../../Auth';

function logout() {
  Auth.signOut().then(() => {
    notify.show('Sesión de usuario cerrada.', 'success', 5000);
  }, (error) => {
    notify.show('Ha ocurrido un error inesperado al cerrar tu sesión.', 'error', 5000);
    console.log(error);
  });
}

class LoginStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.suscribeAuth = this.suscribeAuth.bind(this);
  }

  componentDidMount() {
    this.suscribeAuth();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  suscribeAuth() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  render() {
    if (!this.state.user) {
      return (
        <Link to="/enjoy/login" className="waves-effect waves-light btn">
          <i className="material-icons right">assignment_ind</i>
          <FormattedMessage id="login" />
        </Link>
      );
    }
    return (
      <a href="#!" title="Cerrar Sesión" className="waves-effect waves-light btn" onCLick={logout()}>
        {this.state.user.email}
        <i className="material-icons right" title="Cerrar Sesión">power_settings_new</i>
      </a>
    );
  }
}

export default LoginStatus;
