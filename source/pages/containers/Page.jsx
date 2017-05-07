import React from 'react';
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

import css from './Page.css';

function Pages() {
  return (
    <main role="application">

      <Notifications />
      <Route component={Header} />

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

export default Pages;
