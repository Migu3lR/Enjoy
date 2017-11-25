import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavItem } from 'react-materialize';

import api from '../../../api';

import css from './LoginStatus.css';

function getDisplay(u) {
  const display = {
    name: '',
    photo: '',
  };

  if (u) {
    const dn = u.providerData[0].displayName;
    const dp = u.providerData[0].photoURL;
    if (dn) {
      const displayN = dn.split('|');
      display.name = displayN[0];
    } else {
      display.name = u.email;
    }
    if (dp) {
      display.photo = dp;
    } else {
      display.photo = 'http://icon-icons.com/icons2/317/PNG/512/user-male-icon_34332.png';
    }
  }
  return (display);
}

class LoginStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      displayName: getDisplay(this.props.user).name,
      displayPhoto: getDisplay(this.props.user).photo,
    };

    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user,
      displayName: getDisplay(nextProps.user).name,
      displayPhoto: getDisplay(nextProps.user).photo,
    });
  }

  logout() {
    api.auth.logOut(this.props.history);
  }

  render() {
    /* eslint no-script-url: "off" */
    return (
      <Dropdown
        trigger={
          <a
            href="javascript:;"
            title={`Usuario conectado: ${this.state.displayName}`}
          >
            <i className="material-icons right">arrow_drop_down</i>
            <div
              className={css.user}
              style={{ backgroundImage: `url(${this.state.displayPhoto})` }}
            />
          </a>
        }
        options={{
          belowOrigin: true,
          constrainWidth: false,
          hover: true,
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
  user: PropTypes.shape({
    providerData: PropTypes.array,
  }),
};

LoginStatus.defaultProps = {
  user: null,
  history: {},
};

export default LoginStatus;
