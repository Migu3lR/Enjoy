import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Enjoy from '../../enjoy/pages/containers/Page';
import Profile from './Profile';
import Error404 from './Error404';

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';

function Pages() {

  return (
    <main role="application">{
      // eslint-disable-next-line
    }<Header CurrentRoute={this._reactInternalInstance._context.router.route.location.pathname} />

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

      <Footer />
    </main>
  );
}


export default Pages;
