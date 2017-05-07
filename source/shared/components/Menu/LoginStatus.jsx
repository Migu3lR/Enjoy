import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { notify } from 'react-notify-toast';

import Auth from '../../../Auth';
import api from '../../../api';

class LoginStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: api.auth.currentUser(),
      loggedOut: false,
    };

    this.suscribeAuth = this.suscribeAuth.bind(this);
    this.logout = this.logout.bind(this);
    this.RedirectToLogin = this.RedirectToLogin.bind(this);
  }

  componentWillMount() {
    this.suscribeAuth();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.user && prevState.user) {
      this.RedirectToLogin();
    }
  }

  RedirectToLogin() {
    this.setState({
      loggedOut: true,
    });
  }

  suscribeAuth() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
        console.log();
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  logout() {
    Auth.signOut().then(() => {
      const u = this.state.user;
      notify.show('Sesión de usuario cerrada.', 'success', 5000);
    }, (error) => {
      notify.show('Ha ocurrido un error inesperado al cerrar tu sesión.', 'error', 5000);
      console.log(error);
    });
  }

  render() {
    const user = this.state.user;
    let displayName = '';

    if (user !== null) {
      const dn = user.providerData[0].displayName;
      if (dn !== null) {
        const display = dn.split('|');
        displayName = display[0];
      } else {
        displayName = dn.email;
      }
    }

    if (this.state.loggedOut) {
      return (
        <Redirect
          to={{
            pathname: '/enjoy/login',
            state: { from: '/enjoy' },
          }}
        />
      );
    }
    if (!this.state.user) {
      return (
        <Link to="/enjoy/login" className="waves-effect waves-light btn">
          <i className="material-icons right">assignment_ind</i>
          <FormattedMessage id="login" />
        </Link>
      );
    }
    return (
      <a href="#!" title="Cerrar Sesión" className="waves-effect waves-light btn" onClick={this.logout}>
        {displayName}
        <i className="material-icons right" title="Cerrar Sesión">power_settings_new</i>
      </a>
    );
  }
}

export default LoginStatus;
