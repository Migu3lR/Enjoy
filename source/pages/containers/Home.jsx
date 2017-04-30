import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Title from '../../shared/components/Title';

import css from './Page.css';

function Home() {
  return (
    <div name="Home" className="section no-pad-bot" id="index-banner">
      <div className="container">
        <br /><br />
        <Title>
          <FormattedMessage id="title.home" />
        </Title>
        <div className="row center">
          <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
        <div className="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br /><br />
      </div>
    </div>

    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className={css.icon-block}>
              <h2 className="center light-blue-text"><i className={css.material-icons}>flash_on</i></h2>
              <h5 className="center">Speeds up development</h5>

              <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className={css.icon-block}>
              <h2 className="center light-blue-text"><i className={css.material-icons}>group</i></h2>
              <h5 className="center">User Experience Focused</h5>

              <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className={css.icon-block}>
              <h2 className="center light-blue-text"><i className={css.material-icons}>settings</i></h2>
              <h5 className="center">Easy to work with</h5>

              <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
          </div>
        </div>

      </div>
      <br /><br />

      <div className="section">

      </div>
    </div>
    );
}

export default Home;
