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

    this.suscribeAuth = this.suscribeAuth.bind(this);
  }

  componentWillMount() {
    this.suscribeAuth();
  }

  suscribeAuth() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
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
          <div className="col s12 m8 offset-m2">
            <div className="card">
              <div className="card-content">
                <RegisterForm />
              </div>
              <div className="card-action">
                ¿Ya tienes cuenta? <Link to="/enjoy/login">Inicia Sesión</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterEmail;
