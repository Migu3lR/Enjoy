import React, { Component } from 'react';

import api from '../../../api';
import Linea from './Linea';

class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineas: [],
    };
  }

  componentDidMount() {
    api.base.bindToState('/lineas', {
      context: this,
      state: 'lineas',
      asArray: true,
    });
  }

  render() {
    return (
      <section name="Cursos">
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

export default Cursos;
