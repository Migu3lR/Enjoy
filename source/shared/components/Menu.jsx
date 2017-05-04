import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import api from '../../api';

class Menu extends Component {
  componentDidMount() {
    this.testFirebase();
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
            <Link to="/enjoy">
              <FormattedMessage id="login" />
            </Link>
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
