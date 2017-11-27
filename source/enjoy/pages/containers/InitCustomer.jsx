import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../Login/containers/LoginForm';
import OauthAll from '../components/OauthAll';

function Login() {
  return (
    <section name="login">
      <div className="row">
        <div className="col s12">
          <h3 className="center-align">Iniciar Sesión</h3>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m5 offset-m1 l5 offset-l2">
          <div className="card">
            <div className="card-content">
              <LoginForm />
            </div>
            <div className="card-action">
              ¿Aún no tienes un cuenta? <Link to="/enjoy/register">Regístrate aquí</Link>
            </div>
          </div>
        </div>

        <div className="col s10 offset-s1 m5 l3">
          <OauthAll />
        </div>
      </div>
    </section>
  );
}

export default Login;
