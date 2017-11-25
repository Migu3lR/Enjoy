import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Notifications from 'react-notify-toast';

import Home from './Home';
import PageEnjoy from '../../enjoy/pages/containers/Page';
import Error404 from './Error404';

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';

import Auth from '../../Auth';

import css from './Page.css';

class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
    this.suscribeAuth = this.suscribeAuth.bind(this);
  }

  componentDidMount() {
    this.suscribeAuth();
  }

  suscribeAuth() {
    Auth.onAuthStateChanged(
      user => this.setState({
        user: user || this.state.user,
      }),
    );
  }

  render() {
    return (
      <main role="application">

        <Notifications />
        <Route
          render={props => (
            <Header {...props} user={this.state.user} />
          )}
        />

        <section className={css.MainSection}>

          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />

            <Route
              path="/enjoy"
              component={PageEnjoy}
            />

            <Route component={Error404} />
          </Switch>
        </section>

        <Footer />
      </main>
    );
  }
}

export default Pages;
