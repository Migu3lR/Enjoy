import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Auth from '../../../Auth';
import api from '../../../api';

function getDisplayName(user) {
  const u = user || api.auth.currentUser();
  let displayName = '';

  if (u) {
    const dn = u.providerData[0].displayName;
    if (dn) {
      const display = dn.split('|');
      displayName = display[0];
    } else {
      displayName = u.email;
    }
  }

  return (displayName);
}

class LoginStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: api.auth.currentUser(),
      displayName: getDisplayName(),
    };

    this.suscribeAuth = this.suscribeAuth.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.suscribeAuth();
  }

  suscribeAuth() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
          displayName: getDisplayName(),
        });
      } else {
        this.setState({
          user: null,
          displayName: '',
        });
      }
    });
  }

  logout() {
    api.auth.logOut(this.props.history);
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
      <a href="#!" title="Cerrar Sesión" className="waves-effect waves-light btn" onClick={this.logout}>
        {this.state.displayName}
        <i className="material-icons right" title="Cerrar Sesión">power_settings_new</i>
      </a>
    );
  }
}

LoginStatus.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

LoginStatus.defaultProps = {
  history: {},
};

export default LoginStatus;
