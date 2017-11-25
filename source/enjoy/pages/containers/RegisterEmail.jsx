import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import RegisterForm from '../../Register/containers/RegisterForm';
import OauthAll from '../components/OauthAll';

import Auth from '../../../Auth';

class RegisterEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oauth: null,
    };

    this.authSuscribe = () => {
      Auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.history.push('/enjoy');
        }
      });
    };
    this.authSuscribe();
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
          <div className="col s10 offset-s1 m10 offset-m1 l7 offset-l1">
            <div className="card">
              <div className="card-content">
                <RegisterForm />
              </div>
              <div className="card-action">
                ¿Ya tienes cuenta? <Link to="/enjoy/login">Inicia Sesión</Link>
              </div>
            </div>
          </div>

          <div className="col s10 offset-s1 m6 offset-m3 l3">
            <OauthAll />
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
