import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import api from '../../api';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.testFirebase = this.testFirebase.bind(this);
  }

  componentDidMount() {
    this.testFirebase();
    //api.auth.Login_Google();
    api.auth.Login_Email('admin@alegratuvida.com', '123456');
  }

  testFirebase() {
    const lista = api.db.getList();
    console.log(lista);
  }

  render() {
    if (this.props.PrintLogin) {
      return (
        <ul
          className={this.props.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
          id={this.props.Mobile ? 'nav-mobile' : ''}
        >
          <li>
            <Link to="/">
              <FormattedMessage id="header.nav.home" />
            </Link>
          </li>
          <li>
            <a className='dropdown-button btn' href='#' data-activates='ingreso-dd'>
              <FormattedMessage id="login" />
            </a>
            <ul id='ingreso-dd' className='dropdown-content'>
              <li><Link to='/enjoy/signin'>Iniciar sesión</Link></li>
              <li><Link to='/enjoy/signup'>Registrarme</Link></li>
            </ul>
          </li>
        </ul>
      );
    }

    return (
      <ul
        className={this.props.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
        id={this.props.Mobile ? 'nav-mobile' : ''}
      >
        <li>
          <Link to="/">
            <FormattedMessage id="header.nav.home" />
          </Link>
        </li>
      </ul>
    );
  }
}

Menu.propTypes = {
  PrintLogin: PropTypes.bool,
  Mobile: PropTypes.bool,
};

Menu.defaultProps = {
  PrintLogin: false,
  Mobile: false,
};

export default Menu;
