import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Notifications from 'react-notify-toast';

import Home from './Home';
import Post from './Post';
import Enjoy from '../../enjoy/pages/containers/Page';
import Profile from './Profile';
import Error404 from './Error404';

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';

import css from './Page.css';

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line
      ruta: '/',
    };
  }

  render() {
    return (
      <main role="application">{
        // eslint-disable-next-line
        }<Header CurrentRoute={this._reactInternalInstance._context.router.route.location.pathname} />

        <section className={css.MainSection}>

          <Notifications />

          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />

            <Route
              path="/enjoy"
              component={Enjoy}
            />

            <Route
              path="/post/:id"
              exact
              component={Post}
            />

            <Route
              path="/user/:id"
              exact
              component={Profile}
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
