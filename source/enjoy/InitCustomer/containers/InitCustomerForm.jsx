import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../../../shared/components/forms/CheckboxOrRadioGroup';
import Loading from '../../../shared/components/Loading';

import api from '../../../api';

class InitCustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interestSelections: [],
      selectedInterest: [],
      loading: true,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInterestSelection = this.handleInterestSelection.bind(this);
  }

  componentDidMount() {
    api.base.bindToState('parametros/cuentas/firstLoginQuest', {
      context: this,
      state: 'interestSelections',
      asArray: true,
      then: () => {
        this.setState({
          loading: false,
        });
      },
    });
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
      const tags = [];
      this.state.selectedInterest.forEach( (key) => {
	this.state.interestSelections[key].tags.split(",").forEach( (tag) => {
	  if (tags.indexOf(tag.trim()) > -1) {
	    tags.push(tag.trim());
	  }
	});
      });
      const formPayload = {
        selectedInterest: tags,
      };

      console.log('Send this in a POST request:', formPayload);
      this.handleClearForm(e);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }
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
