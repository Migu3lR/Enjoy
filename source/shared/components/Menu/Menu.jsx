import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { SideNav, SideNavItem, Button } from 'react-materialize';

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
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: true,
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
    if (!this.props.Mobile) {
      if (this.props.PrintLogin) {
        if (!this.state.loading && !this.props.user) {
          return (
            <ul className="right hide-on-med-and-down">
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
          <ul className="right hide-on-med-and-down">
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
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">
              <FormattedMessage id="header.nav.home" />
            </Link>
          </li>
        </ul>
      );
    }

    // else Mobile true
    if (this.props.PrintLogin) {
      if (!this.state.loading && !this.props.user) {
        return (
          <SideNav
            trigger={<Button>Menu</Button>}
            options={{ closeOnClick: true }}
          >
            <SideNavItem href="/enjoy">
              <FormattedMessage id="header.nav.empresas" />
            </SideNavItem>
            <SideNavItem href="/enjoy">
              <FormattedMessage id="header.nav.emprendedores" />
            </SideNavItem>
            <SideNavItem href="/enjoy/planes">
              <FormattedMessage id="header.nav.planes" />
            </SideNavItem>
            <SideNavItem href="/enjoy/login">
              <FormattedMessage id="header.nav.login" />
            </SideNavItem>
            <SideNavItem href="/enjoy/register" className="waves-effect waves-light btn">
              <FormattedMessage id="header.nav.start" />
            </SideNavItem>
          </SideNav>
        );
      }

      return (
        !this.state.loading && (
          <SideNav
            trigger={<Button>Menu</Button>}
            options={{ closeOnClick: true }}
          >
            <SideNavItem
              userView
              user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com',
              }}
            />
            <SideNavItem>
              <TimeLeft timeUp={this.state.timeUp} />
            </SideNavItem>
            <SideNavItem>
              <Points {...this.props} />
            </SideNavItem>
          </SideNav>
        )
      );
    }

    return (
      <SideNav
        trigger={<Button>Menu</Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem href="/"><FormattedMessage id="header.nav.home" /></SideNavItem>
      </SideNav>
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
