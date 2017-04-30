import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import css from './Header.css';

function Header() {
  return (
    <header>
      <nav className="white z-depth-4" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" className={`brand-logo ${css.brand_logo}`}>Enjoy Life ProNET</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <FormattedMessage id="header.nav.home" />
              </Link>
            </li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li>
              <Link to="/">
                <FormattedMessage id="header.nav.home" />
              </Link>
            </li>
          </ul>
          <a href="#!" data-activates="nav-mobile" className={`button-collapse ${css.button_collapse}`}><i className="material-icons">menu</i></a>
        </div>
      </nav>
    </header>
  );
}


export default Header;
