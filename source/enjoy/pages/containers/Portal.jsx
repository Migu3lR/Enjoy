import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

import api from '../../../api';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineas: {},
    };
  }

  componentWillMount() {
    api.db.bindState(this, 'lineas', '/lineas');
  }

  componentDidMount() {
    console.log(this.state.lineas);
  }

  render() {
    return (
      <section name="Portal">
        
      </section>
    );
  }
}

reactMixin(Portal.prototype, ReactFireMixin);

export default Portal;
