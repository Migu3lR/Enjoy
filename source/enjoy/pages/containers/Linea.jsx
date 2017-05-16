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
      <div className="col m6">
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
                {Object.keys(this.state.cursos)
                  .forEach(key => (
                    <li key={key}>{this.state.cursos[key].nombre}</li>
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
