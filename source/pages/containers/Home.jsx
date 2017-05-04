import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import api from '../../api';

import Title from '../../shared/components/Title';

import css from './Page.css';


const domain = process.env.NODE_ENV === 'production' ? 'https://proyecto-react-sfs.now.sh' : 'http://138.68.131.182:3002';

function Home() {
  console.log(api.db.getList());
  return (
    <section name="Home">
      <div className={`section ${css.section1}`} id="index-banner">
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
                  <a className="waves-effect waves-light btn orange">Colabora</a>
                </div>
                <div className="col s6">
                  <Link to="/enjoy" className="waves-effect waves-light btn orange">Ir a Enjoy Life</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`section ${css.section2}`}>
        <div className="section" />
        <div className="container">
          <div className="row">
            <div className="col s12 m10 offset-m1">
              <p className={`flow-text center-align ${css.p_dona}`}>Conoce el proyecto Enjoy Life ProNET, puedes colaborar con una donacion. Clic en el siguiente boton para donar.</p>
              <p className="center-align"><Link to="/enjoy" className="waves-effect waves-light btn center-align">Ir a Enjoy Life</Link></p>
            </div>
          </div>
        </div>
        <div className="section" />
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className={`icon-block ${css.icon_block}`}>
                <h2 className="center light-blue-text"><i className={`material-icons ${css.material_icons}`}>flash_on</i></h2>
                <h5 className="center">Speeds up development</h5>
                <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className={`icon-block ${css.icon_block}`}>
                <h2 className="center light-blue-text"><i className={`material-icons ${css.material_icons}`}>group</i></h2>
                <h5 className="center">User Experience Focused</h5>
                <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className={`icon-block ${css.icon_block}`}>
                <h2 className="center light-blue-text"><i className={`material-icons ${css.material_icons}`}>settings</i></h2>
                <h5 className="center">Easy to work with</h5>
                <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
