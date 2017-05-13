import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import queryString from 'query-string';

function Portal(props) {
  console.log(1);
  console.log(queryString.parse(props.location.search));
    return (
      <section name="Portal">
      <form method="post" action="https://sandbox.gateway.payulatam.com/ppp-web-gateway/">
        <input name="merchantId"    type="hidden"  value="508029"   />
        <input name="accountId"     type="hidden"  value="512321" />
        <input name="description"   type="hidden"  value="Test PAYU"  />
        <input name="referenceCode" type="hidden"  value="ALG-00002" />
        <input name="amount"        type="hidden"  value="10000"   />
        <input name="tax"           type="hidden"  value="0"  />
        <input name="taxReturnBase" type="hidden"  value="0" />
        <input name="currency"      type="hidden"  value="COP" />
        <input name="signature"     type="hidden"  value="e3892fe9df6f56fb3de53186a786ce4d"  />
        <input name="test"          type="hidden"  value="1" />
        <input name="buyerEmail"    type="hidden"  value="ingmromero34@gmail.com" />
        <input name="responseUrl"    type="hidden"  value="http://alegratuvida.com/enjoy/portal/transaccion" />
        <input name="confirmationUrl"    type="hidden"  value="http://alegratuvida.com:5000" />
        <input name="Submit"        type="submit"  value="Enviar" />
      </form>
      </section>
    );
}

export default Portal;