import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Menu(props) {
  if (props.PrintLogin) {
    return (
      <ul
        className={props.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
        id={props.Mobile ? 'nav-mobile' : ''}
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
      className={props.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
      id={props.Mobile ? 'nav-mobile' : ''}
    >
      <li>
        <Link to="/">
          <FormattedMessage id="header.nav.home" />
        </Link>
      </li>
    </ul>
  );
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
