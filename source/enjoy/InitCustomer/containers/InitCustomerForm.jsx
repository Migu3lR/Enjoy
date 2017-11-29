import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../../../shared/components/forms/CheckboxOrRadioGroup';

import api from '../../../api';

class InitCustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interestSelections: [
        'Entrenamientos para Jóvenes que quieren ingresar a la universidad (Introducción a la vida universitaria)',
        'Entrenamientos para Jóvenes estudiantes e investigadores (libros en video)',
        'Entrenamientos para Profesionales (cursos de actualización)',
        'Entrenamientos para emprendedores “Soy emprendedor”',
        'Entrenamientos para Empresas MyPimes',
        'Entrenamientos para Grandes empresas (Módulo para organizaciones)',
        'Educación para Adultos Mayores',
        'Educación Especializada (Personas en las cárceles, educación para el post-conflicto)',
        'Animación socio-cultural y Desarrollo Comunitario',
      ],
      selectedInterest: [],
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInterestSelection = this.handleInterestSelection.bind(this);
  }

  handleInterestSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedInterest.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedInterest.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.selectedInterest, newSelection];
    }
    this.setState({ selectedInterest: newSelectionArray });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      selectedInterest: [],
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    if (this.state.selectedInterest.length < 1) api.handleAuthErrors('InitCustomer/none-selected');
    else {
      const formPayload = {
        selectedInterest: this.state.selectedInterest,
      };

      console.log('Send this in a POST request:', formPayload);
      this.handleClearForm(e);
    }
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>¿En que tipo de entrenamientos está interesado?</h5>
        <CheckboxOrRadioGroup
          title={''}
          name={'Interest'}
          type={'checkbox'}
          controlFunc={this.handleInterestSelection}
          options={this.state.interestSelections}
          selectedOptions={this.state.selectedInterest}
        />
        <br />
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Guardar cambios"
        />
      </form>
    );
  }
}

export default InitCustomerForm;
