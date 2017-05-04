import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section name="login">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <span className="card-title">Card Title</span>
            <div className="card-content">
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Correo Electrónico</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Contraseña</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              ¿Aún no tienes un cuenta? <Link to="/enjoy/register/email">Regístrate aquí</Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Login;
