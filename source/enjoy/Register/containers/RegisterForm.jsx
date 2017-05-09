import React, { Component } from 'react';

import SingleInput from '../../../shared/components/forms/SingleInput';

import api from '../../../api';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      displayName: '',
      fullName: '',

      ValidPasswordConfirm: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleDisplayNameChange = this.handleDisplayNameChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.ValidPasswordConfirm = this.ValidPasswordConfirm.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    this.Valid_passwordConfirm();
  }

  handlePasswordConfirmChange(e) {
    this.setState({ passwordConfirm: e.target.value });
    this.ValidPasswordConfirm();
  }

  handleDisplayNameChange(e) {
    this.setState({ displayName: e.target.value });
  }

  handleFullNameChange(e) {
    this.setState({ fullName: e.target.value });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
      passwordConfirm: '',
      displayName: '',
      fullName: '',
    });
  }

  ValidPasswordConfirm() {
    this.setState({ ValidPasswordConfirm: (this.state.password === this.state.passwordConfirm) ? 'valid' : 'invalid' });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    api.auth.Register_Email(
      this.state.email,
      this.state.password,
      this.state.displayName,
      this.state.fullName,
    );

    this.handleClearForm(e);
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <div className="row">
          <div className="col s12 m6">
            <SingleInput
              inputType={'text'}
              title={'Nombre de Usuario'}
              name={'displayName'}
              controlFunc={this.handleDisplayNameChange}
              content={this.state.displayName}
              validate
              required
            />
          </div>
          <div className="col s12 m6">
            <SingleInput
              inputType={'text'}
              title={'Nombre y Apellido'}
              name={'fullName'}
              controlFunc={this.handleFullNameChange}
              content={this.state.fullName}
              validate
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <SingleInput
              inputType={'email'}
              title={'Correo Electrónico'}
              name={'email'}
              controlFunc={this.handleEmailChange}
              content={this.state.email}
              validate
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <SingleInput
              inputType={'password'}
              title={'Contraseña'}
              name={'password'}
              controlFunc={this.handlePasswordChange}
              content={this.state.password}
              required
            />
          </div>
          <div className="col s12 m6">
            <SingleInput
              inputType={'password'}
              title={'Confirmar Contraseña'}
              name={'passwordConfirm'}
              controlFunc={this.handlePasswordConfirmChange}
              content={this.state.passwordConfirm}
              required
              isValid={this.state.ValidPasswordConfirm}
              dataError={'La contraseña no coincide.'}
              dataSuccess={'Confirmación de contraseña valida.'}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Registrarse
            </button>
          </div>
        </div>

      </form>
    );
  }
}

export default RegisterForm;
