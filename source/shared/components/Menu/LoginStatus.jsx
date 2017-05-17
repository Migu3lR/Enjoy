import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Dropdown, NavItem } from 'react-materialize';

import Auth from '../../../Auth';
import api from '../../../api';

import css from './LoginStatus.css';

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
      <Dropdown 
        trigger={
          <a 
            href="javascript:;"
            title={`Usuario conectado: ${this.state.displayName}`}
          >
            <i className="material-icons right">arrow_drop_down</i><div className={css.user} />
          </a>
        }
        options={{
          belowOrigin: true,
          constrainWidth: false,
        }}
      >
        <Link to="/enjoy/portal">Portal E-Learning</Link>
        <Link to="/enjoy/portal">Mi perfil</Link>
        <Link to="/enjoy/portal/pagos">Ir a Pagos</Link>
        <NavItem divider />
        <NavItem onClick={this.logout}>Cerrar sesión</NavItem>
      </Dropdown>
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
