import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';

import Menu from './Menu/Menu';

const domain = process.env.NODE_ENV === 'production' ? 'https://proyecto-react-sfs.now.sh' : 'http://34.239.53.122:3002';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PrintLogin: this.props.location.pathname.indexOf('/enjoy') === 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      PrintLogin: nextProps.location.pathname.indexOf('/enjoy') === 0,
    });
  }

  render() {
    return (
      <header>
        <nav className="white" role="navigation">
          <div className="nav-wrapper">
            <Link to="/enjoy" id="logo-container" className={`brand-logo ${css.brand_logo}`}>
              <img src={`${domain}/images/logo.png`} alt="logo" />
              <span>Enjoy Life ProNET</span>
            </Link>
            {/* Menu navegacion en desktop */}
            <Menu PrintLogin={this.state.PrintLogin} {...this.props} />
            {/* Menu navegacion en mobiles */}
            <Menu PrintLogin={this.state.PrintLogin} Mobile {...this.props} />
            <a href="#!" data-activates="nav-mobile" className={`button-collapse ${css.button_collapse}`}><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </header>
    );
  }
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
