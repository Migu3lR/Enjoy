import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Auth from '../../../Auth';

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
        return (this.setState({
          user,
        }));
      }
      return (this.setState({
        user: null,
      }));
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
      <Link to="/enjoy/logout" title="Cerrar Sesión" className="waves-effect waves-light btn">
        {this.state.user.email}
        <i className="material-icons right" title="Cerrar Sesión">power_settings_new</i>
      </Link>
    );
  }
}

export default LoginStatus;
