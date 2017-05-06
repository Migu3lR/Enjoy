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
    if (this.state.user) {
      return (
        <li>
          <Link to="/enjoy/login" className="waves-effect waves-light btn">
            <i className="material-icons right">assignment_ind</i>
            <FormattedMessage id="login" />
          </Link>
        </li>
      );
    }
    return (
      <li>
        <i className="material-icons right">person_pin</i>
        Usuario
        <Link to="/enjoy/logout">Cerrar Sesión</Link>
      </li>
    );
  }
}

export default LoginStatus;
