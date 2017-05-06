import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginStatus from './LoginStatus';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PrintLogin: this.props.PrintLogin || null,
      Mobile: this.props.Mobile || null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      PrintLogin: nextProps.PrintLogin || null,
      Mobile: nextProps.Mobile || null,
    });
  }

  render() {
    if (this.state.PrintLogin) {
      return (
        <ul
          className={this.state.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
          id={this.state.Mobile ? 'nav-mobile' : null}
        >
          <li>
            <Link to="/">
              <FormattedMessage id="header.nav.home" />
            </Link>
          </li>
          <LoginStatus />
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
