import React from 'react';
import { FormattedMessage } from 'react-intl';

import Title from '../../shared/components/Title';

import css from './Page.css';

const domain = process.env.NODE_ENV === 'production' ? 'https://proyecto-react-sfs.now.sh' : 'http://138.68.131.182:3002';

function Home() {
  return (
    <section name="Home">
      <div className={`section no-pad-bot ${css.section1}`} id="index-banner">
        <div className="container">
          <div className="row">
            <div className="col m6">
              <img src={`${domain}/images/logo.png`} alt="logo" />
            </div>
            <div className="col m6">
              <Title>
                <FormattedMessage id="title.home" />
              </Title>
              <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="row">
                <div className="col s6">
                  <a class="waves-effect waves-light btn orange">Colabora</a>
                </div>
                <div className="col s6">
                  <a class="waves-effect waves-light btn orange">Ir a Enjoy Life</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className={`icon-block ${css.icon_block}`}>
                <h2 className="center light-blue-text"><i className={`material-icons ${css.material_icons}`}>flash_on</i></h2>
                <h5 className="center">Speeds up development</h5>

                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className={`icon-block ${css.icon_block}`}>
                <h2 className="center light-blue-text"><i className={`material-icons ${css.material_icons}`}>group</i></h2>
                <h5 className="center">User Experience Focused</h5>

                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className={`icon-block ${css.icon_block}`}>
                <h2 className="center light-blue-text"><i className={`material-icons ${css.material_icons}`}>settings</i></h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </section>
  );
}

export default Home;
