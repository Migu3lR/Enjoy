import React, { Component } from 'react';

import SingleInput from '../../../shared/components/forms/SingleInput';

import api from '../../../api';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    api.auth.Login_Email(this.state.email, this.state.password);

    this.handleClearForm(e);
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <div className="row">
          <div className="col s12">
            <SingleInput
              inputType={'email'}
              title={'Correo Electrónico'}
              name={'email'}
              controlFunc={this.handleEmailChange}
              content={this.state.email}
              validate
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <SingleInput
              inputType={'password'}
              title={'Contraseña'}
              name={'password'}
              controlFunc={this.handlePasswordChange}
              content={this.state.password}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Inicia Sesión
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
