import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
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
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.suscribeAuth();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  handleToggle() {
    const el = findDOMNode(this.refs.toggle);
    $(el).dropdown('open');
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
      <a className="dropdown-button" ref="toggle" href="#!" data-activates="LoggedInMenu" onClick={this.handleToggle()}>
        {this.state.user.email}
        <i className="material-icons left">person_pin</i>
      </a>
    );
  }
}

export default LoginStatus;
