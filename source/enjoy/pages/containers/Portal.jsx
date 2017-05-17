import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

import api from '../../../api';
import Linea from './Linea';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineas: [],
    };
  }

  componentWillMount() {
    api.db.bindState(this, 'lineas', '/lineas');
  }

  componentDidUpdate() {
    console.log(this.state.lineas);
  }

  render() {
    return (
      <section name="Portal">
        <div className="container">
          <div className="row">
            {this.state.lineas
               .map(linea => (
                 <Linea key={linea['.key']} {...linea} />
               ))
              }
          </div>
        </div>
      </section>
    );
  }
}

reactMixin(Portal.prototype, ReactFireMixin);

export default Portal;
