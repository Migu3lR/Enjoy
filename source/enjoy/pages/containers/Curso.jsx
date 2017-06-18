import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

import api from '../../../api';

class Curso extends Component {
  constructor(props){
    super(props);

    this.state = {
      cursos:{},
    }
  }

  componentWillMount() {
    api.db.bindState(this, 'cursos', `/lineas/${this.props.match.params.lid}/cursos/${this.props.match.params.cid}`,'Obj');
  }

  render() {
    return(
      <section>
        <p> Este es el curso {this.state.cursos.nombre} </p>
      </section>
    );
  }

}

reactMixin(Curso.prototype, ReactFireMixin);

export default Curso;
