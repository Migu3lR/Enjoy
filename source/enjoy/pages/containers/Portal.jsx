import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import queryString from 'query-string';
import api from '../../../api';
import sha256 from '../../../CryptoSHA256';

function Portal(props) {
  console.log(api.auth.currentUser());

  const transaccion = {
    Fecha: Date(),
    //ClienteID: api.auth.currentUser().uid,
    ValorTotal: 10000,
    Iva: 0,
    BaseIva: 0,
    Moneda: 'COP',
    Descripcion: 'Transaccion de prueba',
    Estado: 0,
    EstadoDet: 0,
  };

  const firma = {
    apiKey: null,
    merchantId: null,
    newTrx: api.db.ref().child('transacciones').push().key,
    valor: transaccion.ValorTotal,
    moneda: transaccion.Moneda,
  };

  api.db.ref('/parametros/seguridad').once('value')
  .then((seguridad) => {
    firma.apiKey = seguridad.PUapiKey;
    firma.merchantId = seguridad.PUmerchantId;
    console.log(firma);
  });

console.log(firma);

  console.log(sha256(firma));

  /*const newTrx = api.db.ref().child('transacciones').push().key;

  const updates = {};
  updates[`/transacciones/${newTrx}`] = transaccion;
  updates[`/usuarios/${transaccion.ClienteID}/${newTrx}`] = transaccion;

  api.db.ref.update(updates);
*/
  console.log(queryString.parse(props.location.search));
  return (
    <section name="Portal">
      <form method="post" action="https://sandbox.gateway.payulatam.com/ppp-web-gateway/">
        <input name="merchantId" type="hidden" value="508029" />
        <input name="accountId" type="hidden" value="512321" />
        <input name="description" type="hidden" value="Test PAYU" />
        <input name="referenceCode" type="hidden" value="ALG-00004" />
        <input name="amount" type="hidden" value="10000" />
        <input name="tax" type="hidden" value="0" />
        <input name="taxReturnBase" type="hidden" value="0" />
        <input name="currency" type="hidden" value="COP" />
        <input name="signature" type="hidden" value="3e74bfda62b4581ea7a339fd75505404" />
        <input name="test" type="hidden" value="1" />
        <input name="buyerEmail" type="hidden" value="ingmromero34@gmail.com" />
        <input name="responseUrl" type="hidden" value="http://alegratuvida.com/enjoy/portal/" />
        <input name="confirmationUrl" type="hidden" value="http://alegratuvida.com:55880/payu" />
        <input name="Submit" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Portal;
