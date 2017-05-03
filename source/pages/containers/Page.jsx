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

class Pages extends Component {
  constructor(props) {
    super(props);
    console.log(window.location.pathname);
    this.state = {
      ruta: '/',
    };
  }

  RouteChange(previousRoute, nextRoute) {
    console.log(`previous: ${previousRoute}`);
    console.log(`next: ${nextRoute}`);
    return this.setState({
      ruta: nextRoute,
    });
  }

  render() {
    return (
      <main role="application">
        <Header CurrentRoute={this.state.ruta} />

        <Switch>
          <Route            
            path="/"
            exact
            component={Home}
            onChange={this.RouteChange}
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
}

export default Pages;
