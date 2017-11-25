import React from 'react';

import Plan from '../components/Plan';

function Planes() {
  return (
    <section name="colores">
      <div className="container">
        <div className="row" />
        <div className="row">
          <div className="col s12 m5 l3">
            <Plan
              color={'blue'}
              title={'INICIACIÓN'}
              price={'0'}
              desc={[
                'Acceso a los cursos de iniciación',
              ]}
            />
          </div>
          <div className="col s12 m5 l3">
            <Plan
              color={'green'}
              title={'MENSUAL'}
              price={'100.000'}
              desc={[
                'Acceso a todos los cursos',
                'Beneficios del sistema de puntos',
                'Beneficios del sistema de referidos',
              ]}
              important
            />
          </div>
          <div className="col s12 m5 l3">
            <Plan
              color={'yellow'}
              title={'ANUAL'}
              price={'90.000'}
              desc={[
                'Acceso a todos los cursos',
                'Beneficios del sistema de puntos',
                'Beneficios del sistema de referidos',
              ]}
            />
          </div>
          <div className="col s12 m5 l3">
            <Plan
              color={'red'}
              title={'ANUAL x2'}
              price={'85.000'}
              desc={[
                'Acceso a todos los cursos',
                'Beneficios del sistema de puntos',
                'Beneficios del sistema de referidos',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planes;
