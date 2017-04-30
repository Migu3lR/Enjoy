import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Title from '../../shared/components/Title';

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
  );
}

export default Home;
