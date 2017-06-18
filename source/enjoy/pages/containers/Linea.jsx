import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class Linea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="col s12 m6">
        <Collapsible>
          <CollapsibleItem header={this.props.nombre} icon={'trending_up'}>
            <ul>
              {Object.keys(this.props.cursos)
                .map(key => (
                  <li key={key}>
                    <Link to={`/enjoy/portal/linea/${this.props['.key']}/curso/${key}`}>
                      {this.props.cursos[key].nombre}
                    </Link>  
                  </li>
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
