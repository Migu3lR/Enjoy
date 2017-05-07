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
    console.log('page');
    console.log(props);
    this.state = {
      // eslint-disable-next-line
      ruta: '/',
    };
  }

  render() {
    return (
      <main role="application">
        <Notifications />{
        // eslint-disable-next-line
        }<Route
          component={Header}
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
