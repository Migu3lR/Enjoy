import React, { Component, PropTypes } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class Linea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: props.cursos,
      descripcion: props.descripcion,
      nombre: props.nombre,
    };
    console.log(props.cursos);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cursos: nextProps.cursos,
      descripcion: nextProps.descripcion,
      nombre: nextProps.nombre,
    });
    console.log(nextProps.cursos);
  }


  render() {
    return (
      <div className="col s12 m6">
        <Collapsible>
          <CollapsibleItem header={this.state.nombre} icon={'trending_up'}>
            <ul>
              {Object.keys(this.state.cursos)
                .map(key => (
                  <li key={key}>{this.state.cursos[key].nombre}</li>
                ))
              }
            </ul>
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

Linea.propTypes = {
  cursos: PropTypes.shape({
    clases: PropTypes.object,
    descripcion: PropTypes.string,
    nombre: PropTypes.string,
  }),
  descripcion: PropTypes.string,
  nombre: PropTypes.string,
};

Linea.defaultProps = {
  cursos: {},
  descripcion: '',
  nombre: '',
};

export default Linea;
