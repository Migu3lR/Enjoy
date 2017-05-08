import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import RegisterForm from '../../Register/containers/RegisterForm';

import Auth from '../../../Auth';

class RegisterEmail extends Component {
  constructor(props) {
    super(props);

    this.authSuscribe = Auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/enjoy/login');
      }
    });
  }

  componentWillUnmount() {
    this.authSuscribe();
  }

  render() {
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

RegisterEmail.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

RegisterEmail.defaultProps = {
  history: {},
};

export default RegisterEmail;
