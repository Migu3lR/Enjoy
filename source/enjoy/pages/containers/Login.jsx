import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../Login/containers/LoginForm';

import Auth from '../../../Auth';

class Login extends Component {
  constructor(props) {
    super(props);

    this.authSuscribe = () => {
      Auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.history.push('/enjoy');
        }
      });
    };
  }

  componentWillUnmount() {
    this.authSuscribe();
  }

  render() {
    return (
      <section name="login">
        <div className="row">
          <div className="col s12">
            <h3 className="center-align">Iniciar Sesión</h3>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 offset-m3 l4 offset-l4">
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
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Login.defaultProps = {
  history: {},
};

export default Login;
