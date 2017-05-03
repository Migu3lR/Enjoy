import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import css from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PrintLogin: props.CurrentRoute.indexOf('/enjoy') === 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line
    console.log(nextProps);
    this.setState({
      PrintLogin: nextProps.CurrentRoute.indexOf('/enjoy') === 0,
    });
  }

  render() {
    return (
      <header>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" className={`brand-logo ${css.brand_logo}`}>Enjoy Life ProNET</a>
            {/* Menu navegacion en desktop */}
            <ul className="right hide-on-med-and-down">
              {/* Menu en Enjoy */}
              {this.state.PrintLogin && (
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
              )}
              {/* Menu en Home */}
              {!this.state.PrintLogin && (
                <li>
                  <Link to="/">
                    <FormattedMessage id="header.nav.home" />
                  </Link>
                </li>
              )}
            </ul>

            {/* Menu navegacion en mobiles */}
            <ul id="nav-mobile" className="side-nav">
              {/* Menu en Enjoy */}
              {this.state.PrintLogin && (
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
              )}
              {/* Menu en Home */}
              {!this.state.PrintLogin && (
                <li>
                  <Link to="/">
                    <FormattedMessage id="header.nav.home" />
                  </Link>
                </li>
              )}
            </ul>
            <a href="#!" data-activates="nav-mobile" className={`button-collapse ${css.button_collapse}`}><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  CurrentRoute: PropTypes.string,
};

Header.defaultProps = {
  CurrentRoute: '/',
};

export default Header;
