import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';

import Menu from './Menu/Menu';

const domain = process.env.NODE_ENV === 'production' ? 'https://proyecto-react-sfs.now.sh' : 'http://34.239.53.122:3002';

function Header(props) {
  const PrintLogin = props.location.pathname.indexOf('/enjoy') === 0;
  return (
    <header>
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <Link to="/enjoy" id="logo-container" className={`brand-logo ${css.brand_logo}`}>
            <img src={`${domain}/images/logo.png`} alt="logo" />
            <span>Enjoy Life ProNET</span>
          </Link>
          {/* Menu navegacion en desktop */}
          <Menu PrintLogin={PrintLogin} {...props} />
          {/* Menu navegacion en mobiles */}
          <Menu PrintLogin={PrintLogin} Mobile {...props} />
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
