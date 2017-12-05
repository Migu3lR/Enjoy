import React, { PropTypes } from 'react';

import InitCustomerForm from '../../InitCustomer/containers/InitCustomerForm';
import api from '../../../api';

function InitCustomer(props) {
  function omitir() {
    api.base.update(`/usuarios/${props.user.uid}`, {
      data: { firstLogin: false },
    });
  }
  return (
    <section name="login">
      <div className="row">
        <div className="col s12">
          <h3 className="center-align">!Hola, bienvenido a Enjoy Life Pro NET¡</h3>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m8 offset-m2 ">
          <div className="card">
            <div className="card-content">
              <InitCustomerForm />
            </div>
            <div className="card-action">
              <a href="#!" onClick={omitir}>Omitir</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

InitCustomer.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

InitCustomer.defaultProps = {
  user: null,
};

export default InitCustomer;
