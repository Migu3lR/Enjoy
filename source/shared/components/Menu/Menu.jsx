import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginStatus from './LoginStatus';
import TimeLeft from './TimeLeft';
import Points from './Points';

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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: true,
      PrintLogin: nextProps.PrintLogin || null,
      Mobile: nextProps.Mobile || null,
    });

    if (nextProps.user) {
      this.syncState = api.base.syncState(`/usuarios/${nextProps.user.uid}/plan/timeUp`, {
        context: this,
        state: 'timeUp',
        then: () => {
          this.setState({
            loading: false,
          });
        },
      });
    } else {
      if (this.syncState) api.base.removeBinding(this.syncState);
      this.setState({
        loading: false,
      });
    }
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
              <Link to="/enjoy/register" className="waves-effect waves-light btn">
                {/* <i className="material-icons right">assignment_ind</i> */}
                <FormattedMessage id="header.nav.start" />
              </Link>
            </li>
          </ul>
        );
      }
      return (
        !this.state.loading && (
        <ul
          className={this.state.Mobile ? 'side-nav' : 'right hide-on-med-and-down'}
          id={this.state.Mobile ? 'nav-mobile' : null}
        >
          <li>
            <TimeLeft timeUp={this.state.timeUp} />
          </li>
          <li>
            <Points {...this.props} />
          </li>
          <li>
            <LoginStatus {...this.props} />
          </li>
        </ul>
        )
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
