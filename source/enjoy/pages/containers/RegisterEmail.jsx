import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import RegisterForm from '../../Register/containers/RegisterForm';

import Auth from '../../../Auth';
import api from '../../../api';

class RegisterEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: api.auth.currentUser(),
    };
  }

  render() {
    if (this.state.user) {
      return (
        <Redirect to="/enjoy" replace />
      );
    }
    return (
      <section name="login">
        <div className="row">
          <div className="col s12">
            <h3 className="center-align">Regístrate</h3>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 offset-m3 l4 offset-l4">
            <div className="card">
              <div className="card-content">
                <RegisterForm />
              </div>
              <div className="card-action">
                ¿Ya tienes cuenta? <Link to="/enjoy/register/email">Inicia Sesión</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterEmail;
