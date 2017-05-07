import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import $ from 'jquery';

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

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true,
      hover: false,
      gutter: 0,
      belowOrigin: false,
    });
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
      <a className="dropdown-button" href="#!" data-activates="LoggedInMenu">
        {this.state.user.email}
        <i className="material-icons left">person_pin</i>
      </a>
    );
  }
}

export default LoginStatus;
