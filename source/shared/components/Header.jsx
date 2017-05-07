import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';

import Menu from './Menu/Menu';

function Header(props) {
  const PrintLogin = props.location.pathname.indexOf('/enjoy') === 0;
  return (
    <header>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <Link to="/" id="logo-container" className={`brand-logo ${css.brand_logo}`}>Enjoy Life ProNET</Link>
          {/* Menu navegacion en desktop */}
          <Menu PrintLogin={PrintLogin} />
          {/* Menu navegacion en mobiles */}
          <Menu PrintLogin={PrintLogin} Mobile />
          <a href="#!" data-activates="nav-mobile" className={`button-collapse ${css.button_collapse}`}><i className="material-icons">menu</i></a>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Header.defaultProps = {
  location: {},
};

export default Header;
