import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import queryString from 'query-string';
import api from '../../../api';

function Portal(props) {
  return api.db.nuevaTrx('Curso 1', 70000).then((trx) => {
    console.log(queryString.parse(props.location.search));
    return (
      <section name="Portal">
        <form method="post" action={trx.api}>
          <input name="merchantId" type="hidden" value={trx.merchantId} />
          <input name="accountId" type="hidden" value={trx.accountId} />
          <input name="description" type="hidden" value={trx.description} />
          <input name="referenceCode" type="hidden" value={trx.referenceCode} />
          <input name="amount" type="hidden" value={trx.amount} />
          <input name="tax" type="hidden" value={trx.tax} />
          <input name="taxReturnBase" type="hidden" value={trx.taxReturnBase} />
          <input name="currency" type="hidden" value={trx.currency} />
          <input name="signature" type="hidden" value={trx.signature} />
          <input name="test" type="hidden" value="1" />
          <input name="buyerEmail" type="hidden" value={trx.buyerEmail} />
          <input name="extra1" type="hidden" value={trx.extra1} />
          <input name="responseUrl" type="hidden" value="http://alegratuvida.com/enjoy/portal/" />
          <input name="confirmationUrl" type="hidden" value="http://alegratuvida.com:55880/payu" />
          <input name="Submit" type="submit" value="Enviar" />
        </form>
      </section>
    );
  });
}

export default Portal;
