import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../Login/containers/LoginForm';

function Login() {
  return (
    <section name="login">
      <div className="row">
        <div className="col s12">
          <h3 className="center-align">Iniciar Sesión</h3>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <LoginForm />
            </div>
            <div className="card-action">
              ¿Aún no tienes un cuenta? <Link to="/enjoy/register/email">Regístrate aquí</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
