import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Menu(props) {
  // const lista = api.db.getList();
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
          <Link to="/enjoy/login" className="waves-effect waves-light btn">
            <i className="material-icons right">assignment_ind</i>
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
