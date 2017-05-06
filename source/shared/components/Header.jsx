import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';

import Menu from './Menu/Menu';

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
            <Link to="/" id="logo-container" className={`brand-logo ${css.brand_logo}`}>Enjoy Life ProNET</Link>
            {/* Menu navegacion en desktop */}
            <Menu PrintLogin={this.state.PrintLogin} />
            {/* Menu navegacion en mobiles */}
            <Menu PrintLogin={this.state.PrintLogin} Mobile />
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
