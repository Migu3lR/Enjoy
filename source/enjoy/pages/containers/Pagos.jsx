import React, { Component } from 'react';

import queryString from 'query-string';
import api from '../../../api';

class Pagos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrx: {},
    };
    console.log(queryString.parse(props.location.search));
  }

  componentDidMount() {
    api.db.nuevaTrx('Curso 1', 70000).then((newTrx) => {
      this.setState({
        newTrx,
      });
    });
  }

  render() {
    return (
      <section name="Pagos">
        <form method="post" action={this.state.newTrx.api}>
          <input name="merchantId" type="hidden" value={this.state.newTrx.merchantId} />
          <input name="accountId" type="hidden" value={this.state.newTrx.accountId} />
          <input name="description" type="hidden" value={this.state.newTrx.description} />
          <input name="referenceCode" type="hidden" value={this.state.newTrx.referenceCode} />
          <input name="amount" type="hidden" value={this.state.newTrx.amount} />
          <input name="tax" type="hidden" value={this.state.newTrx.tax} />
          <input name="taxReturnBase" type="hidden" value={this.state.newTrx.taxReturnBase} />
          <input name="currency" type="hidden" value={this.state.newTrx.currency} />
          <input name="signature" type="hidden" value={this.state.newTrx.signature} />
          <input name="test" type="hidden" value={'1'} />
          <input name="buyerEmail" type="hidden" value={this.state.newTrx.buyerEmail} />
          <input name="extra1" type="hidden" value={this.state.newTrx.extra1} />
          <input name="algorithmSignature" type="hidden" value={this.state.newTrx.algorithmSignature} />
          <input name="responseUrl" type="hidden" value={'http://alegratuvida.com/enjoy/pagos/'} />
          <input name="confirmationUrl" type="hidden" value={'http://alegratuvida.com:55880/payu'} />
          <input name="Submit" type="submit" value={'PAGAR'} />
        </form>
      </section>
    );
  }
}

export default Pagos;
