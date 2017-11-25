import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginStatus from './LoginStatus';
import TimeLeft from './TimeLeft';

import api from '../../../api';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      timeUp: null,
      PrintLogin: this.props.PrintLogin || null,
      Mobile: this.props.Mobile || null,
    };

    this.initialFetch = this.initialFetch.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    this.setState({
      PrintLogin: nextProps.PrintLogin || null,
      Mobile: nextProps.Mobile || null,
    });
    if (nextProps.user) this.initialFetch(nextProps.user.uid);
    else {
      this.initialFetch(null);
      this.setState({
        loading: false,
      });
    }
  }

  async initialFetch(uid) {
    if (this.state.timeUp) return this.setState({ loading: false });

    const [timeUp] = await Promise.all([
      !this.state.timeUp ? api.acct.timeUp(uid) : Promise.resolve(null),
    ]);

    return this.setState({
      loading: false,
      timeUp: timeUp || this.state.timeUp,
    });
  }

  render() {
    if (this.state.PrintLogin) {
      if (!this.state.loading && !this.props.user) {
        return (
          <ul
            className={this.state.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
            id={this.state.Mobile ? 'nav-mobile' : null}
          >
            <li>
              <Link to="/enjoy">
                <FormattedMessage id="header.nav.empresas" />
              </Link>
            </li>
            <li>
              <Link to="/enjoy">
                <FormattedMessage id="header.nav.emprendedores" />
              </Link>
            </li>
            <li>
              <Link to="/enjoy/planes">
                <FormattedMessage id="header.nav.planes" />
              </Link>
            </li>
            <li>
              <Link to="/enjoy/login">
                <FormattedMessage id="header.nav.login" />
              </Link>
            </li>
            <li>
              <Link to="/enjoy/register/email" className="waves-effect waves-light btn">
                {/* <i className="material-icons right">assignment_ind</i> */}
                <FormattedMessage id="header.nav.start" />
              </Link>
            </li>
          </ul>
        );
      }
      return (
        <ul
          className={this.state.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
          id={this.state.Mobile ? 'nav-mobile' : null}
        >
          {!this.state.loading && (
            <li>
              <TimeLeft timeUp={this.state.timeUp.epoch} />
            </li>
          )}
          <li>
            <LoginStatus {...this.props} />
          </li>
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
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
  PrintLogin: PropTypes.bool,
  Mobile: PropTypes.bool,
};

Menu.defaultProps = {
  user: null,
  PrintLogin: false,
  Mobile: false,
};

export default Menu;
