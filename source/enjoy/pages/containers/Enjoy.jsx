import React from 'react';
import { Link } from 'react-router-dom';

import StartVideo from '../components/StartVideo';

function Home() {
  return (
    <section name="EnjoyHome">
      <div className="row">
        <StartVideo />
      </div>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <p className={'flow-text center-align'}>Conoce el proyecto Enjoy Life ProNET. Clic en el siguiente boton para empezar.</p>
          <p className="center-align">
            <Link to="/enjoy/register/email" className="waves-effect waves-light btn center-align">
              Comienza a disfrutar la vida
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
