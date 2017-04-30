import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  componentDidMount() {
    this.button_collapse.sideNav();
  }

  render() {
    return (
      <header>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" className="brand-logo">Enjoy Life</a>
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
            <a
              href="//" data-activates="nav-mobile" className="button-collapse"
              ref={
                //eslint-disable-next-line
                node => this.button_collapse = node
              }>
              <i className="material-icons">menu</i></a>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
