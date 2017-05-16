import React, { Component, PropTypes } from 'react';

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

  render() {
    return (
      <div className="section">
        <ul className="collapsiblelinea" data-collapsible="expandable">
          <li>
            <div className="collapsible-header">
              <h4>
                <i className="material-icons">trending_up</i>
                {this.state.nombre}
              </h4>
              <p>{this.state.descripcion}</p>
            </div>
            <div className="collapsible-body">
              <ul>
                {this.state.cursos
                  .map(curso => (
                    <li>{curso.nombre}</li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Linea.propTypes = {
  descripcion: PropTypes.string,
  nombre: PropTypes.string,
};

Linea.defaultProps = {
  descripcion: '',
  nombre: '',
};

export default Linea;
